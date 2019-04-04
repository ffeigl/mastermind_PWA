// **********
// ** MENU **
// **********

// Initialize
function initMenu(){
	setTwoPlayerToZero();
	generateGameModeButtons();
	generateManualHighscoreButtons();
}

function generateGameModeButtons(){	
	var btnSinglePlayer = document.createElement('INPUT');
	btnSinglePlayer.type = 'button';
	btnSinglePlayer.value = 'Ein Spieler';
	btnSinglePlayer.onclick = btnSinglePlayerHandler;
	
	divGameModeButtons.appendChild(btnSinglePlayer);
	
	var btnTwoPlayer = document.createElement('INPUT');
	btnTwoPlayer.type = 'button';
	btnTwoPlayer.value = 'Zwei Spieler';
	btnTwoPlayer.onclick = btnTwoPlayerHandler;
	
	divGameModeButtons.appendChild(btnTwoPlayer);
}

function generateManualHighscoreButtons(){
	var btnManual = document.createElement('INPUT');
	btnManual.type = 'button';
	btnManual.value = 'Spielanleitung';
	//btnManual.onclick = btnManualHandler;
	
	divManualHighscoreButtons.appendChild(btnManual);
	
	var btnHighscore = document.createElement('INPUT');
	btnHighscore.type = 'button';
	btnHighscore.value = 'Highscore';
	//btnHighscore.onclick = btnHighscoreHandler;
	
	divManualHighscoreButtons.appendChild(btnHighscore);
}

function generateGameModeSelect(){
	rows = 8;
	columns = 4;
	colors = 6;
	
	var rdoNormal = document.createElement('INPUT');
	rdoNormal.type = 'radio';
	rdoNormal.name = 'gameModeSelecter';
	rdoNormal.onclick = rdoNormalHandler;
	rdoNormal.checked = 'true';
	
	var lblNormal = document.createElement('LABEL');
	lblNormal.innerHTML = 'Normal';
	
	divGameModeSelect.appendChild(rdoNormal);
	divGameModeSelect.appendChild(lblNormal);
	
	var rdoMaster = document.createElement('INPUT');
	rdoMaster.type = 'radio';
	rdoMaster.name = 'gameModeSelecter';
	rdoMaster.onclick = rdoMasterHandler;
	
	var lblMaster = document.createElement('LABEL');
	lblMaster.innerHTML = 'Master';
	
	divGameModeSelect.appendChild(rdoMaster);
	divGameModeSelect.appendChild(lblMaster);
	
	generateGameModeInfo();
}

function generateGameModeInfo(){
	var gameModeInfo = document.createElement('LABEL');
	gameModeInfo.innerHTML = 'Anzahl der Versuche: ' + rows + '<br />' +
	'Länge der Kombination: ' + columns + '<br />' +
	'Mögliche Farben: ' + colors;
	
	divGameModeInfo.appendChild(gameModeInfo);
}

function generateRoundsSelect(){
	var lblRoundsSelect = document.createElement('LABEL');
	lblRoundsSelect.innerHTML = 'Anzahl der Runden: ';
	
	divRoundsSelect.appendChild(lblRoundsSelect);
	
	
	
	var rounds2 = document.createElement('OPTION');
	rounds2.innerHTML = '2';
	roundsSelect.appendChild(rounds2);
	var rounds4 = document.createElement('OPTION');
	rounds4.innerHTML = '4';
	roundsSelect.appendChild(rounds4);
	var rounds6 = document.createElement('OPTION');
	rounds6.innerHTML = '6';
	roundsSelect.appendChild(rounds6);
	var rounds8 = document.createElement('OPTION');
	rounds8.innerHTML = '8';
	roundsSelect.appendChild(rounds8);
	var rounds10 = document.createElement('OPTION');
	rounds10.innerHTML = '10';
	roundsSelect.appendChild(rounds10);
	
	divRoundsSelect.appendChild(roundsSelect);
}

function generateGameStartButton(){
	var btnGameStart = document.createElement('INPUT');
	btnGameStart.type = 'button';
	btnGameStart.value = 'Start';
	btnGameStart.onclick = btnGameStartHandler;
	
	divGameStartButton.appendChild(btnGameStart);
}

