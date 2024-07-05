import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center px-16 py-8 w-full text-center bg-slate-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[887px]">
          <div className="text-6xl font-semibold text-gray-800 leading-[76px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Pellentesque suscipit fringilla libero eu.
          </div>
          <div className="flex gap-2 justify-center self-center px-8 py-3.5 mt-8 text-base font-medium leading-6 text-white bg-green-500 rounded max-md:px-5">
            <div>Get a Demo</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3094121a3aa0e2891f5662de15d095daa3541ec9833a731c7defb352a332464?"
              className="shrink-0 my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-16 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1110px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <div className="flex gap-2.5 pr-20 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d55a773763833d64462c8a3dcdc6b7703a49c67b25d55c034282e91f9756eccf?"
                    className="shrink-0 aspect-[1.43] w-[43px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c42506fb918aeeea1ef906eee0d51fd32012956b9a18b75b8f535c82dd29de?"
                    className="shrink-0 my-auto max-w-full aspect-[5.26] fill-white w-[138px]"
                  />
                </div>
                <div className="mt-10 text-sm leading-5 text-slate-100">
                  Copyright © 2020 Nexcent ltd.
                </div>
                <div className="mt-2 text-sm leading-5 text-slate-100">
                  All rights reserved
                </div>
                <div className="flex gap-4 pr-20 mt-10 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/98011fa7b6954b38308ac43b77bed6671caff34918de459957ce80f3efc56180?"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c6c258905673ae11392618a6790b21163a2915c34073a534cb62ad5074a0c5?"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/918f0713b545abd86ca478c16ba5246d9f6d11b1c6a754deab189831102a7a6e?"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7b22d30d1243051bb008c93f600436e6fa895ad14f6cd9d77c46259d2d84d3a?"
                    className="shrink-0 w-8 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-slate-100 max-md:mt-8">
                      <div className="text-xl font-semibold leading-7 text-white">
                        Company
                      </div>
                      <div className="mt-6">About us</div>
                      <div className="mt-3">Blog</div>
                      <div className="mt-3">Contact us</div>
                      <div className="mt-3">Pricing</div>
                      <div className="mt-3">Testimonials</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm leading-5 text-slate-100 max-md:mt-8">
                      <div className="text-xl font-semibold leading-7 text-white">
                        Support
                      </div>
                      <div className="mt-6">Help center</div>
                      <div className="mt-3">Terms of service</div>
                      <div className="mt-3">Legal</div>
                      <div className="mt-3">Privacy policy</div>
                      <div className="mt-3">Status</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-8">
                      <div className="text-xl font-semibold leading-7 text-white">
                        Stay up to date
                      </div>
                      <div className="flex gap-5 px-3 py-3 mt-6 text-sm leading-5 text-gray-300 bg-white rounded-lg">
                        <div className="flex-auto my-auto">
                          Your email address
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d664701a0916311185efd52daff70a8d8322a811a089a7b1854e692785ef0f81?"
                          className="shrink-0 aspect-square w-[18px]"
                        />
                      </div>
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