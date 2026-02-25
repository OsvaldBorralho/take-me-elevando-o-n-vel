import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5598302383838?text=Olá! Gostaria de saber mais sobre a Take-me.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
