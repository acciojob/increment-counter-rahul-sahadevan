//your JS code here. If required.
const inc = document.getElementById("incrementBtn");
let incre = 1;
inc.addEventListener("click",() =>{
	let val = document.getElementById("counter");
	alert(val.innerText);
    val.innerText = incre;
	let prev = val.innerText;
	incre++;
	
})
