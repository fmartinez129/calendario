import React, { Component } from 'react';

class TaskForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      hour: '',
      day: '',
      color: '',
      month:''
    };
this.handleInputChange = this.handleInputChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(e){
    const { value, name } = e.target;
    this.setState({
      [e.target.name]: e.target.value
    })
  }

handleSubmit(e){
  e.preventDefault();
  this.props.onAddTask(this.state);
}

  render() {
    return (
      <div className = "col-md-3">
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value = {this.state.title}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="day"
              className="form-control"
              value={this.state.day}
              onChange={this.handleInputChange}
              placeholder="Día"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="hour"
              className="form-control"
              value={this.state.hour}
              onChange={this.handleInputChange}
              placeholder="hora"
              />
          </div>
          <div className="form-group">
            <select
                name="color"
                className="form-control"
                value={this.state.color}
                onChange={this.handleInputChange}
              >
              <option selected disabled>Elige una opción</option>
              <option>Amarillo</option>
              <option>Azul</option>
              <option>Rojo</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
    )
  }

}

export default TaskForm;
