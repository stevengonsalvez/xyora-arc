import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Typography, Button, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef } from 'react';

const products = [
  {
    id: 1,
    title: 'Papaya Notes',
    description: 'The ultimate digital note-taking app to elevate your note-taking experience and boost productivity',
    image: '/papaya-notes.png',
    features: ['Efficient', 'Secure', 'AI Smart', 'Integrated']
  },
  {
    id: 2,
    title: 'CallNinjaPro',
    description: 'An intelligent AI phone assistant designed to save time and keep your calls spam-free. Experience seamless communication with advanced call filtering and AI-powered features.',
    image: '/callninjapro.jpg',
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
    image: '/zerotouch-testops.jpg',
    features: [
      'Agentic AI testing',
      'Security, UI, and API Testing',
    ]
  },
  {
    id: 4,
    title: 'Xyora Notes',
    description: 'Document your journey,plan your next adventure',
    image: '/xyora-notes.jpg',
    features: [
      'Intuitive Note-Taking',
      'Journey Documentation',
      'Adventure Planning'
    ]
  }
];

export default function ProductCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

      <div className="relative px-8">
        {/* Scroll Buttons */}
        <IconButton
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
          sx={{ 
            backgroundColor: 'rgba(0,184,217,0.1)',
            backdropFilter: 'blur(4px)',
            border: '2px solid rgba(0,184,217,0.2)',
            color: '#00B8D9',
            width: '48px',
            height: '48px',
            '&:hover': { 
              backgroundColor: 'rgba(0,184,217,0.2)',
              border: '2px solid rgba(0,184,217,0.3)',
            }
          }}
        >
          <ChevronLeft className="w-8 h-8" />
        </IconButton>
        
        <IconButton
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
          sx={{ 
            backgroundColor: 'rgba(0,184,217,0.1)',
            backdropFilter: 'blur(4px)',
            border: '2px solid rgba(0,184,217,0.2)',
            color: '#00B8D9',
            width: '48px',
            height: '48px',
            '&:hover': { 
              backgroundColor: 'rgba(0,184,217,0.2)',
              border: '2px solid rgba(0,184,217,0.3)',
            }
          }}
        >
          <ChevronRight className="w-8 h-8" />
        </IconButton>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[600px] snap-center"
            >
              <Card 
                className="h-full"
                sx={{ 
                  backgroundColor: 'rgba(22,22,31,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30,30,42,0.5)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  className="h-80"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <CardContent className="p-6">
                  <Typography 
                    variant="h5" 
                    component="h3"
                    className="font-heading font-bold text-text-primary mb-2"
                  >
                    {product.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    className="text-text-secondary mb-4"
                  >
                    {product.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-dark-nav text-text-secondary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="contained"
                    className="mt-2"
                    sx={{
                      backgroundColor: '#00B8D9',
                      '&:hover': {
                        backgroundColor: '#0095B0'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 