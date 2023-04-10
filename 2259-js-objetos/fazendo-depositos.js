const cliente = {
    nome: "André",
    idade: 36,
    cpf: "2423788523",
    email: "andre@email.com",
    fones: ["5591345498", "5521988743124"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "Filha",
            dataNascimento: "20/03/2011"},
        {
            nome: "Samantha Maria",
            parentesco: "Filha",
            dataNascimento: "04/01/2014"
        }
    ],
    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    }

}

console.log(cliente.saldo);
cliente.depositar(1500);
console.log(cliente.saldo);