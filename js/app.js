

$(document).ready(function(){
  var demoData = {"status":200,"timestamp":1613753743516,"metas":[{"key":"title","value":"GitHub: Where the world builds software · GitHub","type":"element","text":"GitHub: Where the world builds software · GitHub","raw":"<title>GitHub: Where the world builds software &#xB7; GitHub</title>"},{"key":"canonical","value":"https://github.com/","type":"link","rel":"canonical","href":"https://github.com/","raw":"<link rel=\"canonical\" href=\"https://github.com/\" data-pjax-transient>"},{"name":"viewport","content":"width=device-width","type":"meta","key":"viewport","value":"width=device-width","raw":"<meta name=\"viewport\" content=\"width=device-width\">"},{"name":"description","content":"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.","type":"meta","key":"description","value":"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.","raw":"<meta name=\"description\" content=\"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.\">"},{"property":"fb:app_id","content":"1401488693436528","type":"meta","key":"fb:app_id","value":"1401488693436528","raw":"<meta property=\"fb:app_id\" content=\"1401488693436528\">"},{"name":"apple-itunes-app","content":"app-id=1477376905","type":"meta","key":"apple-itunes-app","value":"app-id=1477376905","raw":"<meta name=\"apple-itunes-app\" content=\"app-id=1477376905\">"},{"name":"twitter:image:src","content":"https://github.githubassets.com/images/modules/site/social-cards/github-social.png","type":"meta","key":"twitter:image:src","value":"https://github.githubassets.com/images/modules/site/social-cards/github-social.png","raw":"<meta name=\"twitter:image:src\" content=\"https://github.githubassets.com/images/modules/site/social-cards/github-social.png\">"},{"name":"twitter:site","content":"@github","type":"meta","key":"twitter:site","value":"@github","raw":"<meta name=\"twitter:site\" content=\"@github\">"},{"name":"twitter:card","content":"summary_large_image","type":"meta","key":"twitter:card","value":"summary_large_image","raw":"<meta name=\"twitter:card\" content=\"summary_large_image\">"},{"name":"twitter:title","content":"GitHub: Where the world builds software","type":"meta","key":"twitter:title","value":"GitHub: Where the world builds software","raw":"<meta name=\"twitter:title\" content=\"GitHub: Where the world builds software\">"},{"name":"twitter:description","content":"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...","type":"meta","key":"twitter:description","value":"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...","raw":"<meta name=\"twitter:description\" content=\"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...\">"},{"property":"og:image","content":"https://github.githubassets.com/images/modules/site/social-cards/github-social.png","type":"meta","key":"og:image","value":"https://github.githubassets.com/images/modules/site/social-cards/github-social.png","raw":"<meta property=\"og:image\" content=\"https://github.githubassets.com/images/modules/site/social-cards/github-social.png\">"},{"property":"og:site_name","content":"GitHub","type":"meta","key":"og:site_name","value":"GitHub","raw":"<meta property=\"og:site_name\" content=\"GitHub\">"},{"property":"og:type","content":"object","type":"meta","key":"og:type","value":"object","raw":"<meta property=\"og:type\" content=\"object\">"},{"property":"og:title","content":"GitHub: Where the world builds software","type":"meta","key":"og:title","value":"GitHub: Where the world builds software","raw":"<meta property=\"og:title\" content=\"GitHub: Where the world builds software\">"},{"property":"og:url","content":"https://github.com/","type":"meta","key":"og:url","value":"https://github.com/","raw":"<meta property=\"og:url\" content=\"https://github.com/\">"},{"property":"og:description","content":"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...","type":"meta","key":"og:description","value":"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...","raw":"<meta property=\"og:description\" content=\"GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and feat...\">"},{"name":"request-id","content":"A59E:2413:E044E9:10D3B29:602FED8E","type":"meta","key":"request-id","value":"A59E:2413:E044E9:10D3B29:602FED8E","raw":"<meta name=\"request-id\" content=\"A59E:2413:E044E9:10D3B29:602FED8E\" data-pjax-transient=\"true\">"},{"name":"html-safe-nonce","content":"c8f44be5761a98026385acbc831e758039d23733f3f63aa7a73e43553997b301","type":"meta","key":"html-safe-nonce","value":"c8f44be5761a98026385acbc831e758039d23733f3f63aa7a73e43553997b301","raw":"<meta name=\"html-safe-nonce\" content=\"c8f44be5761a98026385acbc831e758039d23733f3f63aa7a73e43553997b301\" data-pjax-transient=\"true\">"},{"name":"visitor-payload","content":"eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiJBNTlFOjI0MTM6RTA0NEU5OjEwRDNCMjk6NjAyRkVEOEUiLCJ2aXNpdG9yX2lkIjoiNDU4OTU1ODczOTM3NDE3MzU4MiIsInJlZ2lvbl9lZGdlIjoiaWFkIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9","type":"meta","key":"visitor-payload","value":"eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiJBNTlFOjI0MTM6RTA0NEU5OjEwRDNCMjk6NjAyRkVEOEUiLCJ2aXNpdG9yX2lkIjoiNDU4OTU1ODczOTM3NDE3MzU4MiIsInJlZ2lvbl9lZGdlIjoiaWFkIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9","raw":"<meta name=\"visitor-payload\" content=\"eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiJBNTlFOjI0MTM6RTA0NEU5OjEwRDNCMjk6NjAyRkVEOEUiLCJ2aXNpdG9yX2lkIjoiNDU4OTU1ODczOTM3NDE3MzU4MiIsInJlZ2lvbl9lZGdlIjoiaWFkIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9\" data-pjax-transient=\"true\">"},{"name":"visitor-hmac","content":"61764a2866396cd668047a5b65adb49804c8e64974de2c874a0a7966ca2497b2","type":"meta","key":"visitor-hmac","value":"61764a2866396cd668047a5b65adb49804c8e64974de2c874a0a7966ca2497b2","raw":"<meta name=\"visitor-hmac\" content=\"61764a2866396cd668047a5b65adb49804c8e64974de2c874a0a7966ca2497b2\" data-pjax-transient=\"true\">"},{"name":"page-subject","content":"GitHub","type":"meta","key":"page-subject","value":"GitHub","raw":"<meta name=\"page-subject\" content=\"GitHub\">"},{"name":"github-keyboard-shortcuts","content":"dashboards","type":"meta","key":"github-keyboard-shortcuts","value":"dashboards","raw":"<meta name=\"github-keyboard-shortcuts\" content=\"dashboards\" data-pjax-transient=\"true\">"},{"name":"google-site-verification","content":"c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY","type":"meta","key":"google-site-verification","value":"c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY","raw":"<meta name=\"google-site-verification\" content=\"c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY\">"},{"name":"google-site-verification","content":"KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU","type":"meta","key":"google-site-verification","value":"KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU","raw":"<meta name=\"google-site-verification\" content=\"KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU\">"},{"name":"google-site-verification","content":"ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA","type":"meta","key":"google-site-verification","value":"ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA","raw":"<meta name=\"google-site-verification\" content=\"ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA\">"},{"name":"google-site-verification","content":"GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc","type":"meta","key":"google-site-verification","value":"GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc","raw":"<meta name=\"google-site-verification\" content=\"GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc\">"},{"name":"octolytics-host","content":"collector.githubapp.com","type":"meta","key":"octolytics-host","value":"collector.githubapp.com","raw":"<meta name=\"octolytics-host\" content=\"collector.githubapp.com\">"},{"name":"octolytics-app-id","content":"github","type":"meta","key":"octolytics-app-id","value":"github","raw":"<meta name=\"octolytics-app-id\" content=\"github\">"},{"name":"octolytics-event-url","content":"https://collector.githubapp.com/github-external/browser_event","type":"meta","key":"octolytics-event-url","value":"https://collector.githubapp.com/github-external/browser_event","raw":"<meta name=\"octolytics-event-url\" content=\"https://collector.githubapp.com/github-external/browser_event\">"},{"name":"features-datafile","content":"{\"features\":[{\"name\":\"home_page_globe\",\"enabled\":true,\"percentageOfActors\":0,\"actors\":[]}]}","type":"meta","key":"features-datafile","value":"{\"features\":[{\"name\":\"home_page_globe\",\"enabled\":true,\"percentageOfActors\":0,\"actors\":[]}]}","raw":"<meta name=\"features-datafile\" content=\"{&quot;features&quot;:[{&quot;name&quot;:&quot;home_page_globe&quot;,&quot;enabled&quot;:true,&quot;percentageOfActors&quot;:0,&quot;actors&quot;:[]}]}\">"},{"name":"hostname","content":"github.com","type":"meta","key":"hostname","value":"github.com","raw":"<meta name=\"hostname\" content=\"github.com\">"},{"name":"expected-hostname","content":"github.com","type":"meta","key":"expected-hostname","value":"github.com","raw":"<meta name=\"expected-hostname\" content=\"github.com\">"},{"name":"enabled-features","content":"MARKETPLACE_PENDING_INSTALLATIONS,ACTIONS_SHORT_SHA_WARNING","type":"meta","key":"enabled-features","value":"MARKETPLACE_PENDING_INSTALLATIONS,ACTIONS_SHORT_SHA_WARNING","raw":"<meta name=\"enabled-features\" content=\"MARKETPLACE_PENDING_INSTALLATIONS,ACTIONS_SHORT_SHA_WARNING\">"},{"name":"homepage-version-ga-dimension","content":"dimension11","type":"meta","key":"homepage-version-ga-dimension","value":"dimension11","raw":"<meta name=\"homepage-version-ga-dimension\" content=\"dimension11\">"},{"property":"og:image:type","content":"image/png","type":"meta","key":"og:image:type","value":"image/png","raw":"<meta property=\"og:image:type\" content=\"image/png\">"},{"property":"og:image:width","content":"1200","type":"meta","key":"og:image:width","value":"1200","raw":"<meta property=\"og:image:width\" content=\"1200\">"},{"property":"og:image:height","content":"620","type":"meta","key":"og:image:height","value":"620","raw":"<meta property=\"og:image:height\" content=\"620\">"},{"name":"browser-stats-url","content":"https://api.github.com/_private/browser/stats","type":"meta","key":"browser-stats-url","value":"https://api.github.com/_private/browser/stats","raw":"<meta name=\"browser-stats-url\" content=\"https://api.github.com/_private/browser/stats\">"},{"name":"browser-errors-url","content":"https://api.github.com/_private/browser/errors","type":"meta","key":"browser-errors-url","value":"https://api.github.com/_private/browser/errors","raw":"<meta name=\"browser-errors-url\" content=\"https://api.github.com/_private/browser/errors\">"},{"name":"browser-optimizely-client-errors-url","content":"https://api.github.com/_private/browser/optimizely_client/errors","type":"meta","key":"browser-optimizely-client-errors-url","value":"https://api.github.com/_private/browser/optimizely_client/errors","raw":"<meta name=\"browser-optimizely-client-errors-url\" content=\"https://api.github.com/_private/browser/optimizely_client/errors\">"},{"name":"theme-color","content":"#1e2327","type":"meta","key":"theme-color","value":"#1e2327","raw":"<meta name=\"theme-color\" content=\"#1e2327\">"}],"title":"GitHub: Where the world builds software · GitHub","canonical":"https://github.com/","initial_url":"https://github.com/","final_url":"https://github.com/","favicon":"https://github.githubassets.com/favicons/favicon.svg"};
  var demoURL = 'https://github.com/';



  var elementsTagMapping = {
    facebook: {
      card_size: {
        image_cutoff: 500,
        image_tags: ['twitter:image','og:image'],
        large_class: 'facebook__card--large',
        small_class: 'facebook__card--small',
        card: $('.facebook__card')
      },
      title: {
        element: $('.facebook__title'),
        type: 'text',
        tags: ['og:title','title']
      },
      domain: {
        element: $('.facebook__link'),
        type: 'text',
        tags: ['og:url','canonical','href'],
        modifier: function(input){
          return getHostName(input)
        }
      },
      image: {
        element: $('.facebook__image'),
        type: 'background',
        tags: ['twitter:image','og:image']
      },
      description: {
        element: $('.facebook__description'),
        type: 'text',
        tags: ['og:description','description']
      },
    },
    google_search: {
       favicon: {
        element: $('.google__favicon img'),
        type: 'image',
        tags: ['favicon']
      },
      title: {
        element: $('.google__title'),
        type: 'text',
        tags: ['title']
      },
      description: {
        element: $('.google__description'),
        type: 'text',
        tags: ['description']
      },
      domain: {
        element: $('.google__domain'),
        type: 'text',
        tags: ['canonical','href'],
        modifier: function(input){
          return getHostName(input)
        }
      }
    },
    slack: {
      card_size: {
        image_cutoff: 500,
        image_tags: ['twitter:image','og:image'],
        large_class: 'slack__card--large',
        small_class: 'slack__card--small',
        card: $('.slack__card')
      },
      title: {
        element: $('.slack__page-title'),
        type: 'text',
        tags: ['og:title','title']
      },
      description: {
        element: $('.slack__description'),
        type: 'text',
        tags: ['og:description','description']
      },
      image: {
        element: $('.slack__image'),
        type: 'background',
        tags: ['twitter:image','og:image']
      },
      favicon: {
        element: $('.slack__favicon img'),
        type: 'image',
        tags: ['favicon']
      },
      domain: {
        element: $('.slack__domain-name'),
        type: 'text',
        tags: ['og:url','canonical','href'],
        modifier: function(input){
          return getHostName(input)
        }
      }
    },
    linkedin: {
      title: {
        element: $('.linkedin__page-title'),
        type: 'text',
        tags: ['og:title','title']
      },
      domain: {
        element: $('.linkedin__domain-title'),
        type: 'text',
        tags: ['og:url','canonical','href'],
        modifier: function(input){
          return getHostName(input)
        }
      },
      image: {
        element: $('.linkedin__image'),
        type: 'background',
        tags: ['og:image']
      }
    },
    twitter: {
      card_size: {
        meta_key: 'twitter:card',
        meta_value_class_map: {
          summary_large_image: 'twitter__card--large',
          summary: 'twitter__card--small'
        },
        large_class: 'twitter__card--large',
        small_class: 'twitter__card--small',
        card: $('.twitter__card')
      },
      title: {
        element: $('.twitter__title'),
        type: 'text',
        tags: ['og:title','title']
      },
      image: {
        element: $('.twitter__image'),
        type: 'background',
        tags: ['twitter:image','og:image']
      },
      description: {
        element: $('.twitter__description'),
        type: 'text',
        tags: ['twitter:description','og:description','description']
      },
      domain: {
        element: $('.twitter__link span'),
        type: 'text',
        tags: ['og:url','canonical','href'],
        modifier: function(input){
          return getHostName(input)
        }
      }
    }
  };


  function setQueryStringParameter(name, value) {
    if(!window.isPopping) {

      const params = new URLSearchParams(window.location.search);
      params.set(name, value);
      console.log('setting', name,value, params);
      window.history.pushState({}, "", decodeURIComponent(window.location.pathname+'?'+params));
      // console.log('pushing');
      // window.history.pushState({}, 'Title', window.location.href);
    } else {
      console.log('was gonna pop');
      window.isPopping = false;
    }
  }

  window.onpopstate = function(event) {
    checkForParamsAndLoadInitalState();
    window.isPopping = true;
  };

  function checkForParamsAndLoadInitalState() {
    var urlParams = new URLSearchParams(window.location.search);
    var autoSubmit = urlParams.has('url') ? urlParams.get('url') : false;

    if(autoSubmit) {
      console.log('tyring to auto submit', autoSubmit);

      if(isValidHttpUrl(autoSubmit)){
        console.log('url is valid');
        $('#url').val(autoSubmit);
        window.setTimeout(function(){
          console.log('waited');
          $('#url').parent().find('.js-submit').click();
        },1000);
        // $('#url').parent().find('.js-submit').click();
      } else {
        console.log('url is not valid');
        autoSubmit = false;
      }


    }

    if(!autoSubmit) {
      $('#url').val(demoURL);
      processJSON(demoData);
    }
  }
  checkForParamsAndLoadInitalState();


  function clearHTMLs(els) {
    for(var i=0;i<els.length;i++){
      clearHTML(els[i]);
    }
  }
  function clearHTML($el) {
    $el.html('');
  }
  function clearTexts(els) {
    for(var i=0;i<els.length;i++){
      $(els[i]).text('');
    }
  }

  function setText(selector,text) {
    if(!text) {
      text = '';
    }
    console.log('setting',selector,text);
    $(selector).text(text);
  }
  function setAttr(selector,attr,val) {
    $(selector).attr(attr,val);
  }

  function setBackgroundImage($el,src) {
    console.log('setting bg for', $el, src);

    if(src && src != '') {
      $el.css({backgroundImage: 'url('+src+')'});
      $el.show();
    }
  }
  function removeBackgroundImage($el) {
    if($el.attr('style') && $el.attr('style').indexOf('background-image')>-1){
      $el.css({backgroundImage: false});
      $el.hide();
    }
  }
  function removeImageSrc($el) {
    if($el.attr('src')) {
      $el.attr('src','');
      $el.hide();
    }
  }
  function setImageSrc($el,src) {
    console.log('setting src for', $el, src);
    if(src && src != '') {
      $el.attr('src',src);
      $el.show();
    }
    
  }

  function resetElements(els){
    for(var i=0;i<els.length;i++){
      resetElement($el);
    }
  }
  function resetElement($el) {
    clearHTML($el);
    removeBackgroundImage($el);
    removeImageSrc($el);
    if($el.attr('href') && $el.attr('href').length) {
      setAttr($el,'href','');
    }
  }

  function updateStatus(data){
    $('.qs__status').text(data.message);
    setText('.qs__tag-count',data.tag_count);
    setText('.qs__fetch-time',data.fetch_time);
    setText('.qs__final-url a',data.final_url);
    setAttr('.qs__final-url a','href',data.final_url);
  }

  function isChecked(selector) {
    return $(selector+':checked').length;
  }

  function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  function lookForTagValue(tag_key){
    // console.log(tag_key);
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

  function getMeta(url, callback, node) {
      var img = new Image();
      img.src = url;
      img.onload = function() { console.log(this);
        callback(this.width, this.height, node);
      }
  }

  function clearOutCard(service) {
    var parent = elementsTagMapping[service];
    if(parent) {
      var toFillIn = Object.keys(parent);
      for(var i=0;i<toFillIn.length;i++) {
        var node = parent[toFillIn[i]];
        if(node.element) {
          resetElement(node.element);
        } else if(node.image_cutoff) {
          node.card.removeClass(node.large_class);
          node.card.removeClass(node.small_class);
        }
      }
    }
  }
  function fillInCard(service) {
    
    var parent = elementsTagMapping[service];
    if(parent) {

      clearOutCard(service);
      if(isChecked('#'+service)) {
        $('.'+service).show();
      }
      // console.log(parent);
      var toFillIn = Object.keys(parent);
      for(var i=0;i<toFillIn.length;i++) {
        
        var node = parent[toFillIn[i]];
        if(node.element) {

          //something to fill in
          var meta_val = getFirstTagValue(node.tags);
          if(node.modifier) {
            meta_val = node.modifier(meta_val);
          }
          if(node.type == 'text') {
            setText(node.element,meta_val);
          }
          if(node.type =='image') {
            setImageSrc(node.element,meta_val);
          }
          if(node.type == 'background') {
            setBackgroundImage(node.element,meta_val);
          }

        } else if(node.image_cutoff) {

          var meta_val = getFirstTagValue(node.image_tags);
          getMeta(
            meta_val,
            function(width, height, node) {
              if(width > node.image_cutoff) {
                node.card.addClass(node.large_class);
              } else {
                node.card.addClass(node.small_class);
              }
            }, node
          );
        } else if(node.meta_value_class_map) {
          console.log(node,'class map time');
          var meta_val = getFirstTagValue([node.meta_key]);
          console.log(meta_val,'class map time');
          if(meta_val) {
            var class_to_use = node.meta_value_class_map[meta_val];
            console.log(class_to_use,'class map time');
            if(class_to_use) {
              node.card.addClass(class_to_use);
            }
            
          }
        
        }
      }

      $('.'+service+'__card').show();
    }


  }

  function processJSON(resp,startTime) {
    console.log(resp);
    $('#meta_raw').html('');

    var fetch_time = $(document.createElement('div'))
          .addClass('meta-tag')
          .text('last fetched: ' + new Date(resp.timestamp).toDateString() +" "+ new Date(resp.timestamp).toTimeString())
          .attr('data-key','timestamp')
          .attr('data-value',resp.timestamp);

    new Date(new Date().getTime()).toDateString()
    var link1 = $(document.createElement('div'))
          .addClass('meta-tag')
          .text('inital url: '+resp.initial_url)
          .attr('data-key','inital_url')
          .attr('data-value',resp.initial_url);
    var link = $(document.createElement('div'))
          .addClass('meta-tag')
          .text('final url: '+resp.final_url)
          .attr('data-key','href')
          .attr('data-value',resp.final_url);
    var status = $(document.createElement('div'))
          .addClass('meta-tag')
          .text('http status: '+resp.status)
          .attr('data-key','href')
          .attr('data-value',resp.http_status);
    var favicon = $(document.createElement('div'))
          .addClass('meta-tag')
          .text('favicon: '+resp.favicon)
          .attr('data-key','favicon')
          .attr('data-value',resp.favicon);

    $('#meta_raw').append(fetch_time);
    $('#meta_raw').append(link1);
    $('#meta_raw').append(link);
    $('#meta_raw').append(status);
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

    msg = {message: 'fetched',final_url:resp.final_url};
    if(startTime) {
      var endTime = new Date().getTime();
      var elapsed = Math.round((endTime - startTime)/10)/100 + ' s';
      msg.fetch_time = elapsed;
    } else {
      msg.message = 'rendered';
    }
    msg.tag_count = resp.metas ? resp.metas.length + ' tags' :'';
    updateStatus(msg);

    // fillInTwitter();
    // fillInFacebook();
    fillInCard('twitter');
    fillInCard('facebook');
    fillInCard('slack');

    var services = Object.keys(elementsTagMapping);
    for(var i=0;i<services.length;i++){
      fillInCard(services[i]);
    }

    if(isChecked('#raw')) {
      $('.meta').show();
    }
    
  }

  function setTitle(title) {
    document.title = 'preview.as: ' + title;
  }

  $('.js-ajax').submit(function(e){
    e.preventDefault();
    var url = $('#url').val();
    if(isValidHttpUrl(url)){
      setQueryStringParameter('url',url);
      setTitle(url);
    }

    var tooLong = window.setTimeout(function(){
      updateStatus({message: 'hold tight...',final_url:url});
    },10000);

    var startTime = new Date().getTime();

    updateStatus({message: 'fetching',final_url:url});
    $('.preview').hide();
    $('.meta').hide();

    // indicate loading
    // hide anything existing
    var uri = 'https://fetch-meta-tags.glitch.me/?url='+url;
    $.get(uri).then(function(resp){
      window.clearTimeout(tooLong);
      processJSON(resp,startTime);
    });
  });

 

});
console.log('hi');