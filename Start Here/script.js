//currentActive++ : '++' adds one to the current number (1, 2, etc.)

//Next: keep within its boundaries, don't go past 4 (currentActive = circles.length)

//Previous: If current active is at 1 then set it equal to 1 (can't go back any further)

//Update: For each circle I'm going to check to see if the index of that particular circle is less than the current active. If so, going to add the active class onto the circle

//Get the percentages for the width property of the progress bar by :
//1. divide the active.length by circles.length (ie. .5)
//2. multiply by 100 (50)
//3. concatenate with a '%' string

//Get bar to be behind the circle: in step 1 above wrap actives.length and circles.length in own parenthesis, subtract 1 from both sides

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // console.log(currentActive);

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  // console.log(currentActive);

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
