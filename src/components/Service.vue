<template>
 <!-- <h1>{{firstName}}</h1> -->
 <h1>hello world</h1>
 <div class="card">
   <ul id="ul">
     <h1 class="msg420">message</h1>
     <!-- <li id="id"> 
     
     </li> -->
   </ul>
 </div>


 <div class="name">
  <label for="name">your name </label>
 <input type="text" name="name" id="name"  v-model="name1"/>
  <label id='textlabel' for="msg">your message </label>
 <textarea type="text" cols="12" rows="12" name="name" id="msg" v-model="msg1"/>
  <button @click="submit">send</button>
 </div>
</template>
<script>
export default {
  name: "Service",
  data() {
    return {
      // firstName: "Our Service.বাবুর্চি হতে আমাদের কোর্সগুলো নথিভুক্ত করুন",
      name:'',
      msg:'',
      msg1:'',
      name1:''

     
      
    };
   
  },
 methods:{
      submit(){
           this.msg = this.msg1
        this.name = this.name1
        var get =document.getElementById('ul');
        var li = document.createElement('li')
         li.innerHTML = `<p>From: ${this.name}</p><h3>message:${this.msg}</h3>`;
        get.append(li)
      this.msg1 = ''
      this.name1= ''
        // alert(get)
      }
    }
  
};
</script>

<style scoped> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
}
h1{
    text-align: center;
}
.card{
  /* text-align: center; */
   /* border: 1px solid #476583; */
   margin: 50px auto;
  /* background-color: #2c89; */
  width: 50vw;
  height: auto;
}
.card ul p{
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 25px;

}
.msg420{
  margin-top: 10px;
  
}
li{
  border: 1px solid #2c3e50;
  display: block;
  margin-bottom: 25px;
}


.name{
  display: flex;
  flex-direction: column;
  width: 50vw;
  /* margin-top: 60vh; */
  /* margin-bottom: 10px; */
  margin-bottom: 30px;
  /* text-align: center; */
}
button{
  width: 30%;
  font-size: 18px;
  padding: 8px;
  margin: 0 auto;
  margin-top: 15px;
}
input{
  width: 50%;
  margin: 0 auto;
  height: 28px;
  font-size: 20px;
}
#textlabel{
  margin-top: 20px;
}
textarea{
  resize: none;
  width: 80%;
  font-size: 18px;
  margin: 0 auto;
}
@media screen and (max-width: 880px){
  .name{
  display: flex;
  flex-direction: column;
  width: 80vw;

  margin-bottom: 30px;
  
}
.card{
  /* text-align: center; */
   /* border: 1px solid #476583; */
   margin: 50px auto;
  /* background-color: #2c89; */
  width: 80vw;
  height: auto;
}
input{
  width: 50%;
  margin: 0 auto;
  height: 28px;
  font-size: 17px;
}
}
@media screen and (max-width: 320px){
  .name{
  display: flex;
  flex-direction: column;
  width: 95vw;

  margin-bottom: 30px;
  
}
.card{
  /* text-align: center; */
   /* border: 1px solid #476583; */
   margin: 50px auto;
  /* background-color: #2c89; */
  width: 95vw;
  height: auto;
}
  input{
  width: 60%;
  margin: 0 auto;
  height: 28px;
  font-size: 16px;
}
}
</style>
