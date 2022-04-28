// window.onlode = function(){
//  Alert("ページが読み込まれました。");
// };
console.log("hellow world");

window.onload = async function(){
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
}();
