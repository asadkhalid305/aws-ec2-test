const mongodb = {
    development: {
        /**
         * Development Database
         * here "test" after "/" is database name
         */
        url: "mongodb+srv://user:1234@cluster0.w7dbz.mongodb.net/ec2-dev?retryWrites=true&w=majority"
    },
    production: {
        /**
         * Production Database
         */
        url: 'mongodb+srv://user:1234@cluster0.w7dbz.mongodb.net/ec2-prod?retryWrites=true&w=majority'
    }
}

module.exports = mongodb

/**
 * write desired database name instead of test
 * mongodb will automatically create that database in localhost if it doesn't exist already
 */