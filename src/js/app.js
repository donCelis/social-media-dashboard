import header from "./components/header";
import cards from "./components/cards";
import stats from "./components/stats";

const content = () => `
    ${header()}
    ${cards()}
    ${stats()}
`;

export default content;
