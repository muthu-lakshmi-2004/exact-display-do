import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-12 md:px-16">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-3xl font-bold text-green-700">
          Privacy Policy
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-gray-700">
          <p>
            At <strong>TruePathTech</strong>, developed by <strong>Rupa Tech</strong>,
            we respect your privacy and are committed to protecting the personal
            information of students, parents, and educators who use our platform.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              1. Information We Collect
            </h2>
            <ul className="mt-2 list-disc pl-6">
              <li>Basic details such as name, age group, email address</li>
              <li>Role information (Student / Parent / School)</li>
              <li>Assessment responses related to personality, interests, and intelligence</li>
              <li>Contact form submissions and communication details</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              2. How We Use Your Information
            </h2>
            <ul className="mt-2 list-disc pl-6">
              <li>To provide personalized career insights</li>
              <li>To improve assessment accuracy and user experience</li>
              <li>To communicate assessment results or counseling support</li>
              <li>For internal analytics and platform improvements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              3. Children’s Privacy
            </h2>
            <p className="mt-2">
              TruePathTech is designed for students aged 13 and above.
              For users under 18, we encourage parental involvement.
              We do not knowingly collect unnecessary personal data from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              4. Data Protection & Security
            </h2>
            <p className="mt-2">
              We use industry-standard security practices to protect your data.
              Assessment data is handled with strict confidentiality and is never sold
              to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              5. Third-Party Sharing
            </h2>
            <p className="mt-2">
              We do not sell, rent, or trade personal information. Data may only be
              shared with authorized counselors or partners strictly for guidance purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              6. Your Rights
            </h2>
            <ul className="mt-2 list-disc pl-6">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              7. Updates to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time.
              Any changes will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              8. Contact Us
            </h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <span className="font-medium">truepathtech@gmail.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
