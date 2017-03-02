

$("#list").on("click", function(){

  $.ajax({
  	url:"https://data.nasa.gov/resource/gvk9-iz74.json",
    success:function(response){
    	response.forEach(function(el){
    	   $("ul").append("<li>"+el.center+" "+el.facility+" "+el.zipcode+"</li>");
      })
    }
  });
});
