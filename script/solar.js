for (let i = 1; i <= 8; i++) {
    const solarBar = document.querySelector(`#solar-bar-${i}`); // ดึง solar-bar ของแต่ละอาคาร
    const solarNum = document.querySelector(`#solar-bar-num-${i}`); // ดึง lp-bat-num ของแต่ละอาคาร
    
    // ตรวจสอบว่า solarNum มีค่าและ solarBar มีอยู่
    if (solarNum && solarBar) {
      // เปลี่ยนความกว้างของ solar-bar ตามค่าของ lp-bat-num
      const solarLevel = parseInt(solarNum.textContent);
      solarBar.style.width = solarLevel + '%'; // ตั้งค่า width ของ solar-bar
    }
  }