module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    prettify: {
      options: {
        // Task-specific options go here.
      },
      html: {
        "indent": 4,
        "condense": true,
        "indent_inner_html": true,
        "unformatted": [
          "a",
          "pre"
        ]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/script.js': ['src/js/script.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/js/script.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },
    htmlhint: {
      html1: {
        options: {
          'tag-pair': true
        },
        src: ['src/*.html']
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'src/',
        src: '*.html',
        dest: 'dist',
      }
    },
    copy: {
      base_css: {
        expand: true,
        cwd: 'src/css',
        src: '**',
        dest: 'dist/css',
      },
      base_fonts: {
        expand: true,
        cwd: 'src/fonts/',
        src: '**',
        dest: 'dist/fonts',
      },
      base_images: {
        expand: true,
        cwd: 'src/images',
        src: '**',
        dest: 'dist/images',
      },
      base_js: {
        expand: true,
        cwd: 'src/js',
        src: '**',
        dest: 'dist/js',
      },
      base_htaccess: {
        expand: true,
        cwd: 'src/',
        src: '.htaccess',
        dest: 'dist/',
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-prettify');

  // Default task(s).
  grunt.registerTask('default', ['prettify', 'htmlhint', 'jshint', 'uglify', 'htmlmin', 'copy']);
};