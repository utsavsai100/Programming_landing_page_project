import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-6xl max-md:max-w-full">
        <div className="text-4xl font-semibold leading-10 text-center text-neutral-600 max-md:max-w-full">
          Our Clients
        </div>
        <div className="mt-2 text-base leading-6 text-center text-neutral-500 max-md:max-w-full">
          We have been working with some Fortune 500+ clients
        </div>
        <div className="flex gap-5 justify-between items-start self-stretch pt-6 mt-4 max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b481f140385a542009e322ee920866269b0ac07e5334c3da1e792d6e56c76897?"
            className="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/135478fac295a0c553325304f5e0c82d654667c7e39372ffb51cd7706e43cfac?"
            className="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e040da635da9306555bad05e219d9b105e26c37b232b5044ec615d000e0604fe?"
            className="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d5bffa9822bbacbf7e7ca257374c0c0de25e17f763e6e810d70c16d80199fd?"
            className="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66092faee0820901972d4ef83903b8cb2c0c7360d749c5ffa02d2d469227d179?"
            className="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dcadea327a319090715febb05eb8421d494af557b77669c4d178a6615393952?"
            className="shrink-0 w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c4c44bdaa70b1767c3cb444202be4f15047075d1d000008e5af5bd09372967?"
            className="shrink-0 w-12 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}


export default MyComponent;