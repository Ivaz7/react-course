import { useState } from "react";

function FormDataComp() {
  const [data, setData] = useState([]);

  const dataList = data.map((data, index) => {
    return (
      <ul key={index}>
        <li>
          Email: {data.email} <br />
          Password: {data.password} <br />
          Status: {data.statusMarried} <br />
          Achievement: {data.finalAchievement[0] ? data.finalAchievement[0] : ""} {data.finalAchievement[1] ? "," + data.finalAchievement[1] : ""}
        </li>
      </ul>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    const datas = new FormData(e.currentTarget);

    const email = datas.get("email").trim();
    const password = datas.get("password").trim();
    const passwordConfirmation = datas.get("passwordConfirmation").trim();
    const statusMarried = datas.get("statusMarried") || "Unknown"; // Default to Unknown
    const achievement = datas.getAll("Achievement");
    const finalAchievement = achievement.length > 0 ? achievement : ["Unknown"];

    if (password !== passwordConfirmation) {
      alert("Your password is not the same");
      return;
    }

    setData(prev => [
      ...prev,
      {
        email,
        password,
        statusMarried,
        finalAchievement
      },
    ]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="email@address.com" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="*******" />

        <label htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input type="password" id="passwordConfirmation" name="passwordConfirmation" placeholder="*******" />

        <fieldset>
          <legend>Status Married</legend>
          <label>
            <input type="radio" name="statusMarried" value="Married" />
            Married
          </label>
          <label>
            <input type="radio" name="statusMarried" value="Single" />
            Single
          </label>
          <label>
            <input type="radio" name="statusMarried" value="Unknown" />
            Don&apos;t Wish to Answer
          </label>
        </fieldset>

        <fieldset>
          <legend>Achievement</legend>
          <label>
            <input type="checkbox" name="Achievement" value="schoolAchiev" />
            School Achievement
          </label>
          <label>
            <input type="checkbox" name="Achievement" value="companyAchiev" />
            Company Achievement 
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <div>{dataList}</div>
    </>
  );
}

export default FormDataComp;
