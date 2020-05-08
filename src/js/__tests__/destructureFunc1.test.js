/* eslint-disable no-undef */
import destructureFunc from '../destructureFunc1';

test('возвращает массив из массивов с полями-объектами', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const { special } = obj;
  const result = destructureFunc(special);

  expect(result).toStrictEqual([
    [
      { id: 8 },
      { name: 'Двойной выстрел' },
      { icon: 'http://...' },
      { description: 'Двойной выстрел наносит двойной урон' },
    ],
    [
      { id: 9 },
      { name: 'Нокаутирующий удар' },
      { icon: 'http://...' },
      { description: 'Описание недоступно' },
    ],
  ]);
});
