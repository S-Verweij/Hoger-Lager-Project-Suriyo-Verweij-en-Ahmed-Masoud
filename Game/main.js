function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //Rond het af zonder een komma getal.
}

function gooidobbelstenen() {
	const points = getRandomIntInclusive(0, 50);
	return points; //zorgt ervoor dat we een willekeurig getal hebben tussen de twee getallen die worden aangegeven tussen de haakjes.
}

	let startingGame = false;
	let spelerDobbelsteen = [0, 0];
	let speler = 0;
	let tegenstanderDobbelsteen = [0, 0];
	let tegenstander = 0;
	let credits = 10;
	let message = "";
	let raad;
	let bod = 0;
	let eindegame = 100; //De gegevens die je hebt in het begin van het spel. Alles staat op 0 behalve de credits. De aantal credits hier zijn 10, want je begint met 10. Het spel beeindigd wanneer de aantal credits het aangegeven getal bereikt bij 'eindegame'.

	const btn = document.querySelector(".startingButton");
	btn.addEventListener("click", startGameFunction); //koppelt de button aan javascript en controleert de knop op een "button press" en start dan de aangegeven funtion.

	function startGameFunction() { //maakt een function aan die uitgevoerd word door de "button press".
		alert('Welkom bij het spel Hoger/Lager');
alert('Voordat je met het spel begint, zal ik de spelregels uitleggen:');
alert('1. Je krijgt twee getallen tussen 0 t/m 50. Wanneer je de getallen optelt, \
moet je dan raden tussen de som die jij krijgt en de som van je tegenstander. Dit beantwoord je met het in te vullen van hoger of lager.');
alert('2. Het aantal punten, credits, die je verdient of verliest hangt ervan af hoeveel je gokt. De groter de gok, des te beter je winst of groter je verlies.');
alert('3. Voordat je met het spel begint krijg je 10 credits om te spelen. Als jouw credits op zijn, heb je verloren. Je moet 100 punten(credits) behalen om te winnen. Succes!');
alert('We gaan beginnen!');

		while (credits > 0 && credits < 100) {  //Dit zorgt ervoor dat het spel loopt zolang je 1 of meer credits hebt door de while statement.
	
			spelerDobbelsteen[0] = gooidobbelstenen(); //Het eerste getal van je dobbelstenen.
			spelerDobbelsteen[1] = gooidobbelstenen(); //Het tweede getal van je dobbelstenen. 
	
			message = "Jij hebt " + spelerDobbelsteen[0] + " en " + spelerDobbelsteen[1];
			alert(message); //Geeft aan welke getallen je hebt gekregen.
	
	
			raad = prompt("Gooit je tegenstander hoger of lager?"); //Hierin krijg je een prompt waarbij je hoger of lager in moet vullen om de if-statement te beginnen.
	
	
			const x = prompt("Vul een prijs in dat je wilt gokken:"); //De prijs die je gokt. Jouw input zorgt ervoor dat je dat aantal wint als je wint en verliest als je verliest. Stel je hebt 20 credits en je gokt 10. Als je wint eindig je met 30 credits en als je verliest 10.
			bod = Number(x);
	
	
			tegenstanderDobbelsteen[0] = gooidobbelstenen(); //Het eerste getal van jouw tegenstander's dobbelstenen.
			tegenstanderDobbelsteen[1] = gooidobbelstenen(); //Het tweede getal van jouw tegenstander's dobbelstenen. 
	
	
			speler = spelerDobbelsteen[0] + spelerDobbelsteen[1];
			tegenstander = tegenstanderDobbelsteen[0] + tegenstanderDobbelsteen[1];
	
			if (bod > credits) {
				alert("Je biedt meer dan dat je bezit, probeer opnieuw.") //Zorgt ervoor dat je niet meer kan gokken dan je bezit om makkelijk het spel te winnen.
			} else {
				if (raad == "hoger") {
	
					if (speler < tegenstander) {
						message = "Jouw tegenstander heeft " + tegenstanderDobbelsteen[0] + " en " + tegenstanderDobbelsteen[1] + " " + "gegooid.";
						alert(message);
						alert("Goedzo! Deze ronde heb je gewonnen! Ga zo door!");
						credits = credits + bod; //Kijkt naar wat je hebt ingevuld, hoger of lager (dit geval hoger), en dan geeft het aan of je gelijk hebt en dan win je. Het voegt dan jouw bod toe aan je aantal credits.
					}
					else if (speler > tegenstander) {
						message = "Jouw tegenstander heeft " + tegenstanderDobbelsteen[0] + " en " + tegenstanderDobbelsteen[1] + " " + "gegooid.";
						alert(message);
						alert("Helaas! je hebt deze ronde verloren!");
						credits = credits - bod; //Kijkt naar wat je hebt ingevuld, hoger of lager (dit geval hoger), en dan geeft het aan of je gelijk hebt en dan verlies je. Het trekt dan jouw bod af van je aantal credits.
					} else {
						message = "Jouw tegenstander heeft " + tegenstanderDobbelsteen[0] + " en " + tegenstanderDobbelsteen[1] + " " + "gegooid.";
						alert(message);
						alert("Dat zie je ook niet vaak! Gelijkspel!");
						continue; //Er gebeurt niks als beide spelers evenveel heeft. De while hervat zich en vraagd opnieuw.
					}
				}
				else if (raad == "lager") {
		
					if (speler > tegenstander) {
						message = "Jouw tegenstander heeft " + tegenstanderDobbelsteen[0] + " en " + tegenstanderDobbelsteen[1] + " " + "gegooid.";
						alert(message);
						alert("Goedzo! Deze ronde heb je gewonnen! Ga zo door!");
						credits = credits + bod; //Kijkt naar wat je hebt ingevuld, hoger of lager (dit geval lager), en dan geeft het aan of je gelijk hebt en dan win je. Het voegt dan jouw bod toe aan je aantal credits.
					}
					else if (speler < tegenstander) {
						message = "Jouw tegenstander heeft " + tegenstanderDobbelsteen[0] + " en " + tegenstanderDobbelsteen[1] + " " + "gegooid.";
						alert(message);
						alert("Helaas! je hebt deze ronde verloren!");
						credits = credits - bod; //Kijkt naar wat je hebt ingevuld, hoger of lager (dit geval lager), en dan geeft het aan of je gelijk hebt en dan verlies je. Het trekt dan jouw bod af van je aantal credits.
					}
					else {
						message = "Jouw tegenstander heeft " + tegenstanderDobbelsteen[0] + " en " + tegenstanderDobbelsteen[1] + " " + "gegooid.";
						alert(message);
						alert("Dat zie je ook niet vaak! Gelijkspel!");
						continue; //Er gebeurt niks als beide spelers evenveel heeft. De while hervat zich en vraagd opnieuw.
					}
				} else {
					alert("Je typte geen hoger of lager. We beginnen opnieuw.");
					continue; //Je hebt niks ingevoerd, dus dan krijg je deze else. De while hervat zich dan en vraagd het opnieuw.
				}
			}
	
			alert("Jij hebt " + credits + " credits");
	
			if (credits >= eindegame) {
				alert('Gefeliciteerd! Je hebt gewonnen!')
				break; //Als je aantal credits hoger is dan de capaciteit dat wordt aangegeven met 'let= eindegame', dan krijg je een alert die zegt dat je gewonnen hebt.
			}
	
			if (credits <= 0) {
				alert('Ah, dat is jammer. Je hebt verloren. Volgende keer beter!')
				break; //Als je credits lager zijn of evenveel is als 0, dan krijg je een alert die zegt dat je hebt verloren.
			} 
	
		}
	}
speel();


