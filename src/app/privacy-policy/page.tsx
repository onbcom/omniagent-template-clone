import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "#F4F8FF",
          minHeight: "100vh",
        }}
      >
        {/* ============================================================ */}
        {/*  Hero Area                                                    */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "140px 20px 0" }}
        >
          <div
            className="flex w-full flex-col items-center"
            style={{ maxWidth: 1150 }}
          >
            {/* Heading */}
            <h1
              style={{
                fontSize: 37.6,
                fontWeight: 700,
                color: "#182230",
                lineHeight: "45.12px",
                letterSpacing: "-0.752px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Our Privacy Policy
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#475467",
                lineHeight: "25.6px",
                letterSpacing: "-0.32px",
                textAlign: "center",
                maxWidth: 600,
                margin: "16px 0 0",
              }}
            >
              Learn how we handle your personal information and ensure your
              privacy and data security on our platform.
            </p>

            {/* Date */}
            <p
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#667085",
                lineHeight: "20px",
                textAlign: "center",
                margin: "12px 0 0",
              }}
            >
              Last Updated on April, 24, 2025
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Content Sections                                              */}
        {/* ============================================================ */}
        <section
          className="flex w-full justify-center"
          style={{ padding: "48px 20px 60px" }}
        >
          <div
            className="flex w-full flex-col"
            style={{ maxWidth: 800 }}
          >
            {/* Information We Collect */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              Information We Collect
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              We may collect personal information from you when you visit our
              website, register for an account, or interact with our services.
              This information may include your name, email address, contact
              details, and any other information you voluntarily provide to us.
            </p>

            {/* How We Use Your Information */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              How We Use Your Information
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              We may use the information we collect from you for various
              purposes, including:
            </p>
            <ul
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "8px 0 0",
                paddingLeft: 24,
              }}
            >
              <li>Providing and improving our products and services</li>
              <li>Personalizing your experience on our website</li>
              <li>
                Communicating with you about your account and any updates or
                promotions
              </li>
              <li>
                Analyzing website traffic and user behavior to enhance our
                offerings
              </li>
            </ul>

            {/* Data Security */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              Data Security
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              We take data security seriously and employ industry-standard
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            {/* Third-Party Disclosure */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              Third-Party Disclosure
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              required by law or as necessary to provide our services. We may
              share your information with trusted third-party service providers
              who assist us in operating our website, conducting our business, or
              servicing you, provided that they agree to keep your information
              confidential.
            </p>

            {/* Cookies */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              Cookies
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              Our website may use cookies to enhance your browsing experience and
              collect information about how you interact with our site. You can
              adjust your browser settings to refuse cookies or alert you when
              cookies are being sent, but some features of the site may not
              function properly without cookies.
            </p>

            {/* Changes to this Privacy Policy */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              Changes to this Privacy Policy
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              We reserve the right to update or change this Privacy Policy at any
              time. Any changes will be posted on this page, and the effective
              date will be updated accordingly. We encourage you to review this
              Privacy Policy periodically for any updates.
            </p>

            {/* Contact Us */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0C111D",
                lineHeight: "28px",
                letterSpacing: "-0.44px",
                margin: "40px 0 0",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#344054",
                lineHeight: 1.7,
                margin: "12px 0 0",
              }}
            >
              If you have any questions or concerns about our Privacy Policy or
              the handling of your personal information, please contact us at{" "}
              hello@omniagent.com
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA + Footer                                                 */}
        {/* ============================================================ */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
