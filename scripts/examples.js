const AtomsPerXMR = 10**12;

/*
const Daemon = require('monero-rpc').Daemon
const daemon = new Daemon('http://node.grandbank.is:18089')

daemon.getLastBlockHeight((err, height) => {
    if (err) return console.log(err)
    console.log(height)
})

daemon.getLastBlockHeader((err, header) => {
  if (err) return console.log(err)
  console.log(header);
})

daemon.getBlock('8c4e6a28ceb84cd611f4b150e875732332dd5a1480ca1f3f2a0e155cc1049aeb', (err, block) => {
  if (err) return console.log(err)
  console.log(block)
})

daemon.getInfo((err, info) => {
  if (err) return console.log(err)
  console.log(info)
})
*/

const Wallet = require('monero-rpc').Wallet;
const wallet = new Wallet('http://127.0.0.1:18082');

/*
wallet.getAddress((err, address) => {
  if (err) return console.log(err)
  console.log(address)
})

wallet.getBalance((err, balance) => {
  if (err) return console.log(err)
  console.log(balance.total)
})

wallet.transfer({
  destinations: [
    { address: '(Enter Address Here)', amount: 10000000 }
  ],
  mixin: 7,
  priority: 0
}, (err, result) => {
  if (err) return console.log(err)
  console.log(`Transaction Fee: ${result.fee/AtomsPerXMR} XMR.`);
  console.log(`Transaction ID:  ${result.tx_hash}.`);
})
*/

wallet.getRandomIntegratedAddress((err, result) => {
  if (err) return console.log(err);
  console.log(`Payment ID: ${result.paymentId}.`);
  console.log(`Integrated Address: ${result.address}.`);
})