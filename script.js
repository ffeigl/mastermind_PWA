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
	btnSinglePlayer.className = 'btnMenu ';
	btnSinglePlayer.value = 'Ein Spieler';
	btnSinglePlayer.onclick = btnSinglePlayerHandler;
	
	divGameModeButtons.appendChild(btnSinglePlayer);

	var btnTwoPlayer = document.createElement('INPUT');
	btnTwoPlayer.type = 'button';
	btnTwoPlayer.className = 'btnMenu';
	btnTwoPlayer.value = 'Zwei Spieler';
	btnTwoPlayer.onclick = btnTwoPlayerHandler;
	
	divGameModeButtons.appendChild(btnTwoPlayer);
}

function generateManualHighscoreButtons(){
	var btnManual = document.createElement('INPUT');
	btnManual.type = 'button';
	btnManual.className = 'btnMenu';
	btnManual.value = 'Spielanleitung';
	btnManual.onclick = btnManualHandler;
	
	divManualHighscoreButtons.appendChild(btnManual);

	var btnHighscore = document.createElement('INPUT');
	btnHighscore.type = 'button';
	btnHighscore.className = 'btnMenu';
	btnHighscore.value = 'Highscore';
	btnHighscore.onclick = btnHighscoreHandler;
	
	divManualHighscoreButtons.appendChild(btnHighscore);
}

function generateGameModeSelect(){
	rows = 8;
	columns = 4;
	colors = 6;
	
	var divGameModeNormal = document.createElement('DIV');
	var divGameModeMaster = document.createElement('DIV');
	divGameModeNormal.className = 'gameModeRadios';
	divGameModeMaster.className = 'gameModeRadios';
	
	rdoNormal = document.createElement('INPUT');
	rdoNormal.type = 'radio';
	rdoNormal.name = 'gameModeSelecter';
	rdoNormal.onclick = rdoNormalHandler;
	rdoNormal.checked = 'true';
	
	var lblNormal = document.createElement('LABEL');
	lblNormal.innerHTML = 'Normal';
	lblNormal.onclick = rdoNormalHandler;
	
	divGameModeNormal.appendChild(rdoNormal);
	divGameModeNormal.appendChild(lblNormal);
	
	rdoMaster = document.createElement('INPUT');
	rdoMaster.type = 'radio';
	rdoMaster.name = 'gameModeSelecter';
	rdoMaster.onclick = rdoMasterHandler;
	
	var lblMaster = document.createElement('LABEL');
	lblMaster.innerHTML = 'Master';
	lblMaster.onclick = rdoMasterHandler;
	
	divGameModeMaster.appendChild(rdoMaster);
	divGameModeMaster.appendChild(lblMaster);
	
	divGameModeSelect.appendChild(divGameModeNormal);
	divGameModeSelect.appendChild(divGameModeMaster);
	
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
	btnGameStart.id = 'btnGameStart';
	btnGameStart.className = 'btnMenu';
	
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
	removeManualHighscoreText();
	
	removeHighlightButton();
	highlightButton(this);
	
	roundsSelect.value = '';
	
	
	generateGameModeSelect();
	generateGameStartButton();
	
	divGameModeInfoDiv.style.border = '2px solid black';
}

function btnTwoPlayerHandler(){
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	removeManualHighscoreText();
	
	removeHighlightButton();
	highlightButton(this);
	
	generateGameModeSelect();
	generateRoundsSelect();
	generateGameStartButton();
	
	divGameModeInfoDiv.style.border = '2px solid black';
}

function rdoNormalHandler(){
	rdoNormal.checked = 'true';
	
	rows = 8;
	columns = 4;
	colors = 6;
	
	removeGameModeInfo();
	generateGameModeInfo();
}

function rdoMasterHandler(){
	rdoMaster.checked = 'true';
	
	rows = 10;
	columns = 5;
	colors = 8;
	
	removeGameModeInfo();
	generateGameModeInfo();
}

