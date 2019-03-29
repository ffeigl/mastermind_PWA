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
  solutionArray = [0,0,0,0,0,0,0,0];
  
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
			  
				for (var k = 0; k < columns; k++){
					solutionArray[k] = document.createElement('TR');
					solutionTableBody.appendChild(solutionArray[k]);
			  
					//for(var l = 0; l < columns; l++){
						var solutionTd = document.createElement('TD');
						solutionTd.width = '8';
						solutionTd.height = '30';
						solutionArray[k].appendChild(solutionTd);
					//}
				}
				td.appendChild(solutionTable);
			} else {
				td.className = 'passive';
				td.width = '50';
				td.height = '30';
			}
			
		}
		rowsArray[i].appendChild(td);
	}
  }
  tableDiv.appendChild(table);
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
		passiveTDs[i].removeEventListener('click', tdClickHandler);
	}
	
	// Activate Handler on active TDs
	var activeTDs = document.getElementsByClassName('active');

	for(var i = 0; i < activeTDs.length; i++){
		activeTDs[i].addEventListener('click', tdClickHandler);
	}
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
	var rightColorRightPlace = 0;
	
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
	console.log(rightColorRightPlace);
	console.log(rightColor);
	
	fillSolutionTable(rightColorRightPlace, rightColor);
}

function fillSolutionTable(rightColorRightPlace, rightColor){
	var currentSolutionTable = rowsArray[currentRow].childNodes[5].childNodes[0].childNodes[0];
	
	for (var i = 0; i < columns-1; i++){
		currentSolutionTable.childNodes[i].style.backgroundColor = 'red';
	}
}

// Eventhandler
function tdClickHandler(){
	this.style.backgroundColor = colorSwitch(this.style.backgroundColor);
}

function btnCheckHandler(){
	if(currentRow > 0){
		if(checkEmpty()){
			if(checkDoubles()){
				compareWithSolution();
				currentRow--;
				activateCurrentRow();
			} else {
				console.log("DOPPELTE FELDER");
			}
		} else {
			console.log("LEERE FELDER");
		}
	}
}

// START
var rows = 8;
var columns = 4;
var colors = 6;

var rowsArray;
var solutionArray

var code;

var currentRow = rows-1;

init();

generateCode();
codeAusgeben();
activateCurrentRow();