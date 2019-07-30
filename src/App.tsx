import React, {Component} from 'react';
import Calculator from './components/Calculator';
import Box from "@material-ui/core/Box";

class App extends Component {
    render(): any {
        return (
            <Box
                color="primary.main"
                component="span"
                m={1}
                borderColor="primary.main"
            >
                <Calculator/>
            </Box>
        );
    }
}

export default App;
