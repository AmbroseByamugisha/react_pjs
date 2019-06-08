//01
// const element = <h1>Hello, world!</h1>;
//02
// const name = 'Ambrose Byamu';
// const element = <h1>Hello, {name}</h1>;

// ReactDom.render(
//     element,
//     document.getElementById('root')
// );

//03
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Ambrose',
//     lastName: 'Magara'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );

//04
// function getGreeting(user) {
//     if(user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>
// }

//02
// const element = <div tabIndex="0"></div>;
// const element = <img src={user.avatarUrl}></img>;
// const element = <img src={user.avatarUrl} />

//01
// const element = (
//     <div>
//         <h1>Hello!</h1>
//         <h2>Good to see you.</h2>
//     </div>
// );

// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
// );

//01
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

//COMPONENTS AND PROPS
//01
// function welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

//01
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

//02 user-defined components
// const element = <Welcome name="Sara" />;

//01
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Ambrose" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//01
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Ambro" />
//             <Welcome name="Eminem" />
//             <Welcome name="Kanye" />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

//01 
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     src={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// STATE AND LIFECYCLE
// 01
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleString()}</h2>
//         </div>
//     );
// }

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

//01
// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

//03
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    
    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);