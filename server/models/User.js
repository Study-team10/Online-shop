import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Customer"
    }
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema);

