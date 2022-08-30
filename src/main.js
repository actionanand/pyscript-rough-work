const mainWrap = document.getElementById('main-wrap');

const pyRepl = document.getElementById('python-repl');

const replBtn = document.getElementById('repl-btn');


replBtn.addEventListener('click', () => {
  // console.log(pyRepl);
  if (pyRepl.style.display === 'none') {
    pyRepl.style.display = 'block';
    mainWrap.classList.remove('h-screen');
    replBtn.innerText = 'Hide Repl';
  } else {
    pyRepl.style.display = 'none';
    mainWrap.classList.add('h-screen');
    replBtn.innerText = 'Show Repl';
  }

});
