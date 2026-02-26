export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">VenueFinderCT</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Venue in Cape Town
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the best event spaces for weddings, corporate events, and private parties
          </p>
          
          <a href="/venues" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Browse All Venues
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="text-4xl mb-4 text-blue-600 font-bold">*</div>
            <h3 className="text-xl font-semibold mb-2">Premium Venues</h3>
            <p className="text-gray-600">Curated selection of Cape Town finest event spaces</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl mb-4 text-blue-600 font-bold">$</div>
            <h3 className="text-xl font-semibold mb-2">All Budgets</h3>
            <p className="text-gray-600">From budget-friendly to luxury options</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl mb-4 text-blue-600 font-bold">@</div>
            <h3 className="text-xl font-semibold mb-2">Easy Contact</h3>
            <p className="text-gray-600">Connect directly with venue managers</p>
          </div>
        </div>
      </main>
    </div>
  );
}