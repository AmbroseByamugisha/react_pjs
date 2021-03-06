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
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }

    
//     componentWillMount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

//02
// <button onClick={activateLasers}>
//     activate Lasers
// </button>

//01
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }

//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// )

//ternary operators
// const a = 30;
// const b = 20;
// var c;

// c = (a < b) ? a : b;
// console.log(c);

//01
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// ReactDOM.render(
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );

//02
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }

//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;

//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );

//LISTS AND KEYS
//01
// const numbers = [1, 2, 3, 4, 5]
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

//01
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => 
// <li>{number}</li>
// );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );

// FORMS 
//01
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

//01
// class Calculator extends React.component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {temperature: ''};
//     }

//     handleChange(e) {
//         this.setState({temperature: e.target.value});
//     }

//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in Celsius:</legend>
//                 <input 
//                     value={temperature}
//                     onChange={this.handleChange} />

//                 <BoilingVerdict
//                     celsius={parseFloat(temperature)} />

//             </fieldset>
//         );
//     }
// }

//COMPOSITION AND INHERITANCE
//01
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}