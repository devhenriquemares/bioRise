function formatarTelefone(input){
    let telefone = input.value.replace(/\D/g, '');

    telefone = telefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');

    input.value = telefone;
}

function formatarCPF(input){
    let cpf = input.value.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    input.value = cpf;
}