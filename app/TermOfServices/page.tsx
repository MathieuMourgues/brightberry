export default function TermOfServices() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        
        <div className="space-y-8">
          <p className="text-sm font-semibold text-black">
            Last updated: December 3, 2025
          </p>

          {/* Overview Section */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-black mb-3">
              This document explains the terms and conditions that govern your access to and use of the Services provided by Brightberry, including our mobile applications and platforms that allow users to publish idea cards, images, and public comments. By using the Services, you enter a legally binding agreement with Brightberry.
            </p>
            <p className="text-black">
              The Services are designed to foster creativity, collaboration, and constructive exchange between users. To protect the integrity of the platform and its community, all users must comply with these Terms, our Privacy Policy, and our Community Guidelines.
            </p>
          </div>

          {/* Your Responsibilities Section */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Responsibilities</h2>
            <p className="text-black font-semibold mb-3">By accessing or using the Services, you acknowledge and agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-black ml-2">
              <li>Provide accurate information when creating an account</li>
              <li>Behave respectfully and lawfully toward other users</li>
              <li>Publish only content that you have the right to share</li>
              <li>Refrain from posting harmful, illegal, or prohibited content</li>
              <li>Use the platform in accordance with these Terms</li>
            </ul>
          </div>

          {/* Our Role Section */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Role</h2>
            <p className="text-black mb-3">
              Brightberry may moderate content, respond to reports, suspend accounts, and take measures to ensure user safety. Your personal data is processed in accordance with our Privacy Policy.
            </p>
            <div className="bg-red-100 border border-red-300 p-3 rounded">
              <p className="text-red-700 font-semibold">
                ⚠️ If you disagree with any part of these Terms, you should not use the Services.
              </p>
            </div>
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Section 1: Introduction and Acceptance of Terms</h2>
            
            <div className="bg-gray-50 p-6 rounded my-4">
              <p className="text-black mb-4">
                Welcome! By registering and using our websites, services, mobile applications, developer platform, or any content or functionality provided as part of these services (collectively, the &quot;Services&quot;), you agree to enter into a legally binding agreement with Brightberry, a company registered in France and located at 410 Avenue des Senes, 83210 Solliès-Pont (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), under the conditions described below (the &quot;Agreement&quot;).
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">What These Terms Include:</h3>
              <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                <li><strong>Section 2:</strong> Registration, eligibility, and contract formation</li>
                <li><strong>Section 3:</strong> Your rights and responsibilities regarding content</li>
                <li><strong>Section 4:</strong> Acceptable use and prohibited content (zero-tolerance policy)</li>
                <li><strong>Section 5:</strong> Moderation, reporting, and user blocking</li>
                <li><strong>Sections 6–12:</strong> Termination, IP rights, liability, privacy, and contact</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-300 p-4 rounded my-4">
                <p className="text-black font-semibold mb-2">📋 Key Requirements:</p>
                <p className="text-black">
                  Your access is conditioned on accepting these Terms, our Privacy Policy, and Community Guidelines. By using the Services, you agree to be bound by all documents.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-black mb-3 mt-4">Updates to Terms</h3>
              <p className="text-black mb-3">
                We may update these Terms at any time. It&apos;s your responsibility to review changes periodically. Continued use constitutes acceptance of revised Terms.
              </p>

              <h3 className="text-lg font-semibold text-black mb-3 mt-4">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-black ml-2">
                <li>Access, save, and print current Terms anytime</li>
                <li>Review the English contractual version</li>
                <li>Complete control over your personal data (see Privacy Policy)</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Section 2: Registration and Contract</h2>

            <div className="space-y-6">
              {/* 2.1 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.1 - Registration and Account Creation</h3>
                <p className="text-black mb-3">
                  To access certain features, you must create a user account (&quot;Account&quot;). You may register using:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>Email address and password</li>
                  <li>Google account</li>
                  <li>Apple account</li>
                </ul>
                <p className="text-black text-sm text-gray-600 italic">
                  Note: We may add additional authentication providers in the future. Email verification may be systematically implemented later.
                </p>
                <p className="text-black mt-3">
                  When registering, provide accurate and complete information and keep it updated. You are not entitled to continued access if you violate these Terms.
                </p>
              </div>

              {/* 2.2 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.2 - Passwords and Account Access</h3>
                <p className="text-black mb-3 font-semibold">If using email and password:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>You are responsible for keeping credentials confidential</li>
                  <li>Never share your password</li>
                  <li>You are responsible for all activity under your Account</li>
                </ul>
                <p className="text-black text-sm text-gray-600">
                  Need help? Contact contact@brightberry.fr for password assistance. Automated reset features may be added later. Currently, you cannot change login methods, but this option may be added.
                </p>
              </div>

              {/* 2.3 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.3 - Eligibility</h3>
                <p className="text-black mb-3">By registering, you represent that:</p>
                <ul className="list-disc list-inside space-y-2 text-black ml-2">
                  <li>You meet the legal age of majority (generally 18 years old)</li>
                  <li>You have the legal capacity to enter into this Agreement</li>
                  <li>Your use complies with applicable laws</li>
                </ul>
              </div>

              {/* 2.4 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.4 - Formation of Contract</h3>
                <p className="text-black mb-3">A binding agreement is formed when you:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>Create an Account</li>
                  <li>Accept these Terms</li>
                  <li>Access or use the Services</li>
                </ul>
                <p className="text-black">Using Google or Apple login constitutes acceptance of the full Agreement, including Privacy Policy and Community Guidelines.</p>
              </div>

              {/* 2.5 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.5 - One Account Per Person</h3>
                <p className="text-black mb-3">
                  Users may create only one personal Account. Creating multiple accounts to evade moderation or manipulate interactions is prohibited.
                </p>
                <p className="text-black text-sm bg-red-50 border border-red-200 p-2 rounded">
                  Brightberry may delete or merge accounts that appear to be duplicates.
                </p>
              </div>

              {/* 2.6 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.6 - Account Deletion</h3>
                <p className="text-black mb-3">
                  Under GDPR and data protection laws, you may delete your Account anytime via the in-app option or by contacting contact@brightberry.fr.
                </p>
                <p className="text-black mb-3"><strong>Upon deletion:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-black ml-2">
                  <li>Personal data will be processed or removed per our Privacy Policy</li>
                  <li>Public content remains in anonymized form (non-identifiable)</li>
                </ul>
                <p className="text-black text-sm text-gray-600 italic">
                  Note: Account deactivation (temporary suspension) is not currently available.
                </p>
              </div>

              {/* 2.7 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">2.7 - Paid Features</h3>
                <p className="text-black mb-3">
                  We may introduce Paid Services in the future. When available, we will clearly disclose:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-2">
                  <li>Types of Paid Services and terms</li>
                  <li>Payment methods</li>
                  <li>Refund policies and app store rules</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Section 3: User Content & Contribution</h2>

            <div className="space-y-6">
              {/* 3.1 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">3.1 - Nature of User Content</h3>
                <p className="text-black mb-3">The Services allow you to create and share &quot;User Content,&quot; including:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>Idea cards with images and visual material</li>
                  <li>Text descriptions</li>
                  <li>Public comments on cards</li>
                  <li>Any other shared material</li>
                </ul>
                <p className="text-black mb-2"><strong>Default:</strong> All content is public</p>
                <p className="text-black text-sm text-gray-600">Other users can view, comment on, and interact with your content.</p>
              </div>

              {/* 3.2 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">3.2 - Your Responsibility for Content</h3>
                <p className="text-black mb-3">You are solely responsible for your User Content. By submitting, you represent and warrant:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>You own or have rights to publish the content</li>
                  <li>Content doesn&apos;t violate laws or third-party rights</li>
                  <li>Content complies with these Terms and Community Guidelines</li>
                </ul>
                <p className="text-black text-sm bg-red-50 border border-red-200 p-2 rounded">
                  Brightberry doesn&apos;t endorse, monitor, or guarantee the accuracy of User Content. You may encounter inaccurate or inappropriate content.
                </p>
              </div>

              {/* 3.3 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">3.3 - License Granted by You</h3>
                <p className="text-black mb-3">By submitting content, you grant Brightberry a worldwide, royalty-free license to:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>Host, store, and display your content</li>
                  <li>Make it available to other users</li>
                  <li>Use it to improve the Services</li>
                </ul>
                <p className="text-black text-sm">
                  This license ends when you delete content or your account, except where it&apos;s shared or retained in anonymized form.
                </p>
              </div>

              {/* 3.4 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">3.4 - Right to Request Content Deletion</h3>
                <p className="text-black mb-3">You may request permanent deletion of your personal data and content:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>If active: via in-app deletion feature</li>
                  <li>If suspended: by emailing contact@brightberry.fr</li>
                  <li>Anytime: via email request</li>
                </ul>
                <p className="text-black text-sm">We will comply with GDPR and data protection laws.</p>
              </div>

              {/* 3.5 & 3.6 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">3.5 & 3.6 - Compliance and Comments</h3>
                <p className="text-black mb-3">All content must comply with Section 4 rules. Comments are:</p>
                <ul className="list-disc list-inside space-y-2 text-black mb-4 ml-2">
                  <li>Public and attached to cards</li>
                  <li>Subject to same compliance rules</li>
                  <li>Subject to removal for violations</li>
                </ul>
              </div>

              {/* 3.7 */}
              <div className="bg-gray-50 p-6 rounded">
                <h3 className="text-xl font-semibold text-black mb-3">3.7 - Feedback and Suggestions</h3>
                <p className="text-black">
                  Any feedback you provide can be used by Brightberry without compensation or confidentiality obligations. This doesn&apos;t affect your User Content rights.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          {/* Section 4 - Summary */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Section 4: Acceptable Use & Prohibited Content</h2>

            <div className="bg-red-50 border-2 border-red-400 p-6 rounded mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">⛔ ZERO-TOLERANCE POLICY</h3>
              <p className="text-red-700 font-semibold mb-3">
                Brightberry maintains a zero-tolerance policy toward harmful, abusive, or illegal behavior. Violations result in content removal, suspension, or account termination.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">Prohibited Content:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Sexual or Explicit Content</p>
                    <p className="text-black text-sm">Nudity, pornography, sexual acts, or exploitation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Violence and Extremism</p>
                    <p className="text-black text-sm">Threats, violence promotion, terrorist content</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Hate Speech and Harassment</p>
                    <p className="text-black text-sm">Discrimination, bullying, targeted attacks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Illegal Activities</p>
                    <p className="text-black text-sm">Self-harm encouragement, drug/weapon promotion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Privacy Violations</p>
                    <p className="text-black text-sm">Sharing others&apos; personal info without consent</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">IP Violations</p>
                    <p className="text-black text-sm">Unauthorized copyrighted material, plagiarism</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Spam and Fraud</p>
                    <p className="text-black text-sm">Scams, phishing, misleading practices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">•</span>
                  <div>
                    <p className="font-semibold text-black">Fake Identities</p>
                    <p className="text-black text-sm">Impersonation, misrepresentation</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-semibold text-black mb-3">Community Guidelines Summary:</h3>
              <ul className="space-y-2 text-black">
                <li>✓ Be respectful and constructive</li>
                <li>✓ Share only content you own or have rights to</li>
                <li>✓ Keep the platform safe (no illegal/dangerous content)</li>
                <li>✓ Use your identity responsibly</li>
                <li>✓ Protect privacy (yours and others&apos;)</li>
                <li>✓ No spam or commercial exploitation</li>
                <li>✓ Stay within legal boundaries</li>
                <li>✓ Respect platform integrity</li>
                <li>✓ Report violations responsibly</li>
              </ul>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          {/* Sections 5-12 Summary */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Sections Overview</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Section 5: Moderation</h3>
                <p className="text-sm text-black">Report content, blocking, 24-hour review, appeals available</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Section 6: Termination</h3>
                <p className="text-sm text-black">Suspension, termination, content removal processes</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Section 7: IP Rights</h3>
                <p className="text-sm text-black">Ownership, licenses, copyright protection</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Section 8: Liability</h3>
                <p className="text-sm text-black">Warranties, disclaimers, limitations of liability</p>
              </div>
              <div className="bg-amber-50 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Section 9: Privacy</h3>
                <p className="text-sm text-black">GDPR compliance, data rights, retention policies</p>
              </div>
              <div className="bg-amber-50 p-4 rounded">
                <h3 className="font-semibold text-black mb-2">Sections 10-12: Final Terms</h3>
                <p className="text-sm text-black">Updates, governing law, French jurisdiction, contact info</p>
              </div>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          {/* Contact */}
          <section className="bg-gray-900 text-white p-8 rounded">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p><strong>Company:</strong> Brightberry</p>
              <p><strong>SIREN:</strong> 943 427 831 (R.C.S. Toulon)</p>
              <p><strong>Address:</strong> 410 Avenue des Sènes, 83210 Solliès-Pont, France</p>
              <p><strong>Email:</strong> <a href="mailto:contact@brightberry.fr" className="text-blue-300 hover:underline">contact@brightberry.fr</a></p>
              <p><strong>Website:</strong> <a href="https://brightberry.fr" className="text-blue-300 hover:underline">https://brightberry.fr</a></p>
            </div>
            <p className="mt-4 text-sm text-gray-300">We respond to inquiries within a reasonable timeframe.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
