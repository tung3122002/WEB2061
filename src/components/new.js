import news from "../data";

const News = {
    render() {
        return /* html */ `
        <div class="tintuc-conten font-bold my-5">
          <h2>TIN TỨC HỌC TẬP</h2>

        </div>
        <div class="tintuc-product grid grid-cols-3 gap-4">
        ${news.map((item) => `
        <div class="box-tintuc  w-[312px] h-[359px] border-2 p-[25px] border-rose-600 ">
        <div class="img-tintuc max-w-[310px] truncate ">
        <a href="/product/${item.id}"><p><img class="hover:scale-110 truncate transition ease-in-out delay-75" src="${item.img}" alt="">”</p></a>
          
        </div>
        <div class="tintuc-text text-[#ad3f00] font-bold my-[10px] hover:text-[#00467F]">
        <a href="/product/${item.id}"><p>${item.title}”</p></a>
        </div>
        <div class="tintuc-text2 text-[12px] hover:text-[#00467F]">
          <p>${item.desc}</p>
        </div>
      </div>
        `).join("")}
      
        
      </div>
    </div>
        
        `;
    },
};
export default News;
