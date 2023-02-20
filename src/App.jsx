import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import CheckAccount from "./pages/public/CheckAccount";
import CheckPassword from "./pages/public/CheckPassword";
import Error404 from "./pages/public/Error404";
import ForgosPassword from "./pages/public/ForgotPassword";
import Index from "./pages/public/Index";
import { LandingPage } from "./pages/public/LandingPage";
import LogIn from "./pages/public/Login";
import ConsultaPage from "./pages/public/private/ConsultaPage";
import Consulta from "./pages/public/private/ConsultaPage";
import Dashboard from "./pages/public/private/Dashboard";
import ListadoAvisoFuga from "./pages/public/private/ListadoAvisoFuga";
import ListadoPpciem from "./pages/public/private/ListadoPpciem";
import SignIn from "./pages/public/SignIn";

function App() {
  return (
    <BrowserRouter>
      {/* Rutas publicas */}
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="index" element={<Index />} />
          <Route path="login" element={<LogIn />} />
          <Route path="registro" element={<SignIn />} />
          <Route path="check-account/:id" element={<CheckAccount />} />
          <Route path="forgot-password" element={<ForgosPassword />} />
          <Route path="forgot-password/:token" element={<CheckPassword />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* Rutas privadas */}
        <Route path="/dash" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="consulta" element={<ConsultaPage />} />
        </Route>
        <Route path="/listas">
          <Route path="aviso-fuga" element={<ListadoAvisoFuga />} />
          <Route path="ppciem" element={<ListadoPpciem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
