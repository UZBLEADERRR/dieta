// Temur Fit - 40 Kunlik Challenge Dieta interaktiv kodi

function calculateBMI() {
    const weightInput = document.getElementById('user-weight');
    const heightInput = document.getElementById('user-height');
    const resultArea = document.getElementById('bmi-result-area');
    const scoreElem = document.getElementById('bmi-score');
    const statusElem = document.getElementById('bmi-status');
    const adviceElem = document.getElementById('bmi-advice');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Iltimos, vazn va bo'yingizni to'g'ri kiriting!");
        return;
    }

    // BMI formulasi: kg / (bo'y_metrda ^ 2)
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    scoreElem.textContent = bmi;

    let status = '';
    let advice = '';
    let statusColor = '#00f59b';

    if (bmi < 18.5) {
        status = "Kam vazn (Vazn yetishmovchiligi)";
        advice = "Sizga mushak massasini to'plash va to'g'ri ovqatlanish rejasi zarur.";
        statusColor = '#00d2ff';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal vazn (Ideal holat)";
        advice = "Ajoyib! 40 kunlik challenge orqali tanani yanada baquvvat va relyefli qilasiz.";
        statusColor = '#00f59b';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Ortiqcha vazn (Yengil semizlik)";
        advice = "Sizga 40 kunlik challenge aynan mos! 7-10 kg yog'dan xalos bo'lib yengil tortasiz.";
        statusColor = '#ffb300';
    } else {
        status = "Yuqori darajadagi ortiqcha vazn";
        advice = "Kechiktirmasdan dasturga qo'shiling. Temur bilan shaxsiy reja orqali sog'lom va tez natijaga erishing!";
        statusColor = '#ff5e3a';
    }

    statusElem.textContent = status;
    statusElem.style.color = statusColor;
    adviceElem.textContent = advice;
    resultArea.style.display = 'block';

    // Natijaga silliq scroll
    resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Barcha ichki havolalarga silliq scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
