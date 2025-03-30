const numStars = 200;
const numBigStars = 7;
const stars1Container = document.querySelector('.stars1');
const stars2Container = document.querySelector('.stars2');
const bigstarsContainer = document.querySelector('.bigstars');

// ฟังก์ชันสร้างดาวในพื้นหลัง
function createStars() {
    // ลบดาวเก่าใน bigstarsContainer
    bigstarsContainer.innerHTML = '';

    // สร้างดาวใหม่
    for (let i = 0; i < numBigStars; i++) {
        const star = document.createElement('div');
        star.classList.add('bigstar');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        bigstarsContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 4000); // ดาวหางจะหายไปหลังจาก 0.5 วินาที
    }
}

// สร้างดาวในพื้นหลัง
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star1');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;  // random twinkling duration

    // เพิ่มการเคลื่อนไหวช้าๆ ของดาว
    star.style.animationName = 'move';
    star.style.animationDuration = `${Math.random() * 10 + 5}s`;  // ทำให้การเคลื่อนไหวช้า
    star.style.animationIterationCount = 'infinite';
    star.style.animationTimingFunction = 'linear';

    stars1Container.appendChild(star);
}

// สร้างดาวในพื้นหลัง
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star2');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;  // random twinkling duration

    // เพิ่มการเคลื่อนไหวช้าๆ ของดาว
    star.style.animationName = 'move';
    star.style.animationDuration = `${Math.random() * 10 + 5}s`;  // ทำให้การเคลื่อนไหวช้า
    star.style.animationIterationCount = 'infinite';
    star.style.animationTimingFunction = 'linear';

    stars2Container.appendChild(star);
}

// ฟังก์ชันเพื่อสร้างดาวหางตกแบบสุ่ม
function createRandomFallingStars() {
    setInterval(() => {
        const fallingStar = document.createElement('div');
        fallingStar.classList.add('falling-star');
        fallingStar.style.left = `${Math.random() * 100}%`;  // สุ่มตำแหน่งแนวนอน

        // เพิ่มดาวตกในหน้าจอ
        document.body.appendChild(fallingStar);

        // ลบดาวตกหลังจาก 2 วินาที
        setTimeout(() => {
            fallingStar.remove();
        }, 3000);  // ดาวตกจะหายไปหลังจาก 2 วินาที
    }, Math.random() * 9000);  // สุ่มระยะเวลาการสร้างดาวตก
}

    // สร้างดาวหางตามเมาส์
    document.addEventListener('mousemove', (event) => {
        createComet(event.clientX, event.clientY);
    });

    function createComet(x, y) {
        const comet = document.createElement('div');
        comet.classList.add('comet');
        comet.style.left = `${x - 2}px`;  // ปรับให้ดาวหางอยู่ตรงกับตำแหน่งเมาส์
        comet.style.top = `${y - 2}px`;

        // เพิ่มดาวหางในหน้าจอ
        document.body.appendChild(comet);

        // ลบดาวหางหลังจาก 0.5 วินาที (ให้มันหายไป)
        setTimeout(() => {
            comet.remove();
        }, 400); // ดาวหางจะหายไปหลังจาก 0.5 วินาที
    }

// เรียกใช้ฟังก์ชันสร้างดาวตกที่สุ่ม
createRandomFallingStars();

// เรียกใช้ฟังก์ชันสร้างดาวในพื้นหลังใหม่ ทุกๆ (1000 = 1วินาที)
setInterval(createStars, 7000);
