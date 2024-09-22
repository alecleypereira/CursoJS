//converso de Celsius -> Fahrenheit

const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

const celcius = fahrenheit.map(function(temp){
  return (temp - 32) / 1.8
})
console.log(celcius)


