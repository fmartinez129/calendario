import React from 'react';
import { tasks } from '../tasks.json';

import store from '../store'

class CardDay28 extends React.Component{

  constructor(){
      super();
      this.state = {
        day: ''
      }

  }



render(){
return (
  <div>
  <div className="row">
    <div className="col-md-2  dias"></div>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('1')}><div>1</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('2')}><div>2</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('3')}><div >3</div></a>

    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('4')}><div >4</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('5')}><div >5</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('6')}><div >6</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('7')}><div >7</div></a>
  </div>
  <div className="row">
  <div className="col-md-2  dias"></div>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('8')}><div >8</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('9')}><div >9</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('10')}><div >10</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('11')}><div >11</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('12')}><div >12</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('13')}><div >13</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('14')}><div >14</div></a>
  </div>
  <div className="row">
    <div className="col-md-2  dias"></div>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('15')}><div >15</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('16')}><div >16</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('17')}><div >17</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('18')}><div >18</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('19')}><div >19</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('20')}><div >20</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('21')}><div >21</div></a>
  </div>
  <div className="row">
    <div className="col-md-2  dias"></div>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('22')}><div >22</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('23')}><div >23</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('24')}><div >24</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('25')}><div >25</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('26')}><div >26</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('27')}><div >27</div></a>
    <a href="#" className="col-md-1  dias border border-dark" onClick={()=>this.handleGetDate('28')}><div >28</div></a>
  </div>
  <div className="row">
    <div className="col-md-2  dias"></div>
    <div className="col-md-1  dias border border-dark bg-info"></div>
    <div className="col-md-1  dias border border-dark bg_info"></div>
    <div className="col-md-1  dias border border-dark bg-info"></div>
    <div className="col-md-1  dias border border-dark bg-info"></div>
    <div className="col-md-1  dias border border-dark bg-info"></div>
    <div className="col-md-1  dias border border-dark bg-info"></div>
    <div className="col-md-1  dias border border-dark bg-info"></div>

  </div>
</div>

)

}

handleGetDate (date) {
  store.dispatch({
    type:"GET_DATE",
    day: date
  })
}
}

export default CardDay28
