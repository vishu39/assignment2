var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The HungerGames', libraryID: 3245}
];
const items=
    library.filter(library=> library.libraryID===1254)
console.log(items);
