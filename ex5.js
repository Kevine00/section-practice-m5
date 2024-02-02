let num = 1;
let intervalId;

function printNumber() {
  console.log(num);

  if (num === 10) {
    clearInterval(intervalId);
  } else {
    num++;
  }
}
intervalId = setInterval(printNumber, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);
