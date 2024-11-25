"use client";

import { motion } from 'framer-motion';
import { RocketIcon, CodeIcon, PaintbrushIcon } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname instead of useRouter



const skills = [
  { icon: CodeIcon, title: 'Development', description: 'Full-stack development with modern technologies' },
  { icon: PaintbrushIcon, title: 'UI/UX Design', description: 'Creating beautiful and intuitive interfaces' },
  { icon: RocketIcon, title: 'Performance', description: 'Optimizing for the best user experience' },
];

export function About() {
  const pathname = usePathname(); // Use usePathname hook
  const isAboutPage = pathname === '/about';

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
            <div className="space-y-6">
                <motion.h2
                    initial={{x: -50}}
                    whileInView={{x: 0}}
                    viewport={{once: true}}
                    className="text-3xl font-bold text-gradient"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-muted-foreground"
                >
                    I&apos;m a passionate Software Developer and UI/UX Designer with a focus on creating
                    beautiful, functional, and accessible web experiences. With expertise in modern
                    web technologies and design principles, I bring ideas to life through clean code
                    and intuitive interfaces.
                </motion.p>

                <div className="grid gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.2}}
                            className="flex items-start gap-4 p-4 rounded-lg bg-card hover-glow"
                        >
                            <skill.icon className="w-6 h-6 text-primary"/>
                            <div>
                                <h3 className="font-semibold mb-1">{skill.title}</h3>
                                <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {!isAboutPage && (<motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/about"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-glow"
                    >
                        More About Me
                    </Link>
                </motion.div>)}
            </div>

            <motion.div
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                className="relative aspect-square"
            >
                <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"/>
                <Image
                    src="/me.jpg"
                    alt="Justice Gooch"
                    width={688}
              height={688}
              className="rounded-full object-cover border-4 border-primary/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}