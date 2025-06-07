"use client";
import { Button } from "../../../components/ui/button";
import { getPage, updatePage } from "../../../lib/api";
import { useEffect, useState } from "react";

export default function AdminEditor() {
  const [content, setContent] = useState("");

  useEffect(() => {
    getPage("chi-siamo").then(setContent);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Modifica Chi Siamo</h1>
      <textarea
        className="w-full h-80 border p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={() => updatePage("chi-siamo", content)} className="mt-4">
        Salva
      </Button>
    </div>
  );
}