function setTwoPlayerToZero(){
	currentGame = 0;
	currentPlayer = 0;
	scorePlayer1 = 0;
	scorePlayer2 = 0;
	triesPlayer1 = 0;
	triesPlayer2 = 0;
	minutesPlayer1 = 0;
	minutesPlayer2 = 0;
	secondsPlayer1 = 0;
	secondsPlayer2 = 0;
}

// Eventhandler
function btnSinglePlayerHandler(){
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	
	roundsSelect.value = '';
	
	generateGameModeSelect();
	generateGameStartButton();
}

function btnTwoPlayerHandler(){
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	
	generateGameModeSelect();
	generateRoundsSelect();
	generateGameStartButton();
}

function rdoNormalHandler(){
	rows = 8;
	columns = 4;
	colors = 6;
	
	removeGameModeInfo();
	generateGameModeInfo();
}

function rdoMasterHandler(){
	rows = 10;
	columns = 5;
	colors = 8;
	
	removeGameModeInfo();
	generateGameModeInfo();
}

function btnManualHandler(){
	
}

function btnHighscoreHandler(){
	
}

function btnGameStartHandler(){
	numberOfGames = roundsSelect.value;
	removeMenu();
	if(numberOfGames == ''){
		initGame();
	} else {
		initCodeSelect();
	}
	
}

// **********
// ** CODE **
// **********

// Initialize
function initCodeSelect(){
	if(currentGame == 0){
		currentGame = 1;
	} else {
		currentGame++;
	}
	generateCodeSelectTable();
	generateCodeSelectButton();
	
	assignClickHandler();
}

function generateCodeSelectTable(){	
	var divGameNr = document.createElement('DIV');
	var divPlayerNr = document.createElement('DIV');
	currentPlayer = currentGame % 2;
	if(currentPlayer == 0){
		currentPlayer = 2;
	} else {
		currentPlayer = 1;
	}
	
	divGameNr.innerHTML = 'Runde ' + currentGame;
	divPlayerNr.innerHTML = 'Codeauswahl: <b>Spieler ' + currentPlayer + '</b>';
	
	divCodeSelect.appendChild(divGameNr);
	divCodeSelect.appendChild(divPlayerNr);

	var table = document.createElement('TABLE');
	table.border = 1;
	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);
	trCustomCode = document.createElement('TR');
	tableBody.appendChild(trCustomCode);
	
	for (var i = 0; i < columns; i++){
		var td = document.createElement('TD');
		td.width = '53.6';
		td.height = '42.8';
		td.className = 'active';
		trCustomCode.appendChild(td);
	}
	table.addEventListener('contextmenu', function(e){
		e.preventDefault();
	});
	divCodeSelect.appendChild(table);
	
}

function generateCodeSelectButton(){
	var button = document.createElement('INPUT');
	button.type = 'button';
	button.value = 'Code setzen';
	button.onclick = btnSetCodeHandler;
	
	divCodeSelect.appendChild(button);
}

// Eventhandler
function btnSetCodeHandler(){
	if(checkEmpty(trCustomCode, 'Code')){
		if(checkDoubles(trCustomCode, 'Code')){
			setCustomCode();
			removeCodeSelect();
			initGame();
		} else {
			console.log('doppelt');
		}
	} else {
		console.log('leer');
	}
}

function setCustomCode(){
	if(columns == 4){
		code = [0,0,0,0];
	} else {
		code = [0,0,0,0,0];
	}
	for(var i = 0; i < code.length; i++){
		code[i] = trCustomCode.childNodes[i].style.backgroundColor;
	}
}

// **********
// ** GAME **
// **********

// Initialize
function initGame(){
	generateTable();
	generateBtnCheck();
	generateErrorMessage();
	generateColorsInfo();
	
	currentRow = rows-1;
	if(numberOfGames == ''){
		generateCode();
	}
	codeAusgeben();
	activateCurrentRow();
	
	startTimer();
}

