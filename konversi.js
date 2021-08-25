const celciusInput=document.getElementById("celcius");
const fahrenheitInput=document.getElementById("fahrenheit");
const reamurInput=document.getElementById("reamur");
const kelvinInput=document.getElementById("kelvin");

const inputs=document.getElementsByClassName(input);

for(let i=0; i<input.length; i++) {
    let input=input[i];

    input.addEventListener("input", function(e){
        let value=parseFloat(e.target.value);
        switch(e.target.name) {
            case "celcius":
                fahrenheitInput.value=(value*1.8)+32;                
                reamurInput.value=value+0.8;
                kelvinInput.value=value+273.15;
                break;
            case "fahrenheit":
                celciusInput.value=(value-32/1.8);
                reamurInput.value=((value-32)/1.8)*0.8;
                kelvinInput.value=((value-32)/1.8)+273.15;
                break;
            case "reamur":
                celciusInput.value=value*1.25;
                fahrenheitInput.value=((value*2.25)+32);
                kelvinInput.value=((value*1.25)+273.15);
                break;            
            case "kelvin":
                celciusInput.value=value-273.15;
                fahrenheitInput.value=((value-273.15)*1.8)+32;
                kelvinInput.value=((value-273.15)*0.8);
                break;    
        }
    });

    getResult(e.target.value) 
        const obj = this;
        return new Promise(function(resolve, reject) {
          let result;
          try {
            result = obj.operate(e.target.value);
          } catch(err) {
            result = err;
          } finally {
            setTimeout(function() {
              if (result instanceof Error) {
                reject(result);
                return;
              }
    
              if (isNaN(result)) {
                reject(new Error('Invalid operation'));
                return;
              }
    
              resolve(result);
            }, (Math.random() * 2500));
          }
        });
}


module.exports = Converter;