import React from "react";
import Info from "./Info";
import "../Styles/Main.css";
import { Link } from "react-router-dom";
import article from "../Assets/article.png";

function Blog() {
  return (
    <section id="blog-section">
    <div className="blog">
      <Info heading="BLOG" sub="My ideas." />
      <div className="blog-item">
        <Link to="https://www.linkedin.com/posts/ikenna-noble-asiegbulam_in-this-article-i-discussed-frontend-technologies-activity-7214004276635840512-PiDP?utm_source=share&utm_medium=member_desktop">
          <img src={article} alt="" />
        </Link>
        <h3>The Frontend Frontier: A dive into frontend technologies.</h3>
        <p>
          In this article, I discussed frontend technologies and also did a
          little <br /> comparison between React and Angular.
        </p>
      </div>
    </div>
    </section>
  );
}

export default Blog;
