import banner from "../components/banner";
import News from "../components/new";
import header from "../components/header";
import Footer from "../components/footer";

const homePage = {
    render() {
        return `
       
        ${header.render()}
         ${banner.render()}
         ${News.render()}
      
         ${Footer.render()}
        `;
    },
};
export default homePage;
