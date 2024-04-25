function assessRisk() {
  
  const cropType = document.getElementById('cropType').value;
  const weatherConditions = document.getElementById('weatherConditions').value.toLowerCase();
  const pestInfestation = document.getElementById('pestInfestation').value.toLowerCase();
  const marketDemand = document.getElementById('marketDemand').value.toLowerCase();
  const soilQuality = document.getElementById('soilQuality').value.toLowerCase();
  const location = document.getElementById('location').value.toLowerCase();
  const financialStability = document.getElementById('financialStability').value.toLowerCase();

  let riskScore = 0;

  if (weatherConditions === 'drought' || weatherConditions === 'heavy rainfall') {
      riskScore += 2; 
  }

  if (pestInfestation === 'high') {
      riskScore += 2;
  }

  if (marketDemand === 'low') {
      riskScore += 1;
  }

  if (soilQuality === 'poor') {
      riskScore += 1; 
  }

  if (location === 'coastal' || location === 'highland') {
      riskScore += 1; 
  }

  if (financialStability === 'low') {
      riskScore += 2; 
  }

  let riskLevel;
  if (riskScore >= 5) {
      riskLevel = 'High';
  } else if (riskScore >= 3) {
      riskLevel = 'Moderate';
  } else {
      riskLevel = 'Low';
  }

  alert(`The risk level for the selected crop is: ${riskLevel}`);
}
