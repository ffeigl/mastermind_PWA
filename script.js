// Programmaufbau
function init(){
	generateTable();
	generateBtnCheck();
}

function generateTable() {
  var tableDiv = document.getElementById('table');

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  rowsArray = [0,0,0,0,0,0,0,0];
  
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
  
  tableDiv.appendChild(table);
}

function generateBtnCheck(){
	var buttonDiv = document.getElementById('btnCheck');
	
	var button = document.createElement('INPUT');
	button.type = 'button';
	button.value = 'Check!';
	button.onclick = btnCheckHandler;
	
	buttonDiv.appendChild(button);
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

// Eventhandler
function tdLeftClickHandler(){
	this.style.backgroundColor = colorSwitch(this.style.backgroundColor);
}

function tdRightClickHandler(e){
	this.style.backgroundColor = reverseColorSwitch(this.style.backgroundColor);
	e.preventDefault();
}

function btnCheckHandler(){
	if(currentRow > 0){
		if(checkEmpty()){
			if(checkDoubles()){
				showErrorMessage("");
				compareWithSolution();
				if(rightColorRightPlace == columns){
					deactivateAllRows();
					rowsArray[currentRow].childNodes[0].style.backgroundColor = 'green';
					assignClickHandler();
					alert("GEWONNEN");
				} else {
					currentRow--;
					activateCurrentRow();
				}
			} else {
				showErrorMessage("Keine doppelten Farben!");
			}
		} else {
			showErrorMessage("Keine leeren Felder!");
		}
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
			if(columns == 4){
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
			if(columns == 4){
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
			if(columns == 4){
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
	var error = document.getElementById('errorMessage');
	error.innerHTML = errorMessage;
	error.style.color = 'red';
}

// START
var rows = 8;
var columns = 4;
var colors = 6;

var rowsArray;
var solutionArray

var code;

var currentRow = rows-1;

var rightColorRightPlace;

init();

generateCode();
codeAusgeben();
activateCurrentRow();