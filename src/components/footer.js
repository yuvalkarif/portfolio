import React from "react"
import { FooterWrapper } from "../styles/footer.styles"
import GithubIcon from "../assets/github-icon-white.svg"
import AccountIcon from "../assets/account.svg"
import EmailIcon from "../assets/email.svg"
import LanguageIcon from "../assets/lang.svg"
import LocationIcon from "../assets/location.svg"

function Footer() {
  return (
    <FooterWrapper id={"contact-section"}>
      <div>
        <span>
          <AccountIcon className="footer-icon" />
          Yuval Karif{" "}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yuvalkarif"
        >
          <span>
            <GithubIcon className="footer-icon" />
            github.com/yuvalkarif
          </span>
        </a>

        <span>
          <LocationIcon className="footer-icon" />
          Based in Herzliya, Israel
        </span>
        <span>
          <LanguageIcon className="footer-icon" />
          Created in October 2021
        </span>
      </div>
    </FooterWrapper>
  )
}

export default Footer
