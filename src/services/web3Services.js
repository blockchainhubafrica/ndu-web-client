export const connectToMetaMask = async (setLoading, setError) => {
  try {
    if (!hasEthereum()) return;

    if (setLoading) setLoading(true);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    if (setLoading) setLoading(false);
    return true;
  } catch (error) {
    console.log(error);
    if (setError) setError(error.message ?? error.toString());
    return { error };
  }
};

export async function getActiveWallet() {
  const ethTarget = { ...window.ethereum };
  if (!ethTarget.selectedAddress) return null;
  const address = ethTarget.selectedAddress;
  return address;
}

export async function hasEthereum() {
  return window.ethereum ? true : false;
}

export function listenToAccountChanges(handler) {
  window.ethereum.on("accountsChanged", async (accounts) => {
    handler(accounts[0]);
  });
}


export async function unmountEthListeners() {
  window.ethereum.removeListener("accountsChanged", () => {});
}

