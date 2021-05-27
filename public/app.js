//const { json } = require("body-parser");

const paragraph = document.querySelector('p')
const envelopes = document.getElementById('envelopes');

const display = async()=>{
    try{
         const response = await fetch('/api');
         if(response.ok){
             const textResponse = await response.text();
            paragraph.textContent = textResponse;
             
         }
    }catch(error){
        console.log(error.message);
    }
  


}

const getenvelops = async()=>{
    try{
        const response = await fetch('/envelope');
           console.log(response);
        if (response.ok){
            const results = await response.json();
         
            
            envelopes.textContent = JSON.stringify(results);

        }
    }catch(error){
 console.log(error.message + ' not a json ');
    }
}

display();
getenvelops();