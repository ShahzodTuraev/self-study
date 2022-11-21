import React from "react";
import {
    Container,
    Title,
    Text,
    Rotate,
    Button,
} from './style'

import {ThemeProvider,createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props)=>props.theme.bg};
    color: ${(props)=>props.theme.col}
  }  
`;
class StyleState extends React.Component{
    state = {
        light :true
    }
    render(){
        const theme = {
            bg: this.state.light ? 'white' : 'black',
            col: this.state.light ? 'black' : '#cfc3c3',
        }
        return(
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Title>Hello Styled Components</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta ut assumenda enim hic, amet dolore ipsum, praesentium, 
                     sit ab ipsa minima eos itaque velit exercitationem laboriosam 
                     ipsam et temporibus. Quis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta ut assumenda enim hic, amet dolore ipsum, praesentium, 
                     sit ab ipsa minima eos itaque velit exercitationem laboriosam 
                     ipsam et temporibus. Quis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta ut assumenda enim hic, amet dolore ipsum, praesentium, 
                     sit ab ipsa minima eos itaque velit exercitationem laboriosam 
                     ipsam et temporibus. Quis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Soluta ut assumenda enim hic, amet dolore ipsum, praesentium, 
                     sit ab ipsa minima eos itaque velit exercitationem laboriosam 
                     ipsam et temporibus. Quis.
                </Text>
                <Rotate>Rotate me</Rotate>
                <Button onClick={()=>this.setState({light: !this.state.light})}>Dark Mode</Button>
            </ThemeProvider>
        )
    }
}

export default StyleState