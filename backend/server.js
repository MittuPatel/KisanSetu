const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {

  const { email, password } = req.body;

  try {

    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if(result.rows.length === 0) {
      return res.status(401).json({
        message: 'Invalid email'
      });
    }

    const user = result.rows[0];

    if(password !== user.password) {
      return res.status(401).json({
        message: 'Invalid password'
      });
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user
    });

  } catch(error) {

    console.log(error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port 3000');
});
