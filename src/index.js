class SmartCalculator {
  constructor(initialValue) {
    this._pow = 0; // количество pow подряд
    this._expression = '' + initialValue; //переод в строку
    this._namberStr = this._expression; // переменная хранящая вводимое число в строке
  }

  valueOf () {
    return eval(this._expression); // вывод 
  } 

  add(number) { // метод сложения
    this._expression += '+' + number; // приклеивание строки
    this._pow = 0; // счётчик pow подряд
    this._namberStr = '' + number; // перевод числа в строку
    return this;
  }
  
  subtract(number) { // метод вычитания
    this._expression += '-' + number; // приклеивание строки
    this._pow = 0; // счётчик pow подряд
    this._namberStr = '' + number; // перевод числа в строку
    return this;
  }

  multiply(number) { // метод УМНОЖЕНИЯ
    this._expression += '*' + number; // приклеивание строки
    this._pow = 0; // счётчик pow подряд
    this._namberStr = '' + number; // перевод числа в строку
    return this;
  }

  devide(number) { // метод деления
    this._expression += '/' + number; // приклеивание строки
    this._pow = 0; // счётчик pow подряд
    this._namberStr = '' + number; // перевод числа в строку
    return this;
  }

  pow(number) { // метод возведения в степень

    if (this._pow == 0){ // если подряд нет двух и более возведений
      let expr = this._pow + this._namberStr.length; // определяет количество символов которое нужно отрезать
      this._expression = this._expression.slice(0, -expr); // отрезает нужное кол-во символов в главной строке
      this._expression += 'Math.pow(' + this._namberStr + ',' + number + ')'; // добавления в основную строку 
      this._pow++; // инкрементация к счётсику 
    } else{ // если подряд два и более возведения
      let expr = this._pow + this._namberStr.length; // определяет количество символов которое нужно отрезать
      this._expression = this._expression.slice(0, -expr); // отрезает нужное кол-во символов в главной строке
      this._expression += 'Math.pow(' + this._namberStr + ',' + number; // добавления в основную строку 
      for (let i = 0; i <= this._pow; i++){ // цик добавления закрыввающих скобок
        this._expression += ')';
      }
      this._pow++;// инкрементация к счётсику 
    }
    this._namberStr = '' + number; // перевод числа в строку
    return this;
  }
}

module.exports = SmartCalculator;
