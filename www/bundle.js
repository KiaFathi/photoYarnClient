(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/app-famous.css":[function(require,module,exports){
var css = "html {\n  background: #fff;\n}\n\n.backfaceVisibility {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n}\n"; (require("/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify"))(css); module.exports = css;
},{"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify/browser.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/app.css":[function(require,module,exports){
var css = "html {\n    background-color: #fff;\n    color: #000;\n}\n\n.double-sided {\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n}\n\n.header {\n  font-size: 30px;\n}\n\n.FeedEntryBackground {\n  border: 1px solid black;\n  text-indent: 5px;\n  font-weight: bold;\n}\n\n.Background {\n  background-color: #BBB;\n}\n\n.ProfileHeaderButton {\n  border-radius: 10px;\n  border: 2px solid white;\n  margin-top: 3px;\n  color: #FFF;\n  font: 14px Georgia, sans-serif;\n  font-weight: bold;\n}\n\n.ProfileUserLocation {\n  color: #777;\n  font: 16px Georgia, sans-serif;\n}\n\n.ProfileUsername {\n  color: #777;\n  font: 17px Georgia, sans-serif;\n  font-weight: bold;\n}\n\n.FeedEntryDivider {\n  /* fallback */\n  background-color: #CCC;\n  background: url(images/linear_bg_2.png);\n  background-repeat: repeat-x;\n\n  /* Safari 4-5, Chrome 1-9 */\n  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#CCC), to(#000));\n\n  /* Safari 5.1, Chrome 10+ */\n  background: -webkit-linear-gradient(top, #000, #CCC);\n\n  /* Firefox 3.6+ */\n  background: -moz-linear-gradient(top, #000, #CCC);\n\n  /* IE 10 */\n  background: -ms-linear-gradient(top, #000, #CCC);\n\n  /* Opera 11.10+ */\n  background: -o-linear-gradient(top, #000, #CCC);\n\n}\n\n.FeedEntryCaption {\n  color: #777;\n  font: 15px Georgia, sans-serif;\n  font-weight:bold;\n  margin-left: 5px;\n}\n\n.FeedEntryPhoto {\n  border-radius: 5px;\n  margin-left: 10px;\n}\n\n.AddPicViewPic {\n\tborder: 2px solid #FF6138;\n\tborder-radius: 5px;\n}\n\n.salmonBG{\n  background-color: #FF6138;\n}\n\n.yellowBG{\n  background-color: #FFFF9D; \n}\n\n.lightgreenBG{\n  background-color: #BEEB9F;\n}\n\n.medgreenBG{\n  background-color: #79BD8F;\n}\n\n.darkgreenBG{\n  background-color: #00A388;\n}\n\n.customButton{\n  color: #FF6138;\n  font-weight: bold;\n}"; (require("/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify"))(css); module.exports = css;
},{"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify/browser.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/famous.css":[function(require,module,exports){
var css = "/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n *\n * Owner: mark@famo.us\n * @license MPL 2.0\n * @copyright Famous Industries, Inc. 2014\n */\n\n\nhtml {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\nbody {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-font-smoothing: antialiased;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-perspective: 0;\n    perspective: none;\n    overflow: hidden;\n}\n\n.famous-container, .famous-group {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    overflow: visible;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    pointer-events: none;\n}\n\n.famous-group {\n    width: 0px;\n    height: 0px;\n    margin: 0px;\n    padding: 0px;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.famous-surface {\n    position: absolute;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: flat;\n    transform-style: preserve-3d; /* performance */\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    pointer-events: auto;\n}\n\n.famous-container-group {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n"; (require("/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify"))(css); module.exports = css;
},{"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify/browser.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/index.js":[function(require,module,exports){
require('./app-famous.css');
require('./famous.css');
require('./app.css');
},{"./app-famous.css":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/app-famous.css","./app.css":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/app.css","./famous.css":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/famous.css"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/customComponents/CustomButton.js":[function(require,module,exports){
'use strict';

// import famo.us dependences
var View = require('famous/core/View');
var Modifier = require('famous/core/Modifier');
var Surface = require('famous/core/Surface');

// CustomButton constructor
function CustomButton(){
  View.apply(this, arguments);

  // adding elements
  _createRootNode.call(this);
  _createButton.call(this);
  _setListeners.call(this);
}

// set defaults
CustomButton.prototype = Object.create(View.prototype);
CustomButton.prototype.constructor = CustomButton;
CustomButton.DEFAULT_OPTIONS = {
  align: [0.5, 0.5],
  origin: [0.5, 0.5],
  lineHeight: '50px',
  textAlign: 'center',
};

// create root modifier
function _createRootNode(){
  this.rootModifier = new Modifier({
    align: this.options.align,
    origin: this.options.origin,
  });

  this.rootNode = this.add(this.rootModifier);
}

// create button
function _createButton(){
  this.button = new Surface({
    content: this.options.name,
    classes: this.options.classes,
    properties: {
      lineHeight: this.options.lineHeight,
      textAlign: this.options.textAlign,
    },
  });

  this.rootNode.add(this.button);
}

// set listener to bubble up button events
function _setListeners() {
  // only explicitly bubbling up click event
  this.button.on('click', function() {
    this._eventOutput.emit('click');
  }.bind(this));
}

module.exports = CustomButton;

},{"famous/core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/customComponents/CustomLayout.js":[function(require,module,exports){
'use strict';

// import famo.us dependencies
var Modifier = require('famous/core/Modifier');
var ImageSurface = require('famous/surfaces/ImageSurface');
var Surface = require('famous/core/Surface');
var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
var GridLayout = require('famous/views/GridLayout');
var RenderController = require('famous/views/RenderController');

// import components/utilities
var CustomButton = require('./CustomButton');
var oauth = require('./oauth');

// import views
var NewYarnView = require('../views/NewYarnView');
var FeedView = require('../views/FeedView');
var ProfileView = require('../views/ProfileView');
var YarnView = require('../views/YarnView');
var AddToYarnView = require('../views/AddToYarnView');

// CustomLayout constructor
function CustomLayout(){
  HeaderFooterLayout.apply(this, arguments);

  // adding elements
  _createContent.call(this);
  _createHeader.call(this);
  _createFooter.call(this);
  _setListeners.call(this);
}

// set defaults
CustomLayout.prototype = Object.create(HeaderFooterLayout.prototype);
CustomLayout.prototype.constructor = CustomLayout;
CustomLayout.DEFAULT_OPTIONS = {
  origin: [0, 0],
  align: [0,0],
  headerSize: 75,
  footerSize: 50,
};

// create content component
function _createContent(){

  // famo.us logo because famo.us is cool!
  this.logo = new ImageSurface({
    size: [200, 200],
    content: 'assets/catTied.png',
  });

  var centerModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  });

  // initialize content views
  this.feedView = new FeedView({
    message: 'custom feed view',
    serverRequests: this.options.serverRequests,
   });
  this.newYarnView = new NewYarnView({
    message: 'custom new yarn view',
    serverRequests: this.options.serverRequests
  });

  this.profileView = new ProfileView({
    message: 'custom profile view',
    serverRequests: this.options.serverRequests
  });
  this.yarnView = new YarnView({
    serverRequests: this.options.serverRequests
  });
  this.addToYarnView = new AddToYarnView({
    serverRequests: this.options.serverRequests
  });

  // initialize and attach RenderController to content display
  this.renderController = new RenderController();
  this.content.add(centerModifier).add(this.renderController);
  this.renderController.show(this.logo);
}

// create header component
function _createHeader(){
  // add title bar to header display
  this.header.add(new Surface({
    content: 'PhotoYarn',
    classes: ['customButton', 'medgreenBG', 'header'],
    properties: {
      lineHeight: this.options.headerSize + 'px',
      textAlign: 'center'
    }
  }));
}

// create footer component
function _createFooter(){
  // create buttons
  this.buttonRefs = {
    viewFeed: new CustomButton({
      name: 'Feed',
      classes: ['customButton', 'lightgreenBG'],
    }),
    createYarn: new CustomButton({
      name: 'New Yarn',
      classes: ['customButton', 'lightgreenBG'],
    }),
    viewProfile: new CustomButton({
      name: 'Profile',
      classes: ['customButton', 'lightgreenBG'],
    }),
    login: new CustomButton({
      name: 'Login',
      classes: ['customButton', 'lightgreenBG']
    }),
    yarnView: new CustomButton({
      name: 'YarnView',
      classes: ['customButton', 'lightgreenBG']
    })
  };

  // create grid layout for buttons
  this.buttons = [
    this.buttonRefs.viewFeed,
    this.buttonRefs.createYarn,
    this.buttonRefs.viewProfile,
    this.buttonRefs.login,
  ];
  this.buttonGrid = new GridLayout({
    dimensions: [this.buttons.length, 1]
  });
  this.buttonGrid.sequenceFrom(this.buttons);

  // add gridded buttons to footer display
  this.footer.add(this.buttonGrid);
}

// set listeners for buttons in footer nav and in content views
function _setListeners() {
  // associate click events to display actions
  this.buttonRefs.viewFeed.on('click', function() {
    this.feedView.createFeedEntriesFromServer(this.options.serverRequests.data);
    this.renderController.show(this.feedView);
    // this.options.serverRequests.updateData();
    // TODO reintegrate update event when displaying feedview
    // this.feedView.trigger('update');
  }.bind(this));
  this.buttonRefs.createYarn.on('click', function() {
    this.renderController.show(this.newYarnView);
  }.bind(this));
  this.buttonRefs.viewProfile.on('click', function() {
    this.renderController.show(this.profileView);
  }.bind(this));
  this.yarnView.on('showAddToYarn', function(data){
    this.yarnView.yarnData = data;
    this.renderController.show(this.addToYarnView)
  }.bind(this))
  this.feedView.on('showYarnDetail', function(data) {
    this.yarnView.yarnData = data;
    this.yarnView.createDetail(data);
    this.renderController.show(this.yarnView);
  }.bind(this));
  this.feedView.on('showAddToYarn', function(data) {
    this.addToYarnView.yarnData = data;
    this.renderController.show(this.addToYarnView);
  }.bind(this));

  this.buttonRefs.login.on('click', function() {
    oauth.login(function(response) {
        if (response.status === 'connected') {
            console.log('fb login success, received access token');

            // check against database to see if new user
            // or current user by sending request to
            // $.ajax({
            //     type: "GET",
            //     url: "https://graph.facebook.com/me?access_token=" + response.token,
            //     success: function(data) {
            //         console.log(data)
            //         var userData = {
            //             id: data.id,
            //             gender: data.gender.charAt(0),
            //             name: data.name
            //         }
            //         console.log(userData)
            //         // request to /users
            //         $.ajax({
            //             type: 'GET',
            //             url: 'http://localhost:8100/users',
            //             success: function(data) {
            //                 console.log(data);
            //             },
            //             error: function(error) {
            //                 console.log(error)
            //             }
            //         });
            //     }
            // })

            // redirect to home page here?

        } else {
            console.log('login failed', response.error);
        }
    });
  })
}

module.exports = CustomLayout;

},{"../views/AddToYarnView":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/AddToYarnView.js","../views/FeedView":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/FeedView.js","../views/NewYarnView":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/NewYarnView.js","../views/ProfileView":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/ProfileView.js","../views/YarnView":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/YarnView.js","./CustomButton":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/customComponents/CustomButton.js","./oauth":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/customComponents/oauth.js","famous/core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/surfaces/ImageSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js","famous/views/GridLayout":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/GridLayout.js","famous/views/HeaderFooterLayout":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/HeaderFooterLayout.js","famous/views/RenderController":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/RenderController.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/customComponents/oauth.js":[function(require,module,exports){
var $ = require('jquery');

(function ($) {
  $.deparam = function (params, coerce) {
    var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };
      
    // Iterate over all name=value pairs.
    $.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
      var param = v.split('='),
          key = decodeURIComponent(param[0]),
          val,
          cur = obj,
          i = 0,
            
          // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
          // into its component parts.
          keys = key.split(']['),
          keys_last = keys.length - 1;
        
      // If the first keys part contains [ and the last ends with ], then []
      // are correctly balanced.
      if (/\[/.test(keys[0]) && /\]$/.test(keys[keys_last])) {
        // Remove the trailing ] from the last keys part.
        keys[keys_last] = keys[keys_last].replace(/\]$/, '');
          
        // Split first keys part into two parts on the [ and add them back onto
        // the beginning of the keys array.
        keys = keys.shift().split('[').concat(keys);
          
        keys_last = keys.length - 1;
      } else {
        // Basic 'foo' style key.
        keys_last = 0;
      }
        
      // Are we dealing with a name=value pair, or just a name?
      if (param.length === 2) {
        val = decodeURIComponent(param[1]);
          
        // Coerce values.
        if (coerce) {
          val = val && !isNaN(val)              ? +val              // number
              : val === 'undefined'             ? undefined         // undefined
              : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
              : val;                                                // string
        }
          
        if ( keys_last ) {
          // Complex key, build deep object structure based on a few rules:
          // * The 'cur' pointer starts at the object top-level.
          // * [] = array push (n is set to array length), [n] = array if n is 
          //   numeric, otherwise object.
          // * If at the last keys part, set the value.
          // * For each keys part, if the current level is undefined create an
          //   object or array based on the type of the next keys part.
          // * Move the 'cur' pointer to the next level.
          // * Rinse & repeat.
          for (; i <= keys_last; i++) {
            key = keys[i] === '' ? cur.length : keys[i];
            cur = cur[key] = i < keys_last
              ? cur[key] || (keys[i+1] && isNaN(keys[i+1]) ? {} : [])
              : val;
          }
            
        } else {
          // Simple key, even simpler rules, since only scalars and shallow
          // arrays are allowed.
            
          if ($.isArray(obj[key])) {
            // val is already an array, so push on the next value.
            obj[key].push( val );
              
          } else if (obj[key] !== undefined) {
            // val isn't an array, but since a second value has been specified,
            // convert val into an array.
            obj[key] = [obj[key], val];
              
          } else {
            // val is a scalar.
            obj[key] = val;
          }
        }
          
      } else if (key) {
        // No value was defined, so set something meaningful.
        obj[key] = coerce
          ? undefined
          : '';
      }
    });
      
    return obj;
  };
})($);


var oauth = (function() {

    var FB_LOGIN_URL = 'https://www.facebook.com/dialog/oauth';
    var FB_LOGOUT_URL = 'https://www.facebook.com/logout.php';

    var tokenStore = window.sessionStorage;
    var appId = 261431800718045; // this is considered public knowledge

    var loginCallback;
    var loginProcessed;
    var runningInCordova;

    document.addEventListener('deviceready', function() {
        runningInCordova = true;
    }, false);

    var oauthRedirectURL = 'http://localhost:8100/oauthcallback.html';

    // i don't think this is necessary
    // var init = function(params) {
    //     if (params.appId) {
    //         appId = params.appId;
    //         console.log('init called, appId', appId)
    //     } else {
    //         throw 'appId param not set';
    //     }
    // };

    var isLoggedIn = function() {
        return tokenStore.hasOwnProperty('access_token');
    }

    var login = function(callback) {
        if (!appId) {
            callback({status: 'unkonwn', error: 'appId not set'});
        }
        var loginWindow;
        var startTime;

        var loginWindowLoadHandler = function(event) {
            var url = event.url;
            console.log('im running in cordova, im in loginWindowHandler, here is url', url);
            if (url.indexOf('access_token') !== -1 || url.indexOf('error') !== -1) {
                var timeout = 600 - (new Date().getTime() - startTime);
                setTimeout(function () {
                    loginWindow.close();
                }, timeout > 0 ? timeout : 0);
                oauthCallback(url);
            }
        };

        var loginWindowExitHandler = function() {
            loginWindow.removeEventListener('loadstart', loginWindowLoadHandler);
            loginWindow.removeEventListener('exit', loginWindowExitHandler);
            loginWindow = null;
            console.log('removed listeners and login window');
        };

        loginCallback = callback;
        loginProcessed = false;

        if (runningInCordova) {
          oauthRedirectURL = 'https://www.facebook.com/connect/login_success.html';
        }

        startTime = new Date().getTime(); 
        loginWindow = window.open(FB_LOGIN_URL + '?client_id=' + appId + '&redirect_uri=' + oauthRedirectURL +
                    '&response_type=token&scope=public_profile', '_blank', 'location=no');

        if (runningInCordova) {
            tokenStore = window.LocalStorage;
            loginWindow.addEventListener('loadstart', loginWindowLoadHandler);
            loginWindow.addEventListener('exit', loginWindowExitHandler);
        }

    };

    var logout = function(callback) {
        var access_token = tokenStore['access_token']
        delete tokenStore['access_token'];
        if (callback) {
            callback(access_token);
        }
    };

    var oauthCallback = function(url) {
        // Parse the OAuth data received from Facebook
        var queryString;
        var queryObj;

        loginProcessed = true;

        if (url.indexOf("access_token=") !== -1) {
            queryString = url.substr(url.indexOf('#') + 1);
            queryObj = $.deparam(queryString)
            console.log(queryObj)
            tokenStore.access_token = queryObj.access_token;
            console.log(tokenStore)
            if (loginCallback) {
                loginCallback({
                    status: 'connected', 
                    token: queryObj['access_token']
                });
            }
        } else if (url.indexOf("error=") !== -1) {
            queryString = url.substring(url.indexOf('?') + 1, url.indexOf('#'));
            queryObj = $.deparam(queryString);
            if (loginCallback) {
                loginCallback({
                    status: 'not_authorized', 
                    error: queryObj.error
                });
            }
        } else {
            if (loginCallback) {
                loginCallback({
                    status: 'not_authorized'
                });
            }
        }
    };

    return {
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        // init: init,
        oauthCallback: oauthCallback,
    }

})();

module.exports = oauth;

},{"jquery":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/jquery/dist/jquery.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/main.js":[function(require,module,exports){
'use strict';
// include styles
require('../css');

// import Famo.us dependencies
var Engine = require('famous/core/Engine');

// import layout
var CustomLayout = require('./customComponents/CustomLayout');
var serverRequests = require('./services/serverRequests');
serverRequests.getData();


// create display context
var mainContext = Engine.createContext();

// create Layout
var layout = new CustomLayout({
  headerSize: 75,
  footerSize: 50,
  serverRequests: serverRequests
});

// attach layout to display context
mainContext.add(layout);

},{"../css":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/css/index.js","./customComponents/CustomLayout":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/customComponents/CustomLayout.js","./services/serverRequests":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/services/serverRequests.js","famous/core/Engine":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Engine.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/services/serverRequests.js":[function(require,module,exports){
'use strict';
var $ = require('jquery');
var serverRequests = {};

//serverRequests.data stores yarn data from server
serverRequests.data = [];

/*
serverRequests.cache is a hash with keys that correspond to _id of each yarn and values that
correspond to the index those yarns are stored in the serverRequests.data array.
*/
serverRequests.cache = {};


/*
getData fetches data from server and stores it in data array
Stores strings of _id in cache 
*/
serverRequests.getData = function(callback){
  $.ajax({
    type: 'GET',
    url: 'http://photoyarn.azurewebsites.net/getAllYarns',
    success: function (data) {
      for(var i = 0; i < data.length; i++){
        var cur = data[i];
        var id = data[i]._id;
        this.cache[id] = this.data.length;
        this.data.push(cur);
      }
      if(callback){
        callback(this.data);
      }
    }.bind(this),
    error: function (error) {
      console.log('Get Data Error: ', error);
    }
  });
};

/*
Checks for updated data from server, updates cache and data array if new info found.
Should emit an update event when update is succesful, to dictate state changes
*/
serverRequests.updateData = function(){
  console.log('Updating Data');
  $.ajax({
    type: 'GET',
    url: 'http://photoyarn.azurewebsites.net/getAllYarns',
    success: function (data) {
      for(var i = 0; i < data.length; i++){
        var cur = data[i];
        var id = data[i]._id;
        if(this.cache[id] === undefined){
          console.log('New Entry Found: ', cur);
          this.cache[id] = this.data.length;
          this.data.push(cur);
        } else if(this.data[this.cache[id]].links.length !== cur.links.length){
          console.log('Updated An Entry: ', cur);
          this.data.splice([this.cache[id]],1, cur);
        }
      }
    }.bind(this),
    error: function (error) {
      console.log('Update Data Error: ', error);
    }
  });
};

/*
Posts images to imgur, and then either adds to a yarn or creates a new yarn.
Requires a data object with a caption, and a ._id which is the yarns unique id.
Requires a b64 string of the image to post to imgur, data.b64image.
*/
serverRequests.postToImgur = function(data, route){
  var serverData = {};
  serverData.caption = data.caption;
  //serverData.creatorId is hard coded currently, as we do not have users implemented yet!
  serverData.creatorId = 21;
  //updated due to success callback
  serverData.link;
  serverData.imgurId;
  serverData.yarnId = data._id
 $.ajax({
    type: 'POST',
    url: 'https://api.imgur.com/3/upload',
    headers: {
      Authorization: 'Client-ID ' + 'ef774ae96ae304c',
    },
    data: {
      image: data.b64image,
      //title is not necessary for the purposes of our app. 
      title: data.caption
    },
    success: function (res) {
      console.log('Post to Imgur Success: ', res.data);
      serverData.link = res.data.link;
      serverData.imgurId = res.data.id
      console.log('Server data', serverData);
      if(route === 'add'){
        serverRequests.postPhotoToServerYarn(serverData);
      }else if(route === 'new'){
        serverRequests.postYarnToServer(serverData);
      }
    },
    error: function (error, res) {
      console.log('Post to Imgur Error: ', error);
      console.log('Post to Imgur Error Response: ', res);
    }
  });
};

/*
Adds a new yarn to the server
On success will invoke the update function
Requires a data object with imgurId, link, caption, and creatorId properties
*/
serverRequests.postYarnToServer = function(data){
  'posting new yarn to Server!'
  $.ajax({
    type: 'POST',
    url: 'http://photoyarn.azurewebsites.net/createNewYarn',
    data: {
      imgurId: data.imgurId,
      link: data.link,
      caption: data.caption,
      creatorId: data.creatorId
    },
    success: function(res){
      console.log('Post to Server Success: ', res);
      serverRequests.updateData();
    },
    error: function(error, res){
      console.log('Post to Server Error: ', error);
      console.log('Post Error Response: ', res);
    }
  });
};

/*
Adds a photo to a yarn on the server
On success, will invoke the update function
Requires a data object with yarnId and link properties.
*/
serverRequests.postPhotoToServerYarn = function(data){
  console.log('posting Photo to Yarn', data);
  $.ajax({
    type: 'POST',
    url: 'http://photoyarn.azurewebsites.net/addToYarn',
    data: {
      yarnId: data.yarnId,
      link: data.link
    },
    success: function(res){
      console.log('Post to Server Success: ', res);
      serverRequests.updateData();
    },
    error: function(error, res){
      console.log('Post to Server Error: ', error);
      console.log('Post to Server Error Response: ', res);
    }
  });
};

serverRequests.getUserDataFromServer = function(userId){
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://photoyarn.azurewebsites.net/user/' + userId,
  //   success: function(res){
  //     console.log('Post to Server Success!', res);
  //        return res;
  //   },
  //   error: function(error, res){
  //     console.log('Get user data from server error', error, res);
  //   }
  // });
  
  // for now I'm returning data before we set up the db to actually handle
  //  the real GET request commented out above - Kyle
  return {
    profilePicUrl: 'assets/catTied.png',
    username: 'exampleUserName',
    userLocation: 'San Francisco',
    numFollowers: 12,
    numFollowing: 33,
    likes: 11
  }
};

module.exports = serverRequests;

},{"jquery":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/jquery/dist/jquery.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/AddToYarnView.js":[function(require,module,exports){
'use strict';
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var StateModifier = require('famous/modifiers/StateModifier');
var ImageSurface = require('famous/surfaces/ImageSurface');
var Transform = require('famous/core/Transform');

//placeholder image used in production
var catGif = 'assets/catGif.gif';

//This is used 
var serverRequests;

/*
When this view is rendered it has a this.yarnData property
this.yarnData has  caption, _id, and a creatorId properties
When picture is added, it creates a b64image property to this.yarnData
*/


if(navigator.camera){

  //options used when taking pictures with device camera
  var takePictureOptions = {
    quality: 25,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,
    correctOrientation: true,
    saveToPhotoAlbum: true,
    encodingType: Camera.EncodingType.JPEG
  };

  //options used when getting pictures from device library
  var getPictureOptions = {
    quality: 25,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
    correctOrientation: true,
    encodingType: Camera.EncodingType.JPEG

  };    
}

function AddToYarn(){
  View.apply(this, arguments);

  _createTakePictureButton.call(this);
  _createGetPictureButton.call(this);
  _createSendButton.call(this);
  serverRequests = this.options.serverRequests;

  this.add(pictureFrame);
}

var pictureFrame = new ImageSurface({
  content: catGif,
  align: [0.5, 0.5],
  origin: [0.5, 0.5],
  size: [200, true]
});

AddToYarn.prototype = Object.create(View.prototype);
AddToYarn.prototype.constructor = AddToYarn;
AddToYarn.DEFAULT_OPTIONS = {
  getPictureMsg: 'Get Picture',
  takePictureMsg: 'Take Picture'    
};

function _createSendButton(){
  

  this.sendButtonModifier = new StateModifier({
    transform : Transform.translate(0, -200, 0)
  });


  this.sendButton = new Surface({
    size: [50, 20],
    content: 'Submit',
    properties: {
      backgroundColor: 'red'
    }
  });

  var buttonModifier = new StateModifier({
      // places the icon in the proper location
      transform: Transform.translate(100, 0, 0)
  });

  var sendButtonNode = this.add(this.sendButtonModifier);
  sendButtonNode.add(this.sendButton);

  this.sendButton.on('click', function(){
    pictureFrame.setContent(catGif);
    serverRequests.postToImgur(this.yarnData, 'add');
  }.bind(this));

}


function _createTakePictureButton() {

  this.takePictureModifier = new StateModifier({
    align: [0.25,1],
    origin: [0.25,1]
  });

  this.takePicture = new Surface({
    size: [100, true],
    content: this.options.takePictureMsg,
    properties: {
      backgroundColor: '#fa5c4f',
      color: 'white',
    },
  });

  this.add(this.takePictureModifier).add(this.takePicture);

  this.takePicture.on('click', function(){
    var context = this;
    navigator.camera.getPicture(function(data){
      onCameraSuccess(data, context)
    }, onCameraFail, takePictureOptions);
    }.bind(this));
}

function _createGetPictureButton() {
  this.getPictureModifier = new StateModifier({
    origin: [0.75,1],
    align: [0.75, 1]
  });

  this.getPicture = new Surface({
    size: [100, true],
    content: this.options.getPictureMsg,
    properties: {
      backgroundColor: '#fa5c4f',
      color: 'white',
    },
  });

  this.add(this.getPictureModifier).add(this.getPicture);

  this.getPicture.on('click', function(){
    var context = this;
    navigator.camera.getPicture(function(data){
      onCameraSuccess(data, context)
    }, onCameraFail, getPictureOptions);
    }.bind(this));
}


function onCameraSuccess(data, context){
  pictureFrame.setContent('data:image/jpeg;base64,' + data);
  context.yarnData.b64image = data;
}

function onCameraFail(error){
  console.log('Camera Error:', error);
}

module.exports = AddToYarn;


},{"famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","famous/modifiers/StateModifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/modifiers/StateModifier.js","famous/surfaces/ImageSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/FeedEntryView.js":[function(require,module,exports){
'use strict';

// import famo.us dependencies
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var ImageSurface = require('famous/surfaces/ImageSurface');
var Transform = require('famous/core/Transform');

// FeedEntryView constructor
function FeedEntryView(options, yarnData){
  View.apply(this, arguments);

  // initialize class variables
  this.photoCount = 0;

  // adding elements
  _createRootNode.call(this);
  _createBackground.call(this, yarnData);
  _createHeaders.call(this, yarnData);
  _createPhotos.call(this, yarnData);
  _setListeners.call(this, yarnData);
}

// set defaults
FeedEntryView.prototype = Object.create(View.prototype);
FeedEntryView.prototype.constructor = FeedEntryView;
FeedEntryView.DEFAULT_OPTIONS = {
  entrySize: [undefined, 125],
  defaultCaption: 'This is the default caption',
  captionSize: [undefined, 25],
  photosToShow: 5,
  photoSize: [50, 67],
  textAlign: 'center',
  entryButtonSize: [100, 25],
  dividerHeight: 1,
  photoPadding: 10,
  showNum: 4,
};

// create root modifier
function _createRootNode() {
  this.rootModifier = new Modifier({
    transform: Transform.translate(0,0,1),
    size: [this.options.entrySize[0], this.options.entrySize[1]],
    align: [0, 0],
    origin: [0, 0]
  });

  this.rootNode = this.add(this.rootModifier);
}

// create background
function _createBackground(yarnData) {
  this.background = new Surface({
    content: yarnData.caption,
    size: [this.options.entrySize[0], this.options.entrySize[1]],
    classes: ['FeedEntryBackground'],
    properties: {
      backgroundColor: '#DDD',
    }
  });

  this.rootNode.add(this.background);
}

// create header
function _createHeaders(yarnData) {
  this.yarnDetailButton = new Surface({
    size: [this.options.entryButtonSize[0], this.options.entryButtonSize[1]],
    content: yarnData.links.length + ' photos ' + '\u2794',
    properties: {
      backgroundColor: '#FF6138',
      lineHeight: this.options.captionSize[1] + 'px',
      textAlign: this.options.textAlign,
      borderRadius: '5px',
      cursor: 'pointer',
    }
  });

  var yarnDetailButtonModifier = new Modifier({
    transform: Transform.translate(-3,3,2),
    align: [1,0],
    origin: [1,0]
  });

  this.rootNode.add(yarnDetailButtonModifier).add(this.yarnDetailButton);
}

// create photos display
function _createPhotos(yarnData) {
  this.photos = [];

  // display number of photos and addPhotoButton
  for (var i = 0; i <= yarnData.links.length && i <= this.options.showNum; i++) {
    if (i === yarnData.links.length || i === this.options.showNum) {
      // instantiate addPhotoButton elem
      var elem = new Surface({
        size: [this.options.photoSize[0], this.options.photoSize[1]],
        content: '+',
        classes: ['FeedEntryPhoto'],
        properties: {
          textSize: 30 + 'px',
          backgroundColor: '#CCC',
          textAlign: 'center',
          lineHeight: this.options.photoSize[1] + 'px',
          cursor: 'pointer',
        }
      });
      this.addPhotoButton = elem;
    } else {
      // instantiate photo elem
      var elem = new ImageSurface({
        size: [this.options.photoSize[0], this.options.photoSize[1]],
        content: yarnData.links[i],
        classes: ['FeedEntryPhoto'],
        properties: {
          'pointer-events': 'none',
        },
      });
    }

    var elemModifier = new Modifier({
      transform: Transform.translate(0,0,2),
      align: [i * (this.options.photoSize[0] + this.options.photoPadding) / window.innerWidth , 0.9],
      origin: [0, 1]
    });

    this.rootNode.add(elemModifier).add(elem);
  }
}

// set listeners
function _setListeners(yarnData) {
  // associate click events to display actions
  this.yarnDetailButton.on('click', function() {
    this._eventOutput.emit('showYarnDetail', yarnData);
  }.bind(this));
  this.addPhotoButton.on('click', function() {
    this._eventOutput.emit('showAddToYarn', yarnData);
  }.bind(this));

  // bubble up sync events for scrolling
  this.yarnDetailButton.pipe(this._eventOutput);
  this.addPhotoButton.pipe(this._eventOutput);
  this.background.pipe(this._eventOutput);
}

module.exports = FeedEntryView;

},{"famous/core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","famous/surfaces/ImageSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/FeedView.js":[function(require,module,exports){
'use strict';

// import famo.us dependencies
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform  = require('famous/core/Transform');
var Scrollview = require('famous/views/Scrollview');
var ViewSequence = require('famous/core/ViewSequence');

// import views
var FeedEntryView = require('./FeedEntryView');

// initialize class variables
var photoCache = {};

// FeedView constructor
function FeedView(){
  View.apply(this, arguments);
  _createRootNode.call(this);
  _createBackground.call(this);
  _setListeners.call(this);
}

// set defaults
FeedView.prototype = Object.create(View.prototype);
FeedView.prototype.constructor = FeedView;
FeedView.DEFAULT_OPTIONS = {
  message: 'Default message',
  entryCount: 4,
  entryHeight: 175
};

function _createBackground() {
  this.background = new Surface({
    size: [,],
    properties: {
      backgroundColor: '#BADA55',
    }
  });
  
  var bgMod = new Modifier({
    transform: Transform.translate(0,0,-15)
  });
  
  this.rootNode.add(bgMod).add(this.background);

}

// create root modifier node
function _createRootNode() {
  this.rootModifier = new Modifier({
    align: [0, 0],
    origin: [0, 0]
  });

  this.rootNode = this.add(this.rootModifier);
}

FeedView.prototype.createFeedEntriesFromServer = function(data) {
  this.feed = this.feed || new Scrollview({
    direction: 1,
    margin: 10000 // without this some entries would stop rendering on a hard scroll (fix from https://github.com/Famous/views/issues/11)
  });

  this.entries = new ViewSequence();

  this.feed.sequenceFrom(this.entries);   

  for (var i = 0; i < data.length; i++) {
    var newEntryView = new FeedEntryView({eventTarget: this.options.eventTarget}, data[i]);
    newEntryView.pipe(this.feed);
    newEntryView.pipe(this._eventOutput); 
    photoCache[data[i]._id] = newEntryView;
    this.entries.push(newEntryView);
  }
  
  var feedModifier = new Modifier({
    transform: Transform.translate(0, 0, -10)
  });
  
  this.rootNode.add(feedModifier).add(this.feed);
} 

function _setListeners() {

}

module.exports = FeedView;

},{"./FeedEntryView":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/FeedEntryView.js","famous/core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","famous/core/ViewSequence":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ViewSequence.js","famous/views/Scrollview":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/Scrollview.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/NewYarnView.js":[function(require,module,exports){
'use strict';
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var StateModifier = require('famous/modifiers/StateModifier');
var ImageSurface = require('famous/surfaces/ImageSurface');
var InputSurface = require('famous/surfaces/InputSurface');
var Transform = require('famous/core/Transform');

var serverRequests;
var pictureFrame;

//Variables used by this view
var catGif = './assets/catGif.gif';

if(navigator.camera){
  var takePictureOptions = {
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,
    correctOrientation: true,
    saveToPhotoAlbum: true,
    encodingType: Camera.EncodingType.JPEG,
    quality: 25
  };

  var getPictureOptions = {
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
    correctOrientation: true,
    encodingType: Camera.EncodingType.JPEG,
    quality: 25
  };    
}

function NewYarnView(){
  View.apply(this, arguments);

  this.yarnData = {};

  _createTakePictureButton.call(this);
  _createGetPictureButton.call(this);
  _createCaption.call(this);
  _createPictureFrame.call(this);
  serverRequests = this.options.serverRequests;

}

NewYarnView.prototype = Object.create(View.prototype);
NewYarnView.prototype.constructor = NewYarnView;
NewYarnView.DEFAULT_OPTIONS = {
  getPictureMsg: 'Get Picture',
  takePictureMsg: 'Take Picture',
  picSize: [175, 220]
};

function _createCaption(){
  this.caption = new InputSurface({
    size: [this.options.picSize[0], true],
    placeholder: 'Your caption here'
  });

  this.captionModifier = new StateModifier({
    align: [0.5, 0],
    origin: [0.5, -4]
  });

  this.captionButton = new Surface({
    size: [50, 50],
    content: 'Submit',
    classes: ['CaptionSubmitButton'],
    properties: {
      borderRadius: '10px',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: '50px',
      backgroundColor: '#FF6138',
      color: 'white',
    },
  });

  var buttonModifier = new StateModifier({
    align: [0.5,1],
    origin: [0.5,1.5]
  });

  var captionNode = this.add(this.captionModifier);
  captionNode.add(this.caption);
  captionNode.add(buttonModifier).add(this.captionButton);

  this.captionButton.on('click', function(){
    if(this.caption.getValue() !== undefined && pictureFrame.getContent() !== catGif){
      this.yarnData.caption = this.caption.getValue();
      this.caption.setValue('');
      pictureFrame.setContent(catGif);
      this.options.serverRequests.postToImgur(this.yarnData, 'new');
    }
  }.bind(this));

}


function _createTakePictureButton() {

  this.takePictureModifier = new StateModifier({
    align: [0.25,1],
    origin: [0.5,1.5]
  });

  this.takePicture = new Surface({
    size: [100, 50],
    content: this.options.takePictureMsg,
    properties: {
      borderRadius: '10px',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: '50px',
      backgroundColor: '#79BD8F',
      color: 'white',
    },
  });

  this.add(this.takePictureModifier).add(this.takePicture);

  this.takePicture.on('click', function(){
    var context = this;
    navigator.camera.getPicture(function(data){
      onCameraSuccess(data, context)
    }, onCameraFail, takePictureOptions);
    }.bind(this));
}

function _createGetPictureButton() {
  this.getPictureModifier = new StateModifier({
    origin: [0.5, 1.5],
    align: [0.75, 1]
  });

  this.getPicture = new Surface({
    size: [100, 50],
    content: this.options.getPictureMsg,
    properties: {
      borderRadius: '10px',
      lineHeight: '50px',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#79BD8F',
      color: 'white',
    },
  });

  this.add(this.getPictureModifier).add(this.getPicture);

  this.getPicture.on('click', function(){
    var context = this;
    navigator.camera.getPicture(function(data){
      onCameraSuccess(data, context)
    }, onCameraFail, getPictureOptions);
    }.bind(this));
}

function _createPictureFrame() {
  pictureFrame = new ImageSurface({
    content: catGif,
    size: [this.options.picSize[0], this.options.picSize[1]],
    classes: ['AddPicViewPic']
  });
  
  var pictureFrameModifier = new StateModifier({
    align: [0.5, 0.5],
    origin: [0.5, 0.5]  
  });
  
  this.add(pictureFrameModifier).add(pictureFrame);
}


function onCameraSuccess(data, context){
  pictureFrame.setContent('data:image/jpeg;base64,' + data);
  context.yarnData.b64image = data;
}

function onCameraFail(error){
  console.log('Camera Error:', error);
}

module.exports = NewYarnView;


},{"famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","famous/modifiers/StateModifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/modifiers/StateModifier.js","famous/surfaces/ImageSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js","famous/surfaces/InputSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/InputSurface.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/ProfileView.js":[function(require,module,exports){
'use strict';
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var ImageSurface = require('famous/surfaces/ImageSurface');

var ServerRequests = require('../services/serverRequests');

function ProfileView(userId){
  View.apply(this, arguments);
  var userData = ServerRequests.getUserDataFromServer(userId);

  _createBackground.call(this);
  _createProfileHeader.call(this, userData);
}

ProfileView.prototype = Object.create(View.prototype);
ProfileView.prototype.constructor = ProfileView;
ProfileView.DEFAULT_OPTIONS = {
  profilePicSize: [75, 75]
  
};

function _createBackground() {
  // this.add(bgModifier).add(background);
}

function _createProfileHeader(userData) {
  // profile pic
  var profilePic = new ImageSurface({
    size: [this.options.profilePicSize[0], this.options.profilePicSize[1]],
    content: userData.profilePicUrl,
    classes: ['ProfilePic']
  });
  
  var profilePicModifier = new Modifier({
    align: [0,0],
    origin: [0,0],
    properties: {
      borderRadius: '10px'
    }
  });
  
  this.add(profilePicModifier).add(profilePic);
  
  // username
  var username = new Surface({
    size: [window.innerWidth - this.options.profilePicSize[0], this.options.profilePicSize[1] / 4],
    content: userData.username,
    classes: ['ProfileUsername'],
    properties: {
      backgroundColor: '#CFC',
      fontWeight: 'bold'
    }
  });
  
  var usernameModifier = new Modifier({
    align: [1, 0],
    origin: [1, 0]
  });
  
  this.add(usernameModifier).add(username);
  
  // user location
  var userLocation = new Surface({
    size: [window.innerWidth - this.options.profilePicSize[0], this.options.profilePicSize[1] / 4],
    content: userData.userLocation,
    classes: ['ProfileUserLocation'],
    properties: {
      backgroundColor: '#EEE'
    }
  });
  
  var userLocationModifier = new Modifier({
    align: [1, 0],
    origin: [1, -1]
  });
  
  
  this.add(userLocationModifier).add(userLocation);
  
  // followers, following, likes button panel
  var followersButton = new Surface({
    size: [(window.innerWidth - this.options.profilePicSize[0]) / 3, this.options.profilePicSize[1] / 2],
    content: userData.numFollowers + ' Followers',
    classes: ['ProfileViewFollowersButton', 'ProfileHeaderButton'],
    properties: {
      backgroundColor: '#ACA',
      textAlign: 'center'
    }
  });
  
  var followersButtonModifier = new Modifier({
    align: [1, 0],
    origin: [3, -1]
  });
  
  this.add(followersButtonModifier).add(followersButton);
  
  var followingButton = new Surface({
    size: [(window.innerWidth - this.options.profilePicSize[0]) / 3, this.options.profilePicSize[1] / 2],
    content: userData.numFollowing + ' Following',
    classes: ['ProfileViewFollowingButton', 'ProfileHeaderButton'],
    properties: {
      backgroundColor: '#ACA',
      textAlign: 'center'
    }
  });
  
  var followingButtonModifier = new Modifier({
    align: [1, 0],
    origin: [2, -1]
  });
  
  this.add(followingButtonModifier).add(followingButton);
  
  var likesButton = new Surface({
    size: [(window.innerWidth - this.options.profilePicSize[0]) / 3, this.options.profilePicSize[1] / 2],
    content: userData.likes + ' Likes',
    classes: ['ProfileViewLikesButton', 'ProfileHeaderButton'],
    properties: {
      backgroundColor: '#ACA',
      textAlign: 'center'
    }
  });
  
  var likesButtonModifier = new Modifier({
    align: [1, 0],
    origin: [1, -1]
  });
  
  this.add(likesButtonModifier).add(likesButton);

}

module.exports = ProfileView;


},{"../services/serverRequests":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/services/serverRequests.js","famous/core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","famous/surfaces/ImageSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/views/YarnView.js":[function(require,module,exports){
'use strict';
var View = require('famous/core/View');
var StateModifier = require('famous/modifiers/StateModifier');
var ImageSurface = require('famous/surfaces/ImageSurface');
var Scrollview = require('famous/views/Scrollview');
var ViewSequence = require('famous/core/ViewSequence');
var Transform = require('famous/core/Transform');
var Surface = require('famous/core/Surface');

var serverRequests = require('../services/serverRequests');
var dummyTarget = "53e5499be71a74d003372cc1";

function YarnView(){
  View.apply(this, arguments);
  console.log(serverRequests.data);
  console.log('Yarn Data', this.yarnData);

  _createYarn.call(this);
}


YarnView.prototype = Object.create(View.prototype);
YarnView.prototype.constructor = YarnView;
YarnView.DEFAULT_OPTIONS = {
  entryHeight: 175
}



function _createYarn(){

  this.scrollView = new Scrollview({
    align: [0.5, 0],
    origin: [0.5, 0],
    margin: 10000
  })
  this.scrollModifier = new StateModifier({
    size: [100,],
    align: [0.5, 0],
    origin: [0.5, 0],
    transform: Transform.translate(0,15,-10)
  });
  this.add(this.scrollModifier).add(this.scrollView);

}

YarnView.prototype.createDetail = function(data){

  var targetArray = data.links;
  console.log(targetArray)
  this.sequence = [];
  for(var i = 0; i < targetArray.length; i++){
    var cur = targetArray[i];
    console.log(cur);
    var image = new ImageSurface({
      size: [100,125],
      content: cur
    })
    image.pipe(this.scrollView);
    this.sequence.push(image);      
    console.log(this.sequence);
  }

  // imageSurface.setContent('assets/catgif.gif')

  var addPhotoButton = new Surface({
      size: [100, 30],
      content: '+',
      properties: {
        textSize: 30 + 'px',
        backgroundColor: '#CCC',
        textAlign: 'center',
      }
    });

  this.sequence.push(addPhotoButton);

  addPhotoButton.on('click', function(){
    this._eventOutput.emit('showAddToYarn', this.yarnData);
  }.bind(this))

  this.scrollView.sequenceFrom(this.sequence);
}

module.exports = YarnView;

},{"../services/serverRequests":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/services/serverRequests.js","famous/core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","famous/core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","famous/core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","famous/core/ViewSequence":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ViewSequence.js","famous/modifiers/StateModifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/modifiers/StateModifier.js","famous/surfaces/ImageSurface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js","famous/views/Scrollview":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/Scrollview.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/cssify/browser.js":[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Context.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var RenderNode = require('./RenderNode');
var EventHandler = require('./EventHandler');
var ElementAllocator = require('./ElementAllocator');
var Transform = require('./Transform');
var Transitionable = require('../transitions/Transitionable');

var _originZeroZero = [0, 0];

function _getElementSize(element) {
    return [element.clientWidth, element.clientHeight];
}

/**
 * The top-level container for a Famous-renderable piece of the document.
 *   It is directly updated by the process-wide Engine object, and manages one
 *   render tree root, which can contain other renderables.
 *
 * @class Context
 * @constructor
 * @private
 * @param {Node} container Element in which content will be inserted
 */
function Context(container) {
    this.container = container;
    this._allocator = new ElementAllocator(container);

    this._node = new RenderNode();
    this._eventOutput = new EventHandler();
    this._size = _getElementSize(this.container);

    this._perspectiveState = new Transitionable(0);
    this._perspective = undefined;

    this._nodeContext = {
        allocator: this._allocator,
        transform: Transform.identity,
        opacity: 1,
        origin: _originZeroZero,
        align: null,
        size: this._size
    };

    this._eventOutput.on('resize', function() {
        this.setSize(_getElementSize(this.container));
    }.bind(this));

}

// Note: Unused
Context.prototype.getAllocator = function getAllocator() {
    return this._allocator;
};

/**
 * Add renderables to this Context's render tree.
 *
 * @method add
 *
 * @param {Object} obj renderable object
 * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
 */
Context.prototype.add = function add(obj) {
    return this._node.add(obj);
};

/**
 * Move this Context to another containing document element.
 *
 * @method migrate
 *
 * @param {Node} container Element to which content will be migrated
 */
Context.prototype.migrate = function migrate(container) {
    if (container === this.container) return;
    this.container = container;
    this._allocator.migrate(container);
};

/**
 * Gets viewport size for Context.
 *
 * @method getSize
 *
 * @return {Array.Number} viewport size as [width, height]
 */
Context.prototype.getSize = function getSize() {
    return this._size;
};

/**
 * Sets viewport size for Context.
 *
 * @method setSize
 *
 * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
 */
Context.prototype.setSize = function setSize(size) {
    if (!size) size = _getElementSize(this.container);
    this._size[0] = size[0];
    this._size[1] = size[1];
};

/**
 * Commit this Context's content changes to the document.
 *
 * @private
 * @method update
 * @param {Object} contextParameters engine commit specification
 */
Context.prototype.update = function update(contextParameters) {
    if (contextParameters) {
        if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
        if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
        if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
        if (contextParameters.align) this._nodeContext.align = contextParameters.align;
        if (contextParameters.size) this._nodeContext.size = contextParameters.size;
    }
    var perspective = this._perspectiveState.get();
    if (perspective !== this._perspective) {
        this.container.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
        this.container.style.webkitPerspective = perspective ? perspective.toFixed() : '';
        this._perspective = perspective;
    }

    this._node.commit(this._nodeContext);
};

/**
 * Get current perspective of this context in pixels.
 *
 * @method getPerspective
 * @return {Number} depth perspective in pixels
 */
Context.prototype.getPerspective = function getPerspective() {
    return this._perspectiveState.get();
};

/**
 * Set current perspective of this context in pixels.
 *
 * @method setPerspective
 * @param {Number} perspective in pixels
 * @param {Object} [transition] Transitionable object for applying the change
 * @param {function(Object)} callback function called on completion of transition
 */
Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
    return this._perspectiveState.set(perspective, transition, callback);
};

/**
 * Trigger an event, sending to all downstream handlers
 *   listening for provided 'type' key.
 *
 * @method emit
 *
 * @param {string} type event type key (for example, 'click')
 * @param {Object} event event data
 * @return {EventHandler} this
 */
Context.prototype.emit = function emit(type, event) {
    return this._eventOutput.emit(type, event);
};

/**
 * Bind a callback function to an event type handled by this object.
 *
 * @method "on"
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function(string, Object)} handler callback
 * @return {EventHandler} this
 */
Context.prototype.on = function on(type, handler) {
    return this._eventOutput.on(type, handler);
};

/**
 * Unbind an event by type and handler.
 *   This undoes the work of "on".
 *
 * @method removeListener
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function} handler function object to remove
 * @return {EventHandler} internal event handler object (for chaining)
 */
Context.prototype.removeListener = function removeListener(type, handler) {
    return this._eventOutput.removeListener(type, handler);
};

/**
 * Add event handler object to set of downstream handlers.
 *
 * @method pipe
 *
 * @param {EventHandler} target event handler target object
 * @return {EventHandler} passed event handler
 */
Context.prototype.pipe = function pipe(target) {
    return this._eventOutput.pipe(target);
};

/**
 * Remove handler object from set of downstream handlers.
 *   Undoes work of "pipe".
 *
 * @method unpipe
 *
 * @param {EventHandler} target target handler object
 * @return {EventHandler} provided target
 */
Context.prototype.unpipe = function unpipe(target) {
    return this._eventOutput.unpipe(target);
};

module.exports = Context;
},{"../transitions/Transitionable":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js","./ElementAllocator":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ElementAllocator.js","./EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","./RenderNode":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/RenderNode.js","./Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ElementAllocator.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */




/**
 * Internal helper object to Context that handles the process of
 *   creating and allocating DOM elements within a managed div.
 *   Private.
 *
 * @class ElementAllocator
 * @constructor
 * @private
 * @param {Node} container document element in which Famo.us content will be inserted
 */
function ElementAllocator(container) {
    if (!container) container = document.createDocumentFragment();
    this.container = container;
    this.detachedNodes = {};
    this.nodeCount = 0;
}

/**
 * Move the document elements from their original container to a new one.
 *
 * @private
 * @method migrate
 *
 * @param {Node} container document element to which Famo.us content will be migrated
 */
ElementAllocator.prototype.migrate = function migrate(container) {
    var oldContainer = this.container;
    if (container === oldContainer) return;

    if (oldContainer instanceof DocumentFragment) {
        container.appendChild(oldContainer);
    }
    else {
        while (oldContainer.hasChildNodes()) {
            container.appendChild(oldContainer.removeChild(oldContainer.firstChild));
        }
    }

    this.container = container;
};

/**
 * Allocate an element of specified type from the pool.
 *
 * @private
 * @method allocate
 *
 * @param {string} type type of element, e.g. 'div'
 * @return {Node} allocated document element
 */
ElementAllocator.prototype.allocate = function allocate(type) {
    type = type.toLowerCase();
    if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
    var nodeStore = this.detachedNodes[type];
    var result;
    if (nodeStore.length > 0) {
        result = nodeStore.pop();
    }
    else {
        result = document.createElement(type);
        this.container.appendChild(result);
    }
    this.nodeCount++;
    return result;
};

/**
 * De-allocate an element of specified type to the pool.
 *
 * @private
 * @method deallocate
 *
 * @param {Node} element document element to deallocate
 */
ElementAllocator.prototype.deallocate = function deallocate(element) {
    var nodeType = element.nodeName.toLowerCase();
    var nodeStore = this.detachedNodes[nodeType];
    nodeStore.push(element);
    this.nodeCount--;
};

/**
 * Get count of total allocated nodes in the document.
 *
 * @private
 * @method getNodeCount
 *
 * @return {Number} total node count
 */
ElementAllocator.prototype.getNodeCount = function getNodeCount() {
    return this.nodeCount;
};

module.exports = ElementAllocator;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Engine.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

/**
 * The singleton object initiated upon process
 *   startup which manages all active Context instances, runs
 *   the render dispatch loop, and acts as a listener and dispatcher
 *   for events.  All methods are therefore static.
 *
 *   On static initialization, window.requestAnimationFrame is called with
 *     the event loop function.
 *
 *   Note: Any window in which Engine runs will prevent default
 *     scrolling behavior on the 'touchmove' event.
 *
 * @static
 * @class Engine
 */
var Context = require('./Context');
var EventHandler = require('./EventHandler');
var OptionsManager = require('./OptionsManager');

var Engine = {};

var contexts = [];
var nextTickQueue = [];
var deferQueue = [];

var lastTime = Date.now();
var frameTime;
var frameTimeLimit;
var loopEnabled = true;
var eventForwarders = {};
var eventHandler = new EventHandler();

var options = {
    containerType: 'div',
    containerClass: 'famous-container',
    fpsCap: undefined,
    runLoop: true
};
var optionsManager = new OptionsManager(options);

/** @const */
var MAX_DEFER_FRAME_TIME = 10;

/**
 * Inside requestAnimationFrame loop, step() is called, which:
 *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
 *   emits dataless 'prerender' event on start of loop,
 *   calls in order any one-shot functions registered by nextTick on last loop,
 *   calls Context.update on all Context objects registered,
 *   and emits dataless 'postrender' event on end of loop.
 *
 * @static
 * @private
 * @method step
 */
Engine.step = function step() {
    var currentTime = Date.now();

    // skip frame if we're over our framerate cap
    if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;

    var i = 0;

    frameTime = currentTime - lastTime;
    lastTime = currentTime;

    eventHandler.emit('prerender');

    // empty the queue
    for (i = 0; i < nextTickQueue.length; i++) nextTickQueue[i].call(this);
    nextTickQueue.splice(0);

    // limit total execution time for deferrable functions
    while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
        deferQueue.shift().call(this);
    }

    for (i = 0; i < contexts.length; i++) contexts[i].update();

    eventHandler.emit('postrender');
};

// engage requestAnimationFrame
function loop() {
    if (options.runLoop) {
        Engine.step();
        window.requestAnimationFrame(loop);
    }
    else loopEnabled = false;
}
window.requestAnimationFrame(loop);

//
// Upon main document window resize (unless on an "input" HTML element):
//   scroll to the top left corner of the window,
//   and for each managed Context: emit the 'resize' event and update its size.
// @param {Object=} event document event
//
function handleResize(event) {
    for (var i = 0; i < contexts.length; i++) {
        contexts[i].emit('resize');
    }
    eventHandler.emit('resize');
}
window.addEventListener('resize', handleResize, false);
handleResize();

// prevent scrolling via browser
window.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, true);

/**
 * Add event handler object to set of downstream handlers.
 *
 * @method pipe
 *
 * @param {EventHandler} target event handler target object
 * @return {EventHandler} passed event handler
 */
Engine.pipe = function pipe(target) {
    if (target.subscribe instanceof Function) return target.subscribe(Engine);
    else return eventHandler.pipe(target);
};

/**
 * Remove handler object from set of downstream handlers.
 *   Undoes work of "pipe".
 *
 * @method unpipe
 *
 * @param {EventHandler} target target handler object
 * @return {EventHandler} provided target
 */
Engine.unpipe = function unpipe(target) {
    if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
    else return eventHandler.unpipe(target);
};

/**
 * Bind a callback function to an event type handled by this object.
 *
 * @static
 * @method "on"
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function(string, Object)} handler callback
 * @return {EventHandler} this
 */
Engine.on = function on(type, handler) {
    if (!(type in eventForwarders)) {
        eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);
        if (document.body) {
            document.body.addEventListener(type, eventForwarders[type]);
        }
        else {
            Engine.nextTick(function(type, forwarder) {
                document.body.addEventListener(type, forwarder);
            }.bind(this, type, eventForwarders[type]));
        }
    }
    return eventHandler.on(type, handler);
};

/**
 * Trigger an event, sending to all downstream handlers
 *   listening for provided 'type' key.
 *
 * @method emit
 *
 * @param {string} type event type key (for example, 'click')
 * @param {Object} event event data
 * @return {EventHandler} this
 */
Engine.emit = function emit(type, event) {
    return eventHandler.emit(type, event);
};

/**
 * Unbind an event by type and handler.
 *   This undoes the work of "on".
 *
 * @static
 * @method removeListener
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function} handler function object to remove
 * @return {EventHandler} internal event handler object (for chaining)
 */
Engine.removeListener = function removeListener(type, handler) {
    return eventHandler.removeListener(type, handler);
};

/**
 * Return the current calculated frames per second of the Engine.
 *
 * @static
 * @method getFPS
 *
 * @return {Number} calculated fps
 */
Engine.getFPS = function getFPS() {
    return 1000 / frameTime;
};

/**
 * Set the maximum fps at which the system should run. If internal render
 *    loop is called at a greater frequency than this FPSCap, Engine will
 *    throttle render and update until this rate is achieved.
 *
 * @static
 * @method setFPSCap
 *
 * @param {Number} fps maximum frames per second
 */
Engine.setFPSCap = function setFPSCap(fps) {
    frameTimeLimit = Math.floor(1000 / fps);
};

/**
 * Return engine options.
 *
 * @static
 * @method getOptions
 * @param {string} key
 * @return {Object} engine options
 */
Engine.getOptions = function getOptions() {
    return optionsManager.getOptions.apply(optionsManager, arguments);
};

/**
 * Set engine options
 *
 * @static
 * @method setOptions
 *
 * @param {Object} [options] overrides of default options
 * @param {Number} [options.fpsCap]  maximum fps at which the system should run
 * @param {boolean} [options.runLoop=true] whether the run loop should continue
 * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
 * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
 */
Engine.setOptions = function setOptions(options) {
    return optionsManager.setOptions.apply(optionsManager, arguments);
};

/**
 * Creates a new Context for rendering and event handling with
 *    provided document element as top of each tree. This will be tracked by the
 *    process-wide Engine.
 *
 * @static
 * @method createContext
 *
 * @param {Node} el will be top of Famo.us document element tree
 * @return {Context} new Context within el
 */
Engine.createContext = function createContext(el) {
    var needMountContainer = false;
    if (!el) {
        el = document.createElement(options.containerType);
        el.classList.add(options.containerClass);
        needMountContainer = true;
    }
    var context = new Context(el);
    Engine.registerContext(context);
    if (needMountContainer) {
        Engine.nextTick(function(context, el) {
            document.body.appendChild(el);
            context.emit('resize');
        }.bind(this, context, el));
    }
    return context;
};

/**
 * Registers an existing context to be updated within the run loop.
 *
 * @static
 * @method registerContext
 *
 * @param {Context} context Context to register
 * @return {FamousContext} provided context
 */
Engine.registerContext = function registerContext(context) {
    contexts.push(context);
    return context;
};

/**
 * Queue a function to be executed on the next tick of the
 *    Engine.
 *
 * @static
 * @method nextTick
 *
 * @param {function(Object)} fn function accepting window object
 */
Engine.nextTick = function nextTick(fn) {
    nextTickQueue.push(fn);
};

/**
 * Queue a function to be executed sometime soon, at a time that is
 *    unlikely to affect frame rate.
 *
 * @static
 * @method defer
 *
 * @param {Function} fn
 */
Engine.defer = function defer(fn) {
    deferQueue.push(fn);
};

optionsManager.on('change', function(data) {
    if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
    else if (data.id === 'runLoop') {
        // kick off the loop only if it was stopped
        if (!loopEnabled && data.value) {
            loopEnabled = true;
            window.requestAnimationFrame(loop);
        }
    }
});

module.exports = Engine;
},{"./Context":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Context.js","./EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","./OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Entity.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */



/**
 * A singleton that maintains a global registry of Surfaces.
 *   Private.
 *
 * @private
 * @static
 * @class Entity
 */

var entities = [];

/**
 * Get entity from global index.
 *
 * @private
 * @method get
 * @param {Number} id entity reigstration id
 * @return {Surface} entity in the global index
 */
function get(id) {
    return entities[id];
}

/**
 * Overwrite entity in the global index
 *
 * @private
 * @method set
 * @param {Number} id entity reigstration id
 * @return {Surface} entity to add to the global index
 */
function set(id, entity) {
    entities[id] = entity;
}

/**
 * Add entity to global index
 *
 * @private
 * @method register
 * @param {Surface} entity to add to global index
 * @return {Number} new id
 */
function register(entity) {
    var id = entities.length;
    set(id, entity);
    return id;
}

/**
 * Remove entity from global index
 *
 * @private
 * @method unregister
 * @param {Number} id entity reigstration id
 */
function unregister(id) {
    set(id, null);
}

module.exports = {
    register: register,
    unregister: unregister,
    get: get,
    set: set
};
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventEmitter.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */



/**
 * EventEmitter represents a channel for events.
 *
 * @class EventEmitter
 * @constructor
 */
function EventEmitter() {
    this.listeners = {};
    this._owner = this;
}

/**
 * Trigger an event, sending to all downstream handlers
 *   listening for provided 'type' key.
 *
 * @method emit
 *
 * @param {string} type event type key (for example, 'click')
 * @param {Object} event event data
 * @return {EventHandler} this
 */
EventEmitter.prototype.emit = function emit(type, event) {
    var handlers = this.listeners[type];
    if (handlers) {
        for (var i = 0; i < handlers.length; i++) {
            handlers[i].call(this._owner, event);
        }
    }
    return this;
};

/**
 * Bind a callback function to an event type handled by this object.
 *
 * @method "on"
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function(string, Object)} handler callback
 * @return {EventHandler} this
 */
   EventEmitter.prototype.on = function on(type, handler) {
    if (!(type in this.listeners)) this.listeners[type] = [];
    var index = this.listeners[type].indexOf(handler);
    if (index < 0) this.listeners[type].push(handler);
    return this;
};

/**
 * Alias for "on".
 * @method addListener
 */
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

   /**
 * Unbind an event by type and handler.
 *   This undoes the work of "on".
 *
 * @method removeListener
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function} handler function object to remove
 * @return {EventEmitter} this
 */
EventEmitter.prototype.removeListener = function removeListener(type, handler) {
    var index = this.listeners[type].indexOf(handler);
    if (index >= 0) this.listeners[type].splice(index, 1);
    return this;
};

/**
 * Call event handlers with this set to owner.
 *
 * @method bindThis
 *
 * @param {Object} owner object this EventEmitter belongs to
 */
EventEmitter.prototype.bindThis = function bindThis(owner) {
    this._owner = owner;
};

module.exports = EventEmitter;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var EventEmitter = require('./EventEmitter');

/**
 * EventHandler forwards received events to a set of provided callback functions.
 * It allows events to be captured, processed, and optionally piped through to other event handlers.
 *
 * @class EventHandler
 * @extends EventEmitter
 * @constructor
 */
function EventHandler() {
    EventEmitter.apply(this, arguments);

    this.downstream = []; // downstream event handlers
    this.downstreamFn = []; // downstream functions

    this.upstream = []; // upstream event handlers
    this.upstreamListeners = {}; // upstream listeners
}
EventHandler.prototype = Object.create(EventEmitter.prototype);
EventHandler.prototype.constructor = EventHandler;

/**
 * Assign an event handler to receive an object's input events.
 *
 * @method setInputHandler
 * @static
 *
 * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
 * @param {EventHandler} handler assigned event handler
 */
EventHandler.setInputHandler = function setInputHandler(object, handler) {
    object.trigger = handler.trigger.bind(handler);
    if (handler.subscribe && handler.unsubscribe) {
        object.subscribe = handler.subscribe.bind(handler);
        object.unsubscribe = handler.unsubscribe.bind(handler);
    }
};

/**
 * Assign an event handler to receive an object's output events.
 *
 * @method setOutputHandler
 * @static
 *
 * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
 * @param {EventHandler} handler assigned event handler
 */
EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
    if (handler instanceof EventHandler) handler.bindThis(object);
    object.pipe = handler.pipe.bind(handler);
    object.unpipe = handler.unpipe.bind(handler);
    object.on = handler.on.bind(handler);
    object.addListener = object.on;
    object.removeListener = handler.removeListener.bind(handler);
};

/**
 * Trigger an event, sending to all downstream handlers
 *   listening for provided 'type' key.
 *
 * @method emit
 *
 * @param {string} type event type key (for example, 'click')
 * @param {Object} event event data
 * @return {EventHandler} this
 */
EventHandler.prototype.emit = function emit(type, event) {
    EventEmitter.prototype.emit.apply(this, arguments);
    var i = 0;
    for (i = 0; i < this.downstream.length; i++) {
        if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
    }
    for (i = 0; i < this.downstreamFn.length; i++) {
        this.downstreamFn[i](type, event);
    }
    return this;
};

/**
 * Alias for emit
 * @method addListener
 */
EventHandler.prototype.trigger = EventHandler.prototype.emit;

/**
 * Add event handler object to set of downstream handlers.
 *
 * @method pipe
 *
 * @param {EventHandler} target event handler target object
 * @return {EventHandler} passed event handler
 */
EventHandler.prototype.pipe = function pipe(target) {
    if (target.subscribe instanceof Function) return target.subscribe(this);

    var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
    var index = downstreamCtx.indexOf(target);
    if (index < 0) downstreamCtx.push(target);

    if (target instanceof Function) target('pipe', null);
    else if (target.trigger) target.trigger('pipe', null);

    return target;
};

/**
 * Remove handler object from set of downstream handlers.
 *   Undoes work of "pipe".
 *
 * @method unpipe
 *
 * @param {EventHandler} target target handler object
 * @return {EventHandler} provided target
 */
EventHandler.prototype.unpipe = function unpipe(target) {
    if (target.unsubscribe instanceof Function) return target.unsubscribe(this);

    var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
    var index = downstreamCtx.indexOf(target);
    if (index >= 0) {
        downstreamCtx.splice(index, 1);
        if (target instanceof Function) target('unpipe', null);
        else if (target.trigger) target.trigger('unpipe', null);
        return target;
    }
    else return false;
};

/**
 * Bind a callback function to an event type handled by this object.
 *
 * @method "on"
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function(string, Object)} handler callback
 * @return {EventHandler} this
 */
EventHandler.prototype.on = function on(type, handler) {
    EventEmitter.prototype.on.apply(this, arguments);
    if (!(type in this.upstreamListeners)) {
        var upstreamListener = this.trigger.bind(this, type);
        this.upstreamListeners[type] = upstreamListener;
        for (var i = 0; i < this.upstream.length; i++) {
            this.upstream[i].on(type, upstreamListener);
        }
    }
    return this;
};

/**
 * Alias for "on"
 * @method addListener
 */
EventHandler.prototype.addListener = EventHandler.prototype.on;

/**
 * Listen for events from an upstream event handler.
 *
 * @method subscribe
 *
 * @param {EventEmitter} source source emitter object
 * @return {EventHandler} this
 */
EventHandler.prototype.subscribe = function subscribe(source) {
    var index = this.upstream.indexOf(source);
    if (index < 0) {
        this.upstream.push(source);
        for (var type in this.upstreamListeners) {
            source.on(type, this.upstreamListeners[type]);
        }
    }
    return this;
};

/**
 * Stop listening to events from an upstream event handler.
 *
 * @method unsubscribe
 *
 * @param {EventEmitter} source source emitter object
 * @return {EventHandler} this
 */
EventHandler.prototype.unsubscribe = function unsubscribe(source) {
    var index = this.upstream.indexOf(source);
    if (index >= 0) {
        this.upstream.splice(index, 1);
        for (var type in this.upstreamListeners) {
            source.removeListener(type, this.upstreamListeners[type]);
        }
    }
    return this;
};

module.exports = EventHandler;
},{"./EventEmitter":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventEmitter.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Group.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Context = require('./Context');
var Transform = require('./Transform');
var Surface = require('./Surface');

/**
 * A Context designed to contain surfaces and set properties
 *   to be applied to all of them at once.
 *   This is primarily used for specific performance improvements in the rendering engine.
 *   Private.
 *
 * @private
 * @class Group
 * @extends Surface
 * @constructor
 * @param {Object} [options] Surface options array (see Surface})
 */
function Group(options) {
    Surface.call(this, options);
    this._shouldRecalculateSize = false;
    this._container = document.createDocumentFragment();
    this.context = new Context(this._container);
    this.setContent(this._container);
    this._groupSize = [undefined, undefined];
}

/** @const */
Group.SIZE_ZERO = [0, 0];

Group.prototype = Object.create(Surface.prototype);
Group.prototype.elementType = 'div';
Group.prototype.elementClass = 'famous-group';

/**
 * Add renderables to this component's render tree.
 *
 * @method add
 * @private
 * @param {Object} obj renderable object
 * @return {RenderNode} Render wrapping provided object, if not already a RenderNode
 */
Group.prototype.add = function add() {
    return this.context.add.apply(this.context, arguments);
};

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {Number} Render spec for this component
 */
Group.prototype.render = function render() {
    return Surface.prototype.render.call(this);
};

/**
 * Place the document element this component manages into the document.
 *
 * @private
 * @method deploy
 * @param {Node} target document parent of this container
 */
Group.prototype.deploy = function deploy(target) {
    this.context.migrate(target);
};

/**
 * Remove this component and contained content from the document
 *
 * @private
 * @method recall
 *
 * @param {Node} target node to which the component was deployed
 */
Group.prototype.recall = function recall(target) {
    this._container = document.createDocumentFragment();
    this.context.migrate(this._container);
};

/**
 * Apply changes from this component to the corresponding document element.
 *
 * @private
 * @method commit
 *
 * @param {Object} context update spec passed in from above in the render tree.
 */
Group.prototype.commit = function commit(context) {
    var transform = context.transform;
    var origin = context.origin;
    var opacity = context.opacity;
    var size = context.size;
    var result = Surface.prototype.commit.call(this, {
        allocator: context.allocator,
        transform: Transform.thenMove(transform, [-origin[0] * size[0], -origin[1] * size[1], 0]),
        opacity: opacity,
        origin: origin,
        size: Group.SIZE_ZERO
    });
    if (size[0] !== this._groupSize[0] || size[1] !== this._groupSize[1]) {
        this._groupSize[0] = size[0];
        this._groupSize[1] = size[1];
        this.context.setSize(size);
    }
    this.context.update({
        transform: Transform.translate(-origin[0] * size[0], -origin[1] * size[1], 0),
        origin: origin,
        size: size
    });
    return result;
};

module.exports = Group;
},{"./Context":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Context.js","./Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js","./Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Transform = require('./Transform');
var Transitionable = require('../transitions/Transitionable');
var TransitionableTransform = require('../transitions/TransitionableTransform');

/**
 *
 *  A collection of visual changes to be
 *    applied to another renderable component. This collection includes a
 *    transform matrix, an opacity constant, a size, an origin specifier.
 *    Modifier objects can be added to any RenderNode or object
 *    capable of displaying renderables.  The Modifier's children and descendants
 *    are transformed by the amounts specified in the Modifier's properties.
 *
 * @class Modifier
 * @constructor
 * @param {Object} [options] overrides of default options
 * @param {Transform} [options.transform] affine transformation matrix
 * @param {Number} [options.opacity]
 * @param {Array.Number} [options.origin] origin adjustment
 * @param {Array.Number} [options.size] size to apply to descendants
 */
function Modifier(options) {
    this._transformGetter = null;
    this._opacityGetter = null;
    this._originGetter = null;
    this._alignGetter = null;
    this._sizeGetter = null;

    /* TODO: remove this when deprecation complete */
    this._legacyStates = {};

    this._output = {
        transform: Transform.identity,
        opacity: 1,
        origin: null,
        align: null,
        size: null,
        target: null
    };

    if (options) {
        if (options.transform) this.transformFrom(options.transform);
        if (options.opacity !== undefined) this.opacityFrom(options.opacity);
        if (options.origin) this.originFrom(options.origin);
        if (options.align) this.alignFrom(options.align);
        if (options.size) this.sizeFrom(options.size);
    }
}

/**
 * Function, object, or static transform matrix which provides the transform.
 *   This is evaluated on every tick of the engine.
 *
 * @method transformFrom
 *
 * @param {Object} transform transform provider object
 * @return {Modifier} this
 */
Modifier.prototype.transformFrom = function transformFrom(transform) {
    if (transform instanceof Function) this._transformGetter = transform;
    else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
    else {
        this._transformGetter = null;
        this._output.transform = transform;
    }
    return this;
};

/**
 * Set function, object, or number to provide opacity, in range [0,1].
 *
 * @method opacityFrom
 *
 * @param {Object} opacity provider object
 * @return {Modifier} this
 */
Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
    if (opacity instanceof Function) this._opacityGetter = opacity;
    else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
    else {
        this._opacityGetter = null;
        this._output.opacity = opacity;
    }
    return this;
};

/**
 * Set function, object, or numerical array to provide origin, as [x,y],
 *   where x and y are in the range [0,1].
 *
 * @method originFrom
 *
 * @param {Object} origin provider object
 * @return {Modifier} this
 */
Modifier.prototype.originFrom = function originFrom(origin) {
    if (origin instanceof Function) this._originGetter = origin;
    else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
    else {
        this._originGetter = null;
        this._output.origin = origin;
    }
    return this;
};

/**
 * Set function, object, or numerical array to provide align, as [x,y],
 *   where x and y are in the range [0,1].
 *
 * @method alignFrom
 *
 * @param {Object} align provider object
 * @return {Modifier} this
 */
Modifier.prototype.alignFrom = function alignFrom(align) {
    if (align instanceof Function) this._alignGetter = align;
    else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
    else {
        this._alignGetter = null;
        this._output.align = align;
    }
    return this;
};

/**
 * Set function, object, or numerical array to provide size, as [width, height].
 *
 * @method sizeFrom
 *
 * @param {Object} size provider object
 * @return {Modifier} this
 */
Modifier.prototype.sizeFrom = function sizeFrom(size) {
    if (size instanceof Function) this._sizeGetter = size;
    else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
    else {
        this._sizeGetter = null;
        this._output.size = size;
    }
    return this;
};

 /**
 * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
 * @deprecated
 * @method setTransform
 *
 * @param {Transform} transform Transform to transition to
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {Modifier} this
 */
Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
    if (transition || this._legacyStates.transform) {
        if (!this._legacyStates.transform) {
            this._legacyStates.transform = new TransitionableTransform(this._output.transform);
        }
        if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);

        this._legacyStates.transform.set(transform, transition, callback);
        return this;
    }
    else return this.transformFrom(transform);
};

/**
 * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
 * @deprecated
 * @method setOpacity
 *
 * @param {Number} opacity Opacity value to transition to.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {Modifier} this
 */
Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
    if (transition || this._legacyStates.opacity) {
        if (!this._legacyStates.opacity) {
            this._legacyStates.opacity = new Transitionable(this._output.opacity);
        }
        if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);

        return this._legacyStates.opacity.set(opacity, transition, callback);
    }
    else return this.opacityFrom(opacity);
};

/**
 * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
 * @deprecated
 * @method setOrigin
 *
 * @param {Array.Number} origin two element array with values between 0 and 1.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {Modifier} this
 */
Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
    /* TODO: remove this if statement when deprecation complete */
    if (transition || this._legacyStates.origin) {

        if (!this._legacyStates.origin) {
            this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
        }
        if (!this._originGetter) this.originFrom(this._legacyStates.origin);

        this._legacyStates.origin.set(origin, transition, callback);
        return this;
    }
    else return this.originFrom(origin);
};

/**
 * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
 * @deprecated
 * @method setAlign
 *
 * @param {Array.Number} align two element array with values between 0 and 1.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {Modifier} this
 */
Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
    /* TODO: remove this if statement when deprecation complete */
    if (transition || this._legacyStates.align) {

        if (!this._legacyStates.align) {
            this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
        }
        if (!this._alignGetter) this.alignFrom(this._legacyStates.align);

        this._legacyStates.align.set(align, transition, callback);
        return this;
    }
    else return this.alignFrom(align);
};

/**
 * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
 * @deprecated
 * @method setSize
 * @param {Array.Number} size two element array of [width, height]
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {Modifier} this
 */
Modifier.prototype.setSize = function setSize(size, transition, callback) {
    if (size && (transition || this._legacyStates.size)) {
        if (!this._legacyStates.size) {
            this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
        }
        if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);

        this._legacyStates.size.set(size, transition, callback);
        return this;
    }
    else return this.sizeFrom(size);
};

/**
 * Deprecated: Prefer to stop transform in your provider object.
 * @deprecated
 * @method halt
 */
Modifier.prototype.halt = function halt() {
    if (this._legacyStates.transform) this._legacyStates.transform.halt();
    if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
    if (this._legacyStates.origin) this._legacyStates.origin.halt();
    if (this._legacyStates.align) this._legacyStates.align.halt();
    if (this._legacyStates.size) this._legacyStates.size.halt();
    this._transformGetter = null;
    this._opacityGetter = null;
    this._originGetter = null;
    this._alignGetter = null;
    this._sizeGetter = null;
};

/**
 * Deprecated: Prefer to use your provided transform or output of your transform provider.
 * @deprecated
 * @method getTransform
 * @return {Object} transform provider object
 */
Modifier.prototype.getTransform = function getTransform() {
    return this._transformGetter();
};

/**
 * Deprecated: Prefer to determine the end state of your transform from your transform provider
 * @deprecated
 * @method getFinalTransform
 * @return {Transform} transform matrix
 */
Modifier.prototype.getFinalTransform = function getFinalTransform() {
    return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
};

/**
 * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
 * @deprecated
 * @method getOpacity
 * @return {Object} opacity provider object
 */
Modifier.prototype.getOpacity = function getOpacity() {
    return this._opacityGetter();
};

/**
 * Deprecated: Prefer to use your provided origin or output of your origin provider.
 * @deprecated
 * @method getOrigin
 * @return {Object} origin provider object
 */
Modifier.prototype.getOrigin = function getOrigin() {
    return this._originGetter();
};

/**
 * Deprecated: Prefer to use your provided align or output of your align provider.
 * @deprecated
 * @method getAlign
 * @return {Object} align provider object
 */
Modifier.prototype.getAlign = function getAlign() {
    return this._alignGetter();
};

/**
 * Deprecated: Prefer to use your provided size or output of your size provider.
 * @deprecated
 * @method getSize
 * @return {Object} size provider object
 */
Modifier.prototype.getSize = function getSize() {
    return this._sizeGetter ? this._sizeGetter() : this._output.size;
};

// call providers on tick to receive render spec elements to apply
function _update() {
    if (this._transformGetter) this._output.transform = this._transformGetter();
    if (this._opacityGetter) this._output.opacity = this._opacityGetter();
    if (this._originGetter) this._output.origin = this._originGetter();
    if (this._alignGetter) this._output.align = this._alignGetter();
    if (this._sizeGetter) this._output.size = this._sizeGetter();
}

/**
 * Return render spec for this Modifier, applying to the provided
 *    target component.  This is similar to render() for Surfaces.
 *
 * @private
 * @method modify
 *
 * @param {Object} target (already rendered) render spec to
 *    which to apply the transform.
 * @return {Object} render spec for this Modifier, including the
 *    provided target
 */
Modifier.prototype.modify = function modify(target) {
    _update.call(this);
    this._output.target = target;
    return this._output;
};

module.exports = Modifier;
},{"../transitions/Transitionable":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js","../transitions/TransitionableTransform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/TransitionableTransform.js","./Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var EventHandler = require('./EventHandler');

/**
 *  A collection of methods for setting options which can be extended
 *  onto other classes.
 *
 *
 *  **** WARNING ****
 *  You can only pass through objects that will compile into valid JSON.
 *
 *  Valid options:
 *      Strings,
 *      Arrays,
 *      Objects,
 *      Numbers,
 *      Nested Objects,
 *      Nested Arrays.
 *
 *    This excludes:
 *        Document Fragments,
 *        Functions
 * @class OptionsManager
 * @constructor
 * @param {Object} value options dictionary
 */
function OptionsManager(value) {
    this._value = value;
    this.eventOutput = null;
}

/**
 * Create options manager from source dictionary with arguments overriden by patch dictionary.
 *
 * @static
 * @method OptionsManager.patch
 *
 * @param {Object} source source arguments
 * @param {...Object} data argument additions and overwrites
 * @return {Object} source object
 */
OptionsManager.patch = function patchObject(source, data) {
    var manager = new OptionsManager(source);
    for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
    return source;
};

function _createEventOutput() {
    this.eventOutput = new EventHandler();
    this.eventOutput.bindThis(this);
    EventHandler.setOutputHandler(this, this.eventOutput);
}

/**
 * Create OptionsManager from source with arguments overriden by patches.
 *   Triggers 'change' event on this object's event handler if the state of
 *   the OptionsManager changes as a result.
 *
 * @method patch
 *
 * @param {...Object} arguments list of patch objects
 * @return {OptionsManager} this
 */
OptionsManager.prototype.patch = function patch() {
    var myState = this._value;
    for (var i = 0; i < arguments.length; i++) {
        var data = arguments[i];
        for (var k in data) {
            if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
                if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
                this.key(k).patch(data[k]);
                if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
            }
            else this.set(k, data[k]);
        }
    }
    return this;
};

/**
 * Alias for patch
 *
 * @method setOptions
 *
 */
OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;

/**
 * Return OptionsManager based on sub-object retrieved by key
 *
 * @method key
 *
 * @param {string} identifier key
 * @return {OptionsManager} new options manager with the value
 */
OptionsManager.prototype.key = function key(identifier) {
    var result = new OptionsManager(this._value[identifier]);
    if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
    return result;
};

/**
 * Look up value by key
 * @method get
 *
 * @param {string} key key
 * @return {Object} associated object
 */
OptionsManager.prototype.get = function get(key) {
    return this._value[key];
};

/**
 * Alias for get
 * @method getOptions
 */
OptionsManager.prototype.getOptions = OptionsManager.prototype.get;

/**
 * Set key to value.  Outputs 'change' event if a value is overwritten.
 *
 * @method set
 *
 * @param {string} key key string
 * @param {Object} value value object
 * @return {OptionsManager} new options manager based on the value object
 */
OptionsManager.prototype.set = function set(key, value) {
    var originalValue = this.get(key);
    this._value[key] = value;
    if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
    return this;
};

/**
 * Return entire object contents of this OptionsManager.
 *
 * @method value
 *
 * @return {Object} current state of options
 */
OptionsManager.prototype.value = function value() {
    return this._value;
};

/**
 * Bind a callback function to an event type handled by this object.
 *
 * @method "on"
 *
 * @param {string} type event type key (for example, 'change')
 * @param {function(string, Object)} handler callback
 * @return {EventHandler} this
 */
OptionsManager.prototype.on = function on() {
    _createEventOutput.call(this);
    return this.on.apply(this, arguments);
};

/**
 * Unbind an event by type and handler.
 *   This undoes the work of "on".
 *
 * @method removeListener
 *
 * @param {string} type event type key (for example, 'change')
 * @param {function} handler function object to remove
 * @return {EventHandler} internal event handler object (for chaining)
 */
OptionsManager.prototype.removeListener = function removeListener() {
    _createEventOutput.call(this);
    return this.removeListener.apply(this, arguments);
};

/**
 * Add event handler object to set of downstream handlers.
 *
 * @method pipe
 *
 * @param {EventHandler} target event handler target object
 * @return {EventHandler} passed event handler
 */
OptionsManager.prototype.pipe = function pipe() {
    _createEventOutput.call(this);
    return this.pipe.apply(this, arguments);
};

/**
 * Remove handler object from set of downstream handlers.
 * Undoes work of "pipe"
 *
 * @method unpipe
 *
 * @param {EventHandler} target target handler object
 * @return {EventHandler} provided target
 */
OptionsManager.prototype.unpipe = function unpipe() {
    _createEventOutput.call(this);
    return this.unpipe.apply(this, arguments);
};

module.exports = OptionsManager;
},{"./EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/RenderNode.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Entity = require('./Entity');
var SpecParser = require('./SpecParser');

/**
 * A wrapper for inserting a renderable component (like a Modifer or
 *   Surface) into the render tree.
 *
 * @class RenderNode
 * @constructor
 *
 * @param {Object} object Target renderable component
 */
function RenderNode(object) {
    this._object = null;
    this._child = null;
    this._hasMultipleChildren = false;
    this._isRenderable = false;
    this._isModifier = false;

    this._resultCache = {};
    this._prevResults = {};

    this._childResult = null;

    if (object) this.set(object);
}

/**
 * Append a renderable to the list of this node's children.
 *   This produces a new RenderNode in the tree.
 *   Note: Does not double-wrap if child is a RenderNode already.
 *
 * @method add
 * @param {Object} child renderable object
 * @return {RenderNode} new render node wrapping child
 */
RenderNode.prototype.add = function add(child) {
    var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
    if (this._child instanceof Array) this._child.push(childNode);
    else if (this._child) {
        this._child = [this._child, childNode];
        this._hasMultipleChildren = true;
        this._childResult = []; // to be used later
    }
    else this._child = childNode;

    return childNode;
};

/**
 * Return the single wrapped object.  Returns null if this node has multiple child nodes.
 *
 * @method get
 *
 * @return {Ojbect} contained renderable object
 */
RenderNode.prototype.get = function get() {
    return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
};

/**
 * Overwrite the list of children to contain the single provided object
 *
 * @method set
 * @param {Object} child renderable object
 * @return {RenderNode} this render node, or child if it is a RenderNode
 */
RenderNode.prototype.set = function set(child) {
    this._childResult = null;
    this._hasMultipleChildren = false;
    this._isRenderable = child.render ? true : false;
    this._isModifier = child.modify ? true : false;
    this._object = child;
    this._child = null;
    if (child instanceof RenderNode) return child;
    else return this;
};

/**
 * Get render size of contained object.
 *
 * @method getSize
 * @return {Array.Number} size of this or size of single child.
 */
RenderNode.prototype.getSize = function getSize() {
    var result = null;
    var target = this.get();
    if (target && target.getSize) result = target.getSize();
    if (!result && this._child && this._child.getSize) result = this._child.getSize();
    return result;
};

// apply results of rendering this subtree to the document
function _applyCommit(spec, context, cacheStorage) {
    var result = SpecParser.parse(spec, context);
    var keys = Object.keys(result);
    for (var i = 0; i < keys.length; i++) {
        var id = keys[i];
        var childNode = Entity.get(id);
        var commitParams = result[id];
        commitParams.allocator = context.allocator;
        var commitResult = childNode.commit(commitParams);
        if (commitResult) _applyCommit(commitResult, context, cacheStorage);
        else cacheStorage[id] = commitParams;
    }
}

/**
 * Commit the content change from this node to the document.
 *
 * @private
 * @method commit
 * @param {Context} context render context
 */
RenderNode.prototype.commit = function commit(context) {
    // free up some divs from the last loop
    var prevKeys = Object.keys(this._prevResults);
    for (var i = 0; i < prevKeys.length; i++) {
        var id = prevKeys[i];
        if (this._resultCache[id] === undefined) {
            var object = Entity.get(id);
            if (object.cleanup) object.cleanup(context.allocator);
        }
    }

    this._prevResults = this._resultCache;
    this._resultCache = {};
    _applyCommit(this.render(), context, this._resultCache);
};

/**
 * Generate a render spec from the contents of the wrapped component.
 *
 * @private
 * @method render
 *
 * @return {Object} render specification for the component subtree
 *    only under this node.
 */
RenderNode.prototype.render = function render() {
    if (this._isRenderable) return this._object.render();

    var result = null;
    if (this._hasMultipleChildren) {
        result = this._childResult;
        var children = this._child;
        for (var i = 0; i < children.length; i++) {
            result[i] = children[i].render();
        }
    }
    else if (this._child) result = this._child.render();

    return this._isModifier ? this._object.modify(result) : result;
};

module.exports = RenderNode;
},{"./Entity":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Entity.js","./SpecParser":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/SpecParser.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/SpecParser.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Transform = require('./Transform');

/**
 *
 * This object translates the rendering instructions ("render specs")
 *   that renderable components generate into document update
 *   instructions ("update specs").  Private.
 *
 * @private
 * @class SpecParser
 * @constructor
 */
function SpecParser() {
    this.result = {};
}
SpecParser._instance = new SpecParser();

/**
 * Convert a render spec coming from the context's render chain to an
 *    update spec for the update chain. This is the only major entry point
 *    for a consumer of this class.
 *
 * @method parse
 * @static
 * @private
 *
 * @param {renderSpec} spec input render spec
 * @param {Object} context context to do the parse in
 * @return {Object} the resulting update spec (if no callback
 *   specified, else none)
 */
SpecParser.parse = function parse(spec, context) {
    return SpecParser._instance.parse(spec, context);
};

/**
 * Convert a renderSpec coming from the context's render chain to an update
 *    spec for the update chain. This is the only major entrypoint for a
 *    consumer of this class.
 *
 * @method parse
 *
 * @private
 * @param {renderSpec} spec input render spec
 * @param {Context} context
 * @return {updateSpec} the resulting update spec
 */
SpecParser.prototype.parse = function parse(spec, context) {
    this.reset();
    this._parseSpec(spec, context, Transform.identity);
    return this.result;
};

/**
 * Prepare SpecParser for re-use (or first use) by setting internal state
 *  to blank.
 *
 * @private
 * @method reset
 */
SpecParser.prototype.reset = function reset() {
    this.result = {};
};

// Multiply matrix M by vector v
function _vecInContext(v, m) {
    return [
        v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
        v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
        v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
    ];
}

var _originZeroZero = [0, 0];

// From the provided renderSpec tree, recursively compose opacities,
//    origins, transforms, and sizes corresponding to each surface id from
//    the provided renderSpec tree structure. On completion, those
//    properties of 'this' object should be ready to use to build an
//    updateSpec.
SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
    var id;
    var target;
    var transform;
    var opacity;
    var origin;
    var align;
    var size;

    if (typeof spec === 'number') {
        id = spec;
        transform = parentContext.transform;
        align = parentContext.align || parentContext.origin;
        if (parentContext.size && align && (align[0] || align[1])) {
            var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
            transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
        }
        this.result[id] = {
            transform: transform,
            opacity: parentContext.opacity,
            origin: parentContext.origin || _originZeroZero,
            align: parentContext.align || parentContext.origin || _originZeroZero,
            size: parentContext.size
        };
    }
    else if (!spec) { // placed here so 0 will be cached earlier
        return;
    }
    else if (spec instanceof Array) {
        for (var i = 0; i < spec.length; i++) {
            this._parseSpec(spec[i], parentContext, sizeContext);
        }
    }
    else {
        target = spec.target;
        transform = parentContext.transform;
        opacity = parentContext.opacity;
        origin = parentContext.origin;
        align = parentContext.align;
        size = parentContext.size;
        var nextSizeContext = sizeContext;

        if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
        if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
        if (spec.origin) {
            origin = spec.origin;
            nextSizeContext = parentContext.transform;
        }
        if (spec.align) align = spec.align;
        if (spec.size) {
            var parentSize = parentContext.size;
            size = [
                spec.size[0] !== undefined ? spec.size[0] : parentSize[0],
                spec.size[1] !== undefined ? spec.size[1] : parentSize[1]
            ];
            if (parentSize) {
                if (!align) align = origin;
                if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
                if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
            }
            nextSizeContext = parentContext.transform;
            origin = null;
            align = null;
        }

        this._parseSpec(target, {
            transform: transform,
            opacity: opacity,
            origin: origin,
            align: align,
            size: size
        }, nextSizeContext);
    }
};

