import { motion } from "framer-motion";
import { Shield, Check, MessageCircle, ShieldCheck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const WHATSAPP_URL = "https://wa.me/5598302383838?text=Olá! Gostaria de saber mais sobre a Take-me.";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Safety = () => {
  useSEO({
    title: "Segurança Take-me | Operação estruturada e padrão",
    description: "A Take-me trabalha com foco em padrão de atendimento, operação organizada e suporte para uma experiência mais tranquila.",
  });

  return (
    <Layout>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Segurança e padrão Take-me</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Segurança é parte da experiência. A Take-me trabalha com operação estruturada, padrão de atendimento e suporte para que cada trajeto aconteça com mais tranquilidade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Padrão de atendimento", desc: "Consistência no cuidado e condução do serviço." },
              { icon: Shield, title: "Operação organizada", desc: "Menos improviso, mais previsibilidade." },
              { icon: Headphones, title: "Suporte", desc: "Canais claros para falar com a Take-me quando precisar." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-heading font-bold text-lg mb-2">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Safety;
