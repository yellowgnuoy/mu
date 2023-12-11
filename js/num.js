const scrollNum = document.getElementById('num');
const scrollHeader = document.querySelector('h2');
const parall = document.querySelector('.parall');

let countBox = document.querySelector('#num');
let count = 499;

window.addEventListener('scroll', () => { 
const scrollTop = window.pageYOffset;

if (scrollTop < 1500) {
    count = 499;
    scrollHeader.innerHTML = `2020년, 편의점 4사의<br>무인편의점 개수는<br><span id="num">${scrollNum.textContent}</span>개였다.`;
    parall.style.backgroundImage = "url('./img/bg.png')";
    countBox.style.color = "initial"; // Reset color when scroll is less than 1500
} else {
    const scrollProgress = Math.min(1, (scrollTop - 1500) / 600); // 1000px scroll for full count range
    count = Math.min(3310, Math.floor(499 + scrollProgress * (3310 - 499)));

    scrollHeader.innerHTML = `2022년 말 기준, 무인편의점 개수는<br>무인편의점 개수는<br><span id="num">${scrollNum.textContent}</span>개로 6배 증가`;
    parall.style.backgroundImage = "url('./img/bg2.png')";

    if (count >= 3310) {
        document.getElementById('num').style.color = "white"; // Change color to yellow when count reaches 3310
    }
}

countBox.innerHTML = new Intl.NumberFormat().format(count);
});