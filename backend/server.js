const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/profile', (req, res) => {
    const profileData = req.body;
    console.log('Profile updated:', profileData);
    res.send({ message: 'Profile saved successfully!' });
});

app.post('/grocery', (req, res) => {
    const groceryData = req.body;
    console.log('Grocery list updated:', groceryData);
    res.send({ message: 'Grocery list saved successfully!' });
});

app.post('/wellness', (req, res) => {
    const wellnessData = req.body;
    console.log('Wellness data updated:', wellnessData);
    
    res.send({ message: 'Wellness data saved successfully!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
