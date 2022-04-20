/////////////////////////////////////////////////////////////
// Importaciones

const bcrypt = require("bcryptjs/dist/bcrypt");
const { Usuarios } = require("../models/usuario");




/////////////////////////////////////////////////////////////
// Funciones del Authentication


//POST /api/auth/login
const login = async (req,res) => {

   try {

        console.log("POST /api/auth/login")

        const {correo, password} = req.body;

        const usuario = await Usuarios.findOne({correo});


        //Email

        if (!usuario)
            return res.status(400).json({
                msg: "User/Password are invalid. Please try again (Email)"
        })

        //Password
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword)
            return res.status(400).json({
                msg: "User/Password are invalid. Please try again (Password)"
        })


        res.json({
           "msg": "POST /api/auth/logi"
        })
       
   } catch (error) {
        res.status(500).json({
            "msg": error
        })
   }

}





/////////////////////////////////////////////////////////////
// Exportaciones

module.exports = {
   login
}