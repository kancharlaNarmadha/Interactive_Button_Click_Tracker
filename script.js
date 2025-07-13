function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

document.getElementById("clickBtn").addEventListener("click", function () {
  const newCount = counter();
  document.getElementById("count").textContent = newCount;
});
