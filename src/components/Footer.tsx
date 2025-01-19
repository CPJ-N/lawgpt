import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-gradient-to-br from-brand-darkblue via-brand-mediumblue to-brand-skyblue text-brand-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-4 text-brand-white/80">
            Our newsletter is packed with valuable insights, analysis, and advice from our team of legal experts. Sign up now!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-brand-darkblue/20 border-brand-skyblue/20 border text-brand-white placeholder:text-brand-white/50"
            />
            <button className="bg-brand-skyblue p-2 rounded-r hover:bg-brand-mediumblue transition-colors">
              →
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-bold mb-3">Law Firm</h2>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-brand-white/80 hover:text-brand-skyblue transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-brand-white/80 hover:text-brand-skyblue transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-brand-white/80 hover:text-brand-skyblue transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-brand-white/80 hover:text-brand-skyblue transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-3">Our Firm</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Practice Areas</li>
            <li>Lawyers</li>
            <li>Lawyers Single</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Others</h2>
          <ul className="space-y-2">
            <li>Case Results</li>
            <li>Packages</li>
            <li>Package Single</li>
            <li>Blog</li>
            <li>Blog Single</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Utilities</h2>
          <ul className="space-y-2">
            <li>Style Guide</li>
            <li>Instructions</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>404</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-brand-white/60 text-sm mt-8 border-t border-brand-skyblue/10 pt-4">
        © 2023 Legal Firm. All Rights Reserved. Built by Charles Nischal
      </div>
    </footer>
  );
};
