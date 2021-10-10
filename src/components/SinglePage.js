import React from "react";
import { IconButton } from "@material-ui/core";
import {
  LinkedIn,
  Twitter,
  GitHub,
  Instagram,
  Email,
} from "@material-ui/icons";

import JavaScript from "../assets/tech/javascript.svg";
import ReactSVG from "../assets/tech/react.svg";
import Node from "../assets/tech/node-js-logo.svg";
import Express from "../assets/tech/express.svg";
import PostgreSQL from "../assets/tech/postgresql.svg";
import HTML from "../assets/tech/html.svg";
import CSS from "../assets/tech/css.svg";
import Sass from "../assets/tech/sass.svg";
import Git from "../assets/tech/git.svg";
import Terminal from "../assets/tech/terminal.svg";

const SinglePage = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <img src="/profilePic.jpg" alt="" />

        <h2>
          Hi, <br />
          My name is <span className="hightlight-text">Kausik Das.</span> <br />
          I build for the <span className="hightlight-text">Web.</span>
        </h2>

        <div className="social-icons">
          <a href="https://github.com/ikausik" target="_blank" rel="noreferrer">
            <IconButton style={{ color: "#000066" }} size="medium">
              <GitHub />
            </IconButton>
          </a>

          <a
            href="https://linkedin.com/in/ikausik"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton style={{ color: "#000066" }} size="medium">
              <LinkedIn />
            </IconButton>
          </a>

          <a
            href="https://twitter.com/kausik47"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton style={{ color: "#000066" }} size="medium">
              <Twitter />
            </IconButton>
          </a>

          <a
            href="https://instagram.com/ikausik"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton style={{ color: "#000066" }} size="medium">
              <Instagram />
            </IconButton>
          </a>

          <a href="mailto:ikausik7@gmail.com" target="_blank" rel="noreferrer">
            <IconButton style={{ color: "#000066" }} size="medium">
              <Email />
            </IconButton>
          </a>
        </div>

        <br />
        <div className="tech-stack" style={{ width: "fit-content" }}>
          <hr />
          <img
            src={JavaScript}
            alt="JavaScipt"
            title="JavaScript"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={ReactSVG}
            alt="React"
            title="React"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Node}
            alt="Node"
            title="NodeJS"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Express}
            alt="Express"
            title="ExpressJS"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={PostgreSQL}
            alt="PostgreSQL"
            title="PostgreSQL"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <br />
          <img
            src={HTML}
            alt="HTML"
            title="HTML"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={CSS}
            alt="CSS"
            title="CSS"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Sass}
            alt="Sass"
            title="Sass"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Git}
            alt="Git"
            title="Git"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Terminal}
            alt="Terminal"
            title="Terminal"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
        </div>
      </div>

      <div className="main">
        <h1>My Work</h1>
        <div className="container">
          <div className="project">project 1</div>
          <div className="project">project 2</div>
          <div className="project">project 3</div>
          <div className="project">project 4</div>
          <div className="project">project 5</div>
          <div className="project">project 6</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
