import data from "../data";
import Header from "../components/header";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);

        return `
        
        ${Header.render()}
        <div class="box-tintuc  w-[312px] h-[359px] border-2 p-[25px] border-rose-600 my-12">
        <div class="img-tintuc max-w-[310px] truncate ">
          <img class="hover:scale-110 truncate transition ease-in-out delay-75" src="${result.img}"></ alt="">
        </div>
        <div class="tintuc-text text-[#ad3f00] font-bold my-[10px] hover:text-[#00467F]">
        <a href="/product/${result.id}"><p>${result.title}</p></a>
        </div>
        <div class="tintuc-text2 text-[12px] hover:text-[#00467F]">
          <p>${result.desc}</p>
        </div>
      </div>
        `;
    },
};
export default DetailPage;
