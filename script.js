//Navigation
function afficher(id){
document.querySelectorAll('section').forEach(sec=>sec.style.display='none');
document.getElementById(id).style.display="block";
}


function verifierPair(){
let n=document.getElementById("nbpair").value;  
let res=(n==="")?'veillez entrer un nombre'
        :(n%2===0)? `${n} est pair ✅`
        :`${n} est impair ❌`;
 document.getElementById("respair").textContent=res;                 
};