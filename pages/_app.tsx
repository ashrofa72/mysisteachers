import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer3 from "../components/Footer3";
import adspage from "../pages/adspage";
import Navstrap2 from "../components/Navbar2";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";


const noAuthRequired = ["/login", "/signup"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Navstrap2 />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
          <Footer3/>
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
