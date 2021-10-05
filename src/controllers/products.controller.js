import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {

    try
    {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts)
        //console.log(result)
        
        res.json(result.recordset)
    }
    catch(error)
    {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewProduct = async (req, res) => {

    const { Name, Description } = req.body;
    let { Quantity } = req.body;

    if (Name == null || Description == null) {
        return res.status(400).json({msg: 'Bad Request: please complete all fields'});
    }
    
    if (Quantity == null) {
        Quantity = 0;
    }

    //console.log(Name, Description, Quantity);

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, Name)
            .input("description", sql.Text, Description)
            .input("quantity", sql.Int, Quantity)
            .query(queries.addNewProduct);

        res.json({Name, Description, Quantity})
    }
    catch(error)
    {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async (req, res) => {

    const {id} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(queries.getProductById);

        res.json(result.recordset[0])
    }
    catch(error)
    {
        res.status(500);
        res.send(error.message);
    }

    res.send(id);
}

export const deleteProductById = async (req, res) => {

    const {id} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Id", sql.Int, id)
            .query(queries.deleteProductById);

        //res.json(result)
        res.status(204);
    }
    catch(error)
    {
        res.status(500);
        res.send(error.message);
    }

    res.send(id);
}

export const getTotalProducts = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getTotalProduct);

        res.json(result.recordset[0].Cantidad);
        res.status(204);
    }
    catch(error)
    {
        res.status(500);
        res.send(error.message);
    }
}

export const updateProductById = async (req, res) => {

    const { Name, Description, Quantity } = req.body;
    const { Id } = req.params;

    if (Name == null || Description == null || Quantity == null) {
        return res.status(400).json({msg: 'Bad Request: please complete all fields'});
    }
    
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("name", sql.VarChar, Name)
            .input("description", sql.Text, Description)
            .input("quantity", sql.Int, Quantity)
            .input("Id", sql.Int, Id)
            .query(queries.updateProductById);

        res.json({Id, Name, Description, Quantity})
    }
    catch(error)
    {
        res.status(500);
        res.send(error.message);
    }
}