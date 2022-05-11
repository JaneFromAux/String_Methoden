


// console.log("Level1_1");
// let nachName = "Winkler";
// let vorName = "Rainer ";
// naMe = vorName + nachName;
// console.log(naMe);

// console.log("Level1_2");
// let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
// console.log(txt.indexOf("h"));
// console.log(txt.indexOf("Earth"));
// console.log(txt.indexOf("Moon"));

// console.log("Level1_3");
// let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
// console.log(txt2.search(';'));
// console.log(txt2.search('green'));
// console.log(txt2.search('blue'));

// console.log("Level1_4");
// let A = "Sam is going to coding school";
// let B = (A.slice(0, 4)); //Sam
// console.log(B);
// document.write(B + "<br>");
// let C = (A.slice(4, 7));//is
// console.log(C);
// document.write(C + "<br>");
// let D = (A.slice(23, 30)); //school
// console.log(D);
// document.write(D + "<br>");
// let E = (A.slice(1, 16));
// console.log(E + D)//am is going to school
// document.write(E + D + "<br>");
// let F = (A.slice(4, 16));
// console.log(F + D);//is going to school
// document.write(F + D + "<br>");
// console.log(B + C + D);//Sam is school
// document.write(B + C + D + "<br>");


// console.log("Level1_5");
// let text = 'Sam is back from coding school';
// let textS = text.substring(0, 4);// Sam
// document.write(textS + "<br>");
// let textI = text.substring(4, 7);//is
// document.write(textI + "<br>");
// let textSc = text.substring(24, 30);//school
// document.write(textSc + "<br>");
// let together = text.substring(1, 4);//Sam is school
// document.write(textS + textI + textSc + "<br>");

// console.log("Level1_6");
// let texti = "Sam is working at coding school";

// let textiS = texti.substr(0, 4);//Sam
// let textiI = texti.substr(4, 3);//is 
// let textiA = texti.substr(15, 3);//at 
// let textiSc = texti.substr(25, 6);//school
// let textiw = texti.substr(7, 4) + texti.substr(5, 2);

// One = document.getElementById('One');
// Two = document.getElementById('Two');
// Three = document.getElementById('Three');
// Four = document.getElementById('Four');
// Five = document.getElementById('Five');

// One.innerHTML = textiS;
// Two.innerHTML = textiI;
// Three.innerHTML = textiA;
// Four.innerHTML = textSc;
// Five.innerHTML = textiS + textiw + textiA + textiSc;//Sam works at school


// console.log("Level1_7");
// let texto = "Sam is good at coding school";


// let bad = texto.replace("good", "bad");
// let baddy = bad.replace('coding', "");// Sam is bad at school
// let tom = baddy.replace("Sam", "Tom");
// let tommy = tom.replace("bad", "good");// Tom is good at school 
// let tennis = baddy.replace("school", "tennis");
// let tennissee = tennis.replace("bad", "good")// Sam is good at tennis



// six = document.getElementById('six');
// seven = document.getElementById('seven');
// eight = document.getElementById('eight');

// six.innerHTML = baddy;
// seven.innerHTML = tommy;
// eight.innerHTML = tennissee;

console.log("Level1_8");
let texta = "Sam is going to coding school";
let texta2 = texta.replace("coding", "");
let sam = texta2.replace("to ", "").replace("going ", "").replace("is ", "").replace(" school", "");
console.log(sam);
let allUp = texta2.toUpperCase(1, 29);//SAM IS GOING TO SCHOOL
let allLow = allUp.toLowerCase();//sam is going at school 
let mixOne = allLow.toUpperCase(1, 3);//SAM is going to SCHOOL
let mixTwo = allUp;//sam IS GOING TO school
let mixThree = allUp;//Sam Is Going To School


nine = document.getElementById('nine');
ten = document.getElementById('ten');
eleven = document.getElementById('eleven');
twelve = document.getElementById('twelve');
thirteen = document.getElementById('thirteen');

nine.innerHTML = allUp + 1;
ten.innerHTML = allLow + 2;
eleven.innerHTML = mixOne + 3;
twelve.innerHTML = mixTwo + 4;
thirteen.innerHTML = mixThree + 5;

console.log("Level1_9");
let text1 = "Sam is going to coding school";
let text2 = "Tom";
let text3 = "programming bike";
let text4 = "and";

let one = text1.replace("coding", "").concat(" " + text4 + " to the movie Theater"); //Sam is going to school and to the movie theater

let two = text1.replace("coding", "").replace("school", "").concat(" movie theater")//Sam is going to movie theater
let tom = "Tom ";
let three = tom + text4.concat(" " + "Sam are " + text1.replace("is", "").replace("coding", "").replace("Sam", ""));//Tom and Sam are going to school

let four = three.replace("school", "gym").concat(" " + text4 + two.replace("Sam is going", " the"));//Tom and Sam are going to gym and to the movie theater

let five = one.replace("Sam", "Tom")//Tom is going to school and to the movie theater

fourteen = document.getElementById('fourteen');
fifteen = document.getElementById('fifteen');
sixteen = document.getElementById('sixteen');
seventeen = document.getElementById('seventeen');
eighteen = document.getElementById('eighteen');

fourteen.innerHTML = one;
fifteen.innerHTML = two;
sixteen.innerHTML = three;
seventeen.innerHTML = four;
eighteen.innerHTML = five;
