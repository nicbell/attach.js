'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                browser: true,
                node: true,
                jquery: false,
                debug: false,
                devel: false,
                asi: true,
                laxbreak: false,
                bitwise: true,
                boss: false,
                curly: true,
                eqeqeq: true,
                eqnull: false,
                evil: false,
                expr: false,
                forin: false,
                immed: true,
                latedef: true,
                loopfunc: false,
                shadow: false,
                supernew: false,
                undef: true,
                newcap: true,
                noempty: true,
                nonew: false,
                nomen: false,
                onevar: false,
                plusplus: false,
                sub: false,
                trailing: true,
                white: false
            },
            all: ['Gruntfile.js', 'attach.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> license | <%= pkg.homepage %> */\n'
            },
            dist: {
                src: 'attach.js',
                dest: 'attach.min.js'
            }
        },
        clean: ['.tmp']
    });


    // Actually load this plugin"s task(s).
    grunt.loadTasks("tasks");

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test', 'uglify', 'clean']);

    //This is an extra task incase we want to do something different with Travis CI
    grunt.registerTask('travis', ['jshint', 'uglify', 'clean']);
};
