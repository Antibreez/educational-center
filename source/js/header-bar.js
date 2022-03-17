const $topBar = $(".wrap-header-top");
const $bottomBar = $(".header-bottom");
const $bar = $(".education-header");
const $nextEl = $bar.next();

const isScrolled = () => {
  return (
    $(window).scrollTop() > $topBar.outerHeight() + $bottomBar.outerHeight()
  );
};

const addSpace = () => {
  $nextEl.css("margin-top", `${$bar.outerHeight()}px`);
};

const removeSpace = () => {
  $nextEl.removeAttr("style");
};

let scrolled = isScrolled();

$(window).on("scroll", () => {
  isScrolled() &&
    !$bar.hasClass("fixed") &&
    $bar.addClass("fixed") &&
    addSpace();
  !isScrolled() &&
    $bar.hasClass("fixed") &&
    $bar.removeClass("fixed") &&
    removeSpace();
});
