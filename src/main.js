import Navigo from "navigo";
import homePage from "./page/home";

import DetailPage from "./page/detall";
import table from "./page/table";
import dangnhap from "./page/dangnhap";
import dangki from "./page/dangki";
import dashboard from "./page/admin/dashboard";
import edit from "./page/admin/edit";
import add from "./page/admin/add";

const router = new Navigo("/", { linksSelector: "a" });

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
    "/signup": () => {
        print(dangki.render());
    },
    "/admin/dashboard": () => {
        print(dashboard.render());
    },
    "/admin/add": () => {
        print(add.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/edit/:id": ({ data }) => {
        const { id } = data;
        print(edit.render(id));
    },
});

router.resolve();
