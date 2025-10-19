import AreeAttivita from "../components/Areas";
import ContattiCTA from "../components/Contacts";
import Hero from "../components/Hero";
import ArticoliRecenti from "../components/last-articles";
import ChiSiamoPreview from "../components/Presentation";

const mockPosts = [
  {
    id: "1",
    title: "Come affrontare un processo penale",
    slug: "come-affrontare-un-processo-penale",
    summary: "Guida pratica per difendersi in un processo penale.",
    createdAt: new Date("2023-10-01"),
  },
  {
    id: "2",
    title: "Diritti dei militari in servizio",
    slug: "diritti-dei-militari-in-servizio",
    summary: "Tutela dei diritti del personale militare e ricorsi.",
    createdAt: new Date("2023-09-15"),
  },
  {
    id: "3",
    title: "Separazioni e divorzi: cosa sapere",
    slug: "separazioni-e-divorzi-cosa-sapere",
    summary: "Informazioni utili su separazioni e divorzi.",
    createdAt: new Date("2023-08-20"),
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <AreeAttivita />
      <ChiSiamoPreview />
      <ArticoliRecenti posts={mockPosts} />
      <ContattiCTA />
    </>
  );
}
