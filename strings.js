// strings 
 
const firstName = 'Evelyn';
const lastName  ="Basilio";
const fullName  = firstName + " " + lastName;


console.log("I'm"+ firstName)
console.log('I\'m' + firstName);


console.log(fullName);
//Strings Multilinea

const menu = `
elige:
1 - Opcion 1
2 - Opcion 2
3 - Opcion 3
`;

console.log(menu);

//Strings Templates
//Placeholder ${}

const city = 'Huamantla';
const phone ='2472057130';
const rol = 'alumno';

const presentation = `
Holaa 
Soy %{fullName}, ${rol} en la UTT
vivo en ${ city}
Te puedes comunicar conmigo en ${phone}
`

console.log(presentation);

