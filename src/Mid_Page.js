import * as React from "react";

function MyComponent() {
    const linkStyles = "cursor-pointer";
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
        <div className="mt-4 w-full max-w-6xl max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-semibold text-green-500 leading-[76px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                  Lessons and insights{" "}
                  <span className="text-green-500">from 8 years</span>
                </div>
                <div className="mt-4 text-neutral-500 max-md:max-w-full">
                  Where to grow your business as a photographer: site or social
                  media?
                </div>
                <div className="justify-center self-start px-8 py-3.5 mt-8 font-medium text-center text-white whitespace-nowrap bg-green-500 rounded max-md:px-5">
                  Register
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213ad55754952ec6cc6147563fb6a909394b9487cc382d53afb34709bdb69e9?"
                className="grow w-full aspect-[0.96] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;


