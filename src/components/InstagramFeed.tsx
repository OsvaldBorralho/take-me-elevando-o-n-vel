import { Instagram, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM_URL = "https://www.instagram.com/takeme_app/";
const INSTAGRAM_WIDGET_IFRAME_SRC = "//lightwidget.com/widgets/bacb424749a65b3bbd83bfa32122c580.html";

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

        <div className="max-w-4xl mx-auto mb-8">
          {INSTAGRAM_WIDGET_IFRAME_SRC ? (
            <iframe
              src={INSTAGRAM_WIDGET_IFRAME_SRC}
              title="Instagram @takeme_app"
              scrolling="no"
              allowTransparency={true}
              className="lightwidget-widget w-full border-0 overflow-hidden rounded-lg"
              style={{ width: "100%" }}
              loading="lazy"
            />
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <AlertCircle className="w-10 h-10 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                Feed do Instagram não configurado
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Para exibir os posts, configure a variável de ambiente{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
                  VITE_INSTAGRAM_WIDGET_IFRAME_SRC
                </code>{" "}
                com a URL do iframe gerada no{" "}
                <a
                  href="https://lightwidget.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  LightWidget
                </a>
                .
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <Instagram className="w-5 h-5" />
              Ver no Instagram (@takeme_app)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
