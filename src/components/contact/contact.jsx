import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950/70 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Let’s build something impactful together</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            I’m open to internships, freelance projects, and full-time opportunities where thoughtful engineering and strong design matter.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            {[{ title: "Address", value: "Tamil Nadu, India", icon: <MapPin size={20} /> }, { title: "Call Me", value: "+91 9363148149", icon: <Phone size={20} /> }, { title: "Email Me", value: "dharanish.k282@gmail.com", icon: <Mail size={20} /> }].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-2">
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-cyan-400 transition hover:border-cyan-400"> <FaLinkedin /> </a>
              <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-cyan-400 transition hover:border-cyan-400"> <FaGithub /> </a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-200 outline-none transition focus:border-cyan-400" />
                <input type="email" placeholder="Your Email" className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-200 outline-none transition focus:border-cyan-400" />
              </div>
              <input type="text" placeholder="Subject" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-200 outline-none transition focus:border-cyan-400" />
              <textarea rows="6" placeholder="Message" className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-200 outline-none transition focus:border-cyan-400" />
              <button type="button" className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.01]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}