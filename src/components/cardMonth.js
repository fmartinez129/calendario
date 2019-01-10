import React from 'react';
import { months } from '../months.json';

import '../styles.css';
import CardDay30 from './cardDays30';
import CardDay31 from './cardDays31';
import CardDay28 from './cardDays28';

class CardMonth extends React.Component {

constructor(){
  super();
  this.handleDays30 = this.handleDays30.bind(this);
  this.handleDays31 = this.handleDays31.bind(this);
  this.handleDays28 = this.handleDays28.bind(this);
  this.state = {
    months,
    flag: '0'
  }

}

  handleDays30() {
    this.setState({flag:'1'});
  }

 handleDays31() {
   this.setState({flag: '2'});
 }

 handleDays28() {
   this.setState({flag: '3'});
 }

render(){
  let a;
  let card;

  const days = this.state.months.map((month, i) => {
  var daysMonth = month.days;

  if(daysMonth == '30'){
    a = <a className="text-primary "href="#" onClick={this.handleDays30}>{month.number}</a>;
  }else if (daysMonth == '28'){
    a = <a className="text-primary "href="#" onClick={this.handleDays28}>{month.number}</a>;
  }else if(daysMonth == '31'){
    a = <a className="text-primary "href="#" onClick={this.handleDays31}>{month.number}</a>;
  }
      return (<div className="col-md-3 mr-5 ml-5 border border-primary bg-white rounded">
                {a}
              </div>)
  });

const flag = this.state.flag;

switch (flag) {
  case '1':
    card = <CardDay30 />
    break;
  case '2':
    card = <CardDay31 />
    break;
  case '3':
    card = <CardDay28 />
    break;
}

  return(

   <div className="col-md-12">
      <div className="card mt-4">
        <div className="card card-header text-center">
         <div className="row">
          {days}
         </div>
          <span>
          </span>
        </div>
        <div className="card-body">
        <div className = "container-fluid">
          <div className="row">
            <div className="col-md-2  dias"></div>

            <div className="col-md-1  dias">Sun</div>
            <div className="col-md-1  dias">Mon</div>
            <div className="col-md-1  dias">Tue</div>
            <div className="col-md-1  dias">Wed</div>
            <div className="col-md-1  dias">Thu</div>
            <div className="col-md-1  dias">Fri</div>
            <div className="col-md-1  dias">Sat</div>


          </div>

          <div>
              {card}
          </div>

          </div>
        </div>
        <div className="card-footer">
          
        </div>
      </div>
    </div>
  )
 }
}

export default CardMonth
