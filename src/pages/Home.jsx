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
      {/* SVG background behind header and main */}
      <svg
        viewBox="0 0 980 1800"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1,
          width: "75vw",
          height: "100vh",
          minWidth: 400,
          minHeight: 1150,
          pointerEvents: "none",
        }}
      >
        {/* Thin yellow top, ending around the paragraph */}
        <polygon
          points="1200,0 1700,0 200,1600 1210,0"
          fill="#FFD600"
          opacity="0.16"
        />
        {/* Purple base runs from header to benefit section */}
        <polygon
          points="8000,1000 10,10000 -10,1600 1800,300"
          fill="#7c7bfb"
          opacity="1000"
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

      <main style={{ position: "relative", overflow: "hidden", zIndex: 1, marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            minHeight: "30rem",
            margin: "2rem 0",
            flexWrap: "wrap",
            marginLeft: "0.0625rem",
          }}
        >
          {/* Texts on the left */}
          <div style={{ flex: 1.2, minWidth: 280, textAlign: "Left", marginLeft: 0, paddingLeft: 0, marginBottom: 0 }}>
            <a
              href="#"
              className="pencco-btn"
              style={{
                background: "#8e82fe",
                color: "white",
                padding: "0.5px 5px",
                borderRadius: "62.4375rem",
                fontWeight: 550,
                textDecoration: "none",
                boxShadow: "0 0.125rem 0.5rem rgba(122,111,240,0.12)",
                border: "none",
                fontSize: "1rem",
                transition: "background 0.2s",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                marginBottom: "1.5rem",
                marginTop: "6.25rem",
              }}
            >
              Pencco is now live
              <span style={{ marginLeft: 10, display: "flex", alignItems: "center" }}>
                <FaArrowRight size={17} />
              </span>
            </a>

            <h1 style={{ margin: 0 }}>Gemspay!</h1>
            <h1 style={{ margin: 0 }}>A New Way To</h1>
            <h1 style={{ margin: 0 }}>Pay</h1>
            <p>Developing various solutions that will seamlessly integrate with</p>
            <p>the leading payment and switching platform providers in</p>
            <p>Nigeria.</p>
            <br />

            {/* Get Started button */}
            <a
              href="#"
              className="start-btn"
              style={{
                background: "black",
                color: "white",
                padding: "0.9375rem 2.5rem",
                borderRadius: "62.4375rem",
                fontWeight: 550,
                textDecoration: "none",
                boxShadow: "0 0.125rem 0.5rem rgba(122,111,240,0.12)",
                border: "none",
                fontSize: "1.25rem",
                transition: "background 0.2s",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Get Started
              <span
                style={{
                  marginLeft: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  borderRadius: "50%",
                  width: 38,
                  height: 38,
                }}
              >
                <FaArrowRight size={22} color="#111" />
              </span>
            </a>
          </div>

          {/* Image on the right */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", minWidth: 320, paddingRight: 0 }}>
            <img
              src={mainImage}
              alt="Main Visual"
              style={{
                maxWidth: "125rem",
                width: "100%",
                height: "37.5rem",
                borderRadius: "1.125rem",
                boxShadow: "none",
                zIndex: 3,
                position: "relative",
                marginRight: "-2.5rem",
                marginBottom: "0",
                marginTop: "-12.5rem"
              }}
            />
          </div>
        </div>

        <section
          style={{
            marginLeft: "-9.375rem",
            color: "white",
            padding: "15.625rem 0.625rem",
            borderRadius: "0",
            fontWeight: 550,
            textDecoration: "none",
            border: "none",
            fontSize: "1rem",
            transition: "background 0.2s",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            zIndex: 2,
            marginTop: "15.625rem",
            padding: "0.625rem"
          }}
        >
          {/* Texts on the left */}
          <div
            style={{
              flex: 1.07,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingRight: "0",
              gap: "1.5rem",
              marginLeft: "6.875rem",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", margin: 0, color: "#8e82fe" }}>
              Growth enabler for businesses
            </h2>
            <p style={{ fontSize: "2.5rem", color: "#222", margin: 0, fontWeight: 600 }}>
              An all-inclusive centralized 
            </p>
             <p style={{ fontSize: "2.5rem", color: "#222", margin: 0, fontWeight: 600,  }}>
              payment platform
            </p>
            <p style={{ fontSize: "1.17rem", color: "#444", lineHeight: 1.8, margin: 0, fontWeight: 500, marginTop: "30px" }}>
              GemsPay is an all-inclusive centralized payment platform that enables clients increase efficiency in their payments processing by ways of receiving and making payments across diverse channels. The overarching goal is to become a growth enabler for business, allowing them to expand by delivering the essential strategies necessary for achieving exponential growth.
            </p>

               {/* Get Started button */}
           // ...inside the benefit section, replacing the old Get Started button...
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
    border: "none",
    fontSize: "0.9375rem",
    transition: "background 0.2s",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    minWidth: "unset",
     maxWidth: "10rem", // limit max width
    marginTop: "1px"
  }}
>
  Get Started
  <span style={{
    marginLeft: 8,
    display: "flex",
    alignItems: "center"
  }}>
  </span>
</a>

          </div>
          {/* Picture on the right */}
          <div
            style={{
              flex: 1.2,
              minWidth: 400,
              minHeight: 700,
              background: "#f5f5fa",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "10vw",
              height: "20rem",
            }}
          >
            <img
              src={benefitImage}
              alt="Benefit"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0",
                boxShadow: "none"
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
            boxShadow: "0 0.125rem 1rem rgba(122,111,240,0.07)",
            maxWidth: "68.75rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "5rem 0.625rem"
          }}
        >
          <h2 style={{ fontSize: "5rem", fontWeight: 550, marginBottom: "1.5rem", color: "black" }}>
            Why Choose Gemspay?
          </h2>

                    <p style={{ fontSize: "1.6rem", textAlign: "center", marginTop: "0.625rem", color: "black", lineHeight: 1.5, width: "70%", fontWeight: 100  }}>
                      A user-friendly, fast, one-touch payment option. Robust, Clean, Developer-Friendly Payment Gateway built for Developers.
                    </p>

 <div
  style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "3rem",
    width: "100%",
    margin: 0,
    paddingLeft: 0,
    marginLeft: "-10.3125rem",
    marginTop: "5rem"
  }}
