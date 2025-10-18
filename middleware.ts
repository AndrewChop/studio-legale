import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Middleware aggiuntivo se necessario
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Proteggi tutte le route che iniziano con /admin
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return token?.role === "admin"
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/admin/:path*"]
}