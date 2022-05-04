const oneLine = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];
const twoLine = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
const threeLine = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const fourLine = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16];
const fiveLine = [17, 91, 18, 32, 18, 93, 37, 40, 39, 17];

function createKey() {
  // document.onkeydown = function (event) {
  // console.log(event);
  // fiveLine.push(event.keyCode);
  // console.log(fiveLine);
  // };
  const keyboard = document.querySelector('.keyboard');

  function contentKey(arr) {
    const line = document.createElement('div');
    line.classList.add('line');
    keyboard.append(line);
    arr.forEach((element) => {
      const oneKey = document.createElement('div');
      oneKey.classList.add('key');
      switch (element) {
        case 192:
          oneKey.innerText += '`';
          break;
        case 189:
          oneKey.innerText += '-';
          break;
        case 187:
          oneKey.innerText += '=';
          break;
        case 8:
          oneKey.classList.add('backspace');
          oneKey.innerText += 'Backspace';
          break;
        case 9:
          oneKey.classList.add('tab');
          oneKey.innerText += 'Tab';
          break;
        case 219:
          oneKey.innerText += '[';
          break;
        case 221:
          oneKey.innerText += ']';
          break;
        case 220:
          oneKey.classList.add('slash');
          oneKey.innerText += '\\';
          break;
        case 20:
          oneKey.classList.add('capslock');
          oneKey.innerText += 'Capslock';
          break;
        case 186:
          oneKey.innerText += ';';
          break;
        case 222:
          oneKey.innerText += "'";
          break;
        case 13:
          oneKey.classList.add('enter');
          oneKey.innerText += 'Enter';
          break;
        case 16:
          oneKey.classList.add('shift');
          oneKey.innerText += 'shift';
          break;
        case 188:
          oneKey.innerText += ',';
          break;
        case 190:
          oneKey.innerText += '.';
          break;
        case 191:
          oneKey.innerText += '/';
          break;
        case 17:
          oneKey.classList.add('ctrl');
          oneKey.innerText += 'ctrl';
          break;
        case 91:
          oneKey.classList.add('win');
          oneKey.innerText += 'win';
          break;
        case 18:
          oneKey.classList.add('alt');
          oneKey.innerText += 'alt';
          break;
        case 32:
          oneKey.classList.add('space');
          oneKey.innerText += 'space';
          break;
        case 93:
          oneKey.classList.add('cont');
          oneKey.innerText += 'cont';
          break;
        case 37:
          oneKey.innerText += '◄';
          break;
        case 40:
          oneKey.innerText += '▼';
          break;
        case 39:
          oneKey.innerText += '►';
          break;
        case 38:
          oneKey.innerText += '▲';
          break;
        default:
          oneKey.innerText += String.fromCharCode(element).toLowerCase();
      }
      line.append(oneKey);
    });
  }
  contentKey(oneLine);
  contentKey(twoLine);
  contentKey(threeLine);
  contentKey(fourLine);
  contentKey(fiveLine);
}

export default createKey;
