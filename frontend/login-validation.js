$(function() {

   $("#login").validate({
       rules: {
         username: {
           required: true,
           minlength: 5
         },
         password: {
           required: true,
           minlength: 7
         }
       },

       messages: {
         username:  {
           required: "Enter your username",
           minlength: "Username should be minimum 5 characters long"
         },
         password: {
           required: "Enter your password",
           minlength: "Password should be minimum 7 characters long"
         }
       },
   });
});
