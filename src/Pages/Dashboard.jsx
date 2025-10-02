import BoldButton from "../Components/Buttons/BoldButton"
import FontSelectButton from "../Components/Buttons/FontSelect"
import FontSizeButton from "../Components/Buttons/FontSizs"
import HrefButton from "../Components/Buttons/HrefButton"
import { ImageButton } from "../Components/Buttons/ImageButton"
import ItalicButton from "../Components/Buttons/ItalicButton"
import PickColorButton from "../Components/Buttons/PickColorButton"
import TextAlignButton from "../Components/Buttons/TextAlignButton"
import UnderlineButton from "../Components/Buttons/UnderlineButton"
import TextEditorFeature from "../Components/TextEditorFeature"

const Dashboard = () => {
   return (
      <>
         <div className="max-w-3xl mx-auto bg-gray-100  md:p-6">
            <TextEditorFeature>
               <FontSelectButton />
               <FontSizeButton />
               <BoldButton />
               <ItalicButton />
               <UnderlineButton />
               <PickColorButton />
               <TextAlignButton />
               <HrefButton />
               <ImageButton />
            </TextEditorFeature>
            

         </div>      
      </>
   )
}

export default Dashboard
