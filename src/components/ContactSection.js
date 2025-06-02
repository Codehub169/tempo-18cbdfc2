import { useState } from 'react';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error', 'validation_error'
  const [errors, setErrors] = useState({});

  const [containerRef, isVisible] = useScrollTrigger({ threshold: 0.1, reset: false });

  const validateForm = () => {
    let currentErrors = {};
    if (!formData.name.trim()) currentErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      currentErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) currentErrors.message = 'Message is required.';
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('validation_error');
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({}); // Clear errors on success
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrors({ form: errorData.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus('error');
      setErrors({ form: 'Failed to send message. Please check your connection.' });
    }
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="min-h-screen py-20 px-6 md:px-16 bg-brand-cream flex flex-col justify-center items-center"
    >
      <div className={`w-full max-w-2xl transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center text-brand-charcoal">
          Let’s Design Your Story
        </h2>
        <p className="font-sans text-lg text-brand-charcoal/80 text-center mb-10">
          Have a project in mind, or just want to say hello? Send a note. We’re excited to hear from you.
        </p>

        <form 
          onSubmit={handleSubmit} 
          noValidate // Prevent browser validation, rely on custom
          className="bg-white p-8 md:p-12 rounded-soft shadow-xl space-y-6 relative border-t-4 border-brand-gold"
          style={{ fontFamily: `'Inter', sans-serif` }} // Emulate a 'note' feel
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 border rounded-soft focus:ring-brand-gold focus:border-brand-gold transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`} 
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 border rounded-soft focus:ring-brand-gold focus:border-brand-gold transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`} 
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1">Your Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 border rounded-soft focus:ring-brand-gold focus:border-brand-gold transition-colors ${errors.message ? 'border-red-500' : 'border-gray-300'}`} 
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-brand-gold text-brand-charcoal font-display font-semibold py-3 px-8 rounded-soft hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Your Note'}
            </button>
          </div>

          {status === 'success' && <p role="status" className="text-green-600 text-center mt-4">Message sent successfully! We’ll be in touch.</p>}
          {status === 'error' && errors.form && <p role="alert" className="text-red-600 text-center mt-4">{errors.form}</p>}
          {status === 'validation_error' && Object.keys(errors).length > 0 && <p role="alert" className="text-red-600 text-center mt-4">Please correct the errors above.</p>}
        </form>

        <div className="mt-12 text-center">
          <p className="font-sans text-brand-charcoal/80 mb-2">Connect with us on</p>
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-brand-gold hover:text-yellow-500 transition-colors duration-300 font-semibold group"
          >
            <span className="mr-2">Instagram @hueneu_</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
