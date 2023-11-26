function Calculate() { 
  
    // Extracting value in the amount  
    // section in the variable 
    let amount = document.querySelector("#amount").value; 
  
    // Extracting value in the interest 
    // rate section in the variable 
    let rate = document.querySelector("#rate").value; 
  
    // Extracting value in the months  
    // section in the variable 
    let months = document.querySelector("#months").value; 
  
    // Calculating interest per month 
    let interest = (amount * (rate * 0.01)) / months; 
      
    // Calculating total payment 
    let total = ((amount / months) + interest).toFixed(2); 
  
<<<<<<< HEAD
    
=======
>>>>>>> 8b8f73b39fe8a61ef75473f9f97129c86e0ca073
    document.querySelector("#total").innerHTML = "EMI : (₹)" + total; 
}