const sensorData = "Sensor data: Soil moisture is 45%";
const tractorData = "Tractor data: GPS coordinates (35.123, -80.456)";
const droneData = "Drone data: Crop health is 80%";

const sensorButton = document.getElementById("sensor-button");
const tractorButton = document.getElementById("tractor-button");
const droneButton = document.getElementById("drone-button");
const dataDisplay = document.getElementById("data-display");

sensorButton.addEventListener("click", () => {
    displayData(sensorData);
});

tractorButton.addEventListener("click", () => {
    displayData(tractorData);
});

droneButton.addEventListener("click", () => {
    displayData(droneData);
});

function displayData(data) {
    dataDisplay.innerHTML = "";
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    dataDisplay.appendChild(paragraph);
}
