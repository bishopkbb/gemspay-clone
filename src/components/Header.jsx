import React, { useState } from "react";
import logo from "../styles/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "About", "Demo", "Products", "Pricing", "Faqs", "Contact"];

  return (
    <header style={{ padding: "0.625rem 1.25rem", position: "relative", zIndex: 1 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "75rem",
          margin: "0 auto",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Gemspay Logo" style={{ height: "3.5rem", marginRight: "0.4rem" }} />
          <h1 style={{ margin: 0, fontSize: "1.2rem", letterSpacing: "1px" }}>
            <span style={{ fontWeight: "650", color: "#8e82fe" }}>Gems</span>
            <span style={{ fontWeight: "300", color: "#8e82fe" }}>pay</span>
          </h1>
        </div>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            {navItems.map((name) => (
              <li key={name}>
                <a href="#">{name}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="desktop-buttons">
            <a href="#" className="get-started">Get Started</a>
          </div>

          {/* Mobile Buttons - unchanged */}
          <div className="mobile-buttons">
            <a href="#" className="merchant-btn">Become a Merchant</a>
            <p>
              Existing merchant? <a href="#" className="sign-in-link">Sign in</a>
            </p>
          </div>
        </nav>
      </div>

      <style>{`
        .hamburger {
          display: none;
        }

        .nav-links {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0 auto;
          padding: 0;
        }

        .nav-links ul li a {
          text-decoration: none;
          color: black;
          font-weight: 500;
          font-size: 1.0313rem;
        }

        .desktop-buttons {
          display: flex;
          margin-left: 1rem;
        }

        .get-started {
          background: #E6E6FA;
          color: black;
          padding: 0.9rem 2.25rem;
          border-radius: 62.4375rem;
          font-weight: 650;
          text-decoration: none;
          font-size: 1.125rem;
          transition: background-color 0.3s ease;
        }

        .get-started:hover {
          background-color: #8e82fe;
          color: white;
        }

        .mobile-buttons {
          display: none;
          flex-direction: column;
          width: 100%;
          text-align: center;
          margin-top: 1rem;
        }

        .merchant-btn {
          background: #8e82fe;
          color: white;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          width: 100%;
          display: block;
          text-align: center;
          text-decoration: none;
          border: none;
          transition: background-color 0.3s ease;
        }

        .merchant-btn:hover {
          background-color: #000;
        }

        .sign-in-link {
          color: #8e82fe;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
            background: none;
            border: 2px solid #8e82fe;
            color: black;
            font-size: 1.3rem;
            padding: 0.3rem 0.6rem;
            border-radius: 5px;
            cursor: pointer;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 1rem;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links ul {
            flex-direction: column;
            width: 100%;
          }

          .desktop-buttons {
            display: none;
          }

          .mobile-buttons {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
