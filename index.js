//Task "comparison if"
// var age = + prompt ("Скільки вам років?", "");
// if (age <= 0) {
//   alert("Ви ввели неправильний вік!")
// } else {
//   if (age < 18) {
//     alert("школяр");
//   } else {
//     if (age >= 18 && age <= 30){
//       alert("молодь");
//     } else {
//       if (age > 30 && age <= 45){
//         alert("зрілість");
//       } else {
//         if (age > 45 && age <= 60){
//           alert("захід сонця");
//         } else {
//           if (age > 60) {
//             alert("як пенсія?");
//           } else {
//             alert("чи кіборг, чи KERNESS");
//           }
//         }
//       }
//     }
//   } 
// } 


//Task "switch: sizes"
// const userSize = prompt("Enter your size according to the Ukrainian size chart:");
// switch (userSize) {
//   case "40":
//     alert("Your size in Great Britain size chart - 6");
//     break;
//   case "42":
//     alert("Your size in Great Britain size chart - 8");
//     break;
//   case "44":
//     alert("Your size in Great Britain size chart - 10");
//     break;
//   case "46":
//     alert("Your size in Great Britain size chart - 12");
//     break;
//   case "48":
//     alert("Your size in Great Britain size chart - 14");
//     break;
//   case "50":
//     alert("Your size in Great Britain size chart - 16");
//     break;
//   case "52":
//     alert("Your size in Great Britain size chart - 18");
//     break;
//   case "54":
//     alert("Your size in Great Britain size chart - 20");
//     break;
//   default:
//     alert('Something wrong, try enter again');
// }

//Task "switch: if"
// let color = prompt("Введіть колір","");
// if (color === "red") {
//   document.write("<div style='background-color: red;'>червоний</div>")
// } else if (color === "black") {
//   document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue") {
//   document.write("<div style='background-color: blue;'>синій</div>")
// } else if (color === "green") {
//   document.write("<div style='background-color: green;'>зелений</div>");
// } else {
//   document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

// Task "noswitch"
// const noSwitch = (key, cases, defaultKey='default') => {
//   if (cases[key]) {
//     cases[key]();
//   } else {
//     cases[defaultKey]();
//   }
// }
// const drink = prompt("Що ви любите пити");
// noSwitch(drink, {
//   воду: () => console.log('Найздоровіший вибір!'),
//   чай(){
//     console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
//   },
//   "пиво": () => console.log('Добре влітку, та в міру'),
//   віскі: function(){
//     console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
//   },
//   default(){
//     console.log('шото я не зрозумів');
//   }
// })

// Task "closure calc"
// fetch('https://open.er-api.com/v6/latest/USD')
//   .then(res => res.json())
//   .then(data => { 
//     const container = document.getElementById('currency-container');
//     for (const key in data.rates) {
//       let btn = document.createElement("button");
//       btn.innerText = key;
//       btn.onclick = () => {
//         const amount = prompt(`Enter the amount in ${key}:`);
//         const rate = data.rates[key];
//         const usdAmount = amount / rate;
//         alert(`The amount in USD is: ${usdAmount.toFixed(2)}`);
//     };
//     container.appendChild(btn);
//     }
// })

//Task "closure calc 2"
  // const from = document.getElementById('from');
	// const to = document.getElementById('to');
	// const rate = document.getElementById('rate');
	// const amount = document.getElementById('amount');
	// const result = document.getElementById('result');

	// fetch('https://open.er-api.com/v6/latest/USD')
	// .then(res => res.json())
	// .then(data => {
	// 	for (let currency in data.rates) {
	// 		let option = document.createElement('option');
	// 		option.innerText = currency;
	// 		from.append(option);

	// 		option = document.createElement('option');
	// 		option.innerText = currency;
	// 		to.append(option);
	// 	}
	// 	from.value = 'USD';
	// 	to.value = 'USD';
	// 	from.onchange = () => updateRate();
	// 	to.onchange = () => updateRate();
	// 	amount.oninput = () => updateResult();
		
	// 	function updateRate() {
	// 		const fromCurrency = from.value;
	// 		const toCurrency = to.value;
	// 		rate.innerText = `1 ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`;
	// 		updateResult();
	// 	}

	// 	function updateResult() {
	// 		const fromCurrency = from.value;
	// 		const toCurrency = to.value;
	// 		const rateValue = data.rates[toCurrency] / data.rates[fromCurrency];
	// 		const resultValue = amount.value * rateValue;
	// 		result.innerText = `${resultValue.toFixed(2)} ${toCurrency}`;
	// 	}
	// 	updateRate();
	// });

  //Task "countries and cities"
  fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
  .then(res => res.json())
  .then(data => {
    const countries = document.getElementById("countries");
    const cities = document.getElementById("cities");
    for (const country in data) {
      let option = document.createElement('option');
      option.innerText = country;
      countries.append(option);
    }

    let option = document.createElement('option');
    option.innerText = data["Afghanistan"];
    cities.append(option);

    const updateCities = () => {
      option.innerText = "";
      option.innerText = data[countries.value];
      cities.append(option);
    };
    countries.onchange = () => updateCities(); 
  })