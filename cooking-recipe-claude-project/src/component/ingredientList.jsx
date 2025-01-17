function IngredientList(prop) {
  return (
    <ul className="user-ouput">
      {prop.ingredient.map((item, index) => (
          <li key={index}>
            <div>
              <span>&bull;</span>
              {item}
            </div>
            <button onClick={() => prop.deleteItem(index)}>x</button> 
          </li>
        )
      )}
    </ul>
  )
}

export default IngredientList;