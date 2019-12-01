const {Ticket, validate} = require('../models/tickets');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const tickets = await Ticket.find().sort('name');
  res.send(tickets);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  const {code, sector, price, row, ticket_type, place, order, status, seller, date, checked} = req.body;
  let ticket = new Ticket({
    code, sector, price, ticket_type, row, place, order, status, seller, date, checked
  });
  ticket = await ticket.save();
  
  res.send(ticket);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  const {code, sector, price, row, ticket_type, place, order, status, seller, date, checked} = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id,
    {
      code, sector, price, ticket_type, row, place, order, status, seller, date, checked
    }, { new: true });

  if (!ticket) return res.status(404).send('The customer with the given ID was not found.');
  
  res.send(ticket);
});

router.delete('/:id', async (req, res) => {
  const ticket = await Ticket.findByIdAndRemove(req.params.id);

  if (!ticket) return res.status(404).send('The customer with the given ID was not found.');

  res.send(ticket);
});

router.get('/:id', async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) return res.status(404).send('The customer with the given ID was not found.');

  res.send(ticket);
});

module.exports = router; 