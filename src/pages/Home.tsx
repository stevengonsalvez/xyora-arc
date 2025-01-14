import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductCards from '../components/ProductCards';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);

  return (
    <div className="overflow-hidden bg-dark text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              <span className="text-primary-cyan">Connecting Ideas</span>
              <span className="mx-2 text-text-primary">,</span>
              <span className="text-secondary">Shaping Futures</span>
              <span className="text-primary-cyan">.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Xyora Arc is a forward-thinking business that leverages expertise and AI to develop innovative apps and solutions, bridging technology with real-world needs and delivering impactful, practical products.
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
              Xyora Arc is a UK-based company dedicated to developing innovative apps and solutions that seamlessly integrate technology with real-world needs. Leveraging the power of AI and advanced machine learning algorithms, we create products that are not only functional but transformative. With a strong foundation of expertise and a commitment to innovation, our team combines strategic thinking, creative problem-solving, and cutting-edge technology to deliver exceptional value to users.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mt-6">
              At Xyora Arc, we aim to bridge the gap between ideas and impactful real-world applications. Whether addressing everyday challenges or advancing niche solutions, we focus on creating user-friendly and practical tools that drive progress. By harnessing AI and machine learning, our mission is to deliver solutions that inspire innovation, improve lives, and shape a more connected and forward-thinking future.
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
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's work together to bring your vision to life.
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