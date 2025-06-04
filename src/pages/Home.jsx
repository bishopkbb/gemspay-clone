import React from "react";
import { FaArrowRight } from "react-icons/fa";
// Import your images. Adjust the path as needed.
import mainImage from "../styles/hero.png";
import benefitImage from "../styles/benefit.png";
import feature1 from "../styles/feature1.png";
import feature2 from "../styles/feature2.png";
import growth from "../styles/growth.png";
import fraud from "../styles/fraud.png";
import backgroundImg from "../styles/background.png"; 
import receive from "../styles/receive.png";
import logo from "../styles/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';




function Home() {
  return (
    <>
     {/* SVG background behind header and hero section */}
<svg
  viewBox="0 0 1400 1210"
  preserveAspectRatio="xMidYMid slice"
  className="hero-background-svg"
  style={{
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1,
    width: "65vw",
    height: "175vh", // increase height to accommodate deeper purple
    pointerEvents: "none",
  }}
>
  {/* Yellow curve - thinner and flows on top */}
  <path
    d="M1200,-70 C1210,0 600,800 400,880 L1440,724 Z"
    fill="#FFD600"
    opacity="0.18"
  />

  {/* Purple base - now drops lower with square base */}
  <path
    d="M40,1000 C400,900 1000,500 1500,600 L1440,1400 L0,1400 Z"
    fill="#7c7bfb"
    opacity="1"
  />
</svg>





      {/* Header with log in button */}
      <header style={{ position: "relative", zIndex: 2, padding: "2rem 0 1rem 0" }}>
        <a
          href="#"
          style={{
            background: "#fff",
            color: "#8e82fe",
            padding: "0.75rem 2rem",
            borderRadius: "62.4375rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 0.125remx 0.5rem rgba(122,111,240,0.10)",
            border: "none",
            fontSize: "1rem",
            position: "relative",
            zIndex: 3,
          }}
        >
          {/* Log in or other header content */}
        </a>
      </header>

      <main style={{ position: "relative", overflowX: "hidden", zIndex: 1, marginTop: "1.25rem", padding: 0 }}>

  {/* Hero Section */}
  <div className="hero-section" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", minHeight: "30rem", margin: "2rem 0", flexWrap: "wrap", marginLeft: "1.3rem",marginTop:"1rem", position: "relative", zIndex: 2 }}>
    {/* Left Text Block */}
    <div className="hero-text" style={{ flex: 1.2, minWidth: 280, textAlign: "left", paddingLeft: 0, position: "relative", zIndex: 3 }}>
      <h1 style={{ fontSize: "4.9rem", fontWeight: 700, lineHeight: 1.2, margin: 0,  }}>Gemspay!<br />A New Way To Pay</h1>
      <p>Developing various solutions that will seamlessly integrate with</p>
      <p>the leading payment and switching platform providers in</p>
      <p>Nigeria.</p>
      <br />
      <a href="#" className="start-btn" style={{ background: "black", color: "white", padding: "0.9375rem 2.5rem", borderRadius: "62.4375rem", fontWeight: 550, textDecoration: "none", boxShadow: "0 0.125rem 0.5rem rgba(122,111,240,0.12)", border: "none", fontSize: "1.25rem", transition: "background 0.2s", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "1.5rem" }}>
        Get Started
        <span style={{ marginLeft: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "50%", width: 38, height: 38 }}>
          <FaArrowRight size={22} color="#111" />
        </span>
      </a>
    </div>

    {/* Right Image - Desktop only */}
    <div className="desk-top-hero-image" style={{ flex: 1, display: "flex", justifyContent: "flex-end", minWidth: 320, position: "relative", zIndex: 2 }}>
      <img src={mainImage} alt="Main Visual" claasName="hero-image" style={{ maxWidth: "100%", height: "auto", maxHeight: "500px", borderRadius: "1.125rem", position: "relative", top: "-1.8rem", marginLeft: "auto", display: "block" }} />
    </div>
  </div>

  {/* Mobile Image Layer */}
  <div className="mobile-svg-container">
    <svg viewBox="0 0 980 1800" className="mobile-svg">
      <polygon points="1200,0 1700,0 200,1600 1210,0" fill="#FFD600" opacity="0.16" />
      <polygon points="8000,1000 10,10000 -10,1600 1800,300" fill="#7c7bfb" opacity="1" />
    </svg>
    <img src={mainImage} alt="Mobile Hero" className="mobile-hero-image" />
  </div>

  <style>{`
    @media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 1rem 0 2rem 0;
    padding: 0 1rem;
  }

  .hero-text {
    width: 100%;
    margin-top: 1rem;
    padding: 0;
    text-align: center;
    z-index: 3;
  }

  .hero-text h1 {
    font-size: 2rem;
    line-height: 1.3;
  }

  .hero-text p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .start-btn {
    width: 100%;
    max-width: 320px;
    font-size: 1rem;
    justify-content: center;
    margin: 1.5rem auto 0 auto;
  }

  /* Stack image and SVG after text */
  .desk-top-hero-image {
    display: block;
    width: 100%;
    position: relative;
    margin-top: 2rem;
    z-index: 2;
    text-align: center;
  }

  .hero-image {
    width: 75%;
    max-width: 350px;
    height: auto;
    display: inline-block;
    border-radius: 1rem;
    position: relative;
    z-index: 2;
  }

  .hero-background-svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 200vh;
    z-index: 1;
    pointer-events: none;
  }
     .hero-background-svg {
    display: none !important;
  }
}

  `}</style>





        <section className="benefit-section"
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#FFFAF0",
    padding: "2rem 1rem",
    marginTop: "16rem",
    zIndex: 2,
    flexWrap: "wrap", // handles stacking on small screens
  }}
