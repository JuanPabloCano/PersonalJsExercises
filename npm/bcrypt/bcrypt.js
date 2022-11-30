const { hash, compare } = require('bcrypt');

const password = '122334cano@';

hash(password, 5, (err, hash) => {
  console.log(hash);

  compare(password, hash, (err, hash) => {
    console.log(hash);
  })
})