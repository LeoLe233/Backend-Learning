/*Creating a Promise instance:
    The actual promising function goes inside function(resolve, reject).
    resolve, reject are callbacks provided by JS itself,
    treat them as functions that return something when the promising 
    function is successful/unsuccessful.
*/

//First test without extracting function from Promise

// let test_promise = new Promise(function(resolve, reject){
//     if(pass==true){
//         //Sets the status of test_promise to "fulfilled" and return "Done!"
//         setTimeout(() => resolve("Done!"), 1000);
//     }
//     else{
//         //Sets the status of test_promise to "rejected" and return "Sth is wrong!"
//         setTimeout(() => reject("Sth is wrong!"), 1000);
//     }
// });

let pass = false;

//The function that makes a promise
function handlePromise(resolve, reject, success) {
    setTimeout(() => {
      if (success) {
        resolve("Done!");
      } 
      else {
        reject("Something went wrong!");
      }
    }, 1000);
  }
  
let test_promise = new Promise((resolve, reject) => handlePromise(resolve, reject, pass));


test_promise.then(
    // (value) is the returned value from resolve/reject() functions
    (message) => {
    //if successful, alert the returned result "Done!"
        console.log(message)
    },
    (error) =>{
    //if unsuccessful, alert an error "Sth went wrong!"
        console.log(error)
    }
)