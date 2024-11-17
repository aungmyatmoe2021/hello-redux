// Learning from React-လို-တို-ရှင်း - အခန်း(၇) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 17 Nov 2024 (10:08 PM)
// Description :  how to create redux and how to use redux to manage state data

import React from "react";
import { connect } from "react-redux";
import AddItem from './AddItem';

const Item = ({name, price}) => {
  return <li>{name}, ${price}</li>
}

const App = props => {
  const add = ({name, price}) => {
    let id = props.items.length + 1;
    props.add(id,name,price)
  }

  return (
    <div>
      <AddItem add={add} />
      <ul>
        {props.items.map(i=>(
          <Item key={i.id} name={i.name} price={i.price} />
        ))}
      </ul>
    </div>
  )
}

const stateToProps = state => {
  return {
    items: state,
  };
  // output = > 0 : { id : 1, name : "apple", price : "0.99",}
}

const dispatchToProps = dispatch => {
  return{
    add : (id,name,price) => {
      dispatch({
        type: "ADD",
        item: {id, name, price}
      });
    }
  };
}

const ReduxApp = connect(stateToProps,dispatchToProps) (App);

export default ReduxApp;