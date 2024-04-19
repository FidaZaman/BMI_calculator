function result() {
    const weight = parseFloat(document.getElementById('weight').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inch = parseFloat(document.getElementById('inch').value);
  
    // Calculate BMI (weight (kg) / height (m)^2)
    const heightInMeters = (feet * 0.3048) + (inch * 0.0254);
    const bmi = weight / (heightInMeters * heightInMeters);
    const chart = document.getElementById("chart");
    // Display the BMI result with interpretation
    let resultText;
    if (isNaN(bmi)) {
      resultText = "Please enter valid weight, feet, and inch values.";
    } else if (bmi < 18.5) {
      resultText = `Your BMI is ${bmi.toFixed(2)}.\n You are considered underweight.`;
      chart.style.display = "block";
    } else if (bmi < 25) {
      resultText = `Your BMI is ${bmi.toFixed(2)}.\n You are considered normal weight.`;
      chart.style.display = "block";
    } else if (bmi < 30) {
      resultText = `Your BMI is ${bmi.toFixed(2)}.\n You are considered overweight.`;
      chart.style.display = "block";
    } else {
      resultText = `Your BMI is ${bmi.toFixed(2)}.\n You are considered obese.`;
      chart.style.display = "block";
    }
  
    document.getElementById('result').textContent = resultText;
    
  }
  
  function chart() {
    const bmiChart = document.getElementById("bmi-chart");
    const chartButton = document.getElementById("chart");
    bmiChart.style.display = bmiChart.style.display === 'none' ? 'block' : 'none';
    chartButton.textContent = bmiChart.style.display === 'none' ? 'Show chart' : 'Hide chart';
  }