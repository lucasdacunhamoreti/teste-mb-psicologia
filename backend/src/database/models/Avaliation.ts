import { Model, DataTypes } from 'sequelize';
import db from '.';

class AvaliationModel extends Model {
  public id!: any;
  public bimestre!: any;
  public disciplina!: any;
  public nota!: any;
  public criadoEm!: any;
  public atualizadoEm!: any;
}

AvaliationModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  bimestre: DataTypes.ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'),
  disciplina: DataTypes.ENUM('Biologia', 'Artes', 'Geografia', 'Sociologia'),
  nota: DataTypes.FLOAT,
  criadoEm: DataTypes.DATE,
  atualizadoEm: DataTypes.DATE,
}, {
  tableName: 'resultado',
  underscored: false,
  sequelize: db,
  modelName: 'Avaliation',
  timestamps: false,
});

export default AvaliationModel;