const list = async () => {
  const response = await fetch('http://localhost:3000/api/customers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

const create = async (data) => {
  const response = await fetch('http://localhost:3000/api/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const get = async (id) => {
  const response = await fetch(`http://localhost:3000/api/customers/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

const update = async (id, data) => {
  const response = await fetch(`http://localhost:3000/api/customers/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const destroy = async (id) => {
  await fetch(`http://localhost:3000/api/customers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export {
  create,
  destroy,
  get,
  list,
  update,
};
