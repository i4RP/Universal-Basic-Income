
var UniversalBasicIncome;
var UniversalBasicIncomeABI = [
]

var UniversalBasicIncomeContractAddress = "0x9f2148d14aCB2284BE3F96C73E6C53c0aa33759d";

function startApp() {
  mary = new web3js.eth.Contract(UniversalBasicIncomeABI, UniversalBasicIncomeContractAddress);
}

function propose(address) {
  // しばらく時間がかかるので、UIを更新してユーザーに
  // トランザクションが送信されたことを知らせる
  $("#txStatus").text("Proposing marriage on the block chain. This may take a while...");
  // トランザクションをコントラクトに送信する:
    return mary.methods.propose(address)
    .send({ from: "0x40dea50302f41b7b695135b588b1ce2b5834ccd3" ,value: web3js.utils.toWei("0.001", "ether")})
    .on("receipt", function(receipt) {
      $("#txStatus").text("Successfully Proposed " + address + "!");
      // トランザクションがブロックチェーンに取り込まれた。UIをアップデートしよう
    })
    .on("error", function(error) {
      // トランザクションが失敗したことをユーザーに通知するために何かを行う
      $("#txStatus").text(error);
    });
  }

window.addEventListener('load', function() {

  // Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Mist/MetaMaskのプロバイダの使用
    web3js = new Web3(web3.currentProvider);
  } else {
    // ユーザーがweb3を持たない場合の対処。
    // アプリを使用するためにMetamaskをインストールするよう
    // 伝えるメッセージを表示。
    alert("hello ispec")
  }

  // アプリのスタート＆Web3.jsへの自由なアクセスが可能に:
  startApp()

})
