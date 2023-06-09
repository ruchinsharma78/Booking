const db = require("../../../db.config");
const { selectQueryBuilder } = require("../../module");
const customerQueries = require("./customerQueries");

const getCustomerDetailsById = async ({ customerId }) => {
  try {
    const query = selectQueryBuilder({ functionName: customerQueries.getbyid });
    const response = await db.query(query, [customerId]);
    return response;
  } catch (error) {
    throw error;
  }
};

const getCustomerDetails = async ({  }) => {
  try {
    const query = selectQueryBuilder({ functionName: customerQueries.select });
    const response = await db.query(query, []);
    return response;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getCustomerDetailsById,getCustomerDetails,
};
