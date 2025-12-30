import AreaDetailPage from "@/components/AreaDetailPage";

export const metadata = {
  title: "Diritto Condominiale - Studio Legale Amaranto",
  description:
    "Gestione controversie condominiali, impugnazione delibere assembleari, difesa dei diritti dei condomini.",
};

export default function CondoLawPage() {
  return <AreaDetailPage areaKey="condo" />;
}
