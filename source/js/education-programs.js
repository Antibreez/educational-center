const $toggleBtn = $(".education-programs__toggle-btn");
const $typesBlock = $(".education-programs__types-hidden");

$toggleBtn.on("click", (e) => {
  $typesBlock.slideToggle();
  $(e.currentTarget).toggleClass("opened");
});
