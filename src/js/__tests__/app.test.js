/* eslint-disable comma-dangle */
// eslint-disable-next-line object-curly-newline
import Validator from '../app';

test.each(['Bowerman', 'swordsman', 'lex19-yes', 'Iva__no123vak'])(
  'Проверяем %p, буквы, цифры, дефис и нижнее подчеркивание в середине строки разрешены',
  (username) => {
    const isValidate = new Validator(username);
    expect(isValidate.validateUsername()).toBe(true);
  }
);

test.each(['Bowerman1', 'sasha-', 'Masha_'])(
  'Проверяем %p, цифры, дефис и нижнее подчеркивание в конце строки запрещены',
  (username) => {
    const isValidate = new Validator(username);

    expect(() => isValidate.validateUsername()).toThrowError('No valide Username');
  }
);

test.each(['777Vasya', '-John', '_Marra'])(
  'Проверяем %p, цифры, дефис и нижнее подчеркивание в начале строки запрещены',
  (username) => {
    const isValidate = new Validator(username);

    expect(() => isValidate.validateUsername()).toThrowError('No valide Username');
  }
);

test.each(['boris1986ivanov'])('Проверяем %p, больше трех цифр подряд запрещено', (username) => {
  const isValidate = new Validator(username);

  expect(() => isValidate.validateUsername()).toThrowError('No valide Username');
});

test.each(['po+s', 'lesha*petrov', 'geka/$@#reta'])(
  'Проверяем %p, все кроме букв цифр дефиса и нижнего подчеркивания запрещено',
  (username) => {
    const isValidate = new Validator(username);

    expect(() => isValidate.validateUsername()).toThrowError('No valide Username');
  }
);
