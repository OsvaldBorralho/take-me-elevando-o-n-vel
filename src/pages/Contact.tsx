import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const WHATSAPP_URL = "https://wa.me/559830238383?text=Olá! Gostaria de saber mais sobre a Take-me.";
const INSTAGRAM_URL = "https://www.instagram.com/takeme_app/";

const Contact = () => {
  useSEO({
    title: "Contato Take-me | Fale no WhatsApp",
    description: "Fale com a Take-me para viagens de passageiros ou envio de encomendas na rota Viana ⇄ São Luís.",
  });

  return (
    <Layout>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Fale com a Take-me</h1>
            <p className="text-lg text-primary-foreground/70">
              Para viagens e encomendas na rota Viana ⇄ São Luís, fale com a gente:
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="space-y-4">
            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-whatsapp" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading font-semibold text-lg">WhatsApp</h2>
                <p className="text-sm text-muted-foreground"><p className="text-sm text-muted-foreground">(98) 3023-8383</p></p>
              </div>
              <Button variant="whatsapp" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-4 h-4" /> Chamar
                </a>
              </Button>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading font-semibold text-lg">E-mail</h2>
                <p className="text-sm text-muted-foreground">atendimento@takeme.app.br</p>
              </div>
              <Button variant="accent" asChild>
                <a href="mailto:atendimento@takeme.app.br" className="gap-2">
                  <Mail className="w-4 h-4" /> Enviar
                </a>
              </Button>
            </motion.div>

            {/* Instagram */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading font-semibold text-lg">Instagram</h2>
                <p className="text-sm text-muted-foreground">@takeme_app</p>
              </div>
              <Button variant="accent" asChild>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Instagram className="w-4 h-4" /> Ver
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
