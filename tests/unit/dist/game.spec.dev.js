"use strict";

var _testUtils = require("@vue/test-utils");

var _game = _interopRequireDefault(require("@/components/game.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('game.vue', function () {
  var wrapper = null;
  beforeAll(function () {
    wrapper = (0, _testUtils.shallowMount)(_game["default"]);
  });
  it('itando vue', function () {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('state inicial de pedra, papel e tesoura = false', function () {
    expect(wrapper.vm.$data.player1.pedra).toBeFalsy;
    expect(wrapper.vm.$data.player1.papel).toBeFalsy;
    expect(wrapper.vm.$data.player1.tesoura).toBeFalsy;
    expect(wrapper.vm.$data.player2.pedra).toBeFalsy;
    expect(wrapper.vm.$data.player2.papel).toBeFalsy;
    expect(wrapper.vm.$data.player2.tesoura).toBeFalsy;
  });
  it('Player1. função para mudar o boolean do objeto escolhido para true, logo ele será rendenrizado pelo v-if, a função o receberá como param', function () {
    var pick = expect(wrapper.vm.pick1('pedra'));
    pick.toBeTruthy();
    pick.toBe('pedra'); // expect(wrapper.vm.$data.start())

    expect(wrapper.vm.$data.player1.pedra).toBeTruthy();
    expect(wrapper.vm.$data.player1.escolhido).toBe('pedra');
    console.log(wrapper.vm.$data.player1.escolhido);
  });
  it('Player2. função para mudar o boolean do objeto escolhido para true, logo ele será rendenrizado pelo v-if, a função o receberá como param', function () {
    var pick = expect(wrapper.vm.pick2('tesoura'));
    pick.toBeTruthy();
    pick.toBe('tesoura');
    expect(wrapper.vm.$data.player2.tesoura).toBeTruthy();
    expect(wrapper.vm.$data.player2.escolhido).toBe('tesoura');
    console.log(wrapper.vm.$data.player2.escolhido);
  });
  it('A função start() retorna o ganhador, em relação a propriedade *escolhido* de cada player, e o setará na propriedade fraseWin. Chamada pelo watch', function () {
    expect(wrapper.vm.start()).toBe('Player1 Venceu!!');
    var func = expect(wrapper.vm.$data.fraseWin);
    func.toBe('Player1 Venceu!!');
  });
  describe('se as mãos serão renderizadas conforme a escolha pelo v-if', function () {
    it('se a imagem do player1 renderizará correspondente a mao esclhida', function () {
      var img1 = wrapper.find('#pedra1');
      expect(img1.exists()).toBeTruthy();
    });
    it('se a imagem do player2 renderizará', function () {
      var img2 = wrapper.find('#tesoura2');
      expect(img2.exists()).toBeTruthy();
    });
  });
  describe('acionamento o botões', function () {
    it('acionando btn pedra, papel e tesoura dos players', function _callee() {
      var btn;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              btn = wrapper.find('#btnPapel1');
              _context.next = 3;
              return regeneratorRuntime.awrap(btn.trigger('click'));

            case 3:
              expect(wrapper.vm.$data.player1.papel).toBeTruthy();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    it('acionando btn de confirmação da mão, chamara a func start(), e é esperado que as props pronto do obj player1 e player2 = falase', function _callee2() {
      var confirm1, confirm2;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              confirm1 = wrapper.find('#confirm1');
              confirm2 = wrapper.find('#confirm2');
              _context2.next = 4;
              return regeneratorRuntime.awrap(confirm1.trigger('click'));

            case 4:
              _context2.next = 6;
              return regeneratorRuntime.awrap(confirm2.trigger('click'));

            case 6:
              expect(wrapper.vm.$data.player1.pronto).toBeFalsy();
              expect(wrapper.vm.$data.player2.pronto).toBeFalsy();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  });
});