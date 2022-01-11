const Header = {
    render() {
        return `<div class="logo bg-[#272f54] py-5">
        <a href="#">
           <img src="http://localhost:3001/img/logo.png" alt="" class="mx-auto w-[200px] ">
        </a>

      </div>
      <div class="menu flex flex-nowrap list-none h-[50px] bg-[#C87904]">
        <div id="menu1" class="menu1 flex flex-nowrap list-none h-[50px] bg-[#C87904">
          <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] px-5"><a class="  hover:text-white"
              href="">menu2</a></li>
          <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] px-5"><a class="  hover:text-white"
              href="">menu2</a></li>
          <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] px-5"><a class="  hover:text-white"
              href="">menu2</a></li>
          <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] px-5"><a class="  hover:text-white"
              href="">menu2</a></li>
          <li class="leading-[50px] hover:bg-[#272f54]  hover:text-white ml-[20px] px-5"><a class="  hover:text-white"
              href="">menu2</a></li>

        </div>
        <form class="ml-[110px] p-[15px]" action="">
          <input type="text" name="" id="" placeholder="tìm kiếm">
          <button class="bg-[#263055] px-[20px] text-white" type="submit">Tìm kiếm</button>
        </form>
      </div>`;
    },
};
export default Header;
