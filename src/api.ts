const conta = {
    email: 'will@will.com',
    password: '123456',
    name: 'Willian Borges',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
