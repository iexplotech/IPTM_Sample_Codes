
function checkIPTMBalances() {
	var rootAcc = "0x88888bd5756ac3278bc55bb326eb0dc0c96eba60";
	var defaultAcc = "0x0000706e899d0f46c5efe22c4caaeb885af4dcac";
	
	//var sealer_Acc = ["0x1111cad11a99ff45d15be9c1f5abe28758ee681e"];
	var sealer_Acc = clique.getSigners();
	
	console.log("\n  #### IPTM Secretariat Accounts #### ");
	
	console.log("  Root    Account, " + rootAcc + ": " + web3.fromWei(eth.getBalance(rootAcc), "ether") + " ether");
	console.log("  Default Account, " + defaultAcc + ": "+ web3.fromWei(eth.getBalance(defaultAcc), "ether") + " ether");
	
	var totalBal = 0;
	for (var i in sealer_Acc) {
		var sealer_balance = web3.fromWei(eth.getBalance(sealer_Acc[i]), "ether");
		
		console.log("\n  Sealer Account[" + i + "], " + sealer_Acc[i] + ": "+ sealer_balance + " ether");
		totalBal += parseFloat(sealer_balance);
	}
	
	console.log("  Total All Sealer Nodes Balance: " + totalBal + " ether");
};

function checkLocalBalances() {
	console.log("\n  ### Your Local Accounts ###");
    var totalBal = 0;
    for (var acctNum in eth.accounts) {
        var acct = eth.accounts[acctNum];
        var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
        totalBal += parseFloat(acctBal);
        console.log("  eth.accounts[" + acctNum + "]: " + acct + " balance: " + acctBal + " ether");
    }
    console.log("  Total Balance: " + totalBal + " ether");
};

function checkAllBalances() {
	checkIPTMBalances();
	checkLocalBalances();
};

function display() {
	console.log("Project: IPTM Testnet 2020");
	console.log("Programmer: Dr Mohd Anuar Mat Isa, IPTM Secretarial & iExploTech");
	console.log("License: GNU GPL3");
	console.log("\nRun this function to check all balances: checkAllBalances()");
	console.log("Run this function to check IPTM balances: checkIPTMBalances()");
	console.log("Run this function to check Local balances: checkLocalBalances()");
}

display();
checkAllBalances();