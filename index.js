const alunos =[ 
{
    nome: 'João',
    nota: 5,
    turma: '1b',
},
{
    nome: 'maria',
    nota: 9,
    turma: '1c',
},
{
    nome: 'pedro',
    nota: 7,
    turma: '1d',
},
{
    nome: 'arthur',
    nota: 3,
    turma: '1d',
},
];

function alunosAprovados(arr, media){
    let aprovados =[];

for( let i = 0; i < arr.length; i++){

    const{nota,nome} = arr[i];

    if (arr[i].nota >= media){
        aprovados.push(arr[i].nome);
    }
}
return aprovados;
}
console.log(alunosAprovados(alunos,5));