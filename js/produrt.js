const orderBtn = document.querySelectorAll('.order-price')
const navIteamti = document.querySelector('.nav-item__ti')
const navP = document.querySelector('.nav-item__ti p')
const navTotal = document.querySelector('.nav-item_order-total')
const navButtonA = document.querySelector('.nav-item_order-button')
const navButtonB = document.querySelector('.nav-item_order-color')
//console.log(navButtonA)
orderBtn.forEach(function(button,index) {
    button.addEventListener('click', function(event){{
        navIteamti.style.left = "-65%"
        var btnIteam = event.target
        var product = btnIteam.parentElement
        var productImg = product.querySelector('.scale_information img').src
        var productName = product.querySelector('.order-write_turmeric').innerText
        var productPrice = product.querySelector('.price').innerText
        //console.log(productImg,productName,productPrice)
        addcart(productImg,productName,productPrice)
        addgood(productImg,productName,productPrice)
        navP.style.display = "none"
        navTotal.style.display = "block"
        navButtonA.style.display = "block"
        navButtonB.style.display = "block"
        button.style.display = "none"
        addmobilecart(productImg,productName,productPrice)
    }})
})

/*---------add hover giỏ hàng ---------*/

function addcart(productImg,productName,productPrice) {
    var addli = document.createElement('li')
    addli.classList.add('nav-item_order-list')
    var licontent = '<a href="#" class="nav-item_order-iteam"><img src="'+productImg+'" alt="" width="60px" height="60px"><div class="nav-item_order-content"><h3>'+productName+'</h3><div class="nav-item_order-content_iteam"><p>1</p>x<span>'+productPrice+'</span>₫</div></div></a><i class="far fa-times-circle"></i>'
    addli.innerHTML = licontent
    var cartul = document.querySelector('ul.nav-item_order')
    //console.log(cartul)
    cartul.append(addli)
    carttotal()
    deleteCart()
}

function carttotal() {
    var cartIteam = document.querySelectorAll('ul.nav-item_order li')
    //console.log(cartIteam)
    var totalC = 0
    var tong = 0
    for (var i=0;i<cartIteam.length;i++){
        var productTt = cartIteam[i].querySelector('.nav-item_order-content_iteam p').innerText
        const y = parseInt(productTt)
        tong = tong + y
        //console.log(tong)
        var productPrice = cartIteam[i].querySelector('span').innerHTML
        //console.log(productPrice.length)
        const z = parseInt(productPrice)
        var totalA = z*1000
        totalC = totalC + totalA
        //console.log(totalC)
    }
    var cartTotalA = document.querySelector('.nav-item_order-total span')
    cartTotalA.innerHTML = totalC.toLocaleString('en-AU')

    var cartSub = document.querySelector('.cart-subtotal_total')
    //console.log(cartSub)
    cartSub.innerHTML = totalC.toLocaleString('en-AU')

    var cartRu = document.querySelector('.cart-subtotal_totals')
    cartRu.innerHTML = totalC.toLocaleString('en-AU')

    cartZero()
    //console.log(cartTotalA)
    var cartTotalB = document.querySelector('.nav-item_icon strong')
    cartTotalB.innerHTML = tong

    var cartTotalC = document.querySelector('.nav_item-peson p')
    cartTotalC.innerHTML = totalC.toLocaleString('en-AU')
}

function deleteCart() {
    var cartIteam = document.querySelectorAll('ul.nav-item_order li')
    for (var i=0;i<cartIteam.length;i++){
        var productXoa = document.querySelectorAll('.nav-item_order-list i')
        productXoa[i].addEventListener('click', function(event) {
            var cartDelete = event.target
            var cartMon = cartDelete.parentElement
            cartMon.remove()
            carttotal()
            //console.log(cartMon)
        })
    }
}

/* ---------căn chỉnh hover giỏ hàng ---------*/

