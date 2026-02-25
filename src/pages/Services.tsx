import { motion } from "framer-motion";
import { Users, Package, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const WHATSAPP_URL = "https://wa.me/5598302383838?text=Olá! Gostaria de saber mais sobre a Take-me.";
const WHATSAPP_ENCOMENDA = "https://wa.me/5598302383838?text=Olá! Gostaria de enviar uma encomenda.";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Services = () => {
  useSEO({
    title: "Serviços Take-me | Passageiros e Encomendas",
    description: "Viagens para passageiros e envio de pequenas encomendas porta a porta com atendimento estruturado e eficiência na rota Viana ⇄ São Luís.",
  });

  return (
    <Layout>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Serviços Take-me</h1>
            <p className="text-lg text-primary-foreground/70">
              Um único ecossistema para mobilidade e logística leve: pessoas e encomendas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Passageiros */}
            <motion.div {...fadeUp} className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">Viaje com mais nível</h2>
              <div className="space-y-3 mb-8 flex-1">
                {["Mais conforto no trajeto", "Conectividade", "Experiência organizada"].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" /> {b}
                  </div>
                ))}
              </div>
              <Button variant="hero" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Encomendas */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">Envie com praticidade</h2>
              <div className="space-y-3 mb-8 flex-1">
                {["Porta a porta", "Agilidade", "Atendimento estruturado"].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" /> {b}
                  </div>
                ))}
              </div>
              <Button variant="hero" asChild>
                <a href={WHATSAPP_ENCOMENDA} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Package className="w-4 h-4" /> Enviar uma encomenda
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
