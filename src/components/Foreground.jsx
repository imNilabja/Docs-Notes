import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data = [
        
        {
            desc: " loreOfficia nisi ea deserunt incididunt ut proident fugiat nisi.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "blue" },
        },
        {
            desc: " loreOfficia nisi ea deserunt incididunt ut proident fugiat nisi.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "Green" },
        },
        {
            desc: " loreOfficia nisi ea deserunt incididunt ut proident fugiat nisi.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTile: "Download Now", tagColor: "Green" },
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