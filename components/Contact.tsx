import React, { useState } from 'react';
import { EmailIcon } from '../constants.tsx';
import { useOnScreen } from '../hooks/useOnScreen.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const data = new FormData(e.currentTarget);

    try {
      // NOTE: Replace 'mqkrvgyl' with your own Formspree form ID
      const response = await fetch('https://formspree.io/f/meozyylj', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus({ message: "Thank you! Your message has been sent.", isError: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ message: "Oops! There was a problem sending your message.", isError: true });
      }
    } catch (error) {
      setSubmitStatus({ message: "Oops! There was a problem sending your message.", isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div ref={ref} className={`container fade-in-up-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="button button-primary full-width"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
               {submitStatus && (
                <div className={`form-status ${submitStatus.isError ? 'error' : 'success'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                  <EmailIcon className="icon" />
                  <a href="mailto:nitishkarthick279@gmail.com">nitishkarthick279@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
