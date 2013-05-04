module.exports = function(grunt) {

    grunt.initConfig({
        // 'plugins/**/*.js'
        jshint: {
            files: ['app.js', 'lib/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        },

        watch: {
            files: ['app.js', 'lib/**/*.js'],
            tasks: ['jshint']
        }

    });


    // linting
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-jsbeautifier');


};