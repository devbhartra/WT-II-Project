import { check, sleep } from "k6";
import { Rate } from "k6/metrics";
import http from "k6/http";

// See https://docs.k6.io/docs/options for other options
export let options = {
  // simulate rampup of traffic from 1 to 200 users over 5 minutes.
  stages: [
    { duration: "5m", target: 200 },
  ]
};

var num = Math.floor(Math.random() * 6) + 1;
let baseUrl = 'http://127.0.0.1:5001/api/v1.0/recommendations/'+num;

// let's collect all errors in one metric
let errorRate = new Rate("API errors");

// let authenticate = function(user, password){
//   let authUserRes = http.post(`${baseUrl}/anything`, JSON.stringify({user: user, password: password}));

//   // check if the authentication was successful, or increase error metric
//   check(authUserRes, {
//     "login successful": (r) => r.status === 200
//   }) || errorRate.add(1);

//   return authUserRes.json().token;
// };

// let getUser = function(user_id, token){
//   let userRes = http.get(`${baseUrl}/anything/${user_id}`, {}, {
//     headers: {
//       Authorization: `Token ${token}`
//     }
//   });

//   check(userRes, {
//       "user retrieval successful": (r) => r.status === 200
//   }) || errorRate.add(1);

//   return userRes.json();
// };

export default function() {
//   let authToken = authenticate("user@example.com", "supersecure");
//   let user = getUser(2, authToken);

  sleep(1); // user usually waits 1 second after this flow
}