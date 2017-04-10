module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    copy: {
      html: {
        expand: true,
        cwd: 'src/html',
        src: '**',
        dest: 'build/',
      },
      jquery: {
        expand: true,
        cwd: 'deps/jquery',
        src: '**',
        dest: 'build/deps/jquery',
      },
      nwk: {
        src: 'nwk.json',
        dest: 'build/package.json',
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "build/style.css": "src/less/main.less"
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'build/app.js': ['src/js/app.js']
        }
      }
    },
    
    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js'],
    },

    nwjs: {
      options: {
          platforms: ['linux'],
          buildDir: './release'
      },
      src: ['./build/**/*']
    },

    clean: ['build', 'release']

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-nw-builder');

  // Register tasks.
  grunt.registerTask('default', ['clean', 'jshint', 'less', 'uglify', 'copy', 'nwjs']);

};