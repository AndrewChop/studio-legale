"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"

type Article = {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  createdAt: Date
  updatedAt: Date
}

// Mock data - da sostituire con API reale
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Come affrontare un processo penale",
    slug: "come-affrontare-un-processo-penale",
    summary: "Guida pratica per difendersi in un processo penale.",
    content: "Contenuto completo dell'articolo...",
    createdAt: new Date("2023-10-01"),
    updatedAt: new Date("2023-10-01"),
  },
  {
    id: "2", 
    title: "Diritti dei militari in servizio",
    slug: "diritti-dei-militari-in-servizio",
    summary: "Tutela dei diritti del personale militare e ricorsi.",
    content: "Contenuto completo dell'articolo...",
    createdAt: new Date("2023-09-15"),
    updatedAt: new Date("2023-09-15"),
  },
]

export default function AdminArticoliPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>(mockArticles)

  useEffect(() => {
    if (status === "loading") return
    
    if (!session || session.user?.role !== "admin") {
      router.push("/login")
      return
    }
  }, [session, status, router])

  const handleDelete = (id: string) => {
    if (confirm("Sei sicuro di voler eliminare questo articolo?")) {
      setArticles(articles.filter(article => article.id !== id))
    }
  }

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Caricamento...</div>
  }

  if (!session || session.user?.role !== "admin") {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 ml-4">
                Gestione Articoli
              </h1>
            </div>
            <Link href="/admin/articoli/nuovo">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nuovo Articolo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          
          {/* Articles List */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {articles.map((article) => (
                <li key={article.id}>
                  <div className="px-4 py-4 flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {article.title}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Pubblicato
                          </p>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {article.summary}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Creato il {article.createdAt.toLocaleDateString("it-IT")}
                      </p>
                    </div>
                    <div className="ml-4 flex items-center space-x-2">
                      <Link href={`/admin/articoli/${article.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDelete(article.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nessun articolo trovato.</p>
              <Link href="/admin/articoli/nuovo">
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Crea il primo articolo
                </Button>
              </Link>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}