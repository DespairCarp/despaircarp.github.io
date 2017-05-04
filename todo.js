var addNewTask = function () {
    var task = $("input").val();
    $(".column").append("<div class= item>"+ task + "</div>");
    
};