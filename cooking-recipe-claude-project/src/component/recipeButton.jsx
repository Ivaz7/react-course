import HuggingFaceFetch from "./APIpromt";

function RecipeButton(prop) {
  function RecipeRender(prop) {
    prop.setRender(<HuggingFaceFetch ingredient={prop.ingredient}/>)
  }

  return (
    <div ref={prop.scrollDown} className="recipe">            
      <div className="recipeGenerate">
        <div>
          <p>Ready for a recipe?</p>
          <p>Generate a recipe <br />from your list of ingredients</p>
        </div>
        <button onClick={() => RecipeRender(prop)}>Get Recipe</button>
      </div>
    </div>
  )
}

export default RecipeButton;