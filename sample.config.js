module.exports = {

    'secret': '<THIS VALUE IS USED FOR DECRYPTING JWT TOKENS>',
    'salt'  : '<THIS VALUE IS USED FOR SALTING PASSWORDS>',
    'database': '<PLEASE PROVIDER A VALID MONGODB URL EXAMPLE BELOW:>'

    // Please fill <> with your own values
    // mongodb://<username>:<password>@<host>:<port>/<db>
    // A valid url will be (please note that username and password are optional):
    // mongodb://127.0.0.1:27017/jwt-auth-server
    
};
