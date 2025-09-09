js
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 获取所有材料
app.get('/api/materials', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM materials');
  res.json(rows);
});

// 按ID获取
app.get('/api/materials/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT * FROM materials WHERE id=$1', [id]);
  res.json(rows[0]);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
