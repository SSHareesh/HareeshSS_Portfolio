import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'hareeshseenu95@gmail.com',
        }
      );
      
      setSubmitStatus({ type: 'success', message: 'Your message has been sent! I\'ll get back to you soon.' });
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-light-100 dark:bg-dark-200">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center max-w-3xl mx-auto text-dark-300/70 dark:text-light-300/70">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-glass p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center 
                                 justify-center text-primary-500 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:hareeshseenu95@gmail.com" className="hover:text-primary-500 transition-colors">
                      hareeshseenu95@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center 
                                 justify-center text-primary-500 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p>Chennai, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center 
                                 justify-center text-primary-500 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p>+91 8610236842</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Connect With Me</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/SSHareesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-300 dark:bg-dark-100 transition-colors 
                               hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/hareesh-s-s-7478b1257/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-300 dark:bg-dark-100 transition-colors 
                               hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="mailto:hareeshseenu95@gmail.com" 
                    className="p-3 rounded-full bg-light-300 dark:bg-dark-100 transition-colors 
                               hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white"
                    aria-label="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-glass p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;