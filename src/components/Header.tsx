import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const navItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }),
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-dark-nav border-b border-dark-border backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <motion.div 
            className="flex lg:flex-1 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <motion.img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="Xyora Arc Logo" 
                className="h-8 w-auto rounded"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.span 
                className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Xyora Arc
              </motion.span>
            </Link>
          </motion.div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-4">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={navItemVariants}
              >
                <Link
                  to={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-semibold leading-6 
                    ${location.pathname === item.href 
                      ? 'text-text-primary bg-dark-lighter border-cyan-500/30' 
                      : 'text-text-secondary bg-dark-card border-dark-border'
                    }
                    rounded-full border
                    backdrop-blur-sm transition-all duration-300
                    hover:bg-dark-lighter hover:border-cyan-500/30
                    hover:text-text-primary
                    overflow-hidden group
                    flex items-center justify-center
                    min-w-[100px]
                  `}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-y-0 right-0 z-[100] w-full sm:max-w-sm border-l border-dark-border ${
          mobileMenuOpen ? '' : 'pointer-events-none'
        }`}
        style={{
          backgroundColor: '#0D0D12',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          backgroundImage: 'linear-gradient(to bottom, rgba(22,22,31,0.98), rgba(13,13,18,0.98))'
        }}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-dark-border bg-dark">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpg`} 
              alt="Xyora Arc Logo" 
              className="h-8 w-auto rounded"
            />
            <span className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
              Xyora Arc
            </span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="px-6 py-6 bg-dark-nav bg-opacity-100">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  block rounded-lg px-4 py-3 text-base font-semibold
                  ${location.pathname === item.href 
                    ? 'text-text-primary bg-dark-lighter' 
                    : 'text-text-secondary hover:bg-dark-card hover:text-text-primary'
                  }
                  transition-all duration-300
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
} 