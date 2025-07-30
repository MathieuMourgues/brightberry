
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Deleting your Brightberry account
            </h1>
          </div>
        </div>
      </section>

      {/* Account deletion procedure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Account deletion procedure
            </h2>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  1. Who We Are
            </h3>
            <p className="text-center text-gray-900">
              Open the Brightberry app on your device.
              Tap the 👤 profile icon in the top right corner of the screen.
              If you are not logged in, sign in using your email address and password. Then return to your profile.
              Tap the &quot;Delete Account&quot; button.
              Confirm the action by tapping &quot;Yes&quot;.

              Your account and all associated data will be permanently deleted immediately.

              If you changed your mind, you can create a new account at any time using the same email address or a new one.

              If you have any questions or need assistance, feel free to contact us at: support@brightberry.fr

            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



