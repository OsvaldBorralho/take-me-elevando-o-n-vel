import { useEffect, useState } from "react";
import { Instagram, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const INSTAGRAM_URL = "https://www.instagram.com/takeme.app/";

type InstagramMediaItem = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp?: string;
};

const InstagramFeed = () => {
  const [items, setItems] = useState<InstagramMediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInstagramFeed = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fnError } = await supabase.functions.invoke(
          "instagram-feed"
        );

        if (fnError) {
          throw new Error(fnError.message || "Erro ao carregar Instagram");
        }

        setItems(Array.isArray(data?.data) ? data.data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro inesperado");
      } finally {
        setLoading(false);
      }
    };

    loadInstagramFeed();
  }, []);

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
          {loading ? (
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="font-heading font-semibold text-lg mb-2 text-foreground">
                Não foi possível carregar os posts do Instagram agora.
              </p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : items.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-muted-foreground">
                Nenhum post encontrado no momento.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {items.map((post) => {
                const imageSrc =
                  post.media_type === "VIDEO"
                    ? post.thumbnail_url
                    : post.media_url;

                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square rounded-lg overflow-hidden bg-muted"
                  >
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={post.caption?.slice(0, 80) || "Post do Instagram"}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageOff className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
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
