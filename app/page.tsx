// Option 1: Use it


// Option 2: Remove it if unused
// just delete that line


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Car Showcase</h1>
        <p className="text-lg text-gray-600">Discover your next ride!</p>
      </header>
      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Car Card 1 */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
            alt="Sedan"
            className="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Sedan</h2>
          <p className="text-gray-700 mb-2">
            Comfortable and efficient for city driving.
          </p>
          <span className="font-bold text-blue-600">$25,000</span>
        </div>
        {/* Car Card 2 */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80"
            alt="SUV"
            className="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">SUV</h2>
          <p className="text-gray-700 mb-2">
            Spacious and powerful for family adventures.
          </p>
          <span className="font-bold text-blue-600">$40,000</span>
        </div>
        {/* Car Card 3 */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80"
            alt="Sports Car"
            className="rounded-md mb-4 w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Sports Car</h2>
          <p className="text-gray-700 mb-2">Fast, stylish, and fun to drive.</p>
          <span className="font-bold text-blue-600">$70,000</span>
        </div>
      </main>
      <footer className="mt-12 text-gray-500 text-sm">
        © 2025 Car Showcase. All rights reserved.
      </footer>
    </div>
  );
}
