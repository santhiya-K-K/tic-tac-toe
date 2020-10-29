import React from "react"
import { FaRegCircle,FaTimes,FaPencilAlt } from "react-icons/fa";
const Icons=(props)=>{
     switch(props.name){
            case "circle":
                return <FaRegCircle className='icon'/>
            case "cross":
                return <FaTimes className='icon'/>
            default:
                 return <FaPencilAlt className='icon'/>
        }
};
export default Icons;