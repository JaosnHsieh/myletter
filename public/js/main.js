
$("#btnShow").click(function() {
  $.ajax({
      type:"GET",
      url: "/api/getpapers",
      // datatype:"json",
      success:function(data){


        var tbody = $("#mytbody");
        tbody.empty();
        for(var i= 0 ; i < data.length ; i++){

         var tr = $("<tr>")
         var td1 = $("<td>").text(data[i].fromtext);
         var td2 = $("<td>").text(data[i].fromnumber);
         var td3 = $("<td>").text(data[i].totext);
         var td4 = $("<td>").text(data[i].tonumber);
         var td5 = $("<td>").text(data[i].summary);
         tr.append(td1,td2,td3,td4,td5);
         tbody.append(tr);

      }
    },
      complete: function () {
      },
      error: function (xhr, ajaxOptions, thrownError) {
          console.log('error');
          console.log(xhr.responseText);
      }
  });

});


$("#btnAdd").click(function(e) {
    e.preventDefault();
  $.ajax({
      type:"POST",
      url: "/api/paper",
      data:{
        haha:'123'
      },
      data:$("#paperForm").serialize(),
      // datatype:"json",
      success:function(data){
        console.log('got your form data');
      },
      complete: function () {
      },
      error: function (xhr, ajaxOptions, thrownError) {
          console.log('error');
          console.log(xhr.responseText);
      }
  });

});
