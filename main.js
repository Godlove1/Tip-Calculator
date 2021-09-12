//getting info
let amount = document.getElementById("amount");
let numOfPips = document.getElementById("people");
//percentages
let fi = document.getElementById("fi");
let fiveper = document.getElementById("five").innerHTML;

//results
let pay = document.getElementById("pay");
let tpp = document.getElementById("total-pay");
//reset button
let resetBtn = document.getElementById("reset");
let per = document.querySelectorAll(".percent");

		
//caluclate five percent
	numOfPips.onchange = function () {
		amount = amount.value;
		fiveper = fiveper / 100;
		numOfPips = numOfPips.value;
		pay.innerHTML = fiveper * amount;
		tpp.innerHTML = amount / (numOfPips * fiveper);
	}
