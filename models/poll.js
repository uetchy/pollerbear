const Scheme = require('mongoose').Scheme

const PollScheme = new Scheme({
  title: String,
  created: { type: Date, default: Date.now },
  expired: Date,
  user: { type: Scheme.Types.ObjectID, ref: 'User' },
  answers: [
    {
      type: Scheme.Types.ObjectId,
      ref: 'Answer',
    },
  ],
})

module.exports = mongoose.Model('Poll', PollScheme)
