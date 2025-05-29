import React, { useState } from "react";
import logo from "../styles/logo.png"; // Update if needed

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={{ padding: "0.625rem 1.25rem", borderBottom: "1px solid #eee" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "75rem",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Gemspay Logo"
            style={{ height: "3.75rem", marginRight: "0.4rem" }}
          />
          <h1 style={{ margin: 0, fontSize: "1.2rem", letterSpacing: "1px" }}>
            <span style={{ fontWeight: "650", color: "#8e82fe" }}>Gems</span>
            <span style={{ fontWeight: "300", color: "#8e82fe" }}>pay</span>
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.875rem",
            cursor: "pointer",
            color: "#000",
          }}
          className="hamburger"
        >
          &#9776;
        </button>

        {/* Navigation */}
        <nav
          style={{
            display: menuOpen ? "block" : "flex",
            flexDirection: menuOpen ? "column" : "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="nav-links"
        >
          <ul
            style={{
              display: "flex",
              flexDirection: menuOpen ? "column" : "row",
              listStyle: "none",
              padding: 0,
              margin: 0,
              gap: "1.5rem",
              textAlign: menuOpen ? "left" : "center",
            }}
          >
            {["Home", "About", "Demo", "Products", "Pricing", "Faqs", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1.0313rem",
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: menuOpen ? "column" : "row",
              gap: "0.625rem",
              marginTop: menuOpen ? "1rem" : 0,
            }}
          >
            <a
              href="#"
              style={{
                background: "#E6E6FA",
                color: "black",
                padding: "0.625rem 1.875rem",
                borderRadius: "62.4375rem",
                fontWeight: 650,
                textDecoration: "none",
                fontSize: "1.0625rem",
              }}
            >
              Sign Up
            </a>
            <a
              href="#"
              style={{
                background: "#111",
                color: "#fff",
                padding: "0.625rem 1.875rem",
                borderRadius: "62.4375rem",
                fontWeight: 650,
                textDecoration: "none",
                fontSize: "1.0625rem",
              }}
            >
              Log In
            </a>
          </div>
        </nav>
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .hamburger {
              display: block;
            }
            .nav-links {
              width: 100%;
              margin-top: 20px;
            }
            .nav-links ul {
              width: 100%;
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
