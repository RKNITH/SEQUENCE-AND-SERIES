document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('seriesForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let seriesType = document.getElementById('seriesType').value;
        let firstTerm = parseFloat(document.getElementById('firstTerm').value);
        let commonDifferenceRatio = parseFloat(document.getElementById('commonDifferenceRatio').value);
        let numberOfTerms = parseInt(document.getElementById('numberOfTerms').value);

        if (isNaN(firstTerm) || isNaN(commonDifferenceRatio) || isNaN(numberOfTerms)) {
            alert('Please enter valid numbers.');
            return;
        }

        let nthTerm = calculateNthTerm(seriesType, firstTerm, commonDifferenceRatio, numberOfTerms);
        let seriesSum = calculateSeriesSum(seriesType, firstTerm, commonDifferenceRatio, numberOfTerms);
        displayResult(nthTerm, seriesSum);
    });
});

function calculateNthTerm(type, a, r, n) {
    switch (type) {
        case 'arithmetic':
            return a + (n - 1) * r;
        case 'geometric':
            return a * Math.pow(r, n - 1);
        case 'harmonic':
            return 1 / (1 / a + (n - 1) * r);
        default:
            return 'Select a series type.';
    }
}

function calculateSeriesSum(type, a, r, n) {
    switch (type) {
        case 'arithmetic':
            return (n / 2) * (2 * a + (n - 1) * r);
        case 'geometric':
            if (r === 1) {
                return a * n;
            } else {
                return a * (Math.pow(r, n) - 1) / (r - 1);
            }
        case 'harmonic':
            return 'Harmonic series do not have a finite sum.';
        default:
            return 'Select a series type.';
    }
}

function displayResult(nthTerm, seriesSum) {
    let resultMessage = document.getElementById('resultMessage');
    let seriesResult = document.getElementById('seriesResult');

    resultMessage.textContent = `Nth Term: ${nthTerm}`;
    seriesResult.textContent = `Series Sum: ${seriesSum}`;
}
