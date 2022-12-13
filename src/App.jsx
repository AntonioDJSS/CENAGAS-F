import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import FormularioLayout from "./layout/FormularioLayout";
import Dashboard from "./pages/private/dashboard/Dashboard";
import Historial from "./pages/private/dashboard/Historial";
import EditarPerfil from "./pages/private/gestionUsuario/EditarPerfil";
import GenerateMassiveRecord from "./pages/private/massiveRecord/GenerateMassiveRecords";
import GenerateRecord from "./pages/private/record/GenerateRecord";
import GenerateRecordAnexos from "./pages/private/record/GenerateRecordAnexos";
import GenerateRecordCapacitador from "./pages/private/record/GenerateRecordCapacitador";
import GenerateRecordCurso from "./pages/private/record/GenerateRecordCurso";
import CheckAccount from "./pages/public/CheckAccount";
import CheckPassword from "./pages/public/CheckPassword";
import Error404 from "./pages/public/Error404";
import ForgosPassword from "./pages/public/ForgotPassword";
import { LandingPage } from "./pages/public/LandingPage";
import LogIn from "./pages/public/Login";
import SignIn from "./pages/public/SignIn";

function App() {
  return (
    <BrowserRouter>
      {/* Rutas publicas */}
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/registro" element={<SignIn />} />
          <Route path="/check-account/:id" element={<CheckAccount />} />
          <Route path="/forgot-password" element={<ForgosPassword />} />
          <Route path="/forgot-password/:token" element={<CheckPassword />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* Rutas privadas */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="generar-constancia" element={<FormularioLayout />}>
            <Route index element={<GenerateRecord />} />
            <Route path="02" element={<GenerateRecordCurso />} />
            <Route path="03" element={<GenerateRecordCapacitador />} />
            <Route path="04" element={<GenerateRecordAnexos />} />
          </Route>
          <Route
            path="generar-constancias"
            element={<GenerateMassiveRecord />}
          />
          <Route path="gestor-constancia" element={<Historial />} />
          <Route path="configuracion" element={<EditarPerfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
