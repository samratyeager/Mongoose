import mongoose from "mongoose";
const connectdbs = async (Database_Url) => {

    try {
        await mongoose.connect(Database_Url);
        console.log("Database conected.....")
    } catch (error) {
        console.log(Error)
    }
}

export default connectdbs;