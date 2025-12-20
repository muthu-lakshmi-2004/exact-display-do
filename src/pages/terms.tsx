import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-12 md:px-16">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-3xl font-bold text-green-700">
          Terms & Conditions
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-gray-700">
          <p>
            Welcome to <strong>TruePathTech</strong>. By accessing or using our website,
            you agree to comply with the following Terms and Conditions.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              1. Purpose of the Platform
            </h2>
            <p className="mt-2">
              TruePathTech provides career guidance based on scientifically
              recognized psychological and aptitude models. The results are
              advisory in nature and meant for guidance, not absolute decisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              2. User Eligibility
            </h2>
            <ul className="mt-2 list-disc pl-6">
              <li>Students aged 13 and above</li>
              <li>Parents or legal guardians</li>
              <li>Educators and institutions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              3. Assessment Disclaimer
            </h2>
            <p className="mt-2">
              Assessment outcomes are based on user-provided inputs and
              scientifically accepted frameworks. Final academic or career
              decisions should be made in consultation with parents, educators,
              or counselors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              4. User Responsibilities
            </h2>
            <ul className="mt-2 list-disc pl-6">
              <li>Provide accurate and honest information</li>
              <li>Use the platform respectfully</li>
              <li>Do not misuse or attempt to manipulate assessments</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              5. Intellectual Property
            </h2>
            <p className="mt-2">
              All content, assessments, designs, and branding belong to
              TruePathTech and Rupa Tech. Unauthorized use or reproduction is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              TruePathTech shall not be held responsible for decisions made solely
              based on assessment outcomes without professional consultation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              7. Termination of Access
            </h2>
            <p className="mt-2">
              We reserve the right to restrict or terminate access if the platform
              is misused or terms are violated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              8. Governing Law
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws applicable in India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-600">
              9. Contact Information
            </h2>
            <p className="mt-2">
              For any questions regarding these Terms, please contact:
              <br />
              <span className="font-medium">truepathtech@gmail.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
