import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCards from '../components/ProductCards';
import '../cube-animation.css';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden bg-dark text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cube Animation */}
        <div className="cube-container">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        
        {/* Spotlight Effect */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-spotlight" />
        </motion.div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-primary-cyan">Innovative Technology</span>
              <span className="mx-2 text-text-primary">,</span>
              <br className="md:hidden" />
              <span className="text-secondary">AI-Powered Solutions</span>
              <span className="text-primary-cyan">.</span>
            </motion.h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Xyora Arc is a leading UK-based app development company specializing in AI-powered solutions and machine learning-driven products. We create cutting-edge digital solutions that transform business challenges into practical, forward-thinking applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <ProductCards />

      {/* About Section */}
      <section className="py-24 bg-dark-lighter" ref={ref}>
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-8 text-center">
              About Xyora Arc
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Xyora Arc is a premier UK-based technology and innovation company, specializing in AI-powered solutions and machine learning-driven products. As a leading mobile app development company in the UK, we create custom app solutions that seamlessly integrate advanced machine learning tools with real-world applications. Our team of expert AI app developers combines strategic thinking with cutting-edge digital solutions to deliver transformative digital tools for businesses.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mt-6">
              At Xyora Arc, we focus on practical AI applications and e-commerce business tools that drive digital transformation. Our AI-driven technology company develops innovative apps that solve real-world problems, from machine learning apps for business to AI solutions for online businesses. Whether you're looking for AI-powered solutions for business or custom solutions using AI and machine learning, our team delivers user-focused technology products that inspire innovation and improve lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dark-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
              Transform Your Business with AI Technology
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Discover how our innovative app development and AI-powered solutions can drive your digital transformation.
            </p>
            <button className="bg-primary-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 