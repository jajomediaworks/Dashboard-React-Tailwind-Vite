import { BrowserRouter, Route, Routes } from "react-router-dom"
// page layout
import LayoutAdmin from "./layouts/LayouthAdmin"
import LayouthAuth from "./layouts/LayouthAuth"

// page auth
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// pages admin
import Error404 from "./pages/Error404"
import Home from "./pages/admin/Home"

function App() {

  return (
      <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<LayouthAuth />}>
                <Route index element={<Login />}></Route>
                <Route path="registro" element={<Register />}></Route>
              </Route>
                <Route path="/" element={<LayoutAdmin />}>
                  <Route index element={<Home />}></Route>
                </Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
      </BrowserRouter>
  )
}

export default App
