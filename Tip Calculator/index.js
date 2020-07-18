function start()
{

var amount = document.getElementById("amount").value;

var people = document.getElementById("people").value;

var experience = document.getElementById("xpe");

var result = experience.options[experience.selectedIndex].value;

var total = (amount*result)/(people*100);

document.getElementById("result").innerHTML = total;
}
