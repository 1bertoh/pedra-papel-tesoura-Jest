/* eslint-disable no-unreachable */
<template>
    <div
    class="red"
    style="height: 100vh;">
    <v-row
    justify='center'>
        <div
        id="Player1"
        class="green"
        style="height:40vh; width: 90%" >
            <p
            class="font-weight-black display-3 blue--text">
                Player 1
            </p>
            <div>
                <v-row justify='center'>
                    <img src="../assets/papel.png" alt=""
                    id="papel1"
                    height="180"
                    v-if="player1.papel"
                    >
                <img src="../assets/pedra.png" alt=""
                    id="pedra1"
                    height="180"
                    v-if="player1.pedra">
                <img src="../assets/tesoura.png" alt=""
                id="tesoura1"
                height="180"
                v-if="player1.tesoura">
                </v-row>
                
            </div>
        </div>
        <!-- começo do placar-->
        <div id="placar"
        class="white"
        style="height:20vh; width:90%">
            <v-row
            class="pb-3">
            <!-- começo do placar player1-->
                <v-col
                style="border:1px solid black"
                cols='4'
                id="placar_p1">
                <div>
                    <v-row style="border:1px solid pink;
                        margin-top: -12px"
                        id="oi">
                    <v-col
                        style="border:1px solid red"
                        cols='6'>
                    <v-btn color=""
                    id="pedra1"
                        small
                        block
                        @click="pick1('pedra')"
                        :class="{'my-1': true,
                        'blue lighten-2':player1.pedra,
                        'blue lighten-4':player1.pedra === false}"
                    >
                    pedra
                    </v-btn>
                    <v-btn
                        color=""
                        id="btnPapel1"
                        small
                        block
                        @click="pick1('papel')"
                        :class="{'my-1': true,
                        'blue lighten-2':player1.papel,
                        'blue lighten-4':player1.papel === false}"
                    >
                        papel
                        </v-btn>
                    <v-btn
                        color=""
                        small
                        block
                        @click="pick1('tesoura')"
                        :class="{'my-1': true,
                        'blue lighten-2':player1.tesoura,
                        'blue lighten-4':player1.tesoura === false}"
                    >
                    tesoura
                    </v-btn>
                    </v-col>

                    <v-col
                        align-self='center'
                        cols="6">
                        <v-btn
                        id="confirm1"
                            small
                            @click="player1.pronto = true"
                            :class="{green: player1.pronto === false, blue:player1.pronto}"
                        >
                        confirmar
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
                

                </v-col>
                <!-- fim  do placar player1-->
                <!-- começo da frase de quem ganhou-->
                <v-col
                cols="4">
                <p
                class="text-center display-2 font-weight-black">
                    {{fraseWin}}
                </p>
                </v-col>
                <!-- fim da frase de quem ganhou-->
                <!-- começo  do placar player1-->
                    <v-col
                        style="border:1px solid black"
                        cols='4'
                        id="placar_p1">
                            <div>
                                <v-row style="border:1px solid pink; margin-top: -12px;"
                                id="oi">

                                    <v-col
                                        align-self='center'
                                        align='end'
                                        cols="6">
                                        <v-btn small
                                        id="confirm2"
                                            @click="player2.pronto = true"
                                            :class="{green: player2.pronto === false, orange:player2.pronto}"
                                        >
                                        confirmar
                                        </v-btn>
                                    </v-col>

                                    <v-col
                                    style="border:1px solid red"
                                    cols='6'>
                                        <v-btn
                                            color=""
                                            small
                                            block
                                            @click="pick2('pedra')"
                                            :class="{'my-1': true,
                                            'orange lighten-2':player2.pedra,
                                            'orange lighten-4':player2.pedra === false}"
                                        >
                                        pedra
                                        </v-btn>
                                        <v-btn
                                            color=""
                                            small
                                            block
                                            @click="pick2('papel')"
                                            :class="{'my-1': true,
                                            'orange lighten-2':player2.papel,
                                            'orange lighten-4':player2.papel === false}"
                                        >
                                        papel
                                        </v-btn>
                                        <v-btn
                                            color=""
                                            small
                                            block
                                            @click="pick2('tesoura')"
                                            :class="{'my-1': true,
                                            'orange lighten-2':player2.tesoura,
                                            'orange lighten-4':player2.tesoura === false}"
                                        >
                                        tesoura
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                
                    </v-col>
                <!-- fim  do placar player1-->
            </v-row>
        </div>
        <!-- fim do placar-->
        <div id="player2"
        class="green"
        style="height: 40vh; width: 90%">
                <p
                class="font-weight-black display-3 orange--text text-right">
                Player 2
            </p>
            <div>
                <v-row justify='center'>
                    <img src="../assets/papel.png" alt=""
                    id="papel2"
                    height="180"
                    v-if="player2.papel"
                    >
                <img src="../assets/pedra.png" alt=""
                    id="pedra2"
                    height="180"
                    v-if="player2.pedra">
                <img src="../assets/tesoura.png" alt=""
                id="tesoura2"
                height="180"
                v-if="player2.tesoura">
                </v-row>
                
            </div>
        </div>
    </v-row>
    </div>
