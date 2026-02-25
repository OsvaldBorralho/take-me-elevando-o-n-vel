import Layout from "@/components/Layout";
import useSEO from "@/hooks/useSEO";

const Terms = () => {
  useSEO({
    title: "Termos de Uso | Take-me",
    description: "Termos de uso da Take-me — mobilidade intermunicipal na rota Viana ⇄ São Luís.",
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold mb-8">Termos de Uso</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p><strong>Última atualização:</strong> Fevereiro de 2026</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p>Ao utilizar os serviços da Take-me, você concorda com os termos e condições descritos neste documento. A utilização de qualquer serviço implica aceitação integral destes termos.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">2. Descrição dos Serviços</h2>
            <p>A Take-me oferece serviços de transporte intermunicipal de passageiros e envio de pequenas encomendas porta a porta na rota Viana ⇄ São Luís (MA), utilizando frota de veículos elétricos.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">3. Responsabilidades do Usuário</h2>
            <p>O usuário se compromete a fornecer informações verdadeiras ao solicitar serviços, zelar pela integridade dos veículos durante o transporte e respeitar as regras de conduta estabelecidas pela Take-me.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">4. Pagamento</h2>
            <p>Os pagamentos podem ser realizados via Pix, cartão de crédito/débito ou dinheiro. Os valores são informados no momento da solicitação do serviço.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">5. Encomendas</h2>
            <p>A Take-me transporta pequenas cargas e itens compatíveis com transporte seguro. A empresa reserva-se o direito de recusar itens que não atendam aos critérios de segurança.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">6. Limitação de Responsabilidade</h2>
            <p>A Take-me não se responsabiliza por atrasos causados por condições climáticas, trânsito ou outras situações de força maior.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">7. Alterações nos Termos</h2>
            <p>A Take-me pode atualizar estes termos a qualquer momento, sendo o usuário notificado sobre mudanças significativas.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground">8. Contato</h2>
            <p>Para dúvidas sobre estes termos, entre em contato pelo e-mail atendimento@takeme.app.br ou WhatsApp (98) 30238-38383.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
