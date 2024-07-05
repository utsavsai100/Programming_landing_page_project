import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col pb-20">
      <div className="self-center text-4xl font-semibold leading-10 text-center text-neutral-600 w-[542px] max-md:max-w-full">
        Manage your entire community in a single system
      </div>
      <div className="mt-2 w-full text-base leading-6 text-center text-neutral-500 max-md:max-w-full">
        Who is Nextcent suitable for?
      </div>
      <div className="justify-between px-20 mt-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-4 py-6 my-auto w-full text-center bg-white rounded-lg shadow-sm max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee200b345a09767d1a7b0bc873133cdf68b6fe3ac4cc5b7f0fae00f9ce7dbc94?"
                className="self-center aspect-[1.16] w-[65px]"
              />
              <div className="mt-4 text-3xl font-bold leading-9 text-neutral-600">
                Membership Organisations
              </div>
              <div className="mt-2 text-sm leading-5 text-neutral-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 py-6 w-full text-center bg-white rounded-lg shadow-sm max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa334ae778df9c62ef6e21d016b0c1a39f17e11f7eec571f16da72732387fadc?"
                className="self-center aspect-[1.16] w-[65px]"
              />
              <div className="mt-4 text-3xl font-bold leading-9 text-neutral-600">
                National Associations
              </div>
              <div className="mt-2 text-sm leading-5 text-neutral-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-4 py-6 my-auto w-full text-center bg-white rounded-lg shadow-sm max-md:mt-10">
              <div className="flex flex-col px-5 text-3xl font-bold leading-9 text-neutral-600">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b769e9ec4749cd6f9c3871f67d842624240abbd336e919ff19ec22e2392039b6?"
                  className="self-center aspect-[1.16] w-[65px]"
                />
                <div className="mt-4">Clubs And Groups</div>
              </div>
              <div className="mt-2 text-sm leading-5 text-neutral-500">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyComponent