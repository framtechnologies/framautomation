
const fetch = require('node-fetch');

async function getSessionTokenTripletex(consumerToken, employeetoken) {
  const url = "https://api.tripletex.io/v2/token/session/:create?&consumerToken=" + consumerToken + "&employeeToken=" + employeetoken +"&expirationDate=2025-09-30"
  options = {
    method: 'PUT',
  };
  const response = await fetch(url, options);
  const dataJson = await response.json();
  const sessionToken = await  Buffer.from("0:"+dataJson.value.token).toString('base64');
  //console.log(sessionToken)
  return sessionToken;
}

async function callApi() {
  var sessionToken = await getSessionTokenTripletex("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b", "test-7665ede9-6c60-4729-9f92-3fa57e4aea05");

}

callApi();
