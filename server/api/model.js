const { init } = require ('./dbConfig')
const { ObjectId } = require('mongodb')


class User {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const dogsData = await db.collection('users').find().toArray()
                const dogs = dogsData.map(d => new User({ ...d, id: d._id }))
                resolve(dogs);
            } catch (err) {
                console.log(err);
                reject("Error retrieving dogs")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let dogData = await db.collection('users').find({ _id: ObjectId(id) }).toArray()
                let dog = new User({...dogData[0], id: dogData[0]._id});
                resolve (dog);
            } catch (err) {
                reject('Dog not found');
            }
        });
    }

    static create(name, age){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let dogData = await db.collection('users').insertOne({ name, age })
                let newDog = new User(dogData.ops[0]);
                resolve (newDog);
            } catch (err) {
                reject('Error creating dog');
            }
        });
    }
}

module.exports = { User }