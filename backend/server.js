const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors()); 
app.use(express.json()); 


const MONGO_URI = "mongodb+srv://naveenid30:9PiIQmGaToe2QqjV@zyrenpublish.dkabskh.mongodb.net/?appName=ZyrenPublish";

mongoose.connect(MONGO_URI)
  .then(() => console.log('🟢 Successfully connected to MongoDB!'))
  .catch((err) => console.error('🔴 MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// --- 3. Registration Route ---
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    console.log(`✅ Saved to Database: ${firstName} ${lastName} (${email})`);
    res.status(200).json({ message: "Account created successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// --- 4. Login Route ---
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    
    if (user && user.password === password) {
      console.log(`Successful Login: ${email}`);
      res.status(200).json({ token: "real-security-token", user: user });
    } else {
      console.log(` Failed Login Attempt: ${email}`);
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running locally on http://localhost:${PORT}`);
});

const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
   
    cb(null, Date.now() + '-' + file.originalname) 
  }
});
const upload = multer({ storage: storage });


const paperSchema = new mongoose.Schema({
  title: String,
  abstract: String,
  keywords: String,
  filePath: String,
  submittedAt: { type: Date, default: Date.now }
});
const Paper = mongoose.model('Paper', paperSchema);

// --- 7. The Submit Research Route ---
// Notice "upload.single('manuscript')" - this intercepts the file before running the code
app.post('/api/submit-paper', upload.single('manuscript'), async (req, res) => {
  try {
    const { title, abstract, keywords } = req.body;
    
    // Check if a file was actually uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a PDF or DOCX file." });
    }

    // Save the paper details to MongoDB
    const newPaper = new Paper({
      title: title,
      abstract: abstract,
      keywords: keywords,
      filePath: req.file.path // The path to the file inside the uploads folder
    });
    
    await newPaper.save();

    console.log(`✅ New Paper Submitted: ${title}`);
    res.status(200).json({ message: "Manuscript submitted successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during submission" });
  }
});