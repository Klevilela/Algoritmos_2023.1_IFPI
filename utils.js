import prompt from 'prompt-sync'
const input = prompt()

export const pedir_texto = (mensagem) => input(mensagem)
export const pedir_numero = (mensagem) =>  Number(input(mensagem))

//export default pedir_dado(mensagem)