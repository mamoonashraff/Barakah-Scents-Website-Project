document.addEventListener('DOMContentLoaded', function() {

    const cartButtons = document.querySelectorAll('.add-cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert("✅ Product has been added to your cart!");
            this.innerText = "Added!";
            this.style.backgroundColor = "#ccc";
            this.style.color = "#000";
            this.style.border = "2px solid #ccc";
        });
    });

    const buyButtons = document.querySelectorAll('.buy-now-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.product-card');
            const productName = card.querySelector('h3').innerText;
            const phoneNumber = "923359764831"; 
            const message = `Hi, I want to order: ${productName}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });

});
const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! We have received your message.`);
            contactForm.reset();

        });
    }
