import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─────────────────────────────────────────────────────────────────────────────
// To receive contact emails:
//  1. Go to https://formspree.io → sign up free
//  2. Create a new form (set email to arpitmaurya840@gmail.com)
//  3. Copy your form endpoint ID and replace YOUR_FORM_ID below
// FormSubmit endpoint (no signup required — directly routes to your email)
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/arpitmaurya840@gmail.com';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1, '-30px');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.fullName}`,
          _template: 'table'
        }),
      });

      const data = await res.json();

      if (res.ok && (data.success === 'true' || data.success === true || res.status === 200)) {
        setStatus('success');
        setFormData({ fullName: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <h2 className={`section-title anim-fade-up${isVisible ? ' is-visible' : ''}`}>
        Contact Me
      </h2>

      <div className={`contact-card anim-fade-scale${isVisible ? ' is-visible' : ''} anim-delay-2`}>
        <h3 className="contact-subtitle">Send me a message</h3>
        <p className="contact-desc">
          Fill out the form below and I'll respond back to you within 24 hours ...
        </p>

        {status === 'success' ? (
          <div className="contact-success-box">
            <CheckCircle size={24} className="success-icon" />
            <div>
              <p className="success-title">Message sent successfully!</p>
              <p className="success-desc">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="form-input"
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="form-input"
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Tell me what you are building or say hello ..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="form-textarea"
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <div className="contact-error-box">
                <AlertCircle size={16} />
                <span>Failed to send. Please try again or email me directly.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="btn-spinner" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={15} className="btn-icon" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
