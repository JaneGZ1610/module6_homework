function isPrimitive(num) {
    if (!Number.isInteger(num) && num < 2 || num > 1000) {
        return "данные неверны!"     // проверяем если число целое И меньше 2 ИЛИ больше 1000
    }   
      let x = Math.sqrt(num); // корень квадратный из нашего числа (чтобы уменьшить кол-во перебираемых чисел)
      for (let i = 2; i <= x; i++) {
        if (num % i === 0) {
            return "непростое число" 
        }
        } 
            return  "простое число";  
    
}
console.log(isPrimitive(77))

