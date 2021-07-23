const Browser = require('./XSEngine');
(async () => {
    console.log(await(new Browser('kwaminawallace', require('./medium'))).scrap());
})();