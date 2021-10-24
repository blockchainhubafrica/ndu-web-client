import AppRouter from "./appRouter";
import { WalletProvider } from "./contexts/walletContext";

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
