import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [users] = await db.query('SELECT * FROM users');
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    try {
      const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      res.status(201).json({ id: result.insertId, name, email });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add user' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
