const $triggers = $("[data-trigger]");
const $overlay = $(".modal__overlay");
const $closeBtn = $(".modal__close-btn");

$(document).on("click", ".modal__overlay", function (e) {
  const $target = $(e.target);

  if ($target.parents(".modal__body").length > 0) return;

  $target.parents(".modal").removeClass("js-show");
  $("body").removeClass("js-no-scroll");
});

// $overlay.on("click", (e) => {
//   const $target = $(e.target);

//   if ($target.parents(".modal__body").length > 0) return;

//   $target.parents(".modal").removeClass("js-show");
//   $("body").removeClass("js-no-scroll");
// });

$(document).on("click", ".modal__close-btn", function (e) {
  const $target = $(e.currentTarget);

  $target.parents(".modal").removeClass("js-show");
  $("body").removeClass("js-no-scroll");
});

// $closeBtn.on("click", (e) => {
//   const $target = $(e.currentTarget);

//   $target.parents(".modal").removeClass("js-show");
//   $("body").removeClass("js-no-scroll");
// });

$(document).on("click", "[data-trigger]", function (e) {
  const name = $(e.currentTarget).attr("data-trigger");

  $(`.modal[data-modal='${name}']`).addClass("js-show");
  $("body").addClass("js-no-scroll");
});

// $triggers.on("click", (e) => {
//   const name = $(e.currentTarget).attr("data-trigger");

//   $(`.modal[data-modal='${name}']`).addClass("js-show");
//   $("body").addClass("js-no-scroll");
// });
