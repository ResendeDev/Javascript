const cliente = {
    nome: "André",
    idade: 36,
    cpf: "03928493302",
    email: "andre@email.com",
    fones: ["5591235498", "5521988743124"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";
console.log(cliente);