import Main from './Starter/listFood.jsx';
import Card from './Card/card.jsx';
import Button from './button/button.jsx';
import Students from './students/stundents.jsx';
import ToggleBtn from './toggleButton/toggleButton.jsx';
import RenderList from './renderList/renderList.jsx';
import { fruits } from './renderList/fruits.jsx';
import { vegetables } from './renderList/vegetable.jsx';
import ImageToggle from './imageToggle/imageToggle.jsx';
import IncremenetAge from './inrementAge/incrementAge.jsx';
import LiveTyping from './liveType/liveType.jsx';
import SelectionPayment from './selectionPayment/selectionPayment.jsx';
import ColorPicker from './colorPicker/colorPicker.jsx';
import BirthDay from './manualBirthDayInput/BirthDay.jsx';
import AddList from './addList/addList.jsx';
import EssayWriting from './essayList/essayList.jsx';
import WidthHeight from './widthHeightDetect/widthHeight.jsx';
import DigitalClock from './digitalClock/digitalClock.jsx';
import ComponentA from './useContext/compenentA.jsx';
import Stopwatch from './stopwatch/stopwatch.jsx';
import FormDataComp from './formData/formData.jsx';
import PadButton from './padButton/padButton.jsx';

function App() {
  return (
    <>
      <Main />
      <Card />
      <Button />
      <Students />
      <ToggleBtn />
      <RenderList arrayProp={fruits}/>
      <RenderList arrayProp={vegetables}/>
      <ImageToggle />
      <IncremenetAge />
      <LiveTyping />
      <SelectionPayment />
      <ColorPicker />
      <BirthDay />
      <AddList />
      <EssayWriting />
      <WidthHeight />
      <DigitalClock />
      <ComponentA />
      <Stopwatch />
      <FormDataComp />
      <PadButton />
    </>
  )
}

export default App
