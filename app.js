import { MyInput } from './my-input.component';
import axios from 'axios';

export const App = {
  components: { MyInput },
  data: function () {
    return {
      responseString: '',
      firstName:'',
      lastName:'',
      id:''
    }
  },
  methods: {
    onInput: function (event) {
      this.myInputValue = event.target.value;
    },
    onSubmit: function (event) {
      console.log('preparing to submit to AWS');
      console.log('id='+this.id);
      console.log('firstName='+this.firstName);
      console.log('lastName='+this.lastName);

      const person = { id: this.id,
        firstName: this.firstName,
        lastName: this.lastName
       };
       
       console.log('Submitting a post API call to AWS');
       console.log('waiting for response');
       this.responseString='loading..'
        axios.post('https://iupnwr22p4.execute-api.us-east-2.amazonaws.com/prod/employee', person)
            .then(response => this.responseString = response.data);

    }
  },
  template: `
    <div>
      <h1>Vue JS form</h1>
    

      <h2>Example</h2>
      <p>
        The following data will be stored in AWD Cloud using AWS API Gateway, AWS Lambda in NO SQL DynamoDB databse
      </p>

  	  <input v-model="id" placeholder="ID"><br/>
      <input v-model="firstName" placeholder="First Name"><br/>
      <input v-model="lastName" placeholder="Last Name"><br/>

      <input type="button" @click="onSubmit" value="Submit"></input>
      <p>
        return value by Component: {{ responseString }}
      </p>

    </div>
  `
}