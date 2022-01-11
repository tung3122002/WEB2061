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
          <img class="hover:scale-110 truncate transition ease-in-out delay-75" src="${item.img}" alt="">
        </div>
        <div class="tintuc-text text-[#ad3f00] font-bold my-[10px] hover:text-[#00467F]">
          <p>Sinh viên FPT Polytechnic giành
            Quán quân “FPTHackathon 2018”</p>
        </div>
        <div class="tintuc-text2 text-[12px] hover:text-[#00467F]">
          <p>FPT Edu Hackathon là cuộc thi tổ chức bởi Tổ 
            chức Giáo dục FPT (FPT Education) dành cho 
            sinh viên Công nghệ thông tin theo mô hình 
            Hackathon nổi tiếng của thế giới.</p>
        </div>
      </div>
        `).join("")}
      
        
      </div>
    </div>
        
        `;
    },
};
export default News;
