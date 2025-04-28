let kelvin = 293; // today's temp in kelvin

// today's temp in celcius
let celcius = kelvin - 273; 

// today's temp in fahrenheit
let fahrenheit = celcius * (9/5) + 32 
// round down today's temp
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);