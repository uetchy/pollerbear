// has many polls
const mongoose = require('mongoose')
const Scheme = mongoose.Scheme

const UserScheme = new Scheme({
  name: String,
  created: { type: Date, default: Date.now },
  polls: [
    {
      type: Scheme.Types.ObjectId,
      ref: 'Poll',
    },
  ],
})

module.exports = mongoose.Model('User', UserScheme)
