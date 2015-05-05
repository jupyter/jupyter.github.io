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
          console.warn("Sort by Updated not yet supported");
          return k.name;
        }
      }
    },
    _sort = _sorts.features,
    _sortDir = "descending";


  d3.json("./kernels.json", kernelsLoaded);

  updateUI();


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
        })
    });

    sort.select("i")
      .classed({
        "fa-sort-asc": function(d){
          return d.value === _sort && _sortDir === "ascending";
        },
        "fa-sort-desc": function(d){
          return d.value === _sort && _sortDir === "descending";
        }
      })
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
        features: 1,
        "btn-group-sm": 1
      });

    features.selectAll(".feature")
      .data(function(d){
        return d3.entries(d.value.features);
      }, function(d){ return d.key; })
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

  function sortKernels(a, b){
    return d3[_sortDir](_sort.get(a.value), _sort.get(b.value)) ||
      // default sort
      d3.ascending(_sorts.name.get(a.value), _sorts.name.get(b.value));
  }

  function update(){
    d3.select(".features")
      .selectAll(".feature")
      .data(d3.entries(_features))
      .call(updateFeature)
      .classed({"col-md-3": 1})
      .attr({title: function(d){ return d.value.description; }})
      .each(function(){ $(this).tooltip(); })
      .selectAll("p")
      .data(function(d){ return [d]; })
      .enter()
      .append("p")
      .text(function(d){ return d.value.name; });

    var kernelData = d3.entries(_kernels)
      .filter(filterKernels())
      .sort(sortKernels);

    var kernel = d3.select(".kernels")
      .classed({row: 1})
      .selectAll(".kernel")
      .data(kernelData, function(d){ return d.key; });

    kernel.exit().remove();

    kernel.enter()
      .append("div")
      .classed({kernel: 1, "col-md-4": 1})
      .call(updateKernel);

    kernel.order();
  }

  function filterKernels(){
    var searchBits = _search.toLowerCase().split(" ");

    return function(d){
      if(!_search){
        return true;
      }
      return searchBits.reduce(function(hit, bit){
        return hit +
          (d.value.name.toLowerCase().indexOf(bit) !== -1) +
          ((d.value.description || "").toLowerCase().indexOf(bit) !== -1) +
          (searchLanguages(bit, d.value.languages));
      }, 0);
    }
  }

  function searchLanguages(q, languages){
    return d3.entries(languages).reduce(function(hit, d){
      return hit + (_languages[d.key].name.toLowerCase().indexOf(q) !== -1)
    }, 0);
  }

  function updateKernel(kernel){
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

    title.append("a")
      .text(function(d){ return d.value.name; })
      .attr({href: function(d){ return d.value.url; }});

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
