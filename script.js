const data =
  '[{"name":"Jeff Bezos","networth":"177.0","country":"United States","source":"Amazon","age":57,"citizenship":"United States","status":"In Relationship","children":4,"self_made":true},{"name":"Elon Musk","networth":"151.0","country":"United States","source":"Tesla, SpaceX","age":49,"citizenship":"United States","status":"In Relationship","children":7,"self_made":true},{"name":"Bernard Arnault & family","networth":"150.0","country":"France","source":"LVMH","age":72,"citizenship":"France","status":"Married","children":5,"self_made":true},{"name":"Bill Gates","networth":"124.0","country":"United States","source":"Microsoft","age":65,"citizenship":"United States","status":"Divorced","children":3,"self_made":true},{"name":"Mark Zuckerberg","networth":"97.0","country":"United States","source":"Facebook","age":36,"citizenship":"United States","status":"Married","children":2,"self_made":true},{"name":"Warren Buffett","networth":"96.0","country":"United States","source":"Berkshire Hathaway","age":90,"citizenship":"United States","status":"Widowed, Remarried","children":3,"self_made":true},{"name":"Larry Ellison","networth":"93.0","country":"United States","source":"software","age":76,"citizenship":"United States","status":"In Relationship","children":4,"self_made":true},{"name":"Larry Page","networth":"91.5","country":"United States","source":"Google","age":48,"citizenship":"United States","status":"Married","children":1,"self_made":true},{"name":"Sergey Brin","networth":"89.0","country":"United States","source":"Google","age":47,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Mukesh Ambani","networth":"84.5","country":"India","source":"diversified","age":64,"citizenship":"India","status":"Married","children":3,"self_made":true},{"name":"Amancio Ortega","networth":"77.0","country":"Spain","source":"Zara","age":85,"citizenship":"Spain","status":"Married","children":3,"self_made":true},{"name":"Francoise Bettencourt Meyers & family","networth":"73.6","country":"France","source":"L\'Oréal","age":67,"citizenship":"France","status":"Married","children":2,"self_made":true},{"name":"Zhong Shanshan","networth":"68.9","country":"China","source":"beverages, pharmaceuticals","age":66,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"Steve Ballmer","networth":"68.7","country":"United States","source":"Microsoft","age":65,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Ma Huateng","networth":"65.8","country":"China","source":"internet media","age":49,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"Carlos Slim Helu & family","networth":"62.8","country":"Mexico","source":"telecom","age":81,"citizenship":"Mexico","status":"Widowed","children":6,"self_made":true},{"name":"Alice Walton","networth":"61.8","country":"United States","source":"Walmart","age":71,"citizenship":"United States","status":"Divorced","children":0,"self_made":true},{"name":"Jim Walton","networth":"60.2","country":"United States","source":"Walmart","age":72,"citizenship":"United States","status":"Married","children":4,"self_made":true},{"name":"Rob Walton","networth":"59.5","country":"United States","source":"Walmart","age":76,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Michael Bloomberg","networth":"59.0","country":"United States","source":"Bloomberg LP","age":79,"citizenship":"United States","status":"In Relationship","children":2,"self_made":true},{"name":"Colin Zheng Huang","networth":"55.3","country":"China","source":"e-commerce","age":41,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"MacKenzie Scott","networth":"53.0","country":"United States","source":"Amazon","age":51,"citizenship":"United States","status":"Married","children":4,"self_made":true},{"name":"Daniel Gilbert","networth":"51.9","country":"United States","source":"Quicken Loans","age":59,"citizenship":"United States","status":"Married","children":5,"self_made":true},{"name":"Gautam Adani & family","networth":"50.5","country":"India","source":"infrastructure, commodities","age":58,"citizenship":"India","status":"Married","children":2,"self_made":true},{"name":"Phil Knight & family","networth":"49.9","country":"United States","source":"Nike","age":83,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Jack Ma","networth":"48.4","country":"China","source":"e-commerce","age":56,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"Charles Koch","networth":"46.4","country":"United States","source":"Koch Industries","age":85,"citizenship":"United States","status":"Married","children":2,"self_made":true},{"name":"Julia Koch & family","networth":"46.4","country":"United States","source":"Koch Industries","age":59,"citizenship":"United States","status":"Widowed","children":3,"self_made":true},{"name":"Masayoshi Son","networth":"45.4","country":"Japan","source":"internet, telecom","age":63,"citizenship":"Japan","status":"Married","children":2,"self_made":true},{"name":"Michael Dell","networth":"45.1","country":"United States","source":"Dell computers","age":56,"citizenship":"United States","status":"Married","children":4,"self_made":true},{"name":"Tadashi Yanai & family","networth":"44.1","country":"Japan","source":"fashion retail","age":72,"citizenship":"Japan","status":"Married","children":2,"self_made":true},{"name":"Fran\u00e7ois Pinault & family","networth":"42.3","country":"France","source":"luxury goods","age":84,"citizenship":"France","status":"Married","children":3,"self_made":true},{"name":"David Thomson & family","networth":"41.8","country":"Canada","source":"media","age":63,"citizenship":"Canada","status":"Divorced","children":4,"self_made":true},{"name":"Beate Heister & Karl Albrecht Jr.","networth":"39.2","country":"Germany","source":"supermarkets","age":0,"citizenship":"Germany","status":"","children":0,"self_made":true},{"name":"Wang Wei","networth":"39.0","country":"China","source":"package delivery","age":50,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"Miriam Adelson","networth":"38.2","country":"United States","source":"casinos","age":75,"citizenship":"United States","status":"Widowed","children":5,"self_made":true},{"name":"He Xiangjian","networth":"37.7","country":"China","source":"home appliances","age":78,"citizenship":"China","status":"Married","children":3,"self_made":true},{"name":"Dieter Schwarz","networth":"36.9","country":"Germany","source":"retail","age":81,"citizenship":"Germany","status":"Married","children":2,"self_made":true},{"name":"Zhang Yiming","networth":"35.6","country":"China","source":"TikTok","age":37,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"Giovanni Ferrero","networth":"35.1","country":"Italy","source":"Nutella, chocolates","age":56,"citizenship":"Italy","status":"Married","children":2,"self_made":true},{"name":"Alain Wertheimer","networth":"34.5","country":"France","source":"Chanel","age":72,"citizenship":"France","status":"Married","children":3,"self_made":true},{"name":"Gerard Wertheimer","networth":"34.5","country":"France","source":"Chanel","age":70,"citizenship":"France","status":"Married","children":2,"self_made":true},{"name":"Li Ka-shing","networth":"33.7","country":"Hong Kong","source":"diversified","age":92,"citizenship":"Hong Kong","status":"Widowed","children":2,"self_made":true},{"name":"Qin Yinglin & family","networth":"33.5","country":"China","source":"pig breeding","age":56,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"William Lei Ding","networth":"33.0","country":"China","source":"online games","age":49,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"Len Blavatnik","networth":"32.0","country":"United States","source":"music, chemicals","age":63,"citizenship":"United States","status":"Married","children":0,"self_made":true},{"name":"Lee Shau Kee","networth":"31.7","country":"Hong Kong","source":"real estate","age":93,"citizenship":"Hong Kong","status":"Divorced","children":5,"self_made":true},{"name":"Jacqueline Mars","networth":"31.3","country":"United States","source":"candy, pet food","age":81,"citizenship":"United States","status":"Divorced","children":3,"self_made":true},{"name":"John Mars","networth":"31.3","country":"United States","source":"candy, pet food","age":85,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Yang Huiyan & family","networth":"29.6","country":"China","source":"real estate","age":39,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"Alexey Mordashov & family","networth":"29.1","country":"Russia","source":"steel, investments","age":55,"citizenship":"Russia","status":"Married","children":7,"self_made":true},{"name":"Robin Zeng","networth":"28.4","country":"Hong Kong","source":"batteries","age":52,"citizenship":"Hong Kong","status":"","children":0,"self_made":true},{"name":"Hui Ka Yan","networth":"27.7","country":"China","source":"real estate","age":62,"citizenship":"China","status":"Married","children":2,"self_made":true},{"name":"Susanne Klatten","networth":"27.7","country":"Germany","source":"BMW, pharmaceuticals","age":59,"citizenship":"Germany","status":"Married","children":3,"self_made":true},{"name":"Vladimir Potanin","networth":"27.0","country":"Russia","source":"metals","age":60,"citizenship":"Russia","status":"Married","children":7,"self_made":true},{"name":"Dietrich Mateschitz","networth":"26.9","country":"Austria","source":"Red Bull","age":76,"citizenship":"Austria","status":"Single","children":1,"self_made":true},{"name":"Pang Kang","networth":"26.4","country":"China","source":"soy sauce","age":65,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"Klaus-Michael Kuehne","networth":"26.3","country":"Germany","source":"shipping","age":83,"citizenship":"Germany","status":"Married","children":0,"self_made":true},{"name":"Vladimir Lisin","networth":"26.2","country":"Russia","source":"steel, transport","age":65,"citizenship":"Russia","status":"Married","children":3,"self_made":true},{"name":"Wang Xing","networth":"26.1","country":"China","source":"e-commerce","age":42,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"German Larrea Mota Velasco & family","networth":"25.9","country":"Mexico","source":"mining","age":67,"citizenship":"Mexico","status":"Married","children":0,"self_made":true},{"name":"Leonardo Del Vecchio & family","networth":"25.8","country":"Italy","source":"eyeglasses","age":85,"citizenship":"Italy","status":"Married","children":6,"self_made":true},{"name":"Takemitsu Takizaki","networth":"25.8","country":"Japan","source":"sensors","age":75,"citizenship":"Japan","status":"Married","children":0,"self_made":true},{"name":"Leonard Lauder","networth":"25.5","country":"United States","source":"Estee Lauder","age":88,"citizenship":"United States","status":"Widowed, Remarried","children":2,"self_made":true},{"name":"Thomas Peterffy","networth":"25.0","country":"United States","source":"discount brokerage","age":76,"citizenship":"United States","status":"Divorced","children":3,"self_made":true},{"name":"Vagit Alekperov","networth":"24.9","country":"Russia","source":"oil","age":70,"citizenship":"Russia","status":"Married","children":1,"self_made":true},{"name":"Leonid Mikhelson","networth":"24.9","country":"Russia","source":"gas, chemicals","age":65,"citizenship":"Russia","status":"Married","children":2,"self_made":true},{"name":"Jim Simons","networth":"24.6","country":"United States","source":"hedge funds","age":83,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Jiang Rensheng & family","networth":"24.4","country":"China","source":"vaccines","age":67,"citizenship":"China","status":"Married","children":1,"self_made":true},{"name":"Gina Rinehart","networth":"23.6","country":"Australia","source":"mining","age":67,"citizenship":"Australia","status":"Widowed","children":4,"self_made":true},{"name":"Rupert Murdoch & family","networth":"23.5","country":"United States","source":"newspapers, TV network","age":90,"citizenship":"United States","status":"Married","children":6,"self_made":true},{"name":"Shiv Nadar","networth":"23.5","country":"India","source":"software services","age":75,"citizenship":"India","status":"Married","children":1,"self_made":true},{"name":"Zhang Zhidong","networth":"23.4","country":"China","source":"internet media","age":49,"citizenship":"China","status":"","children":0,"self_made":true},{"name":"Iris Fontbona & family","networth":"23.3","country":"Chile","source":"mining","age":78,"citizenship":"Chile","status":"Widowed","children":3,"self_made":true},{"name":"Lei Jun","networth":"23.0","country":"China","source":"smartphones","age":51,"citizenship":"China","status":"Married","children":2,"self_made":true},{"name":"Zhang Yong","networth":"23.0","country":"Singapore","source":"restaurants","age":50,"citizenship":"Singapore","status":"Married","children":0,"self_made":true},{"name":"Richard Qiangdong Liu","networth":"22.4","country":"China","source":"e-commerce","age":47,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"Gennady Timchenko","networth":"22.0","country":"Russia","source":"oil, gas","age":68,"citizenship":"Russia","status":"Married","children":3,"self_made":true},{"name":"Stephen Schwarzman","networth":"21.9","country":"United States","source":"investments","age":74,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Goh Cheng Liang","networth":"21.7","country":"Singapore","source":"paints","age":93,"citizenship":"Singapore","status":"Widowed","children":3,"self_made":true},{"name":"Stefan Quandt","networth":"21.6","country":"Germany","source":"BMW","age":54,"citizenship":"Germany","status":"Married","children":1,"self_made":true},{"name":"Li Xiting","networth":"21.5","country":"Singapore","source":"medical devices","age":70,"citizenship":"Singapore","status":"","children":0,"self_made":true},{"name":"Pierre Omidyar","networth":"21.4","country":"United States","source":"eBay, PayPal","age":53,"citizenship":"United States","status":"Married","children":3,"self_made":true},{"name":"Stefan Persson","networth":"21.3","country":"Sweden","source":"H&M","age":73,"citizenship":"Sweden","status":"Married","children":3,"self_made":true},{"name":"Abigail Johnson","networth":"20.9","country":"United States","source":"money management","age":59,"citizenship":"United States","status":"Married","children":2,"self_made":true},{"name":"R. Budi Hartono","networth":"20.5","country":"Indonesia","source":"banking, tobacco","age":80,"citizenship":"Indonesia","status":"Married","children":3,"self_made":true},{"name":"Andrew Forrest","networth":"20.4","country":"Australia","source":"mining","age":59,"citizenship":"Australia","status":"Married","children":3,"self_made":true},{"name":"Ray Dalio","networth":"20.3","country":"United States","source":"hedge funds","age":71,"citizenship":"United States","status":"Married","children":4,"self_made":true},{"name":"Michael Hartono","networth":"19.7","country":"Indonesia","source":"banking, tobacco","age":81,"citizenship":"Indonesia","status":"Married","children":4,"self_made":true},{"name":"Li Shufu","networth":"19.7","country":"China","source":"automobiles","age":57,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"Zhong Huijuan","networth":"19.7","country":"China","source":"pharmaceuticals","age":60,"citizenship":"China","status":"Married","children":0,"self_made":true},{"name":"Xu Hang","networth":"19.5","country":"Hong Kong","source":"medical devices","age":54,"citizenship":"Hong Kong","status":"","children":0,"self_made":true},{"name":"Lui Che Woo & family","networth":"19.4","country":"Hong Kong","source":"casinos/hotels","age":92,"citizenship":"Hong Kong","status":"Married","children":5,"self_made":true},{"name":"Emmanuel Besnier","networth":"19.1","country":"France","source":"cheese","age":50,"citizenship":"France","status":"","children":0,"self_made":true},{"name":"Laurene Powell Jobs & family","networth":"19.0","country":"United States","source":"Apple, Disney","age":57,"citizenship":"United States","status":"Widowed","children":3,"self_made":true},{"name":"Eric Schmidt","networth":"18.9","country":"United States","source":"Google","age":66,"citizenship":"United States","status":"Married","children":2,"self_made":true},{"name":"Sun Piaoyang","networth":"18.9","country":"China","source":"pharmaceuticals","age":62,"citizenship":"China","status":"Married","children":1,"self_made":true},{"name":"Theo Albrecht, Jr. & family","networth":"18.8","country":"Germany","source":"Aldi, Trader Joe\'s","age":70,"citizenship":"Germany","status":"","children":1,"self_made":true},{"name":"Alisher Usmanov","networth":"18.4","country":"Russia","source":"steel, telecom, investments","age":67,"citizenship":"Russia","status":"Married","children":0,"self_made":true},{"name":"Robert Pera","networth":"18.3","country":"United States","source":"wireless networking gear","age":43,"citizenship":"United States","status":"Single","children":0,"self_made":true}]';

