console.log("ram");

// chrome.action.onClicked.addListener((tab) => {
// const msg = {
//     txt:"hello_ utpal",
//     number:20
// }
//      chrome.tabs.sendMessage(tab.id,msg);
// });

window.word = "";
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     //console.log(request);
        window.word = request.txt;
       console.log(word) ;
      
    }
);






