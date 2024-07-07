import * as React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center px-16 py-6 bg-slate-100 dark:bg-gray-800 max-md:px-5">
      <div className="flex gap-5 justify-between items-center w-full max-w-[1215px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/918088397a3263682484bf3f05671e7282644157e40536a305bc8f1909ac5a30?"
            className="shrink-0 aspect-[1.45] w-[35px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e032e9a0a1deb74a3719f292846278c263a88d25b0ef14bd72dd44ce917bc5?"
            className="shrink-0 my-auto max-w-full aspect-[5.56] fill-gray-800 dark:fill-gray-200 w-[111px]"
          />
        </div>
        <div className="flex gap-5 justify-center self-stretch my-auto text-base leading-6 whitespace-nowrap text-zinc-900 dark:text-zinc-200 max-md:flex-wrap max-md:max-w-full">
          <div className="font-medium">Home</div>
          <div>Service</div>
          <div>Feature</div>
          <div>Product</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>
        <div className="flex gap-3.5 self-stretch text-sm font-medium leading-5 text-center">
          <div className="justify-center px-5 py-2.5 text-green-500 whitespace-nowrap rounded-md bg-slate-100 dark:bg-gray-700">
            Login
          </div>
          <div className="justify-center px-5 py-2.5 text-white bg-green-500 rounded-md">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
