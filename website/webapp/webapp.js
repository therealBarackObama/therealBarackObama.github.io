// JavaScript Document

// Score
var score = 0;
var frame = 0;

// Generators
var nut = 0;
var spaghett = 0;
var mistabean = 0;
var robloks = 0;
var flex_tape = 0;
var de_wae = 0;

// Generator Prices
var nutprice = 10;
var spaghettprice = 100;
var mistabeanprice = 1000;
var robloksprice = 10000;
var flex_tapeprice = 100000;
var de_waeprice = 1000000;

// Clicks Per Second
var karmaps = 0;

//frame movment for the ugandan warrior
function memeclicker() {
	if( frame == 5 ) { frame = 0; }
		else { frame = frame + 1; }
	score = score + 1;
	update_values();
	document.getElementById("ugandan").firstChild.setAttribute("src", "frames/" + frame + ".png");
}

function buy(sel) {
	switch(sel) {
		//tells the value for the nut and its function
		case "nut":
			if( score >= nutprice ) {
				score -= nutprice;
				nut++;
				document.getElementById("nut").innerHTML = nut.toLocaleString('en');
				nutprice *= 1.25;
				nutprice = Math.floor(nutprice);
				document.getElementById("nutprice").innerHTML = nutprice.toLocaleString('en');
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for the spaghett and its function
		case "spaghett":
			if( score >= spaghettprice ) {
				score -= spaghettprice;
				spaghett++;
				document.getElementById("spaghett").innerHTML = spaghett.toLocaleString('en');
				spaghettprice *= 1.25;
				spaghettprice = Math.floor(spaghettprice);
				document.getElementById("spaghettprice").innerHTML = spaghettprice.toLocaleString('en');
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for mistabean and its function
		case "mistabean":
			if( score >= mistabeanprice ) {
				score -=mistabeanprice;
				mistabean++;
				document.getElementById("mistabean").innerHTML = mistabean.toLocaleString('en');
				mistabeanprice *= 1.25;
				mistabeanprice = Math.floor(mistabeanprice);
				document.getElementById("mistabeanprice").innerHTML = mistabeanprice.toLocaleString('en');
			}
			 //alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for robloks and its function
		case "robloks":
			if( score >= robloksprice ) {
				score -= robloksprice;
				robloks++;
				document.getElementById("robloks").innerHTML = robloks.toLocaleString('en');
				robloksprice *= 1.25;
				robloksprice = Math.floor(robloksprice);
				document.getElementById("robloksprice").innerHTML = robloksprice.toLocaleString('en');
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for the flex_tape and its function
		case "flex_tape":
			if( score >= flex_tapeprice ) {
				score -= flex_tapeprice;
				flex_tape++;
				document.getElementById("flex_tape").innerHTML = flex_tape.toLocaleString('en');
				flex_tapeprice *= 1.25;
				flex_tapeprice = Math.floor(flex_tapeprice);
				document.getElementById("flex_tapeprice").innerHTML = flex_tapeprice.toLocaleString('en');
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for de_wae and its function
		case "de_wae":
			if( score >= de_waeprice ) {
				score -= de_waeprice;
				de_wae++;
				document.getElementById("de_wae").innerHTML = de_wae.toLocaleString('en');
				de_waeprice *= 1.25;
				de_waeprice = Math.floor(de_waeprice);
				document.getElementById("de_waeprice").innerHTML = de_waeprice.toLocaleString('en');
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
	}
	update_values();
}

// Generation
window.onload = function() {
	// start looping the generator
	setInterval(bonus, 10);
	// load cookies if they exist (they dont) (yet)
};

function bonus() {
	score += nut * 0.001 + spaghett *0.01 + mistabean * 0.1 + robloks + flex_tape * 10 + de_wae * 100;
	update_values();
}
	
function update_values() {
	document.getElementById("score").value= Math.floor(score).toLocaleString('en');
	document.getElementById("karmaps").value=(Math.floor(10 * (nut * 0.1 + spaghett + mistabean * 10 + robloks * 100 + flex_tape * 1000 + de_wae * 10000)) / 10).toLocaleString('en');
}

function resetGame() {
	// if cookies are implemented this needs to be modified!!
	
}