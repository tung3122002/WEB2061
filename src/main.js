// import "./style.css";
// eslint-disable-next-line import/extensions
// import menu from "./data.js";

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
import Navigo from "navigo";
import menu from "./data.js";

const showmenu = () => {
    const menuElement = document.querySelector("#menu1");
    if (menuElement) {
        const kq = menu.map((item) => `
        <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] px-5"><a class="  hover:text-white"
        href="">${item}</a></li>
        
        `).join("");
        menuElement.innerHTML = kq;
    }
};
showmenu();

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // nếu  user truy cập vào đường dẫn  thì sẽ làm j đó
    "/": () => console.log("home page"),
    "/about": () => console.log("about page"),
});
router.resolve();
