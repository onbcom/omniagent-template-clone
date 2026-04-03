"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6l-10 7L2 6"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="3"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E4E7EC",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#0C111D",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#344054",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "#F4F8FF",
          minHeight: "100vh",
        }}
      >
        {/* Hero Text */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "37.6px",
              fontWeight: 700,
              color: "#182230",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.25,
              margin: "0 0 16px 0",
            }}
          >
            Questions, Ideas, or Feedback? We&apos;re Listening.
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#475467",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Whether you&apos;re curious about our product, need help with
            something, or just want to explore possibilities, our team is ready
            to connect.
          </p>
        </section>

        {/* Two-Column Layout */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 20px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "40px",
              maxWidth: "1150px",
              width: "100%",
              flexWrap: "wrap" as const,
            }}
          >
            {/* Left Column — Contact Form */}
            <div style={{ flex: "1 1 60%", minWidth: "320px" }}>
              <form onSubmit={handleSubmit}>
                {/* Row: First Name + Last Name */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px",
                    flexWrap: "wrap" as const,
                  }}
                >
                  <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                    <label style={labelStyle}>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                    <label style={labelStyle}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px",
                    flexWrap: "wrap" as const,
                  }}
                >
                  <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                    <label style={labelStyle}>Email*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: "1 1 calc(50% - 10px)", minWidth: "200px" }}>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle}>Message*</label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputStyle,
                      height: "150px",
                      resize: "vertical" as const,
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#155EEF",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                >
                  Submit Now
                </button>
              </form>
            </div>

            {/* Right Column — Contact Info Card */}
            <div style={{ flex: "1 1 35%", minWidth: "280px" }}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "30px",
                }}
              >
                {/* 24x7 Support Label */}
                <span
                  style={{
                    fontSize: "12px",
                    color: "#667085",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  24x7 Support
                </span>

                {/* Heading */}
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0C111D",
                    margin: "0 0 20px 0",
                  }}
                >
                  Contact Support
                </h2>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#E4E7EC",
                    marginBottom: "24px",
                  }}
                />

                {/* Email */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <MailIcon />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#667085",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Email
                    </span>
                    <a
                      href="mailto:help@omniagent.com"
                      style={{
                        fontSize: "15px",
                        color: "#155EEF",
                        textDecoration: "none",
                      }}
                    >
                      help@omniagent.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#667085",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Phone
                    </span>
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#0C111D",
                      }}
                    >
                      +1 (717) 550-1675
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <LocationIcon />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#667085",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Address
                    </span>
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#344054",
                        lineHeight: 1.5,
                      }}
                    >
                      California, 90011
                      <br />
                      49th St. Los Angeles,
                      <br />
                      United States
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
