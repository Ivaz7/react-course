import { useState } from "react";
import Pad from "./pad";
import { itemInfo } from "./padInfo";

export default function PadButton() {
  const [item, setItem] = useState(itemInfo);

  function toggle(id) {
    setItem(prev => prev.map(item => {
      return item.id === id ? {...item, on: !item.on} : item;
    }))
  }

  return (
    <>
      <div>
        <h1>Click These Pads!</h1>
        {item.map(item => (
          <Pad toggle={toggle} id={item.id} key={item.id} color={item.color} on={item.on}/>
        ))}
      </div>
    </>
  )
}