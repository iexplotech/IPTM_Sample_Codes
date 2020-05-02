#!/bin/bash
trap "exit" INT
for (( i=1; i<=5; i++ ))
do  
	printf 'Loop geth: %d\n' "$i"
	echo $(date)
    ./auto_geth.sh -e
    printf 'Wait 10 seconds before restart geth\n'
    sleep 10
done
