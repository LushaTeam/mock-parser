const test = require('ava');
const parse = require('..');

test('parse', t => {
  // Arrange
  const url = 'www.mysite.com';

  // Act
  const res = parse(url);

  // Assert
  t.truthy(res.html);
  t.is(typeof res.html, 'string');
  t.truthy(res.links);
  t.is(Array.isArray(res.links), true);
});