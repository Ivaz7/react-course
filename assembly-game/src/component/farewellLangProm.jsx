import { language } from "./languageSource";

export default function farewellLang(wrongGuessedArray) {
  const farewellText = [
    "Adios,", 
    "R.I.P.,", 
    "Farewell",
    "Gone but not forgotten,", 
    "Parting ways,", 
    "Fading but not forgotten,", 
    "Goodbye,", 
    "Until we meet again,", 
    "See you later,", 
    "Take care,", 
    "So long,", 
    "Wishing you well,", 
  ];  

  const indexLang = wrongGuessedArray.length - 1;

  return (
    `${farewellText[indexLang]} ${language[indexLang].langProgram} 😭`
  )
}