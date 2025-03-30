// เพิ่มป้าย (Pin) ตรงตำแหน่ง
viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.89677, 8.64473, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'LB 3',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.89676, 8.64367, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'LB 1',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.89677, 8.64473, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'LB 3',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.89824, 8.64476, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'LB 5',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.8982, 8.64367, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'LB 7',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.89329, 8.64429, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'AD',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(99.89748, 8.64539, 10),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'TB',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
    const pickedObject = viewer.scene.pick(movement.position);

    if (Cesium.defined(pickedObject) && pickedObject.getProperty('name')) {
        const buildingName = pickedObject.getProperty('name');

        // นำไปยังหน้า HTML ตามชื่ออาคาร
        if (buildingName === "อาคารเรียนรวม 3") {
            window.location.href = "page1.html";
        } else if (buildingName === "อาคารเรียนรวม 5") {
            window.location.href = "page2.html";
        } else if (buildingName === "อาคารไทยบุรี มหาวิทยาลัยวลัยลักษณ์") {
            window.location.href = "page3.html";
        } else if (buildingName === "อาคารเรียนรวม 7") {
            window.location.href = "page4.html";
        } else if (buildingName === "อาคารเรียนรวม 1") {
            window.location.href = "page5.html";
        } else {
            console.log("ไม่พบหน้าที่เกี่ยวข้องสำหรับอาคารนี้");
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);





viewer.entities.add({
    polygon: {
        hierarchy: new Cesium.PolygonHierarchy(
            Cesium.Cartesian3.fromDegreesArray([
                100.2, 13.9, // มุมบนซ้าย (พื้นที่สีดำรอบนอก)
                100.9, 13.9, // มุมบนขวา
                100.9, 13.5, // มุมล่างขวา
                100.2, 13.5  // มุมล่างซ้าย
            ]),
            [ // กำหนดพื้นที่ "รู" ตรงมหาวิทยาลัยจุฬาฯ
                new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray([
                    100.53625, 13.73026, // จุดรอบจุฬาฯ (กำหนดเองตามขอบเขตจริง)
                    100.52151, 13.73599,
                    100.52353, 13.74698,
                    100.53546, 13.7449,
                    100.53384, 13.73597,
                    100.53825, 13.73508
                ]))
            ]
        ),
        material: Cesium.Color.BLACK.withAlpha(0.9), // ทำให้พื้นที่อื่นมืด
    }
});

// โหลด Cesium OSM Buildings
//var buildings = viewer.scene.primitives.add(
//    Cesium.createOsmBuildings()
//);










// เพิ่มป้าย (Pin) ตรงตำแหน่ง
viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52703, 13.74067, 45),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'VT',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52564, 13.73595, 25),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'J9',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52846, 13.7389, 25),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'J4',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.53349, 13.73938, 55),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'JR',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.531, 13.73553, 25),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'JP',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52519117011063, 13.736225763830252, 25),
    point: {
        pixelSize: 10,
        color: Cesium.Color.RED
        
    },
    label: {
        text: 'EVC',
        font: '16pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    }
});

viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
    const pickedObject = viewer.scene.pick(movement.position);

    if (Cesium.defined(pickedObject) && pickedObject.getProperty('name')) {
        const buildingName = pickedObject.getProperty('name');

        // นำไปยังหน้า HTML ตามชื่ออาคาร
        if (buildingName === "อาคารเรียนรวม 3") {
            window.location.href = "page1.html";
        } else if (buildingName === "อาคารจามจุรี 4") {
            window.location.href = "forecast-building-2.html";
        } else if (buildingName === "อาคารไทยบุรี มหาวิทยาลัยวลัยลักษณ์") {
            window.location.href = "page3.html";
        } else if (buildingName === "อาคารเรียนรวม 7") {
            window.location.href = "page4.html";
        } else if (buildingName === "อาคารเรียนรวม 1") {
            window.location.href = "page5.html";
        } else {
            console.log("ไม่พบหน้าที่เกี่ยวข้องสำหรับอาคารนี้");
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

buildings.on('click', function(event) {
    if (event && event.object) {
      const building = event.object;
      
      // ดึงพิกัดของอาคารที่คลิก
      const position = building.position;
  
      // ใช้ setCamera เพื่อซูมไปยังตำแหน่งของอาคารที่คลิก
      osmBuildings.setCamera({
        center: [position[0], position[1]],  // พิกัด latitude, longitude
        zoom: 18,  // ระดับการซูม (ปรับได้ตามต้องการ)
        pitch: 45,  // มุมมองจากแนวนอน
        bearing: 0  // มุมหมุนของกล้อง
      });
    }
  });






  // ตั้งค่ากล้องไปยังพิกัดที่ต้องการ (99.894497, 8.641550)
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(100.52361698968642, 13.731690193411962, 200), // [long, lat, height]
    orientation: {
        heading: Cesium.Math.toRadians(35.0),   // หมุนไปทางทิศ 0°
        pitch: Cesium.Math.toRadians(-15.0),  // มุมมองเอียง
        roll: 0.0
    }
});

