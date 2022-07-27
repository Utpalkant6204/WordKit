console.log("hello");

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log(message)
//   //console.log(sender)

//  // sendResponse("Thank you")
// });

window.addEventListener('mouseup', selected);

function selected()
{
  //console.log('selected word');
  let selectedword = window.getSelection().toString().trim();
  console.log(selectedword);

  if(selectedword.length>0)
  {
    let msg = {
      txt:selectedword
    }
    chrome.runtime.sendMessage(msg);
  }
  
}



