import { useState, FormEvent } from 'react';
import FadeInSection from '@/components/FadeInSection';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-secondary py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <FadeInSection>
          <h2 className="text-section text-foreground text-center">Get in touch</h2>
        </FadeInSection>
        <FadeInSection delay={100}>
          <p className="mt-4 text-center text-foreground/60 text-[15px]">
            Interested in learning more about SYKS infrastructure? Drop us a message.
          </p>
        </FadeInSection>

        {submitted ? (
          <FadeInSection delay={150}>
            <div className="mt-12 p-8 bg-background rounded-sm text-center">
              <p className="text-foreground font-medium text-lg">Thank you for reaching out.</p>
              <p className="mt-2 text-foreground/60 text-sm">We'll be in touch shortly.</p>
            </div>
          </FadeInSection>
        ) : (
          <FadeInSection delay={200}>
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground/70 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-sm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground/70 mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-sm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-colors"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground/70 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-foreground/10 rounded-sm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                  placeholder="How can we help?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-7 py-3.5 bg-lime text-navy font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200"
              >
                Send message →
              </button>
            </form>
          </FadeInSection>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
