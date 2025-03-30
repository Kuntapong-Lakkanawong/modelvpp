import { buildings } from './loadBuildings.js';

export async function fetchCSV(buildingId, csvFile) {
    try {
        const response = await fetch(csvFile);
        const csvData = await response.text();
        const rows = csvData.trim().split('\n');
        
        const headers = rows[0].split(',');
        const dateIndex = headers.indexOf('date');
        const powerIndex = headers.indexOf('Power');
        
        if (dateIndex === -1 || powerIndex === -1) {
            console.error('CSV format is incorrect');
            return;
        }
        
        const maxRows = 97;
        const limitedRows = rows.slice(1).slice(-maxRows);
        
        let maxPower = 0;
        let latestPower = 0;
        let lastValidIndex = -1;
        let sumkWh = 0;
        
        limitedRows.forEach((row, index) => {
            const cells = row.split(',');
            const power = parseFloat(cells[powerIndex].trim());
            
            if (!isNaN(power)) {
                maxPower = Math.max(maxPower, power);
                lastValidIndex = index;
                sumkWh += power * 0.25;
            }
        });
        
        if (lastValidIndex !== -1) {
            const lastValidRow = limitedRows[lastValidIndex].split(',');
            latestPower = parseFloat(lastValidRow[powerIndex].trim());
        }
        
        document.getElementById(`peak-num-${buildingId}`).innerText = maxPower;
        document.getElementById(`power-num-${buildingId}`).innerText = latestPower;
        document.getElementById(`lp-text-num-${buildingId}`).innerText = sumkWh.toFixed(2);

        // แก้ไขส่วนนี้เพื่อเก็บ kWh ในอาร์เรย์
        let kWhList = [];  // สร้างอาร์เรย์เพื่อเก็บค่า kWh
        limitedRows.forEach((row, index) => {
            const cells = row.split(',');
            const power = parseFloat(cells[powerIndex].trim());
            if (!isNaN(power)) {
                const kWh = power * 0.25; // คำนวณ kWh (15 นาที)
                kWhList.push(kWh); // เก็บค่า kWh ลงในอาร์เรย์
            } else {
                console.warn(`Invalid power value at row ${index}: ${cells[powerIndex]}`);
                kWhList.push(0); // กรณีค่าพลังงานไม่ถูกต้อง
            }
        });
        
        // แสดงผลบาร์กราฟ
        limitedRows.forEach((row, index) => {
            const cells = row.split(',');
            const date = cells[dateIndex].trim();
            const power = parseFloat(cells[powerIndex].trim());
            
            const barElement = document.getElementById(`${buildingId}-bar-time-${index}`);
            if (barElement) {
                if (!isNaN(power)) {
                    const barHeight = Math.min((power / maxPower) * 135, 135);
                    barElement.style.height = `${barHeight}px`;
                    const kWh = kWhList[index] || 0;
                    barElement.setAttribute('data-tooltip', `Date: ${date}\nPower: ${power} kW\nEnergy: ${kWh.toFixed(2)} kWh`);
                } else {
                    barElement.style.height = '0px';
                    barElement.removeAttribute('data-tooltip');
                }
            }
        });
    } catch (error) {
        console.error(`Error fetching CSV for ${buildingId}:`, error);
    }
}

// โค้ด button
window.addEventListener("load", () => {
    buildings.forEach(({ id, file }) => fetchCSV(id, file));
});

  const moreBtn = document.querySelector('.more-btn');
  const lpCardWrap = document.querySelector('.lp-cardwrap');
  const lpWrap = document.querySelector('.lp-wrap');
  const mainElement = document.querySelector('main');
  const moreText = document.querySelector('.more-text');
  const lessText = document.querySelector('.less-text');
  const arrow = document.querySelector('#arrow');

  // ตรวจสอบว่า lpCardWrap, main และ moreBtn มีค่า
  if (moreBtn && lpCardWrap && mainElement) {
    moreBtn.addEventListener('click', function() {
      // เปลี่ยนความสูงของ lp-cardwrap
      if (lpCardWrap.style.height === 'fit-content') {
        lpCardWrap.style.height = ''; // รีเซ็ตความสูงของ lp-cardwrap
        lpWrap.style.height = '';
        mainElement.style.height = '';
        moreText.style.display = '';
        lessText.style.display = '';
        arrow.style.transform = 'rotate(0deg)'
      } else {
        lpCardWrap.style.height = 'fit-content'; // กำหนดความสูงของ lp-cardwrap
        lpWrap.style.height = 'calc(100% - 50px)';
        mainElement.style.height = 'fit-content'; // กำหนดให้ main มีความสูงตามเนื้อหาภายใน
        moreText.style.display = 'none';
        lessText.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
      }
    });
}

//โค้ด battery-bar
for (let i = 1; i <= 7; i++) {
    const batteryBar = document.querySelector(`#building${i}`); // ดึง battery-bar ของแต่ละอาคาร
    const lpBatNum = document.querySelector(`#num-building${i}`); // ดึง lp-bat-num ของแต่ละอาคาร
    
    // ตรวจสอบว่า lpBatNum มีค่าและ batteryBar มีอยู่
    if (lpBatNum && batteryBar) {
      // เปลี่ยนความกว้างของ battery-bar ตามค่าของ lp-bat-num
      const batteryLevel = parseInt(lpBatNum.textContent);
      batteryBar.style.width = batteryLevel + '%'; // ตั้งค่า width ของ battery-bar
    }
  }
