const db = require("../../../db.config");
const { selectQueryBuilder } = require("../../module");
const loginQueries = require("./loginQueries");


const getLoginDetailsById = async ({ userId }) => {
  try {
    
    const query = selectQueryBuilder({ functionName: loginQueries.select });
    const response = await db.query(query, [userId]);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getLoginDetailsById,
};
