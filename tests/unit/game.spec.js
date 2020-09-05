import { shallowMount } from '@vue/test-utils'
import game from '@/components/game.vue'

describe('game.vue', () => {
    let wrapper = null;
    
    beforeAll(() => {
        wrapper = shallowMount(game)
    })

    it('itando vue', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('state inicial de pedra, papel e tesoura = false', () => {
        
        expect(wrapper.vm.$data.player1.pedra).toBeFalsy
        expect(wrapper.vm.$data.player1.papel).toBeFalsy
        expect(wrapper.vm.$data.player1.tesoura).toBeFalsy
        expect(wrapper.vm.$data.player2.pedra).toBeFalsy
        expect(wrapper.vm.$data.player2.papel).toBeFalsy
        expect(wrapper.vm.$data.player2.tesoura).toBeFalsy
    })

    it('Player1. função para mudar o boolean do objeto escolhido para true, logo ele será rendenrizado pelo v-if, a função o receberá como param', () => {
        let pick = expect(wrapper.vm.pick1('pedra'))
        pick.toBeTruthy()
        pick.toBe('pedra')
        // expect(wrapper.vm.$data.start())
        expect(wrapper.vm.$data.player1.pedra).toBeTruthy()
        expect(wrapper.vm.$data.player1.escolhido).toBe('pedra')
        console.log(wrapper.vm.$data.player1.escolhido)
    })

    it('Player2. função para mudar o boolean do objeto escolhido para true, logo ele será rendenrizado pelo v-if, a função o receberá como param', () => {
        let pick = expect(wrapper.vm.pick2('tesoura'))
        pick.toBeTruthy()
        pick.toBe('tesoura')
        expect(wrapper.vm.$data.player2.tesoura).toBeTruthy()
        expect(wrapper.vm.$data.player2.escolhido).toBe('tesoura')
        console.log(wrapper.vm.$data.player2.escolhido)
    })

    it('A função start() retorna o ganhador, em relação a propriedade *escolhido* de cada player, e o setará na propriedade fraseWin. Chamada pelo watch', () => {
        expect(wrapper.vm.start()).toBe('Player1 Venceu!!')
        let func = expect(wrapper.vm.$data.fraseWin)
        func.toBe('Player1 Venceu!!')
    })

    describe('se as mãos serão renderizadas conforme a escolha pelo v-if', () => {

        it('se a imagem do player1 renderizará correspondente a mao esclhida', () => {
            let img1 = wrapper.find('#pedra1')
            expect(img1.exists()).toBeTruthy()
        })

        it('se a imagem do player2 renderizará', () => {
            let img2 = wrapper.find('#tesoura2')
            expect(img2.exists()).toBeTruthy()
        })
    })

    describe('acionamento o botões', () => {

            it('acionando btn pedra, papel e tesoura dos players', async () => {
            const btn = wrapper.find('#btnPapel1')
            await btn.trigger('click')
            expect(wrapper.vm.$data.player1.papel).toBeTruthy()
            })

            it('acionando btn de confirmação da mão, chamara a func start(), e é esperado que as props pronto do obj player1 e player2 = falase', async () => {
                const confirm1 = wrapper.find('#confirm1')
                const confirm2 = wrapper.find('#confirm2')
                await confirm1.trigger('click')
                await confirm2.trigger('click')
                expect(wrapper.vm.$data.player1.pronto).toBeFalsy()
                expect(wrapper.vm.$data.player2.pronto).toBeFalsy()
            })
    })
})