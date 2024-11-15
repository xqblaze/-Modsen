const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function proveritCeloeChislo(chislo) {
  if (!Number.isInteger(Number(chislo))) {
    throw new Error('Ошибка: введенное значение не является целым числом');
  }
  console.log('Введенное число является целым:', chislo);
}

rl.question('Введите число: ', (userInput) => {
  try {
    proveritCeloeChislo(userInput);
  } catch (error) {
    console.error(error.message); // Выводим ошибку
  }
  rl.close(); // Закрываем интерфейс после завершения
});
