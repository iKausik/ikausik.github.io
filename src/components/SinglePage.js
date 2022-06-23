import React from "react";
import { IconButton, Button } from "@material-ui/core";
import {
  LinkedIn,
  Twitter,
  GitHub,
  Instagram,
  Email,
} from "@material-ui/icons";

import Ethereum from "../assets/tech/ethereum.svg";
import Solidity from "../assets/tech/solidity.svg";
import TypeScript from "../assets/tech/typescript.svg";
import JavaScript from "../assets/tech/javascript.svg";
import Next from "../assets/tech/next-js.svg";
import Node from "../assets/tech/node-js-logo.svg";
import PostgreSQL from "../assets/tech/postgresql.svg";
import Tailwindcss from "../assets/tech/tailwindcss.svg";
import Git from "../assets/tech/git.svg";
import Terminal from "../assets/tech/terminal.svg";

// Projects Image
import Project1 from "../assets/projects/project-a.png";
import Project2 from "../assets/projects/project-b.png";
import Project3 from "../assets/projects/project-c.png";
import Project4 from "../assets/projects/project-d.png";
import Project5 from "../assets/projects/project-e.png";
import Project6 from "../assets/projects/project-f.png";
import Project7 from "../assets/projects/project-g.png";
import Project8 from "../assets/projects/web3-1.png";
import Project9 from "../assets/projects/web3-2.png";

import ProfilePic from "../assets/ProfilePic.jpg";

const SinglePage = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="ProfilePic">
          <img
            alt="Kausik"
            src={ProfilePic}
            width="100%"
            height="100%"
            // sx={{ width: 112, height: 112 }}
          />
        </div>

        <h2>
          <span className="normal-text">
            Hi, <br />
            My name is{" "}
          </span>
          <span className="hightlight-text"> Kausik Das.</span> <br />
          <span className="normal-text">I build for the </span>{" "}
          <span className="hightlight-text">
            <span class="word w1">Web3.</span>
            <span class="word w2">Frontend.</span>
            <span class="word w3">Backend.</span>
          </span>
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
            href="https://twitter.com/ikausik_"
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
            src={Ethereum}
            alt="Ethereum"
            title="Ethereum"
            width="35"
            height="35"
            style={{ margin: "10px" }}
          />
          <img
            src={Solidity}
            alt="Solidity"
            title="Solidity"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={TypeScript}
            alt="TypeScipt"
            title="TypeScipt"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Next}
            alt="Next"
            title="Next.js"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <img
            src={Node}
            alt="Node"
            title="Node.js"
            width="30"
            height="30"
            style={{ margin: "10px" }}
          />
          <br />
          <img
            src={JavaScript}
            alt="JavaScipt"
            title="JavaScript"
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
          <img
            src={Tailwindcss}
            alt="Tailwindcss"
            title="Tailwindcss"
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
            width="35"
            height="35"
            style={{ margin: "10px" }}
          />
        </div>
      </div>

      <div className="main">
        <h1>My Work</h1>
        <div className="container">
          <div className="project">
            <img src={Project8} alt="SharedWallet" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://sharedwallet-dapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/SharedWallet-DApp"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  DApp Frontend Code
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/SharedWallet-Smart-Contract"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Smart Contract Code
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project9} alt="PandaCoin" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://pandacoin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/panda-coin-DApp"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  DApp Frontend Code
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/panda-coin-ERC20"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Smart Contract Code
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project1} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://nike-sneakshop.netlify.app/shop/2/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/nike-shop-rebuild-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Frontend Code
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/nike-shop-rebuild-backend"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Backend Code
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project2} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://live-crypto-watch.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/live-crypto-watch"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Source Code
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project3} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://kdintelligent.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/kdintelligent-agency-website"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Source Code
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project4} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://www.figma.com/file/4RvQQgD2tc2Ev7gk498jJ6/Property-Listing-Website-Marketplace?node-id=0%3A1"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Design
                </Button>
              </a>
              {/* <br />
              <br /> */}
              {/* <Button
                variant="contained"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#0099ff",
                  color: "#ffffff",
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Source Code
              </Button> */}
            </div>
          </div>
          <div className="project">
            <img src={Project5} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://www.figma.com/file/dl5s8IPyLR0SQiha7wNSDu/Food-Ordering-Web-App-PWA"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Design
                </Button>
              </a>
              {/* <br />
              <br /> */}
              {/* <Button
                variant="contained"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#0099ff",
                  color: "#ffffff",
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Source Code
              </Button> */}
            </div>
          </div>
          <div className="project">
            <img src={Project6} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a href="/">
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  See Live
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/ikausik.github.io"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Source Code
                </Button>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={Project7} alt="SneakShop" width="100%" height="auto" />
            <div className="hoverLayer"></div>
            <div className="buttonLayer">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=KausikDas.theme-jupiter"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#ffcc00",
                    color: "#000000",
                    fontSize: "0.9em",
                    fontWeight: "bold",
                  }}
                >
                  Install Theme
                </Button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/iKausik/Jupiter-Theme-Official"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "#0099ff",
                    color: "#ffffff",
                    fontSize: "0.7em",
                    fontWeight: "bold",
                  }}
                >
                  Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
