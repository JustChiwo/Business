import logo1 from "../assets/instagram.svg";
import logo2 from "../assets/whatsapp.svg";
import logo3 from "../assets/tiktok.svg";
function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright / Brand */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Business Name. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="" //whatsaap link goes here
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo2} alt="WhatsApp" className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/" //update insta link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo1} alt="Instagram" className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/" //update tiktok link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo3} alt="TikTok" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
