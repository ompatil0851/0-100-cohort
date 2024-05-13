const zod = require("zod")

function InputValidation(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response)
}

InputValidation({
    email: "ompatil@gmail.com",
    password: "12345678"


})