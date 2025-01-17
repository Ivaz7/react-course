import PropTypes from 'prop-types';

function Component(props) {
  return (
    <>
      <ul className={props.id}>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.student ? "Yes" : "No"}</li>
      </ul>
    </>
  ) 
}

Component.propTypes = {
  id: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired, 
  student: PropTypes.bool.isRequired,
};

Component.defaultProps = {
  id: "0",
  name: "Guest",
  age: 0,
  student: false
}

export default Component