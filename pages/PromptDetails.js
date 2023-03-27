import React from "react";
import GenderRadioButtons from "../src/Component/Radio button/radio";
import FullWidthTextField from "../src/Component/input/input";
import CheckboxLabels from "@/src/Component/checkbox/checkbox";


// const renderComponent = (item) => {
//   if (item.elementType === "Radio") {
//     return <GenderRadioButtons />;
//   } else if (item.elementType === "Checkbox") {
//     return <CheckboxLabels />;
//   } else if (item.elementType === "InputText") {
//     return <FullWidthTextField />;
//   }
//   return null;
// };

const elements = [
  { type: 'gender', label: 'Gender' },
  // { type: 'text', label: 'Full Name' },
  // { type: 'checkbox', label: 'Agree to Terms' },
  // { type: 'text', label: 'Full Name' },
];


const PromptDetails = () => {
  return (
    <form>
    {elements.map((element) => {
      if (element.type === 'gender') {
        return <GenderRadioButtons key={element.label} label={element.label} />;
      } else if (element.type === 'text') {
        return <FullWidthTextField key={element.label} label={element.label} />;
      } else if (element.type === 'checkbox') {
        return <CheckboxLabels key={element.label} label={element.label} />;
      }
      return null;
    })}
  </form>
  );
};
export default PromptDetails;


const data = [
  {
    elementType: "Radio",
    lable: "gender",
    value: ["male", "female"],
  },
  {
    elementType: "Checkbox",
    lable: "Hobbies",
    value: ["cricket", "football"],
  },
  {
    elementType: "Checkbox",
    lable: "abc",
    value: ["sdsd", "foosdtball", "dsd", "sdsd"],
  },
  {
    elementType: "InputText",
    lable: "Name",
    value: "",
  },
  {
    elementType: "InputText",
    lable: "Address",
    value: "",
  },
  {
    elementType: "Radio",
    lable: "gender",
    value: ["male", "female"],
  },
];
