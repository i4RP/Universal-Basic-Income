var UniversalBasicIncome;
var UniversalBasicIncomeABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "receiveAndAirdropMoney",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_subscribeAddress",
				"type": "address"
			}
		],
		"name": "subscribeMember",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkMembers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "members",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]


var UniversalBasicIncomeContractAddress = "0x9f2148d14aCB2284BE3F96C73E6C53c0aa33759d";

function startApp() {
  UniversalBasicIncome = new web3js.eth.Contract(UniversalBasicIncomeABI, UniversalBasicIncomeContractAddress);
}

window.addEventListener('load', function() {
  // Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
		alert("Welcome UniversalBasicIncome");
    // Mist/MetaMaskのプロバイダの使用
    web3js = new Web3(web3.currentProvider);
  } else {
    // ユーザーがweb3を持たない場合の対処。
    // アプリを使用するためにMetamaskをインストールするよう
    // 伝えるメッセージを表示。
    alert("please install Metamask")
  }

  // アプリのスタート＆Web3.jsへの自由なアクセスが可能に:
  startApp()
})
