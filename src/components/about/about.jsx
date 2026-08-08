import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import profile from "../../assets/images/hero.jpg";

const About = () => {
  return (
    <section id="about" className="bg-slate-950/80 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">About Me</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Crafting polished products with purpose</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m a Full Stack Developer who enjoys turning complex ideas into delightful, high-performing web experiences with thoughtful UX and dependable engineering.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <div className="flex flex-col items-center text-center">
              <img src={profile} alt="Dharanish K" className="h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-lg shadow-cyan-500/20" />
              <h3 className="mt-6 text-3xl font-semibold">Dharanish K</h3>
              <p className="mt-2 text-lg text-cyan-400">Full Stack Developer</p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Passionate about building scalable systems, responsive interfaces, and products that feel premium from first click to final interaction.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "4+", label: "Projects" },
                { value: "1+", label: "Internship" },
                { value: "200+", label: "LeetCode" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-3xl font-semibold text-cyan-400">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/resume.pdf" download="DHARANISH_K_Resume.pdf" className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-4 font-semibold text-white transition hover:scale-[1.01]">
                <FaDownload /> Download Resume
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                <FaEnvelope /> Contact Me
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {[{ icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dharanish-k-27784a2a1/" }, { icon: <FaGithub />, href: "https://github.com/DHARANISHKBIT" }, { icon: <FaTwitter />, href: "https://twitter.com" }, { icon: <FaInstagram />, href: "https://instagram.com" }].map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/70 p-8">
              <p className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">About Me</p>
              <h3 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                Building modern apps with clean architecture and strong UX.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-400">
                From responsive user interfaces to scalable backend services, I focus on balancing speed, clarity, and user delight at every stage of the product.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard icon={<FaBriefcase />} title="Experience" value="Crayond Internship" />
              <InfoCard icon={<FaGraduationCap />} title="Education" value="B.Tech IT" />
              <InfoCard icon={<FaMapMarkerAlt />} title="College" value="BIT Sathy" />
              <InfoCard icon={<FaEnvelope />} title="Email" value="dharanish.k282@gmail.com" />
              <InfoCard icon={<FaCode />} title="Projects" value="4+ Completed" />
              <InfoCard icon={<FaCode />} title="Focus" value="Frontend + Backend" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">{icon}</div>
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{title}</p>
        <p className="mt-1 font-semibold text-slate-200">{value}</p>
      </div>
    </div>
  </div>
);

export default About;