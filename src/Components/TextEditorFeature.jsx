
const TextEditorFeature = ({children}) => {
   return (
      <>
         <div className="p-2 mx-auto max-w-6xl flex gap-2  rounded-md shadow-sm border-t items-center border-t-neutral-200 border-r-neutral-200 flex-wrap"
            style={
               {
                  scrollbarWidth:"none",
                  scrollBehavior:"smooth"
               }
            }
         >
            {children}
         </div>
      </>
   )
}

export default TextEditorFeature
