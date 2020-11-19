import App from './App';

const PORT = process.env.PORT || 3333;

App.listen(PORT, () => {
  console.log('Server OK!'); // eslint-disable-line
});
