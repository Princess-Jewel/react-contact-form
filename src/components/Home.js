import React from 'react';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fname: '',
        lname: '',
        subject: ''
      }
    }


    
    render(){
        return (

            <div className="container">
               
                       <div className="bold--text">
                       <h3>
                            Contact Form
                        </h3>
                       </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
    
                            <div className="form-group">
                                <div>
    
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.fname} onChange={this.onFNameChange.bind(this)}  required />
    
                                    <label htmlFor="lname">Last Name</label>
                                   <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname} onChange={this.onLNameChange.bind(this)}  required />
                                    
    
                                   <label htmlFor="subject">Subject</label>
                                  <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required ></textarea>
    
                                  <button type="submit" class="btn btn-primary">Submit</button>
                                    
    
                                </div>
    
                              
                            </div>
                        </form>
                    </div>
        )
    }

onFNameChange(event) {
    this.setState({fname: event.target.value})
  }

  onLNameChange(event) {
    this.setState({lname: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
}

export default Home
