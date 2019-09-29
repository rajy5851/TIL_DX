const {Component} = React;
const {Router, Route, IndexRoute, Link} = ReactRouter;

class Main extends Component{
    render(){
        return (
            <div>
                <h1>Main</h1>
                <ul className="header">
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to="/bitcoin">bitcoin</Link></li>
                </ul>
            <div className="content">
                {this.props.children}
            </div>
        </div>
        );
    }
}

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

class Bitcoin extends Component{
    
    state = {
        blockNumber: 0,
        acc1_balance: 0,
        acc2_balance: 0
    }

    connect = () => {
        // alert("connect...");
        axios.get('bitcoin_network/connect')
        .then((res) => {
            this.setState({
                blockNumber:res.data.blockNumber,
                acc1_balance:res.data.acc1_balance,
                acc2_balance:res.data.acc2_balance
            });
        })
        .catch((e) => {

        })
    }

    render() {
        return (
            <div>
                <h1>Bitcoin</h1>
                <button onClick={this.connect}>connect</button>
                <br/>
                blockNumber : {this.state.blockNumber} <br/>
                acc1_balance : {this.state.acc1_balance} <br/>
                acc2_balance : {this.state.acc2_balance} <br/>
                <br/><br/>
                from acc1 to acc2<input></input> <button>SEND</button>
            </div>
        );
    }
}

ReactDOM.render(
    (
        <Router>
            <Route path="/" component={Main}>
                <IndexRoute compoennt={Home} />
                <Route path="bitcoin" component={Bitcoin} />
            </Route>
        </Router>
    )
    . document.getElementById('root')
);