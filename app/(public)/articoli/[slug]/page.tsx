// app/(public)/articoli/[slug]/page.tsx
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { it } from "date-fns/locale";

type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  createdAt: Date;
  content?: string;
};

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Come affrontare un processo penale",
    slug: "come-affrontare-un-processo-penale",
    summary: "Guida pratica per difendersi in un processo penale.",
    createdAt: new Date("2023-10-01"),
    content:
      "Questo è il contenuto esteso dell’articolo su come affrontare un processo penale. Spiega i diritti, le fasi e le strategie.",
  },
  {
    id: "2",
    title: "Diritti dei militari in servizio",
    slug: "diritti-dei-militari-in-servizio",
    summary: "Tutela dei diritti del personale militare e ricorsi.",
    createdAt: new Date("2023-09-15"),
    content:
      "Questo è il contenuto dettagliato sull'assistenza legale per i militari.",
  },
  {
    id: "3",
    title: "Separazioni e divorzi: cosa sapere",
    slug: "separazioni-e-divorzi-cosa-sapere",
    summary: "Informazioni utili su separazioni e divorzi.",
    createdAt: new Date("2023-08-20"),
    content:
      "Tutto ciò che devi sapere su separazioni, divorzi e gestione legale della famiglia.",
  },
];

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticoloPage({ params }: Params) {
  const { slug } = await params;
  const articolo = mockPosts.find((p) => p.slug === slug);

  if (!articolo) return notFound();

  return (
    <article className="prose prose-lg mx-auto px-4 py-16">
      <h1>{articolo.title}</h1>
      <p className="text-sm text-gray-500">
        Pubblicato il{" "}
        {format(new Date(articolo.createdAt), "d MMMM yyyy", { locale: it })}
      </p>
      <p className="text-gray-800 mt-6">{articolo.content}</p>
    </article>
  );
}