>
  {/* Text section */}
  <div
    style={{
      flex: "1 1 500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "1.5rem",
      margin: "0 2rem",
    }}
  >
    <h2 style={{ fontSize: "1.3rem", margin: 0, color: "#8e82fe" }}>
      Growth enabler for businesses
    </h2>
    <p style={{ fontSize: "2.5rem", color: "#222", margin: 0, fontWeight: 600 }}>
      An all-inclusive centralized
    </p>
    <p style={{ fontSize: "2.5rem", color: "#222", margin: 0, fontWeight: 600 }}>
      payment platform
    </p>
    <p
      style={{
        fontSize: "1.1rem",
        color: "#444",
        lineHeight: 1.8,
        marginTop: "30px",
        fontWeight: 500,
      }}
    >
      GemsPay is an all-inclusive centralized payment platform that enables clients increase efficiency in their payments processing by ways of receiving and making payments across diverse channels. The overarching goal is to become a growth enabler for business, allowing them to expand by delivering the essential strategies necessary for achieving exponential growth.
    </p>

    <a
      href="#"
      className="getstarted-btn"
      style={{
        background: "black",
        color: "white",
        padding: "1.25rem 2.5rem",
        borderRadius: "62.4375rem",
        fontWeight: 550,
        textDecoration: "none",
        boxShadow: "0 0.125rem 0.5rem rgba(122,111,240,0.12)",
        fontSize: "0.9375rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "10rem",
        marginTop: "1px",
      }}
    >
      Get Started
    </a>
  </div>

  {/* Image section */}
  <div
    style={{
      flex: "1 1 31.25rem",
      background: "linear-gradient(to bottom right, #FFFAF0, #f0eefe)",
      borderRadius: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "2rem",
      height: "42rem",
    }}
  >
    <img
      src={benefitImage}
      alt="Benefit"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "0.75rem",
        boxShadow: "none",
        mixBlendMode: "multiply", // Blends image into background
      }}
    />
  </div>
</section>

        {/* Why Choose Gemspay Section */}
        <section 
  style={{
    background: "#fff",
    color: "#222",
    padding: "5px 0",
    margin: "2.5rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "1rem",
    boxShadow: "none",
    maxWidth: "60rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem 1rem",
    marginTop: "1.5rem"
  }}
