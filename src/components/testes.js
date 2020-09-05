let axios = require('axios')
let fs = require('fs')

let users = [{
    nome: 'Francisco Jr',
    idade: 28
},
{
    nome: 'Leila Cabeleila',
    idade: 38
},
{
    nome: 'Carlos Augusto',
    idade: 15
},
{
    nome: 'Franciscleyson Aumeita',
    idade: 17
}]

let adultContAcess = (nome) => {
    return `U can access any adult content now ${nome}`
}

let AdultContAcessDenied = (nome) => {
    return `U can't access adult content, where r ur parents? ${nome}` 
}

//tentativa em acessar conteudo adulto
let tryAdultContAcess = users.map( user => {
    if( user.idade >= 18) {
        return adultContAcess( user.nome)
    } else {
        return AdultContAcessDenied(user.nome)
    }
})

let addPremium = users.map(user => {
    return user.Premium = null
})

let overAge = users.filter(user => {
    if(user.idade > 18) {
        return user.Premium = true
    } else {
        return user.Premium = false
    }
})

let api = axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(response => {
  // JSON responses are automatically parsed.
    let usuarios = response.data
    let name = usuarios.map( usuario => {
        return {
            id: usuario.id,
            nome: usuario.name,
            apelido: usuario.username,
        email: usuario.email}
    })
    console.log(name)
})
.catch(e => {
    console.log( e)
})
//callback
/*
fs.readFile('../textos/texto.txt', (err, contents) => {
    console.log(err, String(contents))
})
*/

//promise
const you = (file) => new Promise((resolve, reject ) => {
    fs.readFile(file, (err, contents) => {
        if(err) {
            reject(err)
        } else {
            resolve(String(contents))
        }
    })
})

you('../textos/texto.txt' ).then( (contents, ) => {
    console.log(contents)
    you('../textos/texto2.txt').then( contents => {
        console.log(contents)
    })
})

console.log(api)
console.log(addPremium)
console.log(overAge)
console.log(tryAdultContAcess)
console.log(users)
