import React from "react"
import HtmlIcon from "../assets/html-5.svg"
import CssIcon from "../assets/css-3.svg"
import ReactIcon from "../assets/reactjs-icon.svg"
import SassIcon from "../assets/sass.svg"
import TSIcon from "../assets/typescript-icon.svg"
import JSIcon from "../assets/javascript.svg"
import NodeJSIcon from "../assets/nodejs-icon.svg"
import ExpressIcon from "../assets/express.svg"
import MongoDBIcon from "../assets/mongodb.svg"
import PassportJSIcon from "../assets/passport.svg"
import FirebaseIcon from "../assets/firebase.svg"
import GitIcon from "../assets/git-icon.svg"
import GithubIcon from "../assets/github-icon.svg"
import WebpackIcon from "../assets/webpack.svg"
import LinuxIcon from "../assets/linux-tux.svg"
import NPMIcon from "../assets/npm-icon.svg"
import BabelIcon from "../assets/babel.svg"
import CsharpIcon from "../assets/c-sharp.svg"
import UnityIcon from "../assets/unity.svg"
import PhotoshopIcon from "../assets/photoshop.svg"
import EJSIcon from "../assets/ejs.svg"
import GraphQLIcon from "../assets/graphql.svg"
import NextJSIcon from "../assets/nextjs.svg"
import GatsbyIcon from "../assets/gatsby.svg"
import FigmaIcon from "../assets/figma.svg"
import PugIcon from "../assets/pug.svg"
import { Wrapper } from "../styles/skills.styles"

function Skills() {
  return (
    <Wrapper id={"skills-section"}>
      <div>
        <h2>Skills and Tools</h2>
        <div>
          <ul>
            <h5>Front-end</h5>
            <div>
              <li>
                <HtmlIcon className="icon" />
                HTML
              </li>
              <li>
                <CssIcon className="icon" />
                CSS
              </li>
              <li>
                <SassIcon className="icon" />
                Sass
              </li>
              <li>
                <JSIcon className="icon" />
                JavaScript
              </li>
              <li>
                <TSIcon className="icon" />
                TypeScript
              </li>
              <li>
                <ReactIcon className="icon" />
                React
              </li>
              <li>
                <NextJSIcon className="icon" />
                NextJS
              </li>
              <li>
                <GatsbyIcon className="icon" />
                Gatsby
              </li>
            </div>
          </ul>
          <ul>
            <h5>Back-end</h5>
            <div>
              <li>
                <NodeJSIcon className="icon" />
                NodeJS
              </li>
              <li>
                <ExpressIcon className="icon" />
                Express
              </li>
              <li>
                <MongoDBIcon className="icon" />
                MongoDB
              </li>
              <li>
                <PassportJSIcon className="icon" />
                PassportJS
              </li>
              <li>
                <EJSIcon className="icon" />
                EJS
              </li>
              <li>
                <PugIcon className="icon" />
                Pug
              </li>
              <li>
                <FirebaseIcon className="icon" />
                Firebase
              </li>
              <li>
                <GraphQLIcon className="icon" />
                GraphQL
              </li>
            </div>
          </ul>
          <ul>
            <h5>Miscellaneous</h5>
            <div>
              <li>
                <GitIcon className="icon" />
                Git
              </li>
              <li>
                <GithubIcon className="icon" />
                Github
              </li>
              <li>
                <WebpackIcon className="icon" />
                Webpack
              </li>
              <li>
                <LinuxIcon className="icon" />
                Linux CLI
              </li>
              <li>
                <PhotoshopIcon className="icon" />
                Photoshop
              </li>
              <li>
                <FigmaIcon className="icon" />
                Figma
              </li>
              <li>
                <NPMIcon className="icon" />
                NPM
              </li>
              <li>
                <BabelIcon className="icon" />
                Babel
              </li>
              <li>
                <CsharpIcon className="icon" />
                C#
              </li>
              <li>
                <UnityIcon className="icon" />
                Unity
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Skills