</template>
<script>
export default {
    name: 'game',
    data() {
        return {
            num: 1,
            player1: {
            pedra: false,
            papel: false,
            tesoura: false,
            escolhido: null,
            pronto: false
            },
            player2: {
            pedra: false,
            papel: false,
            tesoura: false,
            escolhido: null,
            pronto: false
        },
        fraseWin: null
        }
    },
    watch: {
        'player1.pronto': function() {
        if (this.player1.pronto && this.player2.pronto === true) {
            this.start()
            }
        },
        'player2.pronto': function() {
        if (this.player1.pronto && this.player2.pronto === true) {
            this.start()
            }
        }
    },
    methods: {
        pick1(pick) {
            if (pick === 'pedra') {
                this.player1.pedra = true
                this.player1.papel = false
                this.player1.tesoura = false
            }
            if ( pick === 'papel') {
                this.player1.pedra = false
                this.player1.papel = true
                this.player1.tesoura = false
            }
            if ( pick === 'tesoura') {
                this.player1.pedra = false
                this.player1.papel = false
                this.player1.tesoura = true
            }
            return this.player1.escolhido = pick
        },
        pick2(pick) {
            if (pick === 'pedra') {
                this.player2.pedra = true
                this.player2.papel = false
                this.player2.tesoura =  false
            }
            if ( pick === 'papel') {
                this.player2.pedra = false
                this.player2.papel = true
                this.player2.tesoura =  false
            }
            if ( pick === 'tesoura') {
                this.player2.pedra = false
                this.player2.papel = false
                this.player2.tesoura =  true
            }
            return this.player2.escolhido = pick
        },
        start() {
            let p1 = this.player1.escolhido;
            let p2 = this.player2.escolhido;
            let fraseWin = null
            console.log(p1 + ' e ' + p2)

            if (p1 === 'pedra') {
                fraseWin
            switch(p2) {
            case 'pedra' :  fraseWin = 'Empate!!'; break;
            case 'papel' :  fraseWin = 'Player2 Venceu!!'; break;
            case 'tesoura' :  fraseWin = 'Player1 Venceu!!'; break;
            }
        }
            if (p1 === 'papel') {
            switch(p2) {
            case 'pedra' :  fraseWin = 'Player1 Venceu!!'; break;
            case 'papel' :  fraseWin = 'Empate!!'; break;
            case 'tesoura' :  fraseWin = 'Player2 Venceu!!'; break;
            }
        }
            if (p1 === 'tesoura') {
            switch(p2) {
            case 'pedra' :  fraseWin = 'Player2 Venceu!!'; break;
            case 'papel' :  fraseWin = 'Player1 Venceu!!'; break;
            case 'tesoura' :  fraseWin = 'Empate!!'; break;
            }
    }
    this.player1.pronto = false
    this.player2.pronto = false
    return this.fraseWin = fraseWin
        }
        }
}

</script>
<style >
    
</style>