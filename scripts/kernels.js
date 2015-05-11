;(function(d3, moment){
  "use strict";

  var _actions = {},
    _context = {},
    _features = {},
    _environments = {},
    _kernels = {},
    _metrics = {},
    _search = "",
    _sorts = {
      features: {
        name: "Features",
        icon: "fa:plus-circle",
        get: function(k){ return d3.keys(k.features).length; }
      },
      name: {
        name: "Name",
        icon: "fa:archive",
        get: function(k){ return k.name.toLowerCase(); }
      },
      environment: {
        name: "Language",
        icon: "fa:language",
        get: function(k){
          return (d3.entries(k.environments || {"env:N/A": 1}))[0].key;
        }
      },
      updated: {
        name: "Updated",
        icon: "fa:heartbeat",
        get: function(k){
          return +moment((k.metrics || {})["gh:updated"] || 1);
        }
      },
      popularity: {
        name: "Starred",
        icon: "fa:star",
        get: function(k){
          return (k.metrics || {})["gh:stargazers"] || 0;
        }
      }
    },
    _modes = {
      cell: {
        name: "Cell",
        icon: "fa:th"
      },
      card: {
        name: "Card",
        icon: "fa:th-large"
      },
      list: {
        name: "List",
        icon: "fa:list"
      }
    },
    _mode = _modes.card,
    _sort = _sorts.popularity,
    _sortDir = "descending";


  var header = d3.select("header"),
    brand = header.select(".brand"),
    brandLogo = header.select(".brand-logo"),
    leader = header.select(".leader"),
    kernelCount = leader.select(".kernel-count"),
    searchKernels = header.select(".search-kernels"),
    sorts = header.select(".kernel-sorts").classed({
        "btn-group": 1,
        "btn-group-justified": 1
      })
      .attr({role: "group"}),
    modes = header.select(".view-modes").classed({
        "btn-group": 1,
        "btn-group-justified": 1
      })
      .attr({role: "group"}),
    features = header.select(".features"),
    kernels = d3.select(".kernels"),
    body = d3.select("body"),
    masthead = d3.select(".masthead");

  var WATERSHED = +masthead.node().clientHeight;

  function watershedClasses(watershed, pre, post){
    var clses = {};
    clses[pre] = watershed;
    clses[post] = !clses[pre];
    return clses;
  }


  function scroll(){
    var ws = window.scrollY < WATERSHED;
    body.classed(watershedClasses(ws, "pre-watershed", "post-watershed"));

    kernels.style({
      "margin-top": ws ? 0 : header.node().clientHeight + "px"
    });
  }


  function updateUI(){
    searchKernels
      .on("input", function(){
        _search = searchKernels.property("value");
        update();
      });

    var sort = sorts.selectAll("a")
      .data(d3.entries(_sorts));

    sort.enter()
      .append("a")
      .classed({btn: 1})
      .call(function(sort){
        sort.append("i")
          .attr({"class": function(d){
            return d.value.icon.replace(":", "-");
          }})
          .classed({fa: 1});

        sort.append("i").classed({fa: 1, direction: 1});

        sort.append("div")
          .text(function(d){ return d.value.name; });

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
      .select(".direction")
      .classed({
        "fa-arrow-up": isActiveSort("ascending"),
        "fa-arrow-down": isActiveSort("descending")
      });

    var mode = modes.selectAll(".mode")
      .data(d3.entries(_modes));

    mode.enter().append("a")
      .classed({btn: 1, mode: 1})
      .on("click", function(d){
        _mode = d.value;
        updateUI();
        update();
      }).call(function(mode){
        mode.append("i")
          .attr({
            "class": function(d){
              return d.value.icon.replace(":", "-");
            }
          })
          .classed({fa: 1, "fa-fw": 1});

        mode.append("div")
          .text(function(d){ return d.value.name; })
      });

    mode.classed({
      "btn-primary": function(d){ return d.value === _mode; }
    });
  }

  function isActiveSort(direction){
    return function(d){
      return d.value === _sort &&
        (!direction || _sortDir === direction);
    };
  }

  function dataLoaded(err, data){
    _actions = data.actions;
    _context = data["@context"];
    _features = data.features;
    _kernels = data.kernels;
    _metrics = data.metrics;
    _environments = data.environments;
    update();
    scroll();
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
    // belongs in UI, but driven off data
    var feature = features
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

    searchKernels.attr({
      placeholder: d3.keys(_environments).length + " languages & environments"
    });

    feature.selectAll("div")
      .data(function(d){ return [d]; })
      .enter()
      .append("div")
      .text(function(d){ return d.value.name; });

    var kernelData = d3.entries(_kernels)
        .filter(filterKernels())
        .sort(sortKernels),
      columnData = stackKernels(kernelData);

    kernelCount
      .transition()
      .text(kernelData.length);

    var column = kernels.selectAll(".kernel-col")
      .data(columnData);

    column.exit().remove();
    column.enter().append("div");
    column.attr("class", function(d){
      return "kernel-col col-md-" + (12 / columnData.length);
    });

    var kernel = column
      .selectAll(".kernel")
      .data(Object, function(d){ return d.key; });

    kernel.exit().transition()
      .delay(function(d, i){ return i * 10; })
      .style({"margin-top": "-100px"})
      .remove();

    kernel.enter().append("div")
      .classed({kernel: 1})
      .style({"top": "-100px"})
      .call(enterKernel)
      .transition()
      .ease(d3.ease("sin"))
      .style({"top": "36px"});

    kernel.call(updateKernel);

    kernel.order();
  }

  function stackKernels(kernels){
    var width = body.node().clientWidth,
      columnCount = (width < 990 || _mode === _modes.list) ? 1 : 3,
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
            (searchEnvironments(bit, d.value.environments));
        }, 0);
      return searchHit && featureHit;
    };
  }

  function searchEnvironments(q, environments){
    return d3.entries(environments).reduce(function(hit, d){
      return hit + (_environments[d.key].name.toLowerCase().indexOf(q) !== -1);
    }, 0);
  }

  function updateActions(selection){
    var action = selection.append("p")
      .classed({actions: 1})
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
        action: 1,
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
    selection.each(function(){ $(this).tooltip({
      container: "body",
      placement: "bottom"
    }); });
  }

  function updateKernel(kernel){
    kernel.style({"z-index": function(d, i){ return 999 - i; }});
    kernel.select(".detail")
      .classed({
        hide: function(d){
          return !(d.value.expanded || (_mode !== _modes.cell));
        }
      });

    var bodyClasses = d3.entries(_modes)
      .reduce(function(memo, mode){
        memo["mode-" + mode.key] = _mode === mode.value;
        return memo;
      }, {});

    console.log(bodyClasses);

    body.classed(bodyClasses);
  }

  function enterKernel(kernel){
    kernel.style({"z-index": function(d, i){ return 999 - i; }});
    var card = kernel.append("div")
        .classed({card: 1});

    var body = card.append("div")
        .classed({"card-body": 1});

    body.append("div")
      .classed({logo: 1})
      .append("img")
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

    var lang = body
      .append("div")
      .classed({environments: 1})
      .selectAll(".environment")
      .data(function(d){ return d3.entries(d.value.environments || {}); })
      .enter()
      .append("div")
      .classed({environment: 1});

    lang.append("a")
      .text(function(d){
        return _environments[d.key].name;
      })
      .attr({href: function(d){ return  _environments[d.key].url; }});

    lang.selectAll(".version")
      .data(function(d){ return d.value.versions; })
      .enter()
      .append("span")
      .classed({version: 1, "text-muted": 1})
      .text(String);

    var metric = body
      .append("div")
      .classed({metrics: 1})
      .selectAll(".metric")
      .data(function(d){
        return !d.value.metrics ? [] : d3.entries(_metrics)
          .map(function(metric){
            return {metric: metric, kernel: d};
          });
      })
      .enter()
      .append("span")
      .classed({metric: 1});

    metric.append("i")
      .attr({"class": function(d){ return d.metric.value.icon.replace(":", "-"); }})
      .classed({fa: 1, "fa-fw": 1, "text-muted": 1})

    metric.append("span")
      .text(function(d){
        var val = d.kernel.value.metrics[d.metric.key];
        if(d.metric.key === "gh:updated"){
          val = moment(val).fromNow();
        }
        return val;
      });


    var detail = body.append("div")
      .classed({
        detail: 1
      });

    updateFeatures(detail)
      .classed({"text-muted": 1});

    detail.append("div")
      .classed({description: 1})
      .text(function(d){ return d.value.description; });

    detail.call(updateActions);

    var reveal = body.append("button")
      .classed({
        btn: 1,
        "btn-sm": 1,
        "reveal-card": 1,
        "pull-right": 1
      })
      .on("click", function(d){
        d.value.expanded = !d.value.expanded;
        update();
      });

    reveal.append("i")
      .classed({fa: 1, "fa-ellipsis-h": 1, "fa-2x": 1, "text-muted": 1});
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

  // finally, do some stuff
  d3.json("./kernels.json", dataLoaded);

  updateUI();
  scroll();

  d3.select(window)
    .on("resize", update)
    .on("scroll", scroll);

}).call(this, d3, moment);