module.exports = SpecParser;
},{"./Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Entity = require('./Entity');
var EventHandler = require('./EventHandler');
var Transform = require('./Transform');

var devicePixelRatio = window.devicePixelRatio || 1;
var usePrefix = document.createElement('div').style.webkitTransform !== undefined;

/**
 * A base class for viewable content and event
 *   targets inside a Famo.us application, containing a renderable document
 *   fragment. Like an HTML div, it can accept internal markup,
 *   properties, classes, and handle events.
 *
 * @class Surface
 * @constructor
 *
 * @param {Object} [options] default option overrides
 * @param {Array.Number} [options.size] [width, height] in pixels
 * @param {Array.string} [options.classes] CSS classes to set on inner content
 * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
 * @param {string} [options.content] inner (HTML) content of surface
 */
function Surface(options) {
    this.options = {};

    this.properties = {};
    this.content = '';
    this.classList = [];
    this.size = null;

    this._classesDirty = true;
    this._stylesDirty = true;
    this._sizeDirty = true;
    this._contentDirty = true;

    this._dirtyClasses = [];

    this._matrix = null;
    this._opacity = 1;
    this._origin = null;
    this._size = null;

    /** @ignore */
    this.eventForwarder = function eventForwarder(event) {
        this.emit(event.type, event);
    }.bind(this);
    this.eventHandler = new EventHandler();
    this.eventHandler.bindThis(this);

    this.id = Entity.register(this);

    if (options) this.setOptions(options);

    this._currTarget = null;
}
Surface.prototype.elementType = 'div';
Surface.prototype.elementClass = 'famous-surface';

/**
 * Bind a callback function to an event type handled by this object.
 *
 * @method "on"
 *
 * @param {string} type event type key (for example, 'click')
 * @param {function(string, Object)} fn handler callback
 * @return {EventHandler} this
 */
Surface.prototype.on = function on(type, fn) {
    if (this._currTarget) this._currTarget.addEventListener(type, this.eventForwarder);
    this.eventHandler.on(type, fn);
};

/**
 * Unbind an event by type and handler.
 *   This undoes the work of "on"
 *
 * @method removeListener
 * @param {string} type event type key (for example, 'click')
 * @param {function(string, Object)} fn handler
 */
Surface.prototype.removeListener = function removeListener(type, fn) {
    this.eventHandler.removeListener(type, fn);
};

/**
 * Trigger an event, sending to all downstream handlers
 *   listening for provided 'type' key.
 *
 * @method emit
 *
 * @param {string} type event type key (for example, 'click')
 * @param {Object} [event] event data
 * @return {EventHandler} this
 */
Surface.prototype.emit = function emit(type, event) {
    if (event && !event.origin) event.origin = this;
    var handled = this.eventHandler.emit(type, event);
    if (handled && event && event.stopPropagation) event.stopPropagation();
    return handled;
};

/**
 * Add event handler object to set of downstream handlers.
 *
 * @method pipe
 *
 * @param {EventHandler} target event handler target object
 * @return {EventHandler} passed event handler
 */
Surface.prototype.pipe = function pipe(target) {
    return this.eventHandler.pipe(target);
};

/**
 * Remove handler object from set of downstream handlers.
 *   Undoes work of "pipe"
 *
 * @method unpipe
 *
 * @param {EventHandler} target target handler object
 * @return {EventHandler} provided target
 */
Surface.prototype.unpipe = function unpipe(target) {
    return this.eventHandler.unpipe(target);
};

/**
 * Return spec for this surface. Note that for a base surface, this is
 *    simply an id.
 *
 * @method render
 * @private
 * @return {Object} render spec for this surface (spec id)
 */
Surface.prototype.render = function render() {
    return this.id;
};

/**
 * Set CSS-style properties on this Surface. Note that this will cause
 *    dirtying and thus re-rendering, even if values do not change.
 *
 * @method setProperties
 * @param {Object} properties property dictionary of "key" => "value"
 */
Surface.prototype.setProperties = function setProperties(properties) {
    for (var n in properties) {
        this.properties[n] = properties[n];
    }
    this._stylesDirty = true;
};

/**
 * Get CSS-style properties on this Surface.
 *
 * @method getProperties
 *
 * @return {Object} Dictionary of this Surface's properties.
 */
Surface.prototype.getProperties = function getProperties() {
    return this.properties;
};

/**
 * Add CSS-style class to the list of classes on this Surface. Note
 *   this will map directly to the HTML property of the actual
 *   corresponding rendered <div>.
 *
 * @method addClass
 * @param {string} className name of class to add
 */
Surface.prototype.addClass = function addClass(className) {
    if (this.classList.indexOf(className) < 0) {
        this.classList.push(className);
        this._classesDirty = true;
    }
};

/**
 * Remove CSS-style class from the list of classes on this Surface.
 *   Note this will map directly to the HTML property of the actual
 *   corresponding rendered <div>.
 *
 * @method removeClass
 * @param {string} className name of class to remove
 */
Surface.prototype.removeClass = function removeClass(className) {
    var i = this.classList.indexOf(className);
    if (i >= 0) {
        this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
        this._classesDirty = true;
    }
};

/**
 * Reset class list to provided dictionary.
 * @method setClasses
 * @param {Array.string} classList
 */
Surface.prototype.setClasses = function setClasses(classList) {
    var i = 0;
    var removal = [];
    for (i = 0; i < this.classList.length; i++) {
        if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
    }
    for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
    // duplicates are already checked by addClass()
    for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
};

/**
 * Get array of CSS-style classes attached to this div.
 *
 * @method getClasslist
 * @return {Array.string} array of class names
 */
Surface.prototype.getClassList = function getClassList() {
    return this.classList;
};

/**
 * Set or overwrite inner (HTML) content of this surface. Note that this
 *    causes a re-rendering if the content has changed.
 *
 * @method setContent
 * @param {string|Document Fragment} content HTML content
 */
Surface.prototype.setContent = function setContent(content) {
    if (this.content !== content) {
        this.content = content;
        this._contentDirty = true;
    }
};

/**
 * Return inner (HTML) content of this surface.
 *
 * @method getContent
 *
 * @return {string} inner (HTML) content
 */
Surface.prototype.getContent = function getContent() {
    return this.content;
};

/**
 * Set options for this surface
 *
 * @method setOptions
 * @param {Object} [options] overrides for default options.  See constructor.
 */
Surface.prototype.setOptions = function setOptions(options) {
    if (options.size) this.setSize(options.size);
    if (options.classes) this.setClasses(options.classes);
    if (options.properties) this.setProperties(options.properties);
    if (options.content) this.setContent(options.content);
};

//  Attach Famous event handling to document events emanating from target
//    document element.  This occurs just after deployment to the document.
//    Calling this enables methods like #on and #pipe.
function _addEventListeners(target) {
    for (var i in this.eventHandler.listeners) {
        target.addEventListener(i, this.eventForwarder);
    }
}

//  Detach Famous event handling from document events emanating from target
//  document element.  This occurs just before recall from the document.
function _removeEventListeners(target) {
    for (var i in this.eventHandler.listeners) {
        target.removeEventListener(i, this.eventForwarder);
    }
}

 //  Apply to document all changes from removeClass() since last setup().
function _cleanupClasses(target) {
    for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
    this._dirtyClasses = [];
}

// Apply values of all Famous-managed styles to the document element.
//  These will be deployed to the document on call to #setup().
function _applyStyles(target) {
    for (var n in this.properties) {
        target.style[n] = this.properties[n];
    }
}

// Clear all Famous-managed styles from the document element.
// These will be deployed to the document on call to #setup().
function _cleanupStyles(target) {
    for (var n in this.properties) {
        target.style[n] = '';
    }
}

/**
 * Return a Matrix's webkit css representation to be used with the
 *    CSS3 -webkit-transform style.
 *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
 *
 * @method _formatCSSTransform
 * @private
 * @param {FamousMatrix} m matrix
 * @return {string} matrix3d CSS style representation of the transform
 */
function _formatCSSTransform(m) {
    m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
    m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;

    var result = 'matrix3d(';
    for (var i = 0; i < 15; i++) {
        result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
    }
    result += m[15] + ')';
    return result;
}

/**
 * Directly apply given FamousMatrix to the document element as the
 *   appropriate webkit CSS style.
 *
 * @method setMatrix
 *
 * @static
 * @private
 * @param {Element} element document element
 * @param {FamousMatrix} matrix
 */

var _setMatrix;
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    _setMatrix = function(element, matrix) {
        element.style.zIndex = (matrix[14] * 1000000) | 0;    // fix for Firefox z-buffer issues
        element.style.transform = _formatCSSTransform(matrix);
    };
}
else if (usePrefix) {
    _setMatrix = function(element, matrix) {
        element.style.webkitTransform = _formatCSSTransform(matrix);
    };
}
else {
    _setMatrix = function(element, matrix) {
        element.style.transform = _formatCSSTransform(matrix);
    };
}

