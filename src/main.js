import Navigo from "navigo";
import homePage from "./page/home";
import Footer from "./components/footer";
import Header from "./components/header";
import DetailPage from "./page/detall";
import table from "./page/table";
import dangnhap from "./page/dangnhap";

const router = new Navigo("/", { linksSelector: "a" });
document.querySelector("#header").innerHTML = Header.render();
document.querySelector("#footer").innerHTML = Footer.render();
const print = (content) => {
    document.querySelector("#main").innerHTML = content;
};
router.on({
    "/": () => {
        print(homePage.render());
    },
    "/table": () => {
        print(table.render());
    },
    "/signin": () => {
        print(dangnhap.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
});

router.resolve();
