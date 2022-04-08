function iframe1() {

    document.getElementById("first_box").style.filter = "blur(0px)";
    document.getElementById("first_box").style.border ="7px solid rgb(8, 218, 8)";
    document.getElementById("box1").style.display = "none";
    document.getElementById("question1").style.display = "none";

    document.getElementById("second_box").style.filter = "blur(10px)";
    document.getElementById("second_box").style.border ="4px solid rgb(8, 218, 8)";
    document.getElementById("box2").style.display = "flex";
    document.getElementById("question2").style.display = "flex";

    document.getElementById("third_box").style.filter = "blur(10px)";
    document.getElementById("third_box").style.border ="4px solid rgb(8, 218, 8)";
    document.getElementById("box3").style.display = "flex";
    document.getElementById("question3").style.display = "flex";

    document.getElementById("iframe1").style.display = "flex";
    document.getElementById("iframe2").style.display = "none";
    document.getElementById("iframe3").style.display = "none";


}

function iframe2() {

    document.getElementById("first_box").style.filter = "blur(10px)";
    document.getElementById("first_box").style.border ="4px solid rgb(8, 218, 8)";
    document.getElementById("box1").style.display = "flex";
    document.getElementById("question1").style.display = "flex";

    document.getElementById("second_box").style.filter = "blur(0px)";
    document.getElementById("second_box").style.border ="7px solid rgb(8, 218, 8)";
    document.getElementById("box2").style.display = "none";
    document.getElementById("question2").style.display = "none";

    document.getElementById("third_box").style.filter = "blur(10px)";
    document.getElementById("third_box").style.border ="4px solid rgb(8, 218, 8)";
    document.getElementById("box3").style.display = "flex";
    document.getElementById("question3").style.display = "flex";

    document.getElementById("iframe1").style.display = "none";
    document.getElementById("iframe2").style.display = "flex";
    document.getElementById("iframe3").style.display = "none";
}

function iframe3() {

    document.getElementById("first_box").style.filter = "blur(10px)";
    document.getElementById("first_box").style.border ="4px solid rgb(8, 218, 8)";
    document.getElementById("box1").style.display = "flex";
    document.getElementById("question1").style.display = "flex";

    document.getElementById("second_box").style.filter = "blur(10px)";
    document.getElementById("second_box").style.border ="4px solid rgb(8, 218, 8)";
    document.getElementById("box2").style.display = "flex";
    document.getElementById("question2").style.display = "flex";

    document.getElementById("third_box").style.filter = "blur(0px)";
    document.getElementById("third_box").style.border ="7px solid rgb(8, 218, 8)";
    document.getElementById("box3").style.display = "none";
    document.getElementById("question3").style.display = "none";

    document.getElementById("iframe1").style.display = "none";
    document.getElementById("iframe2").style.display = "none";
    document.getElementById("iframe3").style.display = "flex";

}