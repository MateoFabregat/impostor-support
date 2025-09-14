export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Support
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Need Help?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re here to help you with any questions or issues you might have with our app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> testforvibinggmail.com
                </p>
                <p className="text-gray-600 text-sm">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Reporting Issues
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you encounter any problems with the app, please include the following information in your email:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Device model and iOS version</li>
                <li>App version</li>
                <li>Description of the issue</li>
                <li>Steps to reproduce the problem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We respect your privacy and will only use your contact information to respond to your support request.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
