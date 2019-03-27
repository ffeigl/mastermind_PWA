function testHandler () {
	console.log('test');
}

function addTable() {
  var myTableDiv = document.getElementById("tabelle");

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
					solutionTd.width = '10';
					solutionTd.height = '30';
					solutionTr.appendChild(solutionTd);
				}
				td.appendChild(solutionTable);
			} else {
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