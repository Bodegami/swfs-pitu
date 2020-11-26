import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:Dev@2020@localhost:3306/pitu');

export default sequelize;