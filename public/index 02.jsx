class FirstNetwork extends Component {
    state = {
        a_amount: 0,
        b_amount: 0
    }

    first_network_connect = () => {
        axios.get('first_network/connect')
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    query = () => {
        axios.get('/first_network/query')
        .then((response) => {
            this.setState({a_amount:response.data.a_amount, b_amount:response.data.b_amount});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    send = () => {
        alert(this.amount.value);
        axios.post('/first_network/send',{"amount":this.amount.value})
        .then((response) => {
            console.log(response);

        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2>FirstNetwork에 <button onClick={this.first_network_connect}>연결</button></h2>
                <br/>
                <button onClick ={this.query} >잔액 확인</button> {' '}
                a : <Amount bgColor = 'megenta' amount={this.state.a_amount}></Amount>
                b : <Amount bgColor = 'cyan' amount={this.state.b_amount}></Amount>
                <br/>
                <br/>
                <div>a가 b에게 {' '}
                <input placeholder='송금량' ref={ref=>this.amount=ref} />원을 {' '}
                <button onClick={this.send} > 보내기 </button><br/>

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    (<Router>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="basic" component={BasicNetwork}/>
            <Route path="first" component={FirstNetwork}/>
        </Route>
    </Router>)
    , document.getElementById("root")
);