import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const Privacy = () => {
  useSEO({
    title: "Política de Privacidade | Take-me",
    description: "Política de privacidade da Take-me — saiba como tratamos seus dados pessoais em conformidade com a LGPD.",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold mb-8">Política de Privacidade</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p><strong>Última atualização:</strong> Fevereiro de 2026</p>
            <p>A Take-me respeita a privacidade de seus usuários e está comprometida com a proteção de dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">1. Dados Coletados</h2>
            <p>Podemos coletar informações como nome, telefone, endereço e dados de pagamento necessários para a prestação dos serviços de transporte e envio de encomendas.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">2. Finalidade do Tratamento</h2>
            <p>Os dados coletados são utilizados exclusivamente para: prestação dos serviços contratados, comunicação com o usuário, melhoria da experiência do serviço e cumprimento de obrigações legais.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">3. Compartilhamento de Dados</h2>
            <p>A Take-me não comercializa dados pessoais. O compartilhamento ocorre apenas quando necessário para a prestação do serviço ou quando exigido por lei.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">4. Armazenamento e Segurança</h2>
            <p>Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra acesso não autorizado, perda ou destruição.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">5. Direitos do Titular</h2>
            <p>Conforme a LGPD, você tem direito a: acessar seus dados, solicitar correção, exclusão, portabilidade e revogar o consentimento. Para exercer seus direitos, entre em contato pelo e-mail atendimento@takeme.app.br.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">6. Cookies</h2>
            <p>Este site pode utilizar cookies para melhorar a experiência de navegação. Você pode configurar seu navegador para recusar cookies.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">7. Alterações</h2>
            <p>Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">8. Contato</h2>
            <p>Para dúvidas sobre esta política, entre em contato pelo e-mail atendimento@takeme.app.br ou WhatsApp (98) 30238-38383.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