function generateTable() {
  var table = document.createElement('TABLE');
  divTable.className = 'table';
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

	if(rows == 8){
		rowsArray = [0,0,0,0,0,0,0,0];
	} else {
		rowsArray = [0,0,0,0,0,0,0,0,0,0];
	}
  
  
  for (var i = 0; i < rows; i++) {
    rowsArray[i] = document.createElement('TR');
    tableBody.appendChild(rowsArray[i]);

    for (var j = 0; j < columns+2; j++) {
		var td = document.createElement('TD');
		if(j == 0){
			td.width = '15';
			td.className = 'number';
			td.appendChild(document.createTextNode(rows-i));
		  
		} else {
			if(j == columns+1){
				var solutionTable = document.createElement('TABLE');
				solutionTable.border = '1';
			  
				var solutionTableBody = document.createElement('TBODY');
				solutionTable.appendChild(solutionTableBody);
				
					solutionRow = document.createElement('TR');
					solutionTableBody.appendChild(solutionRow);
			  
					for(var k = 0; k < columns; k++){
						var solutionTD = document.createElement('TD');
						solutionTD.width = '8';
						solutionTD.height = '30';
						solutionTD.id = 'solution' + i + k;
						solutionRow.appendChild(solutionTD);
					}
				td.appendChild(solutionTable);
			} else {
				td.className = 'passive';
				td.width = '50';
				td.height = '30';
				td.oncontextmenu = 'return false';
			}
			
		}
		rowsArray[i].appendChild(td);
	}
  }
  table.addEventListener('contextmenu', function(e){
	e.preventDefault();
  });
  divTable.appendChild(table);
}

function generateColorsInfo(){
	var tblColorsInfo = document.createElement('TABLE');
	
	tblColorsInfo.className = 'colorsInfo';
	
	var tblBodyColorsInfo = document.createElement('TBODY');
	tblColorsInfo.appendChild(tblBodyColorsInfo);
	
	var colorsArray = [0,0,0,0,0,0,0,0];
	
	for (var i = 0; i < colors; i++){
		var colorsTR = document.createElement('TR');
		var colorsTD = document.createElement('TD');
		
		colorsTR.appendChild(colorsTD);
		colorsTD.style.backgroundColor = assignColor(i);
		colorsTD.width = '45';
		colorsTD.height = '45';
		tblBodyColorsInfo.appendChild(colorsTR);
	}
	
	tblColorsInfo.style.display = 'inline-box';
	divColorsInfo.appendChild(tblColorsInfo);
}

function generateBtnCheck(){
	var button = document.createElement('INPUT');
	button.type = 'button';
	button.value = 'Check!';
	button.onclick = btnCheckHandler;
	
	divTable.appendChild(button);
	
	lblTimer.innerHTML = '00:00';
	
	divTable.appendChild(lblTimer);
}

function generateErrorMessage(){
	divError.innerHTML = "";
	divError.style.color = 'red';
	
	divTable.appendChild(divError);
}

function generateSolution(){
	var solutionRow = document.createElement('TR');
	
	for (var i = 0; i < columns; i++){
		var solutionTD = document.createElement('TD');
		solutionTD.style.background = code[i];
		solutionTD.width = '53.6';
		solutionTD.height = '42.8';
		solutionRow.appendChild(solutionTD);
	}
	divSolution.appendChild(solutionRow);
	
}

function generateCode(){
	if(columns == 4){
		code = [0,0,0,0];
	} else {
		code = [0,0,0,0,0];
	}
	for(var i = 0; i < code.length; i++){
		generateNumber(i);
	}
	convertNumbersToColors();
}

function generateNumber(i){
	code[i] = parseInt(Math.random()*colors);
	checkNumber(i);
}

function checkNumber(i){
	for(var j = i-1; j >= 0; j--){
		if(i != 0){
			if(code[i] == code[j]){
				generateNumber(i);
			}
		}
	}
}

function convertNumbersToColors(){
	for(var i = 0; i < code.length; i++){
		code[i] = assignColor(code[i]);
	}
}

function assignColor(i){
	switch(i){
		case 0:
			return 'red';
			break;
		case 1:
			return 'blue';
			break;
		case 2:
			return 'green';
			break;
		case 3:
			return 'yellow';
			break;
		case 4:
			return 'black';
			break;
		case 5:
			return 'grey';
			break;
		case 6:
			return 'pink';
			break;
		case 7:
			return 'brown';
	}
}

function codeAusgeben(){
	for(var i = 0; i < code.length; i++){
		console.log(code[i]);
	}
}

