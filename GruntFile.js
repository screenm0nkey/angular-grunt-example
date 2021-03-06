/*global module*/

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    // nodeunit: ['test/**/*.js'],
    pkg: grunt.file.readJSON('package.json'),

    paths : {
      js   : 'app/js/',
      lib  : 'app/lib/',
      html : 'app/partials/'
    },

    watch: {
      scripts : {
        files: [
          '<%= jshint.files %>'
        ],
        tasks: [
          'timestamp',
          'jshint',
          'ngmin:zoltar',
          'ngtemplates',
          'concat',
          'uglify',
          'clean'
        ],
        options: {
          spawn: false
        }
      }
    },

    jshint: {
      files: ['GruntFile.js', '<%=paths.js%>**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals: { require: false, __dirname: false, console: false, module: false, exports: false }
      }
    },

    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        src: [
          '<%=paths.lib%>angular.js',
          '<%=paths.lib%>angular-route.js',
          'dist/ngmin/app.js',
          // ngtemplates uses angular's $template cache. it has to go here after
          // the app.js but before the rest of the app's files. look at the
          // concat file to see why, but it it adds
          '<%= ngtemplates.app.dest %>',
          'dist/ngmin/directives/**/*.js',
          'dist/ngmin/services/**/*.js'
        ],
        dest: 'dist/concat.js'
      }
    },

    uglify: {
      options: {
        // stop angualr from breaking even though i thought the arrays in
        // angular were supposed to do that.
        mangle: true
      },
      my_target: {
        files: {
          'build/<%= pkg.name %>.min.js': ['dist/concat.js' ]
        }
      }
    },

    ngtemplates:  {
      app: {
        src: '<%=paths.html%>*.html',
        dest: 'dist/template.js'
      }
    },

    // call this like 'grunt ngmin:zoltar'
    ngmin: {
      zoltar: {
        cwd: 'app/js',
        expand: true,
        src: ['**/*.js'],
        dest: 'dist/ngmin'
      }
    },

    clean: ["dist"]
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-ngmin');
  // Default task.
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });
};
