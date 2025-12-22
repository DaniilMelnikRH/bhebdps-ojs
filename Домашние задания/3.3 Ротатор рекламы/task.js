const MIN_SPEED = 1500;
const rotators = document.querySelectorAll(".rotator");

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll(".rotator__case");
  let index = 0;

  function rotate(){
    const current = cases[index];
    current.classList.remove("rotator__case_active");

    index = (index + 1) % cases.length;
    const next = cases[index];

    if (next.dataset.color) next.style.color = next.dataset.color;

    next.classList.add("rotator__case_active");
    const speed = Math.max(
      Number(next.dataset.speed) || 1000,
      MIN_SPEED
    );
    setTimeout(rotate, speed);

  }

  const startSpeed = Math.max(
    Number(cases[index].dataset.speed) || 1000,
    MIN_SPEED
  );
  setTimeout(rotate, startSpeed);

});
