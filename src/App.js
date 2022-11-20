import { Link, Route, Routes } from "react-router-dom";
import Navbar           from "./components/Navbar";
import Home             from "./pages/Home";
import About            from "./pages/About";
import Contact          from "./pages/Contact";
import NotFound         from "./pages/NotFound";
import G2021            from "./pages/gallery/G2021";
import NewsRoutes       from "./NewsRoutes";
import DocumentWritter  from "./pages/DocumentWritter";
import Certificate      from "./pages/Certificate";

// Curation
import Curation1        from "./pages/Curation1";
import Curation3        from "./pages/crtn/Curation3";
import Curation3_1      from "./pages/crtn/Curation3_1";
import Curation4        from "./pages/crtn/Curation4";
import Curation11       from "./pages/crtn/Curation11";
import Curation16       from "./pages/crtn/Curation16";
// EndCuration

// News
import News1 from "./pages/news/News1";
import News2 from "./pages/news/News2";
import News3 from "./pages/news/News3";
import News4 from "./pages/news/News4";
import News5 from "./pages/news/News5";
// End News
function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Curation */}
            <Route path="/curation1" element={<Curation1 />} />
            <Route path="/curation3" element={<Curation3 />} />
            <Route path="/curation3_1" element={<Curation3_1 />}  />
            <Route path="/curation4" element={<Curation4 />}  />
            <Route path="/curation11" element={<Curation11 />}  />
            <Route path="/curation16" element={<Curation16 />}  />
          {/* End Curation */}

          {/* News */}
            <Route path="/news1" element={<News1 />} />
            <Route path="/news2" element={<News2 />} />
            <Route path="/news3" element={<News3 />} />
            <Route path="/news4" element={<News4 />} />
            <Route path="/news5" element={<News5 />} />
          {/* End News */}
          
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/document_writter" element={<DocumentWritter />} />
          <Route path="/G2021" element={<G2021 />} />
          <Route path="/newslist/*" element={<NewsRoutes />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App