import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Replace this URL with your actual Formspree form ID when you create one
      const response = await fetch("https://formspree.io/f/xovdekoj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark text-text-primary min-h-screen pt-24 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a question or want to work with us? Reach out using the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 shadow-lg"
        >
          {formStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-primary-cyan text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-heading font-bold mb-4">Message Sent!</h3>
              <p className="text-text-secondary mb-6">
                Thank you for reaching out. We'll be in touch with you shortly.
              </p>
              <button
                onClick={() => setFormStatus('')}
                className="bg-primary-cyan text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan text-text-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan text-text-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-dark-lighter border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan text-text-primary resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-cyan text-white py-3 rounded-lg font-semibold transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus === 'error' && (
                  <p className="mt-4 text-accent-orange text-center">
                    Oops! Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            Or reach us at{' '}
            <a href="mailto:support@xyoraarc.com" className="text-primary-cyan hover:underline">
              support@xyoraarc.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
} 