// format origin as CSS percentage string
function _formatCSSOrigin(origin) {
    return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
}

 // Directly apply given origin coordinates to the document element as the
 // appropriate webkit CSS style.
var _setOrigin = usePrefix ? function(element, origin) {
    element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
} : function(element, origin) {
    element.style.transformOrigin = _formatCSSOrigin(origin);
};

 // Shrink given document element until it is effectively invisible.
var _setInvisible = usePrefix ? function(element) {
    element.style.webkitTransform = 'scale3d(0.0001,0.0001,1)';
    element.style.opacity = 0;
} : function(element) {
    element.style.transform = 'scale3d(0.0001,0.0001,1)';
    element.style.opacity = 0;
};

function _xyNotEquals(a, b) {
    return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
}

/**
 * One-time setup for an element to be ready for commits to document.
 *
 * @private
 * @method setup
 *
 * @param {ElementAllocator} allocator document element pool for this context
 */
Surface.prototype.setup = function setup(allocator) {
    var target = allocator.allocate(this.elementType);
    if (this.elementClass) {
        if (this.elementClass instanceof Array) {
            for (var i = 0; i < this.elementClass.length; i++) {
                target.classList.add(this.elementClass[i]);
            }
        }
        else {
            target.classList.add(this.elementClass);
        }
    }
    target.style.display = '';
    _addEventListeners.call(this, target);
    this._currTarget = target;
    this._stylesDirty = true;
    this._classesDirty = true;
    this._sizeDirty = true;
    this._contentDirty = true;
    this._matrix = null;
    this._opacity = undefined;
    this._origin = null;
    this._size = null;
};

/**
 * Apply changes from this component to the corresponding document element.
 * This includes changes to classes, styles, size, content, opacity, origin,
 * and matrix transforms.
 *
 * @private
 * @method commit
 * @param {Context} context commit context
 */
Surface.prototype.commit = function commit(context) {
    if (!this._currTarget) this.setup(context.allocator);
    var target = this._currTarget;

    var matrix = context.transform;
    var opacity = context.opacity;
    var origin = context.origin;
    var size = context.size;

    if (this._classesDirty) {
        _cleanupClasses.call(this, target);
        var classList = this.getClassList();
        for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
        this._classesDirty = false;
    }

    if (this._stylesDirty) {
        _applyStyles.call(this, target);
        this._stylesDirty = false;
    }

    if (this._contentDirty) {
        this.deploy(target);
        this.eventHandler.emit('deploy');
        this._contentDirty = false;
    }

    if (this.size) {
        var origSize = size;
        size = [this.size[0], this.size[1]];
        if (size[0] === undefined && origSize[0]) size[0] = origSize[0];
        if (size[1] === undefined && origSize[1]) size[1] = origSize[1];
    }

    if (size[0] === true) size[0] = target.clientWidth;
    if (size[1] === true) size[1] = target.clientHeight;

    if (_xyNotEquals(this._size, size)) {
        if (!this._size) this._size = [0, 0];
        this._size[0] = size[0];
        this._size[1] = size[1];
        this._sizeDirty = true;
    }

    if (!matrix && this._matrix) {
        this._matrix = null;
        this._opacity = 0;
        _setInvisible(target);
        return;
    }

    if (this._opacity !== opacity) {
        this._opacity = opacity;
        target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
    }

    if (_xyNotEquals(this._origin, origin) || Transform.notEquals(this._matrix, matrix) || this._sizeDirty) {
        if (!matrix) matrix = Transform.identity;
        this._matrix = matrix;
        var aaMatrix = matrix;
        if (origin) {
            if (!this._origin) this._origin = [0, 0];
            this._origin[0] = origin[0];
            this._origin[1] = origin[1];
            aaMatrix = Transform.thenMove(matrix, [-this._size[0] * origin[0], -this._size[1] * origin[1], 0]);
            _setOrigin(target, origin);
        }
        _setMatrix(target, aaMatrix);
    }

    if (this._sizeDirty) {
        if (this._size) {
            target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
            target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
        }
        this._sizeDirty = false;
    }
};

