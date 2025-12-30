import AreaDetailPage from "@/components/AreaDetailPage";

export const metadata = {
  title: "Diritto Civile - Studio Legale Amaranto",
  description:
    "Consulenza specializzata in diritto civile: contratti, responsabilità civile, proprietà, successioni e recupero crediti.",
};

export default function CivilLawPage() {
  return <AreaDetailPage areaKey="civil" />;
}
