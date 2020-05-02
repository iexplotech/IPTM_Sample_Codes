#!/bin/bash
./geth --networkid 496 --port 30303 --nodiscover --datadir data_IPTM/node1/chain-data --syncmode full --gcmode=archive --ipcpath "data_IPTM/node1/geth.ipc" --nousb --cache=650 --allow-insecure-unlock -unlock 0x1111cad11a99ff45d15be9c1f5abe28758ee681e --etherbase 0x1111cad11a99ff45d15be9c1f5abe28758ee681e --password data_IPTM/password.txt --mine console