/**
 *  Remove all Famous-relevant attributes from a document element.
 *    This is called by SurfaceManager's detach().
 *    This is in some sense the reverse of .deploy().
 *
 * @private
 * @method cleanup
 * @param {ElementAllocator} allocator
 */
Surface.prototype.cleanup = function cleanup(allocator) {
    var i = 0;
    var target = this._currTarget;
    this.eventHandler.emit('recall');
    this.recall(target);
    target.style.display = 'none';
    target.style.width = '';
    target.style.height = '';
    this._size = null;
    _cleanupStyles.call(this, target);
    var classList = this.getClassList();
    _cleanupClasses.call(this, target);
    for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
    if (this.elementClass) {
        if (this.elementClass instanceof Array) {
            for (i = 0; i < this.elementClass.length; i++) {
                target.classList.remove(this.elementClass[i]);
            }
        }
        else {
            target.classList.remove(this.elementClass);
        }
    }
    _removeEventListeners.call(this, target);
    this._currTarget = null;
    allocator.deallocate(target);
    _setInvisible(target);
};

/**
 * Place the document element that this component manages into the document.
 *
 * @private
 * @method deploy
 * @param {Node} target document parent of this container
 */
Surface.prototype.deploy = function deploy(target) {
    var content = this.getContent();
    if (content instanceof Node) {
        while (target.hasChildNodes()) target.removeChild(target.firstChild);
        target.appendChild(content);
    }
    else target.innerHTML = content;
};

/**
 * Remove any contained document content associated with this surface
 *   from the actual document.
 *
 * @private
 * @method recall
 */
Surface.prototype.recall = function recall(target) {
    var df = document.createDocumentFragment();
    while (target.hasChildNodes()) df.appendChild(target.firstChild);
    this.setContent(df);
};

/**
 *  Get the x and y dimensions of the surface.
 *
 * @method getSize
 * @param {boolean} actual return computed size rather than provided
 * @return {Array.Number} [x,y] size of surface
 */
Surface.prototype.getSize = function getSize(actual) {
    return actual ? this._size : (this.size || this._size);
};

/**
 * Set x and y dimensions of the surface.
 *
 * @method setSize
 * @param {Array.Number} size as [width, height]
 */
Surface.prototype.setSize = function setSize(size) {
    this.size = size ? [size[0], size[1]] : null;
    this._sizeDirty = true;
};

module.exports = Surface;
},{"./Entity":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Entity.js","./EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","./Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */




/**
 *  A high-performance static matrix math library used to calculate
 *    affine transforms on surfaces and other renderables.
 *    Famo.us uses 4x4 matrices corresponding directly to
 *    WebKit matrices (column-major order).
 *
 *    The internal "type" of a Matrix is a 16-long float array in
 *    row-major order, with:
 *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
 *          transformation matrix;
 *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
 *           translation;
 *    elements [3], [7], [11] set to 0;
 *    element [15] set to 1.
 *    All methods are static.
 *
 * @static
 *
 * @class Transform
 */
var Transform = {};

// WARNING: these matrices correspond to WebKit matrices, which are
//    transposed from their math counterparts
Transform.precision = 1e-6;
Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

/**
 * Multiply two or more Transform matrix types to return a Transform matrix.
 *
 * @method multiply4x4
 * @static
 * @param {Transform} a left Transform
 * @param {Transform} b right Transform
 * @return {Transform}
 */
Transform.multiply4x4 = function multiply4x4(a, b) {
    return [
        a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
        a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
        a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
        a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
        a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
        a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
        a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
        a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
        a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
        a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
        a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
        a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
        a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
        a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
        a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
        a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
    ];
};

/**
 * Fast-multiply two or more Transform matrix types to return a
 *    Matrix, assuming bottom row on each is [0 0 0 1].
 *
 * @method multiply
 * @static
 * @param {Transform} a left Transform
 * @param {Transform} b right Transform
 * @return {Transform}
 */
Transform.multiply = function multiply(a, b) {
    return [
        a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
        a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
        a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
        0,
        a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
        a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
        a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
        0,
        a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
        a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
        a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
        0,
        a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
        a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
        a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
        1
    ];
};

/**
 * Return a Transform translated by additional amounts in each
 *    dimension. This is equivalent to the result of
 *
 *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
 *
 * @method thenMove
 * @static
 * @param {Transform} m a Transform
 * @param {Array.Number} t floats delta vector of length 2 or 3
 * @return {Transform}
 */
Transform.thenMove = function thenMove(m, t) {
    if (!t[2]) t[2] = 0;
    return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
};

/**
 * Return a Transform atrix which represents the result of a transform matrix
 *    applied after a move. This is faster than the equivalent multiply.
 *    This is equivalent to the result of:
 *
 *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
 *
 * @method moveThen
 * @static
 * @param {Array.Number} v vector representing initial movement
 * @param {Transform} m matrix to apply afterwards
 * @return {Transform} the resulting matrix
 */
Transform.moveThen = function moveThen(v, m) {
    if (!v[2]) v[2] = 0;
    var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
    var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
    var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
    return Transform.thenMove(m, [t0, t1, t2]);
};

/**
 * Return a Transform which represents a translation by specified
 *    amounts in each dimension.
 *
 * @method translate
 * @static
 * @param {Number} x x translation
 * @param {Number} y y translation
 * @param {Number} z z translation
 * @return {Transform}
 */
Transform.translate = function translate(x, y, z) {
    if (z === undefined) z = 0;
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
};

/**
 * Return a Transform scaled by a vector in each
 *    dimension. This is a more performant equivalent to the result of
 *
 *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
 *
 * @method thenScale
 * @static
 * @param {Transform} m a matrix
 * @param {Array.Number} s delta vector (array of floats &&
 *    array.length == 3)
 * @return {Transform}
 */
Transform.thenScale = function thenScale(m, s) {
    return [
        s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
        s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
        s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
        s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
    ];
};

/**
 * Return a Transform which represents a scale by specified amounts
 *    in each dimension.
 *
 * @method scale
 * @static
 * @param {Number} x x scale factor
 * @param {Number} y y scale factor
 * @param {Number} z z scale factor
 * @return {Transform}
 */
Transform.scale = function scale(x, y, z) {
    if (z === undefined) z = 1;
    return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
};

/**
 * Return a Transform which represents a clockwise
 *    rotation around the x axis.
 *
 * @method rotateX
 * @static
 * @param {Number} theta radians
 * @return {Transform}
 */
Transform.rotateX = function rotateX(theta) {
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
};

/**
 * Return a Transform which represents a clockwise
 *    rotation around the y axis.
 *
 * @method rotateY
 * @static
 * @param {Number} theta radians
 * @return {Transform}
 */
Transform.rotateY = function rotateY(theta) {
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
};

/**
 * Return a Transform which represents a clockwise
 *    rotation around the z axis.
 *
 * @method rotateZ
 * @static
 * @param {Number} theta radians
 * @return {Transform}
 */
Transform.rotateZ = function rotateZ(theta) {
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};

/**
 * Return a Transform which represents composed clockwise
 *    rotations along each of the axes. Equivalent to the result of
 *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
 *
 * @method rotate
 * @static
 * @param {Number} phi radians to rotate about the positive x axis
 * @param {Number} theta radians to rotate about the positive y axis
 * @param {Number} psi radians to rotate about the positive z axis
 * @return {Transform}
 */
Transform.rotate = function rotate(phi, theta, psi) {
    var cosPhi = Math.cos(phi);
    var sinPhi = Math.sin(phi);
    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);
    var cosPsi = Math.cos(psi);
    var sinPsi = Math.sin(psi);
    var result = [
        cosTheta * cosPsi,
        cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
        sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
        0,
        -cosTheta * sinPsi,
        cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
        sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
        0,
        sinTheta,
        -sinPhi * cosTheta,
        cosPhi * cosTheta,
        0,
        0, 0, 0, 1
    ];
    return result;
};

/**
 * Return a Transform which represents an axis-angle rotation
 *
 * @method rotateAxis
 * @static
 * @param {Array.Number} v unit vector representing the axis to rotate about
 * @param {Number} theta radians to rotate clockwise about the axis
 * @return {Transform}
 */
Transform.rotateAxis = function rotateAxis(v, theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var verTheta = 1 - cosTheta; // versine of theta

    var xxV = v[0] * v[0] * verTheta;
    var xyV = v[0] * v[1] * verTheta;
    var xzV = v[0] * v[2] * verTheta;
    var yyV = v[1] * v[1] * verTheta;
    var yzV = v[1] * v[2] * verTheta;
    var zzV = v[2] * v[2] * verTheta;
    var xs = v[0] * sinTheta;
    var ys = v[1] * sinTheta;
    var zs = v[2] * sinTheta;

    var result = [
        xxV + cosTheta, xyV + zs, xzV - ys, 0,
        xyV - zs, yyV + cosTheta, yzV + xs, 0,
        xzV + ys, yzV - xs, zzV + cosTheta, 0,
        0, 0, 0, 1
    ];
    return result;
};

/**
 * Return a Transform which represents a transform matrix applied about
 * a separate origin point.
 *
 * @method aboutOrigin
 * @static
 * @param {Array.Number} v origin point to apply matrix
 * @param {Transform} m matrix to apply
 * @return {Transform}
 */
Transform.aboutOrigin = function aboutOrigin(v, m) {
    var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
    var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
    var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
    return Transform.thenMove(m, [t0, t1, t2]);
};

/**
 * Return a Transform representation of a skew transformation
 *
 * @method skew
 * @static
 * @param {Number} phi scale factor skew in the x axis
 * @param {Number} theta scale factor skew in the y axis
 * @param {Number} psi scale factor skew in the z axis
 * @return {Transform}
 */
Transform.skew = function skew(phi, theta, psi) {
    return [1, 0, 0, 0, Math.tan(psi), 1, 0, 0, Math.tan(theta), Math.tan(phi), 1, 0, 0, 0, 0, 1];
};

/**
 * Return a Transform representation of a skew in the x-direction
 *
 * @method skewX
 * @static
 * @param {Number} angle the angle between the top and left sides
 * @return {Transform}
 */
Transform.skewX = function skewX(angle) {
    return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};

/**
 * Return a Transform representation of a skew in the y-direction
 *
 * @method skewY
 * @static
 * @param {Number} angle the angle between the top and right sides
 * @return {Transform}
 */
Transform.skewY = function skewY(angle) {
    return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};

/**
 * Returns a perspective Transform matrix
 *
 * @method perspective
 * @static
 * @param {Number} focusZ z position of focal point
 * @return {Transform}
 */
Transform.perspective = function perspective(focusZ) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
};

/**
 * Return translation vector component of given Transform
 *
 * @method getTranslate
 * @static
 * @param {Transform} m Transform
 * @return {Array.Number} the translation vector [t_x, t_y, t_z]
 */
Transform.getTranslate = function getTranslate(m) {
    return [m[12], m[13], m[14]];
};

/**
 * Return inverse affine transform for given Transform.
 *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
 *   Will provide incorrect results if not invertible or preconditions not met.
 *
 * @method inverse
 * @static
 * @param {Transform} m Transform
 * @return {Transform}
 */
Transform.inverse = function inverse(m) {
    // only need to consider 3x3 section for affine
    var c0 = m[5] * m[10] - m[6] * m[9];
    var c1 = m[4] * m[10] - m[6] * m[8];
    var c2 = m[4] * m[9] - m[5] * m[8];
    var c4 = m[1] * m[10] - m[2] * m[9];
    var c5 = m[0] * m[10] - m[2] * m[8];
    var c6 = m[0] * m[9] - m[1] * m[8];
    var c8 = m[1] * m[6] - m[2] * m[5];
    var c9 = m[0] * m[6] - m[2] * m[4];
    var c10 = m[0] * m[5] - m[1] * m[4];
    var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
    var invD = 1 / detM;
    var result = [
        invD * c0, -invD * c4, invD * c8, 0,
        -invD * c1, invD * c5, -invD * c9, 0,
        invD * c2, -invD * c6, invD * c10, 0,
        0, 0, 0, 1
    ];
    result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
    result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
    result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
    return result;
};

/**
 * Returns the transpose of a 4x4 matrix
 *
 * @method transpose
 * @static
 * @param {Transform} m matrix
 * @return {Transform} the resulting transposed matrix
 */
Transform.transpose = function transpose(m) {
    return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
};

function _normSquared(v) {
    return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}
function _norm(v) {
    return Math.sqrt(_normSquared(v));
}
function _sign(n) {
    return (n < 0) ? -1 : 1;
}

/**
 * Decompose Transform into separate .translate, .rotate, .scale,
 *    and .skew components.
 *
 * @method interpret
 * @static
 * @param {Transform} M transform matrix
 * @return {Object} matrix spec object with component matrices .translate,
 *    .rotate, .scale, .skew
 */
Transform.interpret = function interpret(M) {

    // QR decomposition via Householder reflections
    //FIRST ITERATION

    //default Q1 to the identity matrix;
    var x = [M[0], M[1], M[2]];                // first column vector
    var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
    var xNorm = _norm(x);                      // norm of first column vector
    var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
    var mult = 2 / _normSquared(v);            // mult = 2/v'v

    //bail out if our Matrix is singular
    if (mult >= Infinity) {
        return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
    }

    //evaluate Q1 = I - 2vv'/v'v
    var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    //diagonals
    Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
    Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
    Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry

    //upper diagonal
    Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
    Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
    Q1[6] = -mult * v[1] * v[2];        // 1,2 entry

    //lower diagonal
    Q1[4] = Q1[1];                      // 1,0 entry
    Q1[8] = Q1[2];                      // 2,0 entry
    Q1[9] = Q1[6];                      // 2,1 entry

    //reduce first column of M
    var MQ1 = Transform.multiply(Q1, M);

    //SECOND ITERATION on (1,1) minor
    var x2 = [MQ1[5], MQ1[6]];
    var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
    var x2Norm = _norm(x2);                     // norm of first column vector
    var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
    var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v

    //evaluate Q2 = I - 2vv'/v'v
    var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

    //diagonal
    Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
    Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

    //off diagonals
    Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
    Q2[9] = Q2[6];                      // 1,2 entry

    //calc QR decomposition. Q = Q1*Q2, R = Q'*M
    var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
    var R = Transform.multiply(Q, M);

    //remove negative scaling
    var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
    R = Transform.multiply(R, remover);
    Q = Transform.multiply(remover, Q);

    //decompose into rotate/scale/skew matrices
    var result = {};
    result.translate = Transform.getTranslate(M);
    result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
    if (!result.rotate[0]) {
        result.rotate[0] = 0;
        result.rotate[2] = Math.atan2(Q[4], Q[5]);
    }
    result.scale = [R[0], R[5], R[10]];
    result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

    //double rotation workaround
    if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
        result.rotate[1] = Math.PI - result.rotate[1];
        if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
        if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
        if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
        else result.rotate[0] -= Math.PI;
        if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
        else result.rotate[2] -= Math.PI;
    }

    return result;
};

/**
 * Weighted average between two matrices by averaging their
 *     translation, rotation, scale, skew components.
 *     f(M1,M2,t) = (1 - t) * M1 + t * M2
 *
 * @method average
 * @static
 * @param {Transform} M1 f(M1,M2,0) = M1
 * @param {Transform} M2 f(M1,M2,1) = M2
 * @param {Number} t
 * @return {Transform}
 */
Transform.average = function average(M1, M2, t) {
    t = (t === undefined) ? 0.5 : t;
    var specM1 = Transform.interpret(M1);
    var specM2 = Transform.interpret(M2);

    var specAvg = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: [0, 0, 0],
        skew: [0, 0, 0]
    };

    for (var i = 0; i < 3; i++) {
        specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
        specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
        specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
        specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
    }
    return Transform.build(specAvg);
};

/**
 * Compose .translate, .rotate, .scale, .skew components into
 * Transform matrix
 *
 * @method build
 * @static
 * @param {matrixSpec} spec object with component matrices .translate,
 *    .rotate, .scale, .skew
 * @return {Transform} composed transform
 */
Transform.build = function build(spec) {
    var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
    var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
    var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
    return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
};

/**
 * Determine if two Transforms are component-wise equal
 *   Warning: breaks on perspective Transforms
 *
 * @method equals
 * @static
 * @param {Transform} a matrix
 * @param {Transform} b matrix
 * @return {boolean}
 */
Transform.equals = function equals(a, b) {
    return !Transform.notEquals(a, b);
};

/**
 * Determine if two Transforms are component-wise unequal
 *   Warning: breaks on perspective Transforms
 *
 * @method notEquals
 * @static
 * @param {Transform} a matrix
 * @param {Transform} b matrix
 * @return {boolean}
 */
Transform.notEquals = function notEquals(a, b) {
    if (a === b) return false;

    // shortci
    return !(a && b) ||
        a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
        a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
        a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
        a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
};

/**
 * Constrain angle-trio components to range of [-pi, pi).
 *
 * @method normalizeRotation
 * @static
 * @param {Array.Number} rotation phi, theta, psi (array of floats
 *    && array.length == 3)
 * @return {Array.Number} new phi, theta, psi triplet
 *    (array of floats && array.length == 3)
 */
Transform.normalizeRotation = function normalizeRotation(rotation) {
    var result = rotation.slice(0);
    if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
        result[0] = -result[0];
        result[1] = Math.PI - result[1];
        result[2] -= Math.PI;
    }
    if (result[0] > Math.PI * 0.5) {
        result[0] = result[0] - Math.PI;
        result[1] = Math.PI - result[1];
        result[2] -= Math.PI;
    }
    if (result[0] < -Math.PI * 0.5) {
        result[0] = result[0] + Math.PI;
        result[1] = -Math.PI - result[1];
        result[2] -= Math.PI;
    }
    while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
    while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
    while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
    while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
    return result;
};

/**
 * (Property) Array defining a translation forward in z by 1
 *
 * @property {array} inFront
 * @static
 * @final
 */
Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

/**
 * (Property) Array defining a translation backwards in z by 1
 *
 * @property {array} behind
 * @static
 * @final
 */
Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

module.exports = Transform;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var EventHandler = require('./EventHandler');
var OptionsManager = require('./OptionsManager');
var RenderNode = require('./RenderNode');

/**
 * Useful for quickly creating elements within applications
 *   with large event systems.  Consists of a RenderNode paired with
 *   an input EventHandler and an output EventHandler.
 *   Meant to be extended by the developer.
 *
 * @class View
 * @uses EventHandler
 * @uses OptionsManager
 * @uses RenderNode
 * @constructor
 */
function View(options) {
    this._node = new RenderNode();

    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();
    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);

    this.options = Object.create(this.constructor.DEFAULT_OPTIONS || View.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);

    if (options) this.setOptions(options);
}

View.DEFAULT_OPTIONS = {}; // no defaults

/**
 * Look up options value by key
 * @method getOptions
 *
 * @param {string} key key
 * @return {Object} associated object
 */
View.prototype.getOptions = function getOptions() {
    return this._optionsManager.value();
};

/*
 *  Set internal options.
 *  No defaults options are set in View.
 *
 *  @method setOptions
 *  @param {Object} options
 */
View.prototype.setOptions = function setOptions(options) {
    this._optionsManager.patch(options);
};

/**
 * Add a child renderable to the view.
 *   Note: This is meant to be used by an inheriting class
 *   rather than from outside the prototype chain.
 *
 * @method add
 * @return {RenderNode}
 * @protected
 */
View.prototype.add = function add() {
    return this._node.add.apply(this._node, arguments);
};

/**
 * Alias for add
 * @method _add
 */
View.prototype._add = View.prototype.add;

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {number} Render spec for this component
 */
View.prototype.render = function render() {
    return this._node.render();
};

/**
 * Return size of contained element.
 *
 * @method getSize
 * @return {Array.Number} [width, height]
 */
View.prototype.getSize = function getSize() {
    if (this._node && this._node.getSize) {
        return this._node.getSize.apply(this._node, arguments) || this.options.size;
    }
    else return this.options.size;
};

module.exports = View;
},{"./EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","./OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js","./RenderNode":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/RenderNode.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ViewSequence.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */




/**
 * Helper object used to iterate through items sequentially. Used in
 *   views that deal with layout.  A ViewSequence object conceptually points
 *   to a node in a linked list.
 *
 * @class ViewSequence
 *
 * @constructor
 * @param {Object|Array} options Options object, or content array.
 * @param {Number} [options.index] starting index.
 * @param {Number} [options.array] Array of elements to populate the ViewSequence
 * @param {Object} [options._] Optional backing store (internal
 * @param {Boolean} [options.loop] Whether to wrap when accessing elements just past the end
 *   (or beginning) of the sequence.
 */
function ViewSequence(options) {
    if (!options) options = [];
    if (options instanceof Array) options = {array: options};

    this._ = null;
    this.index = options.index || 0;

    if (options.array) this._ = new (this.constructor.Backing)(options.array);
    else if (options._) this._ = options._;

    if (this.index === this._.firstIndex) this._.firstNode = this;
    if (this.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = this;

    if (options.loop !== undefined) this._.loop = options.loop;

    this._previousNode = null;
    this._nextNode = null;
}

// constructor for internal storage
ViewSequence.Backing = function Backing(array) {
    this.array = array;
    this.firstIndex = 0;
    this.loop = false;
    this.firstNode = null;
    this.lastNode = null;
};

// Get value "i" slots away from the first index.
ViewSequence.Backing.prototype.getValue = function getValue(i) {
    var _i = i - this.firstIndex;
    if (_i < 0 || _i >= this.array.length) return null;
    return this.array[_i];
};

// Set value "i" slots away from the first index.
ViewSequence.Backing.prototype.setValue = function setValue(i, value) {
    this.array[i - this.firstIndex] = value;
};

// After splicing into the backing store, restore the indexes of each node correctly.
ViewSequence.Backing.prototype.reindex = function reindex(start, removeCount, insertCount) {
    if (!this.array[0]) return;

    var i = 0;
    var index = this.firstIndex;
    var indexShiftAmount = insertCount - removeCount;
    var node = this.firstNode;

    // find node to begin
    while (index < start - 1) {
        node = node.getNext();
        index++;
    }
    // skip removed nodes
    var spliceStartNode = node;
    for (i = 0; i < removeCount; i++) {
        node = node.getNext();
        if (node) node._previousNode = spliceStartNode;
    }
    var spliceResumeNode = node ? node.getNext() : null;
    // generate nodes for inserted items
    spliceStartNode._nextNode = null;
    node = spliceStartNode;
    for (i = 0; i < insertCount; i++) node = node.getNext();
    index += insertCount;
    // resume the chain
    if (node !== spliceResumeNode) {
        node._nextNode = spliceResumeNode;
        if (spliceResumeNode) spliceResumeNode._previousNode = node;
    }
    if (spliceResumeNode) {
        node = spliceResumeNode;
        index++;
        while (node && index < this.array.length + this.firstIndex) {
            if (node._nextNode) node.index += indexShiftAmount;
            else node.index = index;
            node = node.getNext();
            index++;
        }
    }
};

/**
 * Return ViewSequence node previous to this node in the list, respecting looping if applied.
 *
 * @method getPrevious
 * @return {ViewSequence} previous node.
 */
ViewSequence.prototype.getPrevious = function getPrevious() {
    if (this.index === this._.firstIndex) {
        if (this._.loop) {
            this._previousNode = this._.lastNode || new (this.constructor)({_: this._, index: this._.firstIndex + this._.array.length - 1});
            this._previousNode._nextNode = this;
        }
        else {
            this._previousNode = null;
        }
    }
    else if (!this._previousNode) {
        this._previousNode = new (this.constructor)({_: this._, index: this.index - 1});
        this._previousNode._nextNode = this;
    }
    return this._previousNode;
};

/**
 * Return ViewSequence node next after this node in the list, respecting looping if applied.
 *
 * @method getNext
 * @return {ViewSequence} previous node.
 */
ViewSequence.prototype.getNext = function getNext() {
    if (this.index === this._.firstIndex + this._.array.length - 1) {
        if (this._.loop) {
            this._nextNode = this._.firstNode || new (this.constructor)({_: this._, index: this._.firstIndex});
            this._nextNode._previousNode = this;
        }
        else {
            this._nextNode = null;
        }
    }
    else if (!this._nextNode) {
        this._nextNode = new (this.constructor)({_: this._, index: this.index + 1});
        this._nextNode._previousNode = this;
    }
    return this._nextNode;
};

/**
 * Return index of this ViewSequence node.
 *
 * @method getIndex
 * @return {Number} index
 */
ViewSequence.prototype.getIndex = function getIndex() {
    return this.index;
};

/**
 * Return printable version of this ViewSequence node.
 *
 * @method toString
 * @return {string} this index as a string
 */
ViewSequence.prototype.toString = function toString() {
    return '' + this.index;
};

/**
 * Add one or more objects to the beginning of the sequence.
 *
 * @method unshift
 * @param {...Object} value arguments array of objects
 */
ViewSequence.prototype.unshift = function unshift(value) {
    this._.array.unshift.apply(this._.array, arguments);
    this._.firstIndex -= arguments.length;
};

/**
 * Add one or more objects to the end of the sequence.
 *
 * @method push
 * @param {...Object} value arguments array of objects
 */
ViewSequence.prototype.push = function push(value) {
    this._.array.push.apply(this._.array, arguments);
};

/**
 * Remove objects from the sequence
 *
 * @method splice
 * @param {Number} index starting index for removal
 * @param {Number} howMany how many elements to remove
 * @param {...Object} value arguments array of objects
 */
ViewSequence.prototype.splice = function splice(index, howMany) {
    var values = Array.prototype.slice.call(arguments, 2);
    this._.array.splice.apply(this._.array, [index - this._.firstIndex, howMany].concat(values));
    this._.reindex(index, howMany, values.length);
};

/**
 * Exchange this element's sequence position with another's.
 *
 * @method swap
 * @param {ViewSequence} other element to swap with.
 */
ViewSequence.prototype.swap = function swap(other) {
    var otherValue = other.get();
    var myValue = this.get();
    this._.setValue(this.index, otherValue);
    this._.setValue(other.index, myValue);

    var myPrevious = this._previousNode;
    var myNext = this._nextNode;
    var myIndex = this.index;
    var otherPrevious = other._previousNode;
    var otherNext = other._nextNode;
    var otherIndex = other.index;

    this.index = otherIndex;
    this._previousNode = (otherPrevious === this) ? other : otherPrevious;
    if (this._previousNode) this._previousNode._nextNode = this;
    this._nextNode = (otherNext === this) ? other : otherNext;
    if (this._nextNode) this._nextNode._previousNode = this;

    other.index = myIndex;
    other._previousNode = (myPrevious === other) ? this : myPrevious;
    if (other._previousNode) other._previousNode._nextNode = other;
    other._nextNode = (myNext === other) ? this : myNext;
    if (other._nextNode) other._nextNode._previousNode = other;

    if (this.index === this._.firstIndex) this._.firstNode = this;
    else if (this.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = this;
    if (other.index === this._.firstIndex) this._.firstNode = other;
    else if (other.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = other;
};

   /**
 * Return value of this ViewSequence node.
 *
 * @method get
 * @return {Object} value of thiss
 */
ViewSequence.prototype.get = function get() {
    return this._.getValue(this.index);
};

   /**
 * Call getSize() on the contained View.
 *
 * @method getSize
 * @return {Array.Number} [width, height]
 */
ViewSequence.prototype.getSize = function getSize() {
    var target = this.get();
    return target ? target.getSize() : null;
};

/**
 * Generate a render spec from the contents of this component.
 * Specifically, this will render the value at the current index.
 * @private
 * @method render
 * @return {number} Render spec for this component
 */
ViewSequence.prototype.render = function render() {
    var target = this.get();
    return target ? target.render.apply(target, arguments) : null;
};

module.exports = ViewSequence;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/GenericSync.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var EventHandler = require('../core/EventHandler');

/**
 * Combines multiple types of sync classes (e.g. mouse, touch,
 *  scrolling) into one standardized interface for inclusion in widgets.
 *
 *  Sync classes are first registered with a key, and then can be accessed
 *  globally by key.
 *
 *  Emits 'start', 'update' and 'end' events as a union of the sync class
 *  providers.
 *
 * @class GenericSync
 * @constructor
 * @param syncs {Object|Array} object with fields {sync key : sync options}
 *    or an array of registered sync keys
 * @param [options] {Object|Array} options object to set on all syncs
 */
function GenericSync(syncs, options) {
    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();

    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);

    this._syncs = {};
    if (syncs) this.addSync(syncs);
    if (options) this.setOptions(options);
}

GenericSync.DIRECTION_X = 0;
GenericSync.DIRECTION_Y = 1;
GenericSync.DIRECTION_Z = 2;

// Global registry of sync classes. Append only.
var registry = {};

/**
 * Register a global sync class with an identifying key
 *
 * @static
 * @method register
 *
 * @param syncObject {Object} an object of {sync key : sync options} fields
 */
GenericSync.register = function register(syncObject) {
    for (var key in syncObject){
        if (registry[key]){
            if (registry[key] === syncObject[key]) return; // redundant registration
            else throw new Error('this key is registered to a different sync class');
        }
        else registry[key] = syncObject[key];
    }
};

/**
 * Helper to set options on all sync instances
 *
 * @method setOptions
 * @param options {Object} options object
 */
GenericSync.prototype.setOptions = function(options) {
    for (var key in this._syncs){
        this._syncs[key].setOptions(options);
    }
};

/**
 * Pipe events to a sync class
 *
 * @method pipeSync
 * @param key {String} identifier for sync class
 */
GenericSync.prototype.pipeSync = function pipeToSync(key) {
    var sync = this._syncs[key];
    this._eventInput.pipe(sync);
    sync.pipe(this._eventOutput);
};

/**
 * Unpipe events from a sync class
 *
 * @method unpipeSync
 * @param key {String} identifier for sync class
 */
GenericSync.prototype.unpipeSync = function unpipeFromSync(key) {
    var sync = this._syncs[key];
    this._eventInput.unpipe(sync);
    sync.unpipe(this._eventOutput);
};

function _addSingleSync(key, options) {
    if (!registry[key]) return;
    this._syncs[key] = new (registry[key])(options);
    this.pipeSync(key);
}

/**
 * Add a sync class to from the registered classes
 *
 * @method addSync
 * @param syncs {Object|Array.String} an array of registered sync keys
 *    or an object with fields {sync key : sync options}
 */
GenericSync.prototype.addSync = function addSync(syncs) {
    if (syncs instanceof Array)
        for (var i = 0; i < syncs.length; i++)
            _addSingleSync.call(this, syncs[i]);
    else if (syncs instanceof Object)
        for (var key in syncs)
            _addSingleSync.call(this, key, syncs[key]);
};

module.exports = GenericSync;
},{"../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/ScrollSync.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var EventHandler = require('../core/EventHandler');
var Engine = require('../core/Engine');

/**
 * Handles piped in mousewheel events.
 *   Emits 'start', 'update', and 'end' events with payloads including:
 *   delta: change since last position,
 *   position: accumulated deltas,
 *   velocity: speed of change in pixels per ms,
 *   slip: true (unused).
 *
 *   Can be used as delegate of GenericSync.
 *
 * @class ScrollSync
 * @constructor
 * @param {Object} [options] overrides of default options
 * @param {Number} [options.direction] Pay attention to x changes (ScrollSync.DIRECTION_X),
 *   y changes (ScrollSync.DIRECTION_Y) or both (undefined)
 * @param {Number} [options.minimumEndSpeed] End speed calculation floors at this number, in pixels per ms
 * @param {boolean} [options.rails] whether to snap position calculations to nearest axis
 * @param {Number | Array.Number} [options.scale] scale outputs in by scalar or pair of scalars
 * @param {Number} [options.stallTime] reset time for velocity calculation in ms
 */
function ScrollSync(options) {
    this.options = Object.create(ScrollSync.DEFAULT_OPTIONS);
    if (options) this.setOptions(options);

    this._payload = {
        delta    : null,
        position : null,
        velocity : null,
        slip     : true
    };

    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();

    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);

    this._position = (this.options.direction === undefined) ? [0,0] : 0;
    this._prevTime = undefined;
    this._prevVel = undefined;
    this._eventInput.on('mousewheel', _handleMove.bind(this));
    this._eventInput.on('wheel', _handleMove.bind(this));
    this._inProgress = false;
    this._loopBound = false;
}

ScrollSync.DEFAULT_OPTIONS = {
    direction: undefined,
    minimumEndSpeed: Infinity,
    rails: false,
    scale: 1,
    stallTime: 50,
    lineHeight: 40
};

ScrollSync.DIRECTION_X = 0;
ScrollSync.DIRECTION_Y = 1;

var MINIMUM_TICK_TIME = 8;

var _now = Date.now;

function _newFrame() {
    if (this._inProgress && (_now() - this._prevTime) > this.options.stallTime) {
        this._inProgress = false;

        var finalVel = (Math.abs(this._prevVel) >= this.options.minimumEndSpeed)
            ? this._prevVel
            : 0;

        var payload = this._payload;
        payload.position = this._position;
        payload.velocity = finalVel;
        payload.slip = true;

        this._eventOutput.emit('end', payload);
    }
}

function _handleMove(event) {
    event.preventDefault();

    if (!this._inProgress) {
        this._inProgress = true;
        this._position = (this.options.direction === undefined) ? [0,0] : 0;
        payload = this._payload;
        payload.slip = true;
        payload.position = this._position;
        payload.clientX = event.clientX;
        payload.clientY = event.clientY;
        payload.offsetX = event.offsetX;
        payload.offsetY = event.offsetY;
        this._eventOutput.emit('start', payload);
        if (!this._loopBound) {
            Engine.on('prerender', _newFrame.bind(this));
            this._loopBound = true;
        }
    }

    var currTime = _now();
    var prevTime = this._prevTime || currTime;

    var diffX = (event.wheelDeltaX !== undefined) ? event.wheelDeltaX : -event.deltaX;
    var diffY = (event.wheelDeltaY !== undefined) ? event.wheelDeltaY : -event.deltaY;

    if (event.deltaMode === 1) { // units in lines, not pixels
        diffX *= this.options.lineHeight;
        diffY *= this.options.lineHeight;
    }

    if (this.options.rails) {
        if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
        else diffX = 0;
    }

    var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME); // minimum tick time

    var velX = diffX / diffTime;
    var velY = diffY / diffTime;

    var scale = this.options.scale;
    var nextVel;
    var nextDelta;

    if (this.options.direction === ScrollSync.DIRECTION_X) {
        nextDelta = scale * diffX;
        nextVel = scale * velX;
        this._position += nextDelta;
    }
    else if (this.options.direction === ScrollSync.DIRECTION_Y) {
        nextDelta = scale * diffY;
        nextVel = scale * velY;
        this._position += nextDelta;
    }
    else {
        nextDelta = [scale * diffX, scale * diffY];
        nextVel = [scale * velX, scale * velY];
        this._position[0] += nextDelta[0];
        this._position[1] += nextDelta[1];
    }

    var payload = this._payload;
    payload.delta    = nextDelta;
    payload.velocity = nextVel;
    payload.position = this._position;
    payload.slip     = true;

    this._eventOutput.emit('update', payload);

    this._prevTime = currTime;
    this._prevVel = nextVel;
}

/**
 * Return entire options dictionary, including defaults.
 *
 * @method getOptions
 * @return {Object} configuration options
 */
ScrollSync.prototype.getOptions = function getOptions() {
    return this.options;
};

/**
 * Set internal options, overriding any default options
 *
 * @method setOptions
 *
 * @param {Object} [options] overrides of default options
 * @param {Number} [options.minimimEndSpeed] If final velocity smaller than this, round down to 0.
 * @param {Number} [options.stallTime] ms of non-motion before 'end' emitted
 * @param {Number} [options.rails] whether to constrain to nearest axis.
 * @param {Number} [options.direction] ScrollSync.DIRECTION_X, DIRECTION_Y -
 *    pay attention to one specific direction.
 * @param {Number} [options.scale] constant factor to scale velocity output
 */
ScrollSync.prototype.setOptions = function setOptions(options) {
    if (options.direction !== undefined) this.options.direction = options.direction;
    if (options.minimumEndSpeed !== undefined) this.options.minimumEndSpeed = options.minimumEndSpeed;
    if (options.rails !== undefined) this.options.rails = options.rails;
    if (options.scale !== undefined) this.options.scale = options.scale;
    if (options.stallTime !== undefined) this.options.stallTime = options.stallTime;
};

module.exports = ScrollSync;
},{"../core/Engine":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Engine.js","../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/TouchSync.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var TouchTracker = require('./TouchTracker');
var EventHandler = require('../core/EventHandler');

/**
 * Handles piped in touch events. Emits 'start', 'update', and 'events'
 *   events with position, velocity, acceleration, and touch id.
 *   Useful for dealing with inputs on touch devices.
 *
 *
 * @class TouchSync
 * @constructor
 *
 * @param [options] {Object}             default options overrides
 * @param [options.direction] {Number}   read from a particular axis
 * @param [options.rails] {Boolean}      read from axis with greatest differential
 * @param [options.scale] {Number}       constant factor to scale velocity output
 */
function TouchSync(options) {
    this.options =  Object.create(TouchSync.DEFAULT_OPTIONS);
    if (options) this.setOptions(options);

    this._eventOutput = new EventHandler();
    this._touchTracker = new TouchTracker();

    EventHandler.setOutputHandler(this, this._eventOutput);
    EventHandler.setInputHandler(this, this._touchTracker);

    this._touchTracker.on('trackstart', _handleStart.bind(this));
    this._touchTracker.on('trackmove', _handleMove.bind(this));
    this._touchTracker.on('trackend', _handleEnd.bind(this));

    this._payload = {
        delta    : null,
        position : null,
        velocity : null,
        clientX  : undefined,
        clientY  : undefined,
        count    : 0,
        touch    : undefined
    };

    this._position = null; // to be deprecated
}

TouchSync.DEFAULT_OPTIONS = {
    direction: undefined,
    rails: false,
    scale: 1
};

TouchSync.DIRECTION_X = 0;
TouchSync.DIRECTION_Y = 1;

var MINIMUM_TICK_TIME = 8;

// handle 'trackstart'
function _handleStart(data) {
    var velocity;
    var delta;
    if (this.options.direction !== undefined){
        this._position = 0;
        velocity = 0;
        delta = 0;
    }
    else {
        this._position = [0, 0];
        velocity = [0, 0];
        delta = [0, 0];
    }

    var payload = this._payload;
    payload.delta = delta;
    payload.position = this._position;
    payload.velocity = velocity;
    payload.clientX = data.x;
    payload.clientY = data.y;
    payload.count = data.count;
    payload.touch = data.identifier;

    this._eventOutput.emit('start', payload);
}

// handle 'trackmove'
function _handleMove(data) {
    var history = data.history;

    var currHistory = history[history.length - 1];
    var prevHistory = history[history.length - 2];

    var prevTime = prevHistory.timestamp;
    var currTime = currHistory.timestamp;

    var diffX = currHistory.x - prevHistory.x;
    var diffY = currHistory.y - prevHistory.y;

    if (this.options.rails) {
        if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
        else diffX = 0;
    }

    var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME);

    var velX = diffX / diffTime;
    var velY = diffY / diffTime;

    var scale = this.options.scale;
    var nextVel;
    var nextDelta;

    if (this.options.direction === TouchSync.DIRECTION_X) {
        nextDelta = scale * diffX;
        nextVel = scale * velX;
        this._position += nextDelta;
    }
    else if (this.options.direction === TouchSync.DIRECTION_Y) {
        nextDelta = scale * diffY;
        nextVel = scale * velY;
        this._position += nextDelta;
    }
    else {
        nextDelta = [scale * diffX, scale * diffY];
        nextVel = [scale * velX, scale * velY];
        this._position[0] += nextDelta[0];
        this._position[1] += nextDelta[1];
    }

    var payload = this._payload;
    payload.delta    = nextDelta;
    payload.velocity = nextVel;
    payload.position = this._position;
    payload.clientX  = data.x;
    payload.clientY  = data.y;
    payload.count    = data.count;
    payload.touch    = data.identifier;

    this._eventOutput.emit('update', payload);
}

