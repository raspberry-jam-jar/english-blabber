import React from 'react';


class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', secondName: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    alert('Пользователь сохранен: ' + this.state.firstName + this.state.secondName);
    // event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Имя:
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        <br />
        Фамилия:
        <input type="text" name="secondName" value={this.state.secondName} onChange={this.handleInputChange} />
      </label>
      <input type="submit" value="Сохранить"/>
    </form>
    )
  }
    
};

export default UserForm;