>
  <div
    style={{
      flex: 0.55,
      minWidth: 10,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }}
  >
    {/* Feature 1 */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        marginBottom: "1rem" // Reduced spacing between features
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32, // Slightly smaller bullet
          height: 32,
          minWidth: 32,
          minHeight: 32,
          background: "white",
          borderRadius: "6px",
          marginTop: "2px",
          position: "relative",
          zIndex: 2,
          border: "2px solid #222",
          boxShadow: "0 2px 8px rgba(122,111,240,0.07)",
          flexShrink: 0
        }}
      >
        <span
          style={{
            display: "block",
            width: 12,
            height: 12,
            background: "rgba(231,84,128,0.45)", // Faded rose pink
            borderRadius: "50%",
            border: "1px solid #111" // Black border around circle
          }}
        ></span>
      </span>
      <div style={{ marginLeft: "1.2rem", flex: 1 }}>
        <div style={{ fontWeight: 630, fontSize: "1.6rem", marginBottom: 4 }}>
          Seamless experience
        </div>
        <div style={{ color: "#444", fontSize: "1.06rem", fontWeight: 400, lineHeight: 1.5, marginTop: "1.25rem"}}>
          Multiple options of payment gateways such as Wallet, Credit/Debit Cards, USSD, Bank Transfer.
        </div>
      </div>
    </div>
    {/* Slim, longer vertical line between bullets */}
    <div
      style={{
        width: "0.5px",
        height: "7.5rem", // Longer line
        background: "#111",
        margin: "0 0 1.5rem 0", // Match reduced spacing
        marginLeft: "0.9375rem", // (32px bullet / 2) - (1px line / 2)
         marginTop: "-4.375rem" // <-- Move line up to align with bullet center
      }}
    />
    {/* Feature 2 */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        marginBottom: "1.5rem"
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          minWidth: 32,
          minHeight: 32,
          background: "white",
          borderRadius: "6px",
          marginTop: "2px",
          position: "relative",
          zIndex: 2,
          border: "2px solid #222",
          boxShadow: "0 2px 8px rgba(122,111,240,0.07)",
          flexShrink: 0
        }}
      >
        <span
          style={{
            display: "block",
            width: 12,
            height: 12,
            background: "rgba(231,84,128,0.45)",
            borderRadius: "50%",
            border: "1px solid #111"
          }}
        ></span>
      </span>
      <div style={{ marginLeft: "1.2rem", flex: 1 }}>
        <div style={{ fontWeight: 630, fontSize: "1.6rem", marginBottom: 4 }}>
          Easy Customization
        </div>
        <div style={{ color: "#444", fontSize: "1.06rem", fontWeight: 400, lineHeight: 1.5, marginTop: "1.25rem" }}>
          Design to complement our customer in-house solutions through our various APIs.
        </div>
      </div>
    </div>
    {/* Slim, longer vertical line between bullets */}
    <div
      style={{
        width: "0.5px",
        height: "5.625rem", // Longer line
        background: "#111",
        margin: "0 0 1.5rem 0", // Match reduced spacing
        marginLeft: "0.9375rem", // (32px bullet / 2) - (1px line / 2)
        marginTop: "-5rem" // <-- Move line up to align with bullet center
      }}
    />
    {/* Feature 3 */}
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%"
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          minWidth: 32,
          minHeight: 32,
          background: "white",
          borderRadius: "6px",
          marginTop: "2px",
          position: "relative",
          zIndex: 2,
          border: "2px solid #222",
          boxShadow: "0 2px 8px rgba(122,111,240,0.07)",
          flexShrink: 0
        }}
      >
        <span
          style={{
            display: "block",
            width: 12,
            height: 12,
            background: "rgba(231,84,128,0.45)",
            borderRadius: "50%",
            border: "1px solid #111"
          }}
        ></span>
      </span>
      <div style={{ marginLeft: "1.2rem", flex: 1 }}>
        <div style={{ fontWeight: 630, fontSize: "1.6rem", marginBottom: 4 }}>
          Invoice Payments
        </div>
        <div style={{ color: "#444", fontSize: "1.07rem", fontWeight: 400, lineHeight: 1.5, marginTop: "1.25rem" }}>
          Faster, easier way to invoice. Immediate Refund Option.
        </div>
      </div>
    </div>
  </div>

