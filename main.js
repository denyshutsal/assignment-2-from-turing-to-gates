"use atrict";

$("img").click(function () {
  let newPath = $(this).attr("alt-pic");
  let newAlt = $(this).attr("alt-alt");
  $(this).attr("src", newPath);
  $(this).attr("alt", newAlt);
});
