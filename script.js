// **********
// ** MENU **
// **********

// Initialize
function initMenu(){
	
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
	var test = document.createElement('LABEL');
	test.innerHTML = 'Das ist ein Test';
	
	divRoundsSelect.appendChild(test);
}

function generateGameStartButton(){
	var btnGameStart = document.createElement('INPUT');
	btnGameStart.type = 'button';
	btnGameStart.value = 'Start';
	btnGameStart.onclick = btnGameStartHandler;
	
	divGameStartButton.appendChild(btnGameStart);
}

// Eventhandler
function btnSinglePlayerHandler(){
	removeGameModeSelect();
	removeGameModeInfo();
	removeRoundsSelect();
	removeGameStartButton();
	
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
	removeMenu();
	initGame();
}

// Methoden für Eventhandler
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
	while(divRoundsSelect.firstChild){
		divRoundsSelect.removeChild(divRoundsSelect.firstChild);
	}
}

function removeGameStartButton(){
	while(divGameStartButton.firstChild){
		divGameStartButton.removeChild(divGameStartButton.firstChild);
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
	
	generateCode();
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
	error.innerHTML = "";
	error.style.color = 'red';
	
	divTable.appendChild(error);
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
	if(checkEmpty()){
		if(checkDoubles()){
				showErrorMessage("");
			compareWithSolution();
			if(rightColorRightPlace == columns){
				deactivateAllRows();
				rowsArray[currentRow].childNodes[0].style.backgroundColor = 'green';
				assignClickHandler();
				generateSolution();
				stopTimer();
				customAlert.render();
			} else {
				if(currentRow > 0){
					currentRow--;
					activateCurrentRow();
				} else {
					generateSolution();
					stopTimer();
					customAlert.render();
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

function checkEmpty(){
	var emptyTDs = 0;
	for (var i = 1; i < columns+1; i++) {
		if(rowsArray[currentRow].childNodes[i].style.backgroundColor == ''){
			rowsArray[currentRow].childNodes[i].style.borderColor = 'red';
			emptyTDs++;
		}
	}
	if(emptyTDs == 0){
		return true;
	} else {
		return false;
	}
}

function checkDoubles(){
	for (var i = 1; i < columns; i++) {
		for (var j = i+1; j < columns+1; j++){
			if(rowsArray[currentRow].childNodes[i].style.backgroundColor == rowsArray[currentRow].childNodes[j].style.backgroundColor){
				rowsArray[currentRow].childNodes[i].style.borderColor = 'red';
				rowsArray[currentRow].childNodes[j].style.borderColor = 'red';
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
	error.innerHTML = errorMessage;
}

// **********
// * DIALOG *
// **********
function CustomAlert(){
	this.render = function(){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		
		divDialogOverlay.style.display = 'block';
		divDialogOverlay.style.height = winH+'px';
		divDialogBox.style.left = (winW/2) - (300 * .5)+'px';
		divDialogBox.style.top = '150px';
		divDialogBox.style.display = 'block';
		
		var btnNewNext = document.createElement('INPUT');
		btnNewNext.type = 'button';
		btnNewNext.value = 'Neues Spiel';
		btnNewNext.onclick = customAlert.btnNewNextHandler;
		
		var btnMenu = document.createElement('INPUT');
		btnMenu.type = 'button';
		btnMenu.value = 'Menü';
		btnMenu.onclick = customAlert.btnMenuHandler;
		
		var triesNeeded = rows-currentRow;
		
		var dialogBodyBoxText = '<b>Benötigte Zeit:</b> <br \>' + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
		
		if(rightColorRightPlace == columns){
			dialogBoxHead.innerHTML = 'Gewonnen';
			dialogBodyBoxText = dialogBodyBoxText + '<br \> <b>Benötigte Versuche:</b> <br \>' + triesNeeded;
		} else {
			dialogBoxHead.innerHTML = 'Verloren';
		}
		
		dialogBoxBody.innerHTML = dialogBodyBoxText;
		
		dialogBoxFoot.appendChild(btnNewNext);
		dialogBoxFoot.appendChild(btnMenu);
	}
	
	this.btnNewNextHandler = function(){
		removeDialog();
		removeGame();
		initGame();
	}
	
	this.btnMenuHandler = function(){
		removeDialog();
		removeGame();
		initMenu();
	}
}

// REMOVES
function removeMenu(){
	while(divGameModeButtons.firstChild){
		divGameModeButtons.removeChild(divGameModeButtons.firstChild);
	}
	while(divGameModeSelect.firstChild){
		divGameModeSelect.removeChild(divGameModeSelect.firstChild);
	}
	while(divGameModeInfo.firstChild){
		divGameModeInfo.removeChild(divGameModeInfo.firstChild);
	}
	while(divRoundsSelect.firstChild){
		divRoundsSelect.removeChild(divRoundsSelect.firstChild);
	}
	while(divGameStartButton.firstChild){
		divGameStartButton.removeChild(divGameStartButton.firstChild);
	}
	while(divManualHighscoreButtons.firstChild){
		divManualHighscoreButtons.removeChild(divManualHighscoreButtons.firstChild);
	}
}

function removeGame(){
	while(divSolution.firstChild){
		divSolution.removeChild(divSolution.firstChild);
	}
	
	while(divTable.firstChild){
		divTable.removeChild(divTable.firstChild);
	}
	while(divColorsInfo.firstChild){
		divColorsInfo.removeChild(divColorsInfo.firstChild);
	}
}

function removeDialog(){
	divDialogOverlay.style.display = 'none';
	divDialogBox.style.display = 'none';
	while(divDialogBoxHead.firstChild){
		divDialogBoxHead.removeChild(divDialogBoxHead.firstChild);
	}
	while(divDialogBoxBody.firstChild){
		divDialogBoxBody.removeChild(divDialogBoxBody.firstChild);
	}
	while(divDialogBoxFoot.firstChild){
		divDialogBoxFoot.removeChild(divDialogBoxFoot.firstChild);
	}
}

// START
var divWindow = document.getElementById('window');

var divMenu = document.getElementById('menu');
var divGameModeButtons = document.getElementById('gameModeButtons');
var divGameModeSelect = document.getElementById('gameModeSelect');
var divGameModeInfo = document.getElementById('gameModeInfo');
var divRoundsSelect = document.getElementById('roundsSelect');
var divGameStartButton = document.getElementById('gameStartButton');
var divManualHighscoreButtons = document.getElementById('manualHighscoreButtons');;

var divGame = document.getElementById('game');
var divSolution = document.getElementById('solution');
var divTable = document.getElementById('table');
var divColorsInfo = document.getElementById('colorsInfo');
var divButton = document.getElementById('btnCheck');
var error = document.getElementById('errorMessage');

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

var rowsArray;
var solutionArray;

var code;

var currentRow;

var rightColorRightPlace;

var customAlert = new CustomAlert();

initMenu();
//initGame();