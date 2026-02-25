import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM_URL = "https://instagram.com/takeme.app";

const InstagramFeed = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Acompanhe a Take-me
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Novidades, bastidores e atualizações da operação.
          </p>
        </div>

        {/* Widget placeholder / embed area */}
        <div className="max-w-4xl mx-auto mb-8">
          {/* 
            CONFIGURAÇÃO DO WIDGET INSTAGRAM:
            Cole aqui o código embed do Elfsight, SnapWidget ou LightWidget.
            Exemplo Elfsight: <div class="elfsight-app-XXXXXXXX" data-elfsight-app-lazy></div>
          */}
          <div id="instagram-widget" className="grid grid-cols-3 md:grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-muted/60 flex items-center justify-center group hover:bg-muted transition-colors cursor-pointer"
              >
                <Instagram className="w-6 h-6 text-muted-foreground/40 group-hover:text-accent transition-colors" />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/60 mt-3">
            Posts serão carregados automaticamente após configurar o widget.
          </p>
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <Instagram className="w-5 h-5" />
              Ver no Instagram (@takeme.app)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
