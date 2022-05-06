function activeKey() {
  const lang = localStorage.getItem('lang');
  const low = document.querySelectorAll('.low');
  const shifton = document.querySelectorAll('.shifton');
  const keyboard = document.querySelector('.keyboard');
  const key = document.querySelectorAll('.key');
  document.onkeydown = function (event) {
    const target = event.code;
    if (target === 'ShiftLeft' || target === 'ShiftRight') {
      if (lang === 'en') {
        low.forEach((element) => {
          element.classList.add('hidden');
        });
        shifton.forEach((element) => {
          element.classList.remove('hidden');
        });
      }

      if (lang === 'ru') {
        low.forEach((element) => {
          element.classList.add('hidden');
        });
        shifton.forEach((element) => {
          element.classList.remove('hidden');
        });
      }
    }
    if (document.querySelector(`.keyboard .key[data-keyid="${target}"]`)) {
      document.querySelector(`.keyboard .key[data-keyid="${target}"]`).classList.add('active');
    }
  };

  document.onkeyup = function (event) {
    const target = event.code;
    if (target === 'ShiftLeft' || target === 'ShiftRight') {
      if (lang === 'en') {
        low.forEach((element) => {
          element.classList.remove('hidden');
        });
        shifton.forEach((element) => {
          element.classList.add('hidden');
        });
      }

      if (lang === 'ru') {
        low.forEach((element) => {
          element.classList.remove('hidden');
        });
        shifton.forEach((element) => {
          element.classList.add('hidden');
        });
      }
    }
    if (document.querySelector(`.keyboard .key[data-keyid="${target}"]`)) {
      document.querySelector(`.keyboard .key[data-keyid="${target}"]`).classList.remove('active');
    }
  };
  keyboard.addEventListener('click', (e) => {
    const event = e.target.closest('.key');
    if (event.classList.contains('shift') && event.dataset.keyid === 'ShiftLeft') {
      key.forEach((element) => {
        if (element.classList.contains('shift') && element.dataset.keyid === 'ShiftLeft') {
          element.classList.add('active');
          if (lang === 'en') {
            low.forEach((item) => {
              item.classList.add('hidden');
            });
            shifton.forEach((item) => {
              item.classList.remove('hidden');
            });
          }
          if (lang === 'ru') {
            low.forEach((item) => {
              item.classList.add('hidden');
            });
            shifton.forEach((item) => {
              item.classList.remove('hidden');
            });
          }
        }
      });
    }
    if (event.classList.contains('shift') && event.dataset.keyid === 'ShiftRight') {
      key.forEach((element) => {
        if (element.classList.contains('shift') && element.dataset.keyid === 'ShiftRight') {
          element.classList.add('active');
          if (lang === 'en') {
            low.forEach((item) => {
              item.classList.add('hidden');
            });
            shifton.forEach((item) => {
              item.classList.remove('hidden');
            });
          }
          if (lang === 'ru') {
            low.forEach((item) => {
              item.classList.add('hidden');
            });
            shifton.forEach((item) => {
              item.classList.remove('hidden');
            });
          }
        }
      });
    }
  });
}
export default activeKey;
