import React from 'react';
import ReactDOM from'react-dom';

const App = () => {
    return(
        <div className="ui block header">
           <h3> Studio Header</h3> 
        </div>
    );
};

ReactDOM.render(<App/>, document .querySelector('#root'))