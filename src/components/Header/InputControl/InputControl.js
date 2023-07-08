   import React from 'react'
   import styles from "./InputControl.module.css";
   const InputControl = ({label,...props}) => {
     return (
       <div className={styles.container}>
        {/* Inside the div, there is a conditional rendering of a label element, which will only be rendered if the label property passed to the component is truthy. The text content of the label element is set to the value of the label property. After the label element, there is an input element of type “text” that takes in all the other properties passed to the component using the spread syntax {...props}. This allows for additional customization of the input element by passing in additional properties when using the inputControl component. */}
         {label&&<label>{label}</label>}
         <input type="text" {...props}></input>
       </div>
     )
   }
   
   export default InputControl
   