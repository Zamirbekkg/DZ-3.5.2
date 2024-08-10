
document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperatureInput');
    const toggleButton = document.getElementById('toggleButton');
    const result = document.getElementById('result');

    let isCelsius = true;

    function convertTemperature(temp) {
        if (isCelsius) {
            return (temp * 9/5) + 32;
        } else {
            return (temp - 32) * 5/9; 
        }
    }

    function updateResult() {
        const inputValue = parseFloat(temperatureInput.value);
        if (isNaN(inputValue)) {
            result.textContent = 'Введите корректное значение температуры.';
            return;
        }

        const convertedTemp = convertTemperature(inputValue);
        const unit = isCelsius ? '°F' : '°C';
        result.textContent = `Результат: ${convertedTemp.toFixed(2)} ${unit}`;
    }

    toggleButton.addEventListener('click', () => {
        isCelsius = !isCelsius;
        toggleButton.textContent = isCelsius ? 'Переключить на °F' : 'Переключить на °C';
        updateResult();
    });

    temperatureInput.addEventListener('input', updateResult);
});