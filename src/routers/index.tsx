import { Routes, Route } from "react-router-dom"
import { PageHomes, PageNoticia, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHomes />} />
        <Route path="noticia" element={<PageNoticia />} />
      </Route>
    </Routes>
  )
}