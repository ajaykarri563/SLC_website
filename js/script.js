const menuData = {
    veg: [
      { name: "Aloo Gobi", description: "A flavorful dish made with cauliflower and potatoes cooked with spices.", img: "pictures/Aloo_Gobi.jpg" },
      { name: "Aloo Mutter Masala", description: "Potatoes and peas in a spiced tomato-based curry.", img: "pictures/Aloo_Mutter_Masala.jpg" },
      { name: "Chana Masala", description: "Chickpeas cooked in a spicy tomato-based gravy, garnished with cilantro.", img: "pictures/Chana_Masala.jpg" },
      { name: "Daal Makhani", description: "Creamy black lentils slow-cooked with butter and spices.", img: "pictures/Daal_Makhani.jpg" },
      { name: "Daal Tarka", description: "Yellow lentils tempered with garlic, cumin, and spices.", img: "pictures/Daal_Tarka.jpg" },
      { name: "Dal Soup", description: "A light and flavorful lentil soup seasoned with spices.", img: "pictures/Dal_Soup.jpeg" },
      { name: "Mango Dal", description: "Lentils cooked with tangy mango and mild spices.", img: "pictures/Mango Dal.jpg" },
      { name: "Mango_Pulihora", description: "A tangy rice dish flavored with mango and spices.", img: "pictures/Mango_Pulihora.png" },
      { name: "Mixed Vegetable Curry", description: "A medley of vegetables in a spiced curry sauce.", img: "pictures/Mixed_Vegetables_Curry.jpg" },
      { name: "Mushroom Masala", description: "Mushrooms cooked in a rich, spiced tomato gravy.", img: "pictures/Mushroom_Masala.jpg" },
      { name: "Palak Paneer", description: "Cottage cheese cubes in a creamy spinach gravy.", img: "pictures/Palak_Paneer.jpg" },
      { name: "Baingan Masala", description: "Eggplant cooked with spices and herbs.", img: "pictures/Baingan Masala.png" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in a rich, creamy tomato sauce.", img: "pictures/Paneer_Butter_Masala.jpg" },
      { name: "Paneer Tikka Masala", description: "Grilled cottage cheese in a spiced tomato gravy.", img: "pictures/Paneer_Tikka_Masala.png" },
      { name: "Potato Curry", description: "Spiced potatoes cooked in a flavorful gravy.", img: "pictures/Potato_Curry.png" },
      { name: "Vegetable Biryani", description: "Fragrant basmati rice with mixed vegetables and spices.", img: "pictures/Vegetable_Biryani.jpg" },
      { name: "Vegetable Chowmein", description: "Stir-fried noodles with mixed vegetables and soy sauce.", img: "pictures/Vegetable__Chowmein.jpg" },
      { name: "White Rice", description: "Steamed basmati rice, a staple in Indian cuisine.", img: "pictures/white_rice.png" },
      { name: " veg biryani", description: "Aromatic basmati rice cooked with mixed vegetables and spices.", img: "pictures/veg_biryani.png" },
      { name: "Veg Fried Rice", description: "Stir-fried rice with mixed vegetables and soy sauce.", img: "pictures/Veg_Fried_Rice.png" },
      { name : "Basmati Rice", description: "Fragrant long-grain rice, perfect for biryanis and curries.", img: "pictures/Basmati_Rice.jpg" },
      { name: "curd rice", description: "Steamed rice mixed with yogurt, a cooling dish.", img: "pictures/curd_rice.png" },
      { name: "curd", description: "Fresh yogurt, a cooling and creamy accompaniment.", img: "pictures/curd.png" },
      { name: "chola_masala", description: "Chickpeas cooked in a spiced tomato-based gravy.", img: "pictures/chola_masala.png" },
      { name: "Raitha", description: "A yogurt-based side dish with vegetables and spices.", img: "pictures/Raita.jpg" },
      { name: "veg_pulao", description: "Aromatic basmati rice cooked with mixed vegetables and spices.", img: "pictures/veg_pulao.png" },
      { name: "panashikaya dum biryani", description: "Aromatic basmati rice cooked with panashikaya and spices.", img: "pictures/panashikaya_dum_biyani.png" },
      { name: "Paneer Biryani", description: "Aromatic basmati rice cooked with paneer and spices.", img: "pictures/panner_dum_biryani.png" },
      { name: "mushroom biryani", description: "Aromatic basmati rice cooked with mushrooms and spices.", img: "pictures/mushroom_biryani.png" },
      { name: "Veg Korma", description: "Mixed vegetables in a rich, creamy cashew-based curry.", img: "pictures/Vegetable_Korma.jpg" }
    ],
    nonVeg: [
      { name: "Butter Chicken Masala", description: "Tender chicken cooked in a creamy tomato and butter sauce.", img: "pictures/Butter_Chicken.jpg" },
      { name: "Chicken Biryani", description: "Fragrant basmati rice layered with spiced chicken.", img: "pictures/Chicken_Biryani.jpg" },
      { name: "egg curry", description: "Eggs cooked in a spiced tomato-based gravy.", img: "pictures/egg curry.png" },
      { name: "Chicken Chowmein", description: "Stir-fried noodles with chicken and vegetables.", img: "pictures/Chicken_Chowmein.jpg" },
      { name: "Chicken Karahi", description: "Chicken cooked in a spiced tomato-based sauce with fresh herbs.", img: "pictures/Chicken_Karahi.jpg" },
      { name: "Chicken Korma", description: "Chicken in a creamy, mildly spiced cashew curry.", img: "pictures/Chicken_Korma.gif" },
      { name: "Chicken Madras", description: "Chicken in a spicy, tangy South Indian curry with coconut.", img: "pictures/Chicken_Madras.jpg" },
      { name: "Chicken Saag", description: "Chicken cooked with spinach in a creamy spiced sauce.", img: "pictures/Chicken_Saag.jpg" },
      { name: "Chicken Tandoori", description: "Marinated chicken grilled in a tandoor oven.", img: "pictures/Chicken_Tandoori.jpg" },
      { name: "Chicken Tikka Masala", description: "Grilled chicken pieces in a spiced tomato and yogurt gravy.", img: "pictures/Chicken_Tikka_Masala.jpg" },
      { name: "Chicken Vindaloo", description: "Spicy chicken curry with vinegar and potatoes.", img: "pictures/Chicken_Vindaloo.jpg" },
      { name: "Chilli Chicken", description: "Indo-Chinese style chicken with bell peppers and soy sauce.", img: "pictures/Chilli_Chicken.jpg" },
      { name: "Fish Madras", description: "Fish in a spicy South Indian curry with coconut and tamarind.", img: "pictures/Fish_Madras.jpg" },
      { name: "Garlic Chicken Tikka Tandoori", description: "Chicken tikka marinated with garlic and grilled in a tandoor.", img: "pictures/Garlic_Chicken_Tikka_Tandoori.jpg" },
      { name: "Hot Chicken Wings", description: "Spicy chicken wings marinated and grilled to perfection.", img: "pictures/Hot_Chicken_Wings.jpg" },
      { name: "Khasi ko Masu", description: "Nepali-style goat curry with aromatic spices.", img: "pictures/Khasi_ko_Masu.jpg" },
      { name: "Kukhura ko Masu", description: "Nepali-style chicken curry with traditional spices.", img: "pictures/Kukhura_ko_Masu.jpg" },
      { name: "Lamb Karahi", description: "Lamb cooked in a spiced tomato-based sauce with fresh herbs.", img: "pictures/Lamb_Karahi.jpg" },
      { name: "Lamb Kebab Tandoori", description: "Marinated lamb kebabs grilled in a tandoor oven.", img: "pictures/Lamb_Kebab_Tandoori.jpeg" },
      { name: "Lamb Korma", description: "Lamb in a creamy, mildly spiced cashew curry.", img: "pictures/Lamb_Korma.jpeg" },
      { name: "Lamb Madras Vindaloo", description: "Lamb in a spicy and tangy curry with vinegar.", img: "pictures/Lamb_Madras_Vindaloo.jpg" },
      { name: "Lamb Rogan Josh", description: "Slow-cooked lamb in a rich, aromatic curry with Kashmiri spices.", img: "pictures/Lamb_Rogan_Josh.jpg" },
      { name: "Lamb Saag", description: "Lamb cooked with spinach in a creamy spiced sauce.", img: "pictures/Lamb_Saag.jpg" },
      { name: "Lamb Seekh Kebab", description: "Minced lamb skewers grilled with spices.", img: "pictures/Lamb_Seekh_Kebab.jpg" },
      { name: "Lamb Tikka Masala", description: "Grilled lamb pieces in a spiced tomato and yogurt gravy.", img: "pictures/Lamb_Tikka_Masala.jpg" },
      { name: "Malekhu Fish Curry", description: "Nepali-style fish curry with fresh spices.", img: "pictures/Malekhu_Fish_Curry.jpg" },
      { name: "Mint Chicken Tikka", description: "Chicken tikka marinated with mint and grilled.", img: "pictures/Mint_Chicken_Tikka.jpg" },
      { name: "Mutton Biryani", description: "Fragrant basmati rice layered with tender mutton and spices.", img: "pictures/Mutton biryani.png" },
      { name: "Prawn Biryani", description: "Fragrant basmati rice layered with prawns and spices.", img: "pictures/Prawn_Biryani.jpg" },
      { name: "Prawn Chowmein", description: "Stir-fried noodles with prawns and vegetables.", img: "pictures/Prawn_Chowmein.png" },
      { name: "Prawn Jalfrezi", description: "Prawns cooked with bell peppers in a spicy tomato sauce.", img: "pictures/Prawn_Jalfrezi.png" },
      { name: "Prawn Masala", description: "Prawns cooked in a spicy and tangy tomato-based gravy.", img: "pictures/Prawn_Masala.jpg" }
    ],
    tiffin: [
      { name: "Idly", description: "Steamed rice cakes, a South Indian breakfast staple, served with chutney.", img: "pictures/idly.png" },
      { name: "Dosa", description: "Crispy fermented rice and lentil pancake, served with sambar.", img: "pictures/Dosa.png" },
      { name: "Vada", description: "Crispy lentil donuts, served with coconut chutney and sambar.", img: "pictures/Vada.png" },
      { name: "Puri", description: "Deep-fried bread served with a side of vegetable curry.", img: "pictures/puri.png" },
      { name: "upma", description: "Savory semolina dish cooked with vegetables and spices.", img: "pictures/upma.png" },
      { name: "Bonda", description: "Spiced potato balls coated in gram flour batter and deep-fried.", img: "pictures/bonda.png" },
      { name: "Onion Bonda", description: "onion bonda with a unique online-inspired twist.", img: "pictures/Online bonda.png" }
    ],
    snacks: [
      { name: "Meat Momo", description: "Steamed dumplings filled with spiced minced meat.", img: "pictures/Meat_Momo.jpg" },
      { name: "Noodle", description: "Indo-Chinese style noodles with light seasoning.", img: "pictures/Noodle.jpg" },
      { name: "Paneer Tikka", description: "Grilled marinated cottage cheese skewers.", img: "pictures/Paneer_Tikka.png" },
      { name: "masala_vada", description: "Spiced potato balls coated in gram flour batter and deep-fried.", img: "pictures/Masala Vada.png"},
      { name: "Onion Bhaji", description: "Crispy onion fritters made with gram flour and spices.", img: "pictures/Onion_Bhaji.jpg" },
      { name: "Papadum 2 stuks", description: "Crispy lentil wafers, 2 pieces, served with chutney.", img: "pictures/Papadum_2_stuks.jpg" },
      { name: "Vegetable Momo", description: "Steamed dumplings filled with mixed vegetables.", img: "pictures/Vegetable_Momo.jpg" },
      { name: "veg spring roll", description: "Crispy spring rolls filled with mixed vegetables.", img: "pictures/veg_spring_roll.png" },
      { name: "crispy veg starter", description: "Crispy vegetable starter with a mix of spices.", img: "pictures/crispy veg.png" },
      { name: "Sabudana Snacks", description: "Crispy snacks made from tapioca pearls, spiced and fried.", img: "pictures/Sabudana Snacks.png" },
      { name: "veg cutlet", description: "Spiced vegetable patties, crispy on the outside and soft inside.", img: "pictures/veg cutlet.png" },
      { name : "Mixed veg lollipop", description: "Crispy vegetable lollipops with a mix of spices.", img: "pictures/Mixed Veg Lollipop.png" },
      { name: "Veg Pakora", description: "Crispy fritters made with mixed vegetables and gram flour batter.", img: "pictures/Veg_Pakora.png" },
      { name: "vegan stack", description: "A sweet made from layers of thin pastry, filled with nuts and sugar.", img: "pictures/vegan Satcks.png" },
      { name : "Mirchi Bajji", description: "Spicy green chilies stuffed with spiced potato filling and deep-fried.", img: "pictures/Mirchi Bajji.png" },
      { name: "Vegetable Samosa 2 stuks", description: "Crispy pastries filled with spiced vegetables, 2 pieces.", img: "pictures/Vegetable_Samosa_2_stuks.png" }


    ],
    sweets: [
      { name: "Double Ka Meetha", description: "A Hyderabadi bread pudding soaked in saffron-infused milk.", img: "pictures/Double_kaMeeta.png" },
      { name: "Kheer", description: "A creamy rice pudding flavored with cardamom and garnished with nuts.", img: "pictures/Kheer.jpg" },
      { name: "Gulab Jamun", description: "Soft and syrupy milk-based dumplings, a classic Indian dessert.", img: "pictures/Gulab Jamun.png" },
      { name: "Ras Malai", description: "Soft cheese dumplings soaked in sweetened milk, garnished with pistachios.", img: "pictures/Ras Malai.png" },
      { name: "Rasogolla", description: "Spongy cheese balls soaked in sugar syrup, a Bengali delicacy.", img: "pictures/Rasogolla.png" },
      { name: "Laddu", description: "Sweet round balls made from flour, sugar, and ghee, often flavored with cardamom.", img: "pictures/Laddu.png" },
      { name: "Barfi", description: "A sweet made from condensed milk and sugar, often flavored with nuts.", img: "pictures/Barfi.png" },
      { name: "Jalebi", description: "Crispy spirals soaked in sugar syrup, a popular Indian sweet.", img: "pictures/Jalebi.png" },
      { name: "pongal", description: "A traditional South Indian sweet made from rice and jaggery.", img: "pictures/pongal.png" },
      { name: "rava kasari", description: "A sweet made from semolina, sugar, and ghee, flavored with cardamom.", img: "pictures/rava_kesari.png" },
      { name: " Fruit Custard", description: "A creamy dessert made with mixed fruits and custard sauce.", img: "pictures/Fruit_Custard.png" },
      { name: " sweet paan", description: "A sweet made from betel leaves, filled with a mixture of nuts and sugar.", img: "pictures/sweet paan.png" }
    ],
    juicies: [
      { name: "Mango Juice", description: "Freshly squeezed mango juice, sweet and refreshing.", img: "pictures/Mango_juice.png" },
      { name: "Orange Juice", description: "Freshly squeezed orange juice, tangy and tangy.", img: "pictures/Orange_juice.png" },
      { name: "Lemon Juice", description: "Freshly squeezed lemon juice, tangy and tangy.", img: "pictures/lemon_juice.png" },
      { name: "Pineapple Juice", description: "Freshly squeezed pineapple juice, tangy and tangy.", img: "pictures/Pineapple_juice.png" },
      { name: "Watermelon Juice", description: "Freshly squeezed watermelon juice, tangy and tangy.", img: "pictures/Watermelon_juice.png" },
      { name: "Lassi", description: "A refreshing yogurt-based drink, sweet or salty.", img: "pictures/Lassi_juice.png" },
      { name: "Fruit Punch", description: "A mix of various fruit juices, sweet and tangy.", img: "pictures/Fruit_punch_juice.png" },
      { name: "Mango Lassi", description: "A refreshing yogurt-based drink with mango flavor.", img: "pictures/Mango_Lassi_Juice.png" }
    ],
    Fry: [
        { name : "bendri fry", description: "Spicy and crispy fried okra, a popular Indian snack.", img: "pictures/Bhindi Fry.png" },
        { name : "Aratikaya fry", description: "Spicy and crispy fried raw banana, a popular Indian snack.", img: "pictures/Aratikaya fry.png" },
        { name: "Fish_fry", description: "Spicy fried fish marinated with traditional spices.", img: "pictures/fish_fry.png" },
        { name: "Prawns_fry", description: "Spicy fried prawns marinated with traditional spices.", img: "pictures/prawns_fry.png" },
        { name: "egg_fry", description: "Spicy fried eggs marinated with traditional spices.", img: "pictures/egg_fry.png" },
        {name: "panner fry", description: "Spicy fried paneer marinated with traditional spices.", img: "pictures/panner fry.png" },
        { name: " Mutton_fry", description: "Spicy fried mutton marinated with traditional spices.", img: "pictures/Mutton_fry.png" },
        { name : "Dondakaya Fry", description: "Spicy and crispy fried ivy gourd, a popular Indian snack.", img: "pictures/Dondakaya fry.png" },
        { name: "Apolla fish fry", description: "Spicy fried fish marinated with traditional spices.", img: "pictures/Apolla fish fry.png" },
        { name: " chicken fry", description: "A sweet made from layers of thin pastry, filled with nuts and sugar.", img: "pictures/chicken_fry.png" },
        { name : "Gobi fry", description: "Spicy and crispy fried cauliflower, a popular Indian snack.", img: "pictures/Gobi fry.png" },
        { name : "Stuffed brinjal fry", description: "Spicy and crispy fried stuffed eggplant, a popular Indian snack.", img: "pictures/Stuffed brinjal fry.png" },
        { name : "Potato fry", description: "Spicy and crispy fried potatoes, a popular Indian snack.", img: "pictures/Potato_fry.png" },
    ],

    pickles: [
      { name: "Lemon Pickle", description: "Tangy and spicy lemon pickle with a hint of sweetness.", img: "pictures/Lemon_Pickle.png" },
      { name: "Mango Pickle", description: "Traditional Indian mango pickle with robust spices.", img: "pictures/Mango_Pickle.png" },
      { name: "Mixed Vegetable Pickle", description: "A medley of vegetables preserved in spicy masala.", img: "pictures/Mixed_Veg_Pickle.png" },
      { name: "Garlic Pickle", description: "Spicy and tangy garlic pickle, perfect with any meal.", img: "pictures/Garlic_Pickle.png" },
      { name: "Dosakaya Avakaya", description: "A spicy and tangy pickle made from dosakaya (yellow cucumber).", img: "pictures/Dosakaya Avakaya.png" },  
      { name: "gongura_pickle", description: "A spicy and tangy pickle made from Gongura leaves.", img: "pictures/gongura_pickle.png" }
    ],
    Ice_Creams: [
      { name: "Vanilla Ice Cream", description: "Classic vanilla ice cream, creamy and delicious.", img: "pictures/Vanilla_Ice_Cream.png" },
      { name: "Chocolate Ice Cream", description: "Rich chocolate ice cream, a favorite for chocolate lovers.", img: "pictures/Chocolate_Ice_Cream.png" },
      { name: "Strawberry Ice Cream", description: "Refreshing strawberry ice cream with real fruit pieces.", img: "pictures/Strawberry_Ice_Cream.png" },
      { name: "Mango Ice Cream", description: "Creamy mango ice cream made with fresh mango pulp.", img: "pictures/Mango_Ice_Cream.png" },
      { name: "Pistachio Ice Cream", description: "Nutty pistachio ice cream with a rich flavor.", img: "pictures/Pistachio_Ice_Cream.png" }
    ]
};

// Function to format category names for display
function formatCategoryName(category) {
  if (category === 'Ice_Creams') return 'Ice Creams';
  return category.charAt(0).toUpperCase() + category.slice(1).replace(/_/g, ' ');
}

// Function to render menu items for a given category
function renderMenuItems(category) {
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) {
    console.error('Menu grid element not found');
    return;
  }
  menuGrid.innerHTML = ''; // Clear existing items

  const items = menuData[category] || [];
  if (items.length === 0) {
    menuGrid.innerHTML = '<p>No items available in this category.</p>';
    return;
  }

  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'menu-item';
    itemDiv.innerHTML = `
      <img class="item-photo" src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150'">
      <h3 class="item-name">${item.name}</h3>
    `;
    itemDiv.addEventListener('click', () => showPopup(item));
    menuGrid.appendChild(itemDiv);
  });
}

