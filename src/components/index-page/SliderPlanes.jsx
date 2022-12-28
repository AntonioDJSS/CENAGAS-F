import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Absolute from "./cardPlanes/Absolute";
import Associate from "./cardPlanes/Associate";
import Business from "./cardPlanes/Business";
import Professional from "./cardPlanes/Professional";

export default function SliderPlanes() {
  return (
    <div className="bg-[#f1f1f1] ">
      <div className="flex justify-center items-center ">
        <h1 className="pt-8 text-xl">
          Planes y precios de las aplicaciones de Creative Cloud y mucho más.
        </h1>
      </div>
      <div className="mt-6 border border-white"></div>
      <Tabs id="custom-animation" value="html" className="mx-2">
        <div>
          <TabsHeader className="my-2 bg-[#f1f1f1] pt-8">
            <Tab value="associate" className="mx-5">
              Associate
            </Tab>
            <Tab value="professional" className="mx-5">
              Professional
            </Tab>
            <Tab value="absolute" className="mx-5">
              Absolute
            </Tab>
            <Tab value="business" className="mx-5">
              Business
            </Tab>
          </TabsHeader>
          <TabsBody
            className="my-3 "
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value="associate">
              <Associate />
            </TabPanel>
            <TabPanel value="professional">
              <Professional />
            </TabPanel>
            <TabPanel value="absolute">
              <Absolute />
            </TabPanel>
            <TabPanel value="business">
              <Business />
            </TabPanel>
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
}
