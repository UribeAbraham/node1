const usuario = {
   getUsuario: async (req, resp) => {
      const { usuario } = req.body;
      const token = req.header('Authorization');
      try {
         resp.json({
            ok: true,
            usuarios: usuario,
            token,
            uid: req.uid
         });
      } catch (error) {
         return resp.status(404).json({
            ok: false,
            msg: 'Error sql'
         });
      }
   },
};

module.exports = usuario;
