import AppRouter from "./appRouter";
import { WalletProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <AppRouter />
      </WalletProvider>
    </div>
  );
}

export default App;
