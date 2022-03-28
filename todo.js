function contactReport() {
    $('#todoTable').DataTable({})
  }
$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    dataType: "json",
    success: function (response) {
        // console.log(response);
        $("#todoTable").DataTable().destroy();
        $("#todoTable tbody").empty();
        $.each(response, function (indexInArray, val) { 
             $('#todoTable tbody').append(` <tr>
             <td>${val.userId}</td>
             <td>${val.id}</td>
             <td>${val.title}</td>
             <td>${val.completed}</td>
         </tr>
             `);
        });
    },
    complete: () => contactReport()
});

