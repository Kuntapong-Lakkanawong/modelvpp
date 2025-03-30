// อ่านค่าจาก CSS Variable
function getCssVariableColor(variableName) {
    let color = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    return Cesium.Color.fromCssColorString(color);
}

// กำหนดตัวแปร CSS ในไฟล์ CSS หรือ JavaScript
document.documentElement.style.setProperty("--base-color-3", "#00AA00");
document.documentElement.style.setProperty("--font-white-color", "#EFEFEF");
document.documentElement.style.setProperty("--base-color-1", "#005500");

// กำหนด Viewer และ Terrain จาก Cesium Ion
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMmUwZTYyZS04YmMyLTRkYzctYWZhNS1lNWVlMzdiNzY2ZjAiLCJpZCI6MjcwNTYxLCJpYXQiOjE3Mzc0ODU3OTZ9.jRd5GO0B3NTYsCj2BUtGJ_f3dvcv4WBBgFBFxY9_-JQ';

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
    animation: false,
    timeline: false
});

// ตั้งค่ากล้องไปยังพิกัดที่ต้องการ (99.894497, 8.641550)
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(100.5232641035322, 13.726165899451818, 500), // [long, lat, height]
    orientation: {
        heading: Cesium.Math.toRadians(25.0),   // หมุนไปทางทิศ 0°
        pitch: Cesium.Math.toRadians(-20.0),  // มุมมองเอียง
        roll: 0.0
    }
});

// ฟังก์ชันในการรีเซ็ตตำแหน่งกล้อง
function resetView() {
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(100.5232641035322, 13.726165899451818, 500), // [long, lat, height]
        orientation: {
            heading: Cesium.Math.toRadians(25.0),
            pitch: Cesium.Math.toRadians(-20.0),
            roll: 0.0
        }
    });
}

  // โหลด Cesium OSM Buildings
  var buildings = viewer.scene.primitives.add(
    Cesium.createOsmBuildings()
);

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
        material: Cesium.Color.BLACK.withAlpha(0.92), // ทำให้พื้นที่อื่นมืด
    }
});

// สร้าง Pin บน Cesium
var pinEntity1 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52519117011063, 13.736225763830252, 15),
    point: {
        pixelSize: 10,
        color: getCssVariableColor("--base-color-1")
    },
    label: {
        text: 'EVC',
        font: '16pt sans-serif',
        fillColor: getCssVariableColor("--font-white-color"),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        backgroundColor: getCssVariableColor("--base-color-3"),
        showBackground: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    },
    name: 'สถานีชาร์จ',
});

var pinEntity2 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52846, 13.7389, 25),
    point: {
        pixelSize: 10,
        color: getCssVariableColor("--base-color-1")
    },
    label: {
        text: 'A4',
        font: '16pt sans-serif',
        fillColor: getCssVariableColor("--font-white-color"),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        backgroundColor: getCssVariableColor("--base-color-3"),
        showBackground: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    },
    name: 'อาคารจามจุรี 4' // เพิ่มชื่ออาคาร
});

var pinEntity3 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52564, 13.73595, 25),
    point: {
        pixelSize: 10,
        color: getCssVariableColor("--base-color-1")
        
    },
    label: {
        text: 'A16',
        font: '16pt sans-serif',
        fillColor: getCssVariableColor("--font-white-color"),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        backgroundColor: getCssVariableColor("--base-color-3"),
        showBackground: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    },
    name: 'อาคารจามจุรี 9'
});

var pinEntity4 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.531, 13.73553, 25),
    point: {
        pixelSize: 10,
        color: getCssVariableColor("--base-color-1")
        
    },
    label: {
        text: 'A104',
        font: '16pt sans-serif',
        fillColor: getCssVariableColor("--font-white-color"),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        backgroundColor: getCssVariableColor("--base-color-3"),
        showBackground: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    },
    name: 'อาคารจุลจักรพงษ์'
});

var pinEntity5 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.53349, 13.73938, 55),
    point: {
        pixelSize: 10,
        color: getCssVariableColor("--base-color-1")
        
    },
    label: {
        text: 'BRK',
        font: '16pt sans-serif',
        fillColor: getCssVariableColor("--font-white-color"),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        backgroundColor: getCssVariableColor("--base-color-3"),
        showBackground: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    },
    name: 'อาคารบรมราชกุมารี'
});

