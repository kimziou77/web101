import React from 'react'
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { item : props.item , readOnly:true}
        this.delete = props.delete
        this.update = props.update
    }

    deleteEventHadler = ()=>{
        this.delete(this.state.item)
    }
    offReadOnlyMode = ()=>{
        this.setState({readOnly:false})
    }
    enterKeyEventHandler = (e)=>{
        if(e.key==='Enter'){
            this.setState({readOnly:true})
            this.update(this.state.item)
        }
    }
    editEventHandler = (e)=>{
        const thisItem = this.state.item;
        thisItem.title=e.target.value;
        this.setState({item:thisItem})
    }
    checkboxEventHandler = (e)=>{
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item:thisItem})
        this.update({item:this.state.item})
    }

    render(){
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox
                    checked={item.done}
                    onChange={this.checkboxEventHandler}
                />
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label":"naked",
                            readOnly:this.state.readOnly
                        }}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullwidth="true"
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.enterKeyEventHandler}
                        onChange={this.editEventHandler}
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