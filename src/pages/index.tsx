import { motion } from "framer-motion";
import { BaseLayout } from "../layout";
import s from "../styles/index.module.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <BaseLayout>
      <MeSection />
      <AboutMeSection />
      <SkillsSection />
    </BaseLayout>
  );
}

const MeSection = () => {
  return (
    <section className="h-[100vh] grid justify-center items-center">
      <div className="space-y-10 text-center font-bold  max-w-6xl">
        <h1 className="text-7xl max-lg:text-4xl">Thomas Hinterberger</h1>
        <h2 className={`text-4xl max-lg:text-lg text-gray-600 ${s.typewriter}`}>
          I am a indie dev who codes with{" "}
          <span className="text-red-600">❤</span> and a lot of ☕
        </h2>
      </div>
    </section>
  );
};

const AboutMeSection = () => {
  const ref = useRef<HTMLElement>(null);
  let [progress, setProgress] = useState(0);

  const OpacityOfText = (NumOfText: number) => {
    if (progress < 1 && NumOfText === 0) return 1;
    if (progress > 1 && progress < 1.3 && NumOfText === 1) return 1;
    if (progress > 1.3 && NumOfText === 2) return 1;
    return 0.2;
  };

  const ProgressPage = async () => {
    if (!ref.current) return;
    const { offsetTop, clientHeight } = ref.current;
    const scrollYOfSection = window.scrollY - offsetTop + clientHeight;
    setProgress(scrollYOfSection / clientHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", ProgressPage, { passive: true });
    return () => {
      window.removeEventListener("scroll", ProgressPage);
    };
  });

  return (
    <section ref={ref} className="p-5 h-[130vh] grid justify-center items-center bg-black ">
      <div className="max-w-6xl grid items-center justify-center text-5xl max-sm:text-2xl max-sm:space-y-52 font-bold space-y-32 text-white">
        <motion.p animate={{ opacity: OpacityOfText(0) }}>
          I know my tools inside out.
        </motion.p>
        <motion.p animate={{ opacity: OpacityOfText(1) }}>
          I have contributed to many open source Projects, who are powering
          thousands of apps worldwide.
        </motion.p>
        <motion.p animate={{ opacity: OpacityOfText(2) }}>
          I am maintaining some of the most popular open-source projects, with
          over 40 million downloads.
        </motion.p>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section className="h-[100vh] grid items-center justify-center max-sm:text-xl text-3xl p-20">
      <div className="space-y-16 max-w-6xl">
        <Skills>
          <b>I will help you ship better apps</b>, faster. Our team of expert
          engineers has created the best user experiences in some of the most
          popular apps worldwide.
        </Skills>

        <div className="space-y-8">
          <Skills>
            {" "}
            Our services: <br />{" "}
          </Skills>
          <Skills>
            <b> - From Idea to AppStore: </b> Full App Design and Development{" "}
            <br />
          </Skills>
          <Skills>
            <b> - Performance Optimization: </b> Startup-time, Animation and
            overall smoothness optimization for existing apps <br />
         </Skills>
          <Skills>
            <b> - Custom Module Development: </b> Development of specific UIs,
            animations, gestures or native modules for existing apps
          </Skills>
          <Skills>
            <b> - PConsulting: </b> One-on-one consulting with a React Native,
            iOS or Android expert and bug fixing{" "}
          </Skills>
        </div>
      </div>
    </section>
  );
};

type SkillsProps = {
  children: React.ReactNode;
};

const Skills: React.FC<SkillsProps> = ({ children }) => {
  return (
    <motion.p
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      initial={{x:"-100%"}}
    >
      {children}
    </motion.p>
  );
};
