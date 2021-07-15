const db = connect("mongodb://localhost:27017/toms_db");


db.users.drop()

db.users.insertMany([
    { name: "Pochi", age: 10, favouriteSnack: "antimatter" },
    { name: "Mitzi", age: 2, temperament: "moody" },
    { name: "Shelley", age: 7, breed: "Frenchie" },
    { name: "Clifford", size: "big", colour: "red", owner: "Elizabeth" },
    { name: 'Myshkin', age: 5, bestFriend: 'me', owner: 'me', favouriteToy: "tennis ball", favouriteFood: "people's legs" },
    { name: "Rex", age: 4, dinnerTime: 6, colour: "brown" },
    { name: "Snoopy", age: 5, owner: "Charlie" },
    { name: 'Mochi', age: 3, breed: 'shi-pu', ownerName: 'Naz' },
    { name: 'Masha', age: 5, breed: 'shih-tzu', ownerName: 'Vesna' },
    { name: 'Hendon', age: 2, breed: 'golden retriever', ownerName: 'Vesna' },
    { name: 'Zola', age: 13, breed: 'golden retriever', ownerName: 'Beth' },
    { name: 'Snip', age: 3, breed: 'greyhound' }
])

