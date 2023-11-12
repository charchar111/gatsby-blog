import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import { title } from "process";
import Seo from "../components/Seo";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  console.log(data);
  return (
    <Layout title="welcome to my dev sticker shop">
      <div className="main-banner">
        <StaticImage
          height={500}
          alt="stickers on the wall"
          src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></StaticImage>
      </div>
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker, index) => (
          <article key={index}>
            <Link to={`/products/${sticker.id}`}>
              <GatsbyImage
                alt={sticker.name ? sticker.name : ""}
                image={getImage(sticker.preview?.gatsbyImageData!)!}
              ></GatsbyImage>

              <h2>{sticker.name}</h2>
              <h4>{sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home"></Seo>;
