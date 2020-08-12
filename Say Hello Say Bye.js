const  sayHelloBye = (name, num)=> {
    if (num == 1){
      return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}`;
    }else{
      return `Bye ${name.charAt(0).toUpperCase() + name.slice(1)}`;
    }
  }