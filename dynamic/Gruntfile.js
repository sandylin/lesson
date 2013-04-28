module.exports = function(grunt) {

    grunt.initConfig({
        // 'plugins/**/*.js'
        jshint: {
            files: ['app.js', 'lib/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        },

        jsbeautifier: {
            files: ['app.js', 'lib/**/*.js'],
            options: {
                indent_size: 4,
                indent_char: " ",
                indent_level: 0,
                indent_with_tabs: false,
                preserve_newlines: true,
                max_preserve_newlines: 10,
                jslint_happy: false,
                brace_style: "collapse",
                keep_array_indentation: false,
                keep_function_indentation: false,
                space_before_conditional: true,
                eval_code: false,
                indent_case: false,
                wrap_line_length: 80,
                unescape_strings: false
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