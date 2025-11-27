// frontend/src/apiConfig.js

// If the browser URL has port "5173", we are in Local Dev mode.
const isLocalDev = window.location.port === "5173";

// Local uses port 8085. Tomcat uses port 8080/HealthConnect.
export const API_BASE_URL = isLocalDev 
  ? "http://localhost:8085" 
  : "http://localhost:8080/HealthConnect";