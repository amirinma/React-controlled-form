import React from 'react'

export default function Form(){
    const [form, setForm]=React.useState({
        name: "",
        lastName: "", 
        email: "",
        isCetizen: true
    })
console.log(form)

    function handleChange(e){
        console.log("hi", e.target.value)
        const {name, value, type, checked} = e.target
        setForm(prevState=>{
            return{
                ...prevState, 
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return(
        <div>
            <input 
                type="text"
                placeHolder="Name"
                name='name'
                onChange={handleChange}
                value={form.value}
            />
            <input 
                type="text"
                placeHolder="Last Name"
                name='lastName'
                onChange={handleChange}
                value={form.value}
            />
            <input 
                type="text"
                placeHolder="Email"
                name='email'
                onChange={handleChange}
                value={form.value}
            />
            <input 
                type="checkbox"
                id="checkbox"
                checked={form.isCetizen}
                onChange={handleChange}
                name="isCetizen"
            />
            <label htmlFor='checkbox'>US Cetizen</label>
        </div>
    )
}