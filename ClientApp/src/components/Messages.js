import React, { Component } from 'react'
import axios from 'axios'

class Messages extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        messages: [],
        requestCompleted:false
      }
    }
    
    async componentDidMount() {

      var acc_token
      try{
        const tokenRequest = await axios
        .post('https://rest.peoplevine.com/api/token',
        {
          "username" : "johnholtgreive2022@u.northwestern.edu",    
          "password" : "Pa55word!",    
          "company_id" : 1087,    
          "grant_type" : "customer_password",    
          "remember_me": true    
        })
        console.log(tokenRequest)
        acc_token = tokenRequest.data.access_token
      }
      catch{
        console.log('FAILED: Request for access key failed')
      }
        
      try{
        const messagesRequest = await axios.get('https://rest.peoplevine.com/api/account/messages', {
          headers: {
            Authorization: `Bearer ${acc_token}`
          }
        })
        console.log(messagesRequest)
        this.setState({messages: messagesRequest.data})
        this.setState({requestCompleted: true})
        
      }
      catch{
        console.log('FAILED: Request for messages failed')
      }
    }

  render() {
    const { messages } = this.state    
    if(this.state.requestCompleted){
      return (
        <div>
          {
            messages.length ?
            messages.map(message => <div key={message.id}>{message.text}</div>) :
            null
          }
        </div>
      )
    }else{
      return null
    }
  }
}

export default Messages