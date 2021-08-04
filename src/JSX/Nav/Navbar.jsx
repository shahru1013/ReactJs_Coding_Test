import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentPost } from "../../Redux/Distribution/action";
function Navbar({ loadCurrentPost }) {
  // open responsive nav
  const [isNavOpen, setIsNavOpen] = useState(false);
  const responsiveNavOpen = () => {
    isNavOpen
      ? (document.getElementById("responsive-nav").style.height = "0px")
      : (document.getElementById("responsive-nav").style.height = "100px");
    setIsNavOpen(!isNavOpen);
  };
  // Handle user input
  const [userInput, setUserInput] = useState(null);
  const inputValue = (e) => {
    const val = e.target.value;
    setUserInput(parseInt(val));
  };
  return (
    <div>
      <nav>
        <div className="nav-lists">
          <button className="res-option" onClick={() => responsiveNavOpen()}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="nav-items">
            <Link className="navigator" to="/">
              Home
            </Link>
            <Link className="navigator" to="/">
              Create a post
            </Link>
          </div>
          <div className="search-item">
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Items Id?"
                  onChange={(e) => inputValue(e)}
                />
                <Link
                  className="searchButton"
                  to={userInput !== null ? `/post?id=${userInput}` : ""}
                  onClick={() =>
                    userInput !== null ? loadCurrentPost(userInput) : () => {}
                  }
                >
                  <i className="s-icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="responsive-nav" id="responsive-nav">
          <div className="options">
            <ul>
              <li>
                <Link
                  to="/"
                  className="r-nav"
                  onClick={() => responsiveNavOpen()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="r-nav"
                  onClick={() => responsiveNavOpen()}
                >
                  Create a post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentPost: (id) => dispatch(loadCurrentPost(id)),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
