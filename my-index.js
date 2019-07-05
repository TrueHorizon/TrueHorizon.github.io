function remove() {
  $(".red").click(function() {
    $(this).closest("tr").remove();
  });
}
remove();

$(".add-form").on("submit", function(e) {
  e.preventDefault();
  if (
    ($("input[name=date]").val() == "" || $("input[name=event]").val() == "")
  ) {
    $(".alert").addClass("active");
    $(".remove").click(function() {
      $(".alert").removeClass("active");
    });
  } else {
    var date = $("input[name=date]").val();
    var event = $("input[name=event]").val();
    $(".first-tr").after(
      "<tr><td></td><td>" +
        date +
        "</td><td>" +
        event +
        '</td><td class="static"><span class="button red"><i class="glyphicon glyphicon-remove"></i></span></td></tr>'
    );
    remove();
    $("input[name=date], input[name=event]").val("");
  }
});
