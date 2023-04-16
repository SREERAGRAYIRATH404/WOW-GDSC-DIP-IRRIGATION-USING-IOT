// JavaScript code for drip irrigation system web application

// DOM elements
const soilMoistureElement = document.getElementById("soil-moisture");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const adjustBtn = document.getElementById("adjust-btn");
const notificationList = document.getElementById("notification-list");

// Event listeners for buttons
startBtn.addEventListener("click", startDripIrrigation);
stopBtn.addEventListener("click", stopDripIrrigation);
adjustBtn.addEventListener("click", adjustFlowRate);

// Function to start drip irrigation
function startDripIrrigation() {
  // Send request to start drip irrigation to IoT device
  // Update UI and show success/failure notification
  notificationList.innerHTML += "<li>Drip irrigation started.</li>";
}

// Function to stop drip irrigation
function stopDripIrrigation() {
  // Send request to stop drip irrigation to IoT device
  // Update UI and show success/failure notification
  notificationList.innerHTML += "<li>Drip irrigation stopped.</li>";
}

// Function to adjust flow rate of drip irrigation
function adjustFlowRate() {
  // Send request to adjust flow rate to IoT device
  // Update UI and show success/failure notification
  notificationList.innerHTML += "<li>Flow rate adjusted.</li>";
}

// Function to update sensor data in UI
function updateSensorData(soilMoisture, temperature, humidity) {
  soilMoistureElement.textContent = soilMoisture;
  temperatureElement.textContent = temperature;
  humidityElement.textContent = humidity;
}

// Function to receive sensor data from IoT device and update UI
function receiveSensorData(data) {
  // Parse received data
  const { soilMoisture, temperature, humidity } = JSON.parse(data);

  // Update UI with received sensor data
  updateSensorData(soilMoisture, temperature, humidity);
}

// Function to receive notifications from IoT device and update UI
function receiveNotification(notification) {
  // Update UI with received notification
  notificationList.innerHTML += `<li>${notification}</li>`;
}

// Example of receiving sensor data and notifications from IoT device
// This code assumes that sensor data and notifications are received through WebSocket or other means

// Example of updating sensor data in UI with received data
const receivedSensorData = {
  soilMoisture: 50,
  temperature: 25,
  humidity: 60
};
receiveSensorData(JSON.stringify(receivedSensorData));

// Example of updating notifications in UI with received notification
const receivedNotification = "Drip irrigation started.";
receiveNotification(receivedNotification);
