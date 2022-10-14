import React, { Component } from "react";
const subscriptions = `http://localhost:3305/subcriptions`;
class Email extends Component {
  state = {
    email: "",
    error: false,
    success: false,
  };

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ email: value });
  };

  clearMessages = () => {
    setTimeout(() => {
      this.setState({
        success: false,
        error: false,
      });
    }, 2000);
  };
  subscriptions = (userEmail) => {
    // post the email to the server
    fetch(subscriptions, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    })
      .then((response) => response.json())
      .then(this.setState({ email: "", success: true }));
    this.clearMessages();
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let regex = /\S+@\S+\.\S+/;
    let email = this.state.email;
    if (regex.test(email)) {
      this.subscriptions(email);
    } else {
      this.setState({ error: true });
      this.clearMessages();
    }
  };

  render() {
    return (
      <div className="email_block">
        <h1>Subscribe to us</h1>`
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="yourmail@gmail.com"
          />
        </form>
        <p className={this.state.error ? "error" : "no-error"}>
          Please check your email
        </p>
        <p className={this.state.success ? "success" : "no-success"}>
          Thank you, We will get back to you soon.
        </p>
        <p id="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          quos dolore necessitatibus nisi temporibus earum placeat sapiente quae
          id ab?
        </p>
      </div>
    );
  }
}

export default Email;
