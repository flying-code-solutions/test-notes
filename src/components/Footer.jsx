import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        Training project. Styles &copy; Angela Yu/App Brewery, rest &copy;
        Flying Code Solutions {year}
      </p>
    </footer>
  );
}

export default Footer;
