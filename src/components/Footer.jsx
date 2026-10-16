import logo1 from "../assets/instagram.svg";
import logo2 from "../assets/whatsapp.svg";
import logo3 from "../assets/tiktok.svg";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-950 py-6 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Business Name. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-white"
          >
            <img src={logo2} alt="WhatsApp" className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-white"
          >
            <img src={logo1} alt="Instagram" className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-white"
          >
            <img src={logo3} alt="TikTok" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
