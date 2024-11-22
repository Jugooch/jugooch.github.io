"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SendIcon, XIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

(function(){
    emailjs.init("ODxwqmAv2YZSAAZmm");
})();

type NotificationType = {
    success: boolean;
    message: string;
} | null;

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [notification, setNotification] = useState<NotificationType>(null);
    const notificationDuration = 5000;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        emailjs.send("service_r089xfk", "template_9rg7sjs", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        })
            .then(response => {
                setNotification({ success: true, message: "Email sent successfully!" });
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch(err => {
                setNotification({ success: false, message: "Failed to send the email." });
                console.error("FAILED...", err);
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, notificationDuration);

            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <section id="contact" className="py-20 min-h-screen">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gradient mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        Have a project in mind? Let&apos;s work together to create something amazing.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-glow flex items-center justify-center gap-2"
                    >
                        Send Message
                        <SendIcon className="w-4 h-4" />
                    </button>
                </motion.form>

                {notification && (
                    <div className={`fixed bottom-1 right-1 p-4 rounded-lg shadow-lg ${notification.success ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center relative`}>
                        <span>{notification.message}</span>
                        <button onClick={() => setNotification(null)} className="ml-auto pl-4">
                            <XIcon className="w-4 h-4" />
                        </button>
                        {/* Progress bar */}
                        <motion.div
                            initial={{ width: '100%' }}
                            animate={{ width: 0 }}
                            transition={{ duration: notificationDuration / 1000 }}
                            className="absolute bottom-0 left-0 h-1 bg-white opacity-50"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}