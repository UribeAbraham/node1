module.exports = {

   getContacts: async (req, resp) => {
      try {
         const { tipo } = req.body;

         const contactos=[
            { id:1, nombre: "contacto 1", telefono: "1234567890", correo: "mail@mail.com", tipo: 1 },
            { id:2, nombre: "contacto 2", telefono: "1234567890", correo: "mail@mail.com", tipo: 1 },
            { id:3, nombre: "contacto 3", telefono: "1234567890", correo: "mail@mail.com", tipo: 1 },
            { id:4, nombre: "contacto 4", telefono: "1234567890", correo: "mail@mail.com", tipo: 1 },
            { id:5, nombre: "contacto 5", telefono: "1234567890", correo: "mail@mail.com", tipo: 1 },
            { id:6, nombre: "contacto 6", telefono: "1234567890", correo: "mail@mail.com", tipo: 2 },
            { id:7, nombre: "contacto 7", telefono: "1234567890", correo: "mail@mail.com", tipo: 2 },
            { id:8, nombre: "contacto 8", telefono: "1234567890", correo: "mail@mail.com", tipo: 2 },
            { id:9, nombre: "contacto 9", telefono: "1234567890", correo: "mail@mail.com", tipo: 2 },
            { id:10, nombre: "contacto 10", telefono: "1234567890", correo: "mail@mail.com", tipo: 2 },
         ]

         let results=tipo?contactos.filter((x)=>{
            return x.tipo==tipo
         }):contactos;
         
         if (results.length==0) {
            return resp.json({
               ok: false,
               contactos: [],
               msg: 'Sin resultados'
            });
         }

         resp.json({
            ok: true,
            contactos: results
         });
      } catch (error) {
         return resp.status(404).json({
            ok: false,
            msg: 'Error sql'
         });
      }
   },

   updateContact: async (req, resp) => {
      try {
         const { id, nombre, telefono, correo, tipo } = req.body;
         let result={
            id:id, nombre: nombre, telefono: telefono, correo: correo, tipo: tipo 
         }
         resp.json({
            ok: true,
            contactos: result
         });
      } catch (error) {
         return resp.status(404).json({
            ok: false,
            msg: 'Error sql'
         });
      }
   },

   addContact: async (req, resp) => {
      try {
         const { nombre, telefono, correo, tipo } = req.body;
         let result={
            nombre: nombre, telefono: telefono, correo: correo, tipo: tipo 
         }
         resp.json({
            ok: true,
            contactos: result
         });
      } catch (error) {
         return resp.status(404).json({
            ok: false,
            msg: 'Error sql'
         });
      }
   },

   deleteContact: async (req, resp) => {
      try {
         const { id } = req.body;

         resp.json({
            ok: true,
            message: 'deleted'
         });
      } catch (error) {
         return resp.status(404).json({
            ok: false,
            msg: 'Error sql'
         });
      }
   },
}