import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    outcome: Model,
  },
  routes() {
    this.namespace = 'api';

    this.get('/outcomes');

    this.post('/outcomes', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      return schema.outcomes.create(newAttrs);
    });

    this.put('/outcomes/:id', function (schema, request) {
      let id = request.params.id;
      let editAttrs = JSON.parse(request.requestBody);
      let outcomes = schema.outcomes.find(id);
      return outcomes.update(editAttrs);
    });

    this.del('/outcomes/:id');
  },
  seeds(server) {
    server.create('outcome', { value: 'GET' });
    server.create('outcome', { value: 'POST' });
    server.create('outcome', { value: 'PUT' });
    server.create('outcome', { value: 'DELETE' });
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
