import { motion } from "framer-motion";
import { Target, Eye, Heart, Check } from "lucide-react";
import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const valores = [
  "Conforto e respeito ao tempo",
  "Segurança e confiança",
  "Inovação com propósito",
  "Sustentabilidade real",
  "Excelência no atendimento",
  "Transparência",
  "Valorização das pessoas",
];

const About = () => {
  useSEO({
    title: "Sobre a Take-me | A estrada é a mesma. O que muda é o nível.",
    description: "Conheça a Take-me e o propósito de elevar o padrão da mobilidade regional com conforto, conectividade, organização e sustentabilidade real.",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Sobre a Take-me</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              A Take-me nasceu para elevar o padrão da mobilidade regional. A rota é conhecida — o que faltava era uma experiência mais confortável, conectada e organizada para quem precisa se deslocar entre Viana e São Luís.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-xl mb-3">Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Entregar uma experiência de transporte confortável, conectada e eficiente, com padrão de atendimento e operação organizada.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-xl mb-3">Visão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em mobilidade inteligente e logística leve no Maranhão, começando pela rota Viana ⇄ São Luís.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Nossos valores</h2>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-3">
            {valores.map((v, i) => (
              <div key={i} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