//JSON object converted to array
const arrayOfBillionaires = JSON.parse(data);

console.log(arrayOfBillionaires);

//creating a class
class Billionaire {
  constructor() {
    this.name = null;
    this.networth = null;
    this.country = null;
    this.source = null;
    this.age = null;
    this.citizenship = null;
    this.status = null;
    this.children = null;
    this.selfMade = null;
  }

  setName(name) {
    this.name = name;
  }

  setNetworth(networth) {
    this.networth = networth;
  }

  setCountry(country) {
    this.country = country;
  }

  setSource(source) {
    this.source = source;
  }

  setAge(age) {
    this.age = age;
  }

  setCitizenship(citizenship) {
    this.citizenship = citizenship;
  }

  setStatus(status) {
    this.status = status;
  }

  setChildren(children) {
    this.children = children;
  }

  setSelfMade(selfMade) {
    this.selfMade = selfMade;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `<h2 class="billionaire__heading" id="${this.name}">${this.name} - $${this.networth} B</h2><ul id="${this.name}"><li>age: ${this.age}</li><li>children: ${this.children}</li><li>citizenship: ${this.citizenship}</li><li>country: ${this.country}</li><li>selfmade: ${this.selfMade}</li><li>source: ${this.source}</li><li>status: ${this.status}</li></ul>`;

    return div;
  }
}

