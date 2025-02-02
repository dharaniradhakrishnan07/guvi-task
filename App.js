import express from 'express';
import fs from 'fs';
import { format } from 'date-fns';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;  
const app = express();

const folderPath = path.join(__dirname, 'Current_TimeStamp');

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

app.use(express.json());

app.get('/', (req, res) => {
  try {
    const today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss');
    const filePath = path.join(folderPath, `${today}.txt`);

    if (fs.existsSync(filePath)) {
      return res.status(400).send('File already exists with this timestamp');
    }

    fs.writeFileSync(filePath, today, 'utf8');
    
    res.status(200).send(
      `<h1 style="text-align: center; color: blue; background-color: black;">Current TimeStamp: ${today}</h1>
      <h3 style="text-align: center; color: red">This Timestamp data has been successfully saved to <mark>Current_TimeStamp</mark> folder. Change the endpoint to <mark>/getTextFiles</mark> to view all the Timestamps.</h3>`
    );
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.get('/getTextFiles', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while listing the files from the directory');
    }

    const textFiles = files.filter(file => path.extname(file) === '.txt');
    res.status(200).json(textFiles);
  });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
