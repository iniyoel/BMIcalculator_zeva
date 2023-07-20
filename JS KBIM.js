function calculateBMI() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        resultDiv.innerHTML = 'Masukkan berat dan tinggi badan yang valid.';
        return;
    }

    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2);

    let category = '';
    let explanation = '';
    if (bmi < 18.5) {
        category = 'Kurus';
        explanation = 'BMI kurang dari 18.5 menunjukkan berat badan Anda kurang dari yang seharusnya. Anda perlu memperhatikan asupan makanan dan gizi yang cukup untuk mencapai berat badan yang ideal.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        explanation = 'BMI antara 18.5 dan 24.9 menunjukkan berat badan Anda berada dalam kisaran normal. Pertahankan pola makan sehat dan gaya hidup aktif untuk tetap sehat.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Gemuk';
        explanation = 'BMI antara 25 dan 29.9 menunjukkan berat badan Anda lebih dari yang seharusnya. Untuk kesehatan yang lebih baik, penting untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
    } else {
        category = 'Obesitas';
        explanation = 'BMI 30 atau lebih menunjukkan bahwa Anda mengalami obesitas. Obesitas meningkatkan risiko berbagai masalah kesehatan. Penting untuk berkonsultasi dengan dokter atau ahli gizi untuk membuat rencana penurunan berat badan yang aman dan efektif.';
    }

    resultDiv.innerHTML = `BMI Anda: ${roundedBMI}<br>Kategori: ${category}<br><br>${explanation}`;
}