// handle 'trackend'
function _handleEnd(data) {
    this._payload.count = data.count;
    this._eventOutput.emit('end', this._payload);
}

/**
 * Set internal options, overriding any default options
 *
 * @method setOptions
 *
 * @param [options] {Object}             default options overrides
 * @param [options.direction] {Number}   read from a particular axis
 * @param [options.rails] {Boolean}      read from axis with greatest differential
 * @param [options.scale] {Number}       constant factor to scale velocity output
 */
TouchSync.prototype.setOptions = function setOptions(options) {
    if (options.direction !== undefined) this.options.direction = options.direction;
    if (options.rails !== undefined) this.options.rails = options.rails;
    if (options.scale !== undefined) this.options.scale = options.scale;
};

/**
 * Return entire options dictionary, including defaults.
 *
 * @method getOptions
 * @return {Object} configuration options
 */
TouchSync.prototype.getOptions = function getOptions() {
    return this.options;
};

module.exports = TouchSync;
},{"../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","./TouchTracker":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/TouchTracker.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/TouchTracker.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var EventHandler = require('../core/EventHandler');

var _now = Date.now;

function _timestampTouch(touch, event, history) {
    return {
        x: touch.clientX,
        y: touch.clientY,
        identifier : touch.identifier,
        origin: event.origin,
        timestamp: _now(),
        count: event.touches.length,
        history: history
    };
}

function _handleStart(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        var data = _timestampTouch(touch, event, null);
        this.eventOutput.emit('trackstart', data);
        if (!this.selective && !this.touchHistory[touch.identifier]) this.track(data);
    }
}

function _handleMove(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        var history = this.touchHistory[touch.identifier];
        if (history) {
            var data = _timestampTouch(touch, event, history);
            this.touchHistory[touch.identifier].push(data);
            this.eventOutput.emit('trackmove', data);
        }
    }
}

function _handleEnd(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
        var touch = event.changedTouches[i];
        var history = this.touchHistory[touch.identifier];
        if (history) {
            var data = _timestampTouch(touch, event, history);
            this.eventOutput.emit('trackend', data);
            delete this.touchHistory[touch.identifier];
        }
    }
}

function _handleUnpipe() {
    for (var i in this.touchHistory) {
        var history = this.touchHistory[i];
        this.eventOutput.emit('trackend', {
            touch: history[history.length - 1].touch,
            timestamp: Date.now(),
            count: 0,
            history: history
        });
        delete this.touchHistory[i];
    }
}

/**
 * Helper to TouchSync – tracks piped in touch events, organizes touch
 *   events by ID, and emits track events back to TouchSync.
 *   Emits 'trackstart', 'trackmove', and 'trackend' events upstream.
 *
 * @class TouchTracker
 * @constructor
 * @param {Boolean} selective if false, save state for each touch.
 */
function TouchTracker(selective) {
    this.selective = selective;
    this.touchHistory = {};

    this.eventInput = new EventHandler();
    this.eventOutput = new EventHandler();

    EventHandler.setInputHandler(this, this.eventInput);
    EventHandler.setOutputHandler(this, this.eventOutput);

    this.eventInput.on('touchstart', _handleStart.bind(this));
    this.eventInput.on('touchmove', _handleMove.bind(this));
    this.eventInput.on('touchend', _handleEnd.bind(this));
    this.eventInput.on('touchcancel', _handleEnd.bind(this));
    this.eventInput.on('unpipe', _handleUnpipe.bind(this));
}

/**
 * Record touch data, if selective is false.
 * @private
 * @method track
 * @param {Object} data touch data
 */
TouchTracker.prototype.track = function track(data) {
    this.touchHistory[data.identifier] = [data];
};

module.exports = TouchTracker;
},{"../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/math/Vector.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */




/**
 * Three-element floating point vector.
 *
 * @class Vector
 * @constructor
 *
 * @param {number} x x element value
 * @param {number} y y element value
 * @param {number} z z element value
 */
function Vector(x,y,z) {
    if (arguments.length === 1) this.set(x);
    else {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    return this;
}

var _register = new Vector(0,0,0);

/**
 * Add this element-wise to another Vector, element-wise.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method add
 * @param {Vector} v addend
 * @return {Vector} vector sum
 */
Vector.prototype.add = function add(v) {
    return _setXYZ.call(_register,
        this.x + v.x,
        this.y + v.y,
        this.z + v.z
    );
};

/**
 * Subtract another vector from this vector, element-wise.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method sub
 * @param {Vector} v subtrahend
 * @return {Vector} vector difference
 */
Vector.prototype.sub = function sub(v) {
    return _setXYZ.call(_register,
        this.x - v.x,
        this.y - v.y,
        this.z - v.z
    );
};

/**
 * Scale Vector by floating point r.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method mult
 *
 * @param {number} r scalar
 * @return {Vector} vector result
 */
Vector.prototype.mult = function mult(r) {
    return _setXYZ.call(_register,
        r * this.x,
        r * this.y,
        r * this.z
    );
};

/**
 * Scale Vector by floating point 1/r.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method div
 *
 * @param {number} r scalar
 * @return {Vector} vector result
 */
Vector.prototype.div = function div(r) {
    return this.mult(1 / r);
};

/**
 * Given another vector v, return cross product (v)x(this).
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method cross
 * @param {Vector} v Left Hand Vector
 * @return {Vector} vector result
 */
Vector.prototype.cross = function cross(v) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var vx = v.x;
    var vy = v.y;
    var vz = v.z;

    return _setXYZ.call(_register,
        z * vy - y * vz,
        x * vz - z * vx,
        y * vx - x * vy
    );
};

/**
 * Component-wise equality test between this and Vector v.
 * @method equals
 * @param {Vector} v vector to compare
 * @return {boolean}
 */
Vector.prototype.equals = function equals(v) {
    return (v.x === this.x && v.y === this.y && v.z === this.z);
};

/**
 * Rotate clockwise around x-axis by theta radians.
 *   Note: This sets the internal result register, so other references to that vector will change.
 * @method rotateX
 * @param {number} theta radians
 * @return {Vector} rotated vector
 */
Vector.prototype.rotateX = function rotateX(theta) {
    var x = this.x;
    var y = this.y;
    var z = this.z;

    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);

    return _setXYZ.call(_register,
        x,
        y * cosTheta - z * sinTheta,
        y * sinTheta + z * cosTheta
    );
};

/**
 * Rotate clockwise around y-axis by theta radians.
 *   Note: This sets the internal result register, so other references to that vector will change.
 * @method rotateY
 * @param {number} theta radians
 * @return {Vector} rotated vector
 */
Vector.prototype.rotateY = function rotateY(theta) {
    var x = this.x;
    var y = this.y;
    var z = this.z;

    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);

    return _setXYZ.call(_register,
        z * sinTheta + x * cosTheta,
        y,
        z * cosTheta - x * sinTheta
    );
};

/**
 * Rotate clockwise around z-axis by theta radians.
 *   Note: This sets the internal result register, so other references to that vector will change.
 * @method rotateZ
 * @param {number} theta radians
 * @return {Vector} rotated vector
 */
Vector.prototype.rotateZ = function rotateZ(theta) {
    var x = this.x;
    var y = this.y;
    var z = this.z;

    var cosTheta = Math.cos(theta);
    var sinTheta = Math.sin(theta);

    return _setXYZ.call(_register,
        x * cosTheta - y * sinTheta,
        x * sinTheta + y * cosTheta,
        z
    );
};

/**
 * Return dot product of this with a second Vector
 * @method dot
 * @param {Vector} v second vector
 * @return {number} dot product
 */
Vector.prototype.dot = function dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
};

/**
 * Return squared length of this vector
 * @method normSquared
 * @return {number} squared length
 */
Vector.prototype.normSquared = function normSquared() {
    return this.dot(this);
};

/**
 * Return length of this vector
 * @method norm
 * @return {number} length
 */
Vector.prototype.norm = function norm() {
    return Math.sqrt(this.normSquared());
};

/**
 * Scale Vector to specified length.
 *   If length is less than internal tolerance, set vector to [length, 0, 0].
 *   Note: This sets the internal result register, so other references to that vector will change.
 * @method normalize
 *
 * @param {number} length target length, default 1.0
 * @return {Vector}
 */
Vector.prototype.normalize = function normalize(length) {
    if (arguments.length === 0) length = 1;
    var norm = this.norm();

    if (norm > 1e-7) return _setFromVector.call(_register, this.mult(length / norm));
    else return _setXYZ.call(_register, length, 0, 0);
};

/**
 * Make a separate copy of the Vector.
 *
 * @method clone
 *
 * @return {Vector}
 */
Vector.prototype.clone = function clone() {
    return new Vector(this);
};

/**
 * True if and only if every value is 0 (or falsy)
 *
 * @method isZero
 *
 * @return {boolean}
 */
Vector.prototype.isZero = function isZero() {
    return !(this.x || this.y || this.z);
};

function _setXYZ(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
}

function _setFromArray(v) {
    return _setXYZ.call(this,v[0],v[1],v[2] || 0);
}

function _setFromVector(v) {
    return _setXYZ.call(this, v.x, v.y, v.z);
}

function _setFromNumber(x) {
    return _setXYZ.call(this,x,0,0);
}

/**
 * Set this Vector to the values in the provided Array or Vector.
 *
 * @method set
 * @param {object} v array, Vector, or number
 * @return {Vector} this
 */
Vector.prototype.set = function set(v) {
    if (v instanceof Array)    return _setFromArray.call(this, v);
    if (v instanceof Vector)   return _setFromVector.call(this, v);
    if (typeof v === 'number') return _setFromNumber.call(this, v);
};

Vector.prototype.setXYZ = function(x,y,z) {
    return _setXYZ.apply(this, arguments);
};

Vector.prototype.set1D = function(x) {
    return _setFromNumber.call(this, x);
};

/**
 * Put result of last internal register calculation in specified output vector.
 *
 * @method put
 * @param {Vector} v destination vector
 * @return {Vector} destination vector
 */

Vector.prototype.put = function put(v) {
    if (this === _register) _setFromVector.call(v, _register);
    else _setFromVector.call(v, this);
};

/**
 * Set this vector to [0,0,0]
 *
 * @method clear
 */
Vector.prototype.clear = function clear() {
    return _setXYZ.call(this,0,0,0);
};

/**
 * Scale this Vector down to specified "cap" length.
 *   If Vector shorter than cap, or cap is Infinity, do nothing.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method cap
 * @return {Vector} capped vector
 */
Vector.prototype.cap = function cap(cap) {
    if (cap === Infinity) return _setFromVector.call(_register, this);
    var norm = this.norm();
    if (norm > cap) return _setFromVector.call(_register, this.mult(cap / norm));
    else return _setFromVector.call(_register, this);
};

/**
 * Return projection of this Vector onto another.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method project
 * @param {Vector} n vector to project upon
 * @return {Vector} projected vector
 */
Vector.prototype.project = function project(n) {
    return n.mult(this.dot(n));
};

/**
 * Reflect this Vector across provided vector.
 *   Note: This sets the internal result register, so other references to that vector will change.
 *
 * @method reflectAcross
 * @param {Vector} n vector to reflect across
 * @return {Vector} reflected vector
 */
Vector.prototype.reflectAcross = function reflectAcross(n) {
    n.normalize().put(n);
    return _setFromVector(_register, this.sub(this.project(n).mult(2)));
};

/**
 * Convert Vector to three-element array.
 *
 * @method get
 * @return {array<number>} three-element array
 */
Vector.prototype.get = function get() {
    return [this.x, this.y, this.z];
};

Vector.prototype.get1D = function() {
    return this.x;
};

module.exports = Vector;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/modifiers/StateModifier.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Modifier = require('../core/Modifier');
var Transform = require('../core/Transform');
var Transitionable = require('../transitions/Transitionable');
var TransitionableTransform = require('../transitions/TransitionableTransform');

/**
 *  A collection of visual changes to be
 *    applied to another renderable component, strongly coupled with the state that defines
 *    those changes. This collection includes a
 *    transform matrix, an opacity constant, a size, an origin specifier, and an alignment specifier.
 *    StateModifier objects can be added to any RenderNode or object
 *    capable of displaying renderables.  The StateModifier's children and descendants
 *    are transformed by the amounts specified in the modifier's properties.
 *
 * @class StateModifier
 * @constructor
 * @param {Object} [options] overrides of default options
 * @param {Transform} [options.transform] affine transformation matrix
 * @param {Number} [options.opacity]
 * @param {Array.Number} [options.origin] origin adjustment
 * @param {Array.Number} [options.align] align adjustment
 * @param {Array.Number} [options.size] size to apply to descendants
 */
function StateModifier(options) {
    this._transformState = new TransitionableTransform(Transform.identity);
    this._opacityState = new Transitionable(1);
    this._originState = new Transitionable([0, 0]);
    this._alignState = new Transitionable([0, 0]);
    this._sizeState = new Transitionable([0, 0]);

    this._modifier = new Modifier({
        transform: this._transformState,
        opacity: this._opacityState,
        origin: null,
        align: null,
        size: null
    });

    this._hasOrigin = false;
    this._hasAlign = false;
    this._hasSize = false;

    if (options) {
        if (options.transform) this.setTransform(options.transform);
        if (options.opacity !== undefined) this.setOpacity(options.opacity);
        if (options.origin) this.setOrigin(options.origin);
        if (options.align) this.setAlign(options.align);
        if (options.size) this.setSize(options.size);
    }
}

/**
 * Set the transform matrix of this modifier, either statically or
 *   through a provided Transitionable.
 *
 * @method setTransform
 *
 * @param {Transform} transform Transform to transition to.
 * @param {Transitionable} [transition] Valid transitionable object
 * @param {Function} [callback] callback to call after transition completes
 * @return {StateModifier} this
 */
StateModifier.prototype.setTransform = function setTransform(transform, transition, callback) {
    this._transformState.set(transform, transition, callback);
    return this;
};

/**
 * Set the opacity of this modifier, either statically or
 *   through a provided Transitionable.
 *
 * @method setOpacity
 *
 * @param {Number} opacity Opacity value to transition to.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {StateModifier} this
 */
StateModifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
    this._opacityState.set(opacity, transition, callback);
    return this;
};

/**
 * Set the origin of this modifier, either statically or
 *   through a provided Transitionable.
 *
 * @method setOrigin
 *
 * @param {Array.Number} origin two element array with values between 0 and 1.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {StateModifier} this
 */
StateModifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
    if (origin === null) {
        if (this._hasOrigin) {
            this._modifier.originFrom(null);
            this._hasOrigin = false;
        }
        return this;
    }
    else if (!this._hasOrigin) {
        this._hasOrigin = true;
        this._modifier.originFrom(this._originState);
    }
    this._originState.set(origin, transition, callback);
    return this;
};

/**
 * Set the alignment of this modifier, either statically or
 *   through a provided Transitionable.
 *
 * @method setAlign
 *
 * @param {Array.Number} align two element array with values between 0 and 1.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {StateModifier} this
 */
StateModifier.prototype.setAlign = function setOrigin(align, transition, callback) {
    if (align === null) {
        if (this._hasAlign) {
            this._modifier.alignFrom(null);
            this._hasAlign = false;
        }
        return this;
    }
    else if (!this._hasAlign) {
        this._hasAlign = true;
        this._modifier.alignFrom(this._alignState);
    }
    this._alignState.set(align, transition, callback);
    return this;
};

/**
 * Set the size of this modifier, either statically or
 *   through a provided Transitionable.
 *
 * @method setSize
 *
 * @param {Array.Number} size two element array with values between 0 and 1.
 * @param {Transitionable} transition Valid transitionable object
 * @param {Function} callback callback to call after transition completes
 * @return {StateModifier} this
 */
StateModifier.prototype.setSize = function setSize(size, transition, callback) {
    if (size === null) {
        if (this._hasSize) {
            this._modifier.sizeFrom(null);
            this._hasSize = false;
        }
        return this;
    }
    else if (!this._hasSize) {
        this._hasSize = true;
        this._modifier.sizeFrom(this._sizeState);
    }
    this._sizeState.set(size, transition, callback);
    return this;
};

/**
 * Stop the transition.
 *
 * @method halt
 */
StateModifier.prototype.halt = function halt() {
    this._transformState.halt();
    this._opacityState.halt();
    this._originState.halt();
    this._alignState.halt();
    this._sizeState.halt();
};

/**
 * Get the current state of the transform matrix component.
 *
 * @method getTransform
 * @return {Object} transform provider object
 */
StateModifier.prototype.getTransform = function getTransform() {
    return this._transformState.get();
};

/**
 * Get the destination state of the transform component.
 *
 * @method getFinalTransform
 * @return {Transform} transform matrix
 */
StateModifier.prototype.getFinalTransform = function getFinalTransform() {
    return this._transformState.getFinal();
};

/**
 * Get the current state of the opacity component.
 *
 * @method getOpacity
 * @return {Object} opacity provider object
 */
StateModifier.prototype.getOpacity = function getOpacity() {
    return this._opacityState.get();
};

/**
 * Get the current state of the origin component.
 *
 * @method getOrigin
 * @return {Object} origin provider object
 */
StateModifier.prototype.getOrigin = function getOrigin() {
    return this._hasOrigin ? this._originState.get() : null;
};

/**
 * Get the current state of the align component.
 *
 * @method getAlign
 * @return {Object} align provider object
 */
StateModifier.prototype.getAlign = function getAlign() {
    return this._hasAlign ? this._alignState.get() : null;
};

/**
 * Get the current state of the size component.
 *
 * @method getSize
 * @return {Object} size provider object
 */
StateModifier.prototype.getSize = function getSize() {
    return this._hasSize ? this._sizeState.get() : null;
};

/**
 * Return render spec for this StateModifier, applying to the provided
 *    target component.  This is similar to render() for Surfaces.
 *
 * @private
 * @method modify
 *
 * @param {Object} target (already rendered) render spec to
 *    which to apply the transform.
 * @return {Object} render spec for this StateModifier, including the
 *    provided target
 */
StateModifier.prototype.modify = function modify(target) {
    return this._modifier.modify(target);
};

