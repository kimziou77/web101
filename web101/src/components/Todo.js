import React from 'react'

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { item : props.item }
    }
    render(){
        return (
            <div className="Todo">
                <input type="checkbox"
                       id={this.state.id} name = {this.state.name} checked={this.state.done}/>

                <label id={this.state.item.id}>{this.state.item.title}</label>
            </div>
        )
    }

}
export default Todo