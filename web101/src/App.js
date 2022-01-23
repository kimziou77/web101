import React from 'react'
import Todo from './components/Todo'
import {AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography} from "@material-ui/core";
import AddTodo from "./components/AddTodo";
import {call, signout} from "./service/ApiService";
import Loading from "./components/Loading";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items : [],
            loading: true
        }
    }

    componentDidMount() {
        call("/todo", "GET", null).then((response) =>
            this.setState({items: response.data, loading:false})
        )
    }

    add = (item)=>{
        call("/todo","POST",item).then((response)=>
            this.setState({items:response.data})
        )
    }
    delete = (item)=>{
        call("/todo","DELETE",item).then((response)=>
            this.setState({items:response.data})
        )
    }
    update = (item)=>{
        call("/todo","PUT", item).then((response)=>
            this.setState({items:response.data})
        )
    }
    

    render(){
        let todoItems = this.state.items.length > 0 && (
            <Paper style={{margin:16}}>
                <List>
                    {this.state.items.map((item, idx)=>
                        (<Todo item={item}
                               key={item.id}
                               delete={this.delete}
                               update={this.update}
                        />)
                    )}
                </List>
            </Paper>
        )
        let navigationBar = (
            <AppBar position="static">
                <Toolbar>
                    <Grid justifyContent="space-between" container>
                        <Grid item>
                            <Typography variant="h6">오늘의 할 일</Typography>
                        </Grid>
                        <Grid>
                            <Button color="inherit" onClick={signout}>
                                로그아웃
                            </Button>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        )
        let todoListPage = (
            <div className="App">
                {navigationBar}
                <Container maxWidth="md">
                    <AddTodo add={this.add}/>
                    <div className="TodoList">{todoItems}</div>
                </Container>
            </div>
        )
        let loadingPage = <Loading/>
        let content = loadingPage;
        if(!this.state.loading){
            content = todoListPage
        }
        return <div className="App">{content}</div>;
    }
}

export default App;
