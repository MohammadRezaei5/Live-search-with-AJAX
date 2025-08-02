$(document).ready(function () {
  let data = [];

  $.ajax({
    url: "data.json",
    dataType: "json",
    success: function (jsonData) {
      data = jsonData;
      console.log("داده ها: ", data);
    },
    error: function () {
      console.error("خطا در بارگذاری داده");
    },
  });

  $("#search").on("keyup", function () {
    const query = $(this).val().trim();

    $("#results").empty();

    if (query === "") {
      $("#results").removeClass("visible");
      return;
    }

    $("#results").addClass("visible");

    const filtered = data.filter((item) => item.teamName.includes(query));
    console.log(filtered);

    if (filtered.length === 0) {
      $("#results").html("<p>موردی یافت نشد!</p>");
      return;
    }

    filtered.forEach(function (item) {
      const $itemDiv = $('<div class="item"></div>');

      if (item.teamLogo) {
        $itemDiv.append(
          '<img src="' +
            item.teamLogo +
            '" alt="' +
            item.teamName +
            ' Logo" class="team-logo">'
        );
      }

      $itemDiv.append('<span class="team-name">' + item.teamName + "</span>");

      $("#results").append($itemDiv);
    });
  });
});
