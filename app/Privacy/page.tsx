export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Last Updated: 2025-07-28
              This Privacy Policy describes how Brightberry SAS
               (hereinafter &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores,
               and protects the personal data of users of its applications
            </p>
          </div>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Details :
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-red-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  1. Who We Are
                </h3>
                <p className="text-center text-gray-900">
                  Brightberry SAS is a privately owned company.
                  Our applications are designed for research and entertainment purposes only,
                  and are not affiliated with any government entity.
                  For any privacy-related inquiries, please contact:
                  contact@brightberry.fr

                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-orange-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  2. Data Collected
                </h3>
                <p className="text-center text-gray-600">
                  Collected Data:
                    - Email address (via sign-up form)
                    - Device identifier (if applicable)

                    Collection Methods:
                    - The email address is collected through a mandatory registration form.
                    - Technical data such as the device identifier may be collected automatically
                     for security and identification purposes.

                    Mandatory Data:
                    These data are required to use the app.
                    Users cannot access the applications without providing them.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  3. Purpose of Processing
                </h3>
                <p className="text-center text-gray-600">
                  The collected data is used to:
                    - Create and manage user accounts
                    - Ensure secure access to the apps

                    No marketing emails or notifications are sent. No data is used for targeted advertising.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  4. Data Sharing
                </h3>
                <p className="text-center text-gray-600">
                  We do not sell or share your personal data with third parties for commercial purposes.

                  Some services used in our applications may store or process data outside the European Union.
                  In such cases, appropriate safeguards are applied to ensure your data remains protected.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  5. Children
                </h3>
                <p className="text-center text-gray-600">
                  Our applications are not intended for children under the age of 13.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  6. Data Security and Retention
                </h3>
                <p className="text-center text-gray-600">
                  Data is stored on secure servers.
                  Technical and organizational measures are implemented to ensure data
                  confidentiality and integrity.

                  Data is retained only as long as necessary for the permitted purposes,
                  then deleted in accordance with applicable data protection regulations.

                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  7. User Rights
                </h3>
                <p className="text-center text-gray-600">
                  In accordance with the General Data Protection Regulation (GDPR), users have the following rights:
                    - Right of access to their personal data
                    - Right to rectification if data is inaccurate
                    - Right to erasure of their data
                    - Right to restriction or objection to processing

                    We will respond to all requests within a maximum of one month.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  8. Changes to This Policy
                </h3>
                <p className="text-center text-gray-600">
                  This Privacy Policy may be updated at any time.
                  Users are encouraged to review this policy each time they use our applications.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  9. Contact
                </h3>
                <p className="text-center text-gray-600">
                  For any questions regarding this Privacy Policy or your data, please contact:
                  contact@brightberry.fr
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-500 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  10. Data Access, Modification, or Deletion
                </h3>
                <p className="text-center text-gray-600">
                  To consult, modify or delete your data, please send an email to contact@brightberry.fr
                  including the identifier used when your account was created.

                  To delete your account,
                  you can follow the procedure on the following page: brightberry.fr/delete-account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}