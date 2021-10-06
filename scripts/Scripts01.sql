DROP TABLE DBO.Products
CREATE TABLE DBO.Products
(
	Id int identity(1, 1), 
	Name varchar(50), 
	Description text, 
	Quantity int, 
	CONSTRAINT PK_Products PRIMARY KEY (Id)
)

insert into DBO.Products (Name, Description, Quantity) values 
('Laptop', 'Lenovo Laptop', 40), 
('Mouse', 'Gamming', 50), 
('Keyboard', 'Teclados', 45), 

select * from Products