	var total = 0;
	var totalBills;
	var totalChange;
	var textTotal = 0;
	var moneyReceived = 0;
	var random = 0;
	var changeReturned;
	var changeDue;

	var ones = 0;
	var fives = 0;
	var tens = 0;
	var twenties = 0;

	var pennies = 0;
	var nickels = 0;
	var dimes = 0;
	var quarters = 0;

	var correct = 0;
	var incorrect = 0;
	var inARow = 0;
	var recordInARow = 0;
	var percentCorrect;

	var arrayMoneyReceived = [5,10,20,40,60,80,100];
	
	var zeroToOne = ['a matchbox car','a gumball'];
	var oneToFive = ['a Gatorade','a milkshake'];
	var fiveToTen = ['a soda and a burger','some milk, bread, and eggs','a frappe cappucino'];
	var tenToTwenty = ['a soccer ball','a basketball','bottle of bleach','a CD','a large pizza','two burgers, fries, and a soda','a polo shirt'];
	var twentyToThirty = ['some assorted clothing','groceries for dinner'];
	var thirtyToFifty = ['a winter coat','BF4','ARMA III','a pair of shoes','a Carolina Panthers jersey'];
	var fiftyToSeventy = ['a nice pair of Nikes','a Messi jersey'];
	var seventyToOneHundred = ["groceries for the family","a pair of KD12's"];

	function onload(){
		next();
	}
	function returnChange(){
		console.log("hello");
		addChange();
		if(changeDue == changeReturned){
			answerCorrect();
		}else{
			answerIncorrect();
		}
	}
	function next(){
		resetMoney();
		getTotal();
		moneyGivenByCustomer();
		textToHtml();
	}
	function addChange(){
		changeDue = moneyReceived - total;
		changeDue = changeDue.toFixed(2);

    	changeReturned = ((twenties*2000)+(tens*1000)+(fives*500)+(ones*100)+(quarters*25)+(dimes*10)+(nickels*5)+(pennies*1))/100;
    	changeReturnedString = changeReturned.toFixed(2);
	}
	function answerCorrect(){
		correct++;
		inARow++;
		if(inARow>recordInARow){
			recordInARow = inARow;
		}
		percentCorrectFunction();
		document.getElementById("percentCorrect").innerHTML=percentCorrect+"%";
		document.getElementById("inARow").innerHTML=inARow+" in a";
		document.getElementById("correct").style.display = 'block';
		next();
	}
	function answerIncorrect(){
		incorrect++;
		inARow = 0;
		percentCorrectFunction();
		document.getElementById("percentIncorrect").innerHTML=percentCorrect+"%";
		document.getElementById("recordInARow").innerHTML=recordInARow+" in a";
		document.getElementById("incorrect").style.display='block';
		next();

	}
	function percentCorrectFunction(){
			percentCorrect = ((correct/(correct+incorrect))*100).toFixed(0);	
	}
	function nextQuestion(){
		document.getElementById("correct").style.display = 'none';
		document.getElementById("incorrect").style.display = 'none';
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
	function newRandom(){
    	random = Math.random();
    	return random
    }
    function randomArray(length){
    	return (Math.ceil(Math.random()*length)-1);
    }
    function getTotal(){
    	newRandom();
    	if(random < 0.02){
    		totalBills = 0;
    	}else if(random < 0.4){
			totalBills = ((Math.ceil(Math.random()*10)))+1;
		}else if(random<0.7){
			totalBills = ((Math.ceil(Math.random()*20)))+1;
		}else if(random<0.8){
			totalBills = ((Math.ceil(Math.random()*30)))+1;
		}else if(random<0.9){
			totalBills = ((Math.ceil(Math.random()*50)))+1;
		}else{
			totalBills = ((Math.ceil(Math.random()*100)))+1;
		}
		newRandom();
		if(random < 0.02){
    		totalChange = 0;
    	}else if(random < .15){
    		totalChange = 0.99;
    	}else{
			totalChange = (Math.ceil(Math.random()*100))/100;
		}

		total=totalBills+totalChange;

        console.log("Total bills: "+totalBills);

        console.log("Total change: "+totalChange.toFixed(2));
        console.log("Total: "+total.toFixed(2));


    }

    function moneyGivenByCustomer(){
    	newRandom();

    	if(random < .05){
    		moneyReceived = total;
    	}else if(random < .3){
    		moneyReceived = Math.ceil(total);
    	}else if(random < .5){
    		moneyReceived = Math.ceil(total)+totalChange;
    	}else if(random < .54){
    		moneyReceived = ((Math.ceil(Math.random()*100))/100)+total;
    	}else if(random < .7){
    		for(i = 0; arrayMoneyReceived[i]< 101; i++){
    			if(total < arrayMoneyReceived[i]){
    				moneyReceived = arrayMoneyReceived[i];
    				break;
    			}
    		}   		
    	}else{
    		for(i = 0; i < 101; i+=5){
    			if(total < i){
    				if(newRandom() < .7){
    				moneyReceived = i;
    				break;
    				}else{
    					moneyReceived = i + totalChange;
    					break
    				}
    			}
    		}
    		
    	}

    	moneyReceived = moneyReceived.toFixed(2);
    }

	function textToHtml(){
	    textTotal = total.toFixed(2);
		document.getElementById("textTotal").innerHTML="$"+textTotal;
		
		if (total < 1){
			document.getElementById("textBought").innerHTML=zeroToOne[randomArray(zeroToOne.length)];
		}else if(total<5){			
			document.getElementById("textBought").innerHTML=oneToFive[randomArray(oneToFive.length)];				
		}else if(total<10){			
			document.getElementById("textBought").innerHTML=fiveToTen[randomArray(fiveToTen.length)];				
		}else if(total<20){
			document.getElementById("textBought").innerHTML=tenToTwenty[randomArray(tenToTwenty.length)];
		}else if(total<30){
			document.getElementById("textBought").innerHTML=twentyToThirty[randomArray(twentyToThirty.length)];
		}else if(total<50){
			document.getElementById("textBought").innerHTML=thirtyToFifty[randomArray(thirtyToFifty.length)];
		}else if(total<70){
			document.getElementById("textBought").innerHTML=fiftyToSeventy[randomArray(fiftyToSeventy.length)];
		}else if(total<100){
			document.getElementById("textBought").innerHTML=seventyToOneHundred[randomArray(seventyToOneHundred.length)];
		}
		/*moneyReceived = total+(newRandom());
		moneyReceived = moneyReceived.toFixed(2);*/
		document.getElementById("textMoneyReceived").innerHTML="$"+moneyReceived;
	}



    function onesPlus(){
		ones++
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