function testHandler () {
	console.log('test');
}

function tdClickHandler(){
	var farbe = colorSwitch(this.style.backgroundColor);
	this.style.backgroundColor = farbe;
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
			return 'pink';
			break;
		default:
			return 'red';
	}
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

var rows = 8;
var columns = 4;

addTable();


var tds = document.getElementsByClassName('action');

for(var i = 0; i < tds.length; i++){
	tds[i].addEventListener('click', tdClickHandler);
}
