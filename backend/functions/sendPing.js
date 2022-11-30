exports = function() {
  return context.services.get('mongodb-atlas').db('db').collection('pings').insertOne({ ping: true, time: new Date() })
};
