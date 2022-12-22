import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Incentives from "./Incentives";
import Planes from "./Planes";
 
export default function Testimoniales() {
  const data = [
    {
      label: "Associate",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Professional",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
 
    {
      label: "Enterprise",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Complementos",
      value: "svelt",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`,
    },

  ];
 
  return (
    <div className="bg-[#f1f1f1] ">
    <Tabs id="custom-animation" value="html" className="mx-2">
      <TabsHeader className="my-2 bg-[#f1f1f1] pt-8">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="mx-5">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
      className="my-3 "
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <Planes/>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>

  );
}