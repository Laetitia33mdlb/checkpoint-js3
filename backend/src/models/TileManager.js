const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  insert(tile) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      tile.title,
    ]);
  }
}

module.exports = TileManager;
