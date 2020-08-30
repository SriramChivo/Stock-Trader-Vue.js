import homeRoute from "./components/Homepage/Home.vue";
import PortfolioRoute from "./components/Portfolio/portfolio.vue";
import stocksRoute from "./components/stocks/stocks.vue";
export const routes = [
    {
        path: "", component: homeRoute
    },
    {
        path: "/portfolio", component: PortfolioRoute
    },
    {
        path: "/stocks", component: stocksRoute
    },
];