module.exports = StateModifier;
},{"../core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","../transitions/Transitionable":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js","../transitions/TransitionableTransform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/TransitionableTransform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/PhysicsEngine.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */
var EventHandler = require('../core/EventHandler');

/**
 * The Physics Engine is responsible for mediating Bodies and their
 * interaction with forces and constraints. The Physics Engine handles the
 * logic of adding and removing bodies, updating their state of the over
 * time.
 *
 * @class PhysicsEngine
 * @constructor
 * @param options {Object} options
 */
function PhysicsEngine(options) {
    this.options = Object.create(PhysicsEngine.DEFAULT_OPTIONS);
    if (options) this.setOptions(options);

    this._particles      = [];   //list of managed particles
    this._bodies         = [];   //list of managed bodies
    this._agents         = {};   //hash of managed agents
    this._forces         = [];   //list of IDs of agents that are forces
    this._constraints    = [];   //list of IDs of agents that are constraints

    this._buffer         = 0.0;
    this._prevTime       = now();
    this._isSleeping     = false;
    this._eventHandler   = null;
    this._currAgentId    = 0;
    this._hasBodies      = false;
}

var TIMESTEP = 17;
var MIN_TIME_STEP = 1000 / 120;
var MAX_TIME_STEP = 17;

/**
 * @property PhysicsEngine.DEFAULT_OPTIONS
 * @type Object
 * @protected
 * @static
 */
PhysicsEngine.DEFAULT_OPTIONS = {

    /**
     * The number of iterations the engine takes to resolve constraints
     * @attribute constraintSteps
     * @type Number
     */
    constraintSteps : 1,

    /**
     * The energy threshold before the Engine stops updating
     * @attribute sleepTolerance
     * @type Number
     */
    sleepTolerance  : 1e-7
};

var now = (function() {
    return Date.now;
})();

/**
 * Options setter
 * @method setOptions
 * @param options {Object}
 */
PhysicsEngine.prototype.setOptions = function setOptions(opts) {
    for (var key in opts) if (this.options[key]) this.options[key] = opts[key];
};

/**
 * Method to add a physics body to the engine. Necessary to update the
 * body over time.
 *
 * @method addBody
 * @param body {Body}
 * @return body {Body}
 */
PhysicsEngine.prototype.addBody = function addBody(body) {
    body._engine = this;
    if (body.isBody) {
        this._bodies.push(body);
        this._hasBodies = true;
    }
    else this._particles.push(body);
    return body;
};

/**
 * Remove a body from the engine. Detaches body from all forces and
 * constraints.
 *
 * @method removeBody
 * @param body {Body}
 */
PhysicsEngine.prototype.removeBody = function removeBody(body) {
    var array = (body.isBody) ? this._bodies : this._particles;
    var index = array.indexOf(body);
    if (index > -1) {
        for (var i = 0; i < Object.keys(this._agents).length; i++) this.detachFrom(i, body);
        array.splice(index,1);
    }
    if (this.getBodies().length === 0) this._hasBodies = false;
};

function _mapAgentArray(agent) {
    if (agent.applyForce)      return this._forces;
    if (agent.applyConstraint) return this._constraints;
}

function _attachOne(agent, targets, source) {
    if (targets === undefined) targets = this.getParticlesAndBodies();
    if (!(targets instanceof Array)) targets = [targets];

    this._agents[this._currAgentId] = {
        agent   : agent,
        targets : targets,
        source  : source
    };

    _mapAgentArray.call(this, agent).push(this._currAgentId);
    return this._currAgentId++;
}

/**
 * Attaches a force or constraint to a Body. Returns an AgentId of the
 * attached agent which can be used to detach the agent.
 *
 * @method attach
 * @param agent {Agent|Array.Agent} A force, constraint, or array of them.
 * @param [targets=All] {Body|Array.Body} The Body or Bodies affected by the agent
 * @param [source] {Body} The source of the agent
 * @return AgentId {Number}
 */
PhysicsEngine.prototype.attach = function attach(agents, targets, source) {
    if (agents instanceof Array) {
        var agentIDs = [];
        for (var i = 0; i < agents.length; i++)
            agentIDs[i] = _attachOne.call(this, agents[i], targets, source);
        return agentIDs;
    }
    else return _attachOne.call(this, agents, targets, source);
};

/**
 * Append a body to the targets of a previously defined physics agent.
 *
 * @method attachTo
 * @param agentID {AgentId} The agentId of a previously defined agent
 * @param target {Body} The Body affected by the agent
 */
PhysicsEngine.prototype.attachTo = function attachTo(agentID, target) {
    _getBoundAgent.call(this, agentID).targets.push(target);
};

/**
 * Undoes PhysicsEngine.attach. Removes an agent and its associated
 * effect on its affected Bodies.
 *
 * @method detach
 * @param agentID {AgentId} The agentId of a previously defined agent
 */
PhysicsEngine.prototype.detach = function detach(id) {
    // detach from forces/constraints array
    var agent = this.getAgent(id);
    var agentArray = _mapAgentArray.call(this, agent);
    var index = agentArray.indexOf(id);
    agentArray.splice(index,1);

    // detach agents array
    delete this._agents[id];
};

/**
 * Remove a single Body from a previously defined agent.
 *
 * @method detach
 * @param agentID {AgentId} The agentId of a previously defined agent
 * @param target {Body} The body to remove from the agent
 */
PhysicsEngine.prototype.detachFrom = function detachFrom(id, target) {
    var boundAgent = _getBoundAgent.call(this, id);
    if (boundAgent.source === target) this.detach(id);
    else {
        var targets = boundAgent.targets;
        var index = targets.indexOf(target);
        if (index > -1) targets.splice(index,1);
    }
};

/**
 * A convenience method to give the Physics Engine a clean slate of
 * agents. Preserves all added Body objects.
 *
 * @method detachAll
 */
PhysicsEngine.prototype.detachAll = function detachAll() {
    this._agents        = {};
    this._forces        = [];
    this._constraints   = [];
    this._currAgentId   = 0;
};

function _getBoundAgent(id) {
    return this._agents[id];
}

/**
 * Returns the corresponding agent given its agentId.
 *
 * @method getAgent
 * @param id {AgentId}
 */
PhysicsEngine.prototype.getAgent = function getAgent(id) {
    return _getBoundAgent.call(this, id).agent;
};

/**
 * Returns all particles that are currently managed by the Physics Engine.
 *
 * @method getParticles
 * @return particles {Array.Particles}
 */
PhysicsEngine.prototype.getParticles = function getParticles() {
    return this._particles;
};

/**
 * Returns all bodies, except particles, that are currently managed by the Physics Engine.
 *
 * @method getBodies
 * @return bodies {Array.Bodies}
 */
PhysicsEngine.prototype.getBodies = function getBodies() {
    return this._bodies;
};

/**
 * Returns all bodies that are currently managed by the Physics Engine.
 *
 * @method getBodies
 * @return bodies {Array.Bodies}
 */
PhysicsEngine.prototype.getParticlesAndBodies = function getParticlesAndBodies() {
    return this.getParticles().concat(this.getBodies());
};

/**
 * Iterates over every Particle and applies a function whose first
 * argument is the Particle
 *
 * @method forEachParticle
 * @param fn {Function} Function to iterate over
 * @param [dt] {Number} Delta time
 */
PhysicsEngine.prototype.forEachParticle = function forEachParticle(fn, dt) {
    var particles = this.getParticles();
    for (var index = 0, len = particles.length; index < len; index++)
        fn.call(this, particles[index], dt);
};

/**
 * Iterates over every Body that isn't a Particle and applies
 * a function whose first argument is the Body
 *
 * @method forEachBody
 * @param fn {Function} Function to iterate over
 * @param [dt] {Number} Delta time
 */
PhysicsEngine.prototype.forEachBody = function forEachBody(fn, dt) {
    if (!this._hasBodies) return;
    var bodies = this.getBodies();
    for (var index = 0, len = bodies.length; index < len; index++)
        fn.call(this, bodies[index], dt);
};

/**
 * Iterates over every Body and applies a function whose first
 * argument is the Body
 *
 * @method forEach
 * @param fn {Function} Function to iterate over
 * @param [dt] {Number} Delta time
 */
PhysicsEngine.prototype.forEach = function forEach(fn, dt) {
    this.forEachParticle(fn, dt);
    this.forEachBody(fn, dt);
};

function _updateForce(index) {
    var boundAgent = _getBoundAgent.call(this, this._forces[index]);
    boundAgent.agent.applyForce(boundAgent.targets, boundAgent.source);
}

function _updateForces() {
    for (var index = this._forces.length - 1; index > -1; index--)
        _updateForce.call(this, index);
}

function _updateConstraint(index, dt) {
    var boundAgent = this._agents[this._constraints[index]];
    return boundAgent.agent.applyConstraint(boundAgent.targets, boundAgent.source, dt);
}

function _updateConstraints(dt) {
    var iteration = 0;
    while (iteration < this.options.constraintSteps) {
        for (var index = this._constraints.length - 1; index > -1; index--)
            _updateConstraint.call(this, index, dt);
        iteration++;
    }
}

function _updateVelocities(particle, dt) {
    particle.integrateVelocity(dt);
}

function _updateAngularVelocities(body, dt) {
    body.integrateAngularMomentum(dt);
    body.updateAngularVelocity();
}

function _updateOrientations(body, dt) {
    body.integrateOrientation(dt);
}

function _updatePositions(particle, dt) {
    particle.integratePosition(dt);
    particle.emit('update', particle);
}

function _integrate(dt) {
    _updateForces.call(this, dt);
    this.forEach(_updateVelocities, dt);
    this.forEachBody(_updateAngularVelocities, dt);
    _updateConstraints.call(this, dt);
    this.forEachBody(_updateOrientations, dt);
    this.forEach(_updatePositions, dt);
}

function _getEnergyParticles() {
    var energy = 0.0;
    var particleEnergy = 0.0;
    this.forEach(function(particle) {
        particleEnergy = particle.getEnergy();
        energy += particleEnergy;
        if (particleEnergy < particle.sleepTolerance) particle.sleep();
    });
    return energy;
}

function _getEnergyForces() {
    var energy = 0;
    for (var index = this._forces.length - 1; index > -1; index--)
        energy += this._forces[index].getEnergy() || 0.0;
    return energy;
}

function _getEnergyConstraints() {
    var energy = 0;
    for (var index = this._constraints.length - 1; index > -1; index--)
        energy += this._constraints[index].getEnergy() || 0.0;
    return energy;
}

/**
 * Calculates the kinetic energy of all Body objects and potential energy
 * of all attached agents.
 *
 * TODO: implement.
 * @method getEnergy
 * @return energy {Number}
 */
PhysicsEngine.prototype.getEnergy = function getEnergy() {
    return _getEnergyParticles.call(this) + _getEnergyForces.call(this) + _getEnergyConstraints.call(this);
};

/**
 * Updates all Body objects managed by the physics engine over the
 * time duration since the last time step was called.
 *
 * @method step
 */
PhysicsEngine.prototype.step = function step() {
//        if (this.getEnergy() < this.options.sleepTolerance) {
//            this.sleep();
//            return;
//        };

    //set current frame's time
    var currTime = now();

    //milliseconds elapsed since last frame
    var dtFrame = currTime - this._prevTime;

    this._prevTime = currTime;

    if (dtFrame < MIN_TIME_STEP) return;
    if (dtFrame > MAX_TIME_STEP) dtFrame = MAX_TIME_STEP;

    //robust integration
//        this._buffer += dtFrame;
//        while (this._buffer > this._timestep){
//            _integrate.call(this, this._timestep);
//            this._buffer -= this._timestep;
//        };
//        _integrate.call(this, this._buffer);
//        this._buffer = 0.0;
    _integrate.call(this, TIMESTEP);

//        this.emit('update', this);
};

/**
 * Tells whether the Physics Engine is sleeping or awake.
 * @method isSleeping
 * @return {Boolean}
 */
PhysicsEngine.prototype.isSleeping = function isSleeping() {
    return this._isSleeping;
};

/**
 * Stops the Physics Engine from updating. Emits an 'end' event.
 * @method sleep
 */
PhysicsEngine.prototype.sleep = function sleep() {
    this.emit('end', this);
    this._isSleeping = true;
};

/**
 * Starts the Physics Engine from updating. Emits an 'start' event.
 * @method wake
 */
PhysicsEngine.prototype.wake = function wake() {
    this._prevTime = now();
    this.emit('start', this);
    this._isSleeping = false;
};

PhysicsEngine.prototype.emit = function emit(type, data) {
    if (this._eventHandler === null) return;
    this._eventHandler.emit(type, data);
};

PhysicsEngine.prototype.on = function on(event, fn) {
    if (this._eventHandler === null) this._eventHandler = new EventHandler();
    this._eventHandler.on(event, fn);
};

module.exports = PhysicsEngine;
},{"../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/bodies/Particle.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Vector = require('../../math/Vector');
var Transform = require('../../core/Transform');
var EventHandler = require('../../core/EventHandler');
var Integrator = require('../integrators/SymplecticEuler');

/**
 * A point body that is controlled by the Physics Engine. A particle has
 *   position and velocity states that are updated by the Physics Engine.
 *   Ultimately, a particle is a _special type of modifier, and can be added to
 *   the Famous render tree like any other modifier.
 *
 * @constructor
 * @class Particle
 * @uses EventHandler
 * @uses Modifier
 * @extensionfor Body
 * @param {Options} [options] An object of configurable options.
 * @param {Array} [options.position] The position of the particle.
 * @param {Array} [options.velocity] The velocity of the particle.
 * @param {Number} [options.mass] The mass of the particle.
 * @param {Hexadecimal} [options.axis] The axis a particle can move along. Can be bitwise ORed e.g., Particle.AXES.X, Particle.AXES.X | Particle.AXES.Y
 *
 */
 function Particle(options) {
    options = options || {};

    // registers
    this.position = new Vector();
    this.velocity = new Vector();
    this.force    = new Vector();

    var defaults  = Particle.DEFAULT_OPTIONS;

    // set vectors
    this.setPosition(options.position || defaults.position);
    this.setVelocity(options.velocity || defaults.velocity);
    this.force.set(options.force || [0,0,0]);

    // set scalars
    this.mass = (options.mass !== undefined)
        ? options.mass
        : defaults.mass;

    this.axis = (options.axis !== undefined)
        ? options.axis
        : defaults.axis;

    this.inverseMass = 1 / this.mass;

    // state variables
    this._isSleeping     = false;
    this._engine         = null;
    this._eventOutput    = null;
    this._positionGetter = null;

    this.transform = Transform.identity.slice();

    // cached _spec
    this._spec = {
        transform : this.transform,
        target    : null
    };
}

Particle.DEFAULT_OPTIONS = {
    position : [0,0,0],
    velocity : [0,0,0],
    mass : 1,
    axis : undefined
};

/**
 * Kinetic energy threshold needed to update the body
 *
 * @property SLEEP_TOLERANCE
 * @type Number
 * @static
 * @default 1e-7
 */
Particle.SLEEP_TOLERANCE = 1e-7;

/**
 * Axes by which a body can translate
 *
 * @property AXES
 * @type Hexadecimal
 * @static
 * @default 1e-7
 */
Particle.AXES = {
    X : 0x00, // hexadecimal for 0
    Y : 0x01, // hexadecimal for 1
    Z : 0x02  // hexadecimal for 2
};

// Integrator for updating the particle's state
// TODO: make this a singleton
Particle.INTEGRATOR = new Integrator();

//Catalogue of outputted events
var _events = {
    start  : 'start',
    update : 'update',
    end    : 'end'
};

// Cached timing function
var now = (function() {
    return Date.now;
})();

/**
 * Stops the particle from updating
 * @method sleep
 */
Particle.prototype.sleep = function sleep() {
    if (this._isSleeping) return;
    this.emit(_events.end, this);
    this._isSleeping = true;
};

/**
 * Starts the particle update
 * @method wake
 */
Particle.prototype.wake = function wake() {
    if (!this._isSleeping) return;
    this.emit(_events.start, this);
    this._isSleeping = false;
    this._prevTime = now();
};

/**
 * @attribute isBody
 * @type Boolean
 * @static
 */
Particle.prototype.isBody = false;

/**
 * Basic setter for position
 * @method getPosition
 * @param position {Array|Vector}
 */
Particle.prototype.setPosition = function setPosition(position) {
    this.position.set(position);
};

/**
 * 1-dimensional setter for position
 * @method setPosition1D
 * @param value {Number}
 */
Particle.prototype.setPosition1D = function setPosition1D(x) {
    this.position.x = x;
};

/**
 * Basic getter function for position
 * @method getPosition
 * @return position {Array}
 */
Particle.prototype.getPosition = function getPosition() {
    if (this._positionGetter instanceof Function)
        this.setPosition(this._positionGetter());

    this._engine.step();

    return this.position.get();
};

/**
 * 1-dimensional getter for position
 * @method getPosition1D
 * @return value {Number}
 */
Particle.prototype.getPosition1D = function getPosition1D() {
    this._engine.step();
    return this.position.x;
};

/**
 * Defines the position from outside the Physics Engine
 * @method positionFrom
 * @param positionGetter {Function}
 */
Particle.prototype.positionFrom = function positionFrom(positionGetter) {
    this._positionGetter = positionGetter;
};

/**
 * Basic setter function for velocity Vector
 * @method setVelocity
 * @function
 */
Particle.prototype.setVelocity = function setVelocity(velocity) {
    this.velocity.set(velocity);
    this.wake();
};

/**
 * 1-dimensional setter for velocity
 * @method setVelocity1D
 * @param velocity {Number}
 */
Particle.prototype.setVelocity1D = function setVelocity1D(x) {
    this.velocity.x = x;
    this.wake();
};

/**
 * Basic getter function for velocity Vector
 * @method getVelocity
 * @return velocity {Array}
 */
Particle.prototype.getVelocity = function getVelocity() {
    return this.velocity.get();
};

/**
 * 1-dimensional getter for velocity
 * @method getVelocity1D
 * @return velocity {Number}
 */
Particle.prototype.getVelocity1D = function getVelocity1D() {
    return this.velocity.x;
};

/**
 * Basic setter function for mass quantity
 * @method setMass
 * @param mass {Number} mass
 */
Particle.prototype.setMass = function setMass(mass) {
    this.mass = mass;
    this.inverseMass = 1 / mass;
};

/**
 * Basic getter function for mass quantity
 * @method getMass
 * @return mass {Number}
 */
Particle.prototype.getMass = function getMass() {
    return this.mass;
};

/**
 * Reset position and velocity
 * @method reset
 * @param position {Array|Vector}
 * @param velocity {Array|Vector}
 */
Particle.prototype.reset = function reset(position, velocity) {
    this.setPosition(position || [0,0,0]);
    this.setVelocity(velocity || [0,0,0]);
};

/**
 * Add force vector to existing internal force Vector
 * @method applyForce
 * @param force {Vector}
 */
Particle.prototype.applyForce = function applyForce(force) {
    if (force.isZero()) return;
    this.force.add(force).put(this.force);
    this.wake();
};

/**
 * Add impulse (change in velocity) Vector to this Vector's velocity.
 * @method applyImpulse
 * @param impulse {Vector}
 */
Particle.prototype.applyImpulse = function applyImpulse(impulse) {
    if (impulse.isZero()) return;
    var velocity = this.velocity;
    velocity.add(impulse.mult(this.inverseMass)).put(velocity);
};

/**
 * Update a particle's velocity from its force accumulator
 * @method integrateVelocity
 * @param dt {Number} Time differential
 */
Particle.prototype.integrateVelocity = function integrateVelocity(dt) {
    Particle.INTEGRATOR.integrateVelocity(this, dt);
};

/**
 * Update a particle's position from its velocity
 * @method integratePosition
 * @param dt {Number} Time differential
 */
Particle.prototype.integratePosition = function integratePosition(dt) {
    Particle.INTEGRATOR.integratePosition(this, dt);
};

/**
 * Update the position and velocity of the particle
 * @method _integrate
 * @protected
 * @param dt {Number} Time differential
 */
Particle.prototype._integrate = function _integrate(dt) {
    this.integrateVelocity(dt);
    this.integratePosition(dt);
};

/**
 * Get kinetic energy of the particle.
 * @method getEnergy
 * @function
 */
Particle.prototype.getEnergy = function getEnergy() {
    return 0.5 * this.mass * this.velocity.normSquared();
};

/**
 * Generate transform from the current position state
 * @method getTransform
 * @return Transform {Transform}
 */
Particle.prototype.getTransform = function getTransform() {
    this._engine.step();

    var position = this.position;
    var axis = this.axis;
    var transform = this.transform;

    if (axis !== undefined) {
        if (axis & ~Particle.AXES.X) {
            position.x = 0;
        }
        if (axis & ~Particle.AXES.Y) {
            position.y = 0;
        }
        if (axis & ~Particle.AXES.Z) {
            position.z = 0;
        }
    }

    transform[12] = position.x;
    transform[13] = position.y;
    transform[14] = position.z;

    return transform;
};

/**
 * The modify interface of a Modifier
 * @method modify
 * @param target {Spec}
 * @return Spec {Spec}
 */
Particle.prototype.modify = function modify(target) {
    var _spec = this._spec;
    _spec.transform = this.getTransform();
    _spec.target = target;
    return _spec;
};

// private
function _createEventOutput() {
    this._eventOutput = new EventHandler();
    this._eventOutput.bindThis(this);
    //overrides on/removeListener/pipe/unpipe methods
    EventHandler.setOutputHandler(this, this._eventOutput);
}

Particle.prototype.emit = function emit(type, data) {
    if (!this._eventOutput) return;
    this._eventOutput.emit(type, data);
};

Particle.prototype.on = function on() {
    _createEventOutput.call(this);
    return this.on.apply(this, arguments);
};
Particle.prototype.removeListener = function removeListener() {
    _createEventOutput.call(this);
    return this.removeListener.apply(this, arguments);
};
Particle.prototype.pipe = function pipe() {
    _createEventOutput.call(this);
    return this.pipe.apply(this, arguments);
};
Particle.prototype.unpipe = function unpipe() {
    _createEventOutput.call(this);
    return this.unpipe.apply(this, arguments);
};

module.exports = Particle;
},{"../../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","../../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","../../math/Vector":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/math/Vector.js","../integrators/SymplecticEuler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/integrators/SymplecticEuler.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Drag.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Force = require('./Force');

/**
 * Drag is a force that opposes velocity. Attach it to the physics engine
 * to slow down a physics body in motion.
 *
 * @class Drag
 * @constructor
 * @extends Force
 * @param {Object} options options to set on drag
 */
function Drag(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    if (options) this.setOptions(options);

    Force.call(this);
}

Drag.prototype = Object.create(Force.prototype);
Drag.prototype.constructor = Drag;

/**
 * @property Drag.FORCE_FUNCTIONS
 * @type Object
 * @protected
 * @static
 */
Drag.FORCE_FUNCTIONS = {

    /**
     * A drag force proportional to the velocity
     * @attribute LINEAR
     * @type Function
     * @param {Vector} velocity
     * @return {Vector} drag force
     */
    LINEAR : function(velocity) {
        return velocity;
    },

    /**
     * A drag force proportional to the square of the velocity
     * @attribute QUADRATIC
     * @type Function
     * @param {Vector} velocity
     * @return {Vector} drag force
     */
    QUADRATIC : function(velocity) {
        return velocity.mult(velocity.norm());
    }
};

/**
 * @property Drag.DEFAULT_OPTIONS
 * @type Object
 * @protected
 * @static
 */
Drag.DEFAULT_OPTIONS = {

    /**
     * The strength of the force
     *    Range : [0, 0.1]
     * @attribute strength
     * @type Number
     * @default 0.01
     */
    strength : 0.01,

    /**
     * The type of opposing force
     * @attribute forceFunction
     * @type Function
     */
    forceFunction : Drag.FORCE_FUNCTIONS.LINEAR
};

/**
 * Adds a drag force to a physics body's force accumulator.
 *
 * @method applyForce
 * @param targets {Array.Body} Array of bodies to apply drag force to.
 */
Drag.prototype.applyForce = function applyForce(targets) {
    var strength        = this.options.strength;
    var forceFunction   = this.options.forceFunction;
    var force           = this.force;
    for (var index = 0; index < targets.length; index++) {
        var particle = targets[index];
        forceFunction(particle.velocity).mult(-strength).put(force);
        particle.applyForce(force);
    }
};

/**
 * Basic options setter
 *
 * @method setOptions
 * @param {Objects} options
 */
Drag.prototype.setOptions = function setOptions(options) {
    for (var key in options) this.options[key] = options[key];
};

module.exports = Drag;
},{"./Force":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Force.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Force.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Vector = require('../../math/Vector');
var EventHandler = require('../../core/EventHandler');

/**
 * Force base class.
 *
 * @class Force
 * @uses EventHandler
 * @constructor
 */
function Force(force) {
    this.force = new Vector(force);
    this._energy = 0.0;
    this._eventOutput = null;
}

/**
 * Basic setter for options
 *
 * @method setOptions
 * @param options {Objects}
 */
Force.prototype.setOptions = function setOptions(options) {
    for (var key in options) this.options[key] = options[key];
};

/**
 * Adds a force to a physics body's force accumulator.
 *
 * @method applyForce
 * @param body {Body}
 */
Force.prototype.applyForce = function applyForce(body) {
    body.applyForce(this.force);
};

/**
 * Getter for a force's potential energy.
 *
 * @method getEnergy
 * @return energy {Number}
 */
Force.prototype.getEnergy = function getEnergy() {
    return this._energy;
};

/*
 * Setter for a force's potential energy.
 *
 * @method setEnergy
 * @param energy {Number}
 */
Force.prototype.setEnergy = function setEnergy(energy) {
    this._energy = energy;
};

function _createEventOutput() {
    this._eventOutput = new EventHandler();
    this._eventOutput.bindThis(this);
    EventHandler.setOutputHandler(this, this._eventOutput);
}

Force.prototype.on = function on() {
    _createEventOutput.call(this);
    return this.on.apply(this, arguments);
};
Force.prototype.addListener = function addListener() {
    _createEventOutput.call(this);
    return this.addListener.apply(this, arguments);
};
Force.prototype.pipe = function pipe() {
    _createEventOutput.call(this);
    return this.pipe.apply(this, arguments);
};
Force.prototype.removeListener = function removeListener() {
    return this.removeListener.apply(this, arguments);
};
Force.prototype.unpipe = function unpipe() {
    return this.unpipe.apply(this, arguments);
};

module.exports = Force;
},{"../../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","../../math/Vector":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/math/Vector.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Spring.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Force = require('./Force');
var Vector = require('../../math/Vector');

/**
 *  A force that moves a physics body to a location with a spring motion.
 *    The body can be moved to another physics body, or an anchor point.
 *
 *  @class Spring
 *  @constructor
 *  @extends Force
 *  @param {Object} options options to set on drag
 */
function Spring(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    if (options) this.setOptions(options);

    //registers
    this.disp = new Vector(0,0,0);

    _init.call(this);
    Force.call(this);
}

Spring.prototype = Object.create(Force.prototype);
Spring.prototype.constructor = Spring;

/** @const */ var pi = Math.PI;

/**
 * @property Spring.FORCE_FUNCTIONS
 * @type Object
 * @protected
 * @static
 */
Spring.FORCE_FUNCTIONS = {

    /**
     * A FENE (Finitely Extensible Nonlinear Elastic) spring force
     *      see: http://en.wikipedia.org/wiki/FENE
     * @attribute FENE
     * @type Function
     * @param {Number} dist current distance target is from source body
     * @param {Number} rMax maximum range of influence
     * @return {Number} unscaled force
     */
    FENE : function(dist, rMax) {
        var rMaxSmall = rMax * .99;
        var r = Math.max(Math.min(dist, rMaxSmall), -rMaxSmall);
        return r / (1 - r * r/(rMax * rMax));
    },

    /**
     * A Hookean spring force, linear in the displacement
     *      see: http://en.wikipedia.org/wiki/FENE
     * @attribute FENE
     * @type Function
     * @param {Number} dist current distance target is from source body
     * @return {Number} unscaled force
     */
    HOOK : function(dist) {
        return dist;
    }
};

/**
 * @property Spring.DEFAULT_OPTIONS
 * @type Object
 * @protected
 * @static
 */
Spring.DEFAULT_OPTIONS = {

    /**
     * The amount of time in milliseconds taken for one complete oscillation
     * when there is no damping
     *    Range : [150, Infinity]
     * @attribute period
     * @type Number
     * @default 300
     */
    period        : 300,

    /**
     * The damping of the spring.
     *    Range : [0, 1]
     *    0 = no damping, and the spring will oscillate forever
     *    1 = critically damped (the spring will never oscillate)
     * @attribute dampingRatio
     * @type Number
     * @default 0.1
     */
    dampingRatio : 0.1,

    /**
     * The rest length of the spring
     *    Range : [0, Infinity]
     * @attribute length
     * @type Number
     * @default 0
     */
    length : 0,

    /**
     * The maximum length of the spring (for a FENE spring)
     *    Range : [0, Infinity]
     * @attribute length
     * @type Number
     * @default Infinity
     */
    maxLength : Infinity,

    /**
     * The location of the spring's anchor, if not another physics body
     *
     * @attribute anchor
     * @type Array
     * @optional
     */
    anchor : undefined,

    /**
     * The type of spring force
     * @attribute forceFunction
     * @type Function
     */
    forceFunction : Spring.FORCE_FUNCTIONS.HOOK
};

function _setForceFunction(fn) {
    this.forceFunction = fn;
}

function _calcStiffness() {
    var options = this.options;
    options.stiffness = Math.pow(2 * pi / options.period, 2);
}

function _calcDamping() {
    var options = this.options;
    options.damping = 4 * pi * options.dampingRatio / options.period;
}

function _calcEnergy(strength, dist) {
    return 0.5 * strength * dist * dist;
}

function _init() {
    _setForceFunction.call(this, this.options.forceFunction);
    _calcStiffness.call(this);
    _calcDamping.call(this);
}

/**
 * Basic options setter
 *
 * @method setOptions
 * @param options {Objects}
 */
Spring.prototype.setOptions = function setOptions(options) {
    if (options.anchor !== undefined) {
        if (options.anchor.position instanceof Vector) this.options.anchor = options.anchor.position;
        if (options.anchor   instanceof Vector)  this.options.anchor = options.anchor;
        if (options.anchor   instanceof Array)  this.options.anchor = new Vector(options.anchor);
    }
    if (options.period !== undefined) this.options.period = options.period;
    if (options.dampingRatio !== undefined) this.options.dampingRatio = options.dampingRatio;
    if (options.length !== undefined) this.options.length = options.length;
    if (options.forceFunction !== undefined) this.options.forceFunction = options.forceFunction;
    if (options.maxLength !== undefined) this.options.maxLength = options.maxLength;

    _init.call(this);
};

/**
 * Adds a spring force to a physics body's force accumulator.
 *
 * @method applyForce
 * @param targets {Array.Body} Array of bodies to apply force to.
 */
Spring.prototype.applyForce = function applyForce(targets, source) {
    var force        = this.force;
    var disp         = this.disp;
    var options      = this.options;

    var stiffness    = options.stiffness;
    var damping      = options.damping;
    var restLength   = options.length;
    var lMax         = options.maxLength;
    var anchor       = options.anchor || source.position;

    for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var p2 = target.position;
        var v2 = target.velocity;

        anchor.sub(p2).put(disp);
        var dist = disp.norm() - restLength;

        if (dist === 0) return;

        //if dampingRatio specified, then override strength and damping
        var m      = target.mass;
        stiffness *= m;
        damping   *= m;

        disp.normalize(stiffness * this.forceFunction(dist, lMax))
            .put(force);

        if (damping)
            if (source) force.add(v2.sub(source.velocity).mult(-damping)).put(force);
            else force.add(v2.mult(-damping)).put(force);

        target.applyForce(force);
        if (source) source.applyForce(force.mult(-1));

        this.setEnergy(_calcEnergy(stiffness, dist));
    }
};

/**
 * Calculates the potential energy of the spring.
 *
 * @method getEnergy
 * @param target {Body}     The physics body attached to the spring
 * @return energy {Number}
 */
Spring.prototype.getEnergy = function getEnergy(target) {
    var options        = this.options;
    var restLength  = options.length;
    var anchor      = options.anchor;
    var strength    = options.stiffness;

    var dist = anchor.sub(target.position).norm() - restLength;
    return 0.5 * strength * dist * dist;
};

/**
 * Sets the anchor to a new position
 *
 * @method setAnchor
 * @param anchor {Array}    New anchor of the spring
 */
Spring.prototype.setAnchor = function setAnchor(anchor) {
    if (!this.options.anchor) this.options.anchor = new Vector();
    this.options.anchor.set(anchor);
};

module.exports = Spring;
},{"../../math/Vector":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/math/Vector.js","./Force":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Force.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/integrators/SymplecticEuler.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var OptionsManager = require('../../core/OptionsManager');

/**
 * Ordinary Differential Equation (ODE) Integrator.
 * Manages updating a physics body's state over time.
 *
 *  p = position, v = velocity, m = mass, f = force, dt = change in time
 *
 *      v <- v + dt * f / m
 *      p <- p + dt * v
 *
 *  q = orientation, w = angular velocity, L = angular momentum
 *
 *      L <- L + dt * t
 *      q <- q + dt/2 * q * w
 *
 * @class SymplecticEuler
 * @constructor
 * @param {Object} options Options to set
 */
function SymplecticEuler(options) {
    this.options = Object.create(SymplecticEuler.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);

    if (options) this.setOptions(options);
}

/**
 * @property SymplecticEuler.DEFAULT_OPTIONS
 * @type Object
 * @protected
 * @static
 */
SymplecticEuler.DEFAULT_OPTIONS = {

    /**
     * The maximum velocity of a physics body
     *      Range : [0, Infinity]
     * @attribute velocityCap
     * @type Number
     */

    velocityCap : undefined,

    /**
     * The maximum angular velocity of a physics body
     *      Range : [0, Infinity]
     * @attribute angularVelocityCap
     * @type Number
     */
    angularVelocityCap : undefined
};

/*
 * Setter for options
 *
 * @method setOptions
 * @param {Object} options
 */
SymplecticEuler.prototype.setOptions = function setOptions(options) {
    this._optionsManager.patch(options);
};

/*
 * Getter for options
 *
 * @method getOptions
 * @return {Object} options
 */
SymplecticEuler.prototype.getOptions = function getOptions() {
    return this._optionsManager.value();
};

/*
 * Updates the velocity of a physics body from its accumulated force.
 *      v <- v + dt * f / m
 *
 * @method integrateVelocity
 * @param {Body} physics body
 * @param {Number} dt delta time
 */
SymplecticEuler.prototype.integrateVelocity = function integrateVelocity(body, dt) {
    var v = body.velocity;
    var w = body.inverseMass;
    var f = body.force;

    if (f.isZero()) return;

    v.add(f.mult(dt * w)).put(v);
    f.clear();
};

/*
 * Updates the position of a physics body from its velocity.
 *      p <- p + dt * v
 *
 * @method integratePosition
 * @param {Body} physics body
 * @param {Number} dt delta time
 */
SymplecticEuler.prototype.integratePosition = function integratePosition(body, dt) {
    var p = body.position;
    var v = body.velocity;

    if (this.options.velocityCap) v.cap(this.options.velocityCap).put(v);
    p.add(v.mult(dt)).put(p);
};

/*
 * Updates the angular momentum of a physics body from its accumuled torque.
 *      L <- L + dt * t
 *
 * @method integrateAngularMomentum
 * @param {Body} physics body (except a particle)
 * @param {Number} dt delta time
 */
SymplecticEuler.prototype.integrateAngularMomentum = function integrateAngularMomentum(body, dt) {
    var L = body.angularMomentum;
    var t = body.torque;

    if (t.isZero()) return;

    if (this.options.angularVelocityCap) t.cap(this.options.angularVelocityCap).put(t);
    L.add(t.mult(dt)).put(L);
    t.clear();
};

/*
 * Updates the orientation of a physics body from its angular velocity.
 *      q <- q + dt/2 * q * w
 *
 * @method integrateOrientation
 * @param {Body} physics body (except a particle)
 * @param {Number} dt delta time
 */
SymplecticEuler.prototype.integrateOrientation = function integrateOrientation(body, dt) {
    var q = body.orientation;
    var w = body.angularVelocity;

    if (w.isZero()) return;
    q.add(q.multiply(w).scalarMultiply(0.5 * dt)).put(q);
//        q.normalize.put(q);
};

module.exports = SymplecticEuler;
},{"../../core/OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/ImageSurface.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Surface = require('../core/Surface');

/**
 * A surface containing image content.
 *   This extends the Surface class.
 *
 * @class ImageSurface
 *
 * @extends Surface
 * @constructor
 * @param {Object} [options] overrides of default options
 */
function ImageSurface(options) {
    this._imageUrl = undefined;
    Surface.apply(this, arguments);
}

ImageSurface.prototype = Object.create(Surface.prototype);
ImageSurface.prototype.constructor = ImageSurface;
ImageSurface.prototype.elementType = 'img';
ImageSurface.prototype.elementClass = 'famous-surface';

/**
 * Set content URL.  This will cause a re-rendering.
 * @method setContent
 * @param {string} imageUrl
 */
ImageSurface.prototype.setContent = function setContent(imageUrl) {
    this._imageUrl = imageUrl;
    this._contentDirty = true;
};

/**
 * Place the document element that this component manages into the document.
 *
 * @private
 * @method deploy
 * @param {Node} target document parent of this container
 */
ImageSurface.prototype.deploy = function deploy(target) {
    target.src = this._imageUrl || '';
};

/**
 * Remove this component and contained content from the document
 *
 * @private
 * @method recall
 *
 * @param {Node} target node to which the component was deployed
 */
ImageSurface.prototype.recall = function recall(target) {
    target.src = '';
};

module.exports = ImageSurface;
},{"../core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/surfaces/InputSurface.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Surface = require('../core/Surface');

/**
 * A Famo.us surface in the form of an HTML input element.
 *   This extends the Surface class.
 *
 * @class InputSurface
 * @extends Surface
 * @constructor
 * @param {Object} [options] overrides of default options
 * @param {string} [options.placeholder] placeholder text hint that describes the expected value of an <input> element
 * @param {string} [options.type] specifies the type of element to display (e.g. 'datetime', 'text', 'button', etc.)
 * @param {string} [options.value] value of text
 */
function InputSurface(options) {
    this._placeholder = options.placeholder || '';
    this._value       = options.value || '';
    this._type        = options.type || 'text';
    this._name        = options.name || '';

    Surface.apply(this, arguments);

    this.on('click', this.focus.bind(this));
    window.addEventListener('click', function(event) {
        if (event.target !== this._currTarget) this.blur();
    }.bind(this));
}
InputSurface.prototype = Object.create(Surface.prototype);
InputSurface.prototype.constructor = InputSurface;

InputSurface.prototype.elementType = 'input';
InputSurface.prototype.elementClass = 'famous-surface';

/**
 * Set placeholder text.  Note: Triggers a repaint.
 *
 * @method setPlaceholder
 * @param {string} str Value to set the placeholder to.
 * @return {InputSurface} this, allowing method chaining.
 */
InputSurface.prototype.setPlaceholder = function setPlaceholder(str) {
    this._placeholder = str;
    this._contentDirty = true;
    return this;
};

/**
 * Focus on the current input, pulling up the keyboard on mobile.
 *
 * @method focus
 * @return {InputSurface} this, allowing method chaining.
 */
InputSurface.prototype.focus = function focus() {
    if (this._currTarget) this._currTarget.focus();
    return this;
};

/**
 * Blur the current input, hiding the keyboard on mobile.
 *
 * @method blur
 * @return {InputSurface} this, allowing method chaining.
 */
InputSurface.prototype.blur = function blur() {
    if (this._currTarget) this._currTarget.blur();
    return this;
};

/**
 * Set the placeholder conent.
 *   Note: Triggers a repaint next tick.
 *
 * @method setValue
 * @param {string} str Value to set the main input value to.
 * @return {InputSurface} this, allowing method chaining.
 */
InputSurface.prototype.setValue = function setValue(str) {
    this._value = str;
    this._contentDirty = true;
    return this;
};

/**
 * Set the type of element to display conent.
 *   Note: Triggers a repaint next tick.
 *
 * @method setType
 * @param {string} str type of the input surface (e.g. 'button', 'text')
 * @return {InputSurface} this, allowing method chaining.
 */
InputSurface.prototype.setType = function setType(str) {
    this._type = str;
    this._contentDirty = true;
    return this;
};

/**
 * Get the value of the inner content of the element (e.g. the entered text)
 *
 * @method getValue
 * @return {string} value of element
 */
InputSurface.prototype.getValue = function getValue() {
    if (this._currTarget) {
        return this._currTarget.value;
    }
    else {
        return this._value;
    }
};

/**
 * Set the name attribute of the element.
 *   Note: Triggers a repaint next tick.
 *
 * @method setName
 * @param {string} str element name
 * @return {InputSurface} this, allowing method chaining.
 */
InputSurface.prototype.setName = function setName(str) {
    this._name = str;
    this._contentDirty = true;
    return this;
};

/**
 * Get the name attribute of the element.
 *
 * @method getName
 * @return {string} name of element
 */
InputSurface.prototype.getName = function getName() {
    return this._name;
};

/**
 * Place the document element this component manages into the document.
 *
 * @private
 * @method deploy
 * @param {Node} target document parent of this container
 */
InputSurface.prototype.deploy = function deploy(target) {
    if (this._placeholder !== '') target.placeholder = this._placeholder;
    target.value = this._value;
    target.type = this._type;
    target.name = this._name;
};

module.exports = InputSurface;
},{"../core/Surface":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Surface.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/MultipleTransition.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Utility = require('../utilities/Utility');

/**
 * Transition meta-method to support transitioning multiple
 *   values with scalar-only methods.
 *
 *
 * @class MultipleTransition
 * @constructor
 *
 * @param {Object} method Transionable class to multiplex
 */
function MultipleTransition(method) {
    this.method = method;
    this._instances = [];
    this.state = [];
}

MultipleTransition.SUPPORTS_MULTIPLE = true;

/**
 * Get the state of each transition.
 *
 * @method get
 *
 * @return state {Number|Array} state array
 */
MultipleTransition.prototype.get = function get() {
    for (var i = 0; i < this._instances.length; i++) {
        this.state[i] = this._instances[i].get();
    }
    return this.state;
};

/**
 * Set the end states with a shared transition, with optional callback.
 *
 * @method set
 *
 * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
 * @param {Object} transition Transition definition, shared among all instances
 * @param {Function} callback called when all endStates have been reached.
 */
MultipleTransition.prototype.set = function set(endState, transition, callback) {
    var _allCallback = Utility.after(endState.length, callback);
    for (var i = 0; i < endState.length; i++) {
        if (!this._instances[i]) this._instances[i] = new (this.method)();
        this._instances[i].set(endState[i], transition, _allCallback);
    }
};

/**
 * Reset all transitions to start state.
 *
 * @method reset
 *
 * @param  {Number|Array} startState Start state
 */
MultipleTransition.prototype.reset = function reset(startState) {
    for (var i = 0; i < startState.length; i++) {
        if (!this._instances[i]) this._instances[i] = new (this.method)();
        this._instances[i].reset(startState[i]);
    }
};

module.exports = MultipleTransition;
},{"../utilities/Utility":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/utilities/Utility.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var MultipleTransition = require('./MultipleTransition');
var TweenTransition = require('./TweenTransition');

/**
 * A state maintainer for a smooth transition between
 *    numerically-specified states. Example numeric states include floats or
 *    Transform objects.
 *
 * An initial state is set with the constructor or set(startState). A
 *    corresponding end state and transition are set with set(endState,
 *    transition). Subsequent calls to set(endState, transition) begin at
 *    the last state. Calls to get(timestamp) provide the interpolated state
 *    along the way.
 *
 * Note that there is no event loop here - calls to get() are the only way
 *    to find state projected to the current (or provided) time and are
 *    the only way to trigger callbacks. Usually this kind of object would
 *    be part of the render() path of a visible component.
 *
 * @class Transitionable
 * @constructor
 * @param {number|Array.Number|Object.<number|string, number>} start
 *    beginning state
 */
function Transitionable(start) {
    this.currentAction = null;
    this.actionQueue = [];
    this.callbackQueue = [];

    this.state = 0;
    this.velocity = undefined;
    this._callback = undefined;
    this._engineInstance = null;
    this._currentMethod = null;

    this.set(start);
}

var transitionMethods = {};

Transitionable.registerMethod = function registerMethod(name, engineClass) {
    if (!(name in transitionMethods)) {
        transitionMethods[name] = engineClass;
        return true;
    }
    else return false;
};

Transitionable.unregisterMethod = function unregisterMethod(name) {
    if (name in transitionMethods) {
        delete transitionMethods[name];
        return true;
    }
    else return false;
};

function _loadNext() {
    if (this._callback) {
        var callback = this._callback;
        this._callback = undefined;
        callback();
    }
    if (this.actionQueue.length <= 0) {
        this.set(this.get()); // no update required
        return;
    }
    this.currentAction = this.actionQueue.shift();
    this._callback = this.callbackQueue.shift();

    var method = null;
    var endValue = this.currentAction[0];
    var transition = this.currentAction[1];
    if (transition instanceof Object && transition.method) {
        method = transition.method;
        if (typeof method === 'string') method = transitionMethods[method];
    }
    else {
        method = TweenTransition;
    }

    if (this._currentMethod !== method) {
        if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
            this._engineInstance = new method();
        }
        else {
            this._engineInstance = new MultipleTransition(method);
        }
        this._currentMethod = method;
    }

    this._engineInstance.reset(this.state, this.velocity);
    if (this.velocity !== undefined) transition.velocity = this.velocity;
    this._engineInstance.set(endValue, transition, _loadNext.bind(this));
}

