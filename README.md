# XMR-Wallet
Stepping off of the original compile monero software, provided as open-source code from the official monero.org website, this project seeks to collect some wallet functions of the monero-rpc client program into a browser-compatible cryptowallet. For that goal, the node-monero-rpc wrapper by Aardvark proved to be of great use.
(https://github.com/ExcitableAardvark/node-monero-rpc)

So far, we have coded and tested a beta version for windows, however we unfortunately could not automate the entire process of establishing a connection to a remote node, due to problems outlined below, and some configurations have to be made manually before using the wallet.

# Browser Extensions #
Special instructions must be followed by the user to properly use our monero wallet.
For the moment, there does not seem to be a reliable remote node that one can connect
to and operate successfully with on a 24/7 basis. As such, it is necessary for the
user themselves to find one from a list of available nodes, run and maintained at the
capacity of the monero community members. Therefore, the user of this software (at
least for the case of the browser extensions) must download certain programs from the
official monero website and establish a connection manually.

1) Download the monero-cli program for your respective operating system (https://www.getmonero.org/downloads/#cli).
2) Place all files in the provided 'Help' folder within the same folder as the monero-cli program code.
3) Select a monero node from the list of actively-maintained remote nodes (https://monero.fail/).
4) To create a new wallet, enter the folder where you downloaded the monero programs from the website, and open a
   command prompt. Run the executable known as 'monero-wallet-cli.exe', and follow the prompted instructions. This
   will complete with the output a 25-word seed phrase, which you are advised to store in a safe place.
5) Open the node_config text file and write down the wallet name, wallet password and node name in separate lines like so:
	mywallet
	123
	http://opennode.xmr-tw.org:18089
6) Then, simply double-click on the activate.bat file, and a terminal will appear which
will load the wallet file you have created in the same folder, and eventually notify you
when a connection has passed through and the wallet is available for use. Note that this
depends on the node you have chosen and may take anywhere from 1-10 minutes.

After a few seconds of running this command, a message will appear in your open terminal,
to notify you that the default wallet has been loaded. In a few minutes, another message
will appear to notify you that a connection has been established. At that point*, you can
also make a separate terminal to run the provided test.js file (requires you install Node)
that is provided in the 'Help' folder.
  $ node test.js

If the connection is successful, the message 'Your Monero Wallet is Ready.' will appear
in your terminal, and you can then minimize the terminal you run the first command on to
execute a transaction from your browser extension. But make sure you do not close it or
the connection will be lost.

*Even if error messages appear on your terminal at that point, still run the test.js file
and if the result is as expected, then run your wallet in the browser extension. If you
discover that the remote node does not reliably execute wallet functions, you are advised
to try again at a later time or switch to a different available node.
