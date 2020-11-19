cd ..

mkdir config

cd config

touch database.js

echo -e "import mongoose from 'mongoose'\n\n" >> database.js

echo -e "const connection = {\n" >> database.js
echo -e "  con() {\n" >> database.js
echo -e "    return mongoose.connect('mongodb://nollobbot:ph]K,w63[H@mongo_nollob_db:27017/nollob_db', { useNewUrlParser: true, useUnifiedTopology: true });" >> database.js
echo -e "  }" >> database.js
echo -e "}\n\n" >> database.js

echo -e "export default connection;" >> database.js

echo "Setup Ok"
