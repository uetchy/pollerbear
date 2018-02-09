const Scheme = require('mongoose').Scheme

const AnswerScheme = new Scheme({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  poll: { type: Schema.Types.ObjectId, ref: 'Poll' },
  created: { type: Date, default: Date.now },
})

module.exports = mongoose.Model('Answer', AnswerScheme)
