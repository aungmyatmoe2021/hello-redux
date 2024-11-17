import React from "react";
import Header from './Header';

const AddItem = props => {
    let nameRef = React.createRef();
    let priceRef = React.createRef();

    const add = () => {
        let name = nameRef.current.value;
        let price = priceRef.current.value;

        if (name != "" && price != ""){
            props.add({name,price});
        }else{
            return;
        }

        nameRef.current.value = "";
        priceRef.current.value = "";
    }

    return(
        <div>
            <Header />
            Name  : <input type="text" ref={nameRef} />
            Price  : <input type="text" ref={priceRef} />
            <button onClick={add}>Add Item</button>
        </div>
    )
}

export default AddItem;