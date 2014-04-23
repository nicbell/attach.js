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

                asi: false,  // Tolerate Automatic Semicolon Insertion (no semicolons).
                laxbreak: false,  // Tolerate unsafe line breaks e.g. `return [\n] x` without semicolons.
                bitwise: true,   // Prohibit bitwise operators (&, |, ^, etc.).
                boss: false,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.
                curly: true,   // Require {} for every new block or scope.
                eqeqeq: true,   // Require triple equals i.e. `===`.
                eqnull: false,  // Tolerate use of `== null`.
                evil: false,  // Tolerate use of `eval`.
                expr: false,  // Tolerate `ExpressionStatement` as Programs.
                forin: false,  // Tolerate `for in` loops without `hasOwnPrototype`.
                immed: true,   // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
                latedef: true,   // Prohipit variable use before definition.
                loopfunc: false,  // Allow functions to be defined within loops.

                shadow: false,  // Allows re-define variables later in code e.g. `var x=1; x=2;`.
                supernew: false,  // Tolerate `new function () { ... };` and `new Object;`.
                undef: true,   // Require all non-global variables be declared before they are used.

                newcap: true,   // Require capitalization of all constructor functions e.g. `new F()`.
                noempty: true,   // Prohibit use of empty blocks.
                nonew: true,   // Prohibit use of constructors for side-effects.
                nomen: true,   // Prohibit use of initial or trailing underbars in names.
                onevar: false,  // Allow only one `var` statement per function.
                plusplus: false,  // Prohibit use of `++` & `--`.
                sub: false,  // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.
                trailing: true,   // Prohibit trailing whitespaces.
                white: false,  // Check against strict whitespace and indentation rules.
                indent: 4       // Specify indentation spacing
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
