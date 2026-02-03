// const obj ={
//   profile:{
//     name:"krutarth",
//     age:23,
//     email:"iamkrutarth1234@gmail.com"
//   },
//   isAuthenticated:true
// }

// console.log(Object.getPrototypeOf(obj))

// console.log(Object.keys(obj))

// console.log(Object.values(obj))


// console.log(Object.entries(obj))
class Profile{
  constructor(name,age,email){
    this.name=name,
    this.age=age,
    this.email=email
  }
}

class User extends Profile{
  constructor(name,age ,email){
    super(name,age,email)
    // this.profile=userProfile
    this.isAuthenticated=true
  }

  getDetails(){
    return {
      name:this.email,
      age:this.age,
      email:this.email,
      isAuthenticated:this.isAuthenticated
    }
  }
}


const user=new User("krutarth",23,"iamkrutarth1234@gmail")

console.log(user)
console.log("user=>",user.getDetails())
