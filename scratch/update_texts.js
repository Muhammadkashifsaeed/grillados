const fs = require('fs');

let fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));

fr.NewDishes.description = `Ces plats apportent une nouvelle excitation chez Grillado’s, chacun offrant un mélange de saveurs inoubliable qui rendra chaque visite vraiment spéciale.`;
fr.ChickenSpecials.title = `Les spécialités de poulet de Grillado's`;
fr.ChickenSpecials.desc = `Les plats spéciaux de Grillado’s mettent en avant une sélection unique de recettes de poulet grillé qui révèlent des saveurs audacieuses et des ingrédients frais. Chaque spécialité propose une combinaison soigneusement élaborée de poulet mariné, de viandes et de légumes de saison, grillés à la perfection.`;
fr.Platters.heading = `Les plateaux de Grillado's`;
fr.Platters.description = `Les plateaux de Grillado’s présentent une sélection magnifiquement arrangée de viandes grillées. Idéals pour les repas conviviaux ou copieux, ces plateaux mettent en valeur tout notre savoir-faire du grill.`;
fr.Sandwiches.description = `Nos sandwiches, pitas et wraps offrent une délicieuse variété de saveurs et de textures, parfaites pour un repas ou une collation. Chaque option met en avant des ingrédients frais et de haute qualité, allant des viandes tendres et légumes croquants aux sauces relevées et tartinades savoureuses.`;

fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));

let en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));

en.NewDishes.description = `These dishes bring a new excitement to Grillado’s, each offering an unforgettable blend of flavors that will make every visit truly special.`;
en.ChickenSpecials.title = `Grillado's Chicken Specials`;
en.ChickenSpecials.desc = `Grillado’s special dishes feature a unique selection of grilled chicken recipes that reveal bold flavors and fresh ingredients. Each specialty offers a carefully crafted combination of marinated chicken, meats, and seasonal vegetables, grilled to perfection.`;
en.Platters.heading = `Grillado's Platters`;
en.Platters.description = `Grillado’s platters present a beautifully arranged selection of grilled meats. Ideal for friendly or hearty meals, these platters highlight all our grilling expertise.`;
en.Sandwiches.description = `Our sandwiches, pitas, and wraps offer a delicious variety of flavors and textures, perfect for a meal or a snack. Each option features fresh, high-quality ingredients, ranging from tender meats and crisp vegetables to spicy sauces and savory spreads.`;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
console.log('Done!');
