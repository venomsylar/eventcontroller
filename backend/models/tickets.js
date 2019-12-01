const Joi = require('joi');
const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket', new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    minlength: 0,
  },
  sector: {
    type: String,
    required: true,
    minlength: 5,
  },
  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
  ticket_type: {
    type: String,
    minlength: 5,
    required: true,
  },
  row: {
    type: String,
    default: ""
  },
  place: {
    type: Number,
    minlength: 1,
  },
  order: {
    type: Number,
    required: true,
    minlength: 0,
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  seller: {
    type: String,
    minlength: 3
  },
  date: {
    type: String,
    required: true,
    minlength: 5
  },
  checked: {
    type: Boolean,
    required: true,
    default: false
  },
}));

function validateTicket(ticket) {
  const schema = {
    code: Joi.number().integer().min(0).required(),
    sector: Joi.string().min(5).required(),
    price: Joi.number().integer().min(2).required(),
    ticket_type: Joi.string().min(5).required(),
    row: Joi.string().empty('').default(''),
    place: Joi.number().integer().min(1),
    order: Joi.number().integer().min(0).required(),
    status: Joi.boolean(),
    seller: Joi.string().min(3),
    date: Joi.string().min(5).required(),
    checked: Joi.boolean(),
  };

  return Joi.validate(ticket, schema);
}

exports.Ticket = Ticket;
exports.validate = validateTicket;