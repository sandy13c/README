$(function() {

 $("#signup").validate({

 rules: {
    username: {
      required: true,
      minlength: 5
    },

    password: {
      required: true,
      minlength: 7
    },

    confirm: {
      required: true,
      minlength: 7
    }

},
     messages: {
       username:{
         required: "Please enter username",
         minlength: "Username must be minimum 5 characters"
       },
       password: {
         required: "Please confirm password",
         minlength: "Password must be minimum 7 characters"
       },
       confirm: {
         required: "Please confirm password",
         minlength: "Password must be minimum 7 characters"
       }
     },

   });
});