//accessing the only element created in HTML doc
const outterDiv = document.querySelector(".list-of-billionaires");
console.log(outterDiv);

arrayOfBillionaires.forEach((element) => {
  const newPerson = new Billionaire();
  newPerson.setName(element.name);
  newPerson.setNetworth(element.networth);
  newPerson.setCountry(element.country);
  newPerson.setSource(element.source);
  newPerson.setAge(element.age);
  newPerson.setCitizenship(element.citizenship);
  newPerson.setStatus(element.status);
  newPerson.setChildren(element.children);
  newPerson.setSelfMade(element.self_made);
  outterDiv.appendChild(newPerson.render());
});

// //variable used for a ranking number in headings
// let rank = 1;

// //function that creates heading
// const creationOfHeading = (element) => {
//   const name = element.name;
//   const networth = element.networth;

//   return (
//     '<h2 class="billionaire__heading" id="' +
//     name +
//     '">' +
//     rank +
//     ". " +
//     name +
//     " - $" +
//     networth +
//     "B</h2>"
//   );
// };

// //function that creates the list
// const creationOfData = (element) => {
//   const age = element.age;
//   const children = element.children;
//   const citizenship = element.cizitenship;
//   const country = element.country;
//   const selfMade = element.self_made;
//   const source = element.source;
//   const status = element.status;
//   const name = element.name;

