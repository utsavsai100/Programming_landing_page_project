import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 max-md:px-5">
      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dfea0786ceb75255ca1244bb649cba9b42054a6678b4a15497a749530d3dc5c?"
              className="grow w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pr-16 my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-10 text-neutral-600 max-md:max-w-full">
                How to design your site footer like we did
              </div>
              <div className="mt-4 text-sm leading-5 text-neutral-500 max-md:max-w-full">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </div>
              <div className="justify-center self-start px-8 py-3.5 mt-8 text-base font-medium leading-6 text-center text-white bg-green-500 rounded max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent