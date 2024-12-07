const fs = require('fs');
const path = require('path');

test('El archivo index.html debe existir', () => {
  const filePath = path.join(__dirname, 'index.html');
  expect(fs.existsSync(filePath)).toBe(true);
});
