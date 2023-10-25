import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage_31 from "./pages/HomePage_31";
import BlogStaticPage_31 from "./pages/BlogStaticPage_31";
import BlogNodeServer_31 from "./pages/BlogNodeServer_31";
import BlogSupabase_31  from "./pages/BlogSupabase_31";

const App_31 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_31 />} />
        <Route path='/supa_31' element={<BlogSupabase_31 />} />
        <Route path='/static_31' element={<BlogStaticPage_31 />} />
        <Route path='/node_31'  element={<BlogNodeServer_31 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_31;
