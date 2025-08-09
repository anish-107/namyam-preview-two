export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl p-8">
      <h1
        className="text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400"
        style={{ fontFamily: "serif" }}
      >
        Privacy Policy
      </h1>
      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p>Last updated: August 09, 2025</p>

        <p>
          This Privacy Policy explains how NAMYAM collects, uses, and protects
          your information when you use our preview website. Since this is an
          early preview, our only purpose is to gather email addresses from
          interested visitors so that we can notify you when our full platform
          officially launches.
        </p>

        <h2 className="text-orange-600 dark:text-orange-400">
          1. Information We Collect
        </h2>
        <p>
          The only personal information we collect is the email address you
          voluntarily provide via our subscription or sign-up form.
        </p>

        <h2 className="text-orange-600 dark:text-orange-400">
          2. How We Use Your Information
        </h2>
        <p>We use your email address solely to:</p>
        <ul>
          <li>Notify you when our full website launches.</li>
          <li>
            Optionally share important updates about NAMYAM prior to launch.
          </li>
        </ul>

        <h2 className="text-orange-600 dark:text-orange-400">
          3. Data Sharing
        </h2>
        <p>
          We do not sell, rent, or trade your email address with any third
          parties. Your information will only be used by NAMYAM for the purposes
          stated above.
        </p>

        <h2 className="text-orange-600 dark:text-orange-400">
          4. Data Storage & Security
        </h2>
        <p>
          We take reasonable steps to protect your email from unauthorized
          access or disclosure. However, no method of transmission over the
          internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-orange-600 dark:text-orange-400">
          5. Your Rights
        </h2>
        <p>
          You have the right to request deletion of your email from our records
          at any time by contacting us at{" "}
          <a
            href="mailto:contact@namyam.com"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            contact@namyam.com
          </a>
          .
        </p>

        <h2 className="text-orange-600 dark:text-orange-400">Contact Us</h2>
        <p>
          For questions about this Privacy Policy, please email us at{" "}
          <a
            href="mailto:contact@namyam.com"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            contact@namyam.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
