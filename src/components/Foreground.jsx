import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data = [
        
        {
            desc: " Hi my name is Nilabja.",
            filesize: "21MB",
            close: true,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "blue" },
        },
        {
            desc: "This app is made with React.js.",
            filesize: "9mb",
            close: true,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "Green" },
        },
        {
            desc: " loreOfficia nisi ea deserunt incididunt ut proident fugiat nisi.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "Green" },
        },
        {
            desc: " Date-1/1/2024.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "Blue" },
        },
    ];
  return (
    <>
          <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
          
           
              {data.map((item, index) => (
                  <Card data={item} reference={ref} />
                  
          ))}
          
          
          </div>      
    </>
  )
}

export default Foreground
