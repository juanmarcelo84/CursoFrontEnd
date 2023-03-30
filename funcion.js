$(document).ready(function() {
           window.print();
    $('#printcv').click(function(){
		alert('prueba2');
           return false;
    });
});

function imprimir() {
    window.print();
}
function printDiv() 
{

  var divToPrint=document.getElementById('DivIdToPrint');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}