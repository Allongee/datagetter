require("dotenv").config();
var fs = require('fs');

import {
  Wallet,
  Client,
  Exchange,
  Network,
  utils,
  types,
} from "privatesdkchangezeta";
import { PublicKey, Connection, Keypair } from "@solana/web3.js";

const NETWORK_URL = process.env["network_url"]!;
const PROGRAM_ID = new PublicKey(process.env["program_id"]);

console.log(NETWORK_URL);

//Delay for fetching data
const Delay_Minutes:number=1;

async function main() {
  // Generate a new keypair for wallet otherwise load from a private key.
  const userKey = Keypair.generate();
  const wallet = new Wallet(userKey);

  // Create a solana web3 connection to devnet.
  const connection: Connection = new Connection(NETWORK_URL, "confirmed");



  await Exchange.load(
    PROGRAM_ID,
    Network.DEVNET,
    connection,
    utils.defaultCommitment(),
    // Exchange wallet can be ignored for normal clients.
    undefined,
    // ThrottleMs - increase if you are running into rate limit issues on startup.
    0
  );

  const client = await Client.load(
    connection,
    wallet,
    utils.defaultCommitment(),
    undefined
  );
  //Renames the original Data file if it exists
function renameOldData(){

  let timestamp = Date.now().toString();
  try {
  if (fs.existsSync("GetData.json")) {
  
     fs.renameSync('GetData.json', `Zeta${timestamp}.json`, function(err) {
       if ( err ) console.log('ERROR: ' + err);
      });
    }
  } catch(err) {
  console.error(err)
  }    
}
//Main getData function
    function getData(){
      renameOldData()
      utils.displayState()
      
    }

  // Executes the getData function every Delay_minutes
  setInterval(getData,Delay_Minutes*60*1000)
  //  console.log(utils.getGreeks);
   // console.log(utils.getGreeksIndex);
// Uncomment this when needing the Zeta.json data


/*
  // Save the totality of Zeta JSON file;
  let markets=JSON.stringify(Exchange.markets);
  await fs.writeFileSync("Zeta.json", markets);
*/
}

main().catch(console.error.bind(console));