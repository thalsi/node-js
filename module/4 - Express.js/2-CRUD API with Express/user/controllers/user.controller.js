let users = [];

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({
    success: true,
    message: 'User created',
    data: user
  });
};

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
};

exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  users[index] = { ...users[index], ...req.body };

  res.status(200).json({
    success: true,
    message: 'User updated',
    data: users[index]
  });
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'User deleted'
  });
};


