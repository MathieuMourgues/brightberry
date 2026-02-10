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
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 1 – Introduction and Acceptance of Terms</h2>
          <p className="mb-4">
            Welcome! By registering and using our websites, services, mobile applications, developer platform, or any content or functionality provided as part of these services (collectively, the “Services”), you agree to enter into a legally binding agreement with Brightberry, a company registered in France and located at 410 Avenue des Senes, 83210 Solliès-Pont (“we”, “us”, “our”), under the conditions described below (the “Agreement”).
          </p>
          <p className="mb-4">
            These Terms of Service (“Terms”) govern your access to and use of the Services. They include, among other elements:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Section 2, which describes the conditions of registration, eligibility, and contract formation;</li>
            <li>Section 3, which explains your rights and responsibilities regarding content you create or interact with;</li>
            <li>Section 4, which outlines acceptable use and clearly defines prohibited content and behaviors (including our zero-tolerance policy);</li>
            <li>Section 5, which details moderation, content reporting, and user blocking;</li>
            <li>Sections 6–12, which include rules on account termination, intellectual property, liability, privacy, updates to the Terms, governing law, and how to contact us.</li>
          </ul>
          <p className="mb-4">
            Your access to and use of the Services is conditioned upon your acceptance of and compliance with these Terms, including our Privacy Policy and Community Guidelines, which form an integral part of this Agreement. By accessing or using the Services, you agree to be bound by all of these documents.
          </p>
          <p className="mb-4">
            We reserve the right to update or modify these Terms at our sole discretion. It is your responsibility to review this page periodically for changes. Your continued use of the Services after any updates constitutes your acceptance of the revised Terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 2 – Registration and Contract</h2>
          <h3 className="text-xl font-medium mb-2">Section 2.1 – Registration and Account Creation</h3>
          <p className="mb-4">
            To access and use certain features of the Services, you must create a user account (“Account”). You may register using:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>an email address and password,</li>
            <li>a Google account, or</li>
            <li>an Apple account.</li>
          </ul>
          <p className="mb-4">
            We may add additional authentication providers in the future.
          </p>
          <p className="mb-4">
            When registering, you must provide accurate and complete information and keep it up to date. You are not entitled to registration or continued access to the Services if you violate these Terms. We may refuse or revoke access at our reasonable discretion.
          </p>
          <p className="mb-4">
            Depending on the method used, verification of the email address may not yet be systematically implemented but may be added in the future.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 2.2 – Passwords and Account Access</h3>
          <p className="mb-4">
            If you register using an email and password:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you are responsible for keeping your login credentials confidential;</li>
            <li>you agree not to share your password with anyone;</li>
            <li>you acknowledge that you are responsible for any activity that occurs under your Account.</li>
          </ul>
          <p className="mb-4">
            If you forget your password or wish to change it, you may request assistance by contacting us at contact@brightberry.fr. Automated password reset features may be added in the future.
          </p>
          <p className="mb-4">
            You cannot currently change your login method (e.g., switching from Google login to email login), but this option may be added later.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 2.3 – Eligibility</h3>
          <p className="mb-4">
            By registering or using the Services, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you meet the legal age of majority required in your country of residence (generally 18 years old),</li>
            <li>you have the legal capacity to enter into this Agreement,</li>
            <li>your use of the Services does not contravene applicable laws.</li>
          </ul>
          <p className="mb-4">
            We may request proof of identity or age when necessary to comply with our obligations or to enhance user safety.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 2.4 – Formation of the Contract</h3>
          <p className="mb-4">
            A legally binding agreement between you and Brightberry is formed when:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you create an Account,</li>
            <li>you check any box or confirmation element indicating acceptance of these Terms,</li>
            <li>you access or use the Services, including without creating an Account, or</li>
            <li>all of the above.</li>
          </ul>
          <p className="mb-4">
            If you sign in using Google or Apple authentication, you acknowledge that such login constitutes acceptance of this Agreement, including the Privacy Policy and Community Guidelines.
          </p>
          <p className="mb-4">
            This Agreement remains in effect until your Account is terminated as described in Section 6.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 2.5 – One Account per Person</h3>
          <p className="mb-4">
            Users are permitted to create only one personal Account. Creating multiple accounts to evade moderation, circumvent blocking, or manipulate interactions on the Services is prohibited.
          </p>
          <p className="mb-4">
            Brightberry may delete or merge accounts that reasonably appear to be duplicates or created in violation of this rule.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 2.6 – Account Deletion</h3>
          <p className="mb-4">
            In accordance with applicable data protection laws (including the GDPR), you may delete your Account at any time via the in-app option or by contacting us at contact@brightberry.fr.
          </p>
          <p className="mb-4">
            Upon deletion:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>your personal data will be processed or removed in accordance with our Privacy Policy,</li>
            <li>your public content (such as posts and comments) will remain visible in anonymized form, meaning it no longer allows us to identify you.</li>
          </ul>
          <p className="mb-4">
            Account deactivation (temporary suspension requested by the user) is not currently available.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 2.7 – Paid Features</h3>
          <p className="mb-4">
            We may introduce Paid Services in the future, such as one-time feature unlocks.
          </p>
          <p className="mb-4">
            When this occurs:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>the types of Paid Services and their terms will be clearly disclosed,</li>
            <li>payment methods will be determined at a later stage,</li>
            <li>any rules related to refunds or obligations from app stores will be specified when the features become available.</li>
          </ul>
          <p className="mb-4">
            Premium content or features may or may not be restricted to paying users, depending on future product decisions.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Section 3 – User Content & Contribution</h2>
          <h3 className="text-xl font-medium mb-2">Section 3.1 – Nature of User Content</h3>
          <p className="mb-4">
            The Services allow users to create, upload, publish, and interact with “User Content,” which may include, without limitation:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>idea cards composed of images, photos, or other visual material;</li>
            <li>text descriptions;</li>
            <li>public comments under idea cards;</li>
            <li>any other material submitted, displayed, or shared through the Services.</li>
          </ul>
          <p className="mb-4">
            All User Content published through the Services is public by default, unless otherwise indicated.
          </p>
          <p className="mb-4">
            You understand that other users may view, comment on, or interact with your User Content.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 3.2 – Responsibility for User Content</h3>
          <p className="mb-4">
            You are solely responsible for the User Content you submit, publish, or share.
          </p>
          <p className="mb-4">
            By submitting User Content, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you own or have the necessary rights to publish the Content;</li>
            <li>your Content does not violate any laws or third-party rights (including privacy, publicity, trademark, or copyright);</li>
            <li>your Content complies with these Terms and our Community Guidelines.</li>
          </ul>
          <p className="mb-4">
            Brightberry does not endorse, monitor, or guarantee the accuracy, safety, or legitimacy of User Content.
          </p>
          <p className="mb-4">
            You acknowledge that you may be exposed to content that is inaccurate, inappropriate, or otherwise objectionable.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 3.3 – License Granted by the User</h3>
          <p className="mb-4">
            By submitting User Content, you grant Brightberry a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>host, store, reproduce, display, distribute, publish, and modify the Content;</li>
            <li>make the Content available to other users as part of the Services;</li>
            <li>use the Content for the operation, improvement, and promotion of the Services.</li>
          </ul>
          <p className="mb-4">
            This license remains in effect until you delete your Content or your Account, except where the Content:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>has been shared by other users;</li>
            <li>has been included in public discussions;</li>
            <li>is retained in anonymized or aggregated form.</li>
          </ul>
          <p className="mb-4">
            When your Account is deleted or suspended, your User Content may remain online in anonymized form, meaning it no longer allows us to identify you, unless you formally request the permanent deletion of all your data as described below.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 3.4 – Right to Request Deletion of User Content and Personal Data</h3>
          <p className="mb-4">
            Regardless of anonymization:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you may request the permanent deletion of all your personal data and User Content at any time by contacting us at contact@brightberry.fr.</li>
            <li>If your account is not suspended, this request may also be submitted directly through the in-app account deletion feature.</li>
            <li>If your account has been suspended, the deletion request must be submitted by email.</li>
          </ul>
          <p className="mb-4">
            We will process deletion requests in accordance with applicable data protection laws, including the GDPR.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 3.5 – Compliance with Content Standards</h3>
          <p className="mb-4">
            All User Content must comply with the Acceptable Use rules and Prohibited Content policies defined in Section 4 (“Acceptable Use & Prohibited Content”).
          </p>
          <p className="mb-4">
            By submitting content, you acknowledge that you have read Section 4 and agree to abide by all rules and restrictions described therein.
          </p>
          <p className="mb-4">
            If you fail to comply with Section 4, Brightberry reserves the right to remove or anonymize the content, suspend or terminate your account, in accordance with Section 6.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 3.6 – Public Comments</h3>
          <p className="mb-4">
            Comments posted under idea cards are considered User Content and must comply with the same rules.
          </p>
          <p className="mb-4">
            Comments are:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>public,</li>
            <li>attached to the corresponding card,</li>
            <li>visible to all users.</li>
          </ul>
          <p className="mb-4">
            Brightberry may remove comments that violate these Terms, and repeated violations may lead to Account suspension as described in Section 6.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 3.7 – Feedback and Suggestions</h3>
          <p className="mb-4">
            If you provide Brightberry with any feedback, suggestions, or ideas for improvement, you agree that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>such feedback is provided voluntarily,</li>
            <li>Brightberry may use it without obligation to compensate you,</li>
            <li>no confidentiality or ownership rights arise from such feedback.</li>
          </ul>
          <p className="mb-4">
            This does not affect your rights regarding your own User Content.
          </p>
        </section>

          <hr className="my-8 border-gray-300" />

        {/* Section 4 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 4 – Acceptable Use & Prohibited Content</h2>
          <h3 className="text-xl font-medium mb-2">Section 4.1 – General Principles</h3>
          <p className="mb-4">
            You agree to use the Services in a respectful, lawful, and responsible manner.
          </p>
          <p className="mb-4">
            You must not use the Services in any way that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>violates these Terms, the Community Guidelines, or applicable law;</li>
            <li>interferes with or disrupts the integrity, security, or performance of the Services;</li>
            <li>harms or attempts to harm other users.</li>
          </ul>
          <p className="mb-4">
            Brightberry maintains a zero-tolerance policy toward harmful, abusive, or illegal behavior. Violations may result in removal of content, suspension, or permanent termination of your Account, as further described in Section 6.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 4.2 – Zero-Tolerance Policy for Prohibited Content</h3>
          <p className="mb-4">
            You must not create, upload, share, comment on, or otherwise engage with any content that includes or promotes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Sexual or explicit content</strong>: nudity, pornography, or sexual acts; sexually suggestive material involving adults or minors; sexual exploitation or solicitation.</li>
            <li><strong>Violence and extremism</strong>: threats of violence or physical harm; promotion of violent acts, terrorism, or extremist ideology; graphic or disturbing images.</li>
            <li><strong>Hate speech and harassment</strong>: attacks or discrimination based on race, ethnicity, nationality, religion, disability, sex, gender, sexual orientation, age, or any protected characteristic; bullying, intimidation, or harassment of any kind; insults, degrading language, or targeted humiliation.</li>
            <li><strong>Illegal or harmful activities</strong>: self-harm, suicide encouragement, or dangerous behaviors; promotion of illegal drugs, weapons, or criminal activities; incitement to commit unlawful acts.</li>
            <li><strong>Privacy violations</strong>: sharing personal or confidential information about others without consent (names, photos, addresses, contact details).</li>
            <li><strong>Intellectual property violations</strong>: copyrighted images, text, or other material used without permission; plagiarism or unauthorized reuse of other users’ contributions.</li>
            <li><strong>Spam, fraud, and manipulation</strong>: scams, phishing attempts, or misleading practices; repetitive or irrelevant posting; attempts to artificially influence visibility, ranking, or user interactions.</li>
            <li><strong>Fake identities or impersonation</strong>: misrepresenting your identity, affiliation, or qualifications; impersonating individuals, organizations, or public figures.</li>
          </ul>
          <p className="mb-4">
            Brightberry may remove any User Content that violates these provisions, with or without prior notice.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 4.3 – Community Guidelines</h3>
          <p className="mb-4">
            To maintain a safe, respectful, and constructive environment, all users must follow these Community Guidelines when using the Services.
          </p>
          <p className="mb-4">
            They apply to all User Content, including idea cards, images, descriptions, and public comments.
          </p>
          <p className="mb-4">
            Violations may result in content removal, account limitations, suspension, or permanent termination as described in Section 6.
          </p>
          <p className="mb-4">
            <strong>Be respectful and constructive</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Interact courteously and respectfully.</li>
            <li>Avoid harassment, bullying, and personal attacks.</li>
            <li>Focus on ideas and collaboration, not individuals.</li>
          </ul>
          <p className="mb-4">
            <strong>Share only content you own or have rights to</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Do not publish copyrighted material without permission.</li>
            <li>Do not upload photos or personal data of others without consent.</li>
          </ul>
          <p className="mb-4">
            <strong>Keep the platform safe</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>No illegal, dangerous, violent, or hateful content.</li>
            <li>No content harmful to minors.</li>
            <li>No sexual content or nudity.</li>
          </ul>
          <p className="mb-4">
            <strong>Use your identity responsibly</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Do not impersonate others.</li>
            <li>Do not use stolen identities.</li>
            <li>Do not misrepresent your affiliation.</li>
          </ul>
          <p className="mb-4">
            <strong>Protect privacy</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Do not share private or sensitive information about yourself or others.</li>
            <li>Do not attempt to access or misuse another user’s account.</li>
          </ul>
          <p className="mb-4">
            <strong>No spam or commercial exploitation</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>No spam, promotions, or commercial offers without permission.</li>
            <li>No scams, phishing, or misleading content.</li>
          </ul>
          <p className="mb-4">
            <strong>Stay within legal boundaries</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Do not promote illegal drugs, weapons, or criminal acts.</li>
            <li>Do not instruct others on illegal activities.</li>
          </ul>
          <p className="mb-4">
            <strong>Respect platform integrity</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>No bots, scrapers, or automated tools.</li>
            <li>Do not attack or disrupt the Services.</li>
            <li>Do not reverse-engineer or bypass security measures.</li>
          </ul>
          <p className="mb-4">
            <strong>Report responsibly</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use in-app report tools when encountering harmful content.</li>
            <li>Do not submit false or abusive reports.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Section 4.4 – Acceptable Conduct</h3>
          <p className="mb-4">
            When interacting on the platform, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>stay respectful and constructive, especially in public comments;</li>
            <li>provide feedback or criticism in a courteous manner;</li>
            <li>contribute authentic content and ideas relevant to the spirit of the Services;</li>
            <li>follow the Community Guidelines and safety rules.</li>
          </ul>
          <p className="mb-4">
            You agree not to misuse or attempt to exploit the platform for purposes other than its intended collaborative and creative use.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 4.5 – Prohibited Use of the Services</h3>
          <p className="mb-4">
            You agree not to engage in any of the following activities:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>use the Services for any unlawful, fraudulent, harmful, malicious, or deceptive purpose;</li>
            <li>discuss, promote, or instruct others on illegal activities (including drugs or weapons);</li>
            <li>solicit or offer sexually explicit material or content harmful to minors;</li>
            <li>post or transmit content that violates third-party rights (copyright, trademarks, privacy, etc.);</li>
            <li>violate any law or encourage behavior that could result in liability;</li>
            <li>solicit login credentials or access an account that does not belong to you;</li>
            <li>bully, harass, stalk, demean, threaten, or discriminate against any user;</li>
            <li>intentionally cause distress or invade another user’s privacy;</li>
            <li>use false, stolen, or misleading identities;</li>
            <li>use the Services to advertise or promote commercial products without permission;</li>
            <li>send spam or prohibited commercial communications;</li>
            <li>engage in pyramid schemes or similar practices;</li>
            <li>collect user data or access the Services using automated tools;</li>
            <li>upload malware or harmful code;</li>
            <li>disrupt the functioning of the Services (DDoS, overload, etc.);</li>
            <li>reverse-engineer or attempt to derive the source code of the Services;</li>
            <li>copy, adapt, or create derivative works from the Services without consent;</li>
            <li>test or probe system vulnerabilities or bypass security measures;</li>
            <li>encourage others to violate these Terms.</li>
          </ul>
          <p className="mb-4">
            Brightberry reserves the right to determine, at its reasonable discretion, whether any behavior or content violates these rules and to take appropriate action.
          </p>
          <p className="mb-4">
            However, we cannot guarantee that you will not encounter violators before they are identified or removed.
          </p>
          <p className="mb-4">
            Please report abuse through the in-app reporting tools or at contact@brightberry.fr.
          </p>
          <p className="mb-4">
            You understand and agree that you may be exposed to User Content that is inaccurate, inappropriate, or objectionable.
          </p>
          <p className="mb-4">
            Brightberry shall not be liable for damages resulting from exposure to such Content, to the extent permitted by law.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 4.6 – Reporting Violations</h3>
          <p className="mb-4">
            If you encounter content or behavior that violates these Terms:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>report the offending content or user through the in-app tools;</li>
            <li>serious or repeated violations may result in content removal or account suspension.</li>
          </ul>
          <p className="mb-4">
            Brightberry commits to reviewing reports within 24 hours, as stated in Section 5.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 4.7 – Cooperation with Authorities</h3>
          <p className="mb-4">
            In cases involving threats to safety, illegal activities, or risks to users, Brightberry may cooperate with competent authorities in accordance with applicable laws and our Privacy Policy.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 5 – Moderation, Reporting & Blocking</h2>
          <h3 className="text-xl font-medium mb-2">Section 5.1 – Overview of Moderation</h3>
          <p className="mb-4">
            Brightberry uses a combination of review processes to detect, prevent, and address content or behavior that may violate these Terms or applicable laws. Moderation applies to all User Content, including idea cards, images, descriptions, and public comments.
          </p>
          <p className="mb-4">
            Brightberry may, at its sole discretion:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>remove or restrict access to any User Content;</li>
            <li>limit certain features;</li>
            <li>issue warnings;</li>
            <li>temporarily suspend or permanently terminate an Account;</li>
            <li>take any other action necessary to maintain the safety and integrity of the Services.</li>
          </ul>
          <p className="mb-4">
            Brightberry is not obligated to monitor all User Content, but may do so whenever necessary to protect users or comply with legal obligations.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.2 – Reporting Content and Users</h3>
          <p className="mb-4">
            Users may report:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>specific User Content (idea cards, images, text, comments),</li>
            <li>an entire user account,</li>
            <li>or any behavior that appears harmful or in violation of these Terms.</li>
          </ul>
          <p className="mb-4">
            Reports can be submitted directly through in-app reporting features or by contacting us at contact@brightberry.fr.
          </p>
          <p className="mb-4">
            Reports should be made in good faith and describe the issue as clearly as possible.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.3 – Review of Reports</h3>
          <p className="mb-4">
            Brightberry commits to reviewing and assessing all reports within 24 hours of receipt whenever reasonably possible.
          </p>
          <p className="mb-4">
            After review, Brightberry may:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>remove the reported content,</li>
            <li>anonymize or hide the content,</li>
            <li>issue a warning to the user concerned,</li>
            <li>temporarily restrict the user’s ability to post or interact,</li>
            <li>temporarily suspend the Account, or</li>
            <li>permanently terminate the Account in cases of severe or repeated violations.</li>
          </ul>
          <p className="mb-4">
            Brightberry may also decide to take no action if the report is unfounded.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.4 – Blocking Users</h3>
          <p className="mb-4">
            You may block another user at any time through the in-app blocking feature, preventing that user from interacting with you.
          </p>
          <p className="mb-4">
            Blocking a user also serves as a signal to Brightberry that you consider the user’s behavior inappropriate; repeated blocks or reports against the same user may lead to additional review under Section 6.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.5 – Immediate Removal and Emergency Action</h3>
          <p className="mb-4">
            Brightberry may take immediate action, without prior notice, if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>the reported content presents a risk to user safety,</li>
            <li>the behavior involves threats, harassment, hate speech, or exploitation,</li>
            <li>the content appears illegal,</li>
            <li>the content is likely to cause significant harm if left online.</li>
          </ul>
          <p className="mb-4">
            This includes removing content, disabling the Account, or contacting competent authorities if required by law.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.6 – Transparency to Users</h3>
          <p className="mb-4">
            When feasible, Brightberry will notify users when:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>their content has been removed,</li>
            <li>their Account has been limited or suspended,</li>
            <li>they have been reported by others.</li>
          </ul>
          <p className="mb-4">
            However, there may be situations where Brightberry is legally or operationally unable to provide notice, particularly when dealing with safety-related or urgent cases.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.7 – Appeal of Moderation Decisions</h3>
          <p className="mb-4">
            If you believe that a moderation decision was made in error, you may appeal by contacting us at contact@brightberry.fr.
          </p>
          <p className="mb-4">
            Brightberry will review the appeal and respond within a reasonable timeframe. However, repeated or severe violations cannot be appealed.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.8 – No Obligation to Restore Content</h3>
          <p className="mb-4">
            Brightberry is not obligated to restore removed content, nor to provide copies of content deleted as a result of violations, account deletion, or moderation decisions.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 5.9 – Cooperation With Authorities</h3>
          <p className="mb-4">
            Brightberry may cooperate with law enforcement or regulatory authorities if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>required by law,</li>
            <li>necessary to protect users or the public,</li>
            <li>needed to investigate illegal activity or threats.</li>
          </ul>
          <p className="mb-4">
            Any such cooperation will follow the principles described in our Privacy Policy.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 6 – Account Suspension, Termination & Content Removal</h2>
          <h3 className="text-xl font-medium mb-2">Section 6.1 – Reasons for Suspension or Termination</h3>
          <p className="mb-4">
            Brightberry may suspend or terminate your Account, remove or anonymize your User Content, or restrict your access to some or all features of the Services if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you violate these Terms or the Community Guidelines;</li>
            <li>you post or engage with Prohibited Content described in Section 4;</li>
            <li>you harass, threaten, or harm other users;</li>
            <li>you use the Services in an unlawful, fraudulent, or malicious manner;</li>
            <li>you circumvent or attempt to circumvent safety measures, moderation decisions, or restrictions;</li>
            <li>you create duplicate accounts after suspension;</li>
            <li>you report abuse in bad faith;</li>
            <li>you engage in behavior that poses or could pose a risk to the safety or integrity of the Services;</li>
            <li>we are required to do so by law, regulation, or a request from competent authorities.</li>
          </ul>
          <p className="mb-4">
            Suspension or termination may occur with or without prior notice, particularly in urgent safety situations.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 6.2 – Temporary Suspension</h3>
          <p className="mb-4">
            Brightberry may temporarily suspend your Account to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>investigate potential violations;</li>
            <li>prevent further harm or misuse;</li>
            <li>maintain the integrity and safety of the Services.</li>
          </ul>
          <p className="mb-4">
            During suspension, you may be prevented from logging in, posting content, commenting, or interacting with other users.
          </p>
          <p className="mb-4">
            Temporary suspensions do not entitle you to compensation or any form of refund when Paid Services become available.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 6.3 – Permanent Termination</h3>
          <p className="mb-4">
            Brightberry may permanently terminate your Account in cases of:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>severe violations of these Terms;</li>
            <li>repeated or deliberate violations;</li>
            <li>harmful or dangerous behavior;</li>
            <li>use of stolen, false, or impersonated identities;</li>
            <li>unlawful activities or serious threats.</li>
          </ul>
          <p className="mb-4">
            Permanent termination includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>loss of access to the Account,</li>
            <li>removal of personal data according to our Privacy Policy,</li>
            <li>anonymization of previously published User Content,</li>
            <li>inability to create a new Account without our express permission.</li>
          </ul>
          <p className="mb-4">
            We may block your email, device identifiers, or authentication providers from creating new Accounts.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 6.4 – Content Removal or Anonymization</h3>
          <p className="mb-4">
            Brightberry may remove, restrict, or anonymize User Content at any time if it:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>violates these Terms or Community Guidelines;</li>
            <li>is reported and confirmed to be harmful or inappropriate;</li>
            <li>contains illegal or dangerous material;</li>
            <li>infringes intellectual property rights or privacy;</li>
            <li>is determined to disrupt the Service or harm users.</li>
          </ul>
          <p className="mb-4">
            In certain cases, instead of deletion, User Content may be anonymized, meaning it remains visible but without any personally identifiable information attached to it.
          </p>
          <p className="mb-4">
            Anonymization follows the rules outlined in Section 3.4.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 6.5 – Notice of Enforcement Actions</h3>
          <p className="mb-4">
            Where appropriate and feasible, Brightberry will attempt to notify you when:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>your Content has been removed or restricted;</li>
            <li>your Account has been suspended or terminated;</li>
            <li>a report has been filed against you.</li>
          </ul>
          <p className="mb-4">
            However, notice may not be provided if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>we are legally prohibited from doing so;</li>
            <li>the situation is urgent or involves user safety;</li>
            <li>notifying you could interfere with an investigation.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Section 6.6 – Appeals</h3>
          <p className="mb-4">
            If you believe your Content was removed or your Account suspended in error, you may appeal by contacting contact@brightberry.fr.
          </p>
          <p className="mb-4">
            We will review appeals within a reasonable timeframe.
          </p>
          <p className="mb-4">
            Brightberry is not obligated to reinstate Content or Accounts, especially in cases of repeated, severe, or deliberate violations.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 6.7 – Effect of Termination</h3>
          <p className="mb-4">
            Upon termination of your Account:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>this Agreement will end immediately;</li>
            <li>your access to the Services will be revoked;</li>
            <li>your personal data will be processed or deleted in accordance with the Privacy Policy and applicable law;</li>
            <li>your remaining User Content may be retained in anonymized form.</li>
          </ul>
          <p className="mb-4">
            Brightberry will have no obligation to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>restore your Account,</li>
            <li>restore or re-upload deleted Content,</li>
            <li>provide copies of removed or anonymized Content.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Section 6.8 – Voluntary Account Deletion</h3>
          <p className="mb-4">
            If you choose to delete your Account voluntarily:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you may do so through the app (if your Account is active), or</li>
            <li>by contacting us at contact@brightberry.fr (mandatory if your Account is suspended).</li>
          </ul>
          <p className="mb-4">
            Your data and Content will be handled according to Section 3.4 and our Privacy Policy.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 6.9 – No Liability for Enforcement Actions</h3>
          <p className="mb-4">
            To the extent permitted by law, Brightberry is not liable for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>loss of data, Content, or access resulting from moderation actions;</li>
            <li>inability to access Paid Services (present or future) due to suspension or termination;</li>
            <li>any consequences arising from user violations of these Terms.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 7 – Intellectual Property & Rights</h2>
          <h3 className="text-xl font-medium mb-2">Section 7.1 – Ownership of the Services</h3>
          <p className="mb-4">
            The Services, including all related software, code, features, design elements, graphics, interfaces, trademarks, logos, and any other material provided by Brightberry (“Brightberry Content”), are and remain the exclusive property of Brightberry and its licensors.
          </p>
          <p className="mb-4">
            Nothing in these Terms grants you ownership of or rights to Brightberry Content other than the limited, non-exclusive, revocable license described below.
          </p>
          <p className="mb-4">
            You may not use Brightberry’s name, trademarks, logos, or visual identity without our prior written permission.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 7.2 – License Granted to Users</h3>
          <p className="mb-4">
            Subject to your compliance with these Terms, Brightberry grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>access and use the Services for personal, non-commercial purposes;</li>
            <li>view and interact with User Content and Brightberry Content as intended through the platform.</li>
          </ul>
          <p className="mb-4">
            This license does not allow you to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>copy, reproduce, repost, or distribute Brightberry Content outside the Services;</li>
            <li>modify, adapt, translate, or create derivative works based on the Services;</li>
            <li>reverse-engineer, decompile, or attempt to obtain the source code;</li>
            <li>use the Services for commercial purposes or to compete with Brightberry.</li>
          </ul>
          <p className="mb-4">
            Brightberry may revoke this license at any time for violations of these Terms.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 7.3 – Ownership of User Content</h3>
          <p className="mb-4">
            As stated in Section 3, you retain ownership of the User Content you create and publish on the Services.
          </p>
          <p className="mb-4">
            Nothing in these Terms transfers ownership of your ideas, images, descriptions, comments, or other contributions to Brightberry.
          </p>
          <p className="mb-4">
            However, to operate the Services, you grant Brightberry the license described in Section 3.3 (hosting, displaying, distributing, etc.).
          </p>
          <p className="mb-4">
            This license ends when:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you delete the Content, or</li>
            <li>your Account is deleted,</li>
          </ul>
          <p className="mb-4">
            except where the Content has been shared, reused, commented on, or included in public discussions — in which case anonymized versions may be retained.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 7.4 – User Responsibilities Regarding Intellectual Property</h3>
          <p className="mb-4">
            You confirm and guarantee that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you own the rights to the Content you upload, or</li>
            <li>you have obtained all necessary permissions to publish it.</li>
          </ul>
          <p className="mb-4">
            You agree not to upload Content that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>infringes copyright, trademarks, patents, or trade secrets;</li>
            <li>violates privacy or publicity rights;</li>
            <li>misuses images, text, or ideas belonging to others.</li>
          </ul>
          <p className="mb-4">
            You are solely responsible for any claim or dispute arising from your Content, and you agree to indemnify Brightberry for any damage caused by infringement of third-party rights, subject to applicable law.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 7.5 – Use of Publicly Available Content</h3>
          <p className="mb-4">
            You may view, share, or link to public Content within the Services only as permitted by Brightberry and only for the intended purpose of the platform.
          </p>
          <p className="mb-4">
            You may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>copy Content from the Services and publish it elsewhere without permission from its owner;</li>
            <li>use scraped Content for machine learning, AI training, or data harvesting;</li>
            <li>distribute User Content externally in bulk.</li>
          </ul>
          <p className="mb-4">
            Any extraction, automated collection, or commercial use of User Content is strictly prohibited.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 7.6 – Intellectual Property Violations</h3>
          <p className="mb-4">
            If you believe that your intellectual property rights have been infringed by Content on the Services, you may notify us at contact@brightberry.fr.
          </p>
          <p className="mb-4">
            Your notification should include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>a description of the protected work;</li>
            <li>a link or reference to the infringing Content;</li>
            <li>your contact information;</li>
            <li>proof of ownership or authorization.</li>
          </ul>
          <p className="mb-4">
            Brightberry will review such notifications and take appropriate action, which may include removal of the contested Content or suspension of the responsible Account.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 7.7 – No Transfer of Rights</h3>
          <p className="mb-4">
            Except as expressly set out in these Terms, nothing in the Services or in your use of the Services should be interpreted as granting any rights, licenses, or ownership in:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Brightberry’s intellectual property,</li>
            <li>other users’ content, or</li>
            <li>proprietary elements of the platform.</li>
          </ul>
          <p className="mb-4">
            Any rights not expressly granted in these Terms are reserved by Brightberry.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 8 – Liability, Disclaimers & Warranties</h2>
          <h3 className="text-xl font-medium mb-2">Section 8.1 – “As Is” and “As Available” Basis</h3>
          <p className="mb-4">
            The Services are provided on an “as is” and “as available” basis.
          </p>
          <p className="mb-4">
            Brightberry does not guarantee that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>the Services will be uninterrupted, error-free, secure, or available at all times;</li>
            <li>User Content will always be accurate, complete, or reliable;</li>
            <li>the Services will meet your expectations or achieve specific results;</li>
            <li>bugs or defects will be corrected immediately.</li>
          </ul>
          <p className="mb-4">
            Your use of the Services is at your own risk.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.2 – No Responsibility for User Content</h3>
          <p className="mb-4">
            Brightberry is not responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>the accuracy, quality, legality, or safety of any User Content;</li>
            <li>harm caused by content that is inaccurate, inappropriate, offensive, or objectionable;</li>
            <li>interactions, discussions, or disputes between users;</li>
            <li>ideas, proposals, or initiatives published by users through the platform.</li>
          </ul>
          <p className="mb-4">
            You understand that you may be exposed to User Content that is inappropriate for minors, misleading, or otherwise unsuitable.
          </p>
          <p className="mb-4">
            Brightberry is not liable for damages arising from exposure to such Content.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.3 – No Professional Advice</h3>
          <p className="mb-4">
            Content found on the Services—including user-generated ideas, comments, discussions, or proposals—does not constitute professional advice (legal, financial, medical, engineering, or otherwise).
          </p>
          <p className="mb-4">
            Users are solely responsible for evaluating and acting on the information shared through the Services.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.4 – Limitation of Liability</h3>
          <p className="mb-4">
            To the fullest extent permitted by applicable law, Brightberry and its directors, employees, licensors, and partners shall not be liable for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>any indirect, incidental, consequential, special, or punitive damages;</li>
            <li>loss of profits, loss of data, loss of goodwill, business interruption;</li>
            <li>loss resulting from unauthorized access to your Account;</li>
            <li>inability to use the Services;</li>
            <li>actions taken based on User Content;</li>
            <li>removal, deletion, or loss of content due to moderation, technical issues, or suspension;</li>
            <li>any damages arising from third-party conduct or Content.</li>
          </ul>
          <p className="mb-4">
            Where liability cannot be fully excluded, it shall be limited to the maximum amount permitted by law.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.5 – No Warranty of Safety or Identity</h3>
          <p className="mb-4">
            Brightberry cannot guarantee:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>the identity of any user;</li>
            <li>that all users will comply with these Terms;</li>
            <li>that you will not encounter harmful, abusive, or illegal behavior before it is detected;</li>
            <li>that user-reported issues will always be resolved in the manner you expect.</li>
          </ul>
          <p className="mb-4">
            You are encouraged to use common sense and caution when interacting with others.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.6 – Third-Party Services and Links</h3>
          <p className="mb-4">
            The Services may include links or access to third-party content, services, or authentication providers (e.g., Google, Apple).
          </p>
          <p className="mb-4">
            Brightberry is not responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>availability or performance of third-party services;</li>
            <li>accuracy, safety, or legality of third-party content;</li>
            <li>damages caused by third-party actions or failures.</li>
          </ul>
          <p className="mb-4">
            Your use of third-party services is governed by their own terms and policies.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.7 – Indemnification</h3>
          <p className="mb-4">
            You agree, to the extent permitted by law, to indemnify and hold harmless Brightberry, its officers, employees, partners, and affiliates from and against any claims, damages, liabilities, losses, or expenses arising from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>your use of the Services;</li>
            <li>your User Content;</li>
            <li>your violation of these Terms or applicable laws;</li>
            <li>your infringement of third-party rights.</li>
          </ul>
          <p className="mb-4">
            Brightberry reserves the right to assume the exclusive defense and control of any matter subject to indemnification.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 8.8 – Jurisdiction-Specific Limitations</h3>
          <p className="mb-4">
            Some jurisdictions do not allow exclusions or limitations of liability.
          </p>
          <p className="mb-4">
            In such cases, parts of this Section may not apply, and Brightberry’s liability shall be limited to the fullest extent allowed by law.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 9 – Privacy & Data Protection</h2>
          <h3 className="text-xl font-medium mb-2">Section 9.1 – Reference to the Privacy Policy</h3>
          <p className="mb-4">
            Your privacy and the protection of your personal data are extremely important to us.
          </p>
          <p className="mb-4">
            All processing of personal data carried out through the Services is governed by our Privacy Policy, available at <a href="https://brightberry.fr/Privacy" className="text-blue-600 hover:underline">https://brightberry.fr/Privacy</a>.
          </p>
          <p className="mb-4">
            By using the Services, you acknowledge that you have read and understood our Privacy Policy and that you consent to the collection, use, storage, and processing of your data as described therein.
          </p>
          <p className="mb-4">
            The Privacy Policy forms an integral part of these Terms.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.2 – Compliance With Applicable Law</h3>
          <p className="mb-4">
            Brightberry processes personal data in accordance with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>the General Data Protection Regulation (GDPR),</li>
            <li>the French Data Protection Act (Loi Informatique et Libertés),</li>
            <li>other applicable data protection laws depending on the user’s location.</li>
          </ul>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to secure your data and protect it against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.3 – Categories of Data Collected</h3>
          <p className="mb-4">
            The types of personal data we collect and process are fully detailed in our Privacy Policy.
          </p>
          <p className="mb-4">
            This may include, depending on your use of the Services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>profile and account information;</li>
            <li>authentication information (email, Google/Apple identifiers);</li>
            <li>content you submit (idea cards, descriptions, comments);</li>
            <li>technical and usage data;</li>
            <li>communication history with our support team;</li>
            <li>information necessary to comply with legal obligations or security measures.</li>
          </ul>
          <p className="mb-4">
            For complete details, refer to the Privacy Policy.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.4 – User Rights</h3>
          <p className="mb-4">
            In accordance with applicable data protection laws, you have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>access your data;</li>
            <li>request rectification or correction;</li>
            <li>request deletion (“right to be forgotten”);</li>
            <li>restrict or object to processing;</li>
            <li>request data portability;</li>
            <li>withdraw consent, when applicable.</li>
          </ul>
          <p className="mb-4">
            You may exercise these rights:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>directly through your account settings (if available), or</li>
            <li>by contacting contact@brightberry.fr.</li>
          </ul>
          <p className="mb-4">
            Users whose accounts are suspended may request data deletion exclusively by email, as described in Section 3.4.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.5 – Data Retention</h3>
          <p className="mb-4">
            Brightberry retains personal data only as long as necessary to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>operate the Services;</li>
            <li>comply with legal and regulatory obligations;</li>
            <li>resolve disputes;</li>
            <li>enforce these Terms.</li>
          </ul>
          <p className="mb-4">
            As described in Sections 2.6 and 3.4:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>deleted accounts lead to personal data deletion or anonymization;</li>
            <li>some User Content may remain available in anonymized form for transparency, continuity of discussions, or platform integrity.</li>
          </ul>
          <p className="mb-4">
            Retention periods are detailed in the Privacy Policy.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.6 – Cookies and Tracking Technologies</h3>
          <p className="mb-4">
            The Services may use cookies, device identifiers, or similar technologies to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>authenticate users;</li>
            <li>personalize content;</li>
            <li>improve performance;</li>
            <li>analyze usage.</li>
          </ul>
          <p className="mb-4">
            Details about cookies and tracking technologies are available in the Privacy Policy.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.7 – Security Measures</h3>
          <p className="mb-4">
            Brightberry takes reasonable and appropriate measures to protect user data, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>encryption where appropriate;</li>
            <li>access control;</li>
            <li>monitoring of suspicious activity;</li>
            <li>periodic audits of internal procedures.</li>
          </ul>
          <p className="mb-4">
            No online service can guarantee absolute security, but we make commercially reasonable efforts to safeguard the integrity and confidentiality of your data.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.8 – Third-Party Services</h3>
          <p className="mb-4">
            If you choose to authenticate via third-party providers (Google, Apple), certain data may be shared according to their own terms and policies.
          </p>
          <p className="mb-4">
            Brightberry is not responsible for the privacy practices of third-party services, and you should review their respective privacy policies.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 9.9 – Updates to the Privacy Policy</h3>
          <p className="mb-4">
            We may update our Privacy Policy as needed to reflect changes in legislation or our processing practices.
          </p>
          <p className="mb-4">
            When significant changes occur, we will notify you through appropriate means.
          </p>
          <p className="mb-4">
            Continued use of the Services after such changes constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 10 – Modification of Terms</h2>
          <h3 className="text-xl font-medium mb-2">Section 10.1 – Right to Modify the Terms</h3>
          <p className="mb-4">
            Brightberry may update or modify these Terms at any time to reflect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>changes in applicable laws or regulations,</li>
            <li>updates to our Services, features, or policies,</li>
            <li>improvements to user experience or security,</li>
            <li>operational or business needs.</li>
          </ul>
          <p className="mb-4">
            We will make reasonable efforts to notify users of material changes through appropriate means, such as in-app notices, email notifications, or updates published on our website.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 10.2 – Effective Date of Changes</h3>
          <p className="mb-4">
            Unless otherwise specified, updated Terms become effective immediately upon publication.
          </p>
          <p className="mb-4">
            Your continued use of the Services after the effective date of the revised Terms constitutes acceptance of those changes.
          </p>
          <p className="mb-4">
            If you do not agree to the updated Terms, you must stop using the Services and, if applicable, delete your Account as described in Section 6.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 10.3 – Access to Previous Versions</h3>
          <p className="mb-4">
            Brightberry does not retain copies of older versions of these Terms on behalf of users.
          </p>
          <p className="mb-4">
            Archived versions may be kept internally and made available when required by law.
          </p>
          <p className="mb-4">
            You may access, save, and print the current version of the Terms at any time through our website or the relevant application.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 10.4 – Changes to Other Policies</h3>
          <p className="mb-4">
            Updates to the Privacy Policy, Community Guidelines, or other referenced documents may occur separately.
          </p>
          <p className="mb-4">
            Such updates will also be communicated when required, and continued use of the Services constitutes acceptance of those changes.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 11 – Governing Law & Dispute Resolution</h2>
          <h3 className="text-xl font-medium mb-2">Section 11.1 – Governing Law</h3>
          <p className="mb-4">
            These Terms, as well as any dispute or claim arising out of or relating to them or to the use of the Services, shall be governed by and interpreted in accordance with the laws of France, without regard to its conflict of law provisions.
          </p>
          <p className="mb-4">
            If mandatory laws of your country of residence provide additional protections, those protections remain applicable.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 11.2 – Jurisdiction</h3>
          <p className="mb-4">
            If you are a consumer residing within the European Union:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>you may bring legal proceedings in the courts of your country of residence, or</li>
            <li>in the courts of France, where Brightberry is established.</li>
          </ul>
          <p className="mb-4">
            If you reside outside the EU:
          </p>
          <p className="mb-4">
            disputes shall fall under the exclusive jurisdiction of the courts of France.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 11.3 – Attempt at Amicable Resolution</h3>
          <p className="mb-4">
            Before initiating any formal proceedings, you agree to make a reasonable attempt to resolve the dispute informally by contacting contact@brightberry.fr.
          </p>
          <p className="mb-4">
            Brightberry will attempt to resolve the issue within a reasonable timeframe.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 11.4 – Mediation</h3>
          <p className="mb-4">
            If an amicable resolution cannot be reached, consumers may access an independent mediation service in accordance with French consumer protection rules, where applicable.
          </p>
          <p className="mb-4">
            Information about available mediators may be provided upon request.
          </p>

          <h3 className="text-xl font-medium mb-2">Section 11.5 – International Use</h3>
          <p className="mb-4">
            Brightberry provides Services worldwide.
          </p>
          <p className="mb-4">
            By using the Services, you acknowledge that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>laws and regulations may differ across jurisdictions;</li>
            <li>you are responsible for ensuring that your use of the Services complies with applicable laws in your location.</li>
          </ul>
        </section>

        {/* Section 12 */}
        <section className="mb-10 text-gray-900">
          <h2 className="text-2xl font-semibold mb-4">Section 12 – Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, the Services, your Account, your personal data, or if you need assistance, you may contact us at:
          </p>
          <address className="not-italic mb-4">
            Brightberry<br />
            SIREN: 943 427 831 – Registered with the R.C.S. Toulon<br />
            Registered office: 410 Avenue des Sènes, 83210 Solliès-Pont, France<br />
            Email: <a href="mailto:contact@brightberry.fr" className="text-blue-600 hover:underline">contact@brightberry.fr</a><br />
            Website: <a href="https://brightberry.fr" className="text-blue-600 hover:underline">https://brightberry.fr</a>
          </address>
          <p className="mb-4">
            We will make reasonable efforts to respond within a reasonable timeframe, depending on the nature of your request.
          </p>
        </section>
        </div>
      </div>
    </div>
  );
}
