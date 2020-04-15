var exp = '', number,decimal, equal, allowSR = true;
var textview = document.forms['myForms']['textview'];

function insertNum(num)
if (equal){
    exp = num;
    textview.value = exp;
    number = true;
    equal = false;

}
else{
    exp = textview.value + num;
    textview.value = exp;
    number = true;
}
if (operator) decimal = false;
SR('a');
function insertOp(op) {
    textview.value = exp + op;
    operator = true;
    equal = false;
    allowSR = false;
    SR('a');
}
functioninsertDec() {
    if (number && !decimal){
        textview.value = exp + '-';
        decimal = true;
        operator = false;


    }
function equalto() {
    if (exp) {
        exp = eval(exp);
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
        SR('a');
         
    }
}
function clean() {
    exp = '';
    textview.value = exp;
    decimal = false;

}
function back() {
    exp = textview.value;
    exp = exp.substring(0, exp.length)

}
function SR(X){
    if (x=='r') {
        exp = math.sqrt(exp);
        textview.value = exp;
    }
    else if (x=='a' && allowSR){
        Document.getElementById('r').disabled = false;
        Document.getElementById('s').disabled = false;
    }
    else if (!allowSR){
        Document.getElementById('r').disabled = true;
        Document.getElementById('s').disabled = true;

}




