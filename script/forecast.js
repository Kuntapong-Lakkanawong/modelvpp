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
        
        document.getElementById(`efc-peak-${buildingId}`).innerText = maxPower;
        document.getElementById(`efc-current-${buildingId}`).innerText = latestPower;
        document.getElementById(`forcast-kwh-${buildingId}`).innerText = sumkWh.toFixed(2);
        
        limitedRows.forEach((row, index) => {
            const cells = row.split(',');
            const date = cells[dateIndex].trim();
            const power = parseFloat(cells[powerIndex].trim());
            
            const barElement = document.getElementById(`${buildingId}-bar-time-${index}`);
            if (barElement) {
                if (!isNaN(power)) {
                    const barHeight = Math.min((power / maxPower) * 245, 245);
                    barElement.style.height = `${barHeight}px`;
                    barElement.setAttribute('data-tooltip', `Date: ${date}\nPower: ${power} kW`);
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

// เรียกใช้งาน loadBuildings() เมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener("load", () => {
    buildings.forEach(({ id, file }) => fetchCSV(id, file));
});

//โค้ดวันที่
const date = new Date();

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();
const formattedDate = `${month} ${day}, ${year}`;

document.getElementById('date-efc').textContent = formattedDate;
