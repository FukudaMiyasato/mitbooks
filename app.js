const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express'); 

const swaggerOptions ={
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
}
const swaggerDoc = swaggerJsDoc(swaggerOptions); 
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc ));


/**
 * @swagger
 * /book:
 *  get:
 *      description: Get all book
 *      responses:
 *          200:
 *              description: Success 
 */
app.get('/books',(req, res) => {
    res.send([
        {
            isbn: '123123123423',
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            publisher: 'Scholastic'
        }
    ]);
}) 
/**
 * @swagger
 * /book:
 *  post:
 *      description: Get one book
 *      parameters:
 *      -   name: title
 *          description: Book title
 *          in: body
 *          required: true
 *          type: string
 *      responses:
 *          200:
 *              description: Success 
 */
app.post('/books',(req,res) =>{
    const title = req.body.title;
    res.send({title}); 
});

app.listen (3000,() =>{
    console.log('Running on port 3000');
})