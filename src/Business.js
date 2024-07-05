import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-16 bg-slate-100 max-md:px-5">
      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-10 text-green-500 max-md:max-w-full">
                Helping a local{" "}
                <span className="text-green-500">business reinvent itself</span>
              </div>
              <div className="mt-2 text-base leading-6 text-zinc-900 max-md:max-w-full">
                We reached here with our hard work and dedication
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between whitespace-nowrap max-md:flex-wrap">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8c7e7ac6d05a684c8c89629c9774fa24658d7b3a4df86fac4f48921d52766a?"
                    className="shrink-0 my-auto w-12 aspect-square"
                  />
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold leading-9 text-neutral-600">
                      2,245,341
                    </div>
                    <div className="text-base leading-6 text-neutral-500">
                      Members
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b081c75d377203c89d017354ec51d8df2227b7ded6a709df5dd7a2c36bc88b7?"
                    className="shrink-0 my-auto w-12 aspect-square"
                  />
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold leading-9 text-neutral-600">
                      46,328
                    </div>
                    <div className="text-base leading-6 text-neutral-500">
                      Clubs
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-10 max-md:flex-wrap">
                <div className="flex gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b4ed6f6101ec71213f980ad4aa121f8c3d3097e5ae83780579749854a2b13c1?"
                    className="shrink-0 my-auto w-12 aspect-square"
                  />
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold leading-9 text-neutral-600">
                      828,867
                    </div>
                    <div className="text-base leading-6 text-neutral-500">
                      Event Bookings
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/722fbd87c1b2ca1f1b9dfcadf5d5e4bcfb0265069581864252df444bb8a7f7d8?"
                    className="shrink-0 my-auto w-12 aspect-square"
                  />
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold leading-9 text-neutral-600">
                      1,926,436
                    </div>
                    <div className="text-base leading-6 text-neutral-500">
                      Payments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyComponent