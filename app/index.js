// const React = require('react');
// const ReactDOM = require('react-dom');
// const test3 = require('scalajs-cli-test3')
//
// require('./index.css')
//
// //State
// //lifecycle events
// //UI
// export class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//         // Don't call this.setState() here!
//         this.state = {name: this.props.name};
//         this.updateName = this.updateName.bind(this);
//     }
//
//     updateName() {
//         this.setState({name: this.state.name + ' 1'})
//     }
//
//     render() {
//         return (
//             <div>
//
//                 <div>
//                     {this.state.name}
//                 </div>
//                 <div>
//                     Hello world !!!
//                 </div>
//                 <div>
//                     {test3}
//                 </div>
//                 <button onClick={this.updateName}>Click me</button>
//
//             </div>
//
//         )
//     }
// }
//
// ReactDOM.render(
//     <App name="Saloni"/>,
//     document.getElementById('app')
// )

module.exports = function githubbattle3(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
};

const dd = require('github-battle2')
dd('ds sdsd sds ')