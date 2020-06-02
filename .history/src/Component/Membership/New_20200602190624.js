import React, { Component } from 'react';
import axios from 'axios';
import './Membership.css'

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div>
                <section>
                    <div className="gym-member">
                        <div className="container">
                            <h1 className="display-4">YOUR GYM MEMBERSHIP</h1>
                        </div>
                    </div>
                </section>

                <div style={{ display: info && 'none' }} className='container'>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>

                <section style={{ marginTop: '200px', display: info ? 'block' : 'none' }} className='container'>
                <h1>Pay here via your credit card</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                </Elements>
            </section>
            </>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default New;