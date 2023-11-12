import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogProps {
  data: Queries.postDetailQuery;
  children: any;
}

export default function VlogPost({ data, children, ...a }: IBlogProps) {
  // console.log(a);

  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData
      ? data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData
      : null
  );

  return (
    <Layout title="">
      <GatsbyImage
        image={image as any}
        alt={data.mdx?.frontmatter?.title ? data.mdx?.frontmatter?.title : ""}
      />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query postDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        slug
        title
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 500)
          }
        }
      }
      body
    }
  }
`;

export const Head = ({ data }: IBlogProps) => (
  <Seo title={data.mdx?.frontmatter?.title!}></Seo>
);