>
  <h2 className="section-heading" id="gemspay-heading"> 
    Why Choose Gemspay?</h2>

  <p className="section-subtext" id="gemspay-subtext">
    A user-friendly, fast, one-touch payment option. Robust, Clean, Developer-Friendly Payment Gateway built for Developers.
  </p>

 <section style={{
  width: "100%",
  marginTop: "5rem",
  marginLeft: "-10.3125rem",
  padding: "1rem"
}}>
 <div
  className="features-container"
  style={{
    display: "flex",
    flexDirection: "row",
    gap: "3rem",
    flexWrap: "wrap",
    marginLeft: "-2.5rem",
    justifyContent: "center",   // ✅ Center horizontally
    alignItems: "flex-start",   // ✅ Align items top-aligned
    maxWidth: "1000px",         // ✅ Optional: constrain total width
    margin: "-1rem auto",           // ✅ Center the whole section
    padding: "0 1rem",          // ✅ Add horizontal breathing space
  }}>
    
    {/* Feature List */}
    <div style={{
      flex: 1,
      minWidth: "300px",
      display: "flex",
      flexDirection: "column"
    }}>
      {[
        {
          title: "Seamless experience",
          desc: "Multiple options of payment gateways such as Wallet, Credit/Debit Cards, USSD, Bank Transfer.",
          lineHeight: "7.5rem"
        },
        {
          title: "Easy Customization",
          desc: "Design to complement our customer in-house solutions through our various APIs.",
          lineHeight: "5.625rem",
        },
        {
          title: "Invoice Payments",
          desc: "Faster, easier way to invoice. Immediate Refund Option.",
          lineHeight: null
        }
      ].map((item, index) => (
        <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "2.5rem", position: "relative" }}>
          
          {/* Bullet and line */}
          <div style={{ marginRight: "1.2rem", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              background: "white",
              borderRadius: "6px",
              border: "2px solid #222",
              boxShadow: "0 2px 8px rgba(122,111,240,0.07)",
              zIndex: 2,
              position: "relative"
            }}>
              <span style={{
                display: "block",
                width: 12,
                height: 12,
                background: "rgba(231,84,128,0.45)",
                borderRadius: "50%",
                border: "1px solid #111"
              }} />
            </span>
            {item.lineHeight && (
              <div className="feature-line" style={{
                width: "1px",
                height: item.lineHeight,
                background: "#111",
                marginTop: "-0.5rem"
              }} />
            )}
          </div>

          {/* Title and description */}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 630, fontSize: "1.6rem", marginBottom: 4 }}>
              {item.title}
            </div>
            <div className="feature-description" style={{
              color: "#444",
              fontSize: "1.06rem",
              lineHeight: 1.5,
              marginTop: "1.25rem"
            }}>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Feature Images */}
    <div className="features-images" style={{
      flex: 1,
      minWidth: "100px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "relative",
      height: "32rem",
      marginTop: "-1rem",
      marginLeft: "-3rem",  
    }}>
      <img
        src={feature1}
        alt="Feature 1"
        className="feature-img feature-img1"
        style={{
          height: "100%",
          width: "auto",
          borderRadius: "1rem",
          boxShadow: "0 0.25rem 1.25rem rgba(122,111,240,0.10)",
          position: "absolute",
          left: "1rem",
          top: 0,
          zIndex: 1
        }}
      />
      <img
        src={feature2}
        alt="Feature 2"
        className="feature-img feature-img2"
        style={{
          height: "100%",
          width: "auto",
          borderRadius: "1rem",
          boxShadow: "0 0.25rem 1.25rem rgba(122,111,240,0.10)",
          position: "absolute",
          left: "20rem",
          top: "2rem",
          zIndex: 2
        }}
      />
    </div>
  </div>

  {/* Styles */}
  <style>
    {`
@media (max-width: 768px) {
  /* Container layout */
  .features-container {
    flex-direction: column !important;
    padding: 0 1rem;
    align-items: flex-start !important;
    text-align: flex-start !important;
  }

  /* Section heading */
  .section-heading {
    font-size: 3rem !important;
    font-weight: 700 !important;
    text-align: center !important;
    margin-bottom: 2rem !important;
  }

  /* Feature bullets + text container */
  .features-container > div:first-child {
    width: 101%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    align-items: flex-start;
  }

  .features-container .feature-description {
    font-size: 1rem !important;
    line-height: 1.5 !important;
    margin-top: 0.5rem !important;
    color: #444;
    text-align: flex-start;
    gap: 1rem;
  }

  /* Bullet container */
  .features-container span {
    width: 28px !important;
    height: 28px !important;
    background: white !important;
    border: 2px solid #222 !important;
    border-radius: 6px !important;
    box-shadow: 0 2px 8px rgba(122, 111, 240, 0.07);
    z-index: 3 !important;
    position: relative !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 4rem !important
  }

  /* Inner bullet dot */
  .features-container span > span {
    width: 10px !important;
    height: 10px !important;
    background: rgba(231, 84, 128, 0.45) !important;
    border: 1px solid #111 !important;
    border-radius: 50% !important;
    margin-left: -0.1rem !important;
  }

  /* Vertical lines under bullets */
  .features-container .feature-line {
    width: 1px !important;
    background: #111 !important;
    margin-top: -10px !important;
    margin-bottom: 1rem !important;
    align-self: center !important;
    margin-left: 4rem !important;
  }

  /* Bullet + text side-by-side */
  .features-container .feature-item {
    display: flex !important;
    align-items: flex-start !important;
    justify-content: center !important;
    text-align: left !important;
    gap: 1rem !important;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  /* Title inside item */
  .feature-item-title {
    font-size: 1.2rem !important;
    font-weight: 600 !important;
    margin-bottom: 0.3rem;
  }

  /* Images below text */
  .features-images {
    flex-direction: column !important;
    align-items: center !important;
    gap: 1.5rem !important;
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
    position: static !important;
    margin-left: 1rem !important
  }

  .feature-img {
    position: static !important;
    width: 100% !important;
    max-width: 80% !important;
    height: auto !important;
    border-radius: 1rem !important;
    background: transparent !important;
    box-shadow: 0 0.25rem 1.25rem rgba(122, 111, 240, 0.1) !important;
    transition: transform 0.5s ease !important;
  }

  .feature-img:hover {
    transform: scale(1.05) rotate(0.3deg);
  }
}

/* Hover effect for desktop */
@media (min-width: 769px) {
  .feature-img {
    transition: transform 0.5s ease;
  }

  .feature-img:hover {
    transform: scale(1.05) rotate(0.3deg);
  }

    .section-heading {
    font-size: 1.6rem !important;
    font-weight: 700 !important;
    text-align: center !important;
    margin-bottom: 2rem !important;
  }

}


    `}
  </style>
