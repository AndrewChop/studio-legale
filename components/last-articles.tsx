"use client";

// app/components/ArticoliRecenti.tsx
import Link from "next/link";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { useArticlesTranslations } from "../contexts/TranslationContext";

type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  createdAt: Date;
};

export default function ArticoliRecenti({ posts }: { posts: Post[] }) {
  const { t } = useArticlesTranslations();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-10 lg:mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-4 md:p-5 lg:p-6 rounded shadow-sm border hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                <Link
                  href={`/articoli/${post.slug}`}
                  className="hover:underline hover:text-amber-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                {format(new Date(post.createdAt), "d MMMM yyyy", {
                  locale: it,
                })}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3">
                {post.summary}
              </p>
              <Link
                href={`/articoli/${post.slug}`}
                className="text-sm md:text-base text-gray-700 hover:text-amber-600 hover:underline transition-colors font-medium"
              >
                {t.readMore}
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10 lg:mt-12">
          <Link
            href="/articoli"
            className="text-sm md:text-base text-gray-700 underline hover:text-amber-600 transition-colors font-medium"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
