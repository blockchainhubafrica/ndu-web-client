import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRouter from "./appRouter";
import { Loader } from "./components";
import { SuccessToast } from "./components/Toasts/success";
import { LoadingProvider } from "./contexts/loadingContext";
import { WalletProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="App">
      <Router basename={"/"}>
        <LoadingProvider>
          <WalletProvider>
            <Loader />
            <SuccessToast message={`Chidi was successfully registered`} />
            <ToastContainer position="top-center" autoClose={3000} />
            <AppRouter />
          </WalletProvider>
        </LoadingProvider>
      </Router>
    </div>
  );
}

export default App;
