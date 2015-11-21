'use strict';

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    port: 32040,
                    hostname: "0.0.0.0",
                    bases: 'www-root',
                    livereload: true,
                    showStack: true
                }
            }
        },
        watch: {
            sass: {
                files: [
                    '**/*.scss'
                ],
                tasks: [
                    'sass',
                    'cssmin'
                ]
            },
            uglify: {
                files: [
                    'js/app.js'
                ],
                tasks: [
                    'uglify'
                ]
            },
            all: {
                files: [
                    '**/*.html',
                    '**/*.css',
                    '**/*.js'                  
                ],
                tasks: [
                    'open'
                ]
            },
            options: {
                livereload: true
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                    sourcemap: 'none'                
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        cssmin: {
            my_target: {
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        },
        uglify: {
            my_target: {
                src: 'js/app.js',
                dest: 'js/app.min.js'
            }
        },
        open: {
            all: {
                // path: 'http://localhost:<%= express.all.options.port%>/index.html'
                path: 'file:///Users/jamescoury/Dropbox/blog/index.html',
                app: 'Google Chrome'
            }
        }
    });

    grunt.registerTask('default', [
        'watch',
        'sass',
        'cssmin',
        'express',
        'uglify',
        // 'open',
        'express-keepalive'
    ]);
};