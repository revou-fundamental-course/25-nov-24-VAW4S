document.addEventListener('DOMContentLoaded', function() {
    const hitungBMIButton = document.getElementById('hitung-bmi');
    hitungBMIButton.addEventListener('click', hitungBMI);

    function hitungBMI() {
        const inputs = ['berat-badan', 'tinggi-badan', 'usia'].map(id => {
            const value = document.getElementById(id).value;
            return id === 'tinggi-badan' ? parseFloat(value) / 100 : parseFloat(value);
        });

        const [beratBadan, tinggiBadan, usia] = inputs;

        if (inputs.some(isNaN)) {
            alert('Harap isi semua input dengan benar!');
            return;
        }

        const bmi = beratBadan / (tinggiBadan * tinggiBadan);
        tampilkanHasil(bmi);
    }

    function tampilkanHasil(bmi) {
        const kategori = [
            { max: 18.5, text: 'Kekurangan Berat Badan', desc: 'Anda berada di bawah berat badan ideal. Pertimbangkan untuk meningkatkan asupan nutrisi.' },
            { max: 25, text: 'Berat Badan Normal', desc: 'Berat badan Anda dalam kategori sehat. Pertahankan pola hidup seimbang.' },
            { max: 30, text: 'Kelebihan Berat Badan', desc: 'Anda berada di atas berat badan ideal. Pertimbangkan diet sehat dan olahraga teratur.' },
            { max: Infinity, text: 'Obesitas', desc: 'Berat badan Anda berada dalam kategori obesitas. Disarankan konsultasi dengan ahli gizi.' }
        ];
        const hasil = kategori.find(k => bmi < k.max);

        document.getElementById('bmi-value').textContent = bmi.toFixed(1);
        document.getElementById('bmi-category').textContent = hasil.text;
        document.getElementById('bmi-description').textContent = hasil.desc;
    }
});

    function validasiInput(input, min, max) {
        const value = parseFloat(input.value);
        if (isNaN(value) || value < min || value > max) {
            input.classList.add('error');
            return false;
        }
        input.classList.remove('error');
        return true;
    }

    const BMI_CONFIG = {
        kategoriBMI: [
            { max: 18.5, label: 'Kekurangan', warna: '#3498db' },
            { max: 25, label: 'Normal', warna: '#2ecc71' },
            { max: 30, label: 'Berlebih', warna: '#f39c12' },
            { max: Infinity, label: 'Obesitas', warna: '#e74c3c' }
        ]
    }