<template>
  <!-- <h1>{{firstName}}</h1> -->
  <h2>
    {{ subject }}
  </h2>
  <div class="form">
    <div class="form-data">
    <label for="firstName">FirstName :</label>
    <input type="text" name="firstName" id="firstName" v-model="firstname" /></div>
    <div class="form-data">
     <label for="LastName">LastName :</label>
    <input type="text" name="LastName" id="LastName" v-model="Lastname" /></div>
    <div class="form-data">
     <label for="Email">&nbsp; &nbsp;Email &nbsp; &nbsp;   :</label>
    <input type="email" name="Email" id="Email" v-model="email" /></div>
    <div class="form-data">
    <label for="Password">Password :</label>
    <input type="text" name="Password" id="Password" v-model="password" /></div>
    
  </div>
  <button @click="submit">submit form</button>
<h1 :style="success == 'yes' ? {'color': 'green'} : {'color' : 'red'}">
    {{result}}
  </h1>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      subject: "Contact Us",
      firstname: "",
      Lastname : '',
      email: '',
      password: '',
      result:'',
      success:'',
    
      // firstName: "Contact Me. এখানে সব রোগের চিকিৎসা হয়",
    };
  },
  methods:{
    submit(){
      
      if(this.firstname === ''){
         this.result = 'please enter your firstname'
         this.success = 'no'
        setTimeout(()=>{
          this.result = ''
        },3000)
        
      }else if(this.Lastname===''){
         this.success = 'no'
         this.result = 'please enter your lastname'
           setTimeout(()=>{
          this.result = ''
        },3000)

      }else if(this.email===''){
         this.success = 'no'
          this.result = 'please enter your email address'
           setTimeout(()=>{
          this.result = ''
        },3000)

      }else if(this.password===''){
         this.success = 'no'
          this.result = 'please enter your password'
           setTimeout(()=>{
          this.result = ''
        },3000)
      }else{
         this.success = 'yes'
          this.result = 'thanks for your information'
         setTimeout(()=>{
          this.result = ''
        },3000)
          this.firstname = "",
          this.Lastname = '',
          this.email  ='',
          this.password = ''
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
h2 {
 font-size: 30px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #2c3e50;
  /* color: #34eb49; */

  font-family: "Bebas Neue", cursive;
  /* text-decoration: underline; */
}
.form {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 21px;
  width: 10%;
  text-align: center;
}
input {
  width: 45%;
  margin-left: 10px;
  font-weight: 25px;
  /* display: flex; */
  height: 30px;
}
.form-data{
  margin: 15px 0 ;
}
button{
  padding: 6px;
  font-size: 16px;
}
@media screen and (max-width: 850px) {
  .form {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 21px;
  width: 20%;
  text-align: center;
}
input {
  width: 60%;
  margin-left: 10px;
  font-weight: 25px;
  /* display: flex; */
  height: 30px;
}
}
@media screen and (max-width: 540px) {
  .form {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 21px;
  width: 90vw;
  text-align: center;
}
input {
  width: 60vw;
  margin-left: 10px;
  font-weight: 25px;
  /* display: flex; */
  height: 30px;
}
}
@media screen and (max-width: 450px) {
  .form {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 21px;
  width: 90vw;
  text-align: center;
  display: block;
}
input {
  width: 60vw;
  margin: 10px auto;
  font-weight: 25px;
  /* display: flex; */
  height: 30px;
}

  
}

</style>
