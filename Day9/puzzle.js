let n = 0;
function  changeImg(e) {
    n++;
    let image1="../images/first"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg1(e) {
    n++;
    let image1="../images/two"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg2(e) {
    n++;
    let image1="../images/three"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg3(e) {
    n++;
    let image1="../images/four"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}
function  changeImg4(e) {
    n++;
    let image1="../images/five"+n+".jpg";
    console.log(e);
    e.src = image1;
    if(n>=3){
        n = 0;
    }
}

if (changeImg(image1[n])==changeImg1(image1[n])){
    alert('a')
}