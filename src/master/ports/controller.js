const db = require ("../../../db.config");
const {selectQueryBuilder} = require ("../../module");
const portQueries = require ("./queries");
const getPortDetailsById = async ({portId}) => {
    try {
        const query = selectQueryBuilder ({functionName:portQueries.select});
        const response = await db.query(query, [portId]);
    }
    catch(error){
        throw error;
    }
};

module.exports = {
    getPortDetailsById,
};
