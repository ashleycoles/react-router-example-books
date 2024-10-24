import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import BooksPage from "./pages/BooksPage"

function App() {
  return (
    <div>
      <BrowserRouter>

        <Nav />

        {/* We define our 'pages' within Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
         
          {/* This is a dynamic route */}
          <Route path="/books/:id" element={<BooksPage />} />
        </Routes>
        
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App