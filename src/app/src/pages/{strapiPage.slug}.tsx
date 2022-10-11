import { ThemeProvider } from "@emotion/react";
import { Footer, HeaderAccount, theme } from "@pagopa/mui-italia";
import { graphql, HeadFC } from "gatsby";
import * as React from "react";
import BlocksRenderer from "../components/componentsRenderer";
import NavigationTabs from "../components/NavigationTabs";
import SEO from "../components/Seo";
import { LangCode, NavigationTabsProps } from "../models/components";

export default function Page({ data }: any) {
  const pagoPALink = {
    title: "PagoPA S.p.A.",
    label: "PagoPA S.p.A.",
    href: "https://www.pagopa.it/it/",
    ariaLabel: "Naviga verso la pagina pagopa.it",
  };
  const HELPDESK_URL: string = "https://www.pagopa.gov.it/it/helpdesk/";

  const page = data.strapiPage;
  const navigationItems = data.strapiNavigation
    .items as Array<NavigationTabsProps>;

  const onAssistanceClick = React.useCallback(() => {
    window.open(HELPDESK_URL, "_blank")?.focus();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderAccount
          enableLogin={false}
          rootLink={pagoPALink}
          onAssistanceClick={onAssistanceClick}
        />
        <NavigationTabs items={navigationItems} />
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
    strapiNavigation {
      title
      items {
        body {
          data {
            body
          }
        }
        externalurl
        extra {
          id
        }
        image {
          alternativeText
          url
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        page {
          slug
        }
        reactcomponent
        target
        title
        titlemobile
      }
    }
  }
`;
