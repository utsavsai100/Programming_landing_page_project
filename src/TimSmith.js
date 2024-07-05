import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-8 bg-slate-100 max-md:px-5">
      <div className="w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="w-full shadow-lg aspect-square max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </div>
              <div className="mt-4 text-xl font-semibold leading-7 text-green-500 max-md:max-w-full">
                Tim Smith
              </div>
              <div className="mt-2 text-base leading-6 text-gray-400 max-md:max-w-full">
                British Dragon Boat Racing Association
              </div>
              <div className="flex gap-5 mt-8 max-md:flex-wrap">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8a14704909ba8e2ae8558b600a2f569b2ba11b86ed6ac62c4258b7586333bc?"
                    className="shrink-0 w-12 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a5cd51a284abe156573975f64f2b61aea6b89a08846affc289a9afcda82786?"
                    className="shrink-0 w-12 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe68c000f6769e9d1aa6351cf69aeb7aae350a01495c1ef18e84b1f7d9c2b57e?"
                    className="shrink-0 w-12 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c667203ea7adec5e9047448cd060f5fde305c0f7a0315b5f769b87f7b1a46587?"
                    className="shrink-0 w-12 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90836cc302921e3d03f5f013230bb45e08b9816770305c78be476abfde614257?"
                    className="shrink-0 w-12 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/58a0420f0653c275015e8cf103305fd1b23e5304fc131bd3eec18dbfd54aaf76?"
                    className="shrink-0 w-12 aspect-square"
                  />
                </div>
                <div className="flex flex-1 gap-2 p-2 my-auto text-xl font-semibold leading-7 text-green-500">
                  <div>Meet all customers</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/743e31d7d5bcb025cce63258206c17e4c81115a2257918c4a7f17c9bc0654850?"
                    className="shrink-0 my-auto aspect-[0.79] w-[19px]"
                  />
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