function activateCurrentRow(){
	deactivateAllRows();
	rowsArray[currentRow].childNodes[0].style.backgroundColor = 'green';
	for (var i = 1; i < columns+1; i++) {
		rowsArray[currentRow].childNodes[i].className = 'active';
	}
	assignClickHandler();
}

function deactivateAllRows(){
	for (var i = 0; i < rows; i++) {
		for (var j = 1; j < columns+1; j++) {
			rowsArray[i].childNodes[0].style.backgroundColor = 'white';
			rowsArray[i].childNodes[j].className = 'passive';
		}
	}
}

function assignClickHandler(){
	// Remove Handler from passive TDs
	var passiveTDs = document.getElementsByClassName('passive');
	
	for(var i = 0; i < passiveTDs.length; i++){
		passiveTDs[i].removeEventListener('click', tdLeftClickHandler);
		passiveTDs[i].removeEventListener('contextmenu', tdRightClickHandler);
	}
	
	// Activate Handler on active TDs
	var activeTDs = document.getElementsByClassName('active');

	for(var i = 0; i < activeTDs.length; i++){
		activeTDs[i].addEventListener('click', tdLeftClickHandler);
		activeTDs[i].addEventListener('contextmenu', tdRightClickHandler);
	}
}

function startTimer(){
	seconds = 0;
	minutes = 0;
	timer = setInterval(roundTimer, 1000);
}

