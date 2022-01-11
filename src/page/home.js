import banner from "../components/banner";
import News from "../components/new";

const homePage = {
    render() {
        return `
     
         ${banner.render()}
         ${News.render()}
        
        `;
    },
};
export default homePage;
