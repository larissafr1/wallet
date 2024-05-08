import bcrypt from "bcrypt";
import authRepositary from "../repositories/authRepositary.js";

async function signup(body) {
    //realiza a criptografia
    const hasPassword = bcrypt.hashSync(body.password, 10);

    //verifica se o usuario existe
    const userExist = await authRepositary.findByEmail(body.email);
    if (userExist) throw new Error("User already exists!");

    //cria
    return authRepositary.create({ ...body, password: hasPassword }); 
}

export default {
    signup,
};