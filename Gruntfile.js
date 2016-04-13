module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'jshint-jsx': {
      options: {
	esnext: true,
	convertJSX: "js",
	globals: [
	  "React"
	]
      },
      files: {
	src: ['src/*.js']
      }
    },
    copy: {
      main: {
	cwd: 'src/html',
	src: '*.html',
	dest: 'dist/',
	expand: true
     }
    },
    concat: {
      options: {
	separator: ";"
      },
      dist: {
        src: ['src/*.js'],
        dest: 'build/app.js'
      }
    },
    babel: {
      options: {
        presets: ['es2015', 'react']
      },
      dist: {
        files: {
          'build/app.js': 'build/app.js'
        }
      }
    },
    browserify: {
      dist: {
	src: ['src/js/*.js'],
	dest: 'build/<%= pkg.name %>.js'
     }
    },
    uglify: {
      dist: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
     sass: {
      dist: {
	files: {
	  'build/<%= pkg.name %>.css': 'src/sass/app.sass'
	}
      }
    },
    cssmin: {
      target: {
	files: {
	  'dist/<%= pkg.name %>.min.css': ['build/<%= pkg.name %>.css']
	}
      }
    }
 });

  grunt.loadNpmTasks('grunt-contrib-jshint-jsx');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
//    'jshint-jsx',
    'copy',
    'concat',
//    'babel',
    'browserify',
    'sass',
    'uglify',
    'cssmin'
  ]);
};

