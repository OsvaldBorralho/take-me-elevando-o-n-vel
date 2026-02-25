import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Armchair, Wifi, Shield, LayoutList, Package, Users, ArrowRight, MessageCircle, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import InstagramFeed from "@/components/InstagramFeed";
import useSEO from "@/hooks/useSEO";
import heroImage from "@/assets/hero-takeme.jpg";

const WHATSAPP_URL = "https://wa.me/559830238383?text=Olá! Gostaria de saber mais sobre a Take-me.";
const WHATSAPP_ENCOMENDA = "https://wa.me/559830238383?text=Olá! Gostaria de enviar uma encomenda.";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const diferenciais = [
  { icon: Zap, title: "Frota elétrica BYD", desc: "Viagem mais silenciosa, eficiente e sustentável." },
  { icon: Armchair, title: "Conforto superior", desc: "Padrão de experiência pensado para o intermunicipal." },
  { icon: Wifi, title: "Internet a bordo", desc: "Conectividade para o seu dia render mais." },
  { icon: Shield, title: "Segurança", desc: "Operação estruturada e suporte para uma viagem tranquila." },
  { icon: LayoutList, title: "Organização", desc: "Mais padrão, menos improviso." },
  { icon: Package, title: "Encomendas porta a porta", desc: "Solução prática para moradores e empresas." },
];

const faqItems = [
  { q: "A Take-me é mais cara que o transporte tradicional?", a: "A Take-me disputa por valor. Nosso foco é entregar conforto, conectividade e uma experiência organizada — o custo acompanha o padrão." },
  { q: "Qual é a rota atendida?", a: "Começamos na rota Viana ⇄ São Luís (MA)." },
  { q: "Quais serviços vocês oferecem?", a: "Transporte de passageiros e encomendas/pequenas cargas porta a porta." },
  { q: "Como funciona o atendimento?", a: "Você fala com a Take-me pelo WhatsApp e nós organizamos a melhor opção para sua necessidade." },
  { q: "Carro elétrico é confiável para essa rota?", a: "Sim. Operamos com planejamento e foco em consistência e qualidade da experiência." },
  { q: "Tem internet durante o trajeto?", a: "Conectividade faz parte do padrão de experiência da Take-me." },
  { q: "Como funcionam as encomendas?", a: "Você solicita o envio e a Take-me organiza a movimentação porta a porta de pequenas encomendas." },
  { q: "O que pode ser enviado como encomenda?", a: "Pequenas cargas e itens compatíveis com transporte seguro e adequado. Em caso de dúvida, fale com a Take-me." },
  { q: "E se não houver disponibilidade?", a: "Em alguns cenários, existe alternativa com táxis para manter a continuidade do atendimento." },
  { q: "Como falar com vocês?", a: "WhatsApp, e-mail e Instagram." },
];

const Index = () => {
  useSEO({
    title: "Take-me | Mobilidade com conforto e conectividade (Viana ⇄ São Luís)",
    description: "Transporte de passageiros e encomendas com frota elétrica, conforto, internet a bordo e experiência organizada na rota Viana ⇄ São Luís.",
  });

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Veículo elétrico BYD na estrada" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay)/0.85)] via-[hsl(var(--hero-overlay)/0.7)] to-[hsl(var(--hero-overlay)/0.9)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              A estrada é a mesma.{" "}
              <span className="text-gradient">O que muda é o nível.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Conforto, conectividade e organização na rota Viana ⇄ São Luís — com frota elétrica e experiência segura.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/servicos" className="gap-2">
                  Ver serviços
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-6 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-accent" /> Frota elétrica BYD</span>
              <span className="flex items-center gap-1.5"><Wifi className="w-4 h-4 text-accent" /> Internet a bordo</span>
              <span className="flex items-center gap-1.5"><Package className="w-4 h-4 text-accent" /> Pessoas e encomendas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O QUE É A TAKE-ME */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Mobilidade regional, do jeito que deveria ser.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A Take-me nasce para elevar o padrão do deslocamento entre Viana e São Luís. Saímos do improviso e trazemos uma experiência moderna: mais conforto, mais previsibilidade, mais segurança e mais eficiência no seu tempo — para quem viaja e para quem precisa enviar encomendas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROPOSTA DE VALOR */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
              Mais do que transporte: uma experiência organizada.
            </h2>
            <div className="space-y-4">
              {[
                "Conforto de verdade para uma rota que você já faz (só que melhor).",
                "Conectividade para trabalhar, estudar ou relaxar durante o trajeto.",
                "Organização e previsibilidade, com padrão de atendimento.",
                "Segurança e tranquilidade, com operação estruturada.",
                "Sustentabilidade real, com frota elétrica e viagem silenciosa.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Diferenciais Take-me
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {diferenciais.map((d, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <d.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS (2 cards) */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
            Nossos serviços
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Viagens para passageiros</h3>
              <p className="text-muted-foreground mb-6 flex-1">Conforto, conectividade e uma experiência organizada na rota Viana ⇄ São Luís.</p>
              <Button variant="hero" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-8 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Encomendas e pequenas cargas</h3>
              <p className="text-muted-foreground mb-6 flex-1">Envio prático e ágil, com solução porta a porta para o dia a dia.</p>
              <Button variant="hero" asChild>
                <a href={WHATSAPP_ENCOMENDA} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Package className="w-4 h-4" /> Enviar uma encomenda
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Como funciona
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", text: "Você chama a Take-me pelo WhatsApp." },
              { step: "2", text: "A Take-me organiza a melhor opção (passageiro ou encomenda)." },
              { step: "3", text: "Você segue com tranquilidade, com mais conforto e padrão." },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <p className="text-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROTA INICIAL */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Começamos onde existe demanda real
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              A rota Viana ⇄ São Luís movimenta trabalho, saúde, estudo, compras e logística. A Take-me entra para transformar esse deslocamento em uma experiência mais eficiente — para pessoas e empresas.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Mais tranquilidade do início ao fim
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Segurança não é promessa vaga — é processo e padrão. A Take-me opera com foco em atendimento estruturado, suporte e uma experiência mais confiável no dia a dia.
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Padrão de atendimento</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Operação organizada</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Suporte</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <InstagramFeed />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
            Perguntas frequentes
          </motion.h2>
          <motion.div {...fadeUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-5">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Pronto para viajar com mais nível?
          </h2>
          <p className="text-accent-foreground/80 mb-8">
            Fale com a Take-me e descubra a diferença.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
