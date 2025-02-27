import { login } from "./login"

describe('login', () => {

    const mockEmail = 'will@will.com'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', '123456')
        expect(response).toBeFalsy()
    })
})