//Handling promises with .then and .catch

//Random online api for testing, contains a list of users in json
const source = "https://jsonplaceholder.typicode.com/users"

//Main function for fetching info + handling errors
function getUserInfo() {

  //fetch() returns a Promise object with properties like ok, status, and header
  return fetch(source)

  //Attaches callbacks for the resolution and/or rejection of the Promise.
  //Response is the variable name for the returned Promise
  .then(response => {
    //Resolved
    if(response.ok){
      console.log('Everything alright!')
      return response.json();
    }
    //Rejected
    else{
      console.log('Something is not right!')
      return new Error(`Error fetching data from ${source}`)
    }
  })
}

function extractInfo(data){
  let userful_data = data.map(user => {
    return{
      name: user.username,
      email: user.email,
      city: user.address.city
    }
  });
  return userful_data;
}

//Looks much cleaner! 
//data and error are the variable names for the returned values
function parseData(data) {
}
getUserInfo()
  .then(data => {
    const extractedInfo = extractInfo(data);
    console.log(extractedInfo);
  })
  .catch(error => {
    console.log(error);
  })