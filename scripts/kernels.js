;(function(d3){
  var _actions = {},
    _context = {};
    _features = {},
    _languages = {},
    _kernels = {},
    _search = "",
    _sorts = {
      features: {
        name: "Features",
        get: function(k){ return d3.keys(k.features).length; }
      },
      name: {
        name: "Name",
        get: function(k){ return k.name.toLowerCase(); }
      },
      language: {
        name: "Language",
        get: function(k){
          return (d3.entries(k.languages || {"lang:zzz": 1}))[0].key;
        }
      },
      // TODO: decide how to get date...
      updated: {
        name: "Updated",
        get: function(k){
          return k.name;
        }
      }
    },
    _sort = _sorts.features,
    _sortDir = "descending";


  d3.json("./kernels.json", kernelsLoaded);

  updateUI();
  
  d3.select(window).on("resize", update);


  function updateUI(){
    var searchKernels = d3.select(".search-kernels")
      .on("input", function(){
        _search = searchKernels.property("value");
        update();
      });

    var sort = d3.select(".kernel-sorts")
      .classed({"btn-group": 1, "btn-group-justified": 1})
      .attr({role: "group"})
      .selectAll("a")
      .data(d3.entries(_sorts));

    sort.enter()
      .append("a")
      .classed({btn: 1})
      .call(function(sort){
        sort.append("i").classed({fa: 1});
        sort.append("span").text(function(d){ return d.value.name; })

        sort.on("click", function(d){
          if(_sort === d.value){
            _sortDir = _sortDir === "ascending" ? "descending": "ascending";
          }

          _sort = d.value;

          updateUI();
          update();
        });
    });

    sort
      .classed({
        "btn-primary": isActiveSort()
      })
      .select("i")
      .classed({
        "fa-arrow-up": isActiveSort("ascending"),
        "fa-arrow-down": isActiveSort("descending")
      });
  }
  
  function isActiveSort(direction){
    return function(d){
      return d.value === _sort && (!direction || _sortDir === direction);
    };
  }

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
        features: 1
      });

    var feature = features.selectAll(".feature")
      .data(function(d){ return d.value.features || []; })
      .call(updateFeature);

    return feature;
  }


  function updateFeature(selection){
    var feature = selection
      .enter()
      .append("span")
      .classed({feature: 1})
      .attr({title: function(d){ return _features[d.key || d].description; }})
      .call(tooltip);
    
    feature.append("i")
      .attr({
        "class": function(d){
          return _features[d.key || d].icon.replace(":", "-");
        },
        title: function(d){ return _features[d.key || d].name; }
        })
      .classed({fa: 1, "fa-fw": 1});
  }

  function sortKernels(a, b){
    return d3[_sortDir](_sort.get(a.value), _sort.get(b.value)) ||
      // default sort
      d3.ascending(_sorts.name.get(a.value), _sorts.name.get(b.value));
  }

  function update(){
    var feature = d3.select(".features")
      .classed({"btn-group": 1, "btn-group-justified": 1})
      .selectAll(".feature")
      .data(d3.entries(_features))
      .call(updateFeature)
      .classed({
        btn: 1,
        "btn-primary": function(d){ return d.value.filtered; }
      })
      .on("click", function(d){
        d.value.filtered = !d.value.filtered;
        updateUI();
        update();
      });
    
    feature.selectAll("span")
      .data(function(d){ return [d]; })
      .enter()
      .append("span")
      .text(function(d){ return d.value.name; });

    var kernelData = stackKernels(d3.entries(_kernels)
      .filter(filterKernels())
      .sort(sortKernels));

    var kernels = d3.select(".kernels");

    var column = kernels.selectAll(".kernel-col")
      .data(kernelData)
    
    column.exit().remove();
    column.enter().append("div");
    column.attr("class", function(d){
      return "kernel-col col-md-" + (12 / kernelData.length);
    });
    
    var kernel = column
      .selectAll(".kernel")
      .data(Object, function(d){ return d.key; });

    kernel.exit().remove();

    kernel.enter().append("div")
      .classed({kernel: 1})
      .call(updateKernel);

    kernel.order();
  }
  
  function stackKernels(kernels){
    var width = d3.select("body").node().clientWidth,
      columnCount = width < 990 ? 1 : 3,
      columnClasses = "kernel-col col-md-" + (12 / columnCount);
    
    return d3.range(columnCount).map(function(undef, col){
      return kernels.filter(function(kernel, ki){
        return ki % columnCount === col;
      });
    });
  }


  function filterKernels(){
    var searchBits = _search.toLowerCase().split(" "),
      features = d3.entries(_features)
        .filter(function(d){ return d.value.filtered; })
        .map(function(d){ return d.key; }),
      featureHit,
      searchHit;

    return function(d){
      var featureHit = !features.length || features.reduce(
        function(hit, feature){
          return hit && (d.value.features || []).indexOf(feature) !== -1;
        }, 1);

      var searchHit = !searchBits.length || searchBits.reduce(
        function(hit, bit){
          return hit +
            (d.value.name.toLowerCase().indexOf(bit) !== -1) +
            ((d.value.description || "").toLowerCase().indexOf(bit) !== -1) +
            (searchLanguages(bit, d.value.languages));
        }, 0);
      return searchHit && featureHit;
    };
  }

  function searchLanguages(q, languages){
    return d3.entries(languages).reduce(function(hit, d){
      return hit + (_languages[d.key].name.toLowerCase().indexOf(q) !== -1);
    }, 0);
  }
  
  function updateActions(selection){
    var action = selection.append("p")
      .classed({actions: 1, "pull-right": 1})
      .selectAll(".action")
      .data(function(kernel){
        return d3.entries(kernel.value.actions || {})
          .map(function(action){
            return {action: _actions[action.key], value: action.value};
          });
      })
      .enter()
      .append("a")
      .classed({
        btn: 1,
        "btn-fab": 1,
        "btn-raised": 1,
        "btn-primary": 1
      })
      .attr({
        href: function(d){ return expandUri(d.value); },
        title: function(d){ return d.action.name; }
      })
      .call(tooltip);

    action.filter(function(d){ return d.action.icon; })
      .append("i")
      .attr("class", function(d){
        return d.action.icon.replace(":", "-");
      })
      .classed({fa: 1});

    action.filter(function(d){ return d.action.image; })
      .append("img")
      .attr({
        src: function(d){ return d.action.image; },
        width: 40
      });
  }
  
  function tooltip(selection){
    selection.each(function(){ $(this).tooltip({container: "body"}); });
  }

  function updateKernel(kernel){
    var panel = kernel.append("div")
        .classed({panel: 1, "panel-default": 1});

    var body = panel.append("div")
        .classed({"panel-body": 1});

    body.append("img")
      .classed({"pull-right": 1})
      .attr("src", function(d){
        return d.value.logo;
      });

    var title = body.append("h2")
      .classed({title: 1});

    title.append("a")
      .text(function(d){ return d.value.name; })
      .attr({href: function(d){ return d.value.url; }});

    title
      .filter(function(d){ return d.value.version; })
      .append("span")
      .classed({version: 1, "text-muted": 1})
      .text(function(d){ return d.value.version; });

    var lang = body.filter(function(d){ return d.value.languages; })
      .append("div")
      .selectAll(".language")
      .data(function(d){ return d3.entries(d.value.languages); })
      .enter()
      .append("div")
      .classed({language: 1});

    lang.append("a")
      .text(function(d){
        return _languages[d.key].name;
      })
      .attr({href: function(d){ return  _languages[d.key].url; }});

    lang.selectAll(".version")
      .data(function(d){ return d.value.versions; })
      .enter()
      .append("span")
      .classed({version: 1, "text-muted": 1})
      .text(String);

    updateFeatures(body)
      .classed({"text-muted": 1});

    body.append("p")
      .text(function(d){ return d.value.description; });
    
    body.call(updateActions);
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
