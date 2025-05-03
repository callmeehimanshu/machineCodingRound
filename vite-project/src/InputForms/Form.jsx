import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [familyname, setFamilyName] = useState('')

    const detail = {
        name: '',
        title: "",
    }
    const [details, setDetails] = useState(detail)
    const changeTitle = (e) => {
        // setDetails({ ...details, title: e.target.value }) both syntax is fine,but prev is prefferd.
        setDetails((prev)=>({...prev,title:e.target.value}))
    }

    const [store, setStore] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        setStore([...store, details])
        setDetails({ name: '', title: '' })
    }

    const [task, setTask] = useState({ item: '', desc: '' });
    const combinedInput = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: value,
        }));
        // setTask({...task,[name]:value})  ,output will be correct but wrong way of doing,use prev as above
    };
    return (
        <div>
            <input type="text" onChange={(e) => setFamilyName(e.target.value)} name='familyname' value={familyname} />
            //both ways are correct, above one preffered.
            {/* <input type="text" onChange={(e) =>{return(setFamilyName(e.target.value))}} name='familyname' value={familyname} /> */}

            <h3>family name:{familyname}</h3>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <p>Form submit</p>
                <input type="text" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
                <input type="text" onChange={(e) => changeTitle(e)} value={details.title} />
                <button type='submit'>Login</button>

            </form>
            {
                store.map((item, ind) => {
                    return (
                        <div key={ind}>
                            <span>{item.name} {item.title}</span>
                        </div>
                    )
                })
                // store.map((item, ind) => (
                //         <div key={ind}>
                //             <span>{item.name} {item.title}</span>
                //         </div>
                //     )
                // )
            }
          
            <div>
                <input type="text" onChange={(e) => combinedInput(e)} value={task.item} name='item' />
                <input type="text" onChange={(e) => combinedInput(e)} value={task.desc} name='desc' />
                <p>{task.item} {task.desc}</p>
            </div>

        </div>
    )
}

export default Form