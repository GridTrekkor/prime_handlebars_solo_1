$(function () {
  // Grab the template script
  var TemplateScript = $("#AboutTemplate").html();

  // Compile the template
  var Template = Handlebars.compile(TemplateScript);

  // Define our data object
  var Info = {
      "Name" : "Jonathan",
      "Car" : "Toyota Camry",
      "City" : "Roseville",
      "NumberOfChildren" : 1,
      "FavoriteTeam" : "Green Bay Packers",
      "FavoriteBeer" : "Lagunitas",
      "FavoriteColor" : "#00465A"
  };

  // Pass our data to the template
  var CompiledHTML = Template(Info);

  // Add the compiled html to the page
  $(".ContentPlaceholder").html(CompiledHTML);
});