import React from "react";

export default class Forms extends React.Component {
  state = {
    fname: '', lname: '', addr: '', isAddrSame: false, gender: '', state: ''
  }
  handleOnChange = (event) => {
    const { value, name, type, checked } = event.target;
    const data = type == 'checkbox' ? checked.toString() : value;
    this.setState({
      [name]: data
    });
  }
  render() {
    return(<div>
      <p><input type="text" onChange={this.handleOnChange} placeholder="fname" name="fname" /></p>
      <p><input type="text" onChange={this.handleOnChange} placeholder="lname" name="lname" /></p>
      <p><input type="textarea" onChange={this.handleOnChange} placeholder="addr" name="addr" /></p>
      <p>
        Is Billing Address Same: <input type="checkbox" onChange={this.handleOnChange} name="isAddrSame"
        checked={this.state.isAddrSame} />
      </p>
      <p>
        Gender: <input type="radio" name="gender" onChange={this.handleOnChange} placeholder="addr" value="male"  />
        Male
        <input type="radio" name="gender" onChange={this.handleOnChange} placeholder="addr" value="female" />
        female
      </p>
      <p>State: <select onChange={this.handleOnChange} name="state">
          <option></option>
          <option>Maharashtra</option>
          <option>Karnataka</option>
          <option>Telangana</option>
          <option>MP</option>
        </select>
      </p>
      <p><strong>Summary</strong></p>
      <p>First Name: {this.state.fname}</p>
      <p>Last Name: {this.state.lname}</p>
      <p>Is Bill Address Same: {this.state.isAddrSame}</p>
      <p>Address : {this.state.addr}</p>
      <p>Gender: {this.state.gender}</p>
      <p>State: {this.state.state}</p>
    </div>);
  }
}