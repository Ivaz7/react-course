function LanguageElems(prop) {
  const renderLang = prop.lang.map((arr, index) => {
    const isLostLang = index < prop.wrongGuessedArray.length

    return (
      <div className={`${isLostLang ? "lostLang" : ""} language py-2 px-3 rounded`} 
      style={{
        backgroundColor: `${arr.bgColor}`, 
        color: `${arr.color}`
      }} key={index}>
        {arr.langProgram}
      </div>
  )});

  return (
    <div className='d-flex flex-row m-5 gap-2'>
      {renderLang}
    </div>
  )
}

export default LanguageElems;
