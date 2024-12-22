// setInterval allows real life changing of our time
setInterval(() => {
    document.getElementById("time").textContent=new Date().toLocaleTimeString();
}, 1000);

//OR

// let time = document.getElementById("time");
// setInterval(() => {
//     time.textContent=new Date().toLocaleTimeString();
// },1000);

  
  