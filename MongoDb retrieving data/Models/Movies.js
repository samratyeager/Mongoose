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

// const allDoc = async ()=> { //all documents

// try {
//     const result = await movieModel.find();
//     console.clear();
//     result.forEach((movie) => {
//         console.log(movie.name)
//     })
// } catch (error) {
//     console.log(error)
// }
// }


// const byidDoc = async ()=> { //by id

//     try {
//         const result = await movieModel.findById("67add17da9bfb76f5b561e3b", "name");
//         console.clear();
        
//             console.log(result)
        
//     } catch (error) {
//         console.log(error)
//     }
//     }


// const docbysearch = async ()=> { //bysearching without id

//     try {
//         const result = await movieModel.find({$nor: [{money : 800000}, {ratings: 4}]});   //skip(1).limit(2).sort({name : -1})
//         console.clear();
//             console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
//     }

export {docbysearch}