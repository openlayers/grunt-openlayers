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
    },
    release: {
      options: {
        tagName: 'v<%= version %>',
        commitMessage: '<%= version %>',
        tagMessage: '<%= version %>'
      }
    }
  });

};


grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-release');

grunt.registerTask('test', ['jshint']);
grunt.registerTask('default', ['test']);
