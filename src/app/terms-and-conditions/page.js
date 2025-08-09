/**
 * Renders the Terms and Conditions page.
 * This is a static page displaying the company's terms of service.
 */
export default function TermsAndConditions() {
  return (
    // Main container with centered content and padding
    <div className="container mx-auto max-w-4xl p-8">
      {/* Page Title */}
      <h1
        className="text-3xl font-bold mb-6 text-orange-600"
        style={{ fontFamily: "serif" }}
      >
        Terms and Conditions
      </h1>

      {/* Content Body */}
      <div className="prose max-w-none text-gray-700">
        <p>Last updated: August 10, 2025</p>
        <p>
          These Terms and Conditions govern your use of the NAMYAM preview
          website. By accessing or using this site, you agree to these terms.
        </p>

        <h2 className="text-orange-600">1. Service Description</h2>
        <p>
          This website is a temporary preview of the upcoming NAMYAM platform.
          Its sole purpose is to collect email addresses from users who wish to
          be notified when the full site launches. No other services are
          currently provided.
        </p>

        <h2 className="text-orange-600">2. Email Collection & Use</h2>
        <p>
          By submitting your email address, you agree to receive a notification
          when our full website launches. We may also send occasional updates
          before launch. You can request removal of your email at any time.
        </p>

        <h2 className="text-orange-600">3. Intellectual Property</h2>
        <p>
          All branding, content, and materials on this website are owned by
          NAMYAM and protected by copyright and trademark laws.
        </p>

        <h2 className="text-orange-600">4. Limitation of Liability</h2>
        <p>
          As this is a preview service with no commercial transactions, NAMYAM
          is not liable for any losses, damages, or inconvenience arising from
          your use of this site.
        </p>

        <h2 className="text-orange-600">5. Governing Law</h2>
        <p>
          These terms are governed by the laws of your local jurisdiction unless
          otherwise required by law.
        </p>

        <h2 className="text-orange-600">Contact Us</h2>
        <p>
          If you have questions about these Terms, email us at{" "}
          <a
            href="mailto:contact@namyam.com"
            className="text-orange-600 hover:underline"
          >
            contact@namyam.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}