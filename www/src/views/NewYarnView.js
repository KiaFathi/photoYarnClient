define(function(require, exports, module) {
  'use strict';
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var StateModifier = require('famous/modifiers/StateModifier');
  var ImageSurface = require('famous/surfaces/ImageSurface');
  var InputSurface = require('famous/surfaces/InputSurface');
  var Transform = require('famous/core/Transform');

  var captionData = '';
  var mongoData;

  if(navigator.camera){
    var takePictureOptions = {
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      encodingType: Camera.EncodingType.JPEG
    };

    var getPictureOptions = {
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      encodingType: Camera.EncodingType.JPEG

    };    
  }

  function NewYarnView(){
    View.apply(this, arguments);

    _createTakePictureButton.call(this);
    _createGetPictureButton.call(this);
    _createCaption.call(this);

    this.add(surprise);
  }

  var surprise = new ImageSurface({
    align: [0.5, 0.5],
    origin: [0.5, 0.5],
    size: [200, true]
  });

  NewYarnView.prototype = Object.create(View.prototype);
  NewYarnView.prototype.constructor = NewYarnView;
  NewYarnView.DEFAULT_OPTIONS = {
    getPictureMsg: 'Get Picture',
    takePictureMsg: 'Take Picture'    
  };

  function _createCaption(){
    this.caption = new InputSurface({
      size: [100, 20]
    });

    this.captionModifier = new StateModifier({
      transform : Transform.translate(0, -200, 0)
    });


    this.captionButton = new Surface({
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

    var captionNode = this.add(this.captionModifier);
    captionNode.add(this.caption);
    captionNode.add(buttonModifier).add(this.captionButton);

    this.captionButton.on('click', function(){
      if(!!captionData && !!mongoData){
        postToMongo(mongoData);
      }
    });

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
      console.log('TakePicture Clicked!');
      captionData = this.caption.getValue();
      console.log(captionData);
      navigator.camera.getPicture(onCameraSuccess, onCameraFail, takePictureOptions);
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
      captionData = this.caption.getValue();
      console.log(captionData);
      console.log('GetPicture Clicked!');
      navigator.camera.getPicture(onCameraSuccess, onCameraFail, getPictureOptions);
      }.bind(this));
  }


  function onCameraSuccess(data){
    surprise.setContent('data:image/jpeg;base64,' + data);
    postToImgur(data);
  }

  function onCameraFail(error){
    console.log('!!!!!!!!!!!!!Error:', error);
  }

  function postToImgur(data){
    $.ajax({
      type: 'POST',
      url: 'https://api.imgur.com/3/upload',
      headers: {
        Authorization: 'Client-ID ' + 'ef774ae96ae304c',
      },
      data: {
        image: data,
        title: 'pic'
      },
      success: function (res) {
        console.log('Post to Imgur Success!');
        console.log(res.data);
        mongoData = {
          id: res.data.id,
          caption: captionData,
          creatorId : 'Kia Kia Kia'
        };
      },
      error: function (error, res) {
        console.log('post error', error);
        console.log('post response', res);
      }
    });
  }

  function postToMongo(data){
    $.ajax({
      type: 'POST',
      url: 'http://photoyarn.azurewebsites.net/yarns',
      data: {
        imgurId: data.id,
        caption: data.caption,
        creatorId: data.creatorId
      },
      success: function(res){
        console.log('Post to Mongo Success!', res);
      },
      error: function(error, res){
        console.log('post to mongo err', error);
        console.log('post error res', res);
      }
    });
  }


  module.exports = NewYarnView;

});