function refreshTimer(){
    function countDown(){
      setTimeout(function(now){
                   let dif = (td-now)/1000,
                        ss = Math.floor(dif % 60).toString().padStart(2,"0"),
                        ms = Math.floor(dif/60 % 60).toString().padStart(2,"0"),
                        hs = Math.floor(dif/3600 % 24).toString().padStart(2,"0"),
                        ds = Math.floor(dif/86400).toString().padStart(3,"0");
                    remainingTime.textContent = dif > 0 ? `${ds} Days ${hs}:${ms}:${ss}`
                                                        : "Sorry. You are already late..!";
                    active && countDown();
                    this.removeEventListener("change", kill); // possibly redundant
                  }, 1000, Date.now());
    }
    let td     = new Date(this.value),
        active = true,
        kill   = _ => active = false;
    this.addEventListener("change", kill);
    countDown();
  }
  
  let targetDateTime = document.getElementById("targetDateTime"),
      remainingTime  = document.getElementById("remainingTime");
  
  targetDateTime.addEventListener("change",refreshTimer);