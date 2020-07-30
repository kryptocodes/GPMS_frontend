export const CheckAuth = (user) => {
      if(user && user.role === 1){
        return "faculty"
      }
      if(user && user.role === 2){
        return "security"
      }
      if(user && user.role === 4){
        return "warden"
      }
       else{
         return "student"
      }
}
