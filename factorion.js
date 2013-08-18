// Функция считает факториал числа
function factorial (n) {
    return !+n ? 1 : n * factorial(n-1);
}

// Функция считает cумму факториалов цифр в числе
function sumDigitsFactorials(n)
{
    var digits = (""+n).split("");
    var sum = 0;

    for(var i=0 ; i<digits.length ; i++)
        sum += factorial(digits[i]);

    return sum;
}

// Функця выводит список факторионов
function listFactorions()
{
    //факторионы в десятичной системе не превосходят 7*9!
    const max = 7 * factorial(9);

    for(var i=1; i<= max; i++)
        if(i == sumDigitsFactorials(i))
           console.log(i);
}

listFactorions();