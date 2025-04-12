import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/homepage/Home";
import Navbar from "./components/ui/Navbar";
import Login from "./components/auth/Login";
import ProfileSetup from "./components/profile/ProfileSetup";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/Forgot-Password";
import Feed from "./components/feed/Feed";
import OTP from "./components/auth/OTP";
import { ThemeProvider } from "./context/ThemeCOntext";
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/ui/Footer";
import Contact from "./components/ui/Contact";
import { useAuthContext } from "./hooks/useAuthContext";
import VerifiedPage from "./components/auth/VerifiedPage";
import Offer from "./components/offer request/Offer-request";
import MarketPlace from "./components/market place/MarketPlace";
import Hiring from "./components/hiring/Hired";
import Not_Found from "./components/not found/Not_Found";
import HelpRequest from "./components/help request/HelpRequest";
import CallNow from "./components/offer request/CallNow";
import MailNow from "./components/offer request/MailNow";
import ServiceP from "./components/services provider/ServiceP";
import SubmitOffer from "./components/offer request/SubmitOffer";
import Component from "./components/MPTest/Card";


function App() {
  const { state } = useAuthContext();
  const isProfileComplete = state.user && state.user.isProfileComplete;

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={state.user ? (isProfileComplete ? <Navigate to="/feeds" /> : <Navigate to="/profile" />) : <Home />} />
          <Route path="/login" element={!state.user ? <Login /> : <Navigate to="/feeds" />} />
          <Route path="/register" element={!state.user ? <Register /> : <Navigate to="/feeds" />} />
          <Route path="/profile" element={state.user && !isProfileComplete ? <ProfileSetup /> : <Navigate to="/" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp/:userId" element={<OTP />} />
          <Route path="/verify-email/:userId" element={<VerifiedPage />} />
          <Route path="/feeds" element={<Feed /> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer-support" element={<Offer />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/hiring" element= {<Hiring/>} />
          <Route path="/services" element={<ServiceP/>} />
          <Route path="/help-request" element={<HelpRequest />} />
          <Route path="/page-not-found" element={<Not_Found />} />
          <Route path="/offer-support/call-now" element={<CallNow />} />
          <Route path="/offer-support/mail-now" element={<MailNow />} />
          <Route path="/offer-support/submit-offer" element={<SubmitOffer />} />
          <Route path="/card" element={<Component />} />
        </Routes>
      </ThemeProvider>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;