var pinEntity6 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100.52703, 13.74067, 45),
    point: {
        pixelSize: 10,
        color: getCssVariableColor("--base-color-1")
        
    },
    label: {
        text: 'E39',
        font: '16pt sans-serif',
        fillColor: getCssVariableColor("--font-white-color"),
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        backgroundColor: getCssVariableColor("--base-color-3"),
        showBackground: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // ขยับข้อความให้อยู่เหนือจุด
        pixelOffset: new Cesium.Cartesian2(0, -15) // ปรับตำแหน่งเพิ่มเติม
    },
    name: 'อาคารวิทยนิเวศน์'
});

// Tooltip
var tooltip = document.getElementById('tooltip');
var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);

handler.setInputAction(function (movement) {
    var pickedObject = viewer.scene.pick(movement.endPosition);
    if (Cesium.defined(pickedObject) && pickedObject.id && pickedObject.id.name) {
        tooltip.style.display = 'block';
        tooltip.innerHTML = pickedObject.id.name;
        tooltip.style.left = movement.endPosition.x + 10 + 'px';
        tooltip.style.top = movement.endPosition.y + 10 + 'px';
    } else {
        tooltip.style.display = 'none';
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

// สร้างเหตุการณ์สำหรับคลิกที่ Pin
viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(movement) {
    // ตรวจสอบว่าวัตถุที่คลิกคือ Pin หรือไม่
    var pickedObject = viewer.scene.pick(movement.position);
    if (Cesium.defined(pickedObject)) {
        // ตรวจสอบว่า clicked object เป็น pinEntity1 หรือ pinEntity2
        if (pickedObject.id === pinEntity1) {
            const buildingName = pickedObject.id.name; // ดึงชื่อของอาคาร
            switch (buildingName) {
                case "สถานีชาร์จ":
                    window.location.href = "forecast-building-1.html";
                    break;
            }
        } else if (pickedObject.id === pinEntity2) {
            const buildingName = pickedObject.id.name; // ดึงชื่อของอาคาร
            switch (buildingName) {
                case "อาคารจามจุรี 4":
                    window.location.href = "forecast-building-2.html";
                    break;
            }
        } else if (pickedObject.id === pinEntity3) {
            const buildingName = pickedObject.id.name; // ดึงชื่อของอาคาร
            switch (buildingName) {
                case "อาคารจามจุรี 9":
                    window.location.href = "forecast-building-3.html";
                    break;
            }
        } else if (pickedObject.id === pinEntity4) {
            const buildingName = pickedObject.id.name; // ดึงชื่อของอาคาร
            switch (buildingName) {
                case "อาคารจุลจักรพงษ์":
                    window.location.href = "forecast-building-4.html";
                    break;
            }
        } else if (pickedObject.id === pinEntity5) {
            const buildingName = pickedObject.id.name; // ดึงชื่อของอาคาร
            switch (buildingName) {
                case "อาคารบรมราชกุมารี":
                    window.location.href = "forecast-building-5.html";
                    break;
            }
        } else if (pickedObject.id === pinEntity6) {
            const buildingName = pickedObject.id.name; // ดึงชื่อของอาคาร
            switch (buildingName) {
                case "อาคารวิทยนิเวศน์":
                    window.location.href = "forecast-building-6.html";
                    break;
            }
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// เพิ่ม event handler สำหรับ hover ทุกอาคาร
var pins = [pinEntity1, pinEntity2, pinEntity3, pinEntity4, pinEntity5, pinEntity6];
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

handler.setInputAction(function (movement) {
    var pickedObject = viewer.scene.pick(movement.endPosition);

    if (Cesium.defined(pickedObject) && pins.includes(pickedObject.id)) {
        viewer.canvas.style.cursor = "url(/img/cursortest12.png), pointer"; // เปลี่ยน cursor เป็นรูปภาพ
    } else {
        viewer.canvas.style.cursor = "url(/img/cursor-default-24.png),  default"; // รีเซ็ต cursor
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);