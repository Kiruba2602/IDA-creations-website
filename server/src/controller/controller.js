const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Please fill in email' });
  }

  try {
    const newContact = new Contact({
      email
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
