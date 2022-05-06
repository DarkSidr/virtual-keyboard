import keyObj from '../keys';

const lang = localStorage.getItem('lang');

function createKey() {
  const keyboard = document.querySelector('.keyboard');
  let line = '';
  let oneKey = '';
  let langRu = '';
  let langEn = '';
  let shiftRu = '';
  let lowerCaseRu = '';
  let upperCaseRu = '';
  let shiftEng = '';
  let lowerCaseEng = '';
  let upperCaseEng = '';

  for (let i = 0; i < keyObj.length; i++) {
    line = document.createElement('div');
    line.classList.add('line');
    keyboard.append(line);
    for (let j = 0; j < keyObj[i].length; j++) {
      oneKey = document.createElement('div');
      oneKey.classList.add('key');
      langRu = document.createElement('div');
      langEn = document.createElement('div');
      shiftRu = document.createElement('span');
      lowerCaseRu = document.createElement('span');
      upperCaseRu = document.createElement('span');
      shiftEng = document.createElement('span');
      lowerCaseEng = document.createElement('span');
      upperCaseEng = document.createElement('span');
      langRu.classList.add('ru');
      langEn.classList.add('eng');
      oneKey.dataset.keyid = keyObj[i][j].code;
      if (lang === 'en') {
        langRu.classList.add('hidden');
        upperCaseEng.classList.add('hidden');
        shiftEng.classList.add('hidden');
        if (keyObj[i][j].class) {
          oneKey.classList.add(keyObj[i][j].class);
          lowerCaseEng.innerText = keyObj[i][j].key;
          shiftEng.innerText = keyObj[i][j].shift;
          upperCaseEng.innerText = keyObj[i][j].key;
        } else {
          lowerCaseEng.innerText = keyObj[i][j].key.en;
          shiftEng.innerText = keyObj[i][j].shift.en;
          upperCaseEng.innerText = keyObj[i][j].shift.en;
        }
      }
      if (lang === 'ru') {
        langEn.classList.add('hidden');
        upperCaseRu.classList.add('hidden');
        shiftRu.classList.add('hidden');
        if (keyObj[i][j].class) {
          oneKey.classList.add(keyObj[i][j].class);
          lowerCaseRu.innerText = keyObj[i][j].key;
          shiftRu.innerText = keyObj[i][j].shift;
          upperCaseRu.innerText = keyObj[i][j].key;
        } else {
          lowerCaseRu.innerText = keyObj[i][j].key.ru;
          shiftRu.innerText = keyObj[i][j].shift.ru;
          upperCaseRu.innerText = keyObj[i][j].shift.ru;
        }
      }
      shiftRu.classList.add('shifton');
      lowerCaseRu.classList.add('low');
      upperCaseRu.classList.add('upp');
      shiftEng.classList.add('shifton');
      lowerCaseEng.classList.add('low');
      upperCaseEng.classList.add('upp');
      langEn.append(shiftEng, lowerCaseEng, upperCaseEng);
      langRu.append(shiftRu, lowerCaseRu, upperCaseRu);

      oneKey.append(langRu, langEn);

      line.append(oneKey);
    }
  }
}
export default createKey;
