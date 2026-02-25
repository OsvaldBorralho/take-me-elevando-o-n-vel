import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logo-light-bg.png";

const WHATSAPP_URL = "https://wa.me/559830238383?text=Olá! Gostaria de saber mais sobre a Take-me.";
const INSTAGRAM_URL = "https://instagram.com/takeme.app";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Rota", to: "/rota" },
  { label: "Segurança", to: "/seguranca" },
  { label: "Contato", to: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={logoLight} alt="Take-me" className="h-8 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10",
                location.pathname === link.to && "text-accent bg-primary-foreground/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram @takeme.app" className="text-primary-foreground/70 hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10",
                    location.pathname === link.to && "text-accent bg-primary-foreground/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-primary-foreground/10">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <Button variant="hero" size="sm" className="flex-1" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
