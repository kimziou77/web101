import React from 'react'
import Todo from './components/Todo'
import {Switch} from "react-router";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item : [{id:0, title:"Hello world!", done: true},
                    {id:1, title:"Hello world2!", done: false}]
        }
    }
    render(){
        var todoItems = this.state.item.map( (item, id)=>
            (<Todo item={item} key={id}/>)
        )
        return <div className="App">{todoItems}</div>
    }
}

export default App;
