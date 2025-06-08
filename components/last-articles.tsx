// app/components/ArticoliRecenti.tsx
import Link from "next/link";
import { format } from "date-fns";
import { it } from "date-fns/locale";

type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  createdAt: Date;
};

export default function ArticoliRecenti({ posts }: { posts: Post[] }) {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Ultimi Articoli
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href={`/articoli/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {format(new Date(post.createdAt), "d MMMM yyyy", { locale: it })}
              </p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.summary}</p>
              <Link
                href={`/articoli/${post.slug}`}
                className="text-sm text-gray-700 hover:underline"
              >
                Leggi tutto →
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/articoli" className="text-sm text-gray-700 underline hover:text-gray-500">
            Vai a tutti gli articoli →
          </Link>
        </div>
      </div>
    </section>
  );
}