$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "json",
    success: function (response) {
        $.each(response, function (indexInArray, value) { 
            console.log(value);
             $('#appendData').append(`<div class="col-md-6">
             <div class="card">
                 <div class="card-body">
                   <h5 class="card-title">${value.title}</h5>
                   <p class="card-text">${value.body}</p>
                   <a href="comments.html?id=${value.id}" class="btn btn-primary mb-3">View</a>
                 </div>
               </div>
         </div>
             `);
        });
    }
});
