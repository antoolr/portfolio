import { useLayoutEffect } from "react"
import type { CSSProperties } from "react"
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Dashboard from "./pages/admin/page"
import CursosAdminPage from "./pages/admin/CursosAdmin"
import CursosPublicPage from "./pages/cursos/CursosAdmin"
import { AppSidebar } from "./Components/app-sidebar"
import { SiteHeader } from "./Components/site-header"
import { SidebarProvider, SidebarInset } from "./Components/ui/sidebar"

// IMPORTANTE: provider de shadcn
import { TooltipProvider } from "@/Components/ui/tooltip"

function AdminLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}

function ScrollToHash() {
  const location = useLocation()

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const id = location.hash.replace("#", "")
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [location])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/cursos" element={<CursosPublicPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="cursos" element={<CursosAdminPage />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  )
}

export default App
