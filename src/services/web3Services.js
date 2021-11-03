import { ethers } from "ethers";
import { NduAbi, RegisterAbi, NduTokenAbi } from "../contract/abis";
import {
  nduBaseContractAddress,
  registrationContractAddress,
  nduTokenContractAddress,
  ipfsBaseUrl,
} from "../utils";

export const connectToMetaMask = async (setError) => {
  try {
    if (!hasEthereum()) return false;

    await window.ethereum.request({ method: "eth_requestAccounts" });

    return true;
  } catch (error) {
    console.log(error);
    if (setError) setError(error.message ?? error.toString());
    return { error };
  }
};

export function getActiveWallet() {
  if (!hasEthereum()) return false;
  const ethTarget = { ...window.ethereum };
  if (!ethTarget.selectedAddress) return null;
  const address = ethTarget.selectedAddress;
  return address;
}

export function hasEthereum() {
  return window.ethereum ? true : false;
}

export function listenToAccountChanges(handler) {
  if (!hasEthereum()) return false;

  window.ethereum.on("accountsChanged", async (accounts) => {
    handler(accounts[0]);
  });
}

export async function unmountEthListeners() {
  window.ethereum.removeListener("accountsChanged", () => {});
  window.ethereum.removeListener("message", () => {});
}

export async function getRegisterContract(signer) {
  if (!hasEthereum()) return false;

  return new ethers.Contract(
    registrationContractAddress,
    RegisterAbi.abi,
    signer
  );
}

export async function getNduTokenContract(signer) {
  if (!hasEthereum()) return false;

  return new ethers.Contract(nduTokenContractAddress, NduTokenAbi.abi, signer);
}

export async function getNduBaseContract(signer) {
  if (!hasEthereum()) return false;

  return new ethers.Contract(nduBaseContractAddress, NduAbi.abi, signer);
}

export async function getCompanyDetails() {
  try {
    if (!hasEthereum()) return false;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const registrationContract = await getRegisterContract(signer);
    const address = getActiveWallet();

    const hasPharmacy = await registrationContract.registered(address);
    if (!hasPharmacy) return null;

    let pharmacyId = (await registrationContract.companyId(address)).toString();

    const nduBaseContract = await getNduBaseContract(signer);

    const company = await nduBaseContract.companyId(pharmacyId);

    return {
      id: pharmacyId,
      name: company.Name,
      isoNumber: company.ISOnumber,
      ipfsHash: company.ipfsHashOfCompanyDetails,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function userHasPharmacy() {
  try {
    if (!hasEthereum()) return false;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const registrationContract = await getRegisterContract(signer);
    const address = getActiveWallet();

    const hasPharmacy = await registrationContract.registered(address);
    if (!hasPharmacy) return null;
    return true;
  } catch (error) {
    console.log(error);
  }
}

export async function registerPharmacy(
  details,
  loading,
  raiseError,
  onRegistered
) {
  if (!hasEthereum()) return false;
  loading(true);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const registrationContract = await getRegisterContract(signer);

    const nduTokenContract = await getNduTokenContract(signer);

    await nduTokenContract.approve(registrationContract.address, "100");

    await registrationContract.registerCompany(
      details.id,
      details.name,
      details.isoNumber,
      details.ipfsHash
    );

    await registrationContract.on("companyRegister", () => {
      onRegistered();
      loading(false);
    });
  } catch (error) {
    loading(false);
    raiseError("Something went wrong, Please Try Again.");
    console.log(error);
  }
}

export async function getDrugInventory() {
  if (!hasEthereum()) return false;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const RegistrationContract = await getRegisterContract(signer);

    const drugHashes = await RegistrationContract.getAllHashesRegistered();
    // console.log(drugHashes)
    const promises = drugHashes.map((hash) =>
      fetch(`${ipfsBaseUrl}/${hash}`).then((data) => data.json())
    );
    const resultofPromises = await Promise.allSettled(promises);

    const retrievedDrugs = [];

    resultofPromises.forEach((drug) => {
      if (drug.status === "fulfilled" && drug.value !== "")
        retrievedDrugs.push(drug.value);
    });
    // console.log(retrievedDrugs)
    return retrievedDrugs;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllDrugSerials(hash) {
  if (!hasEthereum()) return false;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const RegistrationContract = await getRegisterContract(signer);

    const serials = await RegistrationContract.getAllSerials(hash);
    console.log(serials);

    return serials;
  } catch (error) {
    console.log(error);
  }
}
