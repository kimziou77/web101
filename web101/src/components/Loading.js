import React from 'react'
import {Container, Typography} from "@material-ui/core";

class Loading extends React.Component{
    render(){
        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: "15%" }}>
               <Typography component="h1" variant="h3">
                   로딩중페이지
               </Typography>
            </Container>
        )
    }
}
export default Loading