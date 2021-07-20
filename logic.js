let uinput = document.querySelector(".uinput")
let btn = document.querySelector(".btn")
let answer1 = document.querySelector(".answer-box1")
let answer2 = document.querySelector(".answer-box2")
let timer = document.querySelector(".timer");

function clickHandler() {
    if(uinput.value == "432") {
        answerfunc("이");
    } else if(uinput.value == "2") {
        answerfunc("것");
    } else if(uinput.value == "2400") {
        answerfunc("을");
    } else if(uinput.value == "박유찬") {
        answerfunc("맞");
    } else if(uinput.value == "7837") {
        answerfunc("추");
    } else if(uinput.value == "watermelon") {
        answerfunc("는");
    } else if(uinput.value == "ㅂ") {
        answerfunc("사");
    } else if(uinput.value == "LION") {
        answerfunc("람");
    } else if(uinput.value == "장경실") {
        answerfunc("바");
    } else if(uinput.value == "h") {
        answerfunc("보");
    } else {
        nowfunc();
    }
}

function answerfunc(ret) {
    let now = 10;
    let ment = document.createTextNode("정답입니다!");
    answer1.appendChild(ment);
    let code = document.createTextNode("보상코드: "+ret);
    answer2.appendChild(code);

    let x = setInterval(() => {
        timer.innerHTML = now +"초 남았습니다!"
        now--;

        if (now < 0) {
            clearInterval(x);
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            timer.innerHTML = "";
        }
    }, 1000);
}

function nowfunc() {
    let now = 30;
    let ment = document.createTextNode("오답입니다!");
    answer1.appendChild(ment);
    btn.disabled = true;
    let x = setInterval(() => {
        timer.innerHTML = now +"초 동안 답을 입력할 수 없습니다!"
        now--;

        if (now < 0) {
            clearInterval(x);
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            timer.innerHTML = "";
        }
    }, 1000);
}
function CtrlAlt() {

	if (event.keyCode == 17) {
		alert("Ctrl 키를 사용하실 수 없습니다.");
		return false;
	}

	if (event.keyCode == 18) {
		alert("Alt 키를 사용하실 수 없습니다.");
		return false;
	}

    if (event.keyCode == 123) {
		alert("F12 키를 사용하실 수 없습니다.");
		return false;
	}

    if (event.keyCode == 116) {
		alert("새로고침을 사용하실 수 없습니다.");
		return false;
	}

	if (event.keyCode == 91) {
		event.keyCode == 505;
		alert("윈도우 Fuction Key 키를 사용하실 수 없습니다.");
	}

    if(    (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82))
        || (event.keyCode == 116) ) {
        event.keyCode = 0;
        event.cancelBubble = true;
        event.returnValue = false;
        alert("새로고침 방지");
    }





	if (event.keyCode == 505) {
		return false;
	}

}

document.onkeydown = CtrlAlt;
document.oncontextmenu = function(e) {
	alert("마우스 오른쪽 버튼을 이용하실 수 없습니다.");
	return false;
}


btn.addEventListener("click", clickHandler);

