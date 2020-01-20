import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg  bg-dark mb-2 p-3">
        <Link className="navbar-brand text-white" to="/">
          $10 Wine Reviews
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-dark navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active text-white"
                    : "nav-link text-white"
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active text-white"
                    : "nav-link text-white"
                }
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/aboutWines"
                    ? "nav-link active text-white"
                    : "nav-link text-white"
                }
                to="/aboutWines"
              >
                Learn about Wines
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
