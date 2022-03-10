import React, { Component } from "react";
import axios from "axios";
import {} from "./style.css";
import Logo from "./logo.png";

class InputForm extends Component {
  state = {
    finalMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);

    let formData = {
      name: this.state.first_name + " " + this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      address:
        this.state.address +
        ", " +
        this.state.city +
        "-" +
        this.state.zip +
        "(" +
        this.state.state +
        ")," +
        this.state.country,
      storage: this.state.storage,
      account_details: {
        holder_name: this.state.account_holder_name,
        bank_type: this.state.bank_type,
        account_number: this.state.account_number,
        ifsc: this.state.ifsc,
        account_type: this.state.account,
      },
    };

    axios
      .post("http://localhost:3001/api/addperson", formData)
      .then((response) => {
        if (response.status === 200)
          this.setState({ finalMessage: response.data.status });
        else console.log(response.data.error.message);
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data);
        else console.log("Error", err.message);
      });
  };

  render() {
    return (
      <>
        <div className="hello">

          <div class="image-section">
            <img src={Logo} alt="Let's connect" />
          </div>

          <div>

            <div className="ui container" style={{ marginBottom: "10px" }}>
              {this.state.finalMessage ? (
                <div className="ui message">
                  <i
                    aria-hidden="true"
                    className="close icon"
                    onClick={() => {
                      this.setState({ finalMessage: null });
                      window.location.reload();
                    }}
                  />
                  <div className="content ui container">
                    <div className="header">Success!</div>
                    <p>{this.state.finalMessage}</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="ui container segment" style={{ margin: "0" }}>
              <form className="ui form" onSubmit={this.handleSubmit}>
                <h2
                  style={{ textAlign: "center" }}
                  className="ui dividing header"
                >
                  Personal Details
                </h2>
                <div className="field">
                  <label>Name</label>
                  <div className="two fields">
                    <div className="field">
                      <input
                        type="text"
                        required
                        name="first_name"
                        placeholder="First Name"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        required
                        name="last_name"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="fields">
                    <div className="ten wide field">
                      <label>Email</label>
                      <input
                        type="email"
                        required
                        name="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="abc@example.com"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="six wide field">
                      <label>Phone</label>
                      <input
                        type="text"
                        required
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        maxLength={10}
                        name="phone"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="fields">
                    <div className="ten wide field">
                      <label>Address</label>
                      <input
                        type="text"
                        required
                        name="address"
                        placeholder="Enter Address"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="six wide field">
                      <label>City</label>
                      <input
                        type="text"
                        required
                        name="city"
                        placeholder="City"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="five wide field">
                    <label>ZIP</label>
                    <input
                      type="number"
                      required
                      name="zip"
                      placeholder="854301"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="five wide field">
                    <label>State</label>
                    <select
                      required
                      onChange={this.handleChange}
                      name="state"
                      className="ui fluid dropdown"
                    >
                      <option value>State</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Delhi">Delhi</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andhra Pradesh">	Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="	Himachal Pradesh">	Himachal Pradesh</option>
                      <option value="	Jammu and Kashmir">	Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="	Madhya Pradesh">	Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Orissa">Orissa</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="	Tamil Nadu">	Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="	Uttar Pradesh">	Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      
                    </select>
                  </div>
                  <div className=" six wide field">
                    <label>Country</label>
                    <select
                      onChange={this.handleChange}
                      name="country"
                      disabled
                      className="ui fluid dropdown"
                    >
                      <option  value>Country</option>
                      <option selected value="India">India</option>
                    </select>
                  </div>
                </div>
                <h4 className="ui dividing header">Account Details</h4>
                <div className="fields">
                  <div className="nine wide field">
                    <label>Account Holder</label>
                    <input
                      type="text"
                      name="account_holder_name"
                      placeholder="Account Holder Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="seven wide field">
                    <label>Bank Type</label>
                    <select
                      onChange={this.handleChange}
                      name="bank_type"
                      className="ui fluid dropdown"
                    >
                      <option value>Bank Type</option>
                      <option value="SBI">State Bank of India</option>
                      <option value="BOI">Bank of India</option>
                      <option value="BOB">Bank of Baroda</option>
                      <option value="CB">Canara Bank</option>
                      <option value="HDFC">HDFC Bank</option>
                      <option value="AXB">Axis Bank</option>
                      <option value="ICICI">ICICI Bank</option>
                    </select>
                  </div>
                </div>
                <div className="fields">
                  <div className="seven wide field">
                    <label>Account Number</label>
                    <input
                      type="text"
                      name="account_number"
                      maxLength={30}
                      placeholder="Account Number"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="five wide field">
                    <label>IFSC</label>
                    <input
                      type="text"
                      name="ifsc"
                      maxLength={20}
                      placeholder="IFSC Code"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="four wide field">
                    <label>Account Type</label>
                    <select
                      onChange={this.handleChange}
                      name="account"
                      className="ui fluid dropdown"
                    >
                      {/* <option value>Choose</option> */}
                      <option selected value="savings">Savings Account</option>
                      <option value="current">Current Account</option>
                    </select>
                  </div>
                </div>
                <h4 className="ui dividing header">Storage Medium</h4>
                <div className="field">
                  <label>Save details to :</label>
                  <select
                    onChange={this.handleChange}
                    name="storage"
                    className="ui fluid dropdown"
                  >
                    {/* <option value>Choose</option> */}
                    <option selected value="database">Database</option>
                    <option value="local">Local</option>
                  </select>
                </div>

                <button
                  className="ui button"
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputForm;
