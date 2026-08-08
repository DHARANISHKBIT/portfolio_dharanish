import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-semibold">Dharanish<span className="text-cyan-400">.</span></h2>
            <p className="mt-6 text-sm leading-8 text-slate-400">
              Full Stack Developer focused on modern, responsive, and scalable web experiences with thoughtful design and dependable engineering.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="https://github.com/DHARANISHKBIT" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dharanish-k-27784a2a1/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"><FaLinkedin /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Navigation</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><a href="#home" className="transition hover:text-cyan-400">Home</a></li>
              <li><a href="#about" className="transition hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="transition hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" className="transition hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Technologies</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3"><Phone size={18} className="text-cyan-400" /> +91 9363148149</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-400" /> dharanish.k282@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-center text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Dharanish K. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Built with React, Tailwind CSS, and thoughtful motion.</p>
        </div>
      </div>
    </footer>
  );
}