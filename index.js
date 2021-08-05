const Query = require("./Query");

const q = new Query({host: 'mc.hypixel.net', port: 25565});

q.fullStat()
  .then(success => {

    console.log(success);

    return q.basicStat()

  })

  .then(success => {

    console.log(success);

    q.close();

  })
  .catch(err => {

    console.log(err);

  })
