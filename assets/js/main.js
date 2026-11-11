(function(){
var hours=["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];
var busy=[[1,4,5,8,9],[0,2,6,10]];
var mine=[{},{}],q=0,el=document.getElementById("slots"),msg=document.getElementById("msg");
function draw(){
  el.innerHTML="";
  hours.forEach(function(h,i){
    var b=document.createElement("button");
    b.className="slot";b.textContent=h;
    if(busy[q].indexOf(i)>-1){b.disabled=true;b.setAttribute("aria-label",h+", ocupado")}
    else if(mine[q][i]){b.classList.add("mine");b.setAttribute("aria-label",h+", sua reserva. Clique para cancelar")}
    else b.setAttribute("aria-label",h+", livre. Clique para reservar");
    b.onclick=function(){
      var n=document.querySelector(".tabs [aria-pressed=true]").textContent;
      if(mine[q][i]){delete mine[q][i];msg.textContent="Reserva de "+h+" cancelada — "+n+"."}
      else{mine[q][i]=1;msg.textContent="Reserva de "+h+" confirmada — "+n+" (simulação)."}
      draw();
    };
    el.appendChild(b);
  });
}
document.querySelectorAll(".tabs button").forEach(function(t){
  t.onclick=function(){
    document.querySelectorAll(".tabs button").forEach(function(x){x.setAttribute("aria-pressed","false")});
    t.setAttribute("aria-pressed","true");q=+t.dataset.q;msg.textContent="";draw();
  };
});
draw();
})();
