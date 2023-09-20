function wrapping(gifts){
    //const envueltos = [];
    //for(const gift of gifts){
   //const tapaSuperior = '*'.repeat(gift.length + 2);
   //const tapaInferior ='*' .repeat(gift.length + 2);
   // envueltos.push (`$)
    }




for(const gift of gifts){
 const envueltos = gifts.map(gift =>{
    const tapas = '*'.repeat(gift.length + 2);
    return `${ tapas}\n*${gift}*\n${tapas}`;
 });   
}


const gifts = ['cat','game','socks']
const wrapped = wrapping(gifts)