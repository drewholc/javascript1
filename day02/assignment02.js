var userAns = prompt('What would you like to do?');
console.log(userAns);
if (userAns === "" || userAns === null) {
  alert('you didnt type anything!');
}else {
  alert( 'You would like to ' + userAns);
}
console.log(userAns);
