import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-dark-nav border-b border-dark-border backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1 items-center">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="Xyora Arc Logo" 
                className="h-8 w-auto rounded"
              />
              <span className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                Xyora Arc
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-y-0 right-0 z-50 w-full bg-dark-nav px-6 py-6 sm:max-w-sm border-l border-dark-border ${
          mobileMenuOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img 
              src="/logo.jpg" 
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
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-dark-border">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-secondary hover:bg-dark-card hover:text-text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
} 