
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Event from "./pages/eventPages/Event";
import EventDetail from "./pages/eventPages/EventDetail";
import Konsultasi from "./pages/konsulPages/Konsultasi";
import FormKonsul from "./pages/konsulPages/FormKonsul";
import Layanan from "./pages/Layanan";
import PetunjukPenggunaan from "./pages/petunjukPenggunaan";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import UploadEvent from "./components/uploadBuktiPembayaran/UploadEvent"
import ProtectedRoute from "./protectedroute/ProtectedRoute";
import AuthState from "./context/auth/authState";
import UploadKonsul from "./components/uploadBuktiPembayaran/uploadKonsul";



function App() {

  
  return (
    <BrowserRouter>
      <AuthState>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="/" element={<Beranda />} />
          <Route path="event" element={<Event />} />
          <Route path="event/:id" element={<EventDetail />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="konsultasi" element={<Konsultasi />} />
          <Route path="formkonsul" element={<FormKonsul />} />
          <Route path="petunjukpenggunaan" element={<PetunjukPenggunaan />} />
          <Route path="team" element={<Team />} />
          <Route path="faq" element={<Faq />} />
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="uploadevent/:id" element={<UploadEvent />} />
            <Route path="uploadkonsul/:id" element={<UploadKonsul />} />
          </Route>
        </Routes>
        <Footer />
      </AuthState>
    </BrowserRouter>
  );
}

export default App;
