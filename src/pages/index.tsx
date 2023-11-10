import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { title } from "process";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="welcome to my dev sticker shop">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home"></Seo>;
