import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./appRouter";
import { Loader, Toast } from "./components";
import { LoadingProvider } from "./contexts/loadingContext";
import { PharmacyProvider } from "./contexts/pharmacyContext";
import { ToastProvider } from "./contexts/toastContext";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="App">
      <Router basename={"/"}>
        <LoadingProvider>
          <ToastProvider>
            <PharmacyProvider>
              <UserProvider>
                <Loader />
                <Toast />
                <AppRouter />
              </UserProvider>
            </PharmacyProvider>
          </ToastProvider>
        </LoadingProvider>
      </Router>
    </div>
  );
}

export default App;
