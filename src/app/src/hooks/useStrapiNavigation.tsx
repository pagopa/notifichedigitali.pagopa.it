import { graphql, useStaticQuery } from "gatsby";
import { NavigationTabsProps } from "../models/components";

export const useStrapiNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `);
  return data.strapiNavigation.items as Array<NavigationTabsProps>;
};
