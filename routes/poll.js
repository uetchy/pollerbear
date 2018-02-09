const express = require('express')
const router = express.Router()

function getPoll(id) {
  return collection.findOne(id)
}

function createPoll(title) {
  const poll = new Poll({ title: '<title here>' })
  poll.save()
}

// Create a poll
router.post('/', (req, res) => {
  const poll = createPoll(req.body.title)
  res.json({ id: poll.id })
})

// Get the poll
router.get('/:id', (req, res) => {
  const poll = getPoll(req.params.id)
  res.json(poll)
})

// Vote to the poll
router.post('/:id/vote', (req, res) => {
  const poll = getPoll(req.params.id)
  const voteTo = req.body.to

  // TODO: create vote if it does not exist or increment vote count
})

module.exports = router
