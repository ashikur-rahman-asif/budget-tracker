document
  .getElementById("kitkat-buy-btn")
  .addEventListener("click", function () {
    const kitkatQuantity = getInputFieldValue("kitkat-quantity");
    const kitkatCost = kitkatQuantity * 200;
    //   console.log(kitkatCost)
    setInnerText("chocolate", kitkatCost);
    total();
  });
document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const roseQuantity = getInputFieldValue("rose-quantity");
  const roseCost = roseQuantity * 100;
  //   console.log(kitkatCost)
  setInnerText("rose", roseCost);
  total();
});
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const diaryQuantity = getInputFieldValue("diary-quantity");
  const diaryCost = diaryQuantity * 100;
  //   console.log(kitkatCost)
  setInnerText("diary", diaryCost);
  total();
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function getInputFieldValue(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value);
}

function total() {
  const chocolate = document.getElementById("chocolate").innerText;
  const rose = document.getElementById("rose").innerText;
  const diary = document.getElementById("diary").innerText;
  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  setInnerText("total", totalSum);
}

document.getElementById("promo-apply").addEventListener("click", function () {
  const promoCode = getInputFieldValue("promo-code");
  if (promoCode === 101) {
    const total = document.getElementById("total").innerText;
    const sum =parseInt(total)- (parseInt(total) * 0.1);
     setInnerText('all-total',sum)
  } else {
    alert("wrong promo code");
  }
  
});
