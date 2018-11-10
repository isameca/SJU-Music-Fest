$(document).ready(function () {
    $(".event-image").fadeIn();
    $(".buy").fadeIn();
});

$("#date h3").hover(function () {
    $(this).css("color", "#f1c40f")
});

$("#concert-title span").mouseleave(function () {
    $(this).css("color", "white")
})

function ticketSale() {
    let name = prompt("What's your name?");
    let email = prompt("What's your email?");
    let ticketQty = prompt("How many tickets do you want?");
    if (name !== "" || email !== "" || ticketQty !== "") {
        $("#name").html(name);
        $("#email").html(email);
        $("#quantity").html(ticketQty);
        $(".buy h2").html("Congrats! Order Placed!")
    }
}

$(".buy").click(ticketSale);

$(".daily-lineup").click(function () {
    let dataPicture = $(this).attr("data-pictures");
    $("." + dataPicture).slideDown();
});

$(".daily-lineup").dblclick(function () {
    let dataPicture = $(this).att("data-pictures")
    $("." + dataPicture).slideUp();
})