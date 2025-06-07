export async function getChiSiamo() {
  // Simulazione contenuto statico
  return "<p>Siamo uno studio legale con esperienza pluriennale...</p>";
}

export async function getPage(page: string) {
  return "<p>Contenuto dinamico per " + page + "</p>";
}

export async function updatePage(page: string, content: string) {
  console.log("Update", page, content);
}