{/* Picture on the right (unchanged) */}
<div
  style={{
    flex: 1,
    minWidth: 260,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative", // Needed for absolute positioning of overlapping images
    height: "16.25rem", // Adjust height as needed
     marginLeft: "-1.875rem"
  }}
>
  {/* First image (taller, behind) */}
  <img
    src={feature1}
    alt="Feature 1"
    style={{
      height: "31.25rem", // Slightly taller
      width: "auto",
      borderRadius: "1rem",
      boxShadow: "0 0.25rem 1.25rem rgba(122,111,240,0.10)",
      position: "absolute",
      left: "1.875rem",
      top: "0.5px",
      zIndex: 1
    }}
  />
  {/* Second image (shorter, in front, overlapping) */}
  <img
    src={feature2}
    alt="Feature 2"
    style={{
      height: "31.25rem", // Slightly shorter
      width: "auto",
      borderRadius: "1rem",
      boxShadow: "0 0.25rem 1.25rem rgba(122,111,240,0.10)",
      position: "absolute",
      left: "20rem", // Overlap to the right
      top: "3.125rem",
      zIndex: 2
    }}
  />
</div>
</div>

<section
  style={{
    background: "#fff",
    padding: "5rem 10vw 0.625rem 10vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 0,
    width: "100vw", // Corrected property
    margin: 0,
    marginTop: "4.375rem",
    boxSizing: "border-box",
    position: "relative",
  
  }}
>
 <h2
  style={{
    fontSize: "4.24rem",
    fontWeight: 710,
    marginBottom: "1.5rem",
    color: "black",
    textAlign: "center",
    position: "relative",
    display: "inline-block"
  }}
>
  The <span style={{ position: "relative", display: "inline-block" }}>
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
  <p
    style={{
   fontSize: "1.7rem", textAlign: "center", marginTop: "0.625rem", color: "black", lineHeight: 1.5, width: "70%", fontWeight: 200
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
        width: "100vw",
        maxWidth: "100vw",
        height: "auto",
        borderRadius: 0,
        background: "transparent",
        display: "block"
      }}
    />
  </div>
</section>

<section
  style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "3rem",
    width: "100vw",
    background: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 0.125rem 1rem rgba(122,111,240,0.07)",
    margin: "2.5rem 0",
    padding: "5rem 10vw",
    boxSizing: "border-box",
   
  }}
>
  {/* Left: Fraud Image */}
  <div
    style={{
      flex: 1.5,
      minWidth: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: "-7.5rem",
    }}
  >
    <img
      src={fraud}
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
  </div>

  {/* Right: Text Content */}
  <div
    style={{
      flex: 2,
      minWidth: 320,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "2.5rem",
      paddingLeft: "5vw",
      marginBottom: "0",
      marginTop: "-2.5rem"
    }}
  >
    <div>
      <h2 style={{ fontSize: "3.5rem", color: "black", margin: 0, fontWeight: 800, }}>
        Fraud screening features to help our merchants
      </h2>
      <p style={{ fontSize: "1.18rem", color: "#444", marginTop: "1.125rem", marginBottom: 0, lineHeight: 1.7,width: "100%" }}>
        We provide fraud screening features to alert merchants on any fraudulent representation of our Customers Cards (Debit/Credit) and prevent it for about 80 to 90%.
      </p>
    </div>
    <div>
      <h3 style={{ fontSize: "3rem", color: "black", margin: 0, fontWeight: 800, width: "100%" }}>
        Multi-Factor authentication of transaction.
      </h3>
      <p style={{ fontSize: "1.2rem", color: "#444", marginTop: "0.75rem", marginBottom: 0, lineHeight: 1.7 }}>
       Trust worthy Service to customers. Secure flow of transaction details among buyers, sellers and financial institutions.
      </p>
    </div>
  </div>
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
    padding: "5rem 0",
    margin: "0",
    boxSizing: "border-box",
    boxShadow: "none"
  }}
>
  <h2
    style={{
      fontSize: "4.8rem",
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
  </h2>
  <p
    style={{
      fontSize: "1.7rem",
      color: "#444",
      textAlign: "center",
      margin: "2rem 0 0 0",
      fontWeight: 400,
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
<div
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
        <h2 style={{
          fontSize: "4.5rem",
          color: "#222",
          margin: 0,
          fontWeight: 800,
          textAlign: "left",
          lineHeight: 1
        }}>
          Receive and make payments easily
        </h2>
        <p style={{
          fontSize: "1.5rem",
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
       
      </div>
    </section>

    
  </div>
</div>

        </section>
      </main>

 <div style={{ backgroundColor: 'white', padding: '2.5rem 1.25rem' }}>
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
          padding: '1.25rem1.875rem',
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