let n = 0;
let image1;
let image2;
let image3;
let image4;
let image5;
let check1, check2, check3, check4, check5;
function  changeImg(e) {
    n++;
    image1="../images/first"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
    check1 = n;
    checkImg();
}
function  changeImg1(e) {
    n++;
    image2="../images/two"+n+".jpg";
    console.log(e);
    e.src = image2;
    if(n>=3){
        n = 0;
    }
    check2 =n;
    checkImg();
}
function  changeImg2(e) {
    n++;
    image3="../images/three"+n+".jpg";
    console.log(e);
    e.src = image3;
    if(n>=3){
        n = 0;
    }
    check3 = n;
    checkImg();
}
function  changeImg3(e) {
    n++;
    image4="../images/four"+n+".jpg";
    console.log(e);
    e.src = image4;
    if(n>=3){
        n = 0;
    }
    check4 = n;
    checkImg();
}
function  changeImg4(e) {
    n++;
    image5="../images/five"+n+".jpg";
    console.log(e);
    e.src = image5;
    if(n>=3){
        n = 0;
    }
    check5 = n;
    checkImg();
}

function checkImg() {
    if (check1==check2 && check2==check3 && check3==check4 && check4==check5){
    //if(image1 == '../images/first1.jpg' && image2 == '../images/two1.jpg' && image3 == '../images/three1.jpg' && image4 == '../images/four1.jpg' && image5 == '../images/five1.jpg'){
    document.getElementById("show").innerHTML= "verygood";

    }
}