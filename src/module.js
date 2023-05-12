const selectQueryBuilder = ({ functionName }) =>
  `select * from ${functionName}`;
module.exports = {
  selectQueryBuilder,
};
