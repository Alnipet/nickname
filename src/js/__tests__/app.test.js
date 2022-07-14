// eslint-disable-next-line object-curly-newline
import Validator from '../app';

test.each(['Bowerman', 'Swordsman', 'Lex191111', 'Ivan-Ivanov_89'])('Проверяем %p', (username) => {
  const isValidate = new Validator(username);
  expect(isValidate.validateUsername()).toBe(true);
});
