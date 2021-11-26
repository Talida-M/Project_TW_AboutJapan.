window. onload=schimbaimag;
var index = 0;
var index2=0
schimbaimag();

function schimbaimag() {

    //Collect all images with class 'slides'
    var x = document.getElementsByClassName('s3');
    for(var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if(index > x.length) {
        index = 1;
    }
    x[index - 1].style.display = "block";

    var y = document.getElementsByClassName('s2');
    for(var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    index2++;
    if(index2 > y.length) {
        index2 = 1;
    }
    y[index2 - 1].style.display = "block";

    setTimeout(schimbaimag, 3000);
}

function modifica(){
    var im=document.getElementById('s1');
    if (im.src.match("Anime/DeathNote2.jpeg")){

        im.src="Anime/DeathNote1.jpeg";
    }
    else{
        im.src="Anime/DeathNote2.jpeg";
    }

    var im2=document.getElementById('s0');
    if (im2.src.match("Anime/Hotarubi1.jpeg"))

        im2.src="Anime/Hotarubi2.jpeg";
    else{
    if (im2.src.match("Anime/Hotarubi2.jpeg"))
        im2.src="Anime/Hotarubi3.jpeg";
    else
        im2.src="Anime/Hotarubi1.jpeg";
    }
}

   window.onload = schimbaCuloarea;
    schimbaCuloarea();

    function schimbaCuloarea() {
        var x, y, z, random_col;
        x = Math.round(Math.random() * 256);
        y = Math.round(Math.random() * 256);
        z = Math.round(Math.random() * 256);
        random_col = 'rgb(' + x + ',' + y + ',' + z + ')';
        document.body.style.backgroundColor=random_col;}
/*
//window.onload=function () {
   if (localStorage.getItem("culoare"))
        document.body.style.backgroundColor = localStorage.getItem("culoare");
    else
localStorage.setItem("culoare",document.body.style.background );
//}


function schimbaCuloarea() {

    if(document.body.style.background.match('powderblue')) {
        document.body.style.background = 'palegreen';
        localStorage.setItem("culoare", 'palegreen');
    }
    else
        {
            if (document.body.style.background.match('palegreen')) {
                document.body.style.background = 'mediumpurple';
                localStorage.setItem("culoare", 'mediumpurple');

            }
            else
                {
                    if (document.body.style.background.match('mediumpurple')) {
                        document.body.style.background = 'lightsalmon';
                        localStorage.setItem("culoare", 'lightsalmon');

                    }
                     else {
                        document.body.style.background = 'powderblue';
                        localStorage.setItem("culoare", 'powderblue');

                    }
                }
            }
    if (localStorage.getItem("culoare"))
        document.body.style.backgroundColor = localStorage.getItem("culoare");
//else
   // localStorage.setItem("culoare",document.body.style.background );
  // clearInterval(interval);
}
*/

///------  Random Anime      -----------
function Anime() {
    let menu = document.getElementById("genre");
    let genre = menu.options[menu.selectedIndex].text;
    return genre;
}

async function randomA() {
    const nr = 6;
    let genre = Anime();
    let anime = Animearray();
    let container = document.getElementById("an_container");
    let rand = Math.floor(Math.random() * nr);
    let button = document.getElementById("submit");
    button.disabled = true;
    container.innerHTML = anime[genre][rand];
    button.disabled = false;
}

function Animearray() {
    let anime = {};
    anime["Kodomo"] = ["Doraemon", "Hello Kitty", "Pokemon","Beyblade","Kaijuu no Kodomo"];
    anime["Horror"] = ["Blood-C","Mononoke", "Deadman Wonderland","Tokyo Ghoul","Another"];
    anime["Comedy"] = ["One Punch Man","Naruto","Toradora","One Piece ","Mob Psycho 100"];
    anime["Fantasy"] = ["No game No Life","Death Note","Attack on Titan","Fullmetal Alchemist","Houseki no Kuni"];
    anime["Mecha"] = ["Neon Genesis", "Mobile Suit Gundam","Giant Gorg", "Machine Robo Rescue","Eureka Seven"];
    anime["Supernatural"] = ["Angel Beasts", "Spirited away","Noragami","Natsume Yuujinchou",
    "Elfen Lied"];
    return anime;
}


//-------For quizz--------///
function checkradio(butoane,score){
    for (var i = 0; i < butoane.length; i++) {
        if (butoane[i].checked == true) {
            if (butoane[i].value == 'a')
                score.a++;
            else {
                if (butoane[i].value == 'b')
                    score.b++;
                else
                    score.c++;
            }


        }
        butoane[i].disabled = true;
    } return score;
}

function startQ() {
    let score={
        a:0, b:0, c:0
    }

    document.getElementById("rsp").onclick = function () {
        var raspuns_a = [];
        raspuns_a[0] = 'Raspunsuri_quizz/qa1.png';
        raspuns_a[1] = "Raspunsuri_quizz/qa2.jpg";
        raspuns_a[2] = "Raspunsuri_quizz/qa3.jpg";
        raspuns_a[3] = "Raspunsuri_quizz/qa4.jpg";
        raspuns_a[4] = "Raspunsuri_quizz/qa5.jpg";
        var raspuns_b = [];
        raspuns_b[0] = 'Raspunsuri_quizz/qb1.png';
        raspuns_b[1] = 'Raspunsuri_quizz/qb2.jpg';
        raspuns_b[2] = 'Raspunsuri_quizz/qb3.jpg';
        raspuns_b[3] = 'Raspunsuri_quizz/qb5.png';
        raspuns_b[4] = 'Raspunsuri_quizz/qb4.jpg';
        var raspuns_c = [];
        raspuns_c[0] = 'Raspunsuri_quizz/qc2.png';
        raspuns_c[1] = 'Raspunsuri_quizz/qb1.jpg';
        raspuns_c[2] = 'Raspunsuri_quizz/qc4.jpg';
        raspuns_c[3] = 'Raspunsuri_quizz/qc3.png';
        var raspuns_abc =[];
        raspuns_abc[0] = 'Raspunsuri_quizz/qabc2.png';
        raspuns_abc[1] = 'Raspunsuri_quizz/qabb1.jpg';
        raspuns_abc[2] = 'Raspunsuri_quizz/qabc3.jpg';

       if (score.a > score.b & score.a > score.c) {
           let varb= raspuns_a[Math.floor(Math.random() *5)];
           //console.log(varb);
            document.getElementById("raspuns").src = varb.toString();

        }
       else {
           if (score.b > score.a & score.b > score.c) {
             //  document.getElementById('raspuns').style.visibility = 'visible';
               let varb1= raspuns_b[Math.floor(Math.random() *5)];
               //console.log(varb);
               document.getElementById("raspuns").src = varb1.toString();           }
           else {
               if (score.c > score.b & score.c > score.a) {
               //   document.getElementById('raspuns').style.visibility = 'visible';
                   let varb3= raspuns_c[Math.floor(Math.random() *4)];
                   //console.log(varb);
                   document.getElementById("raspuns").src = varb3.toString();               }
               else
               {(score.c == score.b || score.b == score.a || score.a == score.c)
                   {
                     //  document.getElementById('raspuns').style.visibility = 'visible';
                       let varb4= raspuns_abc[Math.floor(Math.random() *3)];
                       //console.log(varb);
                       document.getElementById("raspuns").src = varb4.toString();
                   } }
           }
       }

    }

    document.getElementsByClassName('Quizz')[0].style.visibility = 'visible';
    form1.onchange = function () {
        butoane = document.getElementsByName("q1");
        console.log(score);
       score= checkradio(butoane,score);
        console.log(score);
    }
    form2.onchange = function () {
        butoane2 = document.getElementsByName("q2");
        console.log(score);
        score= checkradio(butoane2,score);
        console.log(score);
    }
    form3.onchange = function () {
        butoane3 = document.getElementsByName("q3");
        console.log(score);
        score= checkradio(butoane3,score);
        console.log(score);
    }
    form4.onchange = function () {
        butoane4 = document.getElementsByName("q4");
        console.log(score);
        score= checkradio(butoane4,score);
        console.log(score);
    }
    form5.onchange = function () {
        butoane5 = document.getElementsByName("q5");
        console.log(score);
        score= checkradio(butoane5,score);
        console.log(score);
    }
    form6.onchange = function () {
        butoane6 = document.getElementsByName("q6");
        console.log(score);
        score= checkradio(butoane6,score);
        console.log(score);
    }
    form7.onchange = function () {
        butoane7 = document.getElementsByName("q7");
        console.log(score);
        score= checkradio(butoane7,score);
        console.log(score);
    }
    form8.onchange = function () {
        butoane8 = document.getElementsByName("q8");
        console.log(score);
        score= checkradio(butoane8,score);
        console.log(score);
    }
}


function disableradio(butoane) {
    for (var i = 0; i < butoane.length; i++) {
        butoane[i].disabled = false;
        butoane[i].checked=false;
    }
}
function retakeQ(){
    let score={
        a:0, b:0, c:0
    }

    butoane=disableradio(butoane);
    butoane2=disableradio(butoane2);
    butoane3=disableradio(butoane3);
    butoane4=disableradio(butoane4);
    butoane5=disableradio(butoane5);
    butoane6=disableradio(butoane6);
    butoane7=disableradio(butoane7);
    butoane8=disableradio(butoane8);

}



