export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">VenueFinderCT</h1>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <div className="relative h-[600px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-900/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Find Your Perfect Venue in Cape Town
            </h2>
            <p className="text-2xl text-white mb-10 drop-shadow-md max-w-3xl mx-auto">
              Discover the best event spaces for weddings, corporate events, and private parties
            </p>
            
            <a
              href="/venues"
              className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition shadow-xl"
            >
              Browse All Venues
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">★</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Premium Venues</h3>
              <p className="text-gray-600 text-lg">Curated selection of Cape Town finest event spaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">$</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">All Budgets</h3>
              <p className="text-gray-600 text-lg">From budget-friendly to luxury options</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-600">@</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Easy Contact</h3>
              <p className="text-gray-600 text-lg">Connect directly with venue managers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}