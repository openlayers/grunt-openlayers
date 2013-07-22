var grunt = require('grunt');


/**
 * @param {Object} grunt Grunt DSL object.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      self: {
        src: __filename
      },
      tasks: {
        src: 'tasks/**/*.js'
      }
    }
  });

};


grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('test', ['jshint']);
grunt.registerTask('default', ['test']);
