const calculateBonus = require('./test3_1')

test('Бонус при нулевой сумме', ()=>{
    expect(calculateBonus(0,0)).toBe(0);
 });

 test('Бонус при сумме больше 50', ()=>{
    expect(calculateBonus(30,40)).toBe(50);
 });

 test('Бонус при сумме меньше 50', ()=>{
    expect(calculateBonus(10,30)).toBe(40);
 });

 test('Бонус при сумме равной 50', ()=>{
    expect(calculateBonus(10,40)).toBe(50);
 });

 test('Бонус при дробной сумме 0.5', ()=>{
    expect(calculateBonus(0.3,0.2)).toBe(0.5);
 });

 test('Бонус при отрицательной сумме', ()=>{
    expect(calculateBonus(10,-40)).toBe(-30);
 });