/**
 * Add transition to end state to the queue of pending transitions. Special
 *    Use: calling without a transition resets the object to that state with
 *    no pending actions
 *
 * @method set
 *
 * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
 *    end state to which we interpolate
 * @param {transition=} transition object of type {duration: number, curve:
 *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
 *    instantaneous.
 * @param {function()=} callback Zero-argument function to call on observed
 *    completion (t=1)
 */
Transitionable.prototype.set = function set(endState, transition, callback) {
    if (!transition) {
        this.reset(endState);
        if (callback) callback();
        return this;
    }

    var action = [endState, transition];
    this.actionQueue.push(action);
    this.callbackQueue.push(callback);
    if (!this.currentAction) _loadNext.call(this);
    return this;
};

/**
 * Cancel all transitions and reset to a stable state
 *
 * @method reset
 *
 * @param {number|Array.Number|Object.<number, number>} startState
 *    stable state to set to
 */
Transitionable.prototype.reset = function reset(startState, startVelocity) {
    this._currentMethod = null;
    this._engineInstance = null;
    this._callback = undefined;
    this.state = startState;
    this.velocity = startVelocity;
    this.currentAction = null;
    this.actionQueue = [];
    this.callbackQueue = [];
};

/**
 * Add delay action to the pending action queue queue.
 *
 * @method delay
 *
 * @param {number} duration delay time (ms)
 * @param {function} callback Zero-argument function to call on observed
 *    completion (t=1)
 */
Transitionable.prototype.delay = function delay(duration, callback) {
    this.set(this.get(), {duration: duration,
        curve: function() {
            return 0;
        }},
        callback
    );
};

/**
 * Get interpolated state of current action at provided time. If the last
 *    action has completed, invoke its callback.
 *
 * @method get
 *
 * @param {number=} timestamp Evaluate the curve at a normalized version of this
 *    time. If omitted, use current time. (Unix epoch time)
 * @return {number|Object.<number|string, number>} beginning state
 *    interpolated to this point in time.
 */
Transitionable.prototype.get = function get(timestamp) {
    if (this._engineInstance) {
        if (this._engineInstance.getVelocity)
            this.velocity = this._engineInstance.getVelocity();
        this.state = this._engineInstance.get(timestamp);
    }
    return this.state;
};

/**
 * Is there at least one action pending completion?
 *
 * @method isActive
 *
 * @return {boolean}
 */
Transitionable.prototype.isActive = function isActive() {
    return !!this.currentAction;
};

/**
 * Halt transition at current state and erase all pending actions.
 *
 * @method halt
 */
Transitionable.prototype.halt = function halt() {
    this.set(this.get());
};

module.exports = Transitionable;
},{"./MultipleTransition":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/MultipleTransition.js","./TweenTransition":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/TweenTransition.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/TransitionableTransform.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Transitionable = require('./Transitionable');
var Transform = require('../core/Transform');
var Utility = require('../utilities/Utility');

/**
 * A class for transitioning the state of a Transform by transitioning
 * its translate, scale, skew and rotate components independently.
 *
 * @class TransitionableTransform
 * @constructor
 *
 * @param [transform=Transform.identity] {Transform} The initial transform state
 */
function TransitionableTransform(transform) {
    this._final = Transform.identity.slice();
    this.translate = new Transitionable([0, 0, 0]);
    this.rotate = new Transitionable([0, 0, 0]);
    this.skew = new Transitionable([0, 0, 0]);
    this.scale = new Transitionable([1, 1, 1]);

    if (transform) this.set(transform);
}

function _build() {
    return Transform.build({
        translate: this.translate.get(),
        rotate: this.rotate.get(),
        skew: this.skew.get(),
        scale: this.scale.get()
    });
}

/**
 * An optimized way of setting only the translation component of a Transform
 *
 * @method setTranslate
 * @chainable
 *
 * @param translate {Array}     New translation state
 * @param [transition] {Object} Transition definition
 * @param [callback] {Function} Callback
 * @return {TransitionableTransform}
 */
TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
    this.translate.set(translate, transition, callback);
    this._final = this._final.slice();
    this._final[12] = translate[0];
    this._final[13] = translate[1];
    if (translate[2] !== undefined) this._final[14] = translate[2];
    return this;
};

/**
 * An optimized way of setting only the scale component of a Transform
 *
 * @method setScale
 * @chainable
 *
 * @param scale {Array}         New scale state
 * @param [transition] {Object} Transition definition
 * @param [callback] {Function} Callback
 * @return {TransitionableTransform}
 */
TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
    this.scale.set(scale, transition, callback);
    this._final = this._final.slice();
    this._final[0] = scale[0];
    this._final[5] = scale[1];
    if (scale[2] !== undefined) this._final[10] = scale[2];
    return this;
};

/**
 * An optimized way of setting only the rotational component of a Transform
 *
 * @method setRotate
 * @chainable
 *
 * @param eulerAngles {Array}   Euler angles for new rotation state
 * @param [transition] {Object} Transition definition
 * @param [callback] {Function} Callback
 * @return {TransitionableTransform}
 */
TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
    this.rotate.set(eulerAngles, transition, callback);
    this._final = _build.call(this);
    this._final = Transform.build({
        translate: this.translate.get(),
        rotate: eulerAngles,
        scale: this.scale.get(),
        skew: this.skew.get()
    });
    return this;
};

/**
 * An optimized way of setting only the skew component of a Transform
 *
 * @method setSkew
 * @chainable
 *
 * @param skewAngles {Array}    New skew state
 * @param [transition] {Object} Transition definition
 * @param [callback] {Function} Callback
 * @return {TransitionableTransform}
 */
TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
    this.skew.set(skewAngles, transition, callback);
    this._final = Transform.build({
        translate: this.translate.get(),
        rotate: this.rotate.get(),
        scale: this.scale.get(),
        skew: skewAngles
    });
    return this;
};

/**
 * Setter for a TransitionableTransform with optional parameters to transition
 * between Transforms
 *
 * @method set
 * @chainable
 *
 * @param transform {Array}     New transform state
 * @param [transition] {Object} Transition definition
 * @param [callback] {Function} Callback
 * @return {TransitionableTransform}
 */
TransitionableTransform.prototype.set = function set(transform, transition, callback) {
    this._final = transform;
    var components = Transform.interpret(transform);

    var _callback = callback ? Utility.after(4, callback) : null;
    this.translate.set(components.translate, transition, _callback);
    this.rotate.set(components.rotate, transition, _callback);
    this.skew.set(components.skew, transition, _callback);
    this.scale.set(components.scale, transition, _callback);
    return this;
};

/**
 * Sets the default transition to use for transitioning betwen Transform states
 *
 * @method setDefaultTransition
 *
 * @param transition {Object} Transition definition
 */
TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
    this.translate.setDefault(transition);
    this.rotate.setDefault(transition);
    this.skew.setDefault(transition);
    this.scale.setDefault(transition);
};

/**
 * Getter. Returns the current state of the Transform
 *
 * @method get
 *
 * @return {Transform}
 */
TransitionableTransform.prototype.get = function get() {
    if (this.isActive()) {
        return _build.call(this);
    }
    else return this._final;
};

/**
 * Get the destination state of the Transform
 *
 * @method getFinal
 *
 * @return Transform {Transform}
 */
TransitionableTransform.prototype.getFinal = function getFinal() {
    return this._final;
};

/**
 * Determine if the TransitionalTransform is currently transitioning
 *
 * @method isActive
 *
 * @return {Boolean}
 */
TransitionableTransform.prototype.isActive = function isActive() {
    return this.translate.isActive() || this.rotate.isActive() || this.scale.isActive() || this.skew.isActive();
};

/**
 * Halts the transition
 *
 * @method halt
 */
TransitionableTransform.prototype.halt = function halt() {
    this._final = this.get();
    this.translate.halt();
    this.rotate.halt();
    this.skew.halt();
    this.scale.halt();
};

module.exports = TransitionableTransform;
},{"../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","../utilities/Utility":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/utilities/Utility.js","./Transitionable":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/TweenTransition.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */




/**
 *
 * A state maintainer for a smooth transition between
 *    numerically-specified states.  Example numeric states include floats or
 *    Transfornm objects.
 *
 *    An initial state is set with the constructor or set(startValue). A
 *    corresponding end state and transition are set with set(endValue,
 *    transition). Subsequent calls to set(endValue, transition) begin at
 *    the last state. Calls to get(timestamp) provide the _interpolated state
 *    along the way.
 *
 *   Note that there is no event loop here - calls to get() are the only way
 *    to find out state projected to the current (or provided) time and are
 *    the only way to trigger callbacks. Usually this kind of object would
 *    be part of the render() path of a visible component.
 *
 * @class TweenTransition
 * @constructor
 *
 * @param {Object} options TODO
 *    beginning state
 */
function TweenTransition(options) {
    this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
    if (options) this.setOptions(options);

    this._startTime = 0;
    this._startValue = 0;
    this._updateTime = 0;
    this._endValue = 0;
    this._curve = undefined;
    this._duration = 0;
    this._active = false;
    this._callback = undefined;
    this.state = 0;
    this.velocity = undefined;
}

/**
 * Transition curves mapping independent variable t from domain [0,1] to a
 *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
 *    'easeInOut', 'easeOutBounce', 'spring'.
 *
 * @property {object} Curve
 * @final
 */
TweenTransition.Curves = {
    linear: function(t) {
        return t;
    },
    easeIn: function(t) {
        return t*t;
    },
    easeOut: function(t) {
        return t*(2-t);
    },
    easeInOut: function(t) {
        if (t <= 0.5) return 2*t*t;
        else return -2*t*t + 4*t - 1;
    },
    easeOutBounce: function(t) {
        return t*(3 - 2*t);
    },
    spring: function(t) {
        return (1 - t) * Math.sin(6 * Math.PI * t) + t;
    }
};

TweenTransition.SUPPORTS_MULTIPLE = true;
TweenTransition.DEFAULT_OPTIONS = {
    curve: TweenTransition.Curves.linear,
    duration: 500,
    speed: 0 /* considered only if positive */
};

var registeredCurves = {};

/**
 * Add "unit" curve to internal dictionary of registered curves.
 *
 * @method registerCurve
 *
 * @static
 *
 * @param {string} curveName dictionary key
 * @param {unitCurve} curve function of one numeric variable mapping [0,1]
 *    to range inside [0,1]
 * @return {boolean} false if key is taken, else true
 */
TweenTransition.registerCurve = function registerCurve(curveName, curve) {
    if (!registeredCurves[curveName]) {
        registeredCurves[curveName] = curve;
        return true;
    }
    else {
        return false;
    }
};

/**
 * Remove object with key "curveName" from internal dictionary of registered
 *    curves.
 *
 * @method unregisterCurve
 *
 * @static
 *
 * @param {string} curveName dictionary key
 * @return {boolean} false if key has no dictionary value
 */
TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
    if (registeredCurves[curveName]) {
        delete registeredCurves[curveName];
        return true;
    }
    else {
        return false;
    }
};

/**
 * Retrieve function with key "curveName" from internal dictionary of
 *    registered curves. Default curves are defined in the
 *    TweenTransition.Curves array, where the values represent
 *    unitCurve functions.
 *
 * @method getCurve
 *
 * @static
 *
 * @param {string} curveName dictionary key
 * @return {unitCurve} curve function of one numeric variable mapping [0,1]
 *    to range inside [0,1]
 */
TweenTransition.getCurve = function getCurve(curveName) {
    var curve = registeredCurves[curveName];
    if (curve !== undefined) return curve;
    else throw new Error('curve not registered');
};

/**
 * Retrieve all available curves.
 *
 * @method getCurves
 *
 * @static
 *
 * @return {object} curve functions of one numeric variable mapping [0,1]
 *    to range inside [0,1]
 */
TweenTransition.getCurves = function getCurves() {
    return registeredCurves;
};

 // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
function _interpolate(a, b, t) {
    return ((1 - t) * a) + (t * b);
}

function _clone(obj) {
    if (obj instanceof Object) {
        if (obj instanceof Array) return obj.slice(0);
        else return Object.create(obj);
    }
    else return obj;
}

// Fill in missing properties in "transition" with those in defaultTransition, and
//   convert internal named curve to function object, returning as new
//   object.
function _normalize(transition, defaultTransition) {
    var result = {curve: defaultTransition.curve};
    if (defaultTransition.duration) result.duration = defaultTransition.duration;
    if (defaultTransition.speed) result.speed = defaultTransition.speed;
    if (transition instanceof Object) {
        if (transition.duration !== undefined) result.duration = transition.duration;
        if (transition.curve) result.curve = transition.curve;
        if (transition.speed) result.speed = transition.speed;
    }
    if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
    return result;
}

/**
 * Set internal options, overriding any default options.
 *
 * @method setOptions
 *
 *
 * @param {Object} options options object
 * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
 * @param {Number} [options.duration] duration in ms
 * @param {Number} [options.speed] speed in pixels per ms
 */
TweenTransition.prototype.setOptions = function setOptions(options) {
    if (options.curve !== undefined) this.options.curve = options.curve;
    if (options.duration !== undefined) this.options.duration = options.duration;
    if (options.speed !== undefined) this.options.speed = options.speed;
};

/**
 * Add transition to end state to the queue of pending transitions. Special
 *    Use: calling without a transition resets the object to that state with
 *    no pending actions
 *
 * @method set
 *
 *
 * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
 *    end state to which we _interpolate
 * @param {transition=} transition object of type {duration: number, curve:
 *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
 *    instantaneous.
 * @param {function()=} callback Zero-argument function to call on observed
 *    completion (t=1)
 */
TweenTransition.prototype.set = function set(endValue, transition, callback) {
    if (!transition) {
        this.reset(endValue);
        if (callback) callback();
        return;
    }

    this._startValue = _clone(this.get());
    transition = _normalize(transition, this.options);
    if (transition.speed) {
        var startValue = this._startValue;
        if (startValue instanceof Object) {
            var variance = 0;
            for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
            transition.duration = Math.sqrt(variance) / transition.speed;
        }
        else {
            transition.duration = Math.abs(endValue - startValue) / transition.speed;
        }
    }

    this._startTime = Date.now();
    this._endValue = _clone(endValue);
    this._startVelocity = _clone(transition.velocity);
    this._duration = transition.duration;
    this._curve = transition.curve;
    this._active = true;
    this._callback = callback;
};

/**
 * Cancel all transitions and reset to a stable state
 *
 * @method reset
 *
 * @param {number|Array.Number|Object.<number, number>} startValue
 *    starting state
 * @param {number} startVelocity
 *    starting velocity
 */
TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
    if (this._callback) {
        var callback = this._callback;
        this._callback = undefined;
        callback();
    }
    this.state = _clone(startValue);
    this.velocity = _clone(startVelocity);
    this._startTime = 0;
    this._duration = 0;
    this._updateTime = 0;
    this._startValue = this.state;
    this._startVelocity = this.velocity;
    this._endValue = this.state;
    this._active = false;
};

/**
 * Get current velocity
 *
 * @method getVelocity
 *
 * @returns {Number} velocity
 */
TweenTransition.prototype.getVelocity = function getVelocity() {
    return this.velocity;
};

/**
 * Get interpolated state of current action at provided time. If the last
 *    action has completed, invoke its callback.
 *
 * @method get
 *
 *
 * @param {number=} timestamp Evaluate the curve at a normalized version of this
 *    time. If omitted, use current time. (Unix epoch time)
 * @return {number|Object.<number|string, number>} beginning state
 *    _interpolated to this point in time.
 */
TweenTransition.prototype.get = function get(timestamp) {
    this.update(timestamp);
    return this.state;
};

function _calculateVelocity(current, start, curve, duration, t) {
    var velocity;
    var eps = 1e-7;
    var speed = (curve(t) - curve(t - eps)) / eps;
    if (current instanceof Array) {
        velocity = [];
        for (var i = 0; i < current.length; i++){
            if (typeof current[i] === 'number')
                velocity[i] = speed * (current[i] - start[i]) / duration;
            else
                velocity[i] = 0;
        }

    }
    else velocity = speed * (current - start) / duration;
    return velocity;
}

function _calculateState(start, end, t) {
    var state;
    if (start instanceof Array) {
        state = [];
        for (var i = 0; i < start.length; i++) {
            if (typeof start[i] === 'number')
                state[i] = _interpolate(start[i], end[i], t);
            else
                state[i] = start[i];
        }
    }
    else state = _interpolate(start, end, t);
    return state;
}

/**
 * Update internal state to the provided timestamp. This may invoke the last
 *    callback and begin a new action.
 *
 * @method update
 *
 *
 * @param {number=} timestamp Evaluate the curve at a normalized version of this
 *    time. If omitted, use current time. (Unix epoch time)
 */
TweenTransition.prototype.update = function update(timestamp) {
    if (!this._active) {
        if (this._callback) {
            var callback = this._callback;
            this._callback = undefined;
            callback();
        }
        return;
    }

    if (!timestamp) timestamp = Date.now();
    if (this._updateTime >= timestamp) return;
    this._updateTime = timestamp;

    var timeSinceStart = timestamp - this._startTime;
    if (timeSinceStart >= this._duration) {
        this.state = this._endValue;
        this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
        this._active = false;
    }
    else if (timeSinceStart < 0) {
        this.state = this._startValue;
        this.velocity = this._startVelocity;
    }
    else {
        var t = timeSinceStart / this._duration;
        this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
        this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
    }
};

/**
 * Is there at least one action pending completion?
 *
 * @method isActive
 *
 *
 * @return {boolean}
 */
TweenTransition.prototype.isActive = function isActive() {
    return this._active;
};

/**
 * Halt transition at current state and erase all pending actions.
 *
 * @method halt
 *
 */
TweenTransition.prototype.halt = function halt() {
    this.reset(this.get());
};

// Register all the default curves
TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);

TweenTransition.customCurve = function customCurve(v1, v2) {
    v1 = v1 || 0; v2 = v2 || 0;
    return function(t) {
        return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
    };
};

module.exports = TweenTransition;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/utilities/Utility.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */



/**
 * This namespace holds standalone functionality.
 *  Currently includes name mapping for transition curves,
 *  name mapping for origin pairs, and the after() function.
 *
 * @class Utility
 * @static
 */
var Utility = {};

/**
 * Table of direction array positions
 *
 * @property {object} Direction
 * @final
 */
Utility.Direction = {
    X: 0,
    Y: 1,
    Z: 2
};

/**
 * Return wrapper around callback function. Once the wrapper is called N
 *   times, invoke the callback function. Arguments and scope preserved.
 *
 * @method after
 *
 * @param {number} count number of calls before callback function invoked
 * @param {Function} callback wrapped callback function
 *
 * @return {function} wrapped callback with coundown feature
 */
Utility.after = function after(count, callback) {
    var counter = count;
    return function() {
        counter--;
        if (counter === 0) callback.apply(this, arguments);
    };
};

/**
 * Load a URL and return its contents in a callback
 *
 * @method loadURL
 *
 * @param {string} url URL of object
 * @param {function} callback callback to dispatch with content
 */
Utility.loadURL = function loadURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function onreadystatechange() {
        if (this.readyState === 4) {
            if (callback) callback(this.responseText);
        }
    };
    xhr.open('GET', url);
    xhr.send();
};

/**
 * Create a document fragment from a string of HTML
 *
 * @method createDocumentFragmentFromHTML
 *
 * @param {string} html HTML to convert to DocumentFragment
 *
 * @return {DocumentFragment} DocumentFragment representing input HTML
 */
Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    var result = document.createDocumentFragment();
    while (element.hasChildNodes()) result.appendChild(element.firstChild);
    return result;
};

module.exports = Utility;
},{}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/GridLayout.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Entity = require('../core/Entity');
var RenderNode = require('../core/RenderNode');
var Transform = require('../core/Transform');
var ViewSequence = require('../core/ViewSequence');
var EventHandler = require('../core/EventHandler');
var Modifier = require('../core/Modifier');
var OptionsManager = require('../core/OptionsManager');
var Transitionable = require('../transitions/Transitionable');
var TransitionableTransform = require('../transitions/TransitionableTransform');

/**
 * A layout which divides a context into several evenly-sized grid cells.
 *   If dimensions are provided, the grid is evenly subdivided with children
 *   cells representing their own context, otherwise the cellSize property is used to compute
 *   dimensions so that items of cellSize will fit.
 * @class GridLayout
 * @constructor
 * @param {Options} [options] An object of configurable options.
 * @param {Array.Number} [options.dimensions=[1, 1]] A two value array which specifies the amount of columns
 * and rows in your Gridlayout instance.
 * @param {Array.Number} [options.cellSize=[250, 250]]  A two-value array which specifies the width and height
 * of each cell in your Gridlayout instance.
 * @param {Transition} [options.transition=false] The transiton that controls the Gridlayout instance's reflow.
 */
function GridLayout(options) {
    this.options = Object.create(GridLayout.DEFAULT_OPTIONS);
    this.optionsManager = new OptionsManager(this.options);
    if (options) this.setOptions(options);

    this.id = Entity.register(this);

    this._modifiers = [];
    this._states = [];
    this._contextSizeCache = [0, 0];
    this._dimensionsCache = [0, 0];
    this._activeCount = 0;

    this._eventOutput = new EventHandler();
    EventHandler.setOutputHandler(this, this._eventOutput);
}

function _reflow(size, cols, rows) {
    var usableSize = [size[0], size[1]];
    usableSize[0] -= this.options.gutterSize[0] * (cols - 1);
    usableSize[1] -= this.options.gutterSize[1] * (rows - 1);

    var rowSize = Math.round(usableSize[1] / rows);
    var colSize = Math.round(usableSize[0] / cols);

    var currY = 0;
    var currX;
    var currIndex = 0;
    for (var i = 0; i < rows; i++) {
        currX = 0;
        for (var j = 0; j < cols; j++) {
            if (this._modifiers[currIndex] === undefined) {
                _createModifier.call(this, currIndex, [colSize, rowSize], [currX, currY, 0], 1);
            }
            else {
                _animateModifier.call(this, currIndex, [colSize, rowSize], [currX, currY, 0], 1);
            }

            currIndex++;
            currX += colSize + this.options.gutterSize[0];
        }

        currY += rowSize + this.options.gutterSize[1];
    }

    this._dimensionsCache = [this.options.dimensions[0], this.options.dimensions[1]];
    this._contextSizeCache = [size[0], size[1]];

    this._activeCount = rows * cols;

    for (i = this._activeCount ; i < this._modifiers.length; i++) _animateModifier.call(this, i, [Math.round(colSize), Math.round(rowSize)], [0, 0], 0);

    this._eventOutput.emit('reflow');
}

function _createModifier(index, size, position, opacity) {
    var transitionItem = {
        transform: new TransitionableTransform(Transform.translate.apply(null, position)),
        opacity: new Transitionable(opacity),
        size: new Transitionable(size)
    };

    var modifier = new Modifier({
        transform: transitionItem.transform,
        opacity: transitionItem.opacity,
        size: transitionItem.size
    });

    this._states[index] = transitionItem;
    this._modifiers[index] = modifier;

}

function _animateModifier(index, size, position, opacity) {
    var currState = this._states[index];

    var currSize = currState.size;
    var currOpacity = currState.opacity;
    var currTransform = currState.transform;

    var transition = this.options.transition;

    currTransform.halt();
    currOpacity.halt();
    currSize.halt();

    currTransform.setTranslate(position, transition);
    currSize.set(size, transition);
    currOpacity.set(opacity, transition);
}

GridLayout.DEFAULT_OPTIONS = {
    dimensions: [1, 1],
    transition: false,
    gutterSize: [0, 0]
};

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {Object} Render spec for this component
 */
GridLayout.prototype.render = function render() {
    return this.id;
};

/**
 * Patches the GridLayout instance's options with the passed-in ones.
 *
 * @method setOptions
 * @param {Options} options An object of configurable options for the GridLayout instance.
 */
GridLayout.prototype.setOptions = function setOptions(options) {
    return this.optionsManager.setOptions(options);
};

/**
 * Sets the collection of renderables under the Gridlayout instance's control.
 *
 * @method sequenceFrom
 * @param {Array|ViewSequence} sequence Either an array of renderables or a Famous viewSequence.
 */
GridLayout.prototype.sequenceFrom = function sequenceFrom(sequence) {
    if (sequence instanceof Array) sequence = new ViewSequence(sequence);
    this.sequence = sequence;
};

/**
 * Apply changes from this component to the corresponding document element.
 * This includes changes to classes, styles, size, content, opacity, origin,
 * and matrix transforms.
 *
 * @private
 * @method commit
 * @param {Context} context commit context
 */
GridLayout.prototype.commit = function commit(context) {
    var transform = context.transform;
    var opacity = context.opacity;
    var origin = context.origin;
    var size = context.size;

    var cols = this.options.dimensions[0];
    var rows = this.options.dimensions[1];

    if (size[0] !== this._contextSizeCache[0] || size[1] !== this._contextSizeCache[1] || cols !== this._dimensionsCache[0] || rows !== this._dimensionsCache[1]) {
        _reflow.call(this, size, cols, rows);
    }

    var sequence = this.sequence;
    var result = [];
    var currIndex = 0;
    while (sequence && (currIndex < this._modifiers.length)) {
        var item = sequence.get();
        var modifier = this._modifiers[currIndex];
        if (currIndex >= this._activeCount && this._states[currIndex].opacity.isActive()) {
            this._modifiers.splice(currIndex, 1);
            this._states.splice(currIndex, 1);
        }
        if (item) {
            result.push(
                modifier.modify({
                    origin: origin,
                    target: item.render()
                })
            );
        }
        sequence = sequence.getNext();
        currIndex++;
    }

    if (size) transform = Transform.moveThen([-size[0]*origin[0], -size[1]*origin[1], 0], transform);
    return {
        transform: transform,
        opacity: opacity,
        size: size,
        target: result
    };
};

