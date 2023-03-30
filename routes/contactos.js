const { Router } = require("express");

const contactos = require('../controllers/contactos')
const router = Router();

router.get('/contactos', contactos.getContacts);

router.post('/contactos', contactos.addContact);

router.put('/contactos', contactos.updateContact);

router.delete('/contactos', contactos.deleteContact);

module.exports = router;