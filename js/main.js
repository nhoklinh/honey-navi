
//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".js_next");
var minusBtn = $(".js_prew");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".content_cart_added")
    .find(".input-text");
    $n.val(Number($n.val())+1 );
});
var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".content_cart_added")
    .find(".input-text");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }
});