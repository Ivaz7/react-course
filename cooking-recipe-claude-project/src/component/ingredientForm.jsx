function IngredientForm(prop) {
  return (
    <form onSubmit={prop.onSubmit}>
      <div className='user-input'>
        <input name="ingredient" ref={prop.inputReff} type="text" placeholder='e.g. Egg' />
        <button type="submit">+ Add Ingredient</button>
      </div>
    </form>
  )
}

export default IngredientForm;