import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Go Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/blogs">blog</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}
