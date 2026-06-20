
function isValidLuhn(number) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function getCheckDigit(base) {
  let sum = 0;
  let shouldDouble = true;

  for (let i = base.length - 1; i >= 0; i--) {
    let digit = Number(base[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (10 - (sum % 10)) % 10;
}


function generateValidNumber(length = 16) {
  let base = "";

  for (let i = 0; i < length - 1; i++) {
    base += Math.floor(Math.random() * 10);
  }

  const checkDigit = getCheckDigit(base);

  return base + checkDigit;
}


for (let i = 0; i < 5; i++) {
  const num = generateValidNumber(16);
  console.log(num, isValidLuhn(num));
}