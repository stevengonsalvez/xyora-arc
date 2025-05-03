import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const machineControls = useAnimation();
  const cog1Controls = useAnimation();
  const cog2Controls = useAnimation();
  const submitButtonControls = useAnimation();
  
  // Animation for machine parts when form progresses
  useEffect(() => {
    if (currentStep === 1) {
      machineControls.start({ x: [-5, 5, -3, 3, 0], transition: { duration: 0.5 } });
      cog1Controls.start({ rotate: 360, transition: { duration: 3, ease: "linear", repeat: Infinity } });
    }
    if (currentStep === 2) {
      cog2Controls.start({ rotate: -360, transition: { duration: 3, ease: "linear", repeat: Infinity } });
    }
    if (currentStep === 3) {
      submitButtonControls.start({ 
        scale: [1, 1.05, 1],
        boxShadow: [
          "0px 0px 0px rgba(0,184,217,0.3)",
          "0px 0px 20px rgba(0,184,217,0.7)",
          "0px 0px 0px rgba(0,184,217,0.3)"
        ],
        transition: { 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        } 
      });
    }
  }, [currentStep, machineControls, cog1Controls, cog2Controls, submitButtonControls]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email') {
      setEmailError('');
    }
  };
  
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const handleStepComplete = (step: number) => {
    if (step < 3) {
      if (step === 1) {
        if (!validateEmail(formData.email)) {
          setEmailError('Please enter a valid email address');
          return;
        }
      }
      setCurrentStep(step + 1);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    
    try {
      const response = await fetch("https://formspree.io/f/xovdekoj", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        // Add submit animation
        await machineControls.start({ 
          y: [0, -10, 0],
          x: [-5, 5, -3, 3, 0],
          transition: { duration: 1 }
        });
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setFormStatus('');
    setCurrentStep(0);
    setFormData({ name: '', email: '', message: '' });
    cog1Controls.stop();
    cog2Controls.stop();
    submitButtonControls.stop();
  };
  
  const tubeVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.5, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: i * 0.5, duration: 0.5 }
      }
    })
  };
  
  return (
    <div className="bg-dark text-text-primary min-h-screen pt-24 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Our Machine</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Engage with our fantastical messaging contraption to send your thoughts directly to our brains.
          </p>
        </motion.div>
        
        {/* Rube Goldberg Contact Machine */}
        {formStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 shadow-lg"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 1 }}
              className="text-primary-cyan text-7xl mb-6 mx-auto"
            >
              ✓
            </motion.div>
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-heading font-bold mb-4"
            >
              Message Delivered!
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-text-secondary mb-8"
            >
              Your message has been successfully processed through our contraption and sent to our team.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetForm}
              className="bg-primary-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Reset The Machine
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 shadow-lg overflow-hidden"
          >
            {/* Machine SVG Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg viewBox="0 0 800 600" className="w-full h-full">
                <motion.path
                  d="M100,100 C150,50 200,150 250,100 S350,50 400,100 S500,150 550,100 S650,50 700,100"
                  fill="none"
                  stroke="#00B8D9"
                  strokeWidth="8"
                  custom={0}
                  variants={tubeVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M200,200 C250,150 300,250 350,200 S450,150 500,200 S600,250 650,200"
                  fill="none"
                  stroke="#8A2BE2"
                  strokeWidth="6"
                  custom={1}
                  variants={tubeVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.circle 
                  cx="200" 
                  cy="300" 
                  r="40" 
                  fill="none" 
                  stroke="#00B8D9" 
                  strokeWidth="4"
                  animate={cog1Controls}
                />
                <motion.circle 
                  cx="600" 
                  cy="400" 
                  r="50" 
                  fill="none" 
                  stroke="#8A2BE2" 
                  strokeWidth="4"
                  animate={cog2Controls}
                />
              </svg>
            </div>
            
            {/* The actual form */}
            <motion.div
              animate={machineControls}
              className="relative z-10"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Name */}
                <motion.div
                  initial={{ x: currentStep === 0 ? 0 : -100, opacity: currentStep === 0 ? 1 : 0 }}
                  animate={{ 
                    x: currentStep === 0 ? 0 : -100, 
                    opacity: currentStep === 0 ? 1 : 0,
                    height: currentStep === 0 ? 'auto' : 0
                  }}
                  className="bg-dark-lighter border border-dark-border rounded-lg p-6 overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-primary-cyan flex items-center justify-center text-white font-bold mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      1
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold">Your Name</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-grow w-full">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        ref={nameInputRef}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan text-text-primary"
                        placeholder="Enter your name"
                      />
                    </div>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-primary-cyan text-white rounded-lg font-medium"
                      onClick={() => formData.name && handleStepComplete(0)}
                    >
                      Next
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Step 2: Email */}
                <motion.div
                  initial={{ x: currentStep === 1 ? 0 : 100, opacity: currentStep === 1 ? 1 : 0 }}
                  animate={{ 
                    x: currentStep === 1 ? 0 : currentStep < 1 ? 100 : -100, 
                    opacity: currentStep === 1 ? 1 : 0,
                    height: currentStep === 1 ? 'auto' : 0
                  }}
                  className="bg-dark-lighter border border-dark-border rounded-lg p-6 overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-primary-cyan flex items-center justify-center text-white font-bold mr-4"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      2
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold">Your Email</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-grow w-full">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailInputRef}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 bg-dark border ${emailError ? 'border-red-500' : 'border-dark-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan text-text-primary`}
                        placeholder="your.email@example.com"
                      />
                      {emailError && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {emailError}
                        </motion.p>
                      )}
                    </div>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-primary-cyan text-white rounded-lg font-medium"
                      onClick={() => formData.email && handleStepComplete(1)}
                    >
                      Next
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Step 3: Message */}
                <motion.div
                  initial={{ x: currentStep === 2 ? 0 : 100, opacity: currentStep === 2 ? 1 : 0 }}
                  animate={{ 
                    x: currentStep === 2 ? 0 : currentStep < 2 ? 100 : -100, 
                    opacity: currentStep === 2 ? 1 : 0,
                    height: currentStep === 2 ? 'auto' : 0
                  }}
                  className="bg-dark-lighter border border-dark-border rounded-lg p-6 overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-primary-cyan flex items-center justify-center text-white font-bold mr-4"
                      animate={{ 
                        backgroundColor: ['#00B8D9', '#8A2BE2', '#00B8D9'],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      3
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold">Your Message</h3>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <textarea
                      id="message"
                      name="message"
                      ref={messageInputRef}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-cyan text-text-primary resize-none"
                      placeholder="Type your message here..."
                    />
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="self-end px-6 py-3 bg-primary-cyan text-white rounded-lg font-medium"
                      onClick={() => formData.message && handleStepComplete(2)}
                    >
                      Next
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Step 4: Submit */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: currentStep === 3 ? 1 : 0,
                    scale: currentStep === 3 ? 1 : 0.9,
                    height: currentStep === 3 ? 'auto' : 0
                  }}
                  className="text-center py-6"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    animate={submitButtonControls}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-10 py-4 bg-gradient-to-r from-primary-cyan to-secondary text-white rounded-lg font-bold text-lg shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Processing...' : 'Start The Machine!'}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-white opacity-20"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    />
                  </motion.button>
                </motion.div>
                
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-center"
                  >
                    <p className="text-red-400">
                      Oh no! Our machine jammed. Please try again or contact us directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            Or reach us the old-fashioned way at{' '}
            <a href="mailto:support@xyoraarc.com" className="text-primary-cyan hover:underline">
              support@xyoraarc.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
} 