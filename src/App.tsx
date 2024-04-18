import Home from "./components/pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from "./components/pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter basename="/miron.github.io">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
