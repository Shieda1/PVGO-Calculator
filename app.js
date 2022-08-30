// https://www.omnicalculator.com/finance/pvgo
// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const PVGORadio = document.getElementById('PVGORadio');
const earningsRadio = document.getElementById('earningsRadio');
const numberofsharesoutstandingRadio = document.getElementById('numberofsharesoutstandingRadio');
const sharepriceRadio = document.getElementById('sharepriceRadio');
const costofequityRadio = document.getElementById('costofequityRadio');

let PVGO;
let earnings = v1;
let numberofsharesoutstanding = v2;
let shareprice = v3;
let costofequity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

PVGORadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings';
  variable2.textContent = 'Number of shares outstanding';
  variable3.textContent = 'Share price';
  variable4.textContent = 'Cost of equity';
  earnings = v1;
  numberofsharesoutstanding = v2;
  shareprice = v3;
  costofequity = v4;
  result.textContent = '';
});

earningsRadio.addEventListener('click', function() {
  variable1.textContent = 'PVGO';
  variable2.textContent = 'Number of shares outstanding';
  variable3.textContent = 'Share price';
  variable4.textContent = 'Cost of equity';
  PVGO = v1;
  numberofsharesoutstanding = v2;
  shareprice = v3;
  costofequity = v4;
  result.textContent = '';
});

numberofsharesoutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'PVGO';
  variable2.textContent = 'Earnings';
  variable3.textContent = 'Share price';
  variable4.textContent = 'Cost of equity';
  PVGO = v1;
  earnings = v2;
  shareprice = v3;
  costofequity = v4;
  result.textContent = '';
});

sharepriceRadio.addEventListener('click', function() {
  variable1.textContent = 'PVGO';
  variable2.textContent = 'Earnings';
  variable3.textContent = 'Number of shares outstanding';
  variable4.textContent = 'Cost of equity';
  PVGO = v1;
  earnings = v2;
  numberofsharesoutstanding = v3;
  costofequity = v4;
  result.textContent = '';
});

costofequityRadio.addEventListener('click', function() {
  variable1.textContent = 'PVGO';
  variable2.textContent = 'Earnings';
  variable3.textContent = 'Number of shares outstanding';
  variable4.textContent = 'Share price';
  PVGO = v1;
  earnings = v2;
  numberofsharesoutstanding = v3;
  shareprice = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(PVGORadio.checked)
    result.textContent = `PVGO = ${computePVGO().toFixed(2)}`;

  else if(earningsRadio.checked)
    result.textContent = `Earnings = ${computeearnings().toFixed(2)}`;

  else if(numberofsharesoutstandingRadio.checked)
    result.textContent = `Number of shares outstanding = ${computenumberofsharesoutstanding().toFixed(2)}`;

  else if(sharepriceRadio.checked)
    result.textContent = `Share price = ${computeshareprice().toFixed(2)}`;

  else if(costofequityRadio.checked)
    result.textContent = `Cost of equity = ${computecostofequity().toFixed(2)}`;
})

// calculation

function computePVGO() {
  return (Number(shareprice.value) - (Number(earnings.value) / (Number(numberofsharesoutstanding.value)))) / Number(costofequity.value);
}

function computeearnings() {
  return (Number(shareprice.value) - (Number(PVGO.value) * (Number(costofequity.value)))) * Number(numberofsharesoutstanding.value);
}

function computenumberofsharesoutstanding() {
  return (Number(earnings.value) / (Number(shareprice.value) - (Number(PVGO.value)))) * Number(costofequity.value);
}

function computeshareprice() {
  return (Number(PVGO.value) * Number(costofequity.value)) + (Number(earnings.value) / (Number(numberofsharesoutstanding.value)));
}

function computecostofequity() {
  return (Number(shareprice.value) - (Number(earnings.value) / (Number(numberofsharesoutstanding.value)))) / Number(PVGO.value);
}