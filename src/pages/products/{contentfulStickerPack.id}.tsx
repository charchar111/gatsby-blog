import React from "react";
import Layout from "../../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  console.log(data);

  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage
        alt={data.contentfulStickerPack?.name!}
        image={getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)!}
      />
      <h3>{data.contentfulStickerPack?.price}$</h3>
    </Layout>
  );
}

export const data = graphql`
  query Product($id: String!) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;
