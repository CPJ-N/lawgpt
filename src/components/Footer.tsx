import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-4">
            Our newsletter is packed with valuable insights, analysis, and advice from our team of legal experts. Sign up now!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-800 border-0"
            />
            <button className="bg-orange-600 p-2 rounded-r">
              →
            </button>
          </form>
        </div>

        {/* You can map through these items if you have a list */}
        <div>
          <h2 className="font-bold mb-3">Law Firm</h2>
          <div className="flex space-x-4 mb-6">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-3">Our Firm</h2>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Practice Areas</li>
            <li>Lawyers</li>
            <li>Lawyers Single</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Others</h2>
          <ul>
            <li>Case Results</li>
            <li>Packages</li>
            <li>Package Single</li>
            <li>Blog</li>
            <li>Blog Single</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Utilities</h2>
          <ul>
            <li>Style Guide</li>
            <li>Instructions</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>404</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2023 Legal Firm. All Rights Reserved. Built by Yves Adrales. Powered by Webflow.
      </div>
    </footer>
  );
};