//   return (
//     '<ul id="' +
//     name +
//     '"><li>age: ' +
//     age +
//     "</li><li>children: " +
//     children +
//     "</li><li>citizenship: " +
//     citizenship +
//     "</li><li>country: " +
//     country +
//     "</li><li>self made: " +
//     selfMade +
//     "</li><li>source: " +
//     source +
//     "</li><li>status: " +
//     status +
//     "</li></ul>"
//   );
// };

// //function that combines everything and creates the whole structure, + adding 1 to a ranking variable
// arrayOfBillionaires.forEach((element) => {
//   outterDiv.innerHTML +=
//     '<div class="billionaire">' +
//     creationOfHeading(element) +
//     creationOfData(element) +
//     "</div>";

//   rank++;
// });

// //accessing all the lists
// const lists = Array.from(document.querySelectorAll("ul"));

// //accessing all the headings
// const headings = Array.from(document.querySelectorAll("h2"));

// //creating event listeners for every heading --> 1.cursor effect 2.displaying the lists
// headings.forEach((heading) => {
//   heading.addEventListener("mouseenter", () => {
//     heading.className += " hover";
//   });

//   heading.addEventListener("click", () => {
//     lists.forEach((list) => {
//       //the list should be influenced only if its ID matches the ID of the clicked heading
//       if (heading.getAttribute("id") === list.getAttribute("id")) {
//         //if there is already displayed, the click should make it invisible, and vice versa
//         if (list.className === "ul_shown") {
//           list.className = "";
//         } else {
//           list.className = "ul_shown";
//         }
//       }
//     });
//   });
// });

// //accessing the input element
// const input = document.querySelector("input");

// //whenever the key is released, the filter will compare the input value with the name of the billionare and if there is a match, it will display him/her
// input.addEventListener("keyup", () => {
//   arrayOfBillionaires.forEach((element) => {
//     //every billionaire's name is compared with the input value
//     if (element.name.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
//       //every heading is checked and if its ID corresponds with the name of the billionaire, its class name gets changed
//       headings.forEach((heading) => {
//         if (heading.getAttribute("id") === element.name) {
//           heading.className = "heading-shown";
//         }
//       });
//     }
//     //making sure, that the other headings lose their class name and dissappear
//     else {
//       headings.forEach((heading) => {
//         if (heading.getAttribute("id") === element.name) {
//           heading.className = "";
//         }
//       });
//     }
//   });
// });

// //if the input field is empty, all the headings should be visible
// if (input.value === "") {
//   headings.forEach((heading) => {
//     heading.className = "heading-shown";
//   });
// }
