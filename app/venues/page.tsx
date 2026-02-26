import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getVenues() {
  const { data: venues } = await supabase
    .from('venues')
    .select('*')
    .eq('status', 'active')
    .order('name');
  
  return venues || [];
}

export default async function VenuesPage() {
  const venues = await getVenues();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
            VenueFinderCT
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Browse Venues</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <div key={venue.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h2>
                <p className="text-gray-600 mb-4">{venue.location}</p>
                <p className="text-sm text-gray-500 mb-4">{venue.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Capacity: {venue.capacity_min}-{venue.capacity_max}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                    {venue.price_range}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {venues.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No venues found. Check back soon!</p>
        )}
      </main>
    </div>
  );
}