//Importar o módulo 'fs' file system

//Inicianlizando o módulo
const fs =require('fs')

console.log("Iniciando nosso script...")

const mensagem = "Log do dia: O usuário acessou o sistema"+Date()
fs.writeFileSync('log.txt', mensagem)
try {
    fs.writeFileSync('log.txt', mensagem)
    console.log('Arquivo "log.txt" escrito com sucesso!Modo Síncrono')
} catch (error) {
    console.error('Ops! Ocorreu um erro ao escrever o arquivo:', error)
}

console.log(..."Script finalizado!...")