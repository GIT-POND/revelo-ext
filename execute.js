(function() { /* code goes here */ })();

document.addEventListener('DOMContentLoaded', async function(){
  let checkButton = document.getElementById("btn1");
  let urlField = document.getElementById("00");
  let scarcityField = document.getElementById("01");
  let countDownField = document.getElementById("02");
  let socialProofField = document.getElementById("03");

  checkButton.addEventListener('click',function(){
    const url = chrome.tabs.query({active: true, currentWindow: true}, tabs =>{
      siteURL = (tabs.length > 0) ? tabs[0].url : null;
      let entry = null;

      fetch("http://127.0.0.1:8000/search",{ // search for URL
        method:"POST",
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"url":`${siteURL}`})
      })
      .then(response=>{
        if(!response.ok){ // if URL not found
          fetch("http://127.0.0.1:8000/process",{  // create entry with URL
            method:"POST",
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"url":`${siteURL}`})
          })
          .then(response=>response.json())
          .then(data=>{
            urlField.textContent = data.url;
            scarcityField.textContent = data.scarcity;
            countDownField.textContent = data.countDown;
            socialProofField.textContent = data.socialProof;
          });
        }
        else
          return response.json()})
      .then(data=>{
          urlField.textContent = data.url;
          scarcityField.textContent = data.scarcity;
          countDownField.textContent = data.countDown;
          socialProofField.textContent = data.socialProof;
      });    
    });
  })
})