import BoldButton from "../Components/Buttons/BoldButton"
import FontSelectButton from "../Components/Buttons/FontSelect"
import FontSizeButton from "../Components/Buttons/FontSizs"
import ItalicButton from "../Components/Buttons/ItalicButton"
import PickColorButton from "../Components/Buttons/PickColorButton"
import TextAlignButton from "../Components/Buttons/TextAlignButton"
import UnderlineButton from "../Components/Buttons/UnderlineButton"
import TextEditorFeature from "../Components/TextEditorFeature"

const Dashboard = () => {
   return (
      <>
         <div className="max-w-7xl mx-auto bg-neutral-200 rounded-md p-6 mt-3">
            <TextEditorFeature>
               <FontSelectButton />
               <FontSizeButton />
               <BoldButton />
               <ItalicButton />
               <UnderlineButton />
               <PickColorButton />
               <TextAlignButton />
            </TextEditorFeature>

         </div>      
      </>
   )
}

export default Dashboard
