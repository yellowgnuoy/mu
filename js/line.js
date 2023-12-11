let reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            document.querySelector('.line').style.opacity = '100%';
        } else {
            entry.target.classList.remove('reveal');
            document.querySelector('.line').style.opacity = '0%';
        }
    });
}, { rootMargin: "0px 0px -100px 0px" });

document.querySelectorAll('.line').forEach(line => {
    reveal.observe(line);
});

let reveal2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            document.querySelector('.line2').style.opacity = '100%';
        } else {
            entry.target.classList.remove('reveal');
            document.querySelector('.line2').style.opacity = '0%';
        }
    });
}, { rootMargin: "0px 0px -100px 0px" });

document.querySelectorAll('.line2').forEach(line => {
    reveal2.observe(line);
});