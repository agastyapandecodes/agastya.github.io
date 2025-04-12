document.addEventListener('DOMContentLoaded', () => {
    // --- Essential Elements ---
    const translateButton = document.getElementById('translateButton');
    const cartRowsContainer = document.querySelector('.cartRows');
    const cartTotalPriceElement = document.querySelector('.carttotalprice');

    const translatableElementsSelector = 'header h1, .food-items h2, .shopItem .dressName, .cartItemButton, #cartBox h2, #cartItemHeadingText span, .carttotaltitle, #checkoutButton, footer p, .cart-item-title, .removebutton';

    
    let currentLanguage = 'en'; // english first language that pop ups

    // 
    function storeOriginalText(element) {
        const text = element.textContent?.trim(); // Use optional chaining
        if (text && !element.dataset.originalText) {
            element.dataset.originalText = text;
        }
    }

    // 
    function getOriginalText(element) {
        return element.dataset.originalText || element.textContent?.trim(); // Use optional chaining
    }

    // --- Translation Function: English to Hindi ---
    function translateToHindi() {
        const elements = document.querySelectorAll(translatableElementsSelector);
        elements.forEach(item => {
            if (!item) return; // Skip if element doesn't exist
            storeOriginalText(item);
            const originalText = getOriginalText(item);
            if (!originalText) return; // Skip if no text

            let translation = '';
            // --- If/Else If Chain for English to Hindi ---
            if (originalText === 'Flavors of India') translation = 'भारत के स्वाद';
            else if (originalText === 'Appetizers') translation = 'शुरुआत';
            else if (originalText === 'Potato Samosa (2 pc)') translation = 'आलू समोसा (२ पीस)';
            else if (originalText === 'Vegetable Pakora') translation = 'सब्जी पकोड़ा';
            else if (originalText === 'Main Courses (Vegetarian)') translation = 'मुख्य व्यंजन (शाकाहारी)';
            else if (originalText === 'Paper Dosa') translation = 'पेपर डोसा';
            else if (originalText === 'Paneer Makhani') translation = 'पनीर मखनी';
            else if (originalText === 'Chana Masala') translation = 'छोले मसाला';
            else if (originalText === 'Indian Salad') translation = 'भारतीय सलाद';
            else if (originalText === 'Main Courses (Non-Vegetarian)') translation = 'मुख्य व्यंजन (मांसाहारी)';
            else if (originalText === 'Butter Chicken') translation = 'बटर चिकन';
            else if (originalText === 'Tandoor Chicken') translation = 'तंदूर चिकन';
            else if (originalText === 'Breads') translation = 'ब्रेड';
            else if (originalText === 'Garlic Naan') translation = 'गार्लिक नान';
            else if (originalText === 'Plain Naan') translation = 'सादा नान';
            else if (originalText === 'Rice') translation = 'चावल';
            else if (originalText === 'Jeera Rice') translation = 'जीरा चावल';
            else if (originalText === 'Veg Biryani') translation = 'वेज बिरयानी';
            else if (originalText === 'Mutton Biryani') translation = 'मटन बिरयानी';
            else if (originalText === 'Desserts') translation = 'मिठाई';
            else if (originalText === 'Hot Jalebi') translation = 'गरम जलेबी';
            else if (originalText === 'Gulab Jamun (2 pc)') translation = 'गुलाब जामुन (२ पीस)';
            else if (originalText === 'Add to Cart') translation = 'कार्ट में डालें';
            else if (originalText === 'Cart') translation = 'कार्ट';
            else if (originalText === 'ITEM') translation = 'आइटम';
            else if (originalText === 'PRICE') translation = 'कीमत';
            else if (originalText === 'QTY') translation = 'मात्रा';
            else if (originalText === 'Total') translation = 'कुल';
            else if (originalText === 'Checkout') translation = 'चेक आउट';
            else if (originalText === 'Remove') translation = 'हटाएं';
            else if (originalText === '© 2025 SILC - The Flavors of India - Agastya Pande 2025.') translation = '© 2025 SILC - भारत के स्वाद - अगस्त्य पांडे 2025.';
            // done ifelse

            if (translation) {
                item.textContent = translation;
            }
        });
        currentLanguage = 'hi';
        translateButton.textContent = 'EN'; // switch back
        storeOriginalText(translateButton);
    }

    
    function translateToEnglish() {
        const elements = document.querySelectorAll(translatableElementsSelector);
        elements.forEach(item => {
            if (!item) return;
            const currentText = item.textContent?.trim();
            const originalEnglish = getOriginalText(item); 
            if (!originalEnglish) return; 

           
            item.textContent = originalEnglish;
        });
        currentLanguage = 'en';
        translateButton.textContent = 'HI'; //  switch to Hindi
        storeOriginalText(translateButton);
    }

    // -Cart 

    function addItemToCart(title, price, imageSrc) {
        
        const existingCartItemTitles = cartRowsContainer.querySelectorAll('.cart-item-title');
        for (let i = 0; i < existingCartItemTitles.length; i++) {
             
            if (getOriginalText(existingCartItemTitles[i]) === title) {
                alert( (currentLanguage === 'hi' ? 'यह आइटम पहले से ही कार्ट में है।' : 'This item is already in the cart.') );
                return; 
            }
        }

        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-row'); 

        
        let removeButtonText = 'Remove';
        let itemTitleText = title; // Start with English

        
        const cartRowContents = `
            <div class="cart-item-title">
                <img class="cartImage" src="${imageSrc}" alt="${itemTitleText}">
                <span>${itemTitleText}</span>
            </div>
            <span class="cart-price">${price}</span>
            <div class="cartQuantity">
                <input class="quantity-input" type="number" value="1" min="1">
                </div>
            <button class="removebutton" type="button">${removeButtonText}</button>
        `;
        

        cartRow.innerHTML = cartRowContents;
        cartRowsContainer.append(cartRow);

       
        const newTitleSpan = cartRow.querySelector('.cart-item-title span');
        const newRemoveButton = cartRow.querySelector('.removebutton');

        
        if (newTitleSpan) storeOriginalText(newTitleSpan);
        if (newRemoveButton) storeOriginalText(newRemoveButton);

       
        if (currentLanguage === 'hi') {
             if(newTitleSpan){
                  
                  translateToHindiSpecific(newTitleSpan);
             }
             if(newRemoveButton) {
                  newRemoveButton.textContent = 'हटाएं'; 
             }
        }

        updateCartTotal(); 
    }

    
    function translateToHindiSpecific(item) {
         if (!item) return;
         const originalText = getOriginalText(item);
         if (!originalText) return;

         let translation = '';
         
         if (originalText === 'Flavors of India') translation = 'भारत के स्वाद';
         else if (originalText === 'Appetizers') translation = 'शुरुआत';
         else if (originalText === 'Potato Samosa (2 pc)') translation = 'आलू समोसा (२ पीस)';
         else if (originalText === 'Vegetable Pakora') translation = 'सब्जी पकोड़ा';
         else if (originalText === 'Main Courses (Vegetarian)') translation = 'मुख्य व्यंजन (शाकाहारी)';
         else if (originalText === 'Paper Dosa') translation = 'पेपर डोसा';
         else if (originalText === 'Paneer Makhani') translation = 'पनीर मखनी';
         else if (originalText === 'Chana Masala') translation = 'छोले मसाला';
         else if (originalText === 'Indian Salad') translation = 'भारतीय सलाद';
         else if (originalText === 'Main Courses (Non-Vegetarian)') translation = 'मुख्य व्यंजन (मांसाहारी)';
         else if (originalText === 'Butter Chicken') translation = 'बटर चिकन';
         else if (originalText === 'Tandoor Chicken') translation = 'तंदूर चिकन';
         else if (originalText === 'Breads') translation = 'ब्रेड';
         else if (originalText === 'Garlic Naan') translation = 'गार्लिक नान';
         else if (originalText === 'Plain Naan') translation = 'सादा नान';
         else if (originalText === 'Rice') translation = 'चावल';
         else if (originalText === 'Jeera Rice') translation = 'जीरा चावल';
         else if (originalText === 'Veg Biryani') translation = 'वेज बिरयानी';
         else if (originalText === 'Mutton Biryani') translation = 'मटन बिरयानी';
         else if (originalText === 'Desserts') translation = 'मिठाई';
         else if (originalText === 'Hot Jalebi') translation = 'गरम जलेबी';
         else if (originalText === 'Gulab Jamun (2 pc)') translation = 'गुलाब जामुन (२ पीस)';
         

         if (translation) {
             item.textContent = translation;
         } else {
              item.textContent = originalText; 
         }
    }


    function updateCartTotal() {
        let total = 0;
        const cartRows = cartRowsContainer.querySelectorAll('.cart-row');
        cartRows.forEach(cartRow => {
            const priceElement = cartRow.querySelector('.cart-price');
            const quantityElement = cartRow.querySelector('.quantity-input');
            if (priceElement && quantityElement) {
                const price = parseFloat(priceElement.innerText.replace('$', ''));
                const quantity = parseInt(quantityElement.value);
                if (!isNaN(price) && !isNaN(quantity)) {
                    total += price * quantity;
                }
            }
        });
        cartTotalPriceElement.innerText = `$${total.toFixed(2)}`;
    }

    function removeCartItem(event) {
        const buttonClicked = event.target;
        const cartRow = buttonClicked.closest('.cart-row');
        if (cartRow) {
            cartRow.remove();
            updateCartTotal();
        }
    }

    function quantityChanged(event) {
        const input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1; 
        }
        updateCartTotal();
    }

    

    function ready() {
        // add to cart
        const addToCartButtons = document.getElementsByClassName('cartItemButton');
        for (let i = 0; i < addToCartButtons.length; i++) {
            addToCartButtons[i].addEventListener('click', addToCartClicked);
        }

        //
        if (cartRowsContainer) {
            cartRowsContainer.addEventListener('click', (event) => {
                if (event.target.classList.contains('removebutton')) {
                    removeCartItem(event);
                }
                
            });
            cartRowsContainer.addEventListener('change', (event) => {
                 if (event.target.classList.contains('quantity-input')) {
                    quantityChanged(event);
                }
            });
        }

        // Checkout Button
        const checkoutButton = document.getElementById('checkoutButton');
        if (checkoutButton) {
            checkoutButton.addEventListener('click', checkoutClicked);
        }

        // Translate Button
        if (translateButton) {
             translateButton.addEventListener('click', () => {
                 if (currentLanguage === 'en') {
                     translateToHindi();
                 } else {
                     translateToEnglish();
                 }
             });
        }

        updateCartTotal(); // Initialize total
    }

    
    function addToCartClicked(event) {
        const button = event.target;
        const shopItem = button.closest('.shopItem');
        if (shopItem) {
            const titleElement = shopItem.querySelector('.dressName');
            const priceElement = shopItem.querySelector('.priceVal');
            const imageElement = shopItem.querySelector('.imgName');

            if (titleElement && priceElement && imageElement) {
                const title = titleElement.innerText; // Get current displayed text
                const price = priceElement.innerText;
                const imageSrc = imageElement.src;
                addItemToCart(title, price, imageSrc); // Pass displayed title
            }
        }
    }

    // Checkout logic (same as before)
    function checkoutClicked() {
         if (!cartRowsContainer || !cartRowsContainer.hasChildNodes()) {
              const alertMsg = currentLanguage === 'hi' ? 'आपकी कार्ट खाली है!' : 'Your cart is empty!';
             alert(alertMsg);
             return;
         }
         // Clear cart visual
         while (cartRowsContainer && cartRowsContainer.firstChild) {
             cartRowsContainer.removeChild(cartRowsContainer.firstChild);
         }
         updateCartTotal(); // Update total to $0.00

         // Show thank you message
         const container = document.querySelector('.container');
         if (container) {
              let thankYouHTML = '';
             if (currentLanguage === 'hi') {
                 thankYouHTML = `
                     <div id="thankYouMessage" style="background-color: rgba(255, 255, 255, 0.95); padding: 2rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center; margin: 2rem auto; max-width: 600px;">
                         <h1>आपका ऑर्डर देने के लिए धन्यवाद!</h1>
                         <p>आपका स्वादिष्ट भारतीय भोजन रास्ते में है।</p>
                         <p style="margin-top: 1.5rem;"><a href="#" onclick="location.reload()" style="color: #008000; text-decoration: none; font-weight: bold;">दूसरा ऑर्डर दें</a></p>
                     </div>`;
             } else {
                 thankYouHTML = `
                     <div id="thankYouMessage" style="background-color: rgba(255, 255, 255, 0.95); padding: 2rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center; margin: 2rem auto; max-width: 600px;">
                         <h1>Thank You for Your Order!</h1>
                         <p>Your delicious Indian food is on its way.</p>
                          <p style="margin-top: 1.5rem;"><a href="#" onclick="location.reload()" style="color:rgb(3, 3, 129); text-decoration: none; font-weight: bold;">Place another order</a></p>
                     </div>`;
             }
             container.innerHTML = thankYouHTML;
              if(translateButton) translateButton.style.display = 'none'; // Hide button
         } else {
             alert("Thank you for your order!"); // Fallback
         }
     }

    // --- Initial Setup ---
    function initializePage() {
         // Store original text for initial elements
         document.querySelectorAll(translatableElementsSelector).forEach(storeOriginalText);
         if (translateButton) {
            storeOriginalText(translateButton);
            translateButton.textContent = 'HI'; // Initial state offers translation to Hindi
         }
         ready(); // Initialize cart listeners and total
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        initializePage();
    }

}); // End DOMContentLoaded wrapper