import './App.css';
import { Component } from 'react'
import Person from '../person/person';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {id:123,name: 'Alvin', phone: '546654654', career: 'IT', email: '55466546@gmail.com', meeting: '20.12 - 12:00'},
        {id:234,name: 'Mark', phone: '12331234', career: 'Bankir', email: 'asdfasfd@gmail.com', meeting: '25.12 - 14:00'},
        {id:321,name: 'Deiv', phone: '412431234', career: 'HR', email: '5asdfasdf6@gmail.com', meeting: ''},
        {id:12313,name: 'Den', phone: '521124521', career: 'Real Estate', email: 'asdfasdf466546@gmail.com', meeting: ''},
      ]
    }
  }

  onValueChange = (id, value)=>{
    this.setState(({data})=>{
      const item = data.find(item =>item.id === id)
      const newItem = {...item, meeting: value}
      const index = data.indexOf(item)
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1,data.length )]
      return{
        data: newData
      }
    })
  }
  render(){
    const {data} = this.state
    const personList = data.map(item =>{
      return <Person {...item} key={item.id} onValueChange={(id, value)=>{this.onValueChange(id, value)}}/>
    })
    return (
      <table className="responsive-table">
      <thead>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Career</th>
            <th>Email</th>
            <th>Meeting</th>
        </tr>
      </thead>
      <tbody>
        {personList}
      </tbody>
    </table>
    );
  }
}

export default App;
