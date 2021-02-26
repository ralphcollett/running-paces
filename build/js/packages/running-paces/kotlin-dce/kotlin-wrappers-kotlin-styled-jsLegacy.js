(function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$styled_components, $module$react, $module$react_dom, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var invoke = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_dgimx$;
  var invoke_0 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_9p99ed$;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement;
  var throwCCE = Kotlin.throwCCE;
  var getOwnPropertyNames = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.getOwnPropertyNames_s8jyvk$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var lastIndexOf = Kotlin.kotlin.text.lastIndexOf_8eortd$;
  var CSSBuilder = $module$kotlin_css.kotlinx.css.CSSBuilder;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RElementBuilder;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var ensureNotNull = Kotlin.ensureNotNull;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledDOMBuilder.prototype = Object.create(RDOMBuilder.prototype);
  StyledDOMBuilder.prototype.constructor = StyledDOMBuilder;
  function StyleSheet(name, isStatic) {
    if (isStatic === void 0)
      isStatic = false;
    this.name = name;
    this.isStatic = isStatic;
    this.isLoaded_1mk3xi$_0 = false;
  }
  StyleSheet.prototype.dependsOn_tsq8y7$ = function (handler) {
    handler().inject();
  };
  StyleSheet.prototype.css_wopuc9$ = function (parents, builder) {
    return new CssHolder(this, parents.concat([builder]));
  };
  function StyleSheet$inject$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$it.second.ruleSets_8be2vx$;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var r = tmp$[tmp$_0];
        r($receiver);
      }
      return Unit;
    };
  }
  StyleSheet.prototype.inject = function () {
    if (!this.isLoaded_1mk3xi$_0 && this.isStatic) {
      this.isLoaded_1mk3xi$_0 = true;
      var $receiver = getOwnPropertyNames(this);
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (endsWith(element, '$_0'))
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (Kotlin.isType(this[element_0], CssHolder))
          destination_0.add_11rb$(element_0);
      }
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
      var tmp$_1;
      tmp$_1 = destination_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2;
        destination_1.add_11rb$(to(item, Kotlin.isType(tmp$_2 = this[item], CssHolder) ? tmp$_2 : throwCCE()));
      }
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault(destination_1, 10));
      var tmp$_3;
      tmp$_3 = destination_1.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_2.add_11rb$(to(removeSuffix(item_0.first, '$_0'), item_0.second));
      }
      var destination_3 = ArrayList_init_0(collectionSizeOrDefault(destination_2, 10));
      var tmp$_4;
      tmp$_4 = destination_2.iterator();
      while (tmp$_4.hasNext()) {
        var item_1 = tmp$_4.next();
        var tmp$_5 = destination_3.add_11rb$;
        var $receiver_0 = item_1.first;
        var endIndex = lastIndexOf(item_1.first, 95);
        tmp$_5.call(destination_3, to($receiver_0.substring(0, endIndex), item_1.second));
      }
      var keys = destination_3;
      var $receiver_1 = new CSSBuilder(void 0, false);
      var tmp$_6;
      tmp$_6 = keys.iterator();
      while (tmp$_6.hasNext()) {
        var element_1 = tmp$_6.next();
        $receiver_1.invoke_32jdrg$('.' + this.name + '-' + element_1.first, StyleSheet$inject$lambda$lambda$lambda(element_1));
      }
      var builder = $receiver_1;
      injectGlobal(builder.toString());
    }};
  StyleSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleSheet', interfaces: []};
  function CssHolder(sheet, ruleSets) {
    this.sheet_0 = sheet;
    this.ruleSets_8be2vx$ = ruleSets;
  }
  function CssHolder$getValue$lambda(this$CssHolder, closure$property) {
    return function ($receiver) {
      if (this$CssHolder.sheet_0.isStatic) {
        $receiver.unaryPlus_pdl1vz$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        this$CssHolder.sheet_0.inject();
      }if (!this$CssHolder.sheet_0.isStatic || !$receiver.allowClasses) {
        $receiver.styleName.add_11rb$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        var $receiver_0 = this$CssHolder.ruleSets_8be2vx$;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          element($receiver);
        }
      }return Unit;
    };
  }
  CssHolder.prototype.getValue_n5byny$ = function (thisRef, property) {
    return CssHolder$getValue$lambda(this, property);
  };
  CssHolder.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssHolder', interfaces: []};
  function getClassName_0($receiver, property) {
    return $receiver.name + '-' + property.callableName;
  }
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
  function StyledDOMBuilder(factory) {
    RDOMBuilder.call(this, factory);
    this.type_redftz$_0 = this.attrs.tagName;
    this.css_en1qsi$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.type_redftz$_0;
  }});
  Object.defineProperty(StyledDOMBuilder.prototype, 'css', {configurable: true, get: function () {
    return this.css_en1qsi$_0;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.props, this.childList);
  };
  StyledDOMBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  var globalStylesCounter;
  function injectGlobal$lambda(closure$reactElement, closure$element) {
    return function (it) {
      render(closure$reactElement, closure$element);
      return Unit;
    };
  }
  function injectGlobal(string) {
    var tmp$, tmp$_0;
    var globalStyleComponent = invoke($module$styled_components.createGlobalStyle, string, []);
    var element = Kotlin.isType(tmp$ = ensureNotNull(window.document.body).appendChild(window.document.createElement('div')), Element) ? tmp$ : throwCCE();
    element.setAttribute('id', 'sc-global-style-' + (tmp$_0 = globalStylesCounter, globalStylesCounter = tmp$_0 + 1 | 0, tmp$_0));
    var $receiver = {};
    var reactElement = createElement(globalStyleComponent, $receiver);
    Promise.resolve(Unit).then(injectGlobal$lambda(reactElement, element));
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda(it) {
    return it._css;
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = invoke_0(rawStyled(type), [Styled$wrap$lambda$lambda]);
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_lnfw8r$ = function (type, css, props, children) {
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      var wrappedType = this.wrap_0(type);
      var styledProps = props;
      styledProps._css = css.toString();
      if (!css.classes.isEmpty()) {
        styledProps.className = joinToString(css.classes, ' ');
      }if (!css.styleName.isEmpty()) {
        styledProps['data-style'] = joinToString(css.styleName, ' ');
      }return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
    } else {
      if (!css.classes.isEmpty()) {
        props.className = joinToString(css.classes, ' ');
      }return createElement.apply(null, [type, props].concat(copyToArray(children)));
    }
  };
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  function rawStyled(target) {
    return $module$styled_components.default(target);
  }
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$styled.StyleSheet = StyleSheet;
  package$styled.CssHolder = CssHolder;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.injectGlobal_61zpoe$ = injectGlobal;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  globalStylesCounter = 0;
  return _;
}(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('styled-components'), require('react'), require('react-dom'), require('kotlinx-html-js')));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-jsLegacy.js.map
