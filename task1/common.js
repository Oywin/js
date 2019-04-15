;(function(){

  window.onload = function () {

    class Calc {

      constructor(a, b, action) {
        this.num1 = a;
        this.num2 = b;
        this.action = action;
      }

      validate = () => {
        if (isNaN(this.num1) || isNaN(this.num2)) {
          alert('Введите числа');
          return;
        }

        if (typeof this.num1 != 'number' || typeof this.num2 != 'number') {
          alert('Введите числа');
          return;
        } else {
          switch (this.action) {
            case 'plus':
              var result = this.summa(this.num1, this.num2);
              document.getElementById('ansver').innerHTML = result;
              break;
            case 'minuse':
              var result = this.minuse(this.num1, this.num2);
              document.getElementById('ansver').innerHTML = result;
              break;
            case 'multiplay':
              var result = this.multiplay(this.num1, this.num2);
              document.getElementById('ansver').innerHTML = result;
              break;
            case 'divide':
              var result = this.divide(this.num1, this.num2);
              document.getElementById('ansver').innerHTML = result;
              break;
          }
        }
      }
    }

    Calc.prototype.summa = function (a, b) {
      return a + b;
    }

    Calc.prototype.minuse = function (a, b) {
      return a - b;
    }

    Calc.prototype.multiplay = function (a, b) {
      return a * b;
    }

    Calc.prototype.divide = function (a, b) {
      return a / b;
    }

    document.getElementById('enter').onclick = function () {

      var str = document.getElementById('select').value;
      var num1 = parseInt(document.getElementById('one').value);
      var num2 = parseInt(document.getElementById('two').value);

      var calculator = new Calc(num1, num2, str);
      calculator.validate();
    }

  }

}());