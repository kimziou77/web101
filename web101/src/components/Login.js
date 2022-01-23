import React from 'react'
import {signin} from "../service/ApiService";
import {Button, Container, Grid, Link, TextField, Typography} from "@material-ui/core";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target)
        const email = data.get("email")
        const password = data.get("password")
        signin({email:email, password:password})
    }

    render(){
        return (<Container component="main" maxWidth="xs" style={{marginTop:"10%"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">
                                로그인
                            </Typography>
                        </Grid>
                    </Grid>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일 주소"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    label="패스워드"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                  로그인
                                </Button>
                            </Grid>
                            <Link href="/signup" variant="body2">
                                <Grid item> 계정이 없습니까? 여기서 가입하세요.</Grid>
                            </Link>
                        </Grid>
                    </form>
                </Container>
        )
    }
}
export default Login