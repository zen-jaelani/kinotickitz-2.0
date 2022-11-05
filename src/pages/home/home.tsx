import React from "react";
import "../../sass/main.scss";
import logo from "../../assets/logo.svg";

type Props = {};

export default function Home({}: Props) {
  return (
    <main data-theme="light" className="main-layout">
      <header className="main-header">
        <img src={logo} alt="logo" className="logo" />

        <nav>
          <a href="/">Home</a>
          <a href="/" style={{ flexGrow: 1, textAlign: "start" }}>
            List Movie
          </a>
          <a href="/">Sign In</a>
        </nav>
      </header>
      <article className="main-article">Article</article>
      <footer className="main-footer">Footer</footer>
    </main>
  );
}
