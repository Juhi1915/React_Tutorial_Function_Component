import { useState } from "react";

export default function Todo(){
    const[data,setData] = useState("");
    const[list,setList] = useState([]);
    const handleSubmit = (e) =>{
        setList((oldData) => [...oldData,data])
        setData("");//for Empty the textfield after click on add button
        e.preventDefault();
    }
    const handleDelete = (id) =>{
        setList((oldData) =>oldData.filter((elm,index) => index !== id) )
    }
    return(
        <div>
            <form onSubmit ={(e) => handleSubmit(e)}>
                <label>Enter Text : </label>
                <input
                value={data}
                onChange ={e=>setData(e.target.value)}
                />
                   <input type="submit" value="Save" />
            </form>
            <br/>
            <div>
                {list.map((item,id) =>(
                    <div key={id}>
                         <b>{item} </b>
                         <button onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                ))}
                </div>
        </div>
    )
}