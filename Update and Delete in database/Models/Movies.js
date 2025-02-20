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

// const updatebyDoc = async (id)=> { //update({filter}, {what change to be made?})

    // try {
    //     const result = await movieModel.updateOne({_id: id}, {ratings : 1})
    //     console.clear();
    //         console.log(result)
    // } catch (error) {
    //     console.log(error)
    // }
    // }

    // const updatebyDoc = async ()=> { 
    // try {
    //     const result = await movieModel.updateMany({ratings : 5}, {name: "Bankai"})
    //     console.clear();
    //         console.log(result)
    // } catch (error) {
    //     console.log(error)
    // }
    // }

    const updatebyDoc = async ()=> { //delete files.............................................
        try {
            const result = await movieModel.deleteMany({ratings: 5})
            console.clear();
                console.log(result)
        } catch (error) {
            console.log(error)
        }
        }
    

export {updatebyDoc}