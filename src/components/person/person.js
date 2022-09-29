import Component from 'react'

class Person extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            phone:this.props.phone,
            career:this.props.career,
            email:this.props.email,
            meeting:this.props.meeting
        }
    }
    render(){
        const{name,phone,career,email,meeting} = this.state
        return (
            <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{career}</td>           
            <td>{email}</td>
            <td>{meeting}</td>
          </tr>
        );
    }
 
}

export default Person;