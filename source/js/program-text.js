const $text = $(".program-card__promo-desc");

if ($text.length > 0) {
  if ($text[0].scrollHeight > $text[0].offsetHeight) {
    $text.next().show();
    console.log($text.next());
  } else {
    $text.next().hide();
  }
}
