import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, PageProps, graphql } from "gatsby";

export default function Bloging({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log();
  return (
    <Layout title="bloooooooog!">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <Link key={index} to={`/blogs/${file.frontmatter?.slug}`}>
            <article>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>

              <p>{file.excerpt}</p>
            </article>
            {/* <hr></hr> */}
          </Link>
        ))}
      </section>
      {/* {data.allFile.nodes.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))} */}
    </Layout>
  );
}

// export const potato = graphql`
//   query potato {
//     allFile {
//       nodes {
//         name
//         absolutePath
//       }
//     }
//   }
// `;

export const blogMd1 = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          category
          date(formatString: "YY.MM.DD(MMMM.dddd)")
          title
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="blog"></Seo>;
