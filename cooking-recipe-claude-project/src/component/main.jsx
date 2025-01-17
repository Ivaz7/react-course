import { useRef } from "react";
import { useEffect, useState } from "react";
import IngredientForm from "./ingredientForm";
import IngredientList from "./ingredientList";
import RecipeButton from "./recipeButton";

function Main() {
  const [ingredient, setIngredient] = useState([]);
  const [render, setRender] = useState(null);
  let inputReff = useRef(null);
  let scrollDown = useRef(null);

  useEffect(() => {
    inputReff.current.focus();
  }, [])

  useEffect(() => {
    if (render !== "" && render !== null && scrollDown.current !== null) {
      scrollDown.current.scrollIntoView({behavior: "smooth"});
    }
  }, [render])

  function deleteItem(index) {
    setIngredient(prev => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget)
    const newIngredient = dataForm.get("ingredient").trim();

    if (newIngredient !== "" && !ingredient.includes(newIngredient)) {
      setIngredient(prev => [...prev, newIngredient])
      inputReff.current.value = "";
    }

    inputReff.current.focus();
  }

  return (
    <>
      <main>
        <IngredientForm onSubmit={handleSubmit} inputReff={inputReff}/>
        <div className="listItem">
          {ingredient.length > 0 && (<h2>Ingredients on hand:</h2>)}
          {ingredient.length > 0 && ingredient.length < 7 && (<h2>At least 7 ingredients</h2>)}
          <IngredientList ingredient={ingredient} deleteItem={deleteItem} />
        </div>
        {ingredient.length >= 7 && <RecipeButton scrollDown={scrollDown} ingredient={ingredient} setRender={setRender} />}
        {render}
      </main>
    </>
  );
}

export default Main;