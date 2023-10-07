// if we use strict mode some output will not work and error appears
// 'use strict';

(function () {
  try {
    const output = document.querySelector('.output');
    const btns = document.querySelectorAll('.btn');

    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let value = e.target.textContent;
        if (value === '=') {
          equalTo();
        } else if (value === 'AC') {
          allClear();
        } else if (value === 'C') {
          clear();
        } else output.value += value;
      });
    });

    function equalTo() {
      output.value = eval(output.value);
    }

    // clearing entire output
    function allClear() {
      output.value = '';
    }

    // clearing one-step backward
    function clear() {
      output.value = output.value.slice(0, -1);
    }
  } catch (err) {
    console.error(err.message);
  }
})();
