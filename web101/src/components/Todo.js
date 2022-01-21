import React from 'react'
import {Checkbox, ListItem} from "@material-ui/core";

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { item : props.item }
    }
    render(){
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
            </ListItem>
        )
    }

}
export default Todo