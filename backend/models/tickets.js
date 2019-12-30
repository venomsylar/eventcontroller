const Joi = require('joi');
const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket', new mongoose.Schema({
  code: {
    type: Number,
    minlength: 0,
  },
  sector: {
    type: String,
    minlength: 5,
  },
  price: {
    type: Number,
    minlength: 2,
  },
  ticket_type: {
    type: String,
    minlength: 5,
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
    minlength: 0,
  },
  status: {
    type: Boolean,
    default: false
  },
  seller: {
    type: String,
    minlength: 3
  },
  date: {
    type: String,
    minlength: 5
  },
  checked: {
    type: Boolean,
    default: false
  },
}));

function validateTicket(ticket) {
  const schema = {
    _id: Joi.string().min(5),
    __v: Joi.number(),
    code: Joi.number().integer().min(0),
    sector: Joi.string().min(5),
    price: Joi.number().integer().min(2),
    ticket_type: Joi.string().min(5),
    row: Joi.string().empty('').default(''),
    place: Joi.number().integer().min(1),
    order: Joi.number().integer().min(0),
    status: Joi.boolean(),
    seller: Joi.string().min(3),
    date: Joi.string().min(5),
    checked: Joi.boolean().default(false),
  };

  return Joi.validate(ticket, schema);
}

exports.Ticket = Ticket;
exports.validate = validateTicket;