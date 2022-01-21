import React from 'react'
import Todo from './components/Todo'
import {Container, List, Paper} from "@material-ui/core";
import AddTodo from "./components/AddTodo";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item : [{id:0, title:"Hello world!", done: true},
                    {id:1, title:"Hello world2!", done: false}]
        }
    }
    add = (item) => {
        const thisItems = this.state.item
        item.id = "ID-"+thisItems.length
        item.done = false;
        thisItems.push(item)
        this.setState({items:thisItems})
    }
    delete = (item)=>{
        const thisItems = this.state.item
        const newItems = thisItems.filter(e=> e.id !== item.id)
        this.setState({item:newItems},()=>{
            console.log("Update Items : ",this.state.item)
        })
    }
    render(){
        var todoItems = this.state.item.length > 0 && (
            <Paper style={{margin:16}}>
                <List>
                    {this.state.item.map((item, idx)=>
                        (<Todo item={item} key={item.id} delete={this.delete}/>)
                    )}
                </List>
            </Paper>
        )

        return (<div className="App">
                    <Container maxWidth="md">
                        <AddTodo add={this.add}/>
                        <div className="TodoList">{todoItems}</div>
                    </Container>
                </div>);
    }
}

export default App;
