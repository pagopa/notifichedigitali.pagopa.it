import { ThemeProvider } from "@emotion/react";
import { Box, Typography, Chip } from "@mui/material";
import { Footer } from "@pagopa/mui-italia/dist/components/Footer";
import { HeaderAccount } from "@pagopa/mui-italia/dist/components/HeaderAccount";
import { theme } from "@pagopa/mui-italia/dist/theme";
import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import BlocksRenderer from "../components/componentsRenderer";
import NavigationTabs from "../components/NavigationTabs";
import SEO from "../components/Seo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { useStrapiNavigation } from "../hooks/useStrapiNavigation";
import { SeoProps, StrapiPageProps } from "../models/components";
import isBrowser from "../utils/browser";

export default function Page({ data }: any) {
  const pagoPALink = {
    title: "PagoPA S.p.A.",
    label: "PagoPA S.p.A.",
    href: "https://www.pagopa.it/it/",
    ariaLabel: "Naviga verso la pagina pagopa.it",
  };
  const HELPDESK_URL: string = "https://www.pagopa.gov.it/it/helpdesk/";

  const page = data.strapiPage as StrapiPageProps;
  const navigationItems = useStrapiNavigation();
  const { metaTitle: defaultTitle }: SeoProps = useSiteMetadata();

  const onAssistanceClick = React.useCallback(() => {
    isBrowser && window.open(HELPDESK_URL, "_blank")?.focus();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderAccount
          enableLogin={false}
          rootLink={pagoPALink}
          onAssistanceClick={onAssistanceClick}
        />
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ whiteSpace: "nowrap", my: 2, ml: 2 }}
          >
            {defaultTitle}
          </Typography>
          <Chip label="Beta" size="small" color="primary" />
          <NavigationTabs items={navigationItems} />
        </Box>

        <BlocksRenderer blocks={page.blocks || []} />
        <Footer
          loggedUser={false}
          companyLink={pagoPALink}
          legalInfo={<></>}
          postLoginLinks={[]}
          preLoginLinks={{
            aboutUs: { title: "", links: [] },
            resources: { title: "", links: [] },
            followUs: {
              title: "",
              socialLinks: [],
              links: [],
            },
          }}
          currentLangCode={"it"}
          onLanguageChanged={
            (/* newLang */) => {
              console.log("Changed Language");
            }
          }
          languages={{
            it: { it: "italiano", en: "italian" },
            en: { it: "italiano", en: "italian" },
          }}
          onExit={(exitAction) => {
            exitAction();
          }}
          productsJsonUrl="https://dev.selfcare.pagopa.it/assets/products.json"
          hideProductsColumn={false}
        />
      </ThemeProvider>
    </>
  );
}

export const Head: HeadFC = ({ data }: any) => {
  const page = data.strapiPage;
  return <SEO {...page.seo} />;
};

export const query = graphql`
  query ($id: String) {
    strapiPage(id: { eq: $id }) {
      id
      slug
      title
      titlemobile
      seo {
        canonicalURL
        metaDescription
        metaImage {
          alternativeText
          url
        }
        metaTitle
        metaViewport
        metaSocial {
          description
          image {
            alternativeText
            url
          }
          title
          socialNetwork
        }
      }
      description
      blocks {
        ...Blocks
      }
      body {
        data {
          body
        }
      }
    }
  }
`;