// ฟังก์ชันในการรีเซ็ตตำแหน่งกล้อง
function resetView() {
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(100.52274392094027, 13.732426748669416, 200), // [long, lat, height]
        orientation: {
            heading: Cesium.Math.toRadians(35.0),
            pitch: Cesium.Math.toRadians(-15.0),
            roll: 0.0
        }
    });
}




// ฟังก์ชันในการดึงไฟล์ CSV และแสดงผล
async function fetchCSV(buildingId) {
    // กำหนดไฟล์ CSV ที่จะแตกต่างกันตาม ID ของอาคาร
    let csvFile = '';
    if (buildingId === 'building-1') {
      csvFile = 'data/sep_timeseries_sorted_filtered1.csv';  // ไฟล์สำหรับ building-1
    } else if (buildingId === 'building-2') {
      csvFile = 'data/dec_timeseries_sorted.csv';  // ไฟล์สำหรับ building-2
    } else if (buildingId === 'building-3') {
      csvFile = 'data/sep_timeseries_sorted_filtered1.csv';  // ไฟล์สำหรับ building-2
    } else if (buildingId === 'building-4') {
      csvFile = 'data/dec_timeseries_sorted.csv';  // ไฟล์สำหรับ building-2
    } else if (buildingId === 'building-5') {
      csvFile = 'data/sep_timeseries_sorted_filtered1.csv';  // ไฟล์สำหรับ building-2
    } else if (buildingId === 'building-6') {
      csvFile = 'data/dec_timeseries_sorted.csv';  // ไฟล์สำหรับ building-2
    }
  
    const buildingElement = document.getElementById(buildingId);
    console.log('Building Element:', buildingElement); // ตรวจสอบว่าได้ element ที่ต้องการหรือไม่
    const response = await fetch(csvFile); // ใช้ไฟล์ CSV ที่กำหนดให้กับแต่ละอาคาร
    const csvData = await response.text(); // อ่านข้อมูลไฟล์เป็นข้อความ
    const rows = csvData.split('\n'); // แยกแถวข้อมูลจากไฟล์ CSV
  
    // จำกัดให้แสดงแค่ 96 แถว
    const maxRows = 97;
    const limitedRows = rows.slice(0, maxRows);
  
    let maxPower = 0;
    limitedRows.forEach((row) => {
      const cells = row.split(','); // แยกข้อมูลด้วยคอมม่า
      if (cells.length === 2) {
        const power = parseInt(cells[1].trim()); // ค่าใช้พลังงานที่แปลงเป็นตัวเลข
  
        // ตรวจสอบว่าแปลงค่าเป็นตัวเลขได้หรือไม่
        if (!isNaN(power)) {
          maxPower = Math.max(maxPower, power); // หาค่าพลังงานสูงสุด
        }
      }
    });
  
    console.log('Max Power:', maxPower); // แสดงค่าพลังงานสูงสุด
  
    if (buildingElement) {
      // ลูปผ่านแถวข้อมูลของ CSV
      limitedRows.forEach((row, index) => {
        const cells = row.split(','); // แยกข้อมูลด้วยคอมม่า
        if (cells.length === 2) {
          const time = cells[0].trim(); // เวลาจาก CSV
          const power = parseInt(cells[1].trim()); // ค่าใช้พลังงานที่แปลงเป็นตัวเลข
  
          // ตรวจสอบว่า ID ถูกต้องตามข้อมูลในไฟล์ CSV
          const barTimeId = `${buildingId}-bar-time-${index}`;
          const barElement = document.getElementById(barTimeId);
          console.log('Bar Element:', barElement); // ตรวจสอบว่า bar-timeX มีอยู่หรือไม่
          if (barElement) {
            // ปรับความสูงของแต่ละ bar ตามค่าพลังงาน
            const barHeight = Math.min((power / maxPower) * 250, 250); // ปรับสเกลให้สูงสุดที่ 135px
            barElement.style.height = `${barHeight}px`; 
  
            // ปรับค่าที่แสดงในเวลา (ถ้าต้องการ)
  
            // ปรับค่าพลังงาน (ถ้าต้องการ)
            const powerElement = document.getElementById(`${buildingId}-power-${index + 1}`);
            if (powerElement) {
              powerElement.innerText = power; // แสดงค่าพลังงานในบาร์
            }
          }
        }
      });
    }
  }
  
  // เรียกใช้งานฟังก์ชันสำหรับ power-building-1 และ power-building-2
  window.addEventListener("load", () => {
    fetchCSV('building-1');
    fetchCSV('building-2');
    fetchCSV('building-3');
    fetchCSV('building-4');
    fetchCSV('building-5');
    fetchCSV('building-6');
  });


  // อัปเดตค่าใน DOM
  const peakElement = document.getElementById(`peak-num-${buildingId}`);
  if (peakElement) {
      peakElement.innerText = maxPower;
  }

  const latestPowerElement = document.getElementById(`power-num-${buildingId}`);
  if (latestPowerElement) {
      latestPowerElement.innerText = latestPower;
  }