</section>



<section
  style={{
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 0,
    width: "100vw", // Corrected property
    margin: 0,
    marginTop: "12rem",
    boxSizing: "border-box",
    position: "relative",
  
  }}
>
 <h2 className="growth-heading"
  style={{
    fontSize: "5rem",
    fontWeight: 710,
    marginBottom: "1.5rem",
    color: "black",
    textAlign: "center",
    position: "relative",
    display: "inline-block"
  }}
>
  The <span style={{ position: "relative", display: "inline-block", }}>
    Growth
    <div
      style={{
        height: "1.125rem",
        width: "100%",
        background: "#ffd600",
        borderRadius: "1px",
        position: "absolute",
        left: 0,
        bottom: "0.08em",
        zIndex: 0.7,
        opacity: 0.4
      }}
    />
  </span> enabler for business
</h2>
  <p className="growth-paragraph"
    style={{
   fontSize: "3rem", textAlign: "center", marginTop: "0.625rem", color: "black", lineHeight: 1.5, width: "70%", fontWeight: 200
    }}
  >
    We empower businesses to expand by delivering the essential strategies necessary for achieving exponential growth.
  </p>
  <div
  
  >
    <img
      src={growth}
      alt="Growth"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 0,
        background: "transparent",
        display: "block"
      }}
    />
  </div>

  <style>
    @media (max-width: 768px) {`
  section {
    padding: 3rem 5vw 1rem 5vw !important;
    text-align: center !important;
  }

  section h2 {
    font-size: 2.2rem !important;
    line-height: 1.3 !important;
    margin-bottom: 1rem !important;
  }

  section p {
    font-size: 1.2rem !important;
    width: 100% !important;
    line-height: 1.6 !important;
    margin-top: 0.5rem !important;
  }

  section img {
    width: 100% !important;
    max-width: 100% !important;
    margin-top: 2rem !important;
    border-radius: 0 !important;
  }
`}

  </style>
