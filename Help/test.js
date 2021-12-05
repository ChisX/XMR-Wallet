const AtomsPerXMR = 10**12
const Wallet = require('monero-rpc').Wallet
const wallet = new Wallet('http://127.0.0.1:18082')

wallet.getRandomIntegratedAddress((err, result) => {
  if (!err) return console.log('Your Monero Wallet is Ready.')
})