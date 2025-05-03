import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-dark text-text-primary min-h-screen pt-24 pb-16">
      <section className="container px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Xyora Arc</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">Who We Are</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Xyora Arc is a forward-thinking business dedicated to creating innovative apps and solutions that bridge the gap between technology and real-world needs. Leveraging the power of AI and cutting-edge technology, we transform ideas into impactful products designed to solve everyday challenges and deliver value.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-2xl font-heading font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            At Xyora Arc, our vision is to connect technology, business, and innovation to shape a brighter future. By harnessing the potential of AI and focusing on practical, user-friendly solutions, we aim to create products that not only address real-world problems but also inspire progress and deliver lasting impact.
          </p>
        </motion.div>
      </section>
    </div>
  );
} 