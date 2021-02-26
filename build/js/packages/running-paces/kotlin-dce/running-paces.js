(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-react-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-react-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'running-paces'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'running-paces'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'running-paces'.");
    }root['running-paces'] = factory(typeof this['running-paces'] === 'undefined' ? {} : this['running-paces'], kotlin, this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-react-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_react_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyleSheet;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var Unit = Kotlin.kotlin.Unit;
  var margin = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getKClass = Kotlin.getKClass;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var throwCCE = Kotlin.throwCCE;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  WelcomeStyles.prototype = Object.create(StyleSheet.prototype);
  WelcomeStyles.prototype.constructor = WelcomeStyles;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  function WelcomeStyles() {
    WelcomeStyles_instance = this;
    StyleSheet.call(this, 'WelcomeStyles', true);
    this.textContainer_felub4$_0 = this.css_wopuc9$([], WelcomeStyles$textContainer$lambda);
    this.textInput_7s4gnt$_0 = this.css_wopuc9$([], WelcomeStyles$textInput$lambda);
  }
  var WelcomeStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  Object.defineProperty(WelcomeStyles.prototype, 'textContainer', {configurable: true, get: function () {
    return this.textContainer_felub4$_0.getValue_n5byny$(this, WelcomeStyles$textContainer_metadata);
  }});
  var WelcomeStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(WelcomeStyles.prototype, 'textInput', {configurable: true, get: function () {
    return this.textInput_7s4gnt$_0.getValue_n5byny$(this, WelcomeStyles$textInput_metadata);
  }});
  function WelcomeStyles$textContainer$lambda($receiver) {
    padding($receiver, get_px(5));
    set_backgroundColor($receiver, rgb(8, 97, 22));
    set_color($receiver, rgb(56, 246, 137));
    return Unit;
  }
  function WelcomeStyles$textInput$lambda($receiver) {
    margin($receiver, get_px(5));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  WelcomeStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'WelcomeStyles', interfaces: [StyleSheet]};
  var WelcomeStyles_instance = null;
  function WelcomeStyles_getInstance() {
    if (WelcomeStyles_instance === null) {
      new WelcomeStyles();
    }return WelcomeStyles_instance;
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
    $receiver.child_ssazr1$(getKClass(Welcome), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
    return function (it) {
      return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
    };
  }
  function WelcomeState(name) {
    this.name = name;
  }
  WelcomeState.$metadata$ = {kind: Kind_CLASS, simpleName: 'WelcomeState', interfaces: []};
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
  function Welcome(props) {
    RComponent_init(props, this);
    this.state = new WelcomeState(props.name);
  }
  function Welcome$render$lambda$lambda$lambda(this$Welcome) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = new WelcomeState((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$Welcome.setState(tmp$_0);
      return Unit;
    };
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textContainer);
    $receiver_0.unaryPlus_pdl1vz$('Hello, ' + this.state.name);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    $receiver_0_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textInput);
    var $receiver_1 = $receiver_0_0.attrs;
    $receiver_1.type = InputType.text;
    $receiver_1.value = this.state.name;
    set_onChangeFunction($receiver_1, Welcome$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
  };
  Welcome.$metadata$ = {kind: Kind_CLASS, simpleName: 'Welcome', interfaces: [RComponent]};
  Object.defineProperty(_, 'WelcomeStyles', {get: WelcomeStyles_getInstance});
  _.main = main;
  _.WelcomeState = WelcomeState;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.Welcome = Welcome;
  main();
  return _;
}));

//# sourceMappingURL=running-paces.js.map
