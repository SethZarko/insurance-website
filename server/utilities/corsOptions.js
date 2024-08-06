export const corsOptions = {
    origin: [
        'http://localhost:3000',
        'https://www.getpostman.com',
        'https://insurance-website-client.onrender.com'
    
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}