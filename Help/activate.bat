@ECHO OFF
SETLOCAL ENABLEDELAYEDEXPANSION
TITLE Monero Activation
ECHO Activating JSON-RPC Client w/ given Node Configuration
SET Counter=1
FOR /F %%x IN (.\node_config.txt) DO (
  SET "Line_!Counter!=%%x"
  SET /A Counter+=1
)
SET /A NumLines=Counter - 1
START monero-wallet-rpc.exe --wallet-file %Line_1% --rpc-bind-port 18082 --password %Line_2% --disable-rpc-login --daemon-address %Line_3%