function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  let id=getUrlParameter('id')
  console.log(id);

  $.ajax({
      type: "GET",
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
      dataType: "json",
      success: function (response) {
       console.log(response);  
       $('#data').append(`<div class="col-md-12">
       <div class="card">
           <div class="card-body">
               <h6>Id: <b> ${response.id}</b></h6>
               <h6>Name:<b>${response.name}</b></h6>
               <h6>Email:<b>${response.email}</b></h6>
               <h6>Body:<b>${response.body}</b></h6>
           </div>
         </div>

   </div>`); 
      }
  });