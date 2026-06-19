let count = 0;

function increment() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrement() {
  count--;
  document.getElementById("count").innerText = count;
}

function reset() {
  count = 0;
  document.getElementById("count").innerText = count;
}
