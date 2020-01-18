import React, { Component } from 'react'
import Item from '../components/Item'

export default class ItemsContainer extends Component {

     state = {
        allItems: []
    }
    
    componentDidMount() {
        fetch('http://localhost:4000/items')
            .then(r => r.json())
            .then(itemArray => this.setState({ allItems: itemArray }))
    }

    itemCard = () => {
             return this.state.allItems.map((item, index) => { 
                 return <Item name={item.name} image = {item.picture} price = {item.price} />
             })
    }

    

    render() {
        return (
            <div className="ui link cards">
                {this.itemCard()}
            </div>
        )
    }
}
