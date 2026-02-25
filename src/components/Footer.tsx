import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logoLight from "@/assets/logo-light-bg.png";

const WHATSAPP_URL = "https://wa.me/559830238383?text=Olá! Gostaria de saber mais sobre a Take-me.";
const INSTAGRAM_URL = "https://instagram.com/takeme.app";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logoLight} alt="Take-me" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
              Mobilidade intermunicipal com conforto, conectividade e organização.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-primary-foreground/80 uppercase tracking-wider">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Início", to: "/" },
                { label: "Sobre", to: "/sobre" },
                { label: "Serviços", to: "/servicos" },
                { label: "Rota", to: "/rota" },
                { label: "Segurança", to: "/seguranca" },
                { label: "Contato", to: "/contato" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-primary-foreground/80 uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/termos" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 text-primary-foreground/80 uppercase tracking-wider">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (98) 3023-8383
              </a>
              <a href="mailto:atendimento@takeme.app.br" className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                atendimento@takeme.app.br
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
                @takeme.app
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Take-me. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Pix • Cartão • Dinheiro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
