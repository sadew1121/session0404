var button = document.getElementById("m_but");

button.addEventListener("dblclick", function() {
    var text = document.getElementById("intro");

    text.textContent = "마지막에 퀴즈도 풀어주세요.";

    document.addEventListener("mouseout", function revertText() {
        text.textContent = "제 자기소개 페이지에 오신 것을 환영합니다.";
        
        document.removeEventListener("mouseout", revertText);
    });
});

/* -------------------------------------------------------------------------------------*/

var colors = ["green","red"]; // 사용할 색상 목록


function T1_changeBackgroundColor() {
    alert('정답~')
    var button = document.getElementById("cat");
    button.style.backgroundColor = colors[0];
}

function F1_changeBackgroundColor() {
    alert('땡~')
    var button = document.getElementById("dog");
    button.style.backgroundColor = colors[1];
}

function T2_changeBackgroundColor() {
    alert('정답~')
    var button = document.getElementById("burger");
    button.style.backgroundColor = colors[0];
}

function F2_changeBackgroundColor() {
    alert('땡~')
    var button = document.getElementById("gc");
    button.style.backgroundColor = colors[1];
}

function T3_changeBackgroundColor() {
    alert('정답~')
    var button = document.getElementById("cc");
    button.style.backgroundColor = colors[0];
}

function F3_changeBackgroundColor() {
    alert('땡~')
    var button = document.getElementById("kg");
    button.style.backgroundColor = colors[1];
}



