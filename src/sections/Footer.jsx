import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-6 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Teks */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          Copyright © <span className="text-green-500 font-medium">Adam Furqon</span> all rights reserved.
        </p>

        {/* Ikon Sosial */}
        <div className="flex space-x-3">
          {/* <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm" />
          </a> */}
          <a
            href="https://www.instagram.com/adamfurqon2021"
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm" />
          </a>
          {/* <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            aria-label="Twitter"
          >
            <FaTwitter className="text-sm" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/adamf213"
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-sm" />
          </a>
        </div>
      </div>
    </footer>
  );
}
