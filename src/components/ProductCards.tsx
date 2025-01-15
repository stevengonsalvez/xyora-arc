import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const products = [
  {
    id: 1,
    title: 'Papaya Notes',
    description: 'The ultimate digital note-taking app to elevate your note-taking experience and boost productivity',
    image: `${import.meta.env.BASE_URL}papaya-notes.png`,
    features: ['Efficient', 'Secure', 'AI Smart', 'Integrated']
  },
  {
    id: 2,
    title: 'CallNinjaPro',
    description: 'An intelligent AI phone assistant designed to save time and keep your calls spam-free. Experience seamless communication with advanced call filtering and AI-powered features.',
    image: `${import.meta.env.BASE_URL}callninjapro.jpg`,
    features: [
      'Spam management',
      'agentic AI Assistant',
      'Call Management'
    ]
  },
  {
    id: 3,
    title: 'ZeroTouch TestOps',
    description: 'An Agentic AI-powered platform that streamlines the entire software testing lifecycle, including security, UI, and API testing, to ensure flawless product delivery.',
    image: `${import.meta.env.BASE_URL}zerotouch-testops.jpg`,
    features: [
      'Agentic AI testing',
      'Security, UI, and API Testing',
    ]
  },
  {
    id: 4,
    title: 'Xyora Notes',
    description: 'Document your journey,plan your next adventure',
    image: `${import.meta.env.BASE_URL}xyora-notes.jpg`,
    features: [
      'Intuitive Note-Taking',
      'Journey Documentation',
      'Adventure Planning'
    ]
  }
];

const cardVariants = {
  initial: { 
    scale: 1,
    y: 0,
    rotateX: 0,
    boxShadow: "0px 0px 0px rgba(0, 184, 217, 0)"
  },
  hover: { 
    scale: 1.05,
    y: -10,
    rotateX: 5,
    boxShadow: "0px 20px 40px rgba(0, 184, 217, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  initial: { 
    scale: 1,
    backgroundColor: "#00B8D9"
  },
  hover: { 
    scale: 1.05,
    backgroundColor: "#0095B0",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function ProductCards() {
  return (
    <section className="relative py-20 bg-dark-lighter overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Typography
          variant="h2"
          component="h2"
          className="text-4xl font-heading font-bold text-text-primary mb-4"
          sx={{ textAlign: 'center' }}
        >
          Our Products
        </Typography>
        <div className="mx-auto max-w-2xl">
          <Typography
            variant="subtitle1"
            className="text-text-secondary"
            sx={{ textAlign: 'center' }}
          >
            Discover our innovative solutions powered by cutting-edge technology
          </Typography>
        </div>
      </motion.div>

      <div className="relative max-w-[100vw] overflow-hidden">
        <div 
          className="flex overflow-x-auto gap-6 px-[10vw] pb-8 snap-x snap-mandatory 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            hover:cursor-grab active:cursor-grabbing"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[400px] snap-center"
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="h-full rounded-lg overflow-hidden perspective-1000"
              >
                <Card 
                  className="h-full relative bg-transparent"
                  sx={{ 
                    backgroundColor: 'rgba(22,22,31,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(30,30,42,0.5)',
                  }}
                >
                  <motion.div variants={imageVariants} className="overflow-hidden">
                    <CardMedia
                      component="img"
                      className="h-40 md:h-56"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </motion.div>
                  <CardContent className="p-4 md:p-6">
                    <Typography 
                      variant="h5" 
                      component="h3"
                      className="font-heading font-bold text-text-primary mb-2 text-lg md:text-xl"
                    >
                      {product.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      className="text-text-secondary mb-4 text-sm md:text-base line-clamp-3"
                    >
                      {product.description}
                    </Typography>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                          className="px-2 py-1 text-xs rounded-full bg-dark-nav text-text-secondary"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div variants={buttonVariants}>
                      <Button
                        variant="contained"
                        className="mt-2 text-sm md:text-base w-full"
                        sx={{
                          backgroundColor: '#00B8D9',
                          '&:hover': {
                            backgroundColor: '#0095B0'
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 