import React from 'react'
import Todo from './components/Todo'
import {List, Paper} from "@material-ui/core";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item : [{id:0, title:"Hello world!", done: true},
                    {id:1, title:"Hello world2!", done: false}]
        }
    }
    render(){
        var todoItems = this.state.item.length > 0 && (
            <Paper style={{margin:16}}>
                <List>
                    {this.state.item.map((item, idx)=>
                        (<Todo item={item} key={item.id}/>)
                    )}
                </List>
            </Paper>
        )

        return <div className="App">{todoItems}</div>
    }
}

export default App;
