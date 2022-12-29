import React from "react";
import "../../css/gradient.css";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Header from "../Header";

export default function Example() {
  return (
   <>
   <Header/>
    <div className="wrapper ">
      <div className="relative h-screen overflow-hidden">
        <div className="relative h-full">
        <svg
          className="absolute transform text-white mt-64"
          fill="currentColor"
          viewBox="0 0 100 70"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="100,0 100,0 100,100 -50,30" />
        </svg>
      </div>
    </div>
    </div>
   </>
  );
}
