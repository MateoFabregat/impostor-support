export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy describes how Impostor (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Information You Provide
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
                <li><strong>Email addresses:</strong> When you join our waitlist for new features</li>
                <li><strong>Support communications:</strong> When you contact us for help or support</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Information Automatically Collected
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Usage analytics:</strong> Anonymous data about how you interact with the app (button clicks, screen views, game progress)</li>
                <li><strong>Device information:</strong> Basic device and browser information for technical support</li>
                <li><strong>Session data:</strong> Anonymous session identifiers to track app usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>To notify you about new features and updates</li>
                <li>To provide technical support and customer service</li>
                <li>To improve our app and user experience</li>
                <li>To analyze usage patterns and app performance</li>
                <li>To process in-app purchases and premium features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or share your personal information with third parties, except in the following cases:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>App Store:</strong> Purchase information is processed through Apple&apos;s App Store</li>
                <li><strong>Analytics:</strong> We use privacy-focused analytics that do not contain personal identifiers</li>
                <li><strong>Legal requirements:</strong> If required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Storage and Security
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Your data is stored securely using industry-standard encryption</li>
                <li>Analytics data is anonymized and cannot be linked back to individuals</li>
                <li>We retain data only as long as necessary to provide our services</li>
                <li>All communications are encrypted using HTTPS/TLS</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from our communications at any time</li>
                <li><strong>Analytics:</strong> Disable analytics tracking in the app settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our app is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                International Users
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you are using our app from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the app and updating the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> testforvibinggmail.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}