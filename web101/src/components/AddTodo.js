import React from 'react'
import {Button, Grid, Paper, TextField} from "@material-ui/core";

class AddTodo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { item: {title:""} }
        this.add = props.add
    }
    onInputChange = (e)=>{
        const thisItem = this.state.item
        thisItem.title = e.target.value
        this.setState({item:thisItem})
    }
    onButtonClick = (e)=>{
        if(this.state.item.title==="") return
        this.add(this.state.item)
        this.setState({item:{title:""}})
    }
    enterKeyEventHandler = (e)=>{
        if(e.key === 'Enter'){
            this.onButtonClick();
        }
    }
    render(){
        return (
            <Paper style={{margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} xd={11} item style={{paddingRight:16}}>
                        <TextField placeholder="Add Todo here"
                                   onChange={this.onInputChange}
                                   value={this.state.item.title}
                                   onKeyPress={this.enterKeyEventHandler}
                                   fullWidth
                        />
                    </Grid>
                    <Grid xs={1} xd={1} item>
                        <Button color="secondary"
                                variant="outlined"
                                onClick={this.onButtonClick}
                                fullWidth>+
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
export default AddTodo