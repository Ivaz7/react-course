import { useState } from "react";

function BirthDay() {
  const [birth, setBirth] = useState({
                                      month: "1",
                                      day: "1",
                                      year: "2000"
                                    })

  function handleChangeMonth(e) {
    setBirth(prevBirth => ({...prevBirth, month: e.target.value}))
  }
  function handleChangeDay(e) {
    setBirth(prevBirth => ({...prevBirth, day: e.target.value}))
  }
  function handleChangeYear(e) {
    setBirth(prevBirth => ({...prevBirth, year: e.target.value}))
  }

  return (
    <div style={{margin: "1rem"}}>
      <p>Your Birth Day is: {birth.month}/{birth.day}/{birth.year}</p>

      <input min="1" max="12" type="number" value={birth.month}  onChange={handleChangeMonth} />
      <input min="1" max="31" type="number" value={birth.day}  onChange={handleChangeDay} />
      <input min="2000" max="2024" type="number" value={birth.year} onChange={handleChangeYear} />
    </div>
  );
}

export default BirthDay;