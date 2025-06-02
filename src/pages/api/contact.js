export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Simulate sending an email or saving to a database
    // In a real application, you would integrate with an email service (e.g., SendGrid, Nodemailer)
    // or a database here.
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Simulate a delay as if an external service was called
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For MVP, we'll just return a success message
    return res.status(200).json({ message: 'Thank you for your message! We will get back to you soon.' });

  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
