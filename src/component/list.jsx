import React, { Component } from 'react'
import Item from './item'
class list extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props
        return (
            <div className="card card-body my-5">
            <ul className="list-group my-1">
            <h3 className="text-capitalize text-center">todo list</h3>
           { items.map(item=>{
               return <Item  key={item.id} 
                            title={item.title} 
                            handleDelete={()=> handleDelete(item.id)}
                            handleEdit={()=> handleEdit(item.id)}/>
           })}
           
            <button type="button" onClick={clearList} className="btn btn-block btn-danger mt-3 text-capitalize">clear list</button>
            </ul>
            </div>
        );
    }
}
export default list;