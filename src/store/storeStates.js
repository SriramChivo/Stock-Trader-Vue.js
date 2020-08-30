import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        funds: 1200,
        stockPortfolio: []
    },
    getters: {
        getFunds: (state) => {
            return (state.funds)
        }
    },
    mutations: {
        BuyStocks: (state, payload) => {
            var flag = true;
            console.log(state.stockPortfolio.length);
            if (state.stockPortfolio.length != 0) {
                console.log("from If");
                state.stockPortfolio.forEach(function (Indorder) {
                    if (Indorder.id == payload.id) {
                        if (!state.funds <= state.funds - payload.quantity * payload.price) {
                            Indorder.quantity = parseInt(Indorder.quantity) + parseInt(payload.quantity);
                            state.funds = state.funds - payload.quantity * payload.price
                            flag = false;
                        }
                        else {
                            alert("Not enough funds to buy this much quantity");
                        }
                    }
                    else {
                        ''
                    }
                });
                if (flag) {
                    if (!state.funds <= state.funds - payload.quantity * payload.price) {
                        state.stockPortfolio.push(payload);
                        state.funds = state.funds - payload.quantity * payload.price
                    }
                    else {
                        alert("Not enough funds to buy this much quantity");
                    }
                }
            }
            else {
                console.log("from else");
                if (!state.funds <= state.funds - payload.quantity * payload.price) {
                    state.stockPortfolio.push(payload);
                    state.funds = state.funds - payload.quantity * payload.price
                }
                else {
                    alert("Not enough funds to buy this much quantity");
                }
            }
        },
        randomStocks: (state) => {
            state.stockPortfolio.forEach((items) => {
                var maximum = items.price + 10;
                var minimum = items.price - 10;
                var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                items.price = randomnumber;
            })
        },
        stockSell: (state, payload) => {
            // console.log(payload);
            var counter = 0;
            state.stockPortfolio.forEach((sell) => {
                console.log(sell.name);
                console.log(sell.id);
                if (sell.id == payload.id) {
                    console.log(sell.quantity);
                    console.log(payload.quantity);
                    sell.quantity -= payload.quantity
                    state.funds += payload.quantity * payload.price
                    console.log(sell.quantity);
                    if (sell.quantity == 0) {
                        state.stockPortfolio.splice(counter, 1);
                    }
                    else {
                        console.log("looks good");
                    }
                }
                counter++;
            })
        }
    },
    actions: {
        portfolioActions:
            (context, order) => {
                context.commit('BuyStocks', order)
            },
        randomStockAction: (context) => {
            context.commit("randomStocks")
        },
        sellActions:
            (context, order) => {
                context.commit('stockSell', order)
            },
    }
});

