// Paste your React component here
export default function BlushPetalsPage() {
    return (
      <div className="bg-pink-50 min-h-screen text-gray-800">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-pink-600">Blush Petals</h1>
          <ul className="flex gap-6 text-pink-700 font-medium">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#mission" className="hover:underline">Our Mission</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
  
        {/* Hero Section */}
        <section className="bg-pink-100 py-20 text-center shadow-inner">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-4">Blush Petals</h1>
          <p className="text-xl max-w-xl mx-auto text-pink-800">
            Experience comfort, confidence, and care with every petal. Premium sanitary pads designed for you.
          </p>
        </section>
  
        {/* About Section */}
        <section id="about" className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-pink-700 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Blush Petals is a proudly South African sanitary pad brand built on love, dignity, and empowerment. Our mission is to provide safe, high-quality, and affordable menstrual care products to women everywhere.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="About Blush Petals"
            className="rounded-3xl shadow-lg"
          />
        </section>
  
        {/* Mission Section */}
        <section id="mission" className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed text-center">
            Our mission is to support and uplift every girl and woman by offering reliable, safe, and beautifully designed sanitary products. We stand for menstrual dignity and environmental responsibility. With Blush Petals, every cycle is met with confidence.
          </p>
        </section>
  
        {/* Product Section */}
        <section id="products" className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">Our Products</h2>
          <div className="space-y-10">
            {/* Product 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-pink-100 p-6 rounded-2xl shadow-md">
              <div className="bg-white h-60 rounded-xl flex items-center justify-center">
                <span className="text-pink-400">[Insert Image Here]</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">Classic Day Pads</h3>
                <p className="text-gray-700">Designed for daytime comfort with breathable layers and high absorption. Ideal for light to medium flow.</p>
              </div>
            </div>
  
            {/* Product 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-pink-100 p-6 rounded-2xl shadow-md">
              <div className="bg-white h-60 rounded-xl flex items-center justify-center">
                <span className="text-pink-400">[Insert Image Here]</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">Overnight Pads</h3>
                <p className="text-gray-700">Extra-long and ultra-absorbent for peaceful, leak-free sleep. Perfect for heavier flow days and nights.</p>
              </div>
            </div>
  
            {/* Product 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-pink-100 p-6 rounded-2xl shadow-md">
              <div className="bg-white h-60 rounded-xl flex items-center justify-center">
                <span className="text-pink-400">[Insert Image Here]</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-800 mb-2">Panty Liners</h3>
                <p className="text-gray-700">For everyday freshness and protection. Thin, soft, and flexible for daily use or light flow days.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="bg-white py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">For orders or inquiries:</p>
          <p className="mt-2 text-pink-700 font-semibold">Email: info@blushpetals.co.za</p>
          <p className="text-pink-700 font-semibold">Phone: +27 71 234 5678</p>
          <p className="text-pink-700 font-semibold">Gauteng, South Africa</p>
        </section>
  
        {/* Footer */}
        <footer className="bg-pink-100 py-8 px-6 text-center text-pink-800 mt-10">
          <p>&copy; {new Date().getFullYear()} Blush Petals. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <p className="text-xs mt-2">Crafted with love by Litha Ntombela Enterprises</p>
        </footer>
      </div>
    );
  }
  