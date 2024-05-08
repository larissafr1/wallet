import { Schema, now, model } from "mongoose";

//required: true = OBRIGATÓRIO
const UserSchema = new Schema ({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

export default model("users", UserSchema);