function btnManualHandler(){
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	removeManualHighscoreText();
	
	removeHighlightButton();
	highlightButton(this);
	
	console.log('Anleitung');
}

function btnHighscoreHandler(){
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	removeManualHighscoreText();
	
	removeHighlightButton();
	highlightButton(this);
	
	var hsGamesNormal;
	var hsTriesNormal;
	var hsMinutesNormal;
	var hsSecondsNormal;
	var hsGamesMaster;
	var hsTriesMaster;
	var hsMinutesMaster;
	var hsSecondsMaster;
	
	getHighscores();
	generateHighscores();
}

function btnResetHighscoreHandler(){
	localStorage.clear();
	btnHighscoreHandler();
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

function getHighscores(){
	if(localStorage.getItem('hsGamesNormal') == null){
		hsGamesNormal = 0;
	}else{
		hsGamesNormal = localStorage.getItem('hsGamesNormal');
	}
	
	if(localStorage.getItem('hsTriesNormal') == null){
		hsTriesNormal = 'N/A';
	}else{
		hsTriesNormal = localStorage.getItem('hsTriesNormal');
	}
	
	if(localStorage.getItem('hsMinutesNormal') == null){
		hsMinutesNormal = 'N/A';
	}else{
		hsMinutesNormal = localStorage.getItem('hsMinutesNormal');
	}
	
	if(localStorage.getItem('hsSecondsNormal') == null){
		hsSecondsNormal = 'N/A';
	}else{
		hsSecondsNormal = localStorage.getItem('hsSecondsNormal');
	}
	
	if(localStorage.getItem('hsGamesMaster') == null){
		hsGamesMaster = 0;
	}else{
		hsGamesMaster = localStorage.getItem('hsGamesMaster');
	}
	
	if(localStorage.getItem('hsTriesMaster') == null){
		hsTriesMaster = 'N/A';
	}else{
		hsTriesMaster = localStorage.getItem('hsTriesMaster');
	}
	
	if(localStorage.getItem('hsMinutesMaster') == null){
		hsMinutesMaster = 'N/A';
	}else{
		hsMinutesMaster = localStorage.getItem('hsMinutesMaster');
	}
	
	if(localStorage.getItem('hsSecondsMaster') == null){
		hsSecondsMaster = 'N/A';
	}else{
		hsSecondsMaster = localStorage.getItem('hsSecondsMaster');
	}
}

function generateHighscores(){
	var tableHighscore = document.createElement('TABLE');
	tableHighscore.width = '300px';
	tableHighscore.style.textAlign = 'center';
	var tblBodyHighscore = document.createElement('TBODY');
	tableHighscore.appendChild(tblBodyHighscore);
	
	trHighscore0 = document.createElement('TR');
	trHighscore1 = document.createElement('TR');
	trHighscore2 = document.createElement('TR');
	trHighscore3 = document.createElement('TR');
	
	tblBodyHighscore.appendChild(trHighscore0);
	tblBodyHighscore.appendChild(trHighscore1);
	tblBodyHighscore.appendChild(trHighscore2);
	tblBodyHighscore.appendChild(trHighscore3);
	
	tdHighscore00 = document.createElement('TD');
	tdHighscore00.style.width = '100px';
	tdHighscore01 = document.createElement('TD');
	tdHighscore01.appendChild(document.createTextNode('Normal'));
	tdHighscore01.style.width = '75px';
	tdHighscore02 = document.createElement('TD');
	tdHighscore02.appendChild(document.createTextNode('Master'));
	tdHighscore02.style.width = '75px';
	
	trHighscore0.appendChild(tdHighscore00);
	trHighscore0.appendChild(tdHighscore01);
	trHighscore0.appendChild(tdHighscore02);
	
	tdHighscore10 = document.createElement('TD');
	tdHighscore10.appendChild(document.createTextNode('Spiele:'));
	tdHighscore11 = document.createElement('TD');
	tdHighscore11.appendChild(document.createTextNode(hsGamesNormal));
	tdHighscore12 = document.createElement('TD');
	tdHighscore12.appendChild(document.createTextNode(hsGamesMaster));
	
	trHighscore1.appendChild(tdHighscore10);
	trHighscore1.appendChild(tdHighscore11);
	trHighscore1.appendChild(tdHighscore12);
	
	tdHighscore20 = document.createElement('TD');
	tdHighscore20.appendChild(document.createTextNode('Versuche:'));
	tdHighscore21 = document.createElement('TD');
	tdHighscore21.appendChild(document.createTextNode(hsTriesNormal));
	tdHighscore22 = document.createElement('TD');
	tdHighscore22.appendChild(document.createTextNode(hsTriesMaster));
	
	trHighscore2.appendChild(tdHighscore20);
	trHighscore2.appendChild(tdHighscore21);
	trHighscore2.appendChild(tdHighscore22);
	
	
	var hsTimeNormal;
	var hsTimeMaster;
	
	if(hsMinutesNormal == 'N/A'){
		hsTimeNormal = 'N/A';
	} else {
		hsTimeNormal = (hsMinutesNormal ? (hsMinutesNormal > 9 ? hsMinutesNormal : "0" + hsMinutesNormal) : "00") + ":" + (hsSecondsNormal > 9 ? hsSecondsNormal : "0" + hsSecondsNormal);
	}
	
	if(hsMinutesMaster == 'N/A'){
		hsTimeMaster = 'N/A';
	} else {
		hsTimeMaster = (hsMinutesMaster ? (hsMinutesMaster > 9 ? hsMinutesMaster : "0" + hsMinutesMaster) : "00") + ":" + (hsSecondsMaster > 9 ? hsSecondsMaster : "0" + hsSecondsMaster);
	}
	
	tdHighscore30 = document.createElement('TD');
	tdHighscore30.appendChild(document.createTextNode('Zeit:'));
	tdHighscore31 = document.createElement('TD');
	tdHighscore31.appendChild(document.createTextNode(hsTimeNormal));
	tdHighscore32 = document.createElement('TD');
	tdHighscore32.appendChild(document.createTextNode(hsTimeMaster));
	
	trHighscore3.appendChild(tdHighscore30);
	trHighscore3.appendChild(tdHighscore31);
	trHighscore3.appendChild(tdHighscore32);
	
	
	// *** TEST ***
	var btnResetHighscore = document.createElement('INPUT');
	btnResetHighscore.type = 'button';
	btnResetHighscore.className = 'btnMenu';
	btnResetHighscore.value = 'Highscores zurücksetzen';
	btnResetHighscore.style.width = '296px';
	btnResetHighscore.onclick = btnResetHighscoreHandler;
	
	divManualHighscoreText.appendChild(tableHighscore);
	divManualHighscoreText.appendChild(btnResetHighscore);
	
	divManualHighscoreText.style.border = '2px solid black';
	
}

function removeHighlightButton(){
	var highlightedButtons = document.getElementsByClassName('highlightButtons');
	for(var i = 0; i < highlightedButtons.length; i++){
		highlightedButtons[i].className = 'btnMenu';
	}
}

function highlightButton(button){
	button.className = 'btnMenu highlightButtons';
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
	generateCodeErrorMessage();
	
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
	
	divGameNr.innerHTML = 'Runde <b>' + currentGame + '</b> / ' + numberOfGames;
	divPlayerNr.innerHTML = 'Kombinationsauswahl: <b>Spieler ' + currentPlayer + '</b>';
	
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

function generateCodeErrorMessage(){
	divCodeErrorMessage.innerHTML = '';
	divCodeErrorMessage.style.color = 'red';
	
	divCodeSelect.appendChild(divCodeErrorMessage);
}

// Eventhandler
function btnSetCodeHandler(){
	if(checkEmpty(trCustomCode, 'Code')){
		if(checkDoubles(trCustomCode, 'Code')){
			showCodeErrorMessage('');
			setCustomCode();
			removeCodeSelect();
			initGame();
		} else {
			showCodeErrorMessage('Keine doppelten Farben!');
		}
	} else {
		showCodeErrorMessage('Keine leeren Felder!');
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

function showCodeErrorMessage(errorMessage){
	divCodeErrorMessage.innerHTML = errorMessage;
}

// **********
// ** GAME **
// **********

// Initialize
function initGame(){
	generateTable();
	generateBtnCheck();
	generateGameErrorMessage();
	generateColorsInfo();
	
	currentRow = rows-1;
	if(numberOfGames == ''){
		generateCode();
	} else {
		generateGameInfo();
	}
	codeAusgeben();
	activateCurrentRow();
	
	startTimer();
}

function generateGameInfo(){
	var divGameNr = document.createElement('DIV');
	var divPlayerNr = document.createElement('DIV');
	currentPlayer = currentGame % 2;
	if(currentPlayer == 0){
		currentPlayer = 1;
	} else {
		currentPlayer = 2;
	}
	
	divGameNr.innerHTML = 'Runde ' + currentGame;
	divPlayerNr.innerHTML = '<b>Spieler ' + currentPlayer + '</b>';
	
	divCurrentPlayer.appendChild(divGameNr);
	divCurrentPlayer.appendChild(divPlayerNr);
}

function generateTable() {
  var table = document.createElement('TABLE');
  divTable.className = 'table';
  table.border = '1';
  table.id = 'gameTable';

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
	tblColorsInfo.style.height = document.getElementById('gameTable').offsetHeight + 'px';
	tblColorsInfo.style.width = '25px';
	
	var tblBodyColorsInfo = document.createElement('TBODY');
	tblColorsInfo.appendChild(tblBodyColorsInfo);
	
	var colorsArray = [0,0,0,0,0,0,0,0];
	
	for (var i = 0; i < colors; i++){
		var colorsTR = document.createElement('TR');
		var colorsTD = document.createElement('TD');
		
		colorsTR.appendChild(colorsTD);
		colorsTD.style.backgroundColor = assignColor(i);
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
	lblTimer.id = 'timer';
	lblTimer.style.position = 'absolute';
	lblTimer.style.left = document.getElementById('gameTable').offsetWidth + 10 + 'px';
	
	divTable.appendChild(lblTimer);
}

function generateGameErrorMessage(){
	divGameError.innerHTML = "";
	divGameError.style.color = 'red';
	
	divTable.appendChild(divGameError);
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
			showGameErrorMessage('');
			compareWithSolution();
			if(rightColorRightPlace == columns){
				deactivateAllRows();
				rowsArray[currentRow].childNodes[0].style.backgroundColor = 'green';
				assignClickHandler();
				generateSolution();
				stopTimer();
				setHighscore();
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
			showGameErrorMessage("Keine doppelten Farben!");
		}
	} else {
		showGameErrorMessage("Keine leeren Felder!");
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
	
	for (var i = j; i < k; i++) {
		row.childNodes[i].style.borderColor = '';
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
	
	var doubleTDs = 0;
	for (var i = k; i < l-1; i++) {
		for (var j = i+1; j < l; j++){
			if(row.childNodes[i].style.backgroundColor == row.childNodes[j].style.backgroundColor){
				row.childNodes[i].style.borderColor = 'red';
				row.childNodes[j].style.borderColor = 'red';
				doubleTDs++;
			}
		}
	}
	if(doubleTDs == 0){
		return true;
	} else {
		return false;
	}
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

function showGameErrorMessage(errorMessage){
	divGameError.innerHTML = errorMessage;
}

function setHighscore(){
	if(numberOfGames == ''){
		// Highscores für Normal
		if(columns == 4){
			
			// Anzahl der Spiele
			var allGames;
			if(localStorage.getItem('hsGamesNormal') == null){
				localStorage.setItem('hsGamesNormal', 1);
			}else{
				allGames = localStorage.getItem('hsGamesNormal');
				allGames++;
				localStorage.setItem('hsGamesNormal', allGames);
			}
			
			// Wenigste Versuche
			var triesNeeded = rows-currentRow;
			if(localStorage.getItem('hsTriesNormal') == null){
				localStorage.setItem('hsTriesNormal', triesNeeded);
			} else {
				if(triesNeeded < localStorage.getItem('hsTriesNormal')){
					localStorage.setItem('hsTriesNormal', triesNeeded);
				}
			}
			
			// Beste Zeit
			if(localStorage.getItem('hsMinutesNormal') == null){
				localStorage.setItem('hsMinutesNormal', minutes);
				localStorage.setItem('hsSecondsNormal', seconds);
			} else {
				if(minutes < localStorage.getItem('hsMinutesNormal')){
					localStorage.setItem('hsMinutesNormal', minutes);
					localStorage.setItem('hsSecondsNormal', seconds);
				} else {
					if(minutes == localStorage.getItem('hsMinutesNormal') && seconds < localStorage.getItem('hsSecondsNormal')){
						localStorage.setItem('hsMinutesNormal', minutes);
						localStorage.setItem('hsSecondsNormal', seconds);
					}
				}
			}
		// Highscores für Master
		} else {
			
			// Anzahl der Spiele
			var allGames;
			if(localStorage.getItem('hsGamesMaster') == null){
				localStorage.setItem('hsGamesMaster', 1);
			}else{
				allGames = localStorage.getItem('hsGamesMaster');
				allGames++;
				localStorage.setItem('hsGamesMaster', allGames);
			}
			
			// Wenigste Versuche
			var triesNeeded = rows-currentRow;
			if(localStorage.getItem('hsTriesMaster') == null){
				localStorage.setItem('hsTriesMaster', triesNeeded);
			} else {
				if(triesNeeded < localStorage.getItem('hsTriesMaster')){
					localStorage.setItem('hsTriesMaster', triesNeeded);
				}
			}
			
			// Beste Zeit
			if(localStorage.getItem('hsMinutesMaster') == null){
				localStorage.setItem('hsMinutesMaster', minutes);
				localStorage.setItem('hsSecondsMaster', seconds);
			} else {
				if(minutes < localStorage.getItem('hsMinutesMaster')){
					localStorage.setItem('hsMinutesMaster', minutes);
					localStorage.setItem('hsSecondsMaster', seconds);
				} else {
					if(minutes == localStorage.getItem('hsMinutesMaster') && seconds < localStorage.getItem('hsSecondsMaster')){
						localStorage.setItem('hsMinutesMaster', minutes);
						localStorage.setItem('hsSecondsMaster', seconds);
					}
				}
			}
		}
	}
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
			
			var divTitle = document.createElement('DIV');
			divTitle.className = 'table';
			divTitle.style.textAlign = 'left';
			
			var divPlayerNamesTitle = document.createElement('DIV');
			var divPlayerScoresTitle = document.createElement('DIV');
			var divPlayerTimesTitle = document.createElement('DIV');
			var divPlayerTriesTitle = document.createElement('DIV');
			var divWinnerTitle = document.createElement('DIV');
			
			divPlayerNamesTitle.innerHTML = '\xa0';
			divPlayerNamesTitle.style.color = 'white';
			divPlayerScoresTitle.innerHTML = '<b>Punkte:</b>';
			divPlayerTimesTitle.innerHTML = '<b>&Oslash Zeit:</b>';
			divPlayerTriesTitle.innerHTML = '<b>&Oslash Versuche:</b>';
			divWinnerTitle.innerHTML = '<b>Gewinner:</b>';
			
			
			divTitle.appendChild(divPlayerNamesTitle);
			divTitle.appendChild(divPlayerScoresTitle);
			divTitle.appendChild(divPlayerTriesTitle);
			divTitle.appendChild(divPlayerTimesTitle);
			divTitle.appendChild(divWinnerTitle);
			
			
			var divResult = document.createElement('DIV');
			
			var divPlayerNames = document.createElement('DIV');
			var divPlayerScores = document.createElement('DIV');
			var divPlayerTimes = document.createElement('DIV');
			var divPlayerTries = document.createElement('DIV');
			var divWinner = document.createElement('DIV');
			
			divPlayerNames.innerHTML = 'Spieler 1' + '\xa0\xa0\xa0-\xa0\xa0\xa0' + 'Spieler 2';
			divPlayerScores.innerHTML = scorePlayer1 + '\xa0\xa0\xa0-\xa0\xa0\xa0' + scorePlayer2;
			divPlayerTimes.innerHTML = (minutesPlayer1 ? (minutesPlayer1 > 9 ? minutesPlayer1 : "0" + minutesPlayer1) : "00") + ":" + (secondsPlayer1 > 9 ? secondsPlayer1 : "0" + secondsPlayer1) + 
			'\xa0\xa0\xa0-\xa0\xa0\xa0' + (minutesPlayer2 ? (minutesPlayer2 > 9 ? minutesPlayer2 : "0" + minutesPlayer2) : "00") + ":" + (secondsPlayer2 > 9 ? secondsPlayer2 : "0" + secondsPlayer2);
			divPlayerTries.innerHTML = triesPlayer1 + '\xa0\xa0\xa0-\xa0\xa0\xa0' + triesPlayer2;
			
			divWinner.innerHTML = 'Spieler ' + checkWinner();
			
			divResult.appendChild(divPlayerNames);
			divResult.appendChild(divPlayerScores);
			divResult.appendChild(divPlayerTries);
			divResult.appendChild(divPlayerTimes);
			divResult.appendChild(divWinner);
			
			dialogBoxBody.appendChild(divTitle);
			dialogBoxBody.appendChild(divResult);
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
				if(triesPlayer1 == triesPlayer2){
					if(minutesPlayer1 < minutesPlayer2){
						return 1;
					} else {
						if(minutesPlayer1 == minutesPlayer2){
							if(secondsPlayer1 < secondsPlayer2){
								return 1;
							} else {
								return 2;
							}
						} else {
							return 2;
						}
					}
				} else {
					return 2;
				}
			}
		} else {
			return 2;
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
	removeManualHighscoreText();
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
	divGameModeInfoDiv.style.border = '';
}

function removeManualHighscoreButtons(){
	while(divManualHighscoreButtons.firstChild){
		divManualHighscoreButtons.removeChild(divManualHighscoreButtons.firstChild);
	}
}

function removeManualHighscoreText(){
	while(divManualHighscoreText.firstChild){
		divManualHighscoreText.removeChild(divManualHighscoreText.firstChild);
	}
	divManualHighscoreText.style.border = '';
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
	removeGameInfo();
	removeTable();
	removeColorsInfo();
}

function removeSolution(){
	while(divSolution.firstChild){
		divSolution.removeChild(divSolution.firstChild);
	}
}

function removeGameInfo(){
	while(divCurrentPlayer.firstChild){
		divCurrentPlayer.removeChild(divCurrentPlayer.firstChild);
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
var divGameModeInfoDiv = document.getElementById('gameModeInfoDiv');
var divGameModeSelect = document.getElementById('gameModeSelect');
var divGameModeInfo = document.getElementById('gameModeInfo');
var divRoundsSelect = document.getElementById('roundsSelect');
var divGameStartButton = document.getElementById('gameStartButton');
var divManualHighscoreButtons = document.getElementById('manualHighscoreButtons');
var divManualHighscoreText = document.getElementById('manualHighscoreText');

var roundsSelect = document.createElement('SELECT');

var divCodeSelect = document.getElementById('codeSelect');
var divCodeErrorMessage = document.getElementById('codeErrorMessage');
var trCustomCode;

var divCurrentPlayer = document.getElementById('currentPlayer');
var divSolution = document.getElementById('solution');
var divTable = document.getElementById('table');
var divColorsInfo = document.getElementById('colorsInfo');
var divGameError = document.getElementById('gameErrorMessage');

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

var rdoNormal;
var rdoMaster;

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