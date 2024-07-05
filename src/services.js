import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 max-md:px-5">
      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f2ec024569836fecbb3f75de44a4ad2fba72522c5220e350dccce6923791626?"
              className="grow w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pr-16 my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-10 text-neutral-600 max-md:max-w-full">
                The unseen of spending three years at Pixelgrade
              </div>
              <div className="mt-4 text-sm leading-5 text-neutral-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
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