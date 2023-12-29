const AvaliationModel = (sequelize, DataTypes) => {
  const Avaliation = sequelize.define('Avaliation', {
    bimestre: DataTypes.ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'),
    disciplina: DataTypes.ENUM('Biologia', 'Artes', 'Geografia', 'Sociologia'),
    nota: DataTypes.FLOAT,
    criadoEm: DataTypes.DATE,
    atualizadoEm: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'resultado'
  });

  return Avaliation;
};