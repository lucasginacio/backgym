import Sequelize from 'sequelize';

import Student from '../app/models/Student';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Student, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // conexão com a base de dados e carregar modulos
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
