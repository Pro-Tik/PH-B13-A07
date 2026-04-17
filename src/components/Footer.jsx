import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-auto bg-[#1e3a34] text-white">
      {/* Top Main Footer Area */}
      <footer className="footer footer-center p-8 sm:p-12 w-full">
        <aside className="w-full px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">KeenKeeper</h2>
          <p className="max-w-md mx-auto opacity-70 text-xs sm:text-sm leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>

        <nav className="w-full">
          {/* Social Icons */}
          <div className="grid grid-flow-col justify-center gap-6 mb-2 mt-4">
            <a href="#" className="hover:scale-110 hover:text-emerald-400 transition-all text-2xl" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" className="hover:scale-110 hover:text-emerald-400 transition-all text-2xl" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="hover:scale-110 hover:text-emerald-400 transition-all text-2xl" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </footer>

      {/* Bottom Bar strictly below the grid */}
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between border-t border-white/10 py-6 px-4 md:px-10 text-[9px] sm:text-[10px] opacity-40 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-center">
        <p className="mb-4 md:mb-0">© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a href="#" className="link link-hover whitespace-nowrap">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover whitespace-nowrap">
            Terms of Service
          </a>
          <a href="#" className="link link-hover whitespace-nowrap">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
