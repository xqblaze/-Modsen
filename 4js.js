function acceptArrayNumbers(arr){
  if(!Array.isArray(arr)){
    return " Ошибка. Проверьте входные данные."
  }
  const result = arr.map(num=>num * 1.1);
  return result;   
}
const numbers=[10,20,30,40];
const increasedNumbers=acceptArrayNumbers(numbers);
console.log(increasedNumbers);