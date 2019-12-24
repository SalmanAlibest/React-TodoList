import React, { Component } from 'react';
import Input from './component/input'
import List from './component/list'
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    items: [],
    item: '',
    editItem: false,
    id: uuid()
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: this.state.id
    }
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: filteredItem
    })

  }
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id == id)
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto min-auto col-md-8 mt-4">
            <h2 className="text-capitalize text-center">todo input</h2>
            <Input item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}
              />
            <List items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
