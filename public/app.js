const paragraph = document.querySelector('p');

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

display();