const express = require('express');
const bodyParser = require('body-parser');
const flowRoutes = require('./routes/flowRoutes');

const app = express();
app.use(bodyParser.json());

// Use the routes defined for flow distribution
app.use('/api/flow', flowRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
