

export const TextArea =({content}) =>{
   return(
      <>
         <div className="max-w-4xl mx-auto p-2 rounded-sm ">
            <div className="bg-white min-h-screen shadow-md" contentEditable={true}>
               {content}
            </div>
         </div>
      </>
   )
}

