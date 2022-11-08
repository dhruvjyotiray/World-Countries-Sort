const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const test = document.querySelector("#test")
const searchBar = document.querySelector("#search");
const firstWord = document.querySelector("#start-word");
const anyWord = document.querySelector("#any-word");
const aToZ = document.querySelector("#a-to-z")
const countryDisplay = document.querySelector("#country-display");
const dynamicText = document.querySelector("#dynamic-text")
let anyWordTarget = document.createElement('p') 
let listLength = document.createElement('p')
listLength.setAttribute('id', 'listLength')
anyWordTarget.setAttribute('id', 'anyWordTarget')


anyWord.addEventListener("click", (event) => {

  anyWord.style.backgroundColor = '#0047AB'
  firstWord.style.backgroundColor = 'rgb(0, 152, 216)'
  aToZ.style.backgroundColor = 'rgb(0, 152, 216)'

  searchBar.addEventListener("input", (event) => {

    

    let searchQuery = event.target.value.toLowerCase();
    let list = [];

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].toLowerCase().includes(searchQuery)) {
        list.push(countries[i]);
      }
    }

    anyWordTarget.textContent = `${event.target.value}`  
    listLength.textContent = `${list.length}`
    dynamicText.innerHTML = ""
    

    countryDisplay.innerHTML = " ";
    if (list.length < 193) {
      dynamicText.innerHTML += 'Countries containing'
      dynamicText.appendChild(anyWordTarget)
      dynamicText.innerHTML += 'are'
      dynamicText.appendChild(listLength)
      
    } else if (list.length==193) {
      dynamicText.innerHTML = " "
    }
    

    for (let i = 0; i < list.length; i++) {
      let countryBoxes = document.createElement("div");

      let text = document.createElement("h3");
      text.textContent = `${list[i].toUpperCase()}`;
      text.setAttribute("id", "text");

      countryBoxes.setAttribute("id", "countryBoxes");
      countryBoxes.appendChild(text);

      countryDisplay.appendChild(countryBoxes);
    }
  });
});


firstWord.addEventListener("click", (event) => {

  firstWord.style.backgroundColor = '#0047AB'
  anyWord.style.backgroundColor = 'rgb(0, 152, 216)'
  aToZ.style.backgroundColor = 'rgb(0, 152, 216)'

  searchBar.addEventListener("input", (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let list = [];

    for (let i = 0; i < countries.length; i++) {
      if ((countries[i].slice(0, searchQuery.length)).toLowerCase() == searchQuery) {
        list.push(countries[i]);
      }
    }

    anyWordTarget.textContent = `${event.target.value}`  
    listLength.textContent = `${list.length}`
    dynamicText.style.margin = '20px 0'
    dynamicText.innerHTML = ""
    

    countryDisplay.innerHTML = " ";
    if (list.length < 193) {
      dynamicText.innerHTML += 'Countries starting with'
      dynamicText.appendChild(anyWordTarget)
      dynamicText.innerHTML += 'are'
      dynamicText.appendChild(listLength)
      
    } else if (list.length==193) {
      dynamicText.innerHTML = " "
    }

    countryDisplay.innerHTML = " ";

    for (let i = 0; i < list.length; i++) {
      let countryBoxes = document.createElement("div");

      let text = document.createElement("h3");
      text.textContent = `${list[i].toUpperCase()}`;
      text.setAttribute("id", "text");

      countryBoxes.setAttribute("id", "countryBoxes");
      countryBoxes.appendChild(text);

      countryDisplay.appendChild(countryBoxes);
    }
  });
});

let sortCount = 1

aToZ.addEventListener('click', event=>{

  

  aToZ.style.backgroundColor = '#0047AB'
  firstWord.style.backgroundColor = 'rgb(0, 152, 216)'
  anyWord.style.backgroundColor = 'rgb(0, 152, 216)'
  
  
  let list = []
  for (let i=0; i<countries.length; i++) {
    list.push(countries[i])
  }



  if (sortCount==0) {
    aToZ.innerHTML = 'A-Z'
    list.sort()
    sortCount++

  } else {
    aToZ.innerHTML = 'Z-A'
    list.sort().reverse()
    sortCount=0
  }
  

  countryDisplay.innerHTML = " ";

  for (let i = 0; i < list.length; i++) {
    let countryBoxes = document.createElement("div");

    let text = document.createElement("h3");
    text.textContent = `${list[i].toUpperCase()}`;
    text.setAttribute("id", "text");

    countryBoxes.setAttribute("id", "countryBoxes");
    countryBoxes.appendChild(text);

    countryDisplay.appendChild(countryBoxes);
  }

  

})


document.addEventListener('DOMContentLoaded', event=>{
  firstWord.click()
})
