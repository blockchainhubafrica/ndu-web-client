let ipfsApi = require("ipfs-api");
let ipfsMini = require("ipfs-mini");

const config = {
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
};

ipfsMini = new ipfsMini(config);
ipfsApi = new ipfsApi(config);

export { ipfsApi, ipfsMini };
