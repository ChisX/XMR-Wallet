const wallet_area   = document.getElementById('wallet_area');

$('#wallet_area')[0].style.display = 'block';
$(`.fg-xmr input`)[0].checked = "true";
$('#foretag')[0].innerText = `Arcane's Monero Wallet`;
Array.from(document.getElementsByClassName(`fg-xmr`)).forEach(fg => { fg.style.display = 'block'; });

$('#alert-msg')[0].addEventListener('click',(alert) => { alert.target.parentElement.style.display = 'none'; })

// Create New Wallet button click
$('#import-wallet').css("display","none");

$("#create-wallet").click(function() {
  $("#old-wallet").hide();
  $("#new-wallet").show();
  $('#output-area').html(generateWalletUI());
  monero.getXMRAddress().then(address => { document.getElementById('xmr-address').innerHTML = `<span>Address</span>: ${address}`; });
  updateXmrBalance();
})

async function sendXMR() {
  const InpNumb = document.getElementById('xmrAmountSent');
  const InpAddr = document.getElementById('xmrAddressSent');
  const Numb = await parseFloat(InpNumb.value);
  const Addr = await InpAddr.value;
  monero.sendXMR(Addr,Numb).then(txData => displayAlert('success','Transaction Succeeded ['+`${txData.txhash}`+']')).catch((err) => displayAlert('danger',err));
}

var IntAddressArea = document.getElementById('IntAddress');
async function makeIntAddress() {
  monero.makeIntegratedAddress().then(output => {
    IntAddressArea.innerText = `PaymentID: ${output.paymentID}\nIntegrated Address: ${output.intAddress}`;
  })
}

//==============================
// Helper Functions
//==============================

function displayAlert(type, msg) {
  var alert = `
    <div class='alert alert-dismissible alert-${type}'>
      <p>${msg}</p>
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    </div>
  `;
  $('#alert-msg').append(alert);
}

function generateWalletUI() {
  var html = `
    <h5 id='xmr-balance'><u>Balance</u>: 0</h5>
    <h5 id='xmr-address'></h5>
    <h5><u>Send Transaction</u></h5>
    <form id='tx-form'>
      <div class='form-group'>
        <input type='number' min='0' step='any' name='xmr' placeholder='Amount in XMR' class='form-control' id='xmrAmountSent'>
        <input type='text' name='addr' placeholder='Recipient Address' class='form-control' id='xmrAddressSent'>
      </div>
      <button type='button' class='btn btn-warning' onclick='sendXMR()'>Send Monero</button>
    </form>
  `;
  return html;
}

function updateXmrBalance() {
  monero.getXMRBalance().then((balance) => { $('#xmr-balance').html("<u>Balance</u>: " + balance + " XMR"); })
}