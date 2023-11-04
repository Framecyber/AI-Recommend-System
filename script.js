// Define a global variable to store calculated BMI
let calculatedBMI = 0;

document.getElementById('calculate-result').addEventListener('click', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const BMIResult = document.getElementById('bmi-result');
    const recommendationsDiv = document.getElementById('recommendations');
    const favoriteActivityInput = document.getElementById('favorite-activity');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const favoriteActivity = favoriteActivityInput.value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        BMIResult.textContent = "โปรดป้อนส่วนสูงและน้ำหนักที่ถูกต้อง";
        recommendationsDiv.innerHTML = '';
    } else {
        // Calculate BMI and store it in the global variable
        const h1 = height / 100; // Convert height from cm to meters
        calculatedBMI = weight / (h1 * h1);
        BMIResult.textContent = `ค่า BMI ของคุณคือ: ${calculatedBMI.toFixed(2)}`;

        // Call the function to get recommendations
        const PD = document.getElementById('disease').value;
        const AGE = parseInt(document.getElementById('age').value);
        const recommendations = getRecommendations(calculatedBMI, PD, AGE, favoriteActivity);

        recommendationsDiv.innerHTML = '';

        if (recommendations.length > 0) {
            recommendationsDiv.innerHTML = "<strong>กิจกรรมที่แนะนำ:</strong><br>";
            recommendations.forEach((activity, idx) => {
                recommendationsDiv.innerHTML += `${idx + 1}. ${activity}<br>`;
            });
        } else {
            recommendationsDiv.innerHTML = "ไม่มีคำแนะนำ";
        }
    }
});

function getRecommendations(BMI, PD, AGE, favoriteActivity) {
    let recommendedActivities = [];

    if (BMI < 18.5) {
        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("อ่านหนังสือ", "รดน้ำต้นไม้", "วาดรูป");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("รดน้ำต้นไม", "วาดรูป");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("เต้นแอโรบิค", "เต้น cover", "เต้นลีลาศ");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("เต้น cover", "เต้นลีลาศ");
            }
        }
    } else if (BMI >= 18.5 && BMI < 24.9) {
        // Add conditions for favorite activities
        if (favoriteActivity.toLowerCase() === "วิ่ง") {
            recommendedActivities.push("วิ่ง", "วิ่งบนลู่วิ่ง");
        } else if (favoriteActivity.toLowerCase() === "เดิน") {
            recommendedActivities.push("เดิน", "เดินเร็ว");
        } else if (favoriteActivity.toLowerCase() === "เต้น") {
            recommendedActivities.push("เต้นรำ", "เต้นสมัย");
        } else if (favoriteActivity.toLowerCase() === "ว่ายน้ำ") {
            recommendedActivities.push("ว่ายน้ำ", "ชายหาด");
        } else if (favoriteActivity.toLowerCase() === "อ่านหนังสือ") {
            recommendedActivities.push("อ่านหนังสือ", "อ่านนิยาย");
        } else if (favoriteActivity.toLowerCase() === "รดน้ำต้นไม้") {
            recommendedActivities.push("รดน้ำต้นไม้", "ดูแลสวน");
        } else if (favoriteActivity.toLowerCase() === "โยคะ") {
            recommendedActivities.push("โยคะ", "โยคะสุขภาพ");
        } else if (favoriteActivity.toLowerCase() === "แอโรบิค") {
            recommendedActivities.push("แอโรบิค", "แอโรบิคทางน้ำ");
        }

        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("รดน้ำต้นไม");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("เล่นบอร์ดเกม");
            }
        } else if (PD === "ไม่มี") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("เล่นกีฬา", "ว่ายน้ำ");
            }
        } else if (PD === "เบาหวาน") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("เดินเล่น", "ทำสวน");
            }
        }
    } else if (BMI >= 24.9 && BMI < 29.9) {
        // Add conditions for favorite activities
        if (favoriteActivity.toLowerCase() === "วิ่ง") {
            recommendedActivities.push("วิ่ง", "วิ่งบนลู่วิ่ง");
        } else if (favoriteActivity.toLowerCase() === "เดิน") {
            recommendedActivities.push("เดิน", "เดินเร็ว");
        } else if (favoriteActivity.toLowerCase() === "เต้น") {
            recommendedActivities.push("เต้นรำ", "เต้นสมัย");
        } else if (favoriteActivity.toLowerCase() === "ว่ายน้ำ") {
            recommendedActivities.push("ว่ายน้ำ", "ชายหาด");
        } else if (favoriteActivity.toLowerCase() === "อ่านหนังสือ") {
            recommendedActivities.push("อ่านหนังสือ", "อ่านนิยาย");
        } else if (favoriteActivity.toLowerCase() === "รดน้ำต้นไม้") {
            recommendedActivities.push("รดน้ำต้นไม้", "ดูแลสวน");
        } else if (favoriteActivity.toLowerCase() === "โยคะ") {
            recommendedActivities. push("โยคะ", "โยคะสุขภาพ");
        } else if (favoriteActivity.toLowerCase() === "แอโรบิค") {
            recommendedActivities.push("แอโรบิค", "แอโรบิคทางน้ำ");
        }

        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("รำมวยไทยเก็ก", "Art");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("รำมวยไทยเก็ก", "แอโรบิคทางน้ำ");
            }
        }
    } else if (BMI >= 30) {
        // Add conditions for favorite activities
        if (favoriteActivity.toLowerCase() === "วิ่ง") {
            recommendedActivities.push("วิ่ง", "วิ่งบนลู่วิ่ง");
        } else if (favoriteActivity.toLowerCase() === "เดิน") {
            recommendedActivities.push("เดิน", "เดินเร็ว");
        } else if (favoriteActivity.toLowerCase() === "เต้น") {
            recommendedActivities.push("เต้นรำ", "เต้นสมัย");
        } else if (favoriteActivity.toLowerCase() === "ว่ายน้ำ") {
            recommendedActivities.push("ว่ายน้ำ", "ชายหาด");
        } else if (favoriteActivity.toLowerCase() === "อ่านหนังสือ") {
            recommendedActivities.push("อ่านหนังสือ", "อ่านนิยาย");
        } else if (favoriteActivity.toLowerCase() === "รดน้ำต้นไม้") {
            recommendedActivities.push("รดน้ำต้นไม้", "ดูแลสวน");
        } else if (favoriteActivity.toLowerCase() === "โยคะ") {
            recommendedActivities.push("โยคะ", "โยคะสุขภาพ");
        } else if (favoriteActivity.toLowerCase() === "แอโรบิค") {
            recommendedActivities.push("แอโรบิค", "แอโรบิคทางน้ำ");
        }

        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("แอโรบิคทางน้ำ");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("รำไทย");
            }
        }
    }

    return recommendedActivities;
}
