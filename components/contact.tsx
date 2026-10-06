"use client";

import { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon, MailIcon, SendIcon, TriangleAlertIcon } from 'lucide-react';
import { profile } from '@/lib/site';

const EMAILJS = {
  publicKey: 'ODxwqmAv2YZSAAZmm',
  serviceId: 'service_r089xfk',
  templateId: 'template_9rg7sjs',
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

const emptyForm = { name: '', email: '', message: '' };

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40';

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>('idle');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === 'sent' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      // Loaded on demand so the email client isn't part of the initial page bundle
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: `Portfolio message from ${form.name}`,
          message: form.message,
        },
        { publicKey: EMAILJS.publicKey },
      );
      // Only clear the form once delivery has actually succeeded
      setForm(emptyForm);
      setStatus('sent');
    } catch (err) {
      console.error('Contact form failed', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border/60 bg-surface py-16 sm:py-24 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s talk
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Hiring, a product idea, or a project for Icarian? Send a note and I’ll get back to you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-primary-soft underline-offset-4 hover:underline"
          >
            <MailIcon className="h-5 w-5" aria-hidden="true" />
            {profile.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium">
                Name
              </label>
              <input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={update} className={fieldClass} />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update}
                className={fieldClass}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={update}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" disabled={status === 'sending'} className="btn-primary px-6 py-3 text-base disabled:cursor-wait disabled:opacity-70">
              {status === 'sending' ? (
                <>
                  <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <SendIcon className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>

            <div role="status" aria-live="polite" className="text-sm">
              {status === 'sent' && (
                <p className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Thanks — your message was sent.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-red-300">
                  <TriangleAlertIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    That didn’t go through. Your message is still here — try again or email{' '}
                    <a href={`mailto:${profile.email}`} className="underline">
                      {profile.email}
                    </a>
                    .
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