function roundTimer(){
	seconds++;
	if(seconds >=60){
		seconds = 0;
		minutes++;
	}
	lblTimer.innerHTML = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

function stopTimer(){
	clearInterval(timer);
}

// Eventhandler
function tdLeftClickHandler(){
	this.style.backgroundColor = colorSwitch(this.style.backgroundColor);
}

function tdRightClickHandler(e){
	this.style.backgroundColor = reverseColorSwitch(this.style.backgroundColor);
	e.preventDefault();
}

function btnCheckHandler(){
	if(checkEmpty(rowsArray[currentRow], 'Game')){
		if(checkDoubles(rowsArray[currentRow], 'Game')){
			showErrorMessage("");
			compareWithSolution();
			if(rightColorRightPlace == columns){
				deactivateAllRows();
				rowsArray[currentRow].childNodes[0].style.backgroundColor = 'green';
				assignClickHandler();
				generateSolution();
				stopTimer();
				dialog.render();
			} else {
				if(currentRow > 0){
					currentRow--;
					activateCurrentRow();
				} else {
					generateSolution();
					stopTimer();
					dialog.render();
				}
			}
		} else {
			showErrorMessage("Keine doppelten Farben!");
		}
	} else {
		showErrorMessage("Keine leeren Felder!");
	}
}

// Methoden für Eventhandler
function colorSwitch(color){
	switch(color){
		case 'red':
			return 'blue';
			break;
		case 'blue':
			return 'green';
			break;
		case 'green':
			return 'yellow';
			break;
		case 'yellow':
			return 'black';
			break;
		case 'black':
			return 'grey';
			break;
		case 'grey':
			if(colors == 6){
				return 'red';
			}else{
				return 'pink';
			}
			break;
		case 'pink':
			return 'brown';
			break;
		case 'brown':
			return 'red';
			break;
		default:
			return 'red';
	}
}

function reverseColorSwitch(color){
	switch(color){
		case 'red':
			if(colors == 6){
				return 'grey';
			}else{
				return 'brown';
			}
			break;
		case 'blue':
			return 'red';
			break;
		case 'green':
			return 'blue';
			break;
		case 'yellow':
			return 'green';
			break;
		case 'black':
			return 'yellow';
			break;
		case 'grey':
			return 'black'
			break;
		case 'pink':
			return 'grey';
			break;
		case 'brown':
			return 'pink';
			break;
		default:
			if(colors == 6){
				return 'grey';
			}else{
				return 'brown';
			}
	}
}

function checkEmpty(row, string){
	var j;
	var k;
	if(string == 'Game'){
		j = 1;
		k = columns+1;
	} else {
		j = 0;
		k = columns;
	}
	var emptyTDs = 0;
	for (var i = j; i < k; i++) {
		if(row.childNodes[i].style.backgroundColor == ''){
			row.childNodes[i].style.borderColor = 'red';
			emptyTDs++;
		}
	}
	if(emptyTDs == 0){
		return true;
	} else {
		return false;
	}
}

function checkDoubles(row, string){
	var k;
	var l;
	if(string == 'Game'){
		k = 1;
		l = columns+1;
	} else {
		k = 0;
		l = columns;
	}
	for (var i = k; i < l-1; i++) {
		for (var j = i+1; j < l; j++){
			if(row.childNodes[i].style.backgroundColor == row.childNodes[j].style.backgroundColor){
				row.childNodes[i].style.borderColor = 'red';
				row.childNodes[j].style.borderColor = 'red';
				return false;
			}
		}
	}
	return true;
}

function compareWithSolution(){
	var rightColor = 0;
	rightColorRightPlace = 0;
	
	for (var i = 0; i < code.length; i++){
		if (rowsArray[currentRow].childNodes[i+1].style.backgroundColor == code[i]){
			rightColorRightPlace++;
		}
	}
	for (var i = 1; i < code.length+1; i++){
		for (var j = 0; j < code.length; j++){
			if (rowsArray[currentRow].childNodes[i].style.backgroundColor == code[j]){
				rightColor++;
			}
		}
	}
	fillSolutionTable(rightColorRightPlace, rightColor);
}

function fillSolutionTable(rightColorRightPlace, rightColor){
	for (var i = 0; i < rightColorRightPlace; i++){
		var currentSolutionArray = document.getElementById('solution' + currentRow + i);
		currentSolutionArray.style.backgroundColor = 'green';
	}
	for (var i = rightColorRightPlace; i < rightColor; i++){
		var currentSolutionArray = document.getElementById('solution' + currentRow + i);
		currentSolutionArray.style.backgroundColor = 'red';
	}
}

function showErrorMessage(errorMessage){
	divError.innerHTML = errorMessage;
}

// **********
// * DIALOG *
// **********
function Dialog(){
	this.render = function(string){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		
		divDialogOverlay.style.display = 'block';
		divDialogOverlay.style.height = winH+'px';
		divDialogBox.style.left = (winW/2) - (300 * .5)+'px';
		divDialogBox.style.top = '150px';
		divDialogBox.style.display = 'block';
		
		var triesNeeded = rows-currentRow;
		
		if(string != 'Score'){
			var btnNewNextScore = document.createElement('INPUT');
			btnNewNextScore.type = 'button';
			
			if(numberOfGames == '' || numberOfGames != currentGame){
				if(numberOfGames == ''){
					btnNewNextScore.value = 'Neues Spiel';
				} else {
					btnNewNextScore.value = 'Nächste Runde';
				}
			
			} else {
				btnNewNextScore.value = 'Auswertung anzeigen';
			}
			
			btnNewNextScore.onclick = dialog.btnNewNextHandler;
			dialogBoxFoot.appendChild(btnNewNextScore);
		
			var dialogBodyBoxText = '<b>Benötigte Zeit:</b> <br \>' + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
		
			if(rightColorRightPlace == columns){
				dialogBoxHead.innerHTML = '<b>Gewonnen</b>';
				dialogBodyBoxText = dialogBodyBoxText + '<br \> <b>Benötigte Versuche:</b> <br \>' + triesNeeded;
			} else {
				dialogBoxHead.innerHTML = '<b>Verloren</b>';
			}
			
			if(currentPlayer != 0){
				if(currentPlayer == 1){
					secondsPlayer2 = secondsPlayer2 + seconds;
					minutesPlayer2 = minutesPlayer2 + minutes;
					triesPlayer2 = triesPlayer2 + triesNeeded;
					if(rightColorRightPlace == columns){
						scorePlayer2++;
					} else {
						scorePlayer1++;
					}
				} else {
					secondsPlayer1 = secondsPlayer1 + seconds;
					minutesPlayer1 = minutesPlayer1 + minutes;
					triesPlayer1 = triesPlayer1 + triesNeeded;
					if(rightColorRightPlace == columns){
						scorePlayer1++;
					} else {
						scorePlayer2++;
					}
				}
			}
			dialogBoxBody.innerHTML = dialogBodyBoxText;
		} else {
			dialogBoxHead.innerHTML = '<b>Auswertung</b>';
			calculateAverage();
			
			var divPlayerNames = document.createElement('DIV');
			var divPlayerScores = document.createElement('DIV');
			var divPlayerTimes = document.createElement('DIV');
			var divPlayerTries = document.createElement('DIV');
			
			divPlayerNames.innerHTML = 'Spieler 1   -   Spieler 2';
			divPlayerScores.innerHTML = scorePlayer1 + '   -   ' + scorePlayer2;
			divPlayerTimes.innerHTML = (minutesPlayer1 ? (minutesPlayer1 > 9 ? minutesPlayer1 : "0" + minutesPlayer1) : "00") + ":" + (secondsPlayer1 > 9 ? secondsPlayer1 : "0" + secondsPlayer1) + 
			'   -   ' + (minutesPlayer2 ? (minutesPlayer2 > 9 ? minutesPlayer2 : "0" + minutesPlayer2) : "00") + ":" + (secondsPlayer2 > 9 ? secondsPlayer2 : "0" + secondsPlayer2);
			divPlayerTries.innerHTML = triesPlayer1 + '   -   ' + triesPlayer2;
			
			
			dialogBoxBody.appendChild(divPlayerNames);
			dialogBoxBody.appendChild(divPlayerScores);
			dialogBoxBody.appendChild(divPlayerTimes);
			dialogBoxBody.appendChild(divPlayerTries);
		}
		
		var btnMenu = document.createElement('INPUT');
		btnMenu.type = 'button';
		btnMenu.value = 'Menü';
		btnMenu.onclick = dialog.btnMenuHandler;
		
		dialogBoxFoot.appendChild(btnMenu);
		
		
	}
	
	this.btnNewNextHandler = function(){
		removeDialog();
		removeGame();
		if(numberOfGames == '' || numberOfGames != currentGame){
			if(numberOfGames == ''){
				initGame();
			} else {
				initCodeSelect();
			}
		} else {
			dialog.render('Score');
		}
		
	}
	
	this.btnMenuHandler = function(){
		removeDialog();
		removeGame();
		initMenu();
	}
}

function calculateAverage(){
	var actualMinutes = 0;
	var additionalSeconds = 0;
	
	// Player 1
	triesPlayer1 = triesPlayer1/(numberOfGames/2);
	triesPlayer1 = triesPlayer1.toFixed(1);
	
	secondsPlayer1 = secondsPlayer1/(numberOfGames/2);
	minutesPlayer1 = minutesPlayer1/(numberOfGames/2);
	
	actualMinutes = Math.floor(minutesPlayer1);
	additionalSeconds = minutesPlayer1 - actualMinutes;
	minutesPlayer1 = actualMinutes;
	additionalSeconds = additionalSeconds * 60;
	secondsPlayer1 = secondsPlayer1 + additionalSeconds;
	if(secondsPlayer1 >= 60){
		secondsPlayer1 = secondsPlayer1 - 60;
		minutesPlayer1++;
	}
	secondsPlayer1 = Math.round(secondsPlayer1);
	
	
	// Player 2
	triesPlayer2 = triesPlayer2/(numberOfGames/2);
	triesPlayer2 = triesPlayer2.toFixed(1);
	
	secondsPlayer2 = secondsPlayer2/(numberOfGames/2);
	minutesPlayer2 = minutesPlayer2/(numberOfGames/2);
	
	actualMinutes = Math.floor(minutesPlayer2);
	additionalSeconds = minutesPlayer2 - actualMinutes;
	minutesPlayer2 = actualMinutes;
	additionalSeconds = additionalSeconds * 60;
	secondsPlayer2 = secondsPlayer2 + additionalSeconds;
	if(secondsPlayer2 >= 60){
		secondsPlayer2 = secondsPlayer2 - 60;
		minutesPlayer2++;
	}
	secondsPlayer2 = Math.round(secondsPlayer2);
}

function checkWinner(){
	if(scorePlayer1 > scorePlayer2){
		return 1;
	} else {
		if(scorePlayer1 == scorePlayer2){
			if(triesPlayer1 < triesPlayer2){
				return 1;
			} else {
				
			}
		}
	}
}

// ***********
// * REMOVES *
// ***********

// Menü
function removeMenu(){
	removeGameModeButtons();
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	removeManualHighscoreButtons();
}

function removeGameModeButtons(){
	while(divGameModeButtons.firstChild){
		divGameModeButtons.removeChild(divGameModeButtons.firstChild);
	}
}

function removeGameModeSelect(){
	while(divGameModeSelect.firstChild){
		divGameModeSelect.removeChild(divGameModeSelect.firstChild);
	}
}

function removeGameModeInfo(){
	while(divGameModeInfo.firstChild){
		divGameModeInfo.removeChild(divGameModeInfo.firstChild);
	}
}

function removeRoundsSelect(){
	removeRoundsSelectOptions();
	while(divRoundsSelect.firstChild){
		divRoundsSelect.removeChild(divRoundsSelect.firstChild);
	}
}

function removeRoundsSelectOptions(){
	while(roundsSelect.firstChild){
		roundsSelect.removeChild(roundsSelect.firstChild);
	}
}

function removeGameStartButton(){
	while(divGameStartButton.firstChild){
		divGameStartButton.removeChild(divGameStartButton.firstChild);
	}
}

function removeManualHighscoreButtons(){
	while(divManualHighscoreButtons.firstChild){
		divManualHighscoreButtons.removeChild(divManualHighscoreButtons.firstChild);
	}
}

// CodeSelect
function removeCodeSelect(){
	while(divCodeSelect.firstChild){
		divCodeSelect.removeChild(divCodeSelect.firstChild);
	}
}

// Game
function removeGame(){
	removeSolution();
	removeTable();
	removeColorsInfo();
}

function removeSolution(){
	while(divSolution.firstChild){
		divSolution.removeChild(divSolution.firstChild);
	}
}

function removeTable(){
	while(divTable.firstChild){
		divTable.removeChild(divTable.firstChild);
	}
}

function removeColorsInfo(){
	while(divColorsInfo.firstChild){
		divColorsInfo.removeChild(divColorsInfo.firstChild);
	}
}

// Dialog
function removeDialog(){
	divDialogOverlay.style.display = 'none';
	divDialogBox.style.display = 'none';
	removeDialogBoxHead();
	removeDialogBoxBody();
	removeDialogBoxFoot();
}

function removeDialogBoxHead(){
	while(divDialogBoxHead.firstChild){
		divDialogBoxHead.removeChild(divDialogBoxHead.firstChild);
	}
}

function removeDialogBoxBody(){
	while(divDialogBoxBody.firstChild){
		divDialogBoxBody.removeChild(divDialogBoxBody.firstChild);
	}
}

function removeDialogBoxFoot(){
	while(divDialogBoxFoot.firstChild){
		divDialogBoxFoot.removeChild(divDialogBoxFoot.firstChild);
	}
}

// START
var divGameModeButtons = document.getElementById('gameModeButtons');
var divGameModeSelect = document.getElementById('gameModeSelect');
var divGameModeInfo = document.getElementById('gameModeInfo');
var divRoundsSelect = document.getElementById('roundsSelect');
var divGameStartButton = document.getElementById('gameStartButton');
var divManualHighscoreButtons = document.getElementById('manualHighscoreButtons');

var roundsSelect = document.createElement('SELECT');

var divCodeSelect = document.getElementById('codeSelect');
var trCustomCode;

var divSolution = document.getElementById('solution');
var divTable = document.getElementById('table');
var divColorsInfo = document.getElementById('colorsInfo');
var divError = document.getElementById('errorMessage');

var lblTimer = document.createElement('LABEL');

var divDialogOverlay = document.getElementById('dialogOverlay');
var divDialogBox = document.getElementById('dialogBox');
var divDialogBoxHead = document.getElementById('dialogBoxHead');
var divDialogBoxBody = document.getElementById('dialogBoxBody');
var divDialogBoxFoot = document.getElementById('dialogBoxFoot');

var seconds;
var minutes;
var timer;


var rows;
var columns;
var colors;

var numberOfGames;
var currentGame;

var currentPlayer;

var scorePlayer1;
var scorePlayer2;
var triesPlayer1;
var triesPlayer2;
var minutesPlayer1;
var minutesPlayer2;
var secondsPlayer1;
var secondsPlayer2;

var rowsArray;
var solutionArray;

var code;

var currentRow;

var rightColorRightPlace;

var dialog = new Dialog();

initMenu();