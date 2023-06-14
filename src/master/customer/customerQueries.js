const customerFunctionNames = {
  select: "getCustomerDetails()",
  getbyid: "getCustomerDetailsById($1)",
  update: "updateCustomerDetails($1, $2, $3, $4, $5, $6, $7, $8, $9)",
  insert: "insertCustomerDetails($1, $2, $3, $4, $5, $6, $7, $8, $9)",
};

module.exports = customerFunctionNames;
