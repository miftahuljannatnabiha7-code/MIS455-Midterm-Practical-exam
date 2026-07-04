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


}