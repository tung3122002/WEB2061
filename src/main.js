import Navigo from "navigo";
import homePage from "./page/home";
import Footer from "./components/footer";
import Header from "./components/header";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#main").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(homePage.render());
    },

});

router.resolve();
