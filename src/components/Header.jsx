import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/react.svg"; // Replace with your logo

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // temporary, replace with real auth state
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      console.log("Searching for:", search);
      // You can navigate to search page or call API here
    }
  };

  return (
    <header className="sticky-top shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white container py-2">
        {/* Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Business Booster Logo"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-primary fs-5">Business Booster</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/templates" className="nav-link">
                Templates
              </NavLink>
            </li>

            {/* Categories Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/category/landing-page">
                    Landing Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/dashboard">
                    Dashboards
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/components">
                    Components
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/portfolio">
                    Portfolios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/category/ecommerce">
                    E-commerce
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            className="d-flex me-lg-3 mb-2 mb-lg-0"
            onSubmit={handleSearch}
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search templates..."
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Auth / User Section */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          ) : (
            <div className="dropdown">
              <img
                src="/user-avatar.png"
                alt="User"
                height="35"
                className="rounded-circle dropdown-toggle"
                id="userMenu"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              />
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/my-templates">
                    My Templates
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
