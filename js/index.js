

document.addEventListener('invalid', (function () {
    return function (e) {
        //prevent the browser from showing default error bubble / hint
        e.preventDefault();
      
    };
})(), true);

const button = document.getElementById('submitButton');
//   const email = document.getElementById('email');

button.addEventListener('click', function () {

    const email = document.getElementById('email').checkValidity();
    console.log(email);


   
   let emailInput = document.querySelector('.email-input');
    let errorSubmission = document.querySelector(".errorsubmission");
    let empty = document.querySelector(".empty");

    if (email) {
        emailInput.classList.remove("email-input-error");
        // alert("Hey there!");
     
        errorSubmission.style.display = "none";
       
        
    } else if (emailInput.value.length == 0) {

        emailInput.classList.add("email-input-error");
        // alert("Hey there!");

        errorSubmission.style.display = "none";
        empty.style.display = "block";}
    
  else if(!email && !emailInput.value.length == 0)  {

        emailInput.classList.add("email-input-error");
        // alert("Hey there!");
      empty.style.display = "none";
        errorSubmission.style.display = "block";
    }


}


);
