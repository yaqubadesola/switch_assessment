export default function LandingPage() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">PayQuick</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Your secure, fast, and easy way to manage digital payments and view
        transactions in real-time.
      </p>
      <div className="space-x-4">
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
