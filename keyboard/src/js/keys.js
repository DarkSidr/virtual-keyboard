const keyObj = [
  [
    {
      key: {
        ru: 'ё',
        en: '`',
      },
      code: 'Backquote',
      shift: {
        ru: 'Ё',
        en: '~',
      },
    },
    {
      key: {
        ru: '1',
        en: '1',
      },
      code: 'Digit1',
      shift: {
        ru: '!',
        en: '!',
      },
    },
    {
      key: {
        ru: '2',
        en: '2',
      },
      code: 'Digit2',
      shift: {
        ru: '"',
        en: '@',
      },
    },
    {
      key: {
        ru: '3',
        en: '3',
      },
      code: 'Digit3',
      shift: {
        ru: '№',
        en: '#',
      },
    },
    {
      key: {
        ru: '4',
        en: '4',
      },
      code: 'Digit4',
      shift: {
        ru: ';',
        en: '$',
      },
    },
    {
      key: {
        ru: '5',
        en: '5',
      },
      code: 'Digit5',
      shift: {
        ru: '%',
        en: '%',
      },
    },
    {
      key: {
        ru: '6',
        en: '6',
      },
      code: 'Digit6',
      shift: {
        ru: ':',
        en: '^',
      },
    },
    {
      key: {
        ru: '7',
        en: '7',
      },
      code: 'Digit7',
      shift: {
        ru: '?',
        en: '&',
      },
    },
    {
      key: {
        ru: '8',
        en: '8',
      },
      code: 'Digit8',
      shift: {
        ru: '*',
        en: '*',
      },
    },
    {
      key: {
        ru: '9',
        en: '9',
      },
      code: 'Digit9',
      shift: {
        ru: '(',
        en: '(',
      },
    },
    {
      key: {
        ru: '0',
        en: '0',
      },
      code: 'Digit0',
      shift: {
        ru: ')',
        en: ')',
      },
    },
    {
      key: {
        ru: '-',
        en: '-',
      },
      code: 'Minus',
      shift: {
        ru: '_',
        en: '_',
      },
    },
    {
      key: {
        ru: '=',
        en: '=',
      },
      code: 'Equal',
      shift: {
        ru: '+',
        en: '+',
      },
    },
    {
      key: 'Backspace',
      code: 'Backspace',
      shift: 'Backspace',
      class: 'backspace',
    },
  ],
  [
    {
      key: 'Tab',
      code: 'Tab',
      shift: 'Tab',
      class: 'tab',
    },
    {
      key: {
        ru: 'й',
        en: 'q',
      },
      code: 'KeyQ',
      shift: {
        ru: 'Й',
        en: 'Q',
      },
    },
    {
      key: {
        ru: 'ц',
        en: 'w',
      },
      code: 'KeyW',
      shift: {
        ru: 'Ц',
        en: 'W',
      },
    },
    {
      key: {
        ru: 'у',
        en: 'e',
      },
      code: 'KeyE',
      shift: {
        ru: 'У',
        en: 'E',
      },
    },
    {
      key: {
        ru: 'к',
        en: 'r',
      },
      code: 'KeyR',
      shift: {
        ru: 'К',
        en: 'R',
      },
    },
    {
      key: {
        ru: 'е',
        en: 't',
      },
      code: 'KeyT',
      shift: {
        ru: 'Е',
        en: 'T',
      },
    },
    {
      key: {
        ru: 'н',
        en: 'y',
      },
      code: 'KeyY',
      shift: {
        ru: 'Н',
        en: 'Y',
      },
    },
    {
      key: {
        ru: 'г',
        en: 'u',
      },
      code: 'KeyU',
      shift: {
        ru: 'Г',
        en: 'U',
      },
    },
    {
      key: {
        ru: 'ш',
        en: 'i',
      },
      code: 'KeyI',
      shift: {
        ru: 'Ш',
        en: 'I',
      },
    },
    {
      key: {
        ru: 'щ',
        en: 'o',
      },
      code: 'KeyO',
      shift: {
        ru: 'Щ',
        en: 'O',
      },
    },
    {
      key: {
        ru: 'з',
        en: 'p',
      },
      code: 'KeyP',
      shift: {
        ru: 'З',
        en: 'P',
      },
    },
    {
      key: {
        ru: 'х',
        en: '[',
      },
      code: 'BracketLeft',
      shift: {
        ru: 'Х',
        en: '{',
      },
    },
    {
      key: {
        ru: 'ъ',
        en: ']',
      },
      code: 'BracketRight',
      shift: {
        ru: 'Ъ',
        en: '}',
      },
    },
    {
      key: '\\',
      code: 'Backslash',
      shift: '/',
      class: 'slash',
    },
  ],
  [
    {
      key: 'CapsLock',
      code: 'CapsLock',
      shift: 'CapsLock',
      class: 'capslock',
    },
    {
      key: {
        ru: 'ф',
        en: 'a',
      },
      code: 'KeyA',
      shift: {
        ru: 'Ф',
        en: 'A',
      },
    },
    {
      key: {
        ru: 'ы',
        en: 's',
      },
      code: 'KeyS',
      shift: {
        ru: 'Ы',
        en: 'S',
      },
    },
    {
      key: {
        ru: 'в',
        en: 'd',
      },
      code: 'KeyD',
      shift: {
        ru: 'В',
        en: 'D',
      },
    },
    {
      key: {
        ru: 'а',
        en: 'f',
      },
      code: 'KeyF',
      shift: {
        ru: 'А',
        en: 'F',
      },
    },
    {
      key: {
        ru: 'п',
        en: 'g',
      },
      code: 'KeyG',
      shift: {
        ru: 'П',
        en: 'G',
      },
    },
    {
      key: {
        ru: 'р',
        en: 'h',
      },
      code: 'KeyH',
      shift: {
        ru: 'Р',
        en: 'H',
      },
    },
    {
      key: {
        ru: 'о',
        en: 'j',
      },
      code: 'KeyJ',
      shift: {
        ru: 'О',
        en: 'J',
      },
    },
    {
      key: {
        ru: 'л',
        en: 'k',
      },
      code: 'KeyK',
      shift: {
        ru: 'Л',
        en: 'K',
      },
    },
    {
      key: {
        ru: 'д',
        en: 'l',
      },
      code: 'KeyL',
      shift: {
        ru: 'д',
        en: 'L',
      },
    },
    {
      key: {
        ru: 'ж',
        en: ';',
      },
      code: 'Semicolon',
      shift: {
        ru: 'Ж',
        en: ':',
      },
    },
    {
      key: {
        ru: 'э',
        en: "'",
      },
      code: 'Quote',
      shift: {
        ru: 'Э',
        en: '"',
      },
    },
    {
      key: 'Enter',
      code: 'Enter',
      shift: 'Enter',
      class: 'enter',
    },
  ],
  [
    {
      key: 'Shift',
      code: 'ShiftLeft',
      shift: 'Shift',
      class: 'shift',
    },
    {
      key: {
        ru: 'я',
        en: 'z',
      },
      code: 'KeyZ',
      shift: {
        ru: 'Я',
        en: 'Z',
      },
    },
    {
      key: {
        ru: 'ч',
        en: 'x',
      },
      code: 'KeyX',
      shift: {
        ru: 'Ч',
        en: 'X',
      },
    },
    {
      key: {
        ru: 'с',
        en: 'c',
      },
      code: 'KeyC',
      shift: {
        ru: 'С',
        en: 'C',
      },
    },
    {
      key: {
        ru: 'м',
        en: 'v',
      },
      code: 'KeyV',
      shift: {
        ru: 'М',
        en: 'V',
      },
    },
    {
      key: {
        ru: 'и',
        en: 'b',
      },
      code: 'KeyB',
      shift: {
        ru: 'И',
        en: 'B',
      },
    },
    {
      key: {
        ru: 'т',
        en: 'n',
      },
      code: 'KeyN',
      shift: {
        ru: 'т',
        en: 'N',
      },
    },
    {
      key: {
        ru: 'ь',
        en: 'm',
      },
      code: 'KeyM',
      shift: {
        ru: 'Ь',
        en: 'M',
      },
    },
    {
      key: {
        ru: 'б',
        en: ',',
      },
      code: 'Comma',
      shift: {
        ru: 'Б',
        en: '<',
      },
    },
    {
      key: {
        ru: 'ю',
        en: '.',
      },
      code: 'Period',
      shift: {
        ru: 'Ю',
        en: '>',
      },
    },
    {
      key: {
        ru: '.',
        en: '/',
      },
      code: 'Slash',
      shift: {
        ru: ',',
        en: '?',
      },
    },
    {
      key: '▲',
      code: 'ArrowUp',
      shift: '▲',
      class: 'arrowup',
    },
    {
      key: 'Shift',
      code: 'ShiftRight',
      shift: 'Shift',
      class: 'shift',
    },
  ],
  [
    {
      key: 'Ctrl',
      code: 'ControlLeft',
      shift: 'Ctrl',
      class: 'ctrl',
    },
    {
      key: 'Alt',
      code: 'AltLeft',
      shift: 'Alt',
      class: 'alt',
    },
    {
      key: 'Space',
      code: 'Space',
      shift: 'Space',
      class: 'space',
    },
    {
      key: 'Alt',
      code: 'AltRight',
      shift: 'Alt',
      class: 'alt',
    },
    {
      key: 'Del',
      code: 'Delete',
      shift: 'Del',
      class: 'del',
    },
    {
      key: '◄',
      code: 'ArrowLeft',
      shift: '◄',
      class: 'arrowleft',
    },
    {
      key: '▼',
      code: 'ArrowDown',
      shift: '▼',
      class: 'arrowdown',
    },
    {
      key: '►',
      code: 'ArrowRight',
      shift: '►',
      class: 'arrowright',
    },
    {
      key: 'Ctrl',
      code: 'ControlRight',
      shift: 'Ctrl',
      class: 'ctrl',
    },
  ],
];

export default keyObj;
