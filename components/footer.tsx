"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-12 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
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
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Justice Gooch. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}