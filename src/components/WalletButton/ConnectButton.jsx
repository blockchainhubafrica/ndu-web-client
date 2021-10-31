import { NormalButton } from "../NormalButton";
import { WalletIcon } from "../../assets";
import styles from "./connect-button.module.css";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

function ConnectButton() {
  const history = useHistory();
  const loading = false;
  const { handleWalletConnect, hasMetaMask } = useUserContext();

  async function connect() {
    const connectionStatus = await handleWalletConnect();
    if (!connectionStatus) return;
    history.push("/dashboard/user");
  }

  return (
    <div>
      {!hasMetaMask && (
        <div className="">
          <a
            rel="noreferrer"
            referrerPolicy="no-referrer"
            target="_blank"
            href="https://metamask.io/download"
          >
            <NormalButton bg="#022655" buttonText="Get Meta mask" />
          </a>
        </div>
      )}
      {hasMetaMask && (
        <NormalButton bg="#022655" onClick={connect} disabled={loading}>
          <span className="hidden md:block">Connect Wallet</span>
          <WalletIcon className={`${styles["wallet-icon"]} md:hidden`} />
        </NormalButton>
      )}
    </div>
  );
}

export { ConnectButton };
