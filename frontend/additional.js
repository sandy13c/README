$(function(){
  renderRecipes('recipe');
  function renderRecipes() {
     $.ajax({
         method: "GET",
         url: "http://localhost:3000/rec",
         dataType: "json",
         success: function (response) {
          $.each(response, function(i,recipes){
            let plain =
              "<tr>" +
              "<td>"+ recipes.recipe_id + "</td>" +
              "<td>" + recipes.food_recipe + "</td>" +
              "<td>" + recipes.cook_time + "</td>" +
              "<td>" + recipes.ingridients + "</td>" +
              "<td>" + recipes.cooking_instructions + "</td>"+
              "<td>" + "<button button id = \"DeleteRecipe\" type=\"button\" class=\"btn btn-danger DeleteRecipe\"  data-recipeid=" + recipes.recipe_id + ">Delete</button>" + "</td>" ;
          $("#recipe").append(plain);
      });
    }
    });
  }

    $("#addRecipe").click(function (e){
      e.preventDefault();
           let recipedata = {
             recipe_id: $($("#recipeForm")[0].recipeid).val(),
             food_recipe: $($("#recipeForm")[0].foodrecipe).val(),
             cook_time: $($("#recipeForm")[0].cooktime).val(),
             ingridients: $($("#recipeForm")[0].ingridients).val(),
             cooking_instructions: $($("#recipeForm")[0].cookinginstructions).val(),
           }
           $("#recipeForm").trigger("reset");
           $("#recipeForm").toggle();
           $.ajax({
             method: "POST",
             url: "http://localhost:3000/recone",
             dataType: "json",
             data: recipedata,
         }).always(function(data){
               console.log('always',data);
               renderRecipes();
           });
    });

 $("body").on('click','.DeleteRecipe', function(a) {
   a.preventDefault();
   var recipeId=$(this).data('recipeid');
   $.ajax({
     url: "http://localhost:3000/reci/"+recipeId,
     method: 'DELETE',
     dataType: 'json',
   }).always(function(data){
         console.log(data);
         renderRecipes();
             confirm("Are you sure you want to delete");
 });
 });



  });
