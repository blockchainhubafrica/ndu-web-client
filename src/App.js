import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./appRouter";
import { Loader, Toast } from "./components";
import { LoadingProvider } from "./contexts/loadingContext";
import { ToastProvider } from "./contexts/toastContext";
import { WalletProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="App">
      <Router basename={"/"}>
        <LoadingProvider>
          <WalletProvider>
            <ToastProvider>
              <Loader />
              <Toast />
              <AppRouter />
            </ToastProvider>
          </WalletProvider>
        </LoadingProvider>
      </Router>
    </div>
  );
}

export default App;
