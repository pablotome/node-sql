export const queries = {
    getAllProducts: 'select * from Products', 
    addNewProduct: 'insert into DBO.Products (Name, Description, Quantity) values (@name, @description, @quantity)', 
    getProductById: 'select * from Products where Id = @Id', 
    deleteProductById: 'delete from Products where Id = @Id', 
    getTotalProduct: 'select count(*) as Cantidad from Products', 
    updateProductById: 'update Products set Name = @Name, Description = @Description, Quantity = @Quantity where Id = @Id'
}