function cartZero() {
    var cartTotalA = document.querySelector('.nav-item_order-total span').innerHTML
    const cytotal = parseInt(cartTotalA)
    if(cytotal == 0) {
        navIteamti.style.left = "-145%"
        navP.style.display = "block"
        navTotal.style.display = "none"
        navButtonA.style.display = "none"
        navButtonB.style.display = "none"
    }
}

/*------add giỏ hàng-------*/

function addgood(productImg,productName,productPrice) {
    var addtr = document.createElement('tr')
    addtr.classList.add('content_cart_item')
    var trcontent = '<td class="product-remove"><i class="far fa-times-circle"></i></td><td class="product-thumbnail"><a href=""><img src="'+productImg+'" alt="" width="75px" height="75px"></a></td><td class="product-name"><a href="">'+productName+'</a></td><td class="product-price"><span class="content_cart-amount js_contotal">'+productPrice+'<span class="content_cart-currencySymbol">₫</span></span></td><td class="product-quantity"><div class="content_cart_added"><button id="prev" class="product_is-form js_prew">-</button><input type="number" id="quantity_61a7660cd58ef" class="input-text" step="1" min="0" max="9999" value="1" title="SL"><button id="next" class="product_is-form js_next">+</button></div></td><td class="product-subtotal"><span class="content_cart-amount js_conment">'+productPrice+'</span><span class="content_cart-currencySymbol">₫</span></td>'
    addtr.innerHTML = trcontent
    var cartbody = document.querySelector('tbody')
    //console.log(cartul)
    cartbody.append(addtr)
    deleteTbody()
}

var cartood = document.querySelector('.cartoods_button')
cartood.addEventListener('click', function() {
    update_amounts()
    inputchange()
})

function inputchange() {
    var cartTbotr = document.querySelectorAll('tbody.js_tbody tr')
    var kp = 0
    var hp = 0
    for (var i=0;i<cartTbotr.length;i++){
        var inputValue = cartTbotr[i].querySelector('input').value
        var y = parseInt(inputValue)
        hp = hp + y
        var priceValue = cartTbotr[i].querySelector('.js_contotal').innerHTML
        const np = parseInt(priceValue)
        var tbotrA = np*1000*inputValue
        kp = kp + tbotrA
    }
    var cartSub = document.querySelector('.cart-subtotal_total')
    //console.log(cartSub)
    cartSub.innerHTML = kp.toLocaleString('en-AU')

    var cartRu = document.querySelector('.cart-subtotal_totals')
    cartRu.innerHTML = kp.toLocaleString('en-AU')

    var cartTotalC = document.querySelector('.nav_item-peson p')
    cartTotalC.innerHTML = kp.toLocaleString('en-AU')

    var cartTotalA = document.querySelector('.nav-item_order-total span')
    cartTotalA.innerHTML = kp.toLocaleString('en-AU')

    var cartTotalB = document.querySelector('.nav-item_icon strong')
    cartTotalB.innerHTML = hp
}

function update_amounts(){
    $('tbody.js_tbody > tr').each(function() {
        var qty = $(this).find('input').val();
        var price = $(this).find('.js_contotal').text();
        var rui = parseInt(price)
        //console.log(rui)
        var amount = (qty*rui*1000)
        $(this).find('.js_conment').text(formatNumber(+amount, '.', ','));
    });
}

function deleteTbody() {
    var cartTbotr = document.querySelectorAll('tbody.js_tbody tr')
    var cartIteam = document.querySelectorAll('ul.nav-item_order li')
    for (var i=0;i<cartTbotr.length;i++){
        //console.log(cartTbotr.length)
        var tbodyXoa = document.querySelectorAll('.product-remove i')
        tbodyXoa[i].addEventListener('click', function(event) {  
            //console.log(tbodyXoa[i].length)
            var tbodyDelete = event.target
            var cartbody = tbodyDelete.parentElement.parentElement
            //console.log(cartbody)
            cartbody.remove()
            update_amounts()
            inputchange()
        })
    }
}

//-------js display with hover------//
const throwJs = document.querySelector('#js_throw')
const wayJs = document.querySelector('#js_way')
const orderTis = document.querySelectorAll('.js_iteam-ti')
const mobileTi = document.querySelector('.modal_cart')


for (const orderTi of orderTis) {
    orderTi.addEventListener('click', function() {
        //console.log(orderTi)
        throwJs.classList.add('open')
        wayJs.classList.add('open')
        navIteamti.style.display = "none"
        mobileTi.style.display = "none"
        incement()
    })
}

/*------nút bấm tăng giảm-------*/

function incement() {
    var plusBtn  = $(".js_next");
    var minusBtn = $(".js_prew");
    var nui = 1;
    var incrementQty = plusBtn.click(function() {
    var $n = $(this).parent(".content_cart_added").find(".input-text");
    $n.val(Number($n.val()) + nui)
    });
    var decrementQty = minusBtn.click(function() {
    var $n = $(this).parent(".content_cart_added").find(".input-text");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal - nui)
    }
    });
}

/*--------add modal cart mobile-------*/

const modalDeleOne = document.querySelector('.modal_nav-cart p')
const modalDeles = document.querySelectorAll('.js_modal-cart_total')

function cartmobileZero() {
    var cartMobileTotalA = document.querySelector('.modal-item_order-total span').innerHTML
    const coptal = parseInt(cartMobileTotalA)
    modalDeles.forEach((modalDele) => {
        if(coptal == 0) {
            modalDele.style.display = "none"
            modalDeleOne.style.display = "block"
        }else{
            modalDele.style.display = "block"
            modalDeleOne.style.display = "none"
        }
    })
}


function addmobilecart(productImg,productName,productPrice) {
    var addmobileli = document.createElement('li')
    addmobileli.classList.add('modal-iteam_order_list')
    var limobilecontent = '<a href="#" class="modal-iteam_order-iteam"><img src="'+productImg+'" alt="" width="60px" height="60px"><div class="modal-iteam_order-content"><h3>'+productName+'</h3><div class="modal-iteam_order-content_iteam"><p>1</p>x<span>'+productPrice+'</span>₫</div></div></a><i class="far fa-times-circle"></i>'
    addmobileli.innerHTML = limobilecontent
    var cartmobileul = document.querySelector('.modal_nav-order')
    cartmobileul.append(addmobileli)
    cartmobiletotal()
    deletemobileCart()
}

function cartmobiletotal() {
    var cartmobileIteam = document.querySelectorAll('.modal_nav-order li')
    var totalMobileC = 0
    var tongMobile = 0
    for (var i=0;i<cartmobileIteam.length;i++){
        var productmobileTt = cartmobileIteam[i].querySelector('.modal-iteam_order-content_iteam p').innerText
        const yy = parseInt(productmobileTt)
        tongMobile = tongMobile + yy
        var productmobilePrice = cartmobileIteam[i].querySelector('span').innerHTML
        //console.log(productPrice.length)
        const zz = parseInt(productmobilePrice)
        var totalmobileA = zz*1000
        totalMobileC = totalMobileC + totalmobileA
        //console.log(totalC)
    }
    var cartmobileTotalA = document.querySelector('.modal-item_order-total span')
    cartmobileTotalA.innerHTML = totalMobileC.toLocaleString('en-AU')

    cartmobileZero()
    //console.log(cartTotalA)
    var cartmobileTotalB = document.querySelector('.nav-item_icon strong')
    cartmobileTotalB.innerHTML = tongMobile
}

function deletemobileCart() {
    var cartmobileIteam = document.querySelectorAll('.modal_nav-order li')
    for (var i=0;i<cartmobileIteam.length;i++){
        var productmobileXoa = document.querySelectorAll('.modal-iteam_order_list i')
        productmobileXoa[i].addEventListener('click', function(event) {
            var cartmobileDelete = event.target
            var cartmobileMon = cartmobileDelete.parentElement
            //console.log(cartmobileMon)
            cartmobileMon.remove()
            cartmobiletotal() 
            //console.log(cartMon)
        })
    }
}
