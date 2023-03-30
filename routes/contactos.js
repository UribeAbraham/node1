const { Router } = require("express");

const contactos = require('../controllers/contactos')
const router = Router();

router.get('/contactos', contactos.getContacts);

router.post('/contacto', contactos.addContact);

router.put('/contacto/update', contactos.updateContact);

router.delete('/contacto', contactos.deleteContact);

module.exports = router;