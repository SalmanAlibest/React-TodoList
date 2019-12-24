import React, { Component } from 'react'
class input extends Component{
   
    render(){
        const {item,handleChange,handleSubmit,editItem} = this.props
        return(
            <div className="card card-body my-3">
            <form>
                <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text bg-info text-white">
                <i className="fas fa-book"/>
                </div>   
                </div>
                <input type="text" className="form-control text-capitalize" placeholder="Add todo item"
                value={item} onChange={handleChange} />
                </div>
                {(editItem == false)?
                <button type="submit" onClick = {handleSubmit} className=" btn btn-info btn-block mt-3 text-capitalize">add item</button>
                :<button type="submit" onClick = {handleSubmit} className=" btn btn-primary btn-block mt-3 text-capitalize">edit item</button>
                }
                </form>
               
            </div>
        );
    }
}
export default input