import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import Contact from "./Contact"
import { Link } from "gatsby"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

const desktopButton = (
  <button
    className="popupWindowLinkButton"
    style={{ cursor: "pointer" }}
    onClick={() => {
      const win = new WinBox({
        title: "Contact me",
        width: "80%",
        height: "80%",
        x: "center",
        y: "center",
        onfocus: function () {
          this.removeClass("wb-no-focus")
          this.addClass("wb-focus")
        },
        onblur: function () {
          this.removeClass("wb-focus")
          this.addClass("wb-no-focus")
        },
      })

      ReactDOM.render(
        React.createElement(Contact, {
          close: () => win.close(),
        }),
        win.body
      )
    }}
  >
    Contact
  </button>
)

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">home</Link> {" | "}
        {/* {checkScreenWidthMobile() ? (
          <Link to="/contact">Contact</Link>
        ) : (
          desktopButton
        )} */}
        <a
          href="https://drive.google.com/drive/u/0/folders/1aGNpxupxK0jw47-tu1qjBotrAnSDn2ew"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>{" "}
        {" | "}
        <a
          href="https://www.linkedin.com/in/kartikmehta17"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        © {new Date().getFullYear()} Kartik Mehta
      </span>
    </footer>
  )
}

export default Footer
