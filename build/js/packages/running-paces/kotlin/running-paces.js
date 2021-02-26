(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-react-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-react-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'running-paces'.");
    }root['running-paces'] = factory(typeof this['running-paces'] === 'undefined' ? {} : this['running-paces'], kotlin, this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-react-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_react_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyleSheet;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getKClass = Kotlin.getKClass;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var enumEncode = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var TH_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var TR_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var TD_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var THEAD_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
  var TBODY_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
  var TABLE_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  PaceMeasurement.prototype = Object.create(Enum.prototype);
  PaceMeasurement.prototype.constructor = PaceMeasurement;
  PacesStyles.prototype = Object.create(StyleSheet.prototype);
  PacesStyles.prototype.constructor = PacesStyles;
  Paces.prototype = Object.create(RComponent.prototype);
  Paces.prototype.constructor = Paces;
  function PaceMeasurement(name, ordinal, label, kmSpeedMultiplier) {
    Enum.call(this);
    this.label = label;
    this.kmSpeedMultiplier = kmSpeedMultiplier;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PaceMeasurement_initFields() {
    PaceMeasurement_initFields = function () {
    };
    PaceMeasurement$FOUR_HUNDRED_METRES_instance = new PaceMeasurement('FOUR_HUNDRED_METRES', 0, '400m', 0.4);
    PaceMeasurement$KM_instance = new PaceMeasurement('KM', 1, 'KM', 1.0);
    PaceMeasurement$MILE_instance = new PaceMeasurement('MILE', 2, 'Mile', 1.609);
    PaceMeasurement$FIVE_KM_instance = new PaceMeasurement('FIVE_KM', 3, '5KM', 5.0);
    PaceMeasurement$TEN_KM_instance = new PaceMeasurement('TEN_KM', 4, '10KM', 10.0);
    PaceMeasurement$TEN_MILES_instance = new PaceMeasurement('TEN_MILES', 5, '10 miles', 16.09);
    PaceMeasurement$HALF_MARATHON_instance = new PaceMeasurement('HALF_MARATHON', 6, 'Half Marathon', 21.0975);
    PaceMeasurement$MARATHON_instance = new PaceMeasurement('MARATHON', 7, 'Marathon', 42.195);
  }
  var PaceMeasurement$FOUR_HUNDRED_METRES_instance;
  function PaceMeasurement$FOUR_HUNDRED_METRES_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$FOUR_HUNDRED_METRES_instance;
  }
  var PaceMeasurement$KM_instance;
  function PaceMeasurement$KM_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$KM_instance;
  }
  var PaceMeasurement$MILE_instance;
  function PaceMeasurement$MILE_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$MILE_instance;
  }
  var PaceMeasurement$FIVE_KM_instance;
  function PaceMeasurement$FIVE_KM_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$FIVE_KM_instance;
  }
  var PaceMeasurement$TEN_KM_instance;
  function PaceMeasurement$TEN_KM_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$TEN_KM_instance;
  }
  var PaceMeasurement$TEN_MILES_instance;
  function PaceMeasurement$TEN_MILES_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$TEN_MILES_instance;
  }
  var PaceMeasurement$HALF_MARATHON_instance;
  function PaceMeasurement$HALF_MARATHON_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$HALF_MARATHON_instance;
  }
  var PaceMeasurement$MARATHON_instance;
  function PaceMeasurement$MARATHON_getInstance() {
    PaceMeasurement_initFields();
    return PaceMeasurement$MARATHON_instance;
  }
  PaceMeasurement.prototype.minutesAndSeconds_za3lpa$ = function (kmSpeedInSeconds) {
    var seconds = roundToInt(kmSpeedInSeconds * this.kmSpeedMultiplier);
    var minutes = seconds / 60 | 0;
    var hoursString = minutes > 60 ? (minutes / 60 | 0).toString() + ':' : '';
    var minutesString = padStart((seconds % 3600 / 60 | 0).toString(), 2, 48);
    var secondsString = padStart((seconds % 60).toString(), 2, 48);
    return hoursString + minutesString + ':' + secondsString;
  };
  PaceMeasurement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaceMeasurement',
    interfaces: [Enum]
  };
  function PaceMeasurement$values() {
    return [PaceMeasurement$FOUR_HUNDRED_METRES_getInstance(), PaceMeasurement$KM_getInstance(), PaceMeasurement$MILE_getInstance(), PaceMeasurement$FIVE_KM_getInstance(), PaceMeasurement$TEN_KM_getInstance(), PaceMeasurement$TEN_MILES_getInstance(), PaceMeasurement$HALF_MARATHON_getInstance(), PaceMeasurement$MARATHON_getInstance()];
  }
  PaceMeasurement.values = PaceMeasurement$values;
  function PaceMeasurement$valueOf(name) {
    switch (name) {
      case 'FOUR_HUNDRED_METRES':
        return PaceMeasurement$FOUR_HUNDRED_METRES_getInstance();
      case 'KM':
        return PaceMeasurement$KM_getInstance();
      case 'MILE':
        return PaceMeasurement$MILE_getInstance();
      case 'FIVE_KM':
        return PaceMeasurement$FIVE_KM_getInstance();
      case 'TEN_KM':
        return PaceMeasurement$TEN_KM_getInstance();
      case 'TEN_MILES':
        return PaceMeasurement$TEN_MILES_getInstance();
      case 'HALF_MARATHON':
        return PaceMeasurement$HALF_MARATHON_getInstance();
      case 'MARATHON':
        return PaceMeasurement$MARATHON_getInstance();
      default:throwISE('No enum constant PaceMeasurement.' + name);
    }
  }
  PaceMeasurement.valueOf_61zpoe$ = PaceMeasurement$valueOf;
  function PacesStyles() {
    PacesStyles_instance = this;
    StyleSheet.call(this, 'PacesStyles', true);
    this.tableWrapper_xi59d5$_0 = this.css_wopuc9$([], PacesStyles$tableWrapper$lambda);
  }
  var PacesStyles$tableWrapper_metadata = new PropertyMetadata('tableWrapper');
  Object.defineProperty(PacesStyles.prototype, 'tableWrapper', {
    configurable: true,
    get: function () {
      return this.tableWrapper_xi59d5$_0.getValue_n5byny$(this, PacesStyles$tableWrapper_metadata);
    }
  });
  function PacesStyles$tableWrapper$lambda($receiver) {
    return Unit;
  }
  PacesStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PacesStyles',
    interfaces: [StyleSheet]
  };
  var PacesStyles_instance = null;
  function PacesStyles_getInstance() {
    if (PacesStyles_instance === null) {
      new PacesStyles();
    }return PacesStyles_instance;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Kotlin/JS';
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs_slhiwc$(main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(Paces), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    require('bootstrap/dist/css/bootstrap.min.css');
    window.onload = main$lambda;
  }
  function th$lambda(closure$scope, closure$classes) {
    return function (it) {
      return new TH_init(attributesMapOf(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function thead$lambda(closure$classes) {
    return function (it) {
      return new THEAD_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function tbody$lambda(closure$classes) {
    return function (it) {
      return new TBODY_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function table$lambda(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf_0('class', closure$classes), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function WelcomeState(name) {
    this.name = name;
  }
  WelcomeState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WelcomeState',
    interfaces: []
  };
  WelcomeState.prototype.component1 = function () {
    return this.name;
  };
  WelcomeState.prototype.copy_61zpoe$ = function (name) {
    return new WelcomeState(name === void 0 ? this.name : name);
  };
  WelcomeState.prototype.toString = function () {
    return 'WelcomeState(name=' + Kotlin.toString(this.name) + ')';
  };
  WelcomeState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  WelcomeState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Paces(props) {
    RComponent_init(props, this);
    this.state = new WelcomeState(props.name);
  }
  Paces.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(PacesStyles_getInstance().tableWrapper);
    var $receiver_0_0 = new RDOMBuilder_init(table$lambda(null));
    set_classes($receiver_0_0.attrs, setOf('table table-striped'));
    var $receiver_0_1 = new RDOMBuilder_init(thead$lambda(null));
    set_classes($receiver_0_1.attrs, setOf('thead-light'));
    var $receiver_0_2 = new RDOMBuilder_init(tr$lambda(null));
    var $receiver_1 = PaceMeasurement$values();
    var destination = ArrayList_init($receiver_1.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_1.length; ++tmp$) {
      var item = $receiver_1[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_3 = new RDOMBuilder_init(th$lambda(null, null));
      $receiver_0_3.unaryPlus_pdl1vz$(item.label);
      tmp$_0.call(destination, $receiver_0_2.child_52psg1$($receiver_0_3.create()));
    }
    $receiver_0_1.child_52psg1$($receiver_0_2.create());
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_4 = new RDOMBuilder_init(tbody$lambda(null));
    for (var kmSeconds = 180; kmSeconds <= 360; kmSeconds += 1) {
      var $receiver_0_5 = new RDOMBuilder_init(tr$lambda(null));
      var $receiver_2 = PaceMeasurement$values();
      var destination_0 = ArrayList_init($receiver_2.length);
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_2.length; ++tmp$_1) {
        var item_0 = $receiver_2[tmp$_1];
        var tmp$_2 = destination_0.add_11rb$;
        var $receiver_0_6 = new RDOMBuilder_init(td$lambda(null));
        $receiver_0_6.unaryPlus_pdl1vz$(item_0.minutesAndSeconds_za3lpa$(kmSeconds));
        tmp$_2.call(destination_0, $receiver_0_5.child_52psg1$($receiver_0_6.create()));
      }
      $receiver_0_4.child_52psg1$($receiver_0_5.create());
    }
    $receiver_0_0.child_52psg1$($receiver_0_4.create());
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  Paces.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paces',
    interfaces: [RComponent]
  };
  Object.defineProperty(PaceMeasurement, 'FOUR_HUNDRED_METRES', {
    get: PaceMeasurement$FOUR_HUNDRED_METRES_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'KM', {
    get: PaceMeasurement$KM_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'MILE', {
    get: PaceMeasurement$MILE_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'FIVE_KM', {
    get: PaceMeasurement$FIVE_KM_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'TEN_KM', {
    get: PaceMeasurement$TEN_KM_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'TEN_MILES', {
    get: PaceMeasurement$TEN_MILES_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'HALF_MARATHON', {
    get: PaceMeasurement$HALF_MARATHON_getInstance
  });
  Object.defineProperty(PaceMeasurement, 'MARATHON', {
    get: PaceMeasurement$MARATHON_getInstance
  });
  _.PaceMeasurement = PaceMeasurement;
  Object.defineProperty(_, 'PacesStyles', {
    get: PacesStyles_getInstance
  });
  _.main = main;
  _.WelcomeState = WelcomeState;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.Paces = Paces;
  main();
  Kotlin.defineModule('running-paces', _);
  return _;
}));

//# sourceMappingURL=running-paces.js.map
