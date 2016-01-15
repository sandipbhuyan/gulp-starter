const data = require('./fixture');

module.exports = (api) => {
  api.route('/api/sample')
    .get((req, res) => {
      res.json(data);
    })
    .post((req, res) => {
      console.log(req.body);
      data[data.length] = req.body;
      console.log(data.length);
      res.json(data[data.length - 1]);
    });

  api.route('/api/sample/:id')
    .get((req, res) => {
      res.json(data[req.params.id - 1]);
    })
    .put((req, res) => {
      res.json(data[req.params.id - 1] = req.body);
    })
    .delete((req, res) => {
      res.json(data.splice(req.params.id - 1, req.params.id));
    });
};
