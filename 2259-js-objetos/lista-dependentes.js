const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '03928493302',
    email: 'andre@email.com',
    fones: ['5591235498', '5521988743124'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'
    }]

};

cliente.dependentes.push({
    nome: "Samantha Rodrigues",
    parentesco: "Filha",
    dataNascimento: "04/01/2014"
});

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === "04/01/2014");

console.log(filhaMaisNova[0].nome);

