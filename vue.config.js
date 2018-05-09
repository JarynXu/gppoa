module.exports = {
    devServer: {
        proxy: {
            '/login.xzy': {
                target: 'http://192.168.0.64:8080/hadooptieba'
            }
        }
    }
};