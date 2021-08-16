import React, { Component } from 'react'

//btn btn-secondary btn-sm
//badge m-2 badge-
export class Counte extends Component {
    state = {
        count: this.props.value
    }
    incrementSpan(){
        this.setState({ count: this.state.count + 1})
    }
    decreaseSpan(){
        this.setState({ count: this.state.count - 1})
    }
    render() {
        return (
            <div> 
                <span className={this.primaryWarning()}>{this.formatCount()}</span>
                <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => {this.incrementSpan()}}>
                    Increment
                </button>
                <button 
                    className="btn btn-primary m-2 btn-sm"
                    onClick={() => {this.decreaseSpan()}}>
                    Decrease
                </button>
                <button 
                    className="btn btn-danger m-2 btn-sm"
                    onClick={() => {this.props.onDelete(this.props.id)}}>
                    Delete
                </button>
            </div>
        )
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    }
    primaryWarning(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
    }
}


export default Counte
