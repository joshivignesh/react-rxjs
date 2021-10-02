import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
class App extends Component {
   constructor() {
      super();
      this.state = { data: [] };
   }
   componentDidMount() {
      const response = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(e => e.response));
      response.subscribe(res => {
         this.setState({ data: res });
      });
   }
   render() {
      return (
         <div>
            <h3>Using RxJS with ReactJS</h3>
            <ul>
               {this.state.data.map(el => (
                  <li>
                     {el.id}: {el.name}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}
ReactDOM.render(<App />, document.getElementById("root"));