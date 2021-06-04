import React from 'react'

class Counter extends React.Component {
    state = {
        number: 0,
        error: ''
    }
    handleCounterChangeMinus = () => {
        if(this.state.number <= 0) {
            // window.alert("Number must be greater than 0")
            this.setState({ error: "Number must be greater than 0" })
        }
        else{
            this.setState({ number: this.state.number - 1, error: ''})
        }
        
    }
    handleCounterChangePlus = () => {
        if (this.state.number >= 10) {
            this.setState({ error: "Number must be less than 10" })
        }
        else {
            this.setState({number: this.state.number + 1, error: ''})
        }
    }

    componentDidMount() {
        console.log('component did mount berjalan')
        console.log(this.state)
    }
    componentDidUpdate() {
        console.log('component did update berjalan')
        console.log(this.state)
    }
    
    render() {
        return(
            <>
                <div className="container">
                    <h1>{this.props.titleName}</h1>
                    <button onClick={this.handleCounterChangeMinus}>-</button>
                    <span>{this.state.number}</span>
                    <button onClick={this.handleCounterChangePlus}>+</button>
                    <p>{this.state.error}</p>
                </div>
            </>
        )
    }
}

export default Counter 