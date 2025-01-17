import Component from './component.jsx';
import style from './students.module.scss';

export default function Students() {
  return (
    <section className={style.some}>
      <Component 
        id="1"
        name="Spongebob"
        age={27}
        student={true}
      />
      <Component 
        id="2"
        name="Patrick"
        age={30}
        student={false}
      /> 
      <Component 
        id="2"
      />
    </section>
  );
}