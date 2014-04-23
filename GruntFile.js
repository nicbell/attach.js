module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'attach.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | MIT license | http://github.com/nicbell/attach.js */\n'
            },
            dist: {
                src: '.tmp/attach.js',
                dest: 'attach.min.js'
            }
        },
        clean: ['.tmp']
    });

    grunt.registerTask('test', [
		'jshint'
    ]);

    grunt.registerTask('default', [
		'test',
		'uglify',
		'clean'
    ]);

};
