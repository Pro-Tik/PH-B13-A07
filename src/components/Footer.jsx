import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-12 bg-[#1e3a34] text-white mt-auto">
      <aside>
        <h2 className="text-4xl font-bold mb-3 tracking-tight">KeenKeeper</h2>
        <p className="max-w-md opacity-70 text-sm leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </aside>

      <nav>
        {/* Social Icons */}
        <div className="grid grid-flow-col gap-6 mb-8 mt-4">
          <a
            href="#"
            className="hover:scale-110 hover:text-emerald-400 transition-all text-2xl"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="hover:scale-110 hover:text-emerald-400 transition-all text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:scale-110 hover:text-emerald-400 transition-all text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between border-t border-white/10 pt-8 px-4 md:px-10 text-[9px] opacity-40 uppercase tracking-[0.25em]">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="link link-hover">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover">
            Terms of Service
          </a>
          <a href="#" className="link link-hover">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
