// Name: MENA ALICE      Course: HAI113     Semester: 1.2 //


// Sample product data (replace with your own)
const products = [
    { id: 1, name: 'EDP Perfumes', price: 9.20 },
    { id: 2, name: 'Body Sprays', price: 4.99 },
    { id: 3, name: 'Matte Lipstick', price: 3.99 },
    { id: 4, name: 'Pencil EyeLiners', price: 1.99 },
    { id: 1, name: 'Vanishing Creams', price: 3.99 },
    { id: 2, name: 'Mascara', price: 4.99 },
    { id: 3, name: 'Face Scrubs', price: 7.99 },
    { id: 4, name: 'Lip Balms', price: 2.99 }
  ];
  
  // Function to show the Home section
  function showHome() {
    hideAllSections();
    document.getElementById('home').style.display = 'block';
  }

function show_products_list() {
  hideAllSections();
    document.getElementById('product_list').style.display = 'block';
  }

  // Function to show the Products section
function showProducts() {
  hideAllSections();
  document.getElementById('products').style.display = 'block';
  
  fetchProducts(); // Call the fetchProducts function to fetch the products data

  var productsSection = document.getElementById('products');
  productsSection.innerHTML = ''; // Clear any existing content
  productsSection.appendChild(table);
}

// Function to fetch and display products dynamically
function fetchProducts() {
  
  // Simulating an asynchronous API call to fetch products data
  setTimeout(() => {
    // Sample product data (replace with your own)
    const products = [
      { id: 1, name: 'EDP Perfumes', price: 9.20 },
      { id: 2, name: 'Body Sprays', price: 4.99 },
      { id: 3, name: 'Matte Lipstick', price: 3.99 },
      { id: 4, name: 'Pencil EyeLiners', price: 1.99 },
      { id: 1, name: 'Vanishing Creams', price: 3.99 },
      { id: 2, name: 'Mascara', price: 4.99 },
      { id: 3, name: 'Face Scrubs', price: 7.99 },
      { id: 4, name: 'Lip Balms', price: 2.99 }
    ];

    displayProducts(products); // Call the displayProducts function with the fetched products data
  }, 1000); // Simulating a delay of 1 second for the API call
}

// Function to display product cards in the Shop section
function displayProducts(products) {
  const productsSection = document.getElementById('products');
  productsSection.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(addToCartButton);

    productsSection.appendChild(card);
  });
}
    

  let totalPrice = 0
  // Function to show the Cart section
  function showCart() {
    hideAllSections();
    document.getElementById('cart').style.display = 'block';
    
    // Display the accumulated total price in the cart section
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    // Implement logic to display cart items dynamically
  }
  
  // Function to show the About Us section
  function showAbout() {
    hideAllSections();
    document.getElementById('about').style.display = 'block';
  }
  
  // Function to show the Contact section
  function showregform() {
    hideAllSections();
    document.getElementById('regform').style.display = 'block';
  }
  
  // Function to hide all sections
  function hideAllSections() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  }

  // Function to show a specific section and hide the rest
function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}
  
  // Function to add a product to the Cart
function addToCart(product) {
  // Add the product to the Cart (implement your logic here)
  console.log(`Added ${product.name} to the Cart`);
  
  // Accumulate the price of the product in the Cart
  totalPrice += product.price;
  
  // Display the updated total price in the Cart
  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

document.getElementById("purchase-button").addEventListener("click", showAccountOptions);

function showAccountOptions() {
  var hasAccount = confirm("Do you have an account?");
  
  if (hasAccount) {
    showLoginForm();
  } else {
    showRegistrationForm();
  }
}

function showLoginForm() {
  document.getElementById("registration-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function showRegistrationForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("registration-form").style.display = "block";
}
  
  // Call the showHome function to display the Home section by default
  showHome();