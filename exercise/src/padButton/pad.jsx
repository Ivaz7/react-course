import style from "./padStyle.module.scss";

export default function Pad(prop) {
  return (
    <>
      <button
        onClick={() => {prop.toggle(prop.id)}} className={prop.on ? style.on : style.off} id={prop.id} style={{backgroundColor: prop.color}}
      ></button>
    </>
  )
}