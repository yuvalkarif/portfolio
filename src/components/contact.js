import React from "react"
import { BottomContainer, MailButton } from "../styles/contact.styles"
import { Wrapper } from "../styles/contact.styles"
import CopyToClipboard from "react-copy-to-clipboard"
import { motion } from "framer-motion"

export default function Contact() {
  const email = "yuvalkarif3@gmail.com"
  const [isCopied, setCopied] = React.useState(false)

  const variants = {
    true: { scale: 1.15, rotate: 0 },
    false: { scale: 1, rotate: 0 },
  }
  const handleCopied = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 400)
  }
  return (
    <Wrapper>
      <div>
        <h2>Contact me</h2>
        <h3>
          and lets start our <strong>journey</strong> together!
        </h3>
        <BottomContainer>
          <CopyToClipboard text={email} onCopy={handleCopied}>
            <motion.span
              animate={isCopied ? "true" : "false"}
              variants={variants}
            >
              {isCopied ? "Copied !" : email}
            </motion.span>
          </CopyToClipboard>
          <a href={`mailto:${email}`}>
            <MailButton type="button">Direct Mail</MailButton>
          </a>
        </BottomContainer>
      </div>
    </Wrapper>
  )
}
