import AreaDetailPage from "@/components/AreaDetailPage";

export const metadata = {
  title: "Diritto Penale - Studio Legale Amaranto",
  description:
    "Difesa tecnica in procedimenti penali ordinari e militari. Tutela delle garanzie dell'imputato e della persona offesa.",
};

export default function CriminalLawPage() {
  return <AreaDetailPage areaKey="criminal" />;
}