module.exports = GridLayout;
},{"../core/Entity":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Entity.js","../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","../core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","../core/OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js","../core/RenderNode":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/RenderNode.js","../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","../core/ViewSequence":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ViewSequence.js","../transitions/Transitionable":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js","../transitions/TransitionableTransform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/TransitionableTransform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/HeaderFooterLayout.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Entity = require('../core/Entity');
var RenderNode = require('../core/RenderNode');
var Transform = require('../core/Transform');
var OptionsManager = require('../core/OptionsManager');

/**
 * A layout which will arrange three renderables into a header and footer area of defined size,
  and a content area of flexible size.
 * @class HeaderFooterLayout
 * @constructor
 * @param {Options} [options] An object of configurable options.
 * @param {Number} [options.direction=HeaderFooterLayout.DIRECTION_Y] A direction of HeaderFooterLayout.DIRECTION_X
 * lays your HeaderFooterLayout instance horizontally, and a direction of HeaderFooterLayout.DIRECTION_Y
 * lays it out vertically.
 * @param {Number} [options.headerSize=undefined]  The amount of pixels allocated to the header node
 * in the HeaderFooterLayout instance's direction.
 * @param {Number} [options.footerSize=undefined] The amount of pixels allocated to the footer node
 * in the HeaderFooterLayout instance's direction.
 */
function HeaderFooterLayout(options) {
    this.options = Object.create(HeaderFooterLayout.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options) this.setOptions(options);

    this._entityId = Entity.register(this);

    this.header = new RenderNode();
    this.footer = new RenderNode();
    this.content = new RenderNode();
}

/**
 *  When used as a value for your HeaderFooterLayout's direction option, causes it to lay out horizontally.
 *
 *  @attribute DIRECTION_X
 *  @type Number
 *  @static
 *  @default 0
 *  @protected
 */
HeaderFooterLayout.DIRECTION_X = 0;

/**
 *  When used as a value for your HeaderFooterLayout's direction option, causes it to lay out vertically.
 *
 *  @attribute DIRECTION_Y
 *  @type Number
 *  @static
 *  @default 1
 *  @protected
 */
HeaderFooterLayout.DIRECTION_Y = 1;

HeaderFooterLayout.DEFAULT_OPTIONS = {
    direction: HeaderFooterLayout.DIRECTION_Y,
    headerSize: undefined,
    footerSize: undefined,
    defaultHeaderSize: 0,
    defaultFooterSize: 0
};

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {Object} Render spec for this component
 */
HeaderFooterLayout.prototype.render = function render() {
    return this._entityId;
};

/**
 * Patches the HeaderFooterLayout instance's options with the passed-in ones.
 *
 * @method setOptions
 * @param {Options} options An object of configurable options for the HeaderFooterLayout instance.
 */
HeaderFooterLayout.prototype.setOptions = function setOptions(options) {
    return this._optionsManager.setOptions(options);
};

function _resolveNodeSize(node, defaultSize) {
    var nodeSize = node.getSize();
    return nodeSize ? nodeSize[this.options.direction] : defaultSize;
}

function _outputTransform(offset) {
    if (this.options.direction === HeaderFooterLayout.DIRECTION_X) return Transform.translate(offset, 0, 0);
    else return Transform.translate(0, offset, 0);
}

function _finalSize(directionSize, size) {
    if (this.options.direction === HeaderFooterLayout.DIRECTION_X) return [directionSize, size[1]];
    else return [size[0], directionSize];
}

/**
 * Apply changes from this component to the corresponding document element.
 * This includes changes to classes, styles, size, content, opacity, origin,
 * and matrix transforms.
 *
 * @private
 * @method commit
 * @param {Context} context commit context
 */
HeaderFooterLayout.prototype.commit = function commit(context) {
    var transform = context.transform;
    var origin = context.origin;
    var size = context.size;
    var opacity = context.opacity;

    var headerSize = (this.options.headerSize !== undefined) ? this.options.headerSize : _resolveNodeSize.call(this, this.header, this.options.defaultHeaderSize);
    var footerSize = (this.options.footerSize !== undefined) ? this.options.footerSize : _resolveNodeSize.call(this, this.footer, this.options.defaultFooterSize);
    var contentSize = size[this.options.direction] - headerSize - footerSize;

    if (size) transform = Transform.moveThen([-size[0]*origin[0], -size[1]*origin[1], 0], transform);

    var result = [
        {
            size: _finalSize.call(this, headerSize, size),
            target: this.header.render()
        },
        {
            transform: _outputTransform.call(this, headerSize),
            size: _finalSize.call(this, contentSize, size),
            target: this.content.render()
        },
        {
            transform: _outputTransform.call(this, headerSize + contentSize),
            size: _finalSize.call(this, footerSize, size),
            target: this.footer.render()
        }
    ];

    return {
        transform: transform,
        opacity: opacity,
        size: size,
        target: result
    };
};

module.exports = HeaderFooterLayout;
},{"../core/Entity":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Entity.js","../core/OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js","../core/RenderNode":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/RenderNode.js","../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/RenderController.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var Modifier = require('../core/Modifier');
var RenderNode = require('../core/RenderNode');
var Transform = require('../core/Transform');
var Transitionable = require('../transitions/Transitionable');
var View = require('../core/View');

/**
 * A dynamic view that can show or hide different renerables with transitions.
 * @class RenderController
 * @constructor
 * @param {Options} [options] An object of configurable options.
 * @param {Transition} [inTransition=true] The transition in charge of showing a renderable.
 * @param {Transition} [outTransition=true]  The transition in charge of removing your previous renderable when
 * you show a new one, or hiding your current renderable.
 * @param {Boolean} [overlap=true] When showing a new renderable, overlap determines if the
  out transition of the old one executes concurrently with the in transition of the new one,
   or synchronously beforehand.
 */
function RenderController(options) {
    View.apply(this, arguments);

    this._showing = -1;
    this._outgoingRenderables = [];
    this._nextRenderable = null;

    this._renderables = [];
    this._nodes = [];
    this._modifiers = [];
    this._states = [];

    this.inTransformMap = RenderController.DefaultMap.transform;
    this.inOpacityMap = RenderController.DefaultMap.opacity;
    this.inOriginMap = RenderController.DefaultMap.origin;
    this.outTransformMap = RenderController.DefaultMap.transform;
    this.outOpacityMap = RenderController.DefaultMap.opacity;
    this.outOriginMap = RenderController.DefaultMap.origin;

    this._output = [];
}
RenderController.prototype = Object.create(View.prototype);
RenderController.prototype.constructor = RenderController;

RenderController.DEFAULT_OPTIONS = {
    inTransition: true,
    outTransition: true,
    overlap: true
};

RenderController.DefaultMap = {
    transform: function() {
        return Transform.identity;
    },
    opacity: function(progress) {
        return progress;
    },
    origin: null
};

function _mappedState(map, state) {
    return map(state.get());
}

/**
 * As your RenderController shows a new renderable, it executes a transition in. This transition in
 *  will affect a default interior state and modify it as you bring renderables in and out. However, if you want to control
 *  the transform, opacity, and origin state yourself, you may call certain methods (such as inTransformFrom) to obtain state from an outside source,
 *  that may either be a function or a Famous transitionable. inTransformFrom sets the accessor for the state of
 *  the transform used in transitioning in renderables.
 *
 * @method inTransformFrom
 * @param {Function|Transitionable} transform  A function that returns a transform from outside closure, or a
 * a transitionable that manages a full transform (a sixteen value array).
 * @chainable
 */
RenderController.prototype.inTransformFrom = function inTransformFrom(transform) {
    if (transform instanceof Function) this.inTransformMap = transform;
    else if (transform && transform.get) this.inTransformMap = transform.get.bind(transform);
    else throw new Error('inTransformFrom takes only function or getter object');
    //TODO: tween transition
    return this;
};

/**
 * inOpacityFrom sets the accessor for the state of the opacity used in transitioning in renderables.
 * @method inOpacityFrom
 * @param {Function|Transitionable} opacity  A function that returns an opacity from outside closure, or a
 * a transitionable that manages opacity (a number between zero and one).
 * @chainable
 */
RenderController.prototype.inOpacityFrom = function inOpacityFrom(opacity) {
    if (opacity instanceof Function) this.inOpacityMap = opacity;
    else if (opacity && opacity.get) this.inOpacityMap = opacity.get.bind(opacity);
    else throw new Error('inOpacityFrom takes only function or getter object');
    //TODO: tween opacity
    return this;
};

/**
 * inOriginFrom sets the accessor for the state of the origin used in transitioning in renderables.
 * @method inOriginFrom
 * @param {Function|Transitionable} origin A function that returns an origin from outside closure, or a
 * a transitionable that manages origin (a two value array of numbers between zero and one).
 * @chainable
 */
RenderController.prototype.inOriginFrom = function inOriginFrom(origin) {
    if (origin instanceof Function) this.inOriginMap = origin;
    else if (origin && origin.get) this.inOriginMap = origin.get.bind(origin);
    else throw new Error('inOriginFrom takes only function or getter object');
    //TODO: tween origin
    return this;
};

/**
 * outTransformFrom sets the accessor for the state of the transform used in transitioning out renderables.
 * @method show
 * @param {Function|Transitionable} transform  A function that returns a transform from outside closure, or a
 * a transitionable that manages a full transform (a sixteen value array).
 * @chainable
 */
RenderController.prototype.outTransformFrom = function outTransformFrom(transform) {
    if (transform instanceof Function) this.outTransformMap = transform;
    else if (transform && transform.get) this.outTransformMap = transform.get.bind(transform);
    else throw new Error('inTransformFrom takes only function or getter object');
    //TODO: tween transition
    return this;
};

/**
 * outOpacityFrom sets the accessor for the state of the opacity used in transitioning out renderables.
 * @method inOpacityFrom
 * @param {Function|Transitionable} opacity  A function that returns an opacity from outside closure, or a
 * a transitionable that manages opacity (a number between zero and one).
 * @chainable
 */
RenderController.prototype.outOpacityFrom = function outOpacityFrom(opacity) {
    if (opacity instanceof Function) this.outOpacityMap = opacity;
    else if (opacity && opacity.get) this.outOpacityMap = opacity.get.bind(opacity);
    else throw new Error('inOpacityFrom takes only function or getter object');
    //TODO: tween opacity
    return this;
};

/**
 * outOriginFrom sets the accessor for the state of the origin used in transitioning out renderables.
 * @method inOriginFrom
 * @param {Function|Transitionable} origin A function that returns an origin from outside closure, or a
 * a transitionable that manages origin (a two value array of numbers between zero and one).
 * @chainable
 */
RenderController.prototype.outOriginFrom = function outOriginFrom(origin) {
    if (origin instanceof Function) this.outOriginMap = origin;
    else if (origin && origin.get) this.outOriginMap = origin.get.bind(origin);
    else throw new Error('inOriginFrom takes only function or getter object');
    //TODO: tween origin
    return this;
};

/**
 * Show displays the targeted renderable with a transition and an optional callback to
 * execute afterwards.
 * @method show
 * @param {Object} renderable The renderable you want to show.
 * @param {Transition} [transition] Overwrites the default transition in to display the
 * passed-in renderable.
 * @param {function} [callback] Executes after transitioning in the renderable.
 * @chainable
 */
RenderController.prototype.show = function show(renderable, transition, callback) {
    if (!renderable) {
        return this.hide(callback);
    }

    if (transition instanceof Function) {
        callback = transition;
        transition = null;
    }

    if (this._showing >= 0) {
        if (this.options.overlap) this.hide();
        else {
            if (this._nextRenderable) {
                this._nextRenderable = renderable;
            }
            else {
                this._nextRenderable = renderable;
                this.hide(function() {
                    if (this._nextRenderable === renderable) this.show(this._nextRenderable, callback);
                    this._nextRenderable = null;
                });
            }
            return undefined;
        }
    }

    var state = null;

    // check to see if we should restore
    var renderableIndex = this._renderables.indexOf(renderable);
    if (renderableIndex >= 0) {
        this._showing = renderableIndex;
        state = this._states[renderableIndex];
        state.halt();

        var outgoingIndex = this._outgoingRenderables.indexOf(renderable);
        if (outgoingIndex >= 0) this._outgoingRenderables.splice(outgoingIndex, 1);
    }
    else {
        state = new Transitionable(0);

        var modifier = new Modifier({
            transform: this.inTransformMap ? _mappedState.bind(this, this.inTransformMap, state) : null,
            opacity: this.inOpacityMap ? _mappedState.bind(this, this.inOpacityMap, state) : null,
            origin: this.inOriginMap ? _mappedState.bind(this, this.inOriginMap, state) : null
        });
        var node = new RenderNode();
        node.add(modifier).add(renderable);

        this._showing = this._nodes.length;
        this._nodes.push(node);
        this._modifiers.push(modifier);
        this._states.push(state);
        this._renderables.push(renderable);
    }

    if (!transition) transition = this.options.inTransition;
    state.set(1, transition, callback);
};

/**
 * Hide hides the currently displayed renderable with an out transition.
 * @method hide
 * @param {Transition} [transition] Overwrites the default transition in to hide the
 * currently controlled renderable.
 * @param {function} [callback] Executes after transitioning out the renderable.
 * @chainable
 */
RenderController.prototype.hide = function hide(transition, callback) {
    if (this._showing < 0) return;
    var index = this._showing;
    this._showing = -1;

    if (transition instanceof Function) {
        callback = transition;
        transition = undefined;
    }

    var node = this._nodes[index];
    var modifier = this._modifiers[index];
    var state = this._states[index];
    var renderable = this._renderables[index];

    modifier.transformFrom(this.outTransformMap ? _mappedState.bind(this, this.outTransformMap, state) : null);
    modifier.opacityFrom(this.outOpacityMap ? _mappedState.bind(this, this.outOpacityMap, state) : null);
    modifier.originFrom(this.outOriginMap ? _mappedState.bind(this, this.outOriginMap, state) : null);

    if (this._outgoingRenderables.indexOf(renderable) < 0) this._outgoingRenderables.push(renderable);

    if (!transition) transition = this.options.outTransition;
    state.halt();
    state.set(0, transition, function(node, modifier, state, renderable) {
        if (this._outgoingRenderables.indexOf(renderable) >= 0) {
            var index = this._nodes.indexOf(node);
            this._nodes.splice(index, 1);
            this._modifiers.splice(index, 1);
            this._states.splice(index, 1);
            this._renderables.splice(index, 1);
            this._outgoingRenderables.splice(this._outgoingRenderables.indexOf(renderable), 1);

            if (this._showing >= index) this._showing--;
        }
        if (callback) callback.call(this);
    }.bind(this, node, modifier, state, renderable));
};

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {number} Render spec for this component
 */
RenderController.prototype.render = function render() {
    var result = this._output;
    if (result.length > this._nodes.length) result.splice(this._nodes.length);
    for (var i = 0; i < this._nodes.length; i++) {
        result[i] = this._nodes[i].render();
    }
    return result;
};

module.exports = RenderController;
},{"../core/Modifier":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Modifier.js","../core/RenderNode":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/RenderNode.js","../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","../core/View":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/View.js","../transitions/Transitionable":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/transitions/Transitionable.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/Scroller.js":[function(require,module,exports){
var Entity = require('../core/Entity');
var Group = require('../core/Group');
var OptionsManager = require('../core/OptionsManager');
var Transform = require('../core/Transform');
var Utility = require('../utilities/Utility');
var ViewSequence = require('../core/ViewSequence');
var EventHandler = require('../core/EventHandler');

/**
 * Scroller lays out a collection of renderables, and will browse through them based on
 * accessed position. Scroller also broadcasts an 'edgeHit' event, with a position property of the location of the edge,
 * when you've hit the 'edges' of it's renderable collection.
 * @class Scroller
 * @constructor
  * @event error
 * @param {Options} [options] An object of configurable options.
 * @param {Number} [options.direction=Utility.Direction.Y] Using the direction helper found in the famous Utility
 * module, this option will lay out the Scroller instance's renderables either horizontally
 * (x) or vertically (y). Utility's direction is essentially either zero (X) or one (Y), so feel free
 * to just use integers as well.
 * @param {Number} [clipSize=undefined] The size of the area (in pixels) that Scroller will display content in.
 * @param {Number} [margin=undefined] The size of the area (in pixels) that Scroller will process renderables' associated calculations in.
 */
function Scroller(options) {
    this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);
    if (options) this._optionsManager.setOptions(options);

    this._node = null;
    this._position = 0;

    // used for shifting nodes
    this._positionOffset = 0;

    this._positionGetter = null;
    this._outputFunction = null;
    this._masterOutputFunction = null;
    this.outputFrom();

    this._onEdge = 0; // -1 for top, 1 for bottom

    this.group = new Group();
    this.group.add({render: _innerRender.bind(this)});

    this._entityId = Entity.register(this);
    this._size = [undefined, undefined];
    this._contextSize = [undefined, undefined];

    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();

    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);
}

Scroller.DEFAULT_OPTIONS = {
    direction: Utility.Direction.Y,
    margin: 0,
    clipSize: undefined,
    groupScroll: false
};

function _sizeForDir(size) {
    if (!size) size = this._contextSize;
    var dimension = (this.options.direction === Utility.Direction.X) ? 0 : 1;
    return (size[dimension] === undefined) ? this._contextSize[dimension] : size[dimension];
}

function _output(node, offset, target) {
    var size = node.getSize ? node.getSize() : this._contextSize;
    var transform = this._outputFunction(offset);
    target.push({transform: transform, target: node.render()});
    return _sizeForDir.call(this, size);
}

function _getClipSize() {
    if (this.options.clipSize) return this.options.clipSize;
    else return _sizeForDir.call(this, this._contextSize);
}

/**
 * Patches the Scroller instance's options with the passed-in ones.
 * @method setOptions
 * @param {Options} options An object of configurable options for the Scroller instance.
 */
Scroller.prototype.setOptions = function setOptions(options) {
    this._optionsManager.setOptions(options);

    if (this.options.groupScroll) {
      this.group.pipe(this._eventOutput);
    }
    else {
      this.group.unpipe(this._eventOutput);
    }
};

/**
 * Tells you if the Scroller instance is on an edge.
 * @method onEdge
 * @return {Boolean} Whether the Scroller instance is on an edge or not.
 */
Scroller.prototype.onEdge = function onEdge() {
    return this._onEdge;
};

/**
 * Allows you to overwrite the way Scroller lays out it's renderables. Scroller will
 * pass an offset into the function. By default the Scroller instance just translates each node
 * in it's direction by the passed-in offset.
 * Scroller will translate each renderable down
 * @method outputFrom
 * @param {Function} fn A function that takes an offset and returns a transform.
 * @param {Function} [masterFn]
 */
Scroller.prototype.outputFrom = function outputFrom(fn, masterFn) {
    if (!fn) {
        fn = function(offset) {
            return (this.options.direction === Utility.Direction.X) ? Transform.translate(offset, 0) : Transform.translate(0, offset);
        }.bind(this);
        if (!masterFn) masterFn = fn;
    }
    this._outputFunction = fn;
    this._masterOutputFunction = masterFn ? masterFn : function(offset) {
        return Transform.inverse(fn(-offset));
    };
};

/**
 * The Scroller instance's method for reading from an external position. Scroller uses
 * the external position to actually scroll through it's renderables.
 * @method positionFrom
 * @param {Getter} position Can be either a function that returns a position,
 * or an object with a get method that returns a position.
 */
Scroller.prototype.positionFrom = function positionFrom(position) {
    if (position instanceof Function) this._positionGetter = position;
    else if (position && position.get) this._positionGetter = position.get.bind(position);
    else {
        this._positionGetter = null;
        this._position = position;
    }
    if (this._positionGetter) this._position = this._positionGetter.call(this);
};

/**
 * Sets the collection of renderables under the Scroller instance's control.
 *
 * @method sequenceFrom
 * @param {Array|ViewSequence} items Either an array of renderables or a Famous viewSequence.
 * @chainable
 */
Scroller.prototype.sequenceFrom = function sequenceFrom(node) {
    if (node instanceof Array) node = new ViewSequence({array: node});
    this._node = node;
    this._positionOffset = 0;
};

/**
 * Returns the width and the height of the Scroller instance.
 *
 * @method getSize
 * @return {Array} A two value array of the Scroller instance's current width and height (in that order).
 */
Scroller.prototype.getSize = function getSize(actual) {
    return actual ? this._contextSize : this._size;
};

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {number} Render spec for this component
 */
Scroller.prototype.render = function render() {
    if (!this._node) return null;
    if (this._positionGetter) this._position = this._positionGetter.call(this);
    return this._entityId;
};

/**
 * Apply changes from this component to the corresponding document element.
 * This includes changes to classes, styles, size, content, opacity, origin,
 * and matrix transforms.
 *
 * @private
 * @method commit
 * @param {Context} context commit context
 */
Scroller.prototype.commit = function commit(context) {
    var transform = context.transform;
    var opacity = context.opacity;
    var origin = context.origin;
    var size = context.size;

    // reset edge detection on size change
    if (!this.options.clipSize && (size[0] !== this._contextSize[0] || size[1] !== this._contextSize[1])) {
        this._onEdge = 0;
        this._contextSize[0] = size[0];
        this._contextSize[1] = size[1];

        if (this.options.direction === Utility.Direction.X) {
            this._size[0] = _getClipSize.call(this);
            this._size[1] = undefined;
        }
        else {
            this._size[0] = undefined;
            this._size[1] = _getClipSize.call(this);
        }
    }

    var scrollTransform = this._masterOutputFunction(-this._position);

    return {
        transform: Transform.multiply(transform, scrollTransform),
        size: size,
        opacity: opacity,
        origin: origin,
        target: this.group.render()
    };
};

function _normalizeState() {
    var nodeSize = _sizeForDir.call(this, this._node.getSize());
    var nextNode = this._node && this._node.getNext ? this._node.getNext() : null;
    while (nextNode && this._position + this._positionOffset >= nodeSize) {
        this._positionOffset -= nodeSize;
        this._node = nextNode;
        nodeSize = _sizeForDir.call(this, this._node.getSize());
        nextNode = this._node && this._node.getNext ? this._node.getNext() : null;
    }
    var prevNode = this._node && this._node.getPrevious ? this._node.getPrevious() : null;
    while (prevNode && this._position + this._positionOffset < 0) {
        var prevNodeSize = _sizeForDir.call(this, prevNode.getSize());
        this._positionOffset += prevNodeSize;
        this._node = prevNode;
        prevNode = this._node && this._node.getPrevious ? this._node.getPrevious() : null;
    }
}

function _innerRender() {
    var size = null;
    var position = this._position;
    var result = [];

    this._onEdge = 0;

    var offset = -this._positionOffset;
    var clipSize = _getClipSize.call(this);
    var currNode = this._node;
    while (currNode && offset - position < clipSize + this.options.margin) {
        offset += _output.call(this, currNode, offset, result);
        currNode = currNode.getNext ? currNode.getNext() : null;
    }

    var sizeNode = this._node;
    var nodesSize = _sizeForDir.call(this, sizeNode.getSize());
    if (offset < clipSize) {
        while (sizeNode && nodesSize < clipSize) {
            sizeNode = sizeNode.getPrevious();
            if (sizeNode) nodesSize += _sizeForDir.call(this, sizeNode.getSize());
        }
        sizeNode = this._node;
        while (sizeNode && nodesSize < clipSize) {
            sizeNode = sizeNode.getNext();
            if (sizeNode) nodesSize += _sizeForDir.call(this, sizeNode.getSize());
        }
    }

    var edgeSize = (nodesSize !== undefined && nodesSize < clipSize) ? nodesSize : clipSize;

    if (!currNode && offset - position <= edgeSize) {
        this._onEdge = 1;
        this._eventOutput.emit('edgeHit', {
            position: offset - edgeSize
        });
    }
    else if (!this._node.getPrevious() && position <= 0) {
        this._onEdge = -1;
        this._eventOutput.emit('edgeHit', {
            position: 0
        });
    }

    // backwards
    currNode = (this._node && this._node.getPrevious) ? this._node.getPrevious() : null;
    offset = -this._positionOffset;
    if (currNode) {
        size = currNode.getSize ? currNode.getSize() : this._contextSize;
        offset -= _sizeForDir.call(this, size);
    }

    while (currNode && ((offset - position) > -(_getClipSize.call(this) + this.options.margin))) {
        _output.call(this, currNode, offset, result);
        currNode = currNode.getPrevious ? currNode.getPrevious() : null;
        if (currNode) {
            size = currNode.getSize ? currNode.getSize() : this._contextSize;
            offset -= _sizeForDir.call(this, size);
        }
    }

    _normalizeState.call(this);
    return result;
}

module.exports = Scroller;
},{"../core/Entity":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Entity.js","../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","../core/Group":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Group.js","../core/OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js","../core/Transform":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/Transform.js","../core/ViewSequence":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ViewSequence.js","../utilities/Utility":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/utilities/Utility.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/Scrollview.js":[function(require,module,exports){
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

var PhysicsEngine = require('../physics/PhysicsEngine');
var Particle = require('../physics/bodies/Particle');
var Drag = require('../physics/forces/Drag');
var Spring = require('../physics/forces/Spring');
var EventHandler = require('../core/EventHandler');
var OptionsManager = require('../core/OptionsManager');
var ViewSequence = require('../core/ViewSequence');
var Scroller = require('../views/Scroller');
var Utility = require('../utilities/Utility');
var GenericSync = require('../inputs/GenericSync');
var ScrollSync = require('../inputs/ScrollSync');
var TouchSync = require('../inputs/TouchSync');
GenericSync.register({scroll : ScrollSync, touch : TouchSync});

/**
 * Scrollview will lay out a collection of renderables sequentially in the specified direction, and will
 * allow you to scroll through them with mousewheel or touch events.
 * @class Scrollview
 * @constructor
 * @param {Options} [options] An object of configurable options.
 * @param {Number} [options.direction=Utility.Direction.Y] Using the direction helper found in the famous Utility
 * module, this option will lay out the Scrollview instance's renderables either horizontally
 * (x) or vertically (y). Utility's direction is essentially either zero (X) or one (Y), so feel free
 * to just use integers as well.
 * @param {Boolean} [options.rails=true] When true, Scrollview's genericSync will only process input in it's primary access.
 * @param {Number} [clipSize=undefined] The size of the area (in pixels) that Scrollview will display content in.
 * @param {Number} [margin=undefined] The size of the area (in pixels) that Scrollview will process renderables' associated calculations in.
 * @param {Number} [friction=0.001] Input resistance proportional to the velocity of the input.
 * Controls the feel of the Scrollview instance at low velocities.
 * @param {Number} [drag=0.0001] Input resistance proportional to the square of the velocity of the input.
 * Affects Scrollview instance more prominently at high velocities.
 * @param {Number} [edgeGrip=0.5] A coefficient for resistance against after-touch momentum.
 * @param {Number} [egePeriod=300] Sets the period on the spring that handles the physics associated
 * with hitting the end of a scrollview.
 * @param {Number} [edgeDamp=1] Sets the damping on the spring that handles the physics associated
 * with hitting the end of a scrollview.
 * @param {Boolean} [paginated=false] A paginated scrollview will scroll through items discretely
 * rather than continously.
 * @param {Number} [pagePeriod=500] Sets the period on the spring that handles the physics associated
 * with pagination.
 * @param {Number} [pageDamp=0.8] Sets the damping on the spring that handles the physics associated
 * with pagination.
 * @param {Number} [pageStopSpeed=Infinity] The threshold for determining the amount of velocity
 * required to trigger pagination. The lower the threshold, the easier it is to scroll continuosly.
 * @param {Number} [pageSwitchSpeed=1] The threshold for momentum-based velocity pagination.
 * @param {Number} [speedLimit=10] The highest scrolling speed you can reach.
 */
function Scrollview(options) {
    this.options = Object.create(Scrollview.DEFAULT_OPTIONS);
    this._optionsManager = new OptionsManager(this.options);

    this._node = null;

    this._physicsEngine = new PhysicsEngine();
    this._particle = new Particle();
    this._physicsEngine.addBody(this._particle);

    this.spring = new Spring({anchor: [0, 0, 0]});

    this.drag = new Drag({forceFunction: Drag.FORCE_FUNCTIONS.QUADRATIC});
    this.friction = new Drag({forceFunction: Drag.FORCE_FUNCTIONS.LINEAR});

    this.sync = new GenericSync(['scroll', 'touch'], {direction : this.options.direction});

    this._eventInput = new EventHandler();
    this._eventOutput = new EventHandler();

    this._eventInput.pipe(this.sync);
    this.sync.pipe(this._eventInput);

    EventHandler.setInputHandler(this, this._eventInput);
    EventHandler.setOutputHandler(this, this._eventOutput);

    this._touchCount = 0;
    this._springState = 0;
    this._onEdge = 0; // -1 for top, 1 for bottom
    this._pageSpringPosition = 0;
    this._edgeSpringPosition = 0;
    this._touchVelocity = undefined;
    this._earlyEnd = false;
    this._needsPaginationCheck = false;

    this._scroller = new Scroller();
    this._scroller.positionFrom(this.getPosition.bind(this));

    this.setOptions(options);

    _bindEvents.call(this);
}

/** @const */
var TOLERANCE = 0.5;

Scrollview.DEFAULT_OPTIONS = {
    direction: Utility.Direction.Y,
    rails: true,
    friction: 0.001,
    drag: 0.0001,
    edgeGrip: 0.5,
    edgePeriod: 300,
    edgeDamp: 1,
    margin: 1000,       // mostly safe
    paginated: false,
    pagePeriod: 500,
    pageDamp: 0.8,
    pageStopSpeed: 10,
    pageSwitchSpeed: 0.5,
    speedLimit: 10,
    groupScroll: false
};

/** @enum */
var SpringStates = {
    NONE: 0,
    EDGE: 1,
    PAGE: 2
};

function _handleStart(event) {
    this._touchCount = event.count;
    if (event.count === undefined) this._touchCount = 1;

    _detachAgents.call(this);
    this.setVelocity(0);
    this._touchVelocity = 0;
    this._earlyEnd = false;
}

function _handleMove(event) {
    var velocity = -event.velocity;
    var delta = -event.delta;

    if (this._onEdge && event.slip) {
        if ((velocity < 0 && this._onEdge < 0) || (velocity > 0 && this._onEdge > 0)) {
            if (!this._earlyEnd) {
                _handleEnd.call(this, event);
                this._earlyEnd = true;
            }
        }
        else if (this._earlyEnd && (Math.abs(velocity) > Math.abs(this.getVelocity()))) {
            _handleStart.call(this, event);
        }
    }
    if (this._earlyEnd) return;
    this._touchVelocity = velocity;

    if (event.slip) this.setVelocity(velocity);
    else this.setPosition(this.getPosition() + delta);
}

function _handleEnd(event) {
    this._touchCount = event.count || 0;
    if (!this._touchCount) {
        _detachAgents.call(this);
        if (this._onEdge) _setSpring.call(this, this._edgeSpringPosition, SpringStates.EDGE);
        _attachAgents.call(this);
        var velocity = -event.velocity;
        var speedLimit = this.options.speedLimit;
        if (event.slip) speedLimit *= this.options.edgeGrip;
        if (velocity < -speedLimit) velocity = -speedLimit;
        else if (velocity > speedLimit) velocity = speedLimit;
        this.setVelocity(velocity);
        this._touchVelocity = undefined;
        this._needsPaginationCheck = true;
    }
}

function _bindEvents() {
    this._eventInput.bindThis(this);
    this._eventInput.on('start', _handleStart);
    this._eventInput.on('update', _handleMove);
    this._eventInput.on('end', _handleEnd);

    this._scroller.on('edgeHit', function(data) {
        this._edgeSpringPosition = data.position;
    }.bind(this));
}

function _attachAgents() {
    if (this._springState) this._physicsEngine.attach([this.spring], this._particle);
    else this._physicsEngine.attach([this.drag, this.friction], this._particle);
}

function _detachAgents() {
    this._springState = SpringStates.NONE;
    this._physicsEngine.detachAll();
}

function _nodeSizeForDirection(node) {
    var direction = this.options.direction;
    var nodeSize = (node.getSize() || this._scroller.getSize())[direction];
    if (!nodeSize) nodeSize = this._scroller.getSize()[direction];
    return nodeSize;
}

function _handleEdge(edgeDetected) {
    if (!this._onEdge && edgeDetected) {
        this.sync.setOptions({scale: this.options.edgeGrip});
        if (!this._touchCount && this._springState !== SpringStates.EDGE) {
            _setSpring.call(this, this._edgeSpringPosition, SpringStates.EDGE);
        }
    }
    else if (this._onEdge && !edgeDetected) {
        this.sync.setOptions({scale: 1});
        if (this._springState && Math.abs(this.getVelocity()) < 0.001) {
            // reset agents, detaching the spring
            _detachAgents.call(this);
            _attachAgents.call(this);
        }
    }
    this._onEdge = edgeDetected;
}

function _handlePagination() {
    if (!this._needsPaginationCheck) return;

    if (this._touchCount) return;
    if (this._springState === SpringStates.EDGE) return;

    var velocity = this.getVelocity();
    if (Math.abs(velocity) >= this.options.pageStopSpeed) return;

    var position = this.getPosition();
    var velocitySwitch = Math.abs(velocity) > this.options.pageSwitchSpeed;

    // parameters to determine when to switch
    var nodeSize = _nodeSizeForDirection.call(this, this._node);
    var positionNext = position > 0.5 * nodeSize;
    var velocityNext = velocity > 0;

    if ((positionNext && !velocitySwitch) || (velocitySwitch && velocityNext)) this.goToNextPage();
    else _setSpring.call(this, 0, SpringStates.PAGE);

    this._needsPaginationCheck = false;
}

function _setSpring(position, springState) {
    var springOptions;
    if (springState === SpringStates.EDGE) {
        this._edgeSpringPosition = position;
        springOptions = {
            anchor: [this._edgeSpringPosition, 0, 0],
            period: this.options.edgePeriod,
            dampingRatio: this.options.edgeDamp
        };
    }
    else if (springState === SpringStates.PAGE) {
        this._pageSpringPosition = position;
        springOptions = {
            anchor: [this._pageSpringPosition, 0, 0],
            period: this.options.pagePeriod,
            dampingRatio: this.options.pageDamp
        };
    }

    this.spring.setOptions(springOptions);
    if (springState && !this._springState) {
        _detachAgents.call(this);
        this._springState = springState;
        _attachAgents.call(this);
    }
    this._springState = springState;
}

function _normalizeState() {
    var position = this.getPosition();
    var nodeSize = _nodeSizeForDirection.call(this, this._node);
    var nextNode = this._node.getNext();

    while (position > nodeSize + TOLERANCE && nextNode) {
        _shiftOrigin.call(this, -nodeSize);
        position -= nodeSize;
        this._scroller.sequenceFrom(nextNode);
        this._node = nextNode;
        nextNode = this._node.getNext();
        nodeSize = _nodeSizeForDirection.call(this, this._node);
    }

    var previousNode = this._node.getPrevious();
    var previousNodeSize;

    while (position < -TOLERANCE && previousNode) {
        previousNodeSize = _nodeSizeForDirection.call(this, previousNode);
        this._scroller.sequenceFrom(previousNode);
        this._node = previousNode;
        _shiftOrigin.call(this, previousNodeSize);
        position += previousNodeSize;
        previousNode = this._node.getPrevious();
    }
}

function _shiftOrigin(amount) {
    this._edgeSpringPosition += amount;
    this._pageSpringPosition += amount;
    this.setPosition(this.getPosition() + amount);
    if (this._springState === SpringStates.EDGE) {
        this.spring.setOptions({anchor: [this._edgeSpringPosition, 0, 0]});
    }
    else if (this._springState === SpringStates.PAGE) {
        this.spring.setOptions({anchor: [this._pageSpringPosition, 0, 0]});
    }
}

Scrollview.prototype.outputFrom = function outputFrom() {
    return this._scroller.outputFrom.apply(this._scroller, arguments);
};

/**
 * Returns the position associated with the Scrollview instance's current node
 *  (generally the node currently at the top).
 * @method getPosition
 * @param {number} [node] If specified, returns the position of the node at that index in the
 * Scrollview instance's currently managed collection.
 * @return {number} The position of either the specified node, or the Scrollview's current Node,
 * in pixels translated.
 */
Scrollview.prototype.getPosition = function getPosition() {
    return this._particle.getPosition1D();
};

/**
 * Sets position of the physics particle that controls Scrollview instance's "position"
 * @method setPosition
 * @param {number} x The amount of pixels you want your scrollview to progress by.
 */
Scrollview.prototype.setPosition = function setPosition(x) {
    this._particle.setPosition1D(x);
};

/**
 * Returns the Scrollview instance's velocity.
 * @method getVelocity
 * @return {Number} The velocity.
 */

Scrollview.prototype.getVelocity = function getVelocity() {
    return this._touchCount ? this._touchVelocity : this._particle.getVelocity1D();
};

/**
 * Sets the Scrollview instance's velocity. Until affected by input or another call of setVelocity
 *  the Scrollview instance will scroll at the passed-in velocity.
 * @method setVelocity
 * @param {number} v The magnitude of the velocity.
 */
Scrollview.prototype.setVelocity = function setVelocity(v) {
    this._particle.setVelocity1D(v);
};

/**
 * Patches the Scrollview instance's options with the passed-in ones.
 * @method setOptions
 * @param {Options} options An object of configurable options for the Scrollview instance.
 */
Scrollview.prototype.setOptions = function setOptions(options) {
    if (options) {
        if (options.direction !== undefined) {
            if (options.direction === 'x') options.direction = Utility.Direction.X;
            else if (options.direction === 'y') options.direction = Utility.Direction.Y;
        }

        this._scroller.setOptions(options);
        this._optionsManager.setOptions(options);
    }

    this._scroller.setOptions(this.options);
    if (this.options.groupScroll)
        this._scroller.pipe(this._eventInput);
    else
        this._scroller.unpipe(this._eventInput);

    this.drag.setOptions({strength: this.options.drag});
    this.friction.setOptions({strength: this.options.friction});

    this.spring.setOptions({
        period: this.options.edgePeriod,
        dampingRatio: this.options.edgeDamp
    });

    this.sync.setOptions({
        rails: this.options.rails,
        direction: (this.options.direction === Utility.Direction.X) ? GenericSync.DIRECTION_X : GenericSync.DIRECTION_Y
    });
};

/**
 * goToPreviousPage paginates your Scrollview instance backwards by one item.
 * @method goToPreviousPage
 * @return {ViewSequence} The previous node.
 */
Scrollview.prototype.goToPreviousPage = function goToPreviousPage() {
    if (!this._node) return null;
    var previousNode = this._node.getPrevious();
    if (previousNode) {
        var currentPosition = this.getPosition();
        var previousNodeSize = _nodeSizeForDirection.call(this, previousNode);
        this._scroller.sequenceFrom(previousNode);
        this._node = previousNode;
        var previousSpringPosition = (currentPosition < TOLERANCE) ? -previousNodeSize : 0;
        _setSpring.call(this, previousSpringPosition, SpringStates.PAGE);
        _shiftOrigin.call(this, previousNodeSize);
    }
    this._eventOutput.emit('pageChange', {direction: -1});
    return previousNode;
};

/**
 * goToNextPage paginates your Scrollview instance forwards by one item.
 * @method goToNextPage
 * @return {ViewSequence} The next node.
 */
Scrollview.prototype.goToNextPage = function goToNextPage() {
    if (!this._node) return null;
    var nextNode = this._node.getNext();
    if (nextNode) {
        var currentPosition = this.getPosition();
        var currentNodeSize = _nodeSizeForDirection.call(this, this._node);
        var nextNodeSize = _nodeSizeForDirection.call(this, nextNode);
        this._scroller.sequenceFrom(nextNode);
        this._node = nextNode;
        var nextSpringPosition = (currentPosition > currentNodeSize - TOLERANCE) ? currentNodeSize + nextNodeSize : currentNodeSize;
        _setSpring.call(this, nextSpringPosition, SpringStates.PAGE);
        _shiftOrigin.call(this, -currentNodeSize);
    }
    this._eventOutput.emit('pageChange', {direction: 1});
    return nextNode;
};

/**
 * Sets the collection of renderables under the Scrollview instance's control, by
 *  setting its current node to the passed in ViewSequence. If you
 *  pass in an array, the Scrollview instance will set its node as a ViewSequence instantiated with
 *  the passed-in array.
 *
 * @method sequenceFrom
 * @param {Array|ViewSequence} node Either an array of renderables or a Famous viewSequence.
 */
Scrollview.prototype.sequenceFrom = function sequenceFrom(node) {
    if (node instanceof Array) node = new ViewSequence({array: node});
    this._node = node;
    return this._scroller.sequenceFrom(node);
};

/**
 * Returns the width and the height of the Scrollview instance.
 *
 * @method getSize
 * @return {Array} A two value array of the Scrollview instance's current width and height (in that order).
 */
Scrollview.prototype.getSize = function getSize() {
    return this._scroller.getSize.apply(this._scroller, arguments);
};

/**
 * Generate a render spec from the contents of this component.
 *
 * @private
 * @method render
 * @return {number} Render spec for this component
 */
Scrollview.prototype.render = function render() {
    if (!this._node) return null;

    _normalizeState.call(this);
    _handleEdge.call(this, this._scroller.onEdge());
    if (this.options.paginated) _handlePagination.call(this);

    return this._scroller.render();
};

module.exports = Scrollview;
},{"../core/EventHandler":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/EventHandler.js","../core/OptionsManager":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/OptionsManager.js","../core/ViewSequence":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/core/ViewSequence.js","../inputs/GenericSync":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/GenericSync.js","../inputs/ScrollSync":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/ScrollSync.js","../inputs/TouchSync":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/inputs/TouchSync.js","../physics/PhysicsEngine":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/PhysicsEngine.js","../physics/bodies/Particle":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/bodies/Particle.js","../physics/forces/Drag":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Drag.js","../physics/forces/Spring":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/physics/forces/Spring.js","../utilities/Utility":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/utilities/Utility.js","../views/Scroller":"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/famous/views/Scroller.js"}],"/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/node_modules/jquery/dist/jquery.js":[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android < 4.0, iOS < 6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// #11217 - WebKit loses check when the name is after the checked attribute
	// Support: Windows Web Apps (WWA)
	// `name` and `type` need .setAttribute for WWA
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE9-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') in IE9, see #12537
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}]},{},["/Users/kiafathi/Documents/Code/Long Project/photoYarnClient/app/src/main.js"])