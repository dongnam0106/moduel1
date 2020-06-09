let toanhang1;
let toanhang2;
let toantu;
function showNumber(value) {

    if (toantu != undefined) {
        document.getElementById('out').value;
    } else if (toantu != null) {
        document.getElementById('out').value;
    }
     else {
        document.getElementById('out').value+= value;
    }
}
function showPlus() {
    toanhang1 = document.getElementById('out').value;
    document.getElementById('out').value= '+';
    toantu= '+';
}