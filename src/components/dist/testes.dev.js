"use strict";

var users = [{
  nome: 'Francisco Jr',
  idade: 28
}, {
  nome: 'Leila Cabeleila',
  idade: 38
}, {
  nome: 'Carlos Augusto',
  idade: 15
}, {
  nome: 'Franciscleyson Aumeita',
  idade: 17
}];
var addPremium = users.map(function (user) {
  return user.Premium = null;
});
var overAge = users.filter(function (user) {
  if (user.idade > 18) {
    return user.Premium = true;
  } else {
    return user.Premium = false;
  }
});
console.log(addPremium);
console.log(overAge);
console.log(users);