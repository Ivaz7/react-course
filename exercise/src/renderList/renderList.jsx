import PropTypes from 'prop-types';
import style from './renderList.module.scss';

function RenderList({ arrayProp = [{ id: 0, name: "Nothing", calories: 0 }] }) {
  const listItems = arrayProp.map((Food, index) => (
    <li key={Food.id || index + 1}>
      <p>Food: {Food.name || "Nothing"}</p>
      <p>Calories: {Food.calories || 0}</p>
    </li>
  ));

  return <ul className={style.ul}>{listItems}</ul>;
}

RenderList.propTypes = {
  arrayProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RenderList;
