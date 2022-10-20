import { graphql } from "gatsby";
import * as React from "react";
import { StrapiBlock } from "../models/components";
import GridItem from "./GridItem";
import GridWalk from "./GridWalk";
import HeroInfoblock from "./HeroInfoblock";
import LinkComponent from "./Link";
import SEO from "./Seo";

const componentsMap: {
  [key: string]: (props: any) => JSX.Element;
} = {
  STRAPI__COMPONENT_SHARED_HERO: HeroInfoblock,
  STRAPI__COMPONENT_SHARED_LINK: LinkComponent,
  STRAPI__COMPONENT_SHARED_GRIDITEM: GridItem,
  STRAPI__COMPONENT_SHARED_GRID: GridWalk,
  STRAPI__COMPONENT_SHARED_SEO: SEO,
};

const Block = ({ block }: { block: StrapiBlock }) => {
  const Component = componentsMap[block.__typename];

  return !!Component ? <Component {...block} /> : null;
};

const BlocksRenderer = ({ blocks }: { blocks: Array<StrapiBlock> }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </>
  );
};

export const query = graphql`
  fragment Blocks on STRAPI__COMPONENT_SHARED_GRIDSTRAPI__COMPONENT_SHARED_HEROSTRAPI__COMPONENT_SHARED_LINKUnion {
    __typename
    ... on STRAPI__COMPONENT_SHARED_GRID {
      body {
        data {
          body
        }
      }
      title
      titlemobile
      variant
      items {
        body {
          data {
            body
          }
        }
        title
        titlemobile
        externalurl
        issequential
        image {
          alternativeText
          url
          localFile {
            childImageSharp {
              gatsbyImageData(height: 64, width: 64)
            }
            extension
            publicURL
          }
        }
        page {
          slug
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_HERO {
      body {
        data {
          body
        }
      }
      imageposition
      images {
        alternativeText
        url
        localFile {
          extension
          childImageSharp {
            gatsbyImageData(quality: 80)
            original {
              height
              width
            }
          }
        }
      }
      title
      titlemobile
      buttons {
        title
        titlemobile
        page {
          slug
        }
        externalurl
        body {
          data {
            body
          }
        }
        image {
          alternativeText
          url
          localFile {
            extension
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      extra {
        variant
        alert {
          variant
          severity
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_LINK {
      body {
        data {
          body
        }
      }
      titlemobile
      page {
        slug
      }
      title
      target
      externalurl
      image {
        alternativeText
        url
        localFile {
          extension
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlocksRenderer;
