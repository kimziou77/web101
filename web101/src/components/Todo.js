import React from 'react'
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { item : props.item }
        this.delete = props.delete
    }
    deleteEventHadler = ()=>{
        this.delete(this.state.item)
    }
    render(){
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullwidth={true}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHadler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

}
export default Todo