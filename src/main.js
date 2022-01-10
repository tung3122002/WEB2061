// import "./style.css";
// eslint-disable-next-line import/extensions
// import menu from "./data.js";

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
import Navigo from "navigo";
// import menu from "./data";

// const showmenu = () => {
//     const menuElement = document.querySelector("#menu1");
//     if (menuElement) {
//         const kq = menu.map((item) => `
//         <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white mx-3"><a class="  hover:text-white"
//         href="">${item}</a></li>

//         `).join("");
//         menuElement.innerHTML = kq;
//     }
// };
// showmenu();

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // Nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => console.log("home page"),
    "/about": () => console.log("About page"),
    "/product": () => console.log("Product Page"),
});
router.notFound(() => console.log("not found page"));

router.resolve();
