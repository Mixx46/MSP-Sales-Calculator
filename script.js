function calculate() {
    const annualRevenue = document.getElementById('annualRevenue').value;
    const annualServiceFee = document.getElementById('annualServiceFee').value;

    const revenueLossPerMinute = ((annualRevenue / 260 / 8 / 60) || 0).toFixed(2);
    const serviceCostPerMinute = ((annualServiceFee / 260 / 8 / 60) || 0).toFixed(2);

    document.getElementById('revenueLossPerMinute').innerText = revenueLossPerMinute;
    document.getElementById('serviceCostPerMinute').innerText = serviceCostPerMinute;
}