// Function to show popup with item details
function showPopup(item) {
  const popup = document.getElementById('item-popup');
  if (!popup) {
    console.error('Popup element not found');
    return;
  }
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const popupImage = document.getElementById('popup-image');

  if (!popupTitle || !popupDescription) {
    console.error('Popup title or description element not found');
    return;
  }

  popupTitle.textContent = item.name;
  popupDescription.textContent = item.description;
  if (popupImage) {
    popupImage.src = item.img;
    popupImage.alt = item.name;
    popupImage.onerror = () => { popupImage.src = 'https://via.placeholder.com/150'; };
  }
  popup.style.display = 'block';
}

// Function to close popup
function closePopup() {
  const popup = document.getElementById('item-popup');
  if (popup) {
    popup.style.display = 'none';
  }
}

// Guest login simulation
function guestLogin() {
  alert("welcome to sri laxmi catering services");
  const guestButton = document.getElementById('guest-login');
  if (guestButton) {
    guestButton.textContent = "Hello, Guest";
    guestButton.disabled = true;
  }
}

// Initialize the menu with the default category (veg) on page load
document.addEventListener('DOMContentLoaded', () => {
  renderMenuItems('veg');

  // Add event listeners to category buttons
  const categoryButtons = document.querySelectorAll('#category-buttons button');
  if (!categoryButtons.length) {
    console.error('No category buttons found');
    return;
  }

  categoryButtons.forEach(button => {
    const category = button.getAttribute('data-category');
    if (!menuData[category]) {
      console.warn(`Category ${category} not found in menuData`);
      button.disabled = true;
      return;
    }
    button.textContent = formatCategoryName(category); // Update button text
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderMenuItems(category);
    });
  });

  // Set default active button
  const vegButton = document.querySelector('#category-buttons button[data-category="veg"]');
  if (vegButton) vegButton.classList.add('active');

  // Add event listener to close popup button
  const closePopupButton = document.getElementById('close-popup');
  if (closePopupButton) {
    closePopupButton.addEventListener('click', closePopup);
  } else {
    console.error('Close popup button not found');
  }

  // Add event listener to guest login button
  const guestLoginButton = document.getElementById('guest-login');
  if (guestLoginButton) {
    guestLoginButton.addEventListener('click', guestLogin);
  } else {
    console.error('Guest login button not found');
  }
});