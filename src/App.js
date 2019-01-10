import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardMonth from './components/cardMonth';
import store from './store'
// data
import { tasks } from './tasks.json';

// subcomponents
import TaskForm from './components/formTask';

let cardTask;

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks,
      day: ''

    }
    store.subscribe(() => {
      this.setState({
        day:store.getState().day
      })
      this.showTasks(store.getState().day);
    })
    this.handleAddTask = this.handleAddTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  handleAddTask(task) {

    alert('Exito')
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  removeTask(index){
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
  }


  showTasks(date){
    cardTask = this.state.tasks.map((task, i)=>{
      let span;

      switch (task.color) {
        case "Amarillo":
            span = <span className="badge badge-pill badge-warning ml-2">Moderado</span>
          break;
        case "Azul":
            span = <span className="badge badge-pill badge-primary ml-2">Extemporanea</span>
          break;
        case "Rojo":
          span = <span className="badge badge-pill badge-danger ml-2">Urgente</span>
          break;


      }
      if(task.day == date){
         return(<div className="col-md-2" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{task.title}</h3>
              Hora:
              
                {task.hour}

            </div>
            <div className="card-body">
              Fecha: {task.day}
              {span}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTask.bind(this, i)}
                >
                Quitar
              </button>
            </div>
          </div>
        </div>)
      }
    })

  }
  render() {

    return (
      <div className="App">
          <CardMonth />

          <div className = "row">
          <TaskForm onAddTask={this.handleAddTask}></TaskForm>
          <div className = "col-md-9">
          <div className="row">
          {cardTask}
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