</section>

<section
  className="fraud-section"
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5rem 10vw",
    gap: "3rem",
    width: "100vw",
    boxSizing: "border-box",
    background: "#fff",
    flexWrap: "nowrap"
  }}
>
  {/* Image on the Left */}
  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "flex-start"
    }}
  >
    <img
      src={fraud}
      alt="Fraud Screening"
      style={{
        width: "100%",
        maxWidth: "700px", // Increased
        height: "auto",
        borderRadius: "1rem",
        boxShadow: "0 0.25rem 1.5rem rgba(122,111,240,0.1)",
        background: "transparent",
        display: "block"
      }}
    />
  </div>

  {/* Text on the Right */}
  <div
    style={{
      flex: 1,
      paddingLeft: "2rem"
    }}
  >
    <h3
      style={{
        fontSize: "3rem", // Bigger heading
        fontWeight: 800,
        marginBottom: "1rem",
        color: "#000"
      }}
    >
      Fraud screening features to help our merchants
    </h3>
    <p
      style={{
        fontSize: "0.95rem", // Smaller paragraph
        color: "#444",
        lineHeight: 1.7
      }}
    >
      We provide fraud screening features to alert merchants on any fraudulent
      representation of our Customers Cards (Debit/Credit) and prevent it for
      about 80 to 90%.
    </p>

    <h3
      style={{
        fontSize: "3rem", // Bigger sub-heading
        fontWeight: 700,
        marginTop: "2rem",
        marginBottom: "0.5rem",
        color: "#000"
      }}
    >
      Multi-Factor authentication of transaction.
    </h3>
    <p
      style={{
        fontSize: "0.95rem", // Smaller paragraph
        color: "#444",
        lineHeight: 1.7
      }}
    >
      Trustworthy service to customers. Secure flow of transaction details among
      buyers, sellers, and financial institutions.
    </p>
  </div>

  <style>
    {`
      @media (max-width: 768px) {
        .fraud-section {
          flex-direction: column !important;
          padding: 2rem 1rem !important;
          text-align: center !important;
        }

        .fraud-section > div {
          padding: 0 !important;
        }

        .fraud-section h2 {
          font-size: 2rem !important;
        }

        .fraud-section h3 {
          font-size: 1.5rem !important;
        }

        .fraud-section p {
          font-size: 1rem !important;
        }

        .fraud-section img {
          max-width: 100% !important;
          height: auto !important;
        }
      }
    `}
  </style>
</section>

  <section
  style={{
    width: "100vw",
    minHeight: "25rem",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
    margin: "0",
    boxSizing: "border-box",
    boxShadow: "none"
  }}
>
  <h1
    style={{
      fontSize: "5rem",
      fontWeight: 800,
      color: "#222",
      textAlign: "center",
      margin: 0,
      width: "100%",
      letterSpacing: "-1px",
      lineHeight: 1
    }}
  >
    Experience easy payment processing
  </h1>
  <p
    style={{
      fontSize: "2rem",
      color: "#444",
      textAlign: "center",
      margin: "2rem 0 0 0",
      fontWeight: 450,
      width: "100%",
      lineHeight: 3
    }}
  >
    Enjoy the one touch payment option.
  </p>
  <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "2.5rem" }}>
    <a
      href="#"
      className="getstarted-btn"
      style={{
        background: "black",
        color: "#fff",
        padding: "1.125rem 3rem",
        borderRadius: "62.4375rem",
        fontWeight: 600,
        textDecoration: "none",
        fontSize: "1.3rem",
        display: "inline-flex",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(122,111,240,0.12)",
        border: "none",
        transition: "background 0.2s",
        cursor: "pointer",
      }}
    >
      Get Started
      <span style={{ marginLeft: 16, display: "flex", alignItems: "center" }}>
        <FaArrowRight size={22} color="#fff" />
      </span>
    </a>
  </div>
</section>


{/* Overlay background section */}
<div className="overlay-bg"
  style={{
    width: "100vw",
    minHeight: "10vh",
    background: `url(${backgroundImg}) center center / cover no-repeat fixed`,
    position: "relative",
    zIndex: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
  }}
