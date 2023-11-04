const form =  document.querySelector('form');

form.addEventListener('submit', function(e) {
   e.preventDefault(); // to prevent from refreshing values and holding for longer
    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }else{
       const bmi = (weight/((height*height)/10000)).toFixed(2);
       //console.log(bmi);
        //showing result
       //console.log("entered");
       if(bmi<18.6){
        result.innerHTML = `<span>Under Weight as BMI = ${bmi}</span>` 
       }else if(bmi>18.6 && bmi<24.9){
        result.innerHTML = `<span>Normal Weight as BMI = ${bmi}</span>` 
       }else if(bmi>24.9){
        result.innerHTML = `<span>Over Weight as BMI = ${bmi}</span>` 
       }
    }
})