import { useState, useEffect } from 'react';
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
    title: 'Xyora Events',
    description: 'A standalone SaaS platform that simplifies event management for community-led and small-scale organizers. Offering affordable ticketing, sponsorship engagement tools, and hybrid event solutions for cultural associations, grassroots movements, and independent creators.',
    image: `${import.meta.env.BASE_URL}xyora-events.png`,
    features: [
      'Affordable Ticketing',
      'Sponsor Marketplace',
      'Real-time Analytics',
      'GDPR Compliance'
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

export default function ProductCards() {
  const [activePosition, setActivePosition] = useState(1);
  const [carouselStyle, setCarouselStyle] = useState({} as React.CSSProperties);
  
  // Handle carousel navigation
  const handleNavigate = (position: number) => {
    setActivePosition(position);
  };
  
  // Update carousel CSS variable when position changes
  useEffect(() => {
    setCarouselStyle({ '--position': activePosition } as React.CSSProperties);
  }, [activePosition]);
  
  // Auto rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePosition(prev => {
        const next = prev >= products.length ? 1 : prev + 1;
        return next;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-dark-lighter overflow-hidden">
      <div className="text-center mb-16 relative" style={{"--bg-color": "#121212"} as React.CSSProperties}>
        <div className="focus-heading" data-text="Our Products">
          Our Products
          <div className="focus-heading-mask">
            <div className="focus-heading-mask-inner">Our Products</div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <Typography
            variant="subtitle1"
            className="text-text-secondary mt-6"
            sx={{ textAlign: 'center' }}
          >
            Discover our innovative solutions powered by cutting-edge technology
          </Typography>
        </div>
      </div>

      <div className="carousel-container">
        <main className="carousel" style={carouselStyle}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="carousel-item"
              style={{ '--offset': index + 1 } as React.CSSProperties}
              onClick={() => handleNavigate(index + 1)}
            >
              <Card 
                className="h-full relative bg-transparent"
                sx={{ 
                  width: '300px',
                  backgroundColor: 'rgba(22,22,31,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30,30,42,0.5)',
                  cursor: 'pointer',
                  boxShadow: activePosition === index + 1 ? "0px 20px 40px rgba(0, 184, 217, 0.2)" : "none",
                  transform: activePosition === index + 1 ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease-out"
                }}
              >
                <motion.div className="overflow-hidden">
                  {product.title === 'Xyora Events' ? (
                    <div style={{ background: 'linear-gradient(135deg, #002B5C 60%, #8A2BE2 100%)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="h-40 md:h-56">
                      <CardMedia
                        component="img"
                        className="h-32 md:h-44 mx-auto"
                        image={product.image}
                        alt={product.title}
                        sx={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                          background: 'transparent',
                          transform: activePosition === index + 1 ? "scale(1.1)" : "scale(1)",
                          transition: "transform 0.4s ease-out"
                        }}
                      />
                    </div>
                  ) : (
                    <CardMedia
                      component="img"
                      className="h-40 md:h-56"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transform: activePosition === index + 1 ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.4s ease-out"
                      }}
                    />
                  )}
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
                  <Button
                    variant="contained"
                    className="mt-2 text-sm md:text-base w-full"
                    sx={{
                      backgroundColor: product.title === 'Papaya Notes' ? '#00B8D9' : 'rgba(22, 22, 31, 0.8)',
                      '&:hover': {
                        backgroundColor: product.title === 'Papaya Notes' ? '#0095B0' : 'rgba(138, 43, 226, 0.6)'
                      },
                      transform: activePosition === index + 1 ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.2s ease-out",
                      color: 'white',
                      opacity: 1,
                      border: product.title === 'Papaya Notes' ? 'none' : '1px solid #8A2BE2',
                      fontWeight: 'bold',
                      boxShadow: product.title === 'Papaya Notes' ? 'none' : '0 0 10px rgba(138, 43, 226, 0.3)'
                    }}
                    {...(product.title === 'Papaya Notes' 
                      ? { 
                          component: 'a',
                          href: 'https://papayanotes.com/',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      : { }
                    )}
                  >
                    {product.title === 'Papaya Notes' ? 'Learn More' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </main>
        <div className="carousel-controls">
          {products.map((_, index) => (
            <div
              key={index}
              className="carousel-control"
              data-active={activePosition === index + 1 ? "true" : "false"}
              onClick={() => handleNavigate(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 