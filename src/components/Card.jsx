import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"



function Card({ data, reference }) {
    return (


        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragTransition={{ bounceStiffness: 100, bounceDamping: 1 }} className='card flex-shrink-0 relative w-[190px] h-[250px] rounded-[30px] bg-zinc-900/90 text-white p-5 overflow-hidden '>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>
                <form>
                    <input type='text' className='text-white w-40 h-5 py-2 px-4 mr-7 bg-zinc-900/90 border-yellow-50 border-solid relative right-1'></input>
                </form>
            </p>

            <div className='footer absolute bottom-0 w-full left-0 '>
                <div className='text-sm flex items-center justify-between mb-3 px-8 py-3'>
                    <h6>{data.filesize}</h6>

                    <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                        {data.close ? <IoIosClose size=".8em" color='#000' /> : <MdOutlineFileDownload size=".8em" color='#000' />}


                    </span>

                </div>
                {
                    data.tag.isOpen && (<div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-xs font-semibold'>{data.tag.tagTile}</h3>
                    </div>)}

            </div>



        </motion.div>


    )
}

export default Card
