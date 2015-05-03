;(function(d3){
  var _actions = {},
    _context = {};
    _features = {},
    _languages = {},
    _kernels = {};

  d3.json("./kernels.json", kernelsLoaded);


  function kernelsLoaded(err, data){
    _actions = data.actions;
    _context = data["@context"];
    _features = data.features;
    _kernels = data.kernels;
    _languages = data.languages;

    update();
  }

  function updateFeatures(selector){


    var features = selector.append("div")
      .classed({"feature-container": 1})
      .append("div")
      .classed({
        features: 1,
        "btn-group-sm": 1
      });

    features.selectAll(".feature")
      .data(function(d){
        return d3.entries(d.value.features);
      })
      .call(updateFeature);
  }

  function updateFeature(selection){
    selection
      .enter()
      .append("span")
      .classed({btn: 1, feature: 1})
      .append("i")
      .attr({
        "class": function(d){
          var cls = [_features[d.key].icon.replace(":", "-")];
          if($.type(d.value) === "string"){
            cls.push("text-" + d.value.split(":")[1]);
          }
          return cls.join(" ");
        },
        title: function(d){ return _features[d.key].name; }
        })
      .classed({fa: 1, "fa-fw": 1, "fa-2x": 1});
  }

  function update(){
    d3.select(".features")
      .selectAll(".feature")
      .data(d3.entries(_features))
      .call(updateFeature)
      .classed({"col-md-3": 1})
      .append("label")
      .text(function(d){ return d.value.name; });

    var sortedKernels = d3.entries(_kernels)
      .sort(function(a, b){
        return d3.descending(
          Object.keys(a.value.features || {}).length,
          Object.keys(b.value.features || {}).length
        ) || d3.ascending(a.key, b.key);
      });
    d3.select(".kernels")
      .classed({row: 1})
      .selectAll(".kernel")
      .data(sortedKernels)
      .call(function(kernel){
        kernel = kernel.enter()
          .append("div")
          .classed({kernel: 1, "col-md-4": 1});

        var panel = kernel.append("div")
            .classed({panel: 1, "panel-default": 1});

        var body = panel.append("div")
            .classed({"panel-body": 1});

        var title = body.append("h2")
          .classed({title: 1});

        title.append("img")
          .classed({"pull-right": 1})
          .attr("src", function(d){
            return d.value.logo;
          });


        title.append("span")
          .text(function(d){ return d.value.name; });

        title.append("span")
          .classed({version: 1, "text-muted": 1, "text-sm": 1})
          .text(function(d){ return d.value.version; });


        var lang = body.append("div")
          .selectAll(".language")
          .data(function(d){ return d3.entries(d.value.languages); })
          .enter()
          .append("div")
          .classed({language: 1});

        lang.append("a")
          .text(function(d){
            return _languages[d.key].name;
          })
          .attr({href: function(d){ return  _languages[d.key].url; }})

        lang.selectAll("label")
          .data(function(d){ return d.value.versions; })
          .enter()
          .append("label")
          .classed({label: 1, "label-info": 1})
          .text(String);

        updateFeatures(body);


        body.append("p")
          .text(function(d){ return d.value.description; });


        var footer = panel.append("div")
          .classed({"panel-footer": 1})
          .append("div")
          .classed({"btn-group": 1, "btn-group-justified": 1});

        var action = footer.selectAll(".action")
          .data(function(kernel){
            return d3.entries(kernel.value.actions || {})
              .map(function(action){
                return {action: _actions[action.key], value: action.value};
              });
          })
          .enter()
          .append("a")
          .classed({btn: 1})
          .attr({
            href: function(d){ return expandUri(d.value); },
            title: function(d){ return d.action.name; }
          });

        action.filter(function(d){ return d.action.icon; })
          .append("i")
          .attr("class", function(d){
            return d.action.icon.replace(":", "-");
          })
          .classed({fa: 1, "fa-2x": 1});

        action.filter(function(d){ return d.action.image; })
          .append("img")
          .attr({
            src: function(d){ return d.action.image; },
            width: 40
          });
      });
  }

  function expandUri(uri){
    // helper function for expanding a JSON-LD URI with namespaces
    if(uri in _context){
      return _context[uri];
    } else if(uri.match(/^http?s:\/\//)){
      return uri;
    } else {
      var bits = uri.split(":", 2);
      return expandUri(bits[0]) + bits[1];
    }
  }

}).call(this, d3);
