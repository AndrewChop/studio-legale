import { getChiSiamo } from "../lib/api";

export default async function ChiSiamoPage() {
  const content = await getChiSiamo();
  return (
    <div className="prose mx-auto p-4">
      <h1>Chi Siamo</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
