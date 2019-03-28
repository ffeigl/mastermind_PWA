function init(){
	addTable();
	addButton();
}

function addTable() {
  var myTableDiv = document.getElementById('tabelle');

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < columns+2; j++) {
		var td = document.createElement('TD');
		if(j == 0){
			td.width = '15';
			td.className = 'number';
			td.appendChild(document.createTextNode("" + rows-i));
		  
		} else {
			if(j == columns+1){
				var solutionTable = document.createElement('TABLE');
				solutionTable.border = '1';
			  
				var solutionTableBody = document.createElement('TBODY');
				solutionTable.appendChild(solutionTableBody);
			  
				var solutionTr = document.createElement('TR');
				solutionTableBody.appendChild(solutionTr);
			  
				for(var k = 0; k < columns; k++){
					var solutionTd = document.createElement('TD');
					solutionTd.width = '8';
					solutionTd.height = '30';
					solutionTr.appendChild(solutionTd);
				}
				td.appendChild(solutionTable);
			} else {
				td.className = 'action';
				td.width = '50';
				td.height = '30';
			}
			
		}
		tr.appendChild(td);
	}
  }
  myTableDiv.appendChild(table);
}

function addButton(){
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

// Eventhandler
function tdClickHandler(){
	this.style.backgroundColor = colorSwitch(this.style.backgroundColor);
}

function btnCheckHandler(){
	console.log("Click");
}

// START
var rows = 8;
var columns = 4;
var colors = 6;

var code;

init();

generateCode();
codeAusgeben();

var tds = document.getElementsByClassName('action');

for(var i = 0; i < tds.length; i++){
	tds[i].addEventListener('click', tdClickHandler);
}
