"use client";

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Justice Gooch
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Software Developer & UI/UX Designer
        </motion.h2>
        
        <motion.div 
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="https://github.com/jugooch"
            target="_blank"
            className="p-2 rounded-full bg-card hover-glow"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
          <Link 
            href="https://linkedin.com/in/justicegooch"
            target="_blank"
            className="p-2 rounded-full bg-card hover-glow"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:justicegooch@gmail.com"
            className="p-2 rounded-full bg-card hover-glow"
            aria-label="Email Contact"
          >
            <MailIcon className="w-6 h-6" />
          </Link>
        </motion.div>

        <motion.div 
          className="flex gap-4 flex-col sm:flex-row justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="#contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-glow"
          >
            Hire Me
          </Link>
          <Link
            href="/Justice_Gooch_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-card text-card-foreground font-medium hover-glow"
          >
            See My Resume
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}