>
  {/* Overlay for see-through effect */}
  <div
  style={{
    background: "linear-gradient( transparent 100%, transparent 100%)",
    backgroundSize: "6.25rem 6.25rem",
    height: "50vh",
    width: "100vw",
    position: "relative",
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: "none",
     display: "flex", /* Added display: flex */
    justifyContent: "center", /* Added justifyContent: center */
    alignItems: "center" /* Added alignItems: center */
    }}
  />
  {/* Content overlays */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: 0,
      margin: 0,
      gap: "25rem"
    }}

  >

    {/* New section: Receive and make payments easily */}
    <section
      style={{
        width: "100vw",
        minHeight: "18.75rem",
        background: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "5vw",
        padding: "2.5rem 0 0 0",
        margin: "0",
        boxSizing: "border-box",
        marginBottom: "15.625rem"
      }}
    >
      {/* Left: Text */}
      <div style={{
        flex: 1.2,
        minWidth: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "2vw"
      }}>
        <h1 style={{
          fontSize: "4.5rem",
          color: "#222",
          margin: 0,
          fontWeight: 800,
          textAlign: "left",
          lineHeight: 1
        }}>
          Receive and make payments easily
        </h1>
        <p style={{
          fontSize: "2rem",
          color: "#444",
          marginTop: "1.75rem",
          marginBottom: 0,
          lineHeight: 1.7,
          textAlign: "left",
          maxWidth: 500
        }}>
          We provide seamless experience to customers making payments online without any fear.
        </p>

        <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", marginTop: "2.5rem" }}>
    <a
      href="#"
      className="getstarted-btn"
      style={{
        background: "black",
        color: "#fff",
        padding: "1.125rem 3rem",
        borderRadius: "62.4375rem",
        fontWeight: 600,
        textDecoration: "none",
        fontSize: "1.3rem",
        display: "inline-flex",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(122,111,240,0.12)",
        border: "none",
        transition: "background 0.2s",
        cursor: "pointer",
      }}
    >
      Get Started
      <span style={{ marginLeft: 16, display: "flex-start", alignItems: "left" }}>
        <FaArrowRight size={22} color="#fff" />
      </span>
    </a>
  </div>
      </div>
      {/* Right: Picture placeholder */}
      <div style={{
        flex: 1,
        minWidth: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "10vw"
      }}>
       
         <img
      src={receive}
      alt="Fraud Screening"
      style={{
        width: "100%",
        maxWidth: "50rem",
        height: "38.125rem",
        borderRadius: "1rem",
        boxShadow: "0 0.25rem 1.5rem rgba(122,111,240,0.10)",
        background: "transparent",
        display: "block",
      }}
    />
      <style>
  {`
    @media (max-width: 768px) {
      .overlay-bg {
        display: none !important;
      }

      .receive-image-wrapper {
        display: none !important;
      }
    }
  `}
</style>
 
      </div>
    </section>

    
  </div>
</div>

        </section>
      </main>

 <div className="prefooter-container" style={{ backgroundColor: 'white', padding: '2.5rem 1.25rem' }}>
  {/* Top: Logo + Newsletter */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
    {/* Logo */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={logo}
        alt="Gemspay Logo"
        style={{ height: '3.75rem', marginRight: '0.625rem' }}
      />
      <h1 style={{ margin: 0, fontSize: '1.5rem', letterSpacing: '1px' }}>
        <span style={{ fontWeight: 650, color: '#8e82fe' }}>Gems</span>
        <span style={{ fontWeight: 300, color: '#8e82fe' }}>pay</span>
      </h1>
    </div>

    {/* Newsletter */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
      <input
        type="email"
        placeholder="Enter your email"
        style={{
          padding: '1.125rem 1.25rem',
          border: '1px solid #ccc',
          borderRadius: '3.125rem',
          fontSize: '0.9375rem',
          width: '16.25rem',
          outline: 'none'
        }}
      />
      <button
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '1.5rem 1.875rem',
          fontSize: '0.9375rem',
          border: 'none',
          borderRadius: '3.125rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          whiteSpace: 'nowrap'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8e82fe'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#000'}
      >
        Subscribe to Our Newsletter
      </button>
    </div>
  </div>

  {/* Bottom: Link Columns */}
  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
    {/* Quick Links */}
    <div style={{ width: '12.5rem', marginBottom: '1.25rem' }}>
      <h4 style={{ fontSize: '1.125rem', color: '#222' }}>Quick Links</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Home', 'About', 'Demo', 'Contact'].map(text => (
          <li key={text}>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: '#222',
                display: 'inline-block',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Corporate */}
    <div style={{ width: '12.5rem', marginBottom: '1.25rem' }}>
      <h4 style={{ fontSize: '1.125rem', color: '#222' }}>Corporate</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Privacy Policy', 'Dispute Resolution', 'Terms of Service'].map(text => (
          <li key={text}>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: '#222',
                display: 'inline-block',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Us */}
    <div style={{ width: '15.625rem', marginBottom: '1.25rem' }}>
      <h4 style={{ fontSize: '1.125rem', color: '#222' }}>Contact Us</h4>
      <p
        style={{ color: '#222', marginBottom: '0.5rem', transition: 'color 0.3s ease', cursor: 'default' }}
        onMouseOver={(e) => e.currentTarget.style.color = '#8e82fe'}
        onMouseOut={(e) => e.currentTarget.style.color = '#222'}
      >
        +234 201 330 9389
      </p>
      <p
        style={{ color: '#222', marginBottom: '0.5rem', transition: 'color 0.3s ease', cursor: 'default' }}
        onMouseOver={(e) => e.currentTarget.style.color = '#8e82fe'}
        onMouseOut={(e) => e.currentTarget.style.color = '#222'}
      >
        hello@gemspaysolution.com
      </p>
      <p style={{ color: '#222' }}>
        2D, Obasa close, off<br />
        Oba-Akran, Ikeja, Lagos.<br />
        Nigeria.
      </p>
    </div>

    {/* Stay Connected */}
    {/* Stay Connected */}
<div style={{ width: '12.5rem', marginBottom: '1.25rem' }}>
  <h4 style={{ fontSize: '1.125rem', color: '#222' }}>Stay Connected</h4>
  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '0.625rem',marginLeft: '-0.625rem' }}>
    <a href="#" style={{ color: 'black', textDecoration: 'none', margin: '0 0.625rem', fontSize: '1.5625rem' }}>
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>

     <a href="#" style={{ color: 'black', textDecoration: 'none', margin: '0 0.625rem', fontSize: '1.5625rem' }}>
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>

    <a href="#" style={{ color: 'black', textDecoration: 'none', margin: '0 0.625rem', fontSize: '1.5625rem' }}>
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
   
    <a href="#" style={{ color: 'black', textDecoration: 'none', margin: '0 0.625rem', fontSize: '1.5625rem' }}>
      <i className="fab fa-linkedin" aria-hidden="true"></i>
    </a>
    <a href="#" style={{ color: 'black', textDecoration: 'none', margin: '0 0.625rem', fontSize: '1.5625rem' }}>
  <i className="fab fa-youtube" aria-hidden="true"></i>
</a>
  </div>
</div>

    </div>
    <style>
  {`
    @media (max-width: 768px) {
      .prefooter-container {
        padding: 2rem 1rem !important;
      }

      .prefooter-top,
      .prefooter-bottom {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 2rem;
      }

      .newsletter-wrapper {
        flex-direction: column !important;
        align-items: stretch !important;
        width: 100% !important;
      }

      .newsletter-wrapper input {
        width: 100% !important;
      }

      .newsletter-wrapper button {
        width: 100% !important;
        margin-top: 1rem;
      }

      .prefooter-column {
        width: 100% !important;
      }

      .stay-connected {
        justify-content: flex-start !important;
        margin-left: 0 !important;
      }
    }
  `}
</style>

  </div>

  <footer style={{ backgroundColor: '#fff', padding: '1.25rem 0', textAlign: 'center' }}>
  <p style={{ color: '#000', fontSize: '14px', margin: 0 }}>
    All the resources used in this project belong to <strong>Gemspay</strong>. This site was cloned for <strong>learning purpose only</strong>.
  </p>
</footer>




    </>
  );
}

export default Home;