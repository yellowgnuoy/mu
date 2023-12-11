window.addEventListener('scroll', () => {
    const roll = document.querySelector('.roll');
    const scrollTop = window.pageYOffset;

    if (scrollTop > roll.offsetTop - 300) { // 300px 빠른 시작을 위해 roll.offsetTop에서 300을 빼줍니다.
        const scale = 0.94 + (scrollTop - (roll.offsetTop - 300)) / (roll.offsetHeight * 5); // 비율을 더 크게 조정하여 더 빨리 커지게 합니다.
        roll.style.transform = `scale(${Math.min(scale, 1)})`; // scale이 1을 넘지 않도록 합니다.
    } else {
        roll.style.transform = 'scale(0.94)'; // 원래 크기인 94%로 설정합니다.
    }
    });