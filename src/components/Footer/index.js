import React from "react";
import "../Footer/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Developed by:</strong>
          <a href="https://github.com/shukri74"><span className="icon"><i className="fab fa-github"></i></span>Shukri</a>&nbsp;
          <a href="https://github.com/Haroon-dev13"><span className="icon"><i className="fab fa-github"></i></span>Haroon</a>&nbsp;
          <a href="https://github.com/Shortms"><span className="icon"><i className="fab fa-github"></i></span>Jason</a>&nbsp; and
          <a href="https://github.com/eniolaxo"><span className="icon"><i className="fab fa-github"></i></span>Eniola</a>&nbsp;
        </p>
      </div>
    </footer>
    
       
  );
}


export default Footer;
