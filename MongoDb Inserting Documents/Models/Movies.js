import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: {type: Number, required: true, min: 1, max: 5},
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >=10,
    },
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [{value:{type: String}, published: {type : Date, default: Date.now}}]
})


const movieModel = mongoose.model("movie", moviesSchema);

// for one document.............................................
// const createDoc = async () => {
//     try {
//         //creating new document
//         const m1 = new movieModel({
//             name: "Uncharted : The Thiefs End",
//             ratings: 5,
//             money: 800000,
//             genre: ["Action", "Adveture", "Thrilling"],
//             isActive: true,
//             comments: [{value: "An amazing movie full of plot twist packed with lots of action"}]
//         })
//         const result = await m1.save();
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }


// for many documents.........................
const insertmanyDoc = async ()=> {
//creating many documents
try {
    //creating many document
    const m1 = new movieModel({
        name: "Uncharted : The Thiefs End",
        ratings: 5,
        money: 800000,
        genre: ["Action", "Adventure", "Thrilling"],
        isActive: true,
        comments: [{value: "An amazing movie full of plot twist packed with lots of action"}]
    });
    const m2 = new movieModel({
        name: "Interstellar",
        ratings: 4,
        money: 30000,
        genre: ["Fictional", "Science", "Thrilling"],
        isActive: true,
        comments: [{value: "Movie that makes u realize time"}]
    });
    const m3 = new movieModel({
        name: "Will Smiths",
        ratings: 2,
        money: 12000,
        genre: ["Action", "Fictional", "Thrilling"],
        isActive: true,
        comments: [{value: "Movie with lots of action and comedy"}]
    });
    const m4 = new movieModel({
        name: "Terminator 2009",
        ratings: 3,
        money: 840000,
        genre: ["Plot", "Fictional", "Intresting"],
        isActive: true,
        comments: [{value: "One of the best movie so far from Arnold Schwarzeneggar"}]
    });
    const result = await movieModel.insertMany([m1, m2, m3, m4]);
    console.log(result)
} catch (error) {
    console.log(error)
}
}


export {insertmanyDoc}