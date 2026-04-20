import { useState, FormEvent, useCallback } from 'react';
import FadeInSection from '@/components/FadeInSection';

const validateField = (field: string, value: string) => {
  const v = value.trim();
  if (!v) {
    if (field === 'name') return 'Name is required';
    if (field === 'email') return 'Email is required';
    if (field === 'message') return 'Message is required';
  }
  if (field === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return 'Please enter a valid email address';
  }
  return '';
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = useCallback((field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: err }));
    }
  }, [touched]);

  const handleBlur = useCallback((field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const err = validateField(field, form[field as keyof typeof form]);
    setErrors(prev => ({ ...prev, [field]: err }));
  }, [form]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Validate all fields
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);

    const newErrors: Record<string, string> = {};
    for (const field of ['name', 'email', 'message'] as const) {
      const err = validateField(field, form[field]);
      if (err) newErrors[field] = err;
    }
    setErrors(newErrors);

    if (Object.values(newErrors).some(e => e)) return;

    setSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${response.status})`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send message:', err);
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  const isFormValid = form.name.trim() && form.email.trim() && form.message.trim() && !Object.values(errors).some(e => e);

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
            <form onSubmit={handleSubmit} className="mt-12 space-y-6" noValidate>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground/70 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 bg-background border rounded-sm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none transition-colors ${errors.name && touched.name ? 'border-red-500' : 'border-foreground/10 focus:border-foreground/30'}`}
                  placeholder="Your name"
                />
                {errors.name && touched.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
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
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 bg-background border rounded-sm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none transition-colors ${errors.email && touched.email ? 'border-red-500' : 'border-foreground/10 focus:border-foreground/30'}`}
                  placeholder="you@company.com"
                />
                {errors.email && touched.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-3 bg-background border rounded-sm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none transition-colors resize-none ${errors.message && touched.message ? 'border-red-500' : 'border-foreground/10 focus:border-foreground/30'}`}
                  placeholder="How can we help?"
                />
                {errors.message && touched.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {submitError && (
                <p className="text-sm text-red-600 text-center">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={sending || !isFormValid}
                className="w-full px-7 py-3.5 bg-lime text-navy font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send message →'}
              </button>
            </form>
          </FadeInSection>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
