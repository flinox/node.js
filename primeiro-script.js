console.log('n-fatorial')

console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

// Registrar uma função para executar no evento exit
process.on('exit', ()=>{
    console.log('script está prestes a terminar')
})

const num = parseInt(process.argv[2])

const fatorial = (num)=>{
    if(num === 0){
        return 1
    }

    return num * fatorial (num - 1)
}

// 5 * 4 * 3 * 2 * 1 * 1

console.log(process.argv)

console.log(`O fatorial de 5 é igual a ${fatorial(num)}`)