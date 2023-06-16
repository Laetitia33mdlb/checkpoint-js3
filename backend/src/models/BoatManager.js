const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  insert(boat) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      boat.title,
    ]);
  }
}

module.exports = BoatManager;
