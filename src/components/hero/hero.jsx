import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] pt-28 text-slate-100 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.22),_transparent_28%)]" />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-10 w-full lg:w-1/2"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            Hi, I&apos;m <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Dharanish K</span>
          </h1>

          <div className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
            <span>I&apos;m a </span>
            <TypeAnimation
              sequence={["Full Stack Developer", 1800, "React Developer", 1800, "Frontend Engineer", 1800, "Problem Solver", 1800]}
              speed={45}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </div>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build refined web experiences with modern React, Node.js, and database-driven systems, balancing sleek UI with scalable engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">
              Hire Me
            </a>
            <a href="/resume.pdf" download="DHARANISH_K_Resume.pdf" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: <FaGithub />, href: "https://github.com/DHARANISHKBIT" },
              { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/dharanish-k-27784a2a1/" },
              { icon: <FaEnvelope />, href: "mailto:dharanish.k282@gmail.com" },
            ].map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300">
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mt-14 flex w-full justify-center lg:mt-0 lg:w-1/2"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/50 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <img src={profile} alt="Dharanish K" className="h-[420px] w-full rounded-[1.5rem] object-cover object-top sm:h-[520px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;