
	var total = 0;
	var textTotal = 0;
	var moneyReceived = 0;
	var random = 0;
	var changeReturned;

	var ones = 0;
	var fives = 0;
	var tens = 0;
	var twenties = 0;

	var pennies = 0;
	var nickels = 0;
	var dimes = 0;
	var quarters = 0;
	
	var zeroToFive = ['a Gatorade','a milkshake'];
	var fiveToTen = ['a soda and a burger','some milk, bread, and eggs'];
	var tenToTwenty = ['two burgers, fries, and a soda','a polo shirt'];
	var twentyToThirty = ['some assorted clothing','groceries for dinner'];
	var thirtyToFifty = ['a pair of shoes'];
	var fiftyToSeventy = ['a nice pair of Nikes'];
	var seventyToOneHundred = ['groceries for the family'];

	function onload(){
		//alert("Page Loaded")
		getTotal();
		textToHtml();
	}

	function resetMoney(){

	    ones = 0;
	    fives = 0;
	    tens = 0;
	    twenties = 0;

	    pennies = 0;
	    nickels = 0;
	    dimes = 0;
	    quarters = 0;
	}

	function next(){
		resetMoney();
		newRandom();
		getTotal();
		textToHtml();
	}
	
	function returnChange(){
		var changeDue =moneyReceived - textTotal;
		var changeDue = changeDue.toFixed(2);
		//alert(changeDue);
		addChange();
		if(changeDue == changeReturned){
			alert("Good job!! You returned the correct change.");
			next();
		}else{
			alert("Oops, try again");
        	resetMoney();
		}


	}
	function addChange(){
    	changeReturned = ((twenties*2000)+(tens*1000)+(fives*500)+(ones*100)+(quarters*25)+(dimes*10)+(nickels*5)+(pennies*1))/100;
    	//alert("Change Returned: "+changeReturned);
    	changeReturned=changeReturned.toFixed(2);
	}

	/*function lightUp(){

	}*/
	
	function textToHtml(){
	    textTotal = total.toFixed(2);
		//textTotal = number(textTotal);
		//var textTotal = total;
		document.getElementById("textTotal").innerHTML=textTotal;
		
		if(total<5){			
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+5;
			}else{
				moneyReceived = (Math.ceil(Math.random()*1500)/100)+5;
			}
			document.getElementById("textBought").innerHTML=zeroToFive[randomArray(zeroToFive.length)];
			//document.getElementById("textMoneyReceived").innerHTML=moneyReceived;				
		}else if(total<10){
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+10;
			}else{
				moneyReceived = (Math.ceil(Math.random()*1000)/100)+10;
			}
			document.getElementById("textBought").innerHTML=fiveToTen[randomArray(fiveToTen.length)];
		}else if(total<20){
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+20;
			}else{
				moneyReceived = (Math.ceil(Math.random()*3000)/100)+20;
			}
			document.getElementById("textBought").innerHTML=tenToTwenty[randomArray(tenToTwenty.length)];
		}else if(total<30){
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+30;
			}else{
				moneyReceived = (Math.ceil(Math.random()*3000)/100)+30;
			}
			document.getElementById("textBought").innerHTML=twentyToThirty[randomArray(twentyToThirty.length)];
		}else if(total<50){
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+50;
			}else{
				moneyReceived = (Math.ceil(Math.random()*3000)/100)+50;
			}
			document.getElementById("textBought").innerHTML=thirtyToFifty[randomArray(thirtyToFifty.length)];
		}else if(total<70){
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+70;
			}else{
				moneyReceived = (Math.ceil(Math.random()*3000)/100)+70;
			}
			document.getElementById("textBought").innerHTML=fiftyToSeventy[randomArray(fiftyToSeventy.length)];
		}else if(total<100){
			if(random>.3){
				moneyReceived = (Math.ceil(Math.random()*500)/100)+100;
			}else{
				moneyReceived = (Math.ceil(Math.random()*3000)/100)+100;
			}
			document.getElementById("textBought").innerHTML=seventyToOneHundred[randomArray(seventyToOneHundred.length)];
		}
		moneyReceived = moneyReceived.toFixed(2);
		document.getElementById("textMoneyReceived").innerHTML=moneyReceived;
	}

	//RNGs
    function newRandom(){
    	random = Math.random();
    	console.log("Random="+random);
    }
    
    function randomArray(length){
    	return (Math.ceil(Math.random()*length)-1);
    }

	function getTotal(){
		newRandom();

		if(random<0.4){
			total = (Math.ceil(Math.random()*1000))/100;
		}else if(random<0.7){
			total = (Math.ceil(Math.random()*2000))/100;
		}else if(random<0.8){
			total = (Math.ceil(Math.random()*3000))/100;
		}else if(random<0.9){
			total = (Math.ceil(Math.random()*5000))/100;
		}else{
			total = (Math.ceil(Math.random()*10000))/100;
		}
		console.log("Total="+total);
	}

	function onesPlus(){
		ones++
		console.log(ones)
	}
	function fivesPlus(){
		fives++
	}
	function tensPlus(){
		tens++
	}
	function twentiesPlus(){
		twenties++
	}
	function onesMinus(){
		ones--
	}
	function fivesMinus(){
		fives--;
	}
	function tensMinus(){
		tens--;
	}function twentiesMinus(){
		twenties--;
	}
	function penniesPlus(){
		pennies++
	}
	function nickelsPlus(){
		nickels++
	}
	function dimesPlus(){
		dimes++
	}
	function quartersPlus(){
		quarters++
	}
	function penniesMinus(){
		pennies--;
	}
	function nickelsMinus(){
		nickels--;
	}
	function dimesMinus(){
		dimes--;
	}
	function quartersMinus(){
		quarters--;
	}
