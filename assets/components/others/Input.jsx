import React from 'react'

const Input = ({
    label = "",
    placeholder = "",
    type = "text",
    name,
    value,
    onChange,
}) => {
    return ( <>
        <label htmlFor={name} class="form-label">{label}</label>
        <input type={type} class="form-control" id={name} placeholder={ placeholder || label } onChange={onChange} value={value} />
    </> );
}
 
export default Input;