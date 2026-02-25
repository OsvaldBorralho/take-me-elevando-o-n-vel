import { motion } from "framer-motion";
import { MapPin, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const WHATSAPP_URL = "https://wa.me/559830238383?text=Olá! Gostaria de saber mais sobre a Take-me.";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const RoutePage = () => {
  useSEO({
    title: "Rota Take-me | Viana ⇄ São Luís",
    description: "Entenda como a Take-me atua na rota Viana ⇄ São Luís, trazendo organização, conforto, conectividade e padrão de atendimento.",
  });

  return (
    <Layout>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Rota inicial: Viana ⇄ São Luís</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Começamos onde a demanda é real e recorrente. O deslocamento entre Viana e São Luís movimenta trabalho, saúde, estudo, compras e logística — e merece uma experiência melhor.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              Por que começamos aqui
            </h2>
            <div className="space-y-4 mb-10">
              {[
                "Alta recorrência de deslocamentos",
                "Necessidade de conforto e previsibilidade",
                "Oportunidade de elevar o padrão regional",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-card p-5 rounded-lg border border-border">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RoutePage;
