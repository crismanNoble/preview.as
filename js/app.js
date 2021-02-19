$(document).ready(function(){
  console.log('hi');


  

  function lookForTagValue(tag_key){
    console.log(tag_key);
    var $meta = $('.meta-tag[data-key="'+tag_key+'"]');
    var val = false;
    if($meta.length) {
      val = $meta.attr('data-value');
    }

    return val;
  }

  function getHostName(url) {
    if(url.indexOf('://')) {
      url = url.split('://')[1];
    }
    return url.split('/')[0];
  }
  function getFirstTagValue(toTry) {
    var val = false;
    for(var i=0;i<toTry.length;i++) {
      if(!val){
        val = lookForTagValue(toTry[i]);
        console.log(toTry[i],val);
      }
    }
    return val;
  }

  function getMeta(url, callback) {
      var img = new Image();
      img.src = url;
      img.onload = function() { console.log(this);callback(this.width, this.height); }
  }


  function clearOutSlack() {
    $('.slack__card').hide();
    $('.slack__page-title').html('');
    $('.slack__domain-name').html('');

    $('.slack__image').hide();
    $('.slack__description').text();
    $('.slack__link').text('');
    $('.slack__image').css({backgroundImage: false});
    $('.slack__favicon img').hide();
    $('.slack__favicon img').attr('src','');
  }
  function fillInSlack() {
    $('.slack').show();
    clearOutSlack();
    $('.slack__card').show();
    var title = getFirstTagValue(['og:title','title']);
    $('.slack__page-title').html(title);
    var url = lookForTagValue('href');
    var domain = getHostName(url);
    $('.slack__domain-name').text(domain);
    var image = getFirstTagValue(['twitter:image','og:image']);

    if(image) {
      $('.slack__image').show();
      $('.slack__image').css({backgroundImage: 'url('+image+')'});
      getMeta(
        image,
        function(width, height) {
          console.log(width + 'px ' + height + 'px');
          if(width > 500) {
            $('.slack__card').addClass('slack__card--large');
          } else {
            $('.slack__card').addClass('slack__card--small');
          }
        }
      );

     
    }

    var favicon = getFirstTagValue(['favicon']);
    if(favicon) {
      $('.slack__favicon img').attr('src', favicon);
      $('.slack__favicon img').show();
    }
   

    var url = getFirstTagValue(['og:url','canonical','href']);
    if(url) {
      $('.slack__link').text(getHostName(url));
    }

    var description = getFirstTagValue(['og:description','description']);
    if(description){
      $('.slack__description').text(description);
    }
  }
  

  function clearOutFacebook() {
    $('.facebook__card').hide();
    $('.facebook__title').html('');
    $('.facebook__image').hide();
    $('.facebook__description').text();
    $('.facebook__link').text('');
    $('.facebook__card').removeClass('facebook__card--large').removeClass('facebook__card--small');
    $('.facebook__image').css({backgroundImage: false});
  }

  function fillInFacebook() {
    clearOutFacebook();
     $('.facebook').show();
    $('.facebook__card').show();
     var title = getFirstTagValue(['og:title','title']);
    $('.facebook__title').html(title);

    var image = getFirstTagValue(['twitter:image','og:image']);

    if(image) {
      $('.facebook__image').show();
      $('.facebook__image').css({backgroundImage: 'url('+image+')'});

      getMeta(
        image,
        function(width, height) {
          console.log(width + 'px ' + height + 'px');
          if(width > 500) {
            $('.facebook__card').addClass('facebook__card--large');
          } else {
            $('.facebook__card').addClass('facebook__card--small');
          }
        }
      );
    }


    var url = getFirstTagValue(['og:url','canonical','href']);
    if(url) {
      $('.facebook__link').text(getHostName(url));
    }

    var description = getFirstTagValue(['og:description','description']);
    if(description){
      $('.facebook__description').text(description);
    }

  }

  function clearOutTwitter() {
    $('.twitter__card').hide();
    $('.twitter__title').html('');
    $('.twitter__image').hide();
    $('.twitter__description').text();
    $('.twitter__link span').text('');
    $('.twitter__card').removeClass('twitter__card--large').removeClass('twitter__card--small');
    $('.twitter__image').css({backgroundImage: false});
  }
  function fillInTwitter() {
    $('.twitter').show();
    clearOutTwitter();
    $('.twitter__card').show();
    var title = getFirstTagValue(['twitter:title','og:title','title']);
    $('.twitter__title').html(title);
    var tw__type=getFirstTagValue(['twitter:card']);
    var image = getFirstTagValue(['twitter:image','og:image']);
    if(tw__type == 'summary_large_image') {
      $('.twitter__card').addClass('twitter__card--large');
    }
    if(tw__type == 'summary') {
      $('.twitter__card').addClass('twitter__card--small');
    }
    
    if(image) {
      $('.twitter__image').show();
      $('.twitter__image').css({backgroundImage: 'url('+image+')'});
    }

    var url = getFirstTagValue(['canonical','href']);
    if(url) {
      $('.twitter__link span').text(getHostName(url));
    }

    var description = getFirstTagValue(['twitter:description','og:description','description']);
    if(description){
      $('.twitter__description').text(description);
    }
  }

  $('.js-ajax').submit(function(e){
    e.preventDefault();
    var url = $('#url').val();

    // indicate loading
    // hide anything existing
    

    var uri = 'https://fetch-meta-tags.glitch.me/?url='+url;
    $.get(uri).then(function(resp){
      console.log(resp);
      $('#meta_raw').html('');
      var link = $(document.createElement('div'))
            .addClass('meta-tag')
            .text('feched url: '+resp.final_url)
            .attr('data-key','href')
            .attr('data-value',resp.final_url);
      var favicon = $(document.createElement('div'))
            .addClass('meta-tag')
            .text('favicon: '+resp.favicon)
            .attr('data-key','favicon')
            .attr('data-value',resp.favicon);
      $('#meta_raw').append(meta);
      $('#meta_raw').append(link);
      $('#meta_raw').append(favicon);
      if(resp.metas && resp.metas.length) {
        for(var i=0;i<resp.metas.length;i++) {
          var m = resp.metas[i];
          var meta = $(document.createElement('div'))
            .addClass('meta-tag')
            .text(m.raw)
            .attr('data-key',m.key)
            .attr('data-value',m.value);
          $('#meta_raw').append(meta);
        }
      }

      fillInTwitter();
      fillInFacebook();
      fillInSlack();
      $('.meta').show()
    });
  });

  var prefill = document.location.search.split('url=').length > 1 ?document.location.search.split('url=')[1] : false;
  if(prefill) {
    $('#url').val(prefill);
    $('#url').parent().find('.js-submit').click();
  }

});
console.log('hi');