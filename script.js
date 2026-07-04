function showContactMessage() {
    var name = document.getElementById("customerName").value ;
    alert("Thank you, " + name + "! We will contact you soon.") ;
}


function CalculateDiscount() {
    var amount = parseInt(document.getElementById("amount").value);
    var discount ;

    if (amount >= 1000) {
        discount = amount * 0.10;
    }

    var finalPrice = amount - discount;
    document.getElementById("discountResults").innerHTML = 
    "New price after adding discount = " + finalPrice + " TK";

}

function showPromo() {
    var promo = "NCPROMO2026" ;
    var name = document.getElementById("name").value ;
    alert("Here is your promo "+ name + ": "+ promo) ;
}