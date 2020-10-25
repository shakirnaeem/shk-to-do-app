module.exports = (app) => {
    app.get('/brands', (req, res) => {
        res.send("test shk");
    });
    //require('./routes/brand.routes.js')(app);
}