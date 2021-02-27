import React from "react";

export default function Footer() {
  return (
    <>
      <span className="footerText">
        © {new Date().getFullYear()} |{` `}
        <a href="mailto:christianturner@hey.com">christianturner@hey.com</a> |
        {` `}
        <a href="https://cdt.works">cdt.works</a> |{` `}
      </span>
    </>
  );
}
