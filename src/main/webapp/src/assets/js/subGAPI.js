/* JS */
gapi.loaded_0( function( _ ){
  var window = this;
  var vf, Na, Pa, ib, sb, qb, Fb, Mb, Te;
  _.b = function( a ){return function(){return _.aa[ a ].apply( this, arguments );};};
  _._DumpException = function( a ){throw a;};
  _.aa = [];
  vf = 'function' == typeof Object.defineProperties ? Object.defineProperty : function( a,
                                                                                        c,
                                                                                        f
  ){a != Array.prototype && a != Object.prototype && ( a[ c ] = f.value );};
  Na = 'undefined' != typeof window && window === this
       ? this
       : 'undefined' != typeof window.global && null != window.global ? window.global : this;
  Pa = function(){
    Pa = function(){};
    Na.Symbol || ( Na.Symbol = ib );
  };
  ib = function(){
    var a = 0;
    return function( c ){return 'jscomp_symbol_' + ( c || '' ) + a++;};
  }();
  sb = function(){
    Pa();
    var a = Na.Symbol.iterator;
    a || ( a = Na.Symbol.iterator = Na.Symbol( 'iterator' ) );
    'function' != typeof Array.prototype[ a ] && vf( Array.prototype, a, {
      configurable: !0, writable: !0, value: function(){return qb( this );},
    } );
    sb = function(){};
  };
  qb = function( a ){
    var c = 0;
    return Fb( function(){return c < a.length ? {done: !1, value: a[ c++ ]} : {done: !0};} );
  };
  Fb = function( a ){
    sb();
    a = {next: a};
    a[ Na.Symbol.iterator ] = function(){return this;};
    return a;
  };
  _.PK = function( a ){
    sb();
    var c = a[ window.Symbol.iterator ];
    return c ? c.call( a ) : qb( a );
  };
  _.jb = 'function' == typeof Object.create ? Object.create : function( a ){
    var c = function(){};
    c.prototype = a;
    return new c;
  };
  if ( 'function' == typeof Object.setPrototypeOf ) {
    Mb = Object.setPrototypeOf;
  } else {
    var bc;
    a:{
      var cc = {a: !0}, wd = {};
      try {
        wd.__proto__ = cc;
        bc = wd.a;
        break a;
      } catch (a) {}
      bc = !1;
    }
    Mb = bc ? function( a, c ){
      a.__proto__ = c;
      if ( a.__proto__ !== c ) {
        throw new TypeError( a + ' is not extensible' );
      }
      return a;
    } : null;
  }
  _.fe = Mb;
  Te = function( a, c ){
    if ( c ) {
      var f = Na;
      a = a.split( '.' );
      for ( var g = 0; g < a.length - 1; g++ ) {
        var h = a[ g ];
        h in f || ( f[ h ] = {} );
        f = f[ h ];
      }
      a = a[ a.length - 1 ];
      g = f[ a ];
      c = c( g );
      c != g && null != c && vf( f, a, {configurable: !0, writable: !0, value: c} );
    }
  };
  Te( 'Array.prototype.find', function( a ){
    return a ? a : function( a, f ){
      a:{
        var c = this;
        c instanceof String && ( c = String( c ) );
        for ( var h = c.length, l = 0; l < h; l++ ) {
          var n = c[ l ];
          if ( a.call( f, n, l, c ) ) {
            a = n;
            break a;
          }
        }
        a = void 0;
      }
      return a;
    };
  } );
  var wf = function( a, c ){return Object.prototype.hasOwnProperty.call( a, c );};
  Te( 'WeakMap', function( a ){
    function c( a ){wf( a, g ) || vf( a, g, {value: {}} );}

    function f( a )
    {
      var f = Object[ a ];
      f && ( Object[ a ] = function( a ){
        c( a );
        return f( a );
      } );
    }

    if ( function(){
      if ( !a || !Object.seal ) {
        return !1;
      }
      try {
        var c = Object.seal( {} ), f = Object.seal( {} ), g = new a( [ [ c, 2 ], [ f, 3 ] ] );
        if ( 2 != g.get( c ) || 3 != g.get( f ) ) {
          return !1;
        }
        g[ 'delete' ]( c );
        g.set( f, 4 );
        return !g.has( c ) && 4 == g.get( f );
      } catch (v) {return !1;}
    }() ) {
      return a;
    }
    var g = '$jscomp_hidden_' + Math.random();
    f( 'freeze' );
    f( 'preventExtensions' );
    f( 'seal' );
    var h = 0, l = function( a ){
      this.El = ( h += Math.random() + 1 ).toString();
      if ( a ) {
        Pa();
        sb();
        a = _.PK( a );
        for ( var c; !( c = a.next() ).done; ) {
          c = c.value, this.set( c[ 0 ], c[ 1 ] );
        }
      }
    };
    l.prototype.set = function( a, f ){
      c( a );
      if ( !wf( a, g ) ) {
        throw Error( 'ua`' + a );
      }
      a[ g ][ this.El ] = f;
      return this;
    };
    l.prototype.get = function( a ){return wf( a, g ) ? a[ g ][ this.El ] : void 0;};
    l.prototype.has = function( a ){return wf( a, g ) && wf( a[ g ], this.El );};
    l.prototype[ 'delete' ] = function( a ){return wf( a, g ) && wf( a[ g ], this.El ) ? delete a[ g ][ this.El ] : !1;};
    return l;
  } );
  Te( 'Map', function( a ){
    if ( function(){
      if ( !a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal ) {
        return !1;
      }
      try {
        var c = Object.seal( {x: 4} ), f = new a( _.PK( [ [ c, 's' ] ] ) );
        if ( 's' != f.get( c ) || 1 != f.size || f.get( {x: 4} ) || f.set( {x: 4}, 't' ) != f || 2 != f.size ) {
          return !1;
        }
        var g = f.entries(), h = g.next();
        if ( h.done || h.value[ 0 ] != c || 's' != h.value[ 1 ] ) {
          return !1;
        }
        h = g.next();
        return h.done || 4 != h.value[ 0 ].x || 't' != h.value[ 1 ] || !g.next().done ? !1 : !0;
      } catch (A) {return !1;}
    }() ) {
      return a;
    }
    Pa();
    sb();
    var c = new window.WeakMap, f = function( a ){
      this.bw = {};
      this.p4 = l();
      this.size = 0;
      if ( a ) {
        a = _.PK( a );
        for ( var c; !( c = a.next() ).done; ) {
          c = c.value, this.set( c[ 0 ], c[ 1 ] );
        }
      }
    };
    f.prototype.set = function( a, c ){
      a = 0 === a ? 0 : a;
      var f = g( this, a );
      f.list || ( f.list = this.bw[ f.id ] = [] );
      f.DK ? f.DK.value = c : ( f.DK = {next: this.p4, qia: this.p4.qia, head: this.p4, key: a, value: c}, f.list.push(
        f.DK ), this.p4.qia.next = f.DK, this.p4.qia = f.DK, this.size++ );
      return this;
    };
    f.prototype[ 'delete' ] = function( a ){
      a = g( this, a );
      return a.DK && a.list
             ? ( a.list.splice( a.index,
                                1
        ), a.list.length || delete this.bw[ a.id ], a.DK.qia.next = a.DK.next, a.DK.next.qia = a.DK.qia, a.DK.head = null, this.size--, !0 )
             : !1;
    };
    f.prototype.clear = function(){
      this.bw = {};
      this.p4 = this.p4.qia = l();
      this.size = 0;
    };
    f.prototype.has = function( a ){return !!g( this, a ).DK;};
    f.prototype.get = function( a ){return ( a = g( this, a ).DK ) && a.value;};
    f.prototype.entries = function(){return h( this, function( a ){return [ a.key, a.value ];} );};
    f.prototype.keys = function(){return h( this, function( a ){return a.key;} );};
    f.prototype.values = function(){return h( this, function( a ){return a.value;} );};
    f.prototype.forEach = function( a, c ){
      for ( var f = this.entries(), g; !( g = f.next() ).done; ) {
        g = g.value, a.call( c, g[ 1 ], g[ 0 ], this );
      }
    };
    f.prototype[ window.Symbol.iterator ] = f.prototype.entries;
    var g = function( a, f ){
      var g = f && typeof f;
      'object' == g || 'function' == g ? c.has( f ) ? g = c.get( f ) : ( g = '' + ++n, c.set( f, g ) ) : g = 'p_' + f;
      var h = a.bw[ g ];
      if ( h && wf( a.bw, g ) ) {
        for ( a = 0; a < h.length; a++ ) {
          var l = h[ a ];
          if ( f !== f && l.key !== l.key || f === l.key ) {
            return {id: g, list: h, index: a, DK: l};
          }
        }
      }
      return {id: g, list: h, index: -1, DK: void 0};
    }, h = function( a, c ){
      var f = a.p4;
      return Fb( function(){
        if ( f ) {
          for ( ; f.head != a.p4; ) {
            f = f.qia;
          }
          for ( ; f.next != f.head; ) {
            return f = f.next, {done: !1, value: c( f )};
          }
          f = null;
        }
        return {done: !0, value: void 0};
      } );
    }, l = function(){
      var a = {};
      return a.qia = a.next = a.head = a;
    }, n = 0;
    return f;
  } );
  Te( 'Set', function( a ){
    if ( function(){
      if ( !a || 'function' != typeof a || !a.prototype.entries || 'function' != typeof Object.seal ) {
        return !1;
      }
      try {
        var c = Object.seal( {x: 4} ), g = new a( _.PK( [ c ] ) );
        if ( !g.has( c ) || 1 != g.size || g.add( c ) != g || 1 != g.size || g.add( {x: 4} ) != g || 2 != g.size ) {
          return !1;
        }
        var h = g.entries(), l = h.next();
        if ( l.done || l.value[ 0 ] != c || l.value[ 1 ] != c ) {
          return !1;
        }
        l = h.next();
        return l.done || l.value[ 0 ] == c || 4 != l.value[ 0 ].x || l.value[ 1 ] != l.value[ 0 ] ? !1 : h.next().done;
      } catch (n) {return !1;}
    }() ) {
      return a;
    }
    Pa();
    sb();
    var c = function( a ){
      this.Ka = new window.Map;
      if ( a ) {
        a = _.PK( a );
        for ( var c; !( c = a.next() ).done; ) {
          this.add( c.value );
        }
      }
      this.size = this.Ka.size;
    };
    c.prototype.add = function( a ){
      a = 0 === a ? 0 : a;
      this.Ka.set( a, a );
      this.size = this.Ka.size;
      return this;
    };
    c.prototype[ 'delete' ] = function( a ){
      a = this.Ka[ 'delete' ]( a );
      this.size = this.Ka.size;
      return a;
    };
    c.prototype.clear = function(){
      this.Ka.clear();
      this.size = 0;
    };
    c.prototype.has = function( a ){return this.Ka.has( a );};
    c.prototype.entries = function(){return this.Ka.entries();};
    c.prototype.values = function(){return this.Ka.values();};
    c.prototype.keys = c.prototype.values;
    c.prototype[ window.Symbol.iterator ] = c.prototype.values;
    c.prototype.forEach = function( a, c ){
      var f = this;
      this.Ka.forEach( function( g ){return a.call( c, g, g, f );} );
    };
    return c;
  } );
  Te( 'Number.isFinite', function( a ){
    return a ? a : function( a ){
      return 'number' !== typeof a ? !1 : !( 0, window.isNaN )( a ) && window.Infinity !== a && -window.Infinity !== a;
    };
  } );
  Te( 'Object.is',
      function( a ){return a ? a : function( a, f ){return a === f ? 0 !== a || 1 / a === 1 / f : a !== a && f !== f;};}
  );
  _.na = _.na || {};
  _.D = this;
  _.kf = function( a ){return void 0 !== a;};
  _.fa = function( a ){return 'string' == typeof a;};
  _.da = function( a ){
    var c = typeof a;
    if ( 'object' == c ) {
      if ( a ) {
        if ( a instanceof Array ) {
          return 'array';
        }
        if ( a instanceof Object ) {
          return c;
        }
        var f = Object.prototype.toString.call( a );
        if ( '[object Window]' == f ) {
          return 'object';
        }
        if ( '[object Array]' == f || 'number' == typeof a.length && 'undefined' != typeof a.splice && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
          'splice' ) ) {
          return 'array';
        }
        if ( '[object Function]' == f || 'undefined' != typeof a.call && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
          'call' ) ) {
          return 'function';
        }
      } else {
        return 'null';
      }
    } else if ( 'function' == c && 'undefined' == typeof a.call ) {
      return 'object';
    }
    return c;
  };
  _.ea = function( a ){return 'array' == _.da( a );};
  _.oa = 'closure_uid_' + ( 1E9 * Math.random() >>> 0 );
  _.pa = Date.now || function(){return +new Date;};
  _.Mu = function( a, c ){
    a = a.split( '.' );
    var f = _.D;
    a[ 0 ] in f || 'undefined' == typeof f.execScript || f.execScript( 'var ' + a[ 0 ] );
    for ( var g; a.length && ( g = a.shift() ); ) {
      !a.length && _.kf( c ) ? f[ g ] = c : f = f[ g ] && f[ g ] !== Object.prototype[ g ] ? f[ g ] : f[ g ] = {};
    }
  };
  _.J = function( a, c ){
    function f(){}

    f.prototype = c.prototype;
    a.T = c.prototype;
    a.prototype = new f;
    a.prototype.constructor = a;
    a.yc = function( a, f, l ){
      for ( var g = Array( arguments.length - 2 ), h = 2; h < arguments.length; h++ ) {
        g[ h - 2 ] = arguments[ h ];
      }
      return c.prototype[ f ].apply( a, g );
    };
  };
  _.L = window.osapi = window.osapi || {};
  window.___jsl = window.___jsl || {};
  ( window.___jsl.cd = window.___jsl.cd || [] ).push( {
                                                        gwidget: {parsetags: 'explicit'},
                                                        appsapi: {plus_one_service: '/plus/v1'},
                                                        csi: {rate: .01},
                                                        poshare: {hangoutContactPickerServer: 'https://plus.google.com'},
                                                        gappsutil: {
                                                          required_scopes: [
                                                            'https://www.googleapis.com/auth/plus.me',
                                                            'https://www.googleapis.com/auth/plus.people.recommended',
                                                          ], display_on_page_ready: !1,
                                                        },
                                                        appsutil: {
                                                          required_scopes: [
                                                            'https://www.googleapis.com/auth/plus.me',
                                                            'https://www.googleapis.com/auth/plus.people.recommended',
                                                          ], display_on_page_ready: !1,
                                                        },
                                                        'oauth-flow': {
                                                          authUrl: 'https://accounts.google.com/o/oauth2/auth',
                                                          proxyUrl: 'https://accounts.google.com/o/oauth2/postmessageRelay',
                                                          redirectUri: 'postmessage',
                                                        },
                                                        iframes: {
                                                          sharebox: {
                                                            params: {json: '&'},
                                                            url: ':socialhost:/:session_prefix:_/sharebox/dialog',
                                                          },
                                                          plus: {url: ':socialhost:/:session_prefix:_/widget/render/badge?usegapi=1'},
                                                          ':socialhost:': 'https://apis.google.com',
                                                          ':im_socialhost:': 'https://plus.googleapis.com',
                                                          domains_suggest: {url: 'https://domains.google.com/suggest/flow'},
                                                          card: {
                                                            params: {s: '#', userid: '&'},
                                                            url: ':socialhost:/:session_prefix:_/hovercard/internalcard',
                                                          },
                                                          ':signuphost:': 'https://plus.google.com',
                                                          ':gplus_url:': 'https://plus.google.com',
                                                          plusone: {url: ':socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1'},
                                                          plus_share: {url: ':socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1'},
                                                          plus_circle: {url: ':socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1'},
                                                          plus_followers: {url: ':socialhost:/_/im/_/widget/render/plus/followers?usegapi=1'},
                                                          configurator: {url: ':socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1'},
                                                          appcirclepicker: {url: ':socialhost:/:session_prefix:_/widget/render/appcirclepicker'},
                                                          page: {url: ':socialhost:/:session_prefix:_/widget/render/page?usegapi=1'},
                                                          person: {url: ':socialhost:/:session_prefix:_/widget/render/person?usegapi=1'},
                                                          community: {url: ':ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1'},
                                                          follow: {url: ':socialhost:/:session_prefix:_/widget/render/follow?usegapi=1'},
                                                          commentcount: {url: ':socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1'},
                                                          comments: {url: ':socialhost:/:session_prefix:_/widget/render/comments?usegapi=1'},
                                                          blogger: {url: ':socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1'},
                                                          youtube: {url: ':socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1'},
                                                          reportabuse: {url: ':socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1'},
                                                          additnow: {url: ':socialhost:/additnow/additnow.html'},
                                                          appfinder: {url: 'https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1'},
                                                          ':source:': '1p',
                                                        },
                                                        poclient: {update_session: 'google.updateSessionCallback'},
                                                        'googleapis.config': {
                                                          methods: {
                                                            'pos.plusones.list': !0,
                                                            'pos.plusones.get': !0,
                                                            'pos.plusones.insert': !0,
                                                            'pos.plusones.delete': !0,
                                                            'pos.plusones.getSignupState': !0,
                                                          },
                                                          versions: {pos: 'v1'},
                                                          rpc: '/rpc',
                                                          root: 'https://content.googleapis.com',
                                                          'root-1p': 'https://clients6.google.com',
                                                          useGapiForXd3: !0,
                                                          xd3: '/static/proxy.html',
                                                          developerKey: 'AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ',
                                                          auth: {useInterimAuth: !1},
                                                        },
                                                        report: {
                                                          apis: [
                                                            'iframes\\..*',
                                                            'gadgets\\..*',
                                                            'gapi\\.appcirclepicker\\..*',
                                                            'gapi\\.client\\..*',
                                                          ], rate: 1E-4,
                                                        },
                                                        client: {perApiBatch: !0},
                                                      } );

  window.___jsl = window.___jsl || {};
  ( window.___jsl.cd = window.___jsl.cd || [] ).push( {gwidget: {parsetags: 'onload'}, iframes: {':source:': '3p'}} );
  var pe, ia, la;
  _.qe = function( a ){return 'number' == typeof a;};
  _.gh = function(){};
  _.re = function( a ){
    var c = _.da( a );
    return 'array' == c || 'object' == c && 'number' == typeof a.length;
  };
  _.Vg = function( a ){
    var c = typeof a;
    return 'object' == c && null != a || 'function' == c;
  };
  _.vd = function( a ){return 'function' == _.da( a );};
  pe = 0;
  _.oe = function( a ){return a[ _.oa ] || ( a[ _.oa ] = ++pe );};
  ia = function( a, c, f ){return a.call.apply( a.bind, arguments );};
  la = function( a, c, f ){
    if ( !a ) {
      throw Error();
    }
    if ( 2 < arguments.length ) {
      var g = Array.prototype.slice.call( arguments, 2 );
      return function(){
        var f = Array.prototype.slice.call( arguments );
        Array.prototype.unshift.apply( f, g );
        return a.apply( c, f );
      };
    }
    return function(){return a.apply( c, arguments );};
  };
  _.H = function( a, c, f ){
    _.H = Function.prototype.bind && -1 != Function.prototype.bind.toString().
                                                    indexOf( 'native code' ) ? ia : la;
    return _.H.apply( null, arguments );
  };
  _.we = Array.prototype.indexOf ? function( a, c ){return Array.prototype.indexOf.call( a, c, void 0 );} : function( a,
                                                                                                                     c
  ){
    if ( _.fa( a ) ) {
      return _.fa( c ) && 1 == c.length ? a.indexOf( c, 0 ) : -1;
    }
    for ( var f = 0; f < a.length; f++ ) {
      if ( f in a && a[ f ] === c ) {
        return f;
      }
    }
    return -1;
  };
  _.Wf = Array.prototype.lastIndexOf
         ? function( a, c ){return Array.prototype.lastIndexOf.call( a, c, a.length - 1 );}
         : function( a, c ){
      var f = a.length - 1;
      0 > f && ( f = Math.max( 0, a.length + f ) );
      if ( _.fa( a ) ) {
        return _.fa( c ) && 1 == c.length ? a.lastIndexOf( c, f ) : -1;
      }
      for ( ; 0 <= f; f-- ) {
        if ( f in a && a[ f ] === c ) {
          return f;
        }
      }
      return -1;
    };
  _.Be = Array.prototype.forEach ? function( a, c, f ){Array.prototype.forEach.call( a, c, f );} : function( a, c, f ){
    for ( var g = a.length, h = _.fa( a ) ? a.split( '' ) : a, l = 0; l < g; l++ ) {
      l in h && c.call( f, h[ l ], l, a );
    }
  };
  _.Ce = Array.prototype.filter ? function( a, c ){return Array.prototype.filter.call( a, c, void 0 );} : function( a,
                                                                                                                   c
  ){
    for ( var f = a.length, g = [], h = 0, l = _.fa( a ) ? a.split( '' ) : a, n = 0; n < f; n++ ) {
      if ( n in l ) {
        var q = l[ n ];
        c.call( void 0, q, n, a ) && ( g[ h++ ] = q );
      }
    }
    return g;
  };
  _.De = Array.prototype.map ? function( a, c ){return Array.prototype.map.call( a, c, void 0 );} : function( a, c ){
    for ( var f = a.length, g = Array( f ), h = _.fa( a ) ? a.split( '' ) : a, l = 0; l < f; l++ ) {
      l in h && ( g[ l ] = c.call( void 0, h[ l ], l, a ) );
    }
    return g;
  };
  _.Ee = Array.prototype.some ? function( a, c, f ){return Array.prototype.some.call( a, c, f );} : function( a, c, f ){
    for ( var g = a.length, h = _.fa( a ) ? a.split( '' ) : a, l = 0; l < g; l++ ) {
      if ( l in h && c.call( f, h[ l ], l, a ) ) {
        return !0;
      }
    }
    return !1;
  };
  _.Fe = Array.prototype.every ? function( a, c, f ){return Array.prototype.every.call( a, c, f );} : function( a,
                                                                                                               c,
                                                                                                               f
  ){
    for ( var g = a.length, h = _.fa( a ) ? a.split( '' ) : a, l = 0; l < g; l++ ) {
      if ( l in h && !c.call( f, h[ l ], l, a ) ) {
        return !1;
      }
    }
    return !0;
  };
  _.ve = function( a, c ){return 0 <= ( 0, _.we )( a, c );};
  var lk;
  _.Ge = String.prototype.trim
         ? function( a ){return a.trim();}
         : function( a ){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec( a )[ 1 ];};
  _.Gf = String.prototype.repeat ? function( a, c ){return a.repeat( c );} : function( a, c ){
    return Array( c + 1 ).
      join( a );
  };
  _.rk = function( a, c ){
    var f = 0;
    a = ( 0, _.Ge )( String( a ) ).
      split( '.' );
    c = ( 0, _.Ge )( String( c ) ).
      split( '.' );
    for ( var g = Math.max( a.length, c.length ), h = 0; 0 == f && h < g; h++ ) {
      var l = a[ h ] || '', n = c[ h ] || '';
      do {
        l = /(\d*)(\D*)(.*)/.exec( l ) || [ '', '', '', '' ];
        n = /(\d*)(\D*)(.*)/.exec( n ) || [ '', '', '', '' ];
        if ( 0 == l[ 0 ].length && 0 == n[ 0 ].length ) {
          break;
        }
        f = lk( 0 == l[ 1 ].length ? 0 : ( 0, window.parseInt )( l[ 1 ], 10 ),
                0 == n[ 1 ].length ? 0 : ( 0, window.parseInt )( n[ 1 ], 10 )
        ) || lk( 0 == l[ 2 ].length, 0 == n[ 2 ].length ) || lk( l[ 2 ], n[ 2 ] );
        l = l[ 3 ];
        n = n[ 3 ];
      }
      while ( 0 == f );
    }
    return f;
  };
  lk = function( a, c ){return a < c ? -1 : a > c ? 1 : 0;};
  _.ne = 2147483648 * Math.random() | 0;
  a:{
    var Ed = _.D.navigator;
    if ( Ed ) {
      var Bf = Ed.userAgent;
      if ( Bf ) {
        _.We = Bf;
        break a;
      }
    }
    _.We = '';
  }
  _.pf = function( a ){return -1 != _.We.indexOf( a );};
  var tf;
  _.qf = function( a, c, f ){
    for ( var g in a ) {
      c.call( f, a[ g ], g, a );
    }
  };
  tf = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split( ' ' );
  _.sf = function( a, c ){
    for ( var f, g, h = 1; h < arguments.length; h++ ) {
      g = arguments[ h ];
      for ( f in g ) {
        a[ f ] = g[ f ];
      }
      for ( var l = 0; l < tf.length; l++ ) {
        f = tf[ l ], Object.prototype.hasOwnProperty.call( g, f ) && ( a[ f ] = g[ f ] );
      }
    }
  };
  _.$e = function(){return _.pf( 'Opera' );};
  _.B = function(){return _.pf( 'Trident' ) || _.pf( 'MSIE' );};
  _.ye = function(){return _.pf( 'Android' );};
  _.mZ = function(){return _.pf( 'iPhone' ) && !_.pf( 'iPod' ) && !_.pf( 'iPad' );};
  _.wk = function(){return _.mZ() || _.pf( 'iPad' ) || _.pf( 'iPod' );};
  var lh = function( a ){
    lh[ ' ' ]( a );
    return a;
  }, Oe;
  lh[ ' ' ] = _.gh;
  _.Eo = function( a, c ){
    try {return lh( a[ c ] ), !0;} catch (f) {}
    return !1;
  };
  Oe = function( a, c ){
    var f = Zk;
    return Object.prototype.hasOwnProperty.call( f, a ) ? f[ a ] : f[ a ] = c( a );
  };
  var Pe, Hm, Zk, Xg;
  _.cf = _.$e();
  _.W = _.B();
  _.yk = _.pf( 'Edge' );
  _.Vi = _.yk || _.W;
  _.df = _.pf( 'Gecko' ) && !( -1 != _.We.toLowerCase().
                                       indexOf( 'webkit' ) && !_.pf( 'Edge' ) ) && !( _.pf( 'Trident' ) || _.pf( 'MSIE' ) ) && !_.pf(
    'Edge' );
  _.ef = -1 != _.We.toLowerCase().
                 indexOf( 'webkit' ) && !_.pf( 'Edge' );
  _.ff = _.ef && _.pf( 'Mobile' );
  _.Gg = _.pf( 'Macintosh' );
  _.Im = _.pf( 'Windows' );
  _.Jg = _.pf( 'Linux' ) || _.pf( 'CrOS' );
  _.kO = _.ye();
  _.yO = _.mZ();
  _.WP = _.pf( 'iPad' );
  _.XQ = _.pf( 'iPod' );
  _.DU = _.wk();
  Pe = function(){
    var a = _.D.document;
    return a ? a.documentMode : void 0;
  };
  a:{
    var Mh = '', ci = function(){
      var a = _.We;
      if ( _.df ) {
        return /rv:([^\);]+)(\)|;)/.exec( a );
      }
      if ( _.yk ) {
        return /Edge\/([\d\.]+)/.exec( a );
      }
      if ( _.W ) {
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec( a );
      }
      if ( _.ef ) {
        return /WebKit\/(\S+)/.exec( a );
      }
      if ( _.cf ) {
        return /(?:Version)[ \/]?(\S+)/.exec( a );
      }
    }();
    ci && ( Mh = ci ? ci[ 1 ] : '' );
    if ( _.W ) {
      var sk = Pe();
      if ( null != sk && sk > ( 0, window.parseFloat )( Mh ) ) {
        Hm = String( sk );
        break a;
      }
    }
    Hm = Mh;
  }
  _.Se = Hm;
  Zk = {};
  _.sl = function( a ){return Oe( a, function(){return 0 <= _.rk( _.Se, a );} );};
  _.gq = function( a ){return Number( _.Ue ) >= a;};
  var Fn = _.D.document;
  Xg = Fn && _.W ? Pe() || ( 'CSS1Compat' == Fn.compatMode ? ( 0, window.parseInt )( _.Se, 10 ) : 5 ) : void 0;
  _.Ue = Xg;

  var Af, Ye, Xe, Re, Me, Le, Ze, Ke;
  _.d = function( a, c ){return _.aa[ a ] = c;};
  _.bj = function( a ){return Array.prototype.concat.apply( [], arguments );};
  _.ze = function( a ){
    var c = a.length;
    if ( 0 < c ) {
      for ( var f = Array( c ), g = 0; g < c; g++ ) {
        f[ g ] = a[ g ];
      }
      return f;
    }
    return [];
  };
  _.jd = function( a, c ){return 0 == a.lastIndexOf( c, 0 );};
  Ye = /&/g;
  Xe = /</g;
  Re = />/g;
  Me = /"/g;
  Le = /'/g;
  Ze = /\x00/g;
  Ke = /[\x00&<>"']/;
  _.He = function( a ){
    if ( !Ke.test( a ) ) {
      return a;
    }
    -1 != a.indexOf( '&' ) && ( a = a.replace( Ye, '&amp;' ) );
    -1 != a.indexOf( '<' ) && ( a = a.replace( Xe, '&lt;' ) );
    -1 != a.indexOf( '>' ) && ( a = a.replace( Re, '&gt;' ) );
    -1 != a.indexOf( '"' ) && ( a = a.replace( Me, '&quot;' ) );
    -1 != a.indexOf( '\'' ) && ( a = a.replace( Le, '&#39;' ) );
    -1 != a.indexOf( '\x00' ) && ( a = a.replace( Ze, '&#0;' ) );
    return a;
  };
  _.Cg = function( a ){
    return String( a ).
      replace( /\-([a-z])/g, function( a, f ){return f.toUpperCase();} );
  };
  _.hi = function( a, c ){
    for ( var f in a ) {
      if ( a[ f ] == c ) {
        return !0;
      }
    }
    return !1;
  };
  var Nf, Xo;
  Nf = !_.W || _.gq( 9 );
  Xo = !_.df && !_.W || _.W && _.gq( 9 ) || _.df && _.sl( '1.9.1' );
  _.ag = _.W && !_.sl( '9' );
  _.Zn = _.W || _.cf || _.ef;
  _.qm = _.W && !_.gq( 9 );
  _.g3 = function( a ){return function(){return a;};}( !0 );
  _.hq = function( a ){
    var c = !1, f;
    return function(){
      c || ( f = a(), c = !0 );
      return f;
    };
  };
  var Us, Kh;
  _.ou = function( a, c ){
    this.C5 = a === Kh && c || '';
    this.sda = Us;
  };
  _.ou.prototype.nK = !0;
  _.ou.prototype.cR = function(){return this.C5;};
  _.ou.prototype.toString = function(){return 'Const{' + this.C5 + '}';};
  _.ru = function( a ){return a instanceof _.ou && a.constructor === _.ou && a.sda === Us ? a.C5 : 'type_error:Const';};
  _.Nq = function( a ){return new _.ou( Kh, a );};
  Us = {};
  Kh = {};
  var WD;
  _.qE = function(){
    this.N8 = '';
    this.tda = WD;
  };
  _.qE.prototype.nK = !0;
  _.qE.prototype.cR = function(){return this.N8;};
  _.qE.prototype.mK = !0;
  _.qE.prototype.Im = function(){return 1;};
  _.wx = function( a ){
    if ( a instanceof _.qE && a.constructor === _.qE && a.tda === WD ) {
      return a.N8;
    }
    _.da( a );
    return 'type_error:TrustedResourceUrl';
  };
  _.nq = function( a ){return _.l_( _.ru( a ) );};
  WD = {};
  _.l_ = function( a ){
    var c = new _.qE;
    c.N8 = a;
    return c;
  };
  var vU, pu, hg;
  _.su = function(){
    this.d_ = '';
    this.rda = pu;
  };
  _.su.prototype.nK = !0;
  _.su.prototype.cR = function(){return this.d_;};
  _.su.prototype.mK = !0;
  _.su.prototype.Im = function(){return 1;};
  _.Ls = function( a ){
    if ( a instanceof _.su && a.constructor === _.su && a.rda === pu ) {
      return a.d_;
    }
    _.da( a );
    return 'type_error:SafeUrl';
  };
  vU = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  _.jw = function( a ){
    if ( a instanceof _.su ) {
      return a;
    }
    a = 'object' == typeof a && a.nK ? a.cR() : String( a );
    vU.test( a ) || ( a = 'about:invalid#zClosurez' );
    return hg( a );
  };
  _.Lm = function( a ){
    if ( a instanceof _.su ) {
      return a;
    }
    a = 'object' == typeof a && a.nK ? a.cR() : String( a );
    vU.test( a ) || ( a = 'about:invalid#zClosurez' );
    return hg( a );
  };
  pu = {};
  hg = function( a ){
    var c = new _.su;
    c.d_ = a;
    return c;
  };
  hg( 'about:blank' );
  _.pm = function(){
    this.M8 = '';
    this.qda = _.nm;
  };
  _.pm.prototype.nK = !0;
  _.nm = {};
  _.pm.prototype.cR = function(){return this.M8;};
  _.pm.prototype.XY = function( a ){
    this.M8 = a;
    return this;
  };
  _.rm = ( new _.pm ).XY( '' );
  _.xm = function(){
    this.L8 = '';
    this.pda = _.Bl;
  };
  _.xm.prototype.nK = !0;
  _.Bl = {};
  _.iM = function( a ){
    a = _.ru( a );
    return 0 === a.length ? ns : ( new _.xm ).XY( a );
  };
  _.xm.prototype.cR = function(){return this.L8;};
  _.xm.prototype.XY = function( a ){
    this.L8 = a;
    return this;
  };
  var ns = ( new _.xm ).XY( '' );
  var XM;
  _.NG = function(){
    this.d_ = '';
    this.oda = XM;
    this.Z$ = null;
  };
  _.NG.prototype.mK = !0;
  _.NG.prototype.Im = function(){return this.Z$;};
  _.NG.prototype.nK = !0;
  _.NG.prototype.cR = function(){return this.d_;};
  _.OG = function( a ){
    if ( a instanceof _.NG && a.constructor === _.NG && a.oda === XM ) {
      return a.d_;
    }
    _.da( a );
    return 'type_error:SafeHtml';
  };
  XM = {};
  _.uf = function( a, c ){return ( new _.NG ).XY( a, c );};
  _.NG.prototype.XY = function( a, c ){
    this.d_ = a;
    this.Z$ = c;
    return this;
  };
  _.uf( '<!DOCTYPE html>', 0 );
  _.RG = _.uf( '', 0 );
  _.Pp = _.uf( '<br>', 0 );
  _.Hq = _.hq( function(){
    var a = window.document.createElement( 'div' );
    a.innerHTML = '<div><div></div></div>';
    var c = a.firstChild.firstChild;
    a.innerHTML = '';
    return !c.parentElement;
  } );
  _.ht = function( a, c ){
    c = c instanceof _.su ? c : _.Lm( c );
    a.href = _.Ls( c );
  };
  var Ff, Of, pg;
  _.xf = function( a ){return a ? new _.yf( _.zf( a ) ) : Af || ( Af = new _.yf );};
  _.Ci = function( a, c ){return _.fa( c ) ? a.getElementById( c ) : c;};
  _.Cf = function( a, c, f, g ){
    a = g || a;
    c = c && '*' != c ? String( c ).
      toUpperCase() : '';
    if ( a.querySelectorAll && a.querySelector && ( c || f ) ) {
      return a.querySelectorAll( c + ( f ? '.' + f : '' ) );
    }
    if ( f && a.getElementsByClassName ) {
      a = a.getElementsByClassName( f );
      if ( c ) {
        g = {};
        for ( var h = 0, l = 0, n; n = a[ l ]; l++ ) {
          c == n.nodeName && ( g[ h++ ] = n );
        }
        g.length = h;
        return g;
      }
      return a;
    }
    a = a.getElementsByTagName( c || '*' );
    if ( f ) {
      g = {};
      for ( l = h = 0; n = a[ l ]; l++ ) {
        c = n.className, 'function' == typeof c.split && _.ve( c.split( /\s+/ ), f ) && ( g[ h++ ] = n );
      }
      g.length = h;
      return g;
    }
    return a;
  };
  _.Ef = function( a, c ){
    _.qf( c, function( c, g ){
      c && 'object' == typeof c && c.nK && ( c = c.cR() );
      'style' == g ? a.style.cssText = c : 'class' == g ? a.className = c : 'for' == g
                                                                            ? a.htmlFor = c
                                                                            : Ff.hasOwnProperty( g ) ? a.setAttribute(
          Ff[ g ],
          c
        ) : _.jd( g, 'aria-' ) || _.jd( g, 'data-' ) ? a.setAttribute( g, c ) : a[ g ] = c;
    } );
  };
  Ff = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    nonce: 'nonce',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width',
  };
  _.jg = function( a ){return a ? a.parentWindow || a.defaultView : window;};
  _.Mf = function( a, c ){
    var f = String( c[ 0 ] ), g = c[ 1 ];
    if ( !Nf && g && ( g.name || g.type ) ) {
      f = [ '<', f ];
      g.name && f.push( ' name="', _.He( g.name ), '"' );
      if ( g.type ) {
        f.push( ' type="', _.He( g.type ), '"' );
        var h = {};
        _.sf( h, g );
        delete h.type;
        g = h;
      }
      f.push( '>' );
      f = f.join( '' );
    }
    f = a.createElement( f );
    g && ( _.fa( g ) ? f.className = g : _.ea( g ) ? f.className = g.join( ' ' ) : _.Ef( f, g ) );
    2 < c.length && Of( a, f, c, 2 );
    return f;
  };
  Of = function( a, c, f, g ){
    function h( f ){f && c.appendChild( _.fa( f ) ? a.createTextNode( f ) : f );}

    for ( ; g < f.length; g++ ) {
      var l = f[ g ];
      !_.re( l ) || _.Vg( l ) && 0 < l.nodeType ? h( l ) : ( 0, _.Be )( pg( l ) ? _.ze( l ) : l, h );
    }
  };
  _.Br = function( a ){return window.document.createElement( String( a ) );};
  _.Qx = function( a ){
    if ( 1 != a.nodeType ) {
      return !1;
    }
    switch (a.tagName) {
      case 'APPLET':
      case 'AREA':
      case 'BASE':
      case 'BR':
      case 'COL':
      case 'COMMAND':
      case 'EMBED':
      case 'FRAME':
      case 'HR':
      case 'IMG':
      case 'INPUT':
      case 'IFRAME':
      case 'ISINDEX':
      case 'KEYGEN':
      case 'LINK':
      case 'NOFRAMES':
      case 'NOSCRIPT':
      case 'META':
      case 'OBJECT':
      case 'PARAM':
      case 'SCRIPT':
      case 'SOURCE':
      case 'STYLE':
      case 'TRACK':
      case 'WBR':
        return !1;
    }
    return !0;
  };
  _.xp = function( a, c ){Of( _.zf( a ), a, arguments, 1 );};
  _.Qf = function( a ){
    for ( var c; c = a.firstChild; ) {
      a.removeChild( c );
    }
  };
  _.Rf = function( a, c ){c.parentNode && c.parentNode.insertBefore( a, c );};
  _.Tf = function( a ){return a && a.parentNode ? a.parentNode.removeChild( a ) : null;};
  _.Uf = function( a ){
    var c, f = a.parentNode;
    if ( f && 11 != f.nodeType ) {
      if ( a.removeNode ) {
        return a.removeNode( !1 );
      }
      for ( ; c = a.firstChild; ) {
        f.insertBefore( c, a );
      }
      return _.Tf( a );
    }
  };
  _.SO = function( a ){
    return Xo && void 0 != a.children ? a.children : ( 0, _.Ce )( a.childNodes, function( a ){return 1 == a.nodeType;} );
  };
  _.iz = function( a ){return _.Vg( a ) && 1 == a.nodeType;};
  _.Yf = function( a, c ){
    if ( !a || !c ) {
      return !1;
    }
    if ( a.contains && 1 == c.nodeType ) {
      return a == c || a.contains( c );
    }
    if ( 'undefined' != typeof a.compareDocumentPosition ) {
      return a == c || !!( a.compareDocumentPosition( c ) & 16 );
    }
    for ( ; c && a != c; ) {
      c = c.parentNode;
    }
    return c == a;
  };
  _.zf = function( a ){return 9 == a.nodeType ? a : a.ownerDocument || a.document;};
  _.Zf = function( a, c ){
    if ( 'textContent' in a ) {
      a.textContent = c;
    } else if ( 3 == a.nodeType ) {
      a.data = String( c );
    } else if ( a.firstChild && 3 == a.firstChild.nodeType ) {
      for ( ; a.lastChild != a.firstChild; ) {
        a.removeChild( a.lastChild );
      }
      a.firstChild.data = String( c );
    } else {
      _.Qf( a ), a.appendChild( _.zf( a ).
                                  createTextNode( String( c ) ) );
    }
  };
  pg = function( a ){
    if ( a && 'number' == typeof a.length ) {
      if ( _.Vg( a ) ) {
        return 'function' == typeof a.item || 'string' == typeof a.item;
      }
      if ( _.vd( a ) ) {
        return 'function' == typeof a.item;
      }
    }
    return !1;
  };
  _.yf = function( a ){this.wc = a || _.D.document || window.document;};
  _.k = _.yf.prototype;
  _.k.Ha = _.xf;
  _.k.v5 = _.b( 0 );
  _.k.Wb = function(){return this.wc;};
  _.k.Kb = function( a ){return _.Ci( this.wc, a );};
  _.k.getElementsByTagName = function( a, c ){return ( c || this.wc ).getElementsByTagName( String( a ) );};
  _.k.R = function( a, c, f ){return _.Mf( this.wc, arguments );};
  _.k.createElement = function( a ){return this.wc.createElement( String( a ) );};
  _.k.createTextNode = function( a ){return this.wc.createTextNode( String( a ) );};
  _.k.Aa = function(){
    var a = this.wc;
    return a.parentWindow || a.defaultView;
  };
  _.k.appendChild = function( a, c ){a.appendChild( c );};
  _.k.append = _.xp;
  _.k.canHaveChildren = _.Qx;
  _.k.u0 = _.Qf;
  _.k.Sl = _.Rf;
  _.k.removeNode = _.Tf;
  _.k.Hp = _.Uf;
  _.k.NR = _.SO;
  _.k.isElement = _.iz;
  _.k.contains = _.Yf;
  _.k.kJ = _.b( 1 );
  /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  _.ta = window;
  _.ua = window.document;
  _.Ha = _.ta.location;
  _.Ia = /\[native code\]/;
  _.Ka = function( a, c, f ){return a[ c ] = a[ c ] || f;};
  _.r = function(){
    var a;
    if ( ( a = Object.create ) && _.Ia.test( a ) ) {
      a = a( null );
    } else {
      a = {};
      for ( var c in a ) {
        a[ c ] = void 0;
      }
    }
    return a;
  };
  _.Qa = function( a, c ){return Object.prototype.hasOwnProperty.call( a, c );};
  _.Sl = function( a, c ){
    a = a || {};
    for ( var f in a ) {
      _.Qa( a, f ) && ( c[ f ] = a[ f ] );
    }
  };
  _.Ua = _.Ka( _.ta, 'gapi', {} );
  _.e = function( a, c, f ){
    var g = new RegExp( '([#].*&|[#])' + c + '=([^&#]*)', 'g' );
    c = new RegExp( '([?#].*&|[?#])' + c + '=([^&#]*)', 'g' );
    if ( a = a && ( g.exec( a ) || c.exec( a ) ) ) {
      try {f = ( 0, window.decodeURIComponent )( a[ 2 ] );} catch (h) {}
    }
    return f;
  };
  _.Xa = new RegExp( /^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source );
  _.Za = new RegExp(
    /(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
    'g'
  );
  _.lc = new RegExp(
    /\/?\??#?/.source + '(' + /[\/?#]/i.source + '|' + /[\uD800-\uDBFF]/i.source + '|' + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + '|' + /%[0-9a-f]?/i.source + ')$',
    'i'
  );
  _.La = function( a, c, f ){_.ra( a, c, f, 'add', 'at' );};
  _.ra = function( a, c, f, g, h ){
    if ( a[ g + 'EventListener' ] ) {
      a[ g + 'EventListener' ]( c, f, !1 );
    } else if ( a[ h + 'tachEvent' ] ) {
      a[ h + 'tachEvent' ]( 'on' + c, f );
    }
  };
  _.bb = _.Ka( _.ta, '___jsl', _.r() );
  _.Ka( _.bb, 'I', 0 );
  _.Ka( _.bb, 'hel', 10 );
  var ya, za, Aa, Ba, Da, Ea, Hg;
  ya = function( a ){
    var c = window.___jsl = window.___jsl || {};
    c[ a ] = c[ a ] || [];
    return c[ a ];
  };
  za = function( a ){
    var c = window.___jsl = window.___jsl || {};
    c.cfg = !a && c.cfg || {};
    return c.cfg;
  };
  Aa = function( a ){return 'object' === typeof a && /\[native code\]/.test( a.push );};
  Ba = function( a, c, f ){
    if ( c && 'object' === typeof c ) {
      for ( var g in c ) {
        !Object.prototype.hasOwnProperty.call( c,
                                               g
        ) || f && '___goc' === g && 'undefined' === typeof c[ g ] || ( a[ g ] && c[ g ] && 'object' === typeof a[ g ] && 'object' === typeof c[ g ] && !Aa(
          a[ g ] ) && !Aa( c[ g ] ) ? Ba( a[ g ], c[ g ] ) : c[ g ] && 'object' === typeof c[ g ]
                                                             ? ( a[ g ] = Aa( c[ g ] ) ? [] : {}, Ba( a[ g ], c[ g ] ) )
                                                             : a[ g ] = c[ g ] );
      }
    }
  };
  Da = function( a ){
    if ( a && !/^\s+$/.test( a ) ) {
      for ( ; 0 == a.charCodeAt( a.length - 1 ); ) {
        a = a.substring( 0, a.length - 1 );
      }
      try {var c = window.JSON.parse( a );} catch (f) {}
      if ( 'object' === typeof c ) {
        return c;
      }
      try {c = ( new Function( 'return (' + a + '\n)' ) )();} catch (f) {}
      if ( 'object' === typeof c ) {
        return c;
      }
      try {c = ( new Function( 'return ({' + a + '\n})' ) )();} catch (f) {}
      return 'object' === typeof c ? c : {};
    }
  };
  Ea = function( a, c ){
    var f = {___goc: void 0};
    a.length && a[ a.length - 1 ] && Object.hasOwnProperty.call( a[ a.length - 1 ],
                                                                 '___goc'
    ) && 'undefined' === typeof a[ a.length - 1 ].___goc && ( f = a.pop() );
    Ba( f, c );
    a.push( f );
  };
  Hg = function( a ){
    za( !0 );
    var c = window.___gcfg, f = ya( 'cu' ), g = window.___gu;
    c && c !== g && ( Ea( f, c ), window.___gu = c );
    c = ya( 'cu' );
    var h = window.document.scripts || window.document.getElementsByTagName( 'script' ) || [];
    g = [];
    var l = [];
    l.push.apply( l, ya( 'us' ) );
    for ( var n = 0; n < h.length; ++n ) {
      for ( var q = h[ n ], t = 0; t < l.length; ++t ) {
        q.src && 0 == q.src.indexOf( l[ t ] ) && g.push( q );
      }
    }
    0 == g.length && 0 < h.length && h[ h.length - 1 ].src && g.push( h[ h.length - 1 ] );
    for ( h = 0; h < g.length; ++h ) {
      g[ h ].getAttribute( 'gapi_processed' ) || ( g[ h ].setAttribute( 'gapi_processed', !0 ), ( l = g[ h ] )
                                                                                                ? ( n = l.nodeType, l = 3 == n || 4 == n
                                                                                                                        ? l.nodeValue
                                                                                                                        : l.textContent || l.innerText || l.innerHTML || '' )
                                                                                                : l = void 0, ( l = Da(
        l ) ) && c.push( l ) );
    }
    a && Ea( f, a );
    g = ya( 'cd' );
    a = 0;
    for ( c = g.length; a < c; ++a ) {
      Ba( za(), g[ a ], !0 );
    }
    g = ya( 'ci' );
    a = 0;
    for ( c = g.length; a < c; ++a ) {
      Ba( za(), g[ a ], !0 );
    }
    a = 0;
    for ( c = f.length; a < c; ++a ) {
      Ba( za(), f[ a ], !0 );
    }
  };
  _.P = function( a, c ){
    var f = za();
    if ( !a ) {
      return f;
    }
    a = a.split( '/' );
    for ( var g = 0, h = a.length; f && "object" === typeof f && g < h; ++g ) {
      f = f[ a[ g ] ];
    }
    return g === a.length && void 0 !== f ? f : c;
  };
  _.Fa = function( a, c ){
    var f;
    if ( 'string' === typeof a ) {
      var g = f = {};
      a = a.split( '/' );
      for ( var h = 0, l = a.length; h < l - 1; ++h ) {
        var n = {};
        g = g[ a[ h ] ] = n;
      }
      g[ a[ h ] ] = c;
    } else {
      f = a;
    }
    Hg( f );
  };
  var Ga = function(){
    var a = window.__GOOGLEAPIS;
    a && ( a.googleapis && !a[ 'googleapis.config' ] && ( a[ 'googleapis.config' ] = a.googleapis ), _.Ka( _.bb,
                                                                                                           'ci',
                                                                                                           []
    ).
                                                                                                       push( a ), window.__GOOGLEAPIS = void 0 );
  };
  Ga && Ga();
  Hg();
  _.Mu( 'gapi.config.get', _.P );
  _.Mu( 'gapi.config.update', _.Fa );
  _.Gl = function( a, c ){
    for ( var f = 1; f < arguments.length; f++ ) {
      var g = arguments[ f ];
      if ( _.re( g ) ) {
        var h = a.length || 0, l = g.length || 0;
        a.length = h + l;
        for ( var n = 0; n < l; n++ ) {
          a[ h + n ] = g[ n ];
        }
      } else {
        a.push( g );
      }
    }
  };
  _.im = function( a ){return /^[\s\xa0]*$/.test( a );};
  _.Df = function( a, c ){
    var f = c || window.document;
    if ( f.getElementsByClassName ) {
      a = f.getElementsByClassName( a )[ 0 ];
    } else {
      f = window.document;
      var g = c || f;
      a = g.querySelectorAll && g.querySelector && a ? g.querySelector( a ? '.' + a : '' ) : _.Cf( f,
                                                                                                   '*',
                                                                                                   a,
                                                                                                   c
      )[ 0 ] || null;
    }
    return a || null;
  };

  var Qe, af, aj, yu, Zi, mk, Iu, vl, xl, zD, jq, qt, Is, Js, AF, aH, DH, QL, SL, bN, aR, CR, DR, ES, KT, xU, pV, vW,
    KX, me, SE, qy, QA;
  aj = void 0;
  yu = function( a ){try {return _.D.JSON.parse.call( _.D.JSON, a );} catch (c) {return !1;}};
  Zi = function( a ){return Object.prototype.toString.call( a );};
  mk = Zi( 0 );
  Iu = Zi( new Date( 0 ) );
  vl = Zi( !0 );
  xl = Zi( '' );
  zD = Zi( {} );
  jq = Zi( [] );
  qt = function( a, c ){
    if ( c ) {
      for ( var f = 0, g = c.length; f < g; ++f ) {
        if ( a === c[ f ] ) {
          throw new TypeError( 'Converting circular structure to JSON' );
        }
      }
    }
    g = typeof a;
    if ( 'undefined' !== g ) {
      f = Array.prototype.slice.call( c || [], 0 );
      f[ f.length ] = a;
      c = [];
      var h = Zi( a );
      if ( null != a && 'function' === typeof a.toJSON && ( Object.prototype.hasOwnProperty.call( a,
                                                                                                  'toJSON'
      ) || ( h !== jq || a.constructor !== Array && a.constructor !== Object ) && ( h !== zD || a.constructor !== Array && a.constructor !== Object ) && h !== xl && h !== mk && h !== vl && h !== Iu ) ) {
        return qt( a.toJSON.call( a ), f );
      }
      if ( null == a ) {
        c[ c.length ] = 'null';
      } else if ( h === mk ) {
        a = Number( a ), ( 0, window.isNaN )( a ) || ( 0, window.isNaN )( a - a )
                         ? a = 'null'
                         : -0 === a && 0 > 1 / a && ( a = '-0' ), c[ c.length ] = String( a );
      } else if ( h === vl ) {
        c[ c.length ] = String( !!Number( a ) );
      } else {
        if ( h === Iu ) {
          return qt( a.toISOString.call( a ), f );
        }
        if ( h === jq && Zi( a.length ) === mk ) {
          c[ c.length ] = '[';
          var l = 0;
          for ( g = Number( a.length ) >> 0; l < g; ++l ) {
            l && ( c[ c.length ] = ',' ), c[ c.length ] = qt( a[ l ], f ) || 'null';
          }
          c[ c.length ] = ']';
        } else if ( h == xl && Zi( a.length ) === mk ) {
          c[ c.length ] = '"';
          l = 0;
          for ( f = Number( a.length ) >> 0; l < f; ++l ) {
            g = String.prototype.charAt.call( a, l ), h = String.prototype.charCodeAt.call(
              a,
              l
            ), c[ c.length ] = '\b' === g ? '\\b' : '\f' === g
                                                    ? '\\f'
                                                    : '\n' === g
                                                      ? '\\n'
                                                      : '\r' === g
                                                        ? '\\r'
                                                        : '\t' === g
                                                          ? '\\t'
                                                          : '\\' === g || '"' === g
                                                            ? '\\' + g
                                                            : 31 >= h
                                                              ? '\\u' + ( h + 65536 ).toString( 16 ).
                                                                                      substr( 1 )
                                                              : 32 <= h && 65535 >= h
                                                                ? g
                                                                : '\ufffd';
          }
          c[ c.length ] = '"';
        } else if ( 'object' === g ) {
          c[ c.length ] = '{';
          g = 0;
          for ( l in a ) {
            Object.prototype.hasOwnProperty.call( a, l ) && ( h = qt( a[ l ],
                                                                      f
            ), void 0 !== h && ( g++ && ( c[ c.length ] = ',' ), c[ c.length ] = qt( l ), c[ c.length ] = ':', c[ c.length ] = h ) );
          }
          c[ c.length ] = '}';
        } else {
          return;
        }
      }
      return c.join( '' );
    }
  };
  Is = /[\0-\x07\x0b\x0e-\x1f]/;
  Js = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
  AF = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
  aH = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
  DH = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
  QL = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
  SL = /[ \t\n\r]+/g;
  bN = /[^"]:/;
  aR = /""/g;
  CR = /true|false|null/g;
  DR = /00/;
  ES = /[\{]([^0\}]|0[^:])/;
  KT = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
  xU = /[^\[,:][\[\{]/;
  pV = /^(\{|\}|\[|\]|,|:|0)+/;
  vW = /\u2028/g;
  KX = /\u2029/g;
  me = function( a ){
    a = String( a );
    if ( Is.test( a ) || Js.test( a ) || AF.test( a ) || aH.test( a ) ) {
      return !1;
    }
    var c = a.replace( DH, '""' );
    c = c.replace( QL, '0' );
    c = c.replace( SL, '' );
    if ( bN.test( c ) ) {
      return !1;
    }
    c = c.replace( aR, '0' );
    c = c.replace( CR, '0' );
    if ( DR.test( c ) || ES.test( c ) || KT.test( c ) || xU.test( c ) || !c || ( c = c.replace( pV, '' ) ) ) {
      return !1;
    }
    a = a.replace( vW, '\\u2028' ).
          replace( KX, '\\u2029' );
    c = void 0;
    try {
      c = aj
          ? [ yu( a ) ]
          : eval( '(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n' + a + '\n)' );
    } catch (f) {return !1;}
    return c && 1 === c.length ? c[ 0 ] : !1;
  };
  SE = function(){
    var a = ( ( _.D.document || {} ).scripts || [] ).length;
    if ( ( void 0 === Qe || void 0 === aj || af !== a ) && -1 !== af ) {
      Qe = aj = !1;
      af = -1;
      try {
        try {
          aj = !!_.D.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.D.JSON.stringify.call( _.D.JSON, {
            a: [
              3, !0, new Date( 0 ),
            ], c: function(){},
          } ) && !0 === yu( 'true' ) && 3 === yu( '[{"a":3}]' )[ 0 ].a;
        } catch (c) {}
        Qe = aj && !yu( '[00]' ) && !yu( '"\u0007"' ) && !yu( '"\\0"' ) && !yu( '"\\v"' );
      } finally {af = a;}
    }
  };
  _.of = function( a ){
    if ( -1 === af ) {
      return !1;
    }
    SE();
    return ( Qe ? yu : me )( a );
  };
  _.mf = function( a ){
    if ( -1 !== af ) {
      return SE(), aj ? _.D.JSON.stringify.call( _.D.JSON, a ) : qt( a );
    }
  };
  qy = !Date.prototype.toISOString || 'function' !== typeof Date.prototype.toISOString || '1970-01-01T00:00:00.000Z' !== ( new Date(
    0 ) ).toISOString();
  QA = function(){
    var a = Date.prototype.getUTCFullYear.call( this );
    return [
      0 > a ? '-' + String( 1E6 - a ).
        substr( 1 ) : 9999 >= a ? String( 1E4 + a ).
        substr( 1 ) : '+' + String( 1E6 + a ).
        substr( 1 ), '-', String( 101 + Date.prototype.getUTCMonth.call( this ) ).
        substr( 1 ), '-', String( 100 + Date.prototype.getUTCDate.call( this ) ).
        substr( 1 ), 'T', String( 100 + Date.prototype.getUTCHours.call( this ) ).
        substr( 1 ), ':', String( 100 + Date.prototype.getUTCMinutes.call( this ) ).
        substr( 1 ), ':', String( 100 + Date.prototype.getUTCSeconds.call( this ) ).
        substr( 1 ), '.', String( 1E3 + Date.prototype.getUTCMilliseconds.call( this ) ).
        substr( 1 ), 'Z',
    ].join( '' );
  };
  Date.prototype.toISOString = qy ? QA : Date.prototype.toISOString;

  _.Qw = function(){return _.pf( 'Firefox' );};
  _.DY = function(){return ( _.pf( 'Chrome' ) || _.pf( 'CriOS' ) ) && !_.pf( 'Edge' );};
  _.GY = function(){
    return _.pf( 'Safari' ) && !( _.DY() || _.pf( 'Coast' ) || _.$e() || _.pf( 'Edge' ) || _.pf( 'Silk' ) || _.pf(
      'Android' ) );
  };
  _.ux = _.Qw();
  _.mN = _.mZ() || _.pf( 'iPod' );
  _.nN = _.pf( 'iPad' );
  _.oN = _.pf( 'Android' ) && !( _.DY() || _.Qw() || _.$e() || _.pf( 'Silk' ) );
  _.tx = _.DY();
  _.vx = _.GY() && !_.wk();

  _.RE = function( a ){
    for ( var c = {}, f = 0, g = 0; g < a.length; ) {
      var h = a[ g++ ];
      var l = h;
      l = _.Vg( l ) ? 'o' + _.oe( l ) : ( typeof l ).charAt( 0 ) + l;
      Object.prototype.hasOwnProperty.call( c, l ) || ( c[ l ] = !0, a[ f++ ] = h );
    }
    a.length = f;
  };
  var tv, Cx;
  tv = null;
  _.ch = null;
  Cx = null;
  _.Bv = _.df || _.ef && !_.vx || _.cf || !_.vx && !_.W && 'function' == typeof _.D.atob;
  _.aB = function( a, c ){
    _.vi();
    c = c ? Cx : tv;
    for ( var f = [], g = 0; g < a.length; g += 3 ) {
      var h = a[ g ], l = g + 1 < a.length, n = l ? a[ g + 1 ] : 0, q = g + 2 < a.length, t = q ? a[ g + 2 ] : 0,
        v = h >> 2;
      h = ( h & 3 ) << 4 | n >> 4;
      n = ( n & 15 ) << 2 | t >> 6;
      t &= 63;
      q || ( t = 64, l || ( n = 64 ) );
      f.push( c[ v ], c[ h ], c[ n ], c[ t ] );
    }
    return f.join( '' );
  };
  _.vi = function(){
    if ( !tv ) {
      tv = {};
      _.ch = {};
      Cx = {};
      for ( var a = 0; 65 > a; a++ ) {
        tv[ a ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt( a ), _.ch[ tv[ a ] ] = a, Cx[ a ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt(
          a ), 62 <= a && ( _.ch[ 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt( a ) ] = a );
      }
    }
  };

  _.Hb = {};
  _.au = function( a ){return _.Hb[ a || 'token' ] || null;};
  var wb = function(){this.fY = -1;};
  _.xb = function(){
    this.fY = 64;
    this.Ej = [];
    this.i6 = [];
    this.uda = [];
    this.V4 = [];
    this.V4[ 0 ] = 128;
    for ( var a = 1; a < this.fY; ++a ) {
      this.V4[ a ] = 0;
    }
    this.G5 = this.b0 = 0;
    this.reset();
  };
  _.J( _.xb, wb );
  _.xb.prototype.reset = function(){
    this.Ej[ 0 ] = 1732584193;
    this.Ej[ 1 ] = 4023233417;
    this.Ej[ 2 ] = 2562383102;
    this.Ej[ 3 ] = 271733878;
    this.Ej[ 4 ] = 3285377520;
    this.G5 = this.b0 = 0;
  };
  var Cm = function( a, c, f ){
    f || ( f = 0 );
    var g = a.uda;
    if ( _.fa( c ) ) {
      for ( var h = 0; 16 > h; h++ ) {
        g[ h ] = c.charCodeAt( f ) << 24 | c.charCodeAt( f + 1 ) << 16 | c.charCodeAt( f + 2 ) << 8 | c.charCodeAt( f + 3 ), f += 4;
      }
    } else {
      for ( h = 0; 16 > h; h++ ) {
        g[ h ] = c[ f ] << 24 | c[ f + 1 ] << 16 | c[ f + 2 ] << 8 | c[ f + 3 ], f += 4;
      }
    }
    for ( h = 16; 80 > h; h++ ) {
      var l = g[ h - 3 ] ^ g[ h - 8 ] ^ g[ h - 14 ] ^ g[ h - 16 ];
      g[ h ] = ( l << 1 | l >>> 31 ) & 4294967295;
    }
    c = a.Ej[ 0 ];
    f = a.Ej[ 1 ];
    var n = a.Ej[ 2 ], q = a.Ej[ 3 ], t = a.Ej[ 4 ];
    for ( h = 0; 80 > h; h++ ) {
      if ( 40 > h ) {
        if ( 20 > h ) {
          l = q ^ f & ( n ^ q );
          var v = 1518500249;
        } else {
          l = f ^ n ^ q, v = 1859775393;
        }
      } else {
        60 > h ? ( l = f & n | q & ( f | n ), v = 2400959708 ) : ( l = f ^ n ^ q, v = 3395469782 );
      }
      l = ( c << 5 | c >>> 27 ) + l + t + v + g[ h ] & 4294967295;
      t = q;
      q = n;
      n = ( f << 30 | f >>> 2 ) & 4294967295;
      f = c;
      c = l;
    }
    a.Ej[ 0 ] = a.Ej[ 0 ] + c & 4294967295;
    a.Ej[ 1 ] = a.Ej[ 1 ] + f & 4294967295;
    a.Ej[ 2 ] = a.Ej[ 2 ] + n & 4294967295;
    a.Ej[ 3 ] = a.Ej[ 3 ] + q & 4294967295;
    a.Ej[ 4 ] = a.Ej[ 4 ] + t & 4294967295;
  };
  _.xb.prototype.update = function( a, c ){
    if ( null != a ) {
      _.kf( c ) || ( c = a.length );
      for ( var f = c - this.fY, g = 0, h = this.i6, l = this.b0; g < c; ) {
        if ( 0 == l ) {
          for ( ; g <= f; ) {
            Cm( this, a, g ), g += this.fY;
          }
        }
        if ( _.fa( a ) ) {
          for ( ; g < c; ) {
            if ( h[ l ] = a.charCodeAt( g ), ++l, ++g, l == this.fY ) {
              Cm( this, h );
              l = 0;
              break;
            }
          }
        } else {
          for ( ; g < c; ) {
            if ( h[ l ] = a[ g ], ++l, ++g, l == this.fY ) {
              Cm( this, h );
              l = 0;
              break;
            }
          }
        }
      }
      this.b0 = l;
      this.G5 += c;
    }
  };
  _.xb.prototype.digest = function(){
    var a = [], c = 8 * this.G5;
    56 > this.b0 ? this.update( this.V4, 56 - this.b0 ) : this.update( this.V4, this.fY - ( this.b0 - 56 ) );
    for ( var f = this.fY - 1; 56 <= f; f-- ) {
      this.i6[ f ] = c & 255, c /= 256;
    }
    Cm( this, this.i6 );
    for ( f = c = 0; 5 > f; f++ ) {
      for ( var g = 24; 0 <= g; g -= 8 ) {
        a[ c ] = this.Ej[ f ] >> g & 255, ++c;
      }
    }
    return a;
  };

  var dp;
  _.bp = function( a ){this.wc = a || {cookie: ''};};
  _.k = _.bp.prototype;
  _.k.isEnabled = function(){return window.navigator.cookieEnabled;};
  _.k.set = function( a, c, f, g, h, l ){
    if ( /[;=\s]/.test( a ) ) {
      throw Error( 'O`' + a );
    }
    if ( /[;\r\n]/.test( c ) ) {
      throw Error( 'aa`' + c );
    }
    _.kf( f ) || ( f = -1 );
    h = h ? ';domain=' + h : '';
    g = g ? ';path=' + g : '';
    l = l ? ';secure' : '';
    f = 0 > f ? '' : 0 == f
                     ? ';expires=' + ( new Date( 1970, 1, 1 ) ).toUTCString()
                     : ';expires=' + ( new Date( ( 0, _.pa )() + 1E3 * f ) ).toUTCString();
    this.wc.cookie = a + '=' + c + h + g + f + l;
  };
  _.k.get = function( a, c ){
    for ( var f = a + '=', g = ( this.wc.cookie || '' ).split( ';' ), h = 0, l; h < g.length; h++ ) {
      l = ( 0, _.Ge )( g[ h ] );
      if ( 0 == l.lastIndexOf( f, 0 ) ) {
        return l.substr( f.length );
      }
      if ( l == a ) {
        return '';
      }
    }
    return c;
  };
  _.k.remove = function( a, c, f ){
    var g = this.YR( a );
    this.set( a, '', 0, c, f );
    return g;
  };
  _.k.$b = function(){return dp( this ).keys;};
  _.k.Va = function(){return dp( this ).values;};
  _.k.isEmpty = function(){return !this.wc.cookie;};
  _.k.Da = function(){return this.wc.cookie ? ( this.wc.cookie || '' ).split( ';' ).length : 0;};
  _.k.YR = function( a ){return _.kf( this.get( a ) );};
  _.k.zn = function( a ){
    for ( var c = dp( this ).values, f = 0; f < c.length; f++ ) {
      if ( c[ f ] == a ) {
        return !0;
      }
    }
    return !1;
  };
  _.k.clear = function(){
    for ( var a = dp( this ).keys, c = a.length - 1; 0 <= c; c-- ) {
      this.remove( a[ c ] );
    }
  };
  dp = function( a ){
    a = ( a.wc.cookie || '' ).split( ';' );
    for ( var c = [], f = [], g, h, l = 0; l < a.length; l++ ) {
      h = ( 0, _.Ge )( a[ l ] ), g = h.indexOf( '=' ), -1 == g ? ( c.push( '' ), f.push( h ) ) : ( c.push( h.substring(
        0,
        g
      ) ), f.push( h.substring( g + 1 ) ) );
    }
    return {keys: c, values: f};
  };
  _.hp = new _.bp( 'undefined' == typeof window.document ? null : window.document );
  _.hp.Lia = 3950;

  _.ma = function( a, c ){
    var f = Array.prototype.slice.call( arguments, 1 );
    return function(){
      var c = f.slice();
      c.push.apply( c, arguments );
      return a.apply( this, c );
    };
  };
  _.ue = function( a, c ){
    a:{
      for ( var f = a.length, g = _.fa( a ) ? a.split( '' ) : a, h = 0; h < f; h++ ) {
        if ( h in g && c.call( void 0, g[ h ], h, a ) ) {
          c = h;
          break a;
        }
      }
      c = -1;
    }
    return 0 > c ? null : _.fa( a ) ? a.charAt( c ) : a[ c ];
  };
  _.ih = [];
  _.kh = [];
  _.jh = !1;
  _.hh = function( a ){
    _.ih[ _.ih.length ] = a;
    if ( _.jh ) {
      for ( var c = 0; c < _.kh.length; c++ ) {
        a( ( 0, _.H )( _.kh[ c ].wrap, _.kh[ c ] ) );
      }
    }
  };

  var jk, kk, hD;
  jk = null;
  kk = /^[\w+/_-]+[=]{0,2}$/;
  _.se = function( a ){
    if ( Error.captureStackTrace ) {
      Error.captureStackTrace( this, _.se );
    } else {
      var c = Error().stack;
      c && ( this.stack = c );
    }
    a && ( this.message = String( a ) );
  };
  _.J( _.se, Error );
  _.se.prototype.name = 'CustomError';
  _.yY = function( a, c ){
    for ( var f in a ) {
      if ( !( f in c ) || a[ f ] !== c[ f ] ) {
        return !1;
      }
    }
    for ( f in c ) {
      if ( !( f in a ) ) {
        return !1;
      }
    }
    return !0;
  };
  _.rf = function( a ){
    var c = {}, f;
    for ( f in a ) {
      c[ f ] = a[ f ];
    }
    return c;
  };
  _.vC = function( a ){return a;};
  _.fv = function( a, c ){
    a.src = _.wx( c );
    if ( null === jk ) {
      a:{
        c = _.D.document;
        if ( ( c = c.querySelector && c.querySelector( 'script[nonce]' ) ) && ( c = c.nonce || c.getAttribute( 'nonce' ) ) && kk.test(
          c ) ) {
          break a;
        }
        c = null;
      }
      jk = c || '';
    }
    ( c = jk ) && a.setAttribute( 'nonce', c );
  };
  hD = function( a, c ){
    this.cea = a;
    this.Cha = c;
    this.M4 = 0;
    this.p4 = null;
  };
  hD.prototype.get = function(){
    if ( 0 < this.M4 ) {
      this.M4--;
      var a = this.p4;
      this.p4 = a.next;
      a.next = null;
    } else {
      a = this.cea();
    }
    return a;
  };
  hD.prototype.put = function( a ){
    this.Cha( a );
    100 > this.M4 && ( this.M4++, a.next = this.p4, this.p4 = a );
  };
  var tp, $o, ep, Yo;
  tp = function( a ){_.D.setTimeout( function(){throw a;}, 0 );};
  _.qk = function( a ){
    a = Yo( a );
    !_.vd( _.D.setImmediate ) || _.D.Window && _.D.Window.prototype && !_.pf( 'Edge' ) && _.D.Window.prototype.setImmediate == _.D.setImmediate
    ? ( $o || ( $o = ep() ), $o( a ) )
    : _.D.setImmediate( a );
  };
  ep = function(){
    var a = _.D.MessageChannel;
    'undefined' === typeof a && 'undefined' !== typeof window && window.postMessage && window.addEventListener && !_.pf(
      'Presto' ) && ( a = function(){
      var a = window.document.createElement( 'IFRAME' );
      a.style.display = 'none';
      a.src = '';
      window.document.documentElement.appendChild( a );
      var c = a.contentWindow;
      a = c.document;
      a.open();
      a.write( '' );
      a.close();
      var f = 'callImmediate' + Math.random(),
        g = 'file:' == c.location.protocol ? '*' : c.location.protocol + '//' + c.location.host;
      a = ( 0, _.H )( function( a ){
        if ( ( '*' == g || a.origin == g ) && a.data == f ) {
          this.port1.onmessage();
        }
      }, this );
      c.addEventListener( 'message', a, !1 );
      this.port1 = {};
      this.port2 = {postMessage: function(){c.postMessage( f, g );}};
    } );
    if ( 'undefined' !== typeof a && !_.B() ) {
      var c = new a, f = {}, g = f;
      c.port1.onmessage = function(){
        if ( _.kf( f.next ) ) {
          f = f.next;
          var a = f.cb;
          f.cb = null;
          a();
        }
      };
      return function( a ){
        g.next = {cb: a};
        g = g.next;
        c.port2.postMessage( 0 );
      };
    }
    return 'undefined' !== typeof window.document && 'onreadystatechange' in window.document.createElement( 'SCRIPT' )
           ? function( a ){
        var c = window.document.createElement( 'SCRIPT' );
        c.onreadystatechange = function(){
          c.onreadystatechange = null;
          c.parentNode.removeChild( c );
          c = null;
          a();
          a = null;
        };
        window.document.documentElement.appendChild( c );
      }
           : function( a ){_.D.setTimeout( a, 0 );};
  };
  Yo = _.vC;
  _.hh( function( a ){Yo = a;} );
  var LD = function(){this.N5 = this.Y0 = null;}, xE = new hD( function(){return new uE;}, function( a ){a.reset();} );
  LD.prototype.add = function( a, c ){
    var f = xE.get();
    f.set( a, c );
    this.N5 ? this.N5.next = f : this.Y0 = f;
    this.N5 = f;
  };
  LD.prototype.remove = function(){
    var a = null;
    this.Y0 && ( a = this.Y0, this.Y0 = this.Y0.next, this.Y0 || ( this.N5 = null ), a.next = null );
    return a;
  };
  var uE = function(){this.next = this.scope = this.Ip = null;};
  uE.prototype.set = function( a, c ){
    this.Ip = a;
    this.scope = c;
    this.next = null;
  };
  uE.prototype.reset = function(){this.next = this.scope = this.Ip = null;};
  var um, Pm, up, Lp, Ap;
  _.Qp = function( a, c ){
    um || Pm();
    up || ( um(), up = !0 );
    Lp.add( a, c );
  };
  Pm = function(){
    if ( _.D.Promise && _.D.Promise.resolve ) {
      var a = _.D.Promise.resolve( void 0 );
      um = function(){a.then( Ap );};
    } else {
      um = function(){_.qk( Ap );};
    }
  };
  up = !1;
  Lp = new LD;
  Ap = function(){
    for ( var a; a = Lp.remove(); ) {
      try {a.Ip.call( a.scope );} catch (c) {tp( c );}
      xE.put( a );
    }
    up = !1;
  };
  _.Rp = function( a ){
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0;
  };
  _.Wp = function( a ){
    if ( !a ) {
      return !1;
    }
    try {return !!a.$goog_Thenable;} catch (c) {return !1;}
  };
  var Xq, Bs, Mq, uq;
  _.C = function( a, c ){
    this.ub = 0;
    this.rW = void 0;
    this.B_ = this.iY = this.Vb = null;
    this.j4 = this.Q6 = !1;
    if ( a != _.gh ) {
      try {
        var f = this;
        a.call( c, function( a ){f.fl( 2, a );}, function( a ){f.fl( 3, a );} );
      } catch (g) {this.fl( 3, g );}
    }
  };
  Xq = function(){
    this.next = this.context = this.o0 = this.r2 = this.xZ = null;
    this.b1 = !1;
  };
  Xq.prototype.reset = function(){
    this.context = this.o0 = this.r2 = this.xZ = null;
    this.b1 = !1;
  };
  Bs = new hD( function(){return new Xq;}, function( a ){a.reset();} );
  _.Dt = function( a, c, f ){
    var g = Bs.get();
    g.r2 = a;
    g.o0 = c;
    g.context = f;
    return g;
  };
  _.Nu = function( a ){
    if ( a instanceof _.C ) {
      return a;
    }
    var c = new _.C( _.gh );
    c.fl( 2, a );
    return c;
  };
  _.$H = function( a ){return new _.C( function( c, f ){f( a );} );};
  _.dq = function( a, c, f ){Vp( a, c, f, null ) || _.Qp( _.ma( c, a ) );};
  _.Su = function(){
    var a, c, f = new _.C( function( f, h ){
      a = f;
      c = h;
    } );
    return new Bp( f, a, c );
  };
  _.C.prototype.then = function( a, c, f ){return uq( this, _.vd( a ) ? a : null, _.vd( c ) ? c : null, f );};
  _.Rp( _.C );
  _.C.prototype.r9 = function( a, c ){return uq( this, null, a, c );};
  _.C.prototype.cancel = function( a ){
    0 == this.ub && _.Qp( function(){
      var c = new tq( a );
      Mq( this, c );
    }, this );
  };
  Mq = function( a, c ){
    if ( 0 == a.ub ) {
      if ( a.Vb ) {
        var f = a.Vb;
        if ( f.iY ) {
          for ( var g = 0, h = null, l = null, n = f.iY; n && ( n.b1 || ( g++, n.xZ == a && ( h = n ), !( h && 1 < g ) ) ); n = n.next ) {
            h || ( l = n );
          }
          h && ( 0 == f.ub && 1 == g ? Mq( f, c ) : ( l
                                                      ? ( g = l, g.next == f.B_ && ( f.B_ = g ), g.next = g.next.next )
                                                      : ju( f ), Wq( f, h, 3, c ) ) );
        }
        a.Vb = null;
      } else {
        a.fl( 3, c );
      }
    }
  };
  _.lr = function( a, c ){
    a.iY || 2 != a.ub && 3 != a.ub || er( a );
    a.B_ ? a.B_.next = c : a.iY = c;
    a.B_ = c;
  };
  uq = function( a, c, f, g ){
    var h = _.Dt( null, null, null );
    h.xZ = new _.C( function( a, n ){
      h.r2 = c ? function( f ){
        try {
          var h = c.call( g, f );
          a( h );
        } catch (v) {n( v );}
      } : a;
      h.o0 = f ? function( c ){
        try {
          var h = f.call( g, c );
          !_.kf( h ) && c instanceof tq ? n( c ) : a( h );
        } catch (v) {n( v );}
      } : n;
    } );
    h.xZ.Vb = a;
    _.lr( a, h );
    return h.xZ;
  };
  _.C.prototype.ria = function( a ){
    this.ub = 0;
    this.fl( 2, a );
  };
  _.C.prototype.sia = function( a ){
    this.ub = 0;
    this.fl( 3, a );
  };
  _.C.prototype.fl = function( a, c ){
    0 == this.ub && ( this === c && ( a = 3, c = new TypeError( 'Promise cannot resolve to itself' ) ), this.ub = 1, Vp(
      c,
      this.ria,
      this.sia,
      this
    ) || ( this.rW = c, this.ub = a, this.Vb = null, er( this ), 3 != a || c instanceof tq || wq( this, c ) ) );
  };
  var Vp = function( a, c, f, g ){
    if ( a instanceof _.C ) {
      return _.lr( a, _.Dt( c || _.gh, f || null, g ) ), !0;
    }
    if ( _.Wp( a ) ) {
      return a.then( c, f, g ), !0;
    }
    if ( _.Vg( a ) ) {
      try {
        var h = a.then;
        if ( _.vd( h ) ) {
          return bq( a, h, c, f, g ), !0;
        }
      } catch (l) {return f.call( g, l ), !0;}
    }
    return !1;
  }, bq = function( a, c, f, g, h ){
    var l = !1, n = function( a ){l || ( l = !0, f.call( h, a ) );}, q = function( a ){l || ( l = !0, g.call( h, a ) );};
    try {c.call( a, n, q );} catch (t) {q( t );}
  }, er = function( a ){a.Q6 || ( a.Q6 = !0, _.Qp( a.uea, a ) );}, ju = function( a ){
    var c = null;
    a.iY && ( c = a.iY, a.iY = c.next, c.next = null );
    a.iY || ( a.B_ = null );
    return c;
  };
  _.C.prototype.uea = function(){
    for ( var a; a = ju( this ); ) {
      Wq( this, a, this.ub, this.rW );
    }
    this.Q6 = !1;
  };
  var Wq = function( a, c, f, g ){
      if ( 3 == f && c.o0 && !c.b1 ) {
        for ( ; a && a.j4; a = a.Vb ) {
          a.j4 = !1;
        }
      }
      if ( c.xZ ) {
        c.xZ.Vb = null, xs( c, f, g );
      } else {
        try {
          c.b1 ? c.r2.call( c.context ) : xs( c, f, g );
        } catch (h) {nr.call( null, h );}
      }
      Bs.put( c );
    }, xs = function( a, c, f ){2 == c ? a.r2.call( a.context, f ) : a.o0 && a.o0.call( a.context, f );},
    wq = function( a, c ){
      a.j4 = !0;
      _.Qp( function(){a.j4 && nr.call( null, c );} );
    }, nr = tp, tq = function( a ){_.se.call( this, a );};
  _.J( tq, _.se );
  tq.prototype.name = 'cancel';
  var Bp = function( a, c, f ){
    this.promise = a;
    this.resolve = c;
    this.reject = f;
  };

  var lo;
  _.fh = function( a, c ){
    a = a.split( '.' );
    c = c || _.D;
    for ( var f = 0; f < a.length; f++ ) {
      if ( c = c[ a[ f ] ], null == c ) {
        return null;
      }
    }
    return c;
  };
  _.xe = function( a, c ){
    c = ( 0, _.we )( a, c );
    var f;
    ( f = 0 <= c ) && Array.prototype.splice.call( a, c, 1 );
    return f;
  };
  lo = function( a, c ){
    for ( var f in a ) {
      if ( c.call( void 0, a[ f ], f, a ) ) {
        return !0;
      }
    }
    return !1;
  };
  _.dh = function(){
    this.Oj = this.Oj;
    this.XZ = this.XZ;
  };
  _.dh.prototype.Oj = !1;
  _.dh.prototype.Ma = function(){return this.Oj;};
  _.dh.prototype.U = function(){this.Oj || ( this.Oj = !0, this.wj() );};
  _.pD = function( a, c ){_.Yi( a, _.ma( _.eh, c ) );};
  _.Yi = function( a, c ){
    a.Oj ? _.kf( void 0 ) ? c.call( void 0 ) : c() : ( a.XZ || ( a.XZ = [] ), a.XZ.push( _.kf( void 0 ) ? ( 0, _.H )( c,
                                                                                                                      void 0
    ) : c ) );
  };
  _.dh.prototype.wj = function(){
    if ( this.XZ ) {
      for ( ; this.XZ.length; ) {
        this.XZ.shift()();
      }
    }
  };
  _.eh = function( a ){a && 'function' == typeof a.U && a.U();};
  _.mh = function( a, c ){
    this.type = a;
    this.currentTarget = this.target = c;
    this.defaultPrevented = this.Ad = !1;
    this.Tg = !0;
  };
  _.mh.prototype.stopPropagation = function(){this.Ad = !0;};
  _.mh.prototype.preventDefault = function(){
    this.defaultPrevented = !0;
    this.Tg = !1;
  };
  var yh, Jh;
  _.Ih = !_.W || _.gq( 9 );
  yh = !_.W || _.gq( 9 );
  Jh = _.W && !_.sl( '9' );
  !_.ef || _.sl( '528' );
  _.df && _.sl( '1.9b' ) || _.W && _.sl( '8' ) || _.cf && _.sl( '9.5' ) || _.ef && _.sl( '528' );
  _.df && !_.sl( '8' ) || _.W && _.sl( '9' );
  var yn = function(){
    if ( !_.D.addEventListener || !Object.defineProperty ) {
      return !1;
    }
    var a = !1, c = Object.defineProperty( {}, 'passive', {get: function(){a = !0;}} );
    try {_.D.addEventListener( 'test', _.gh, c ), _.D.removeEventListener( 'test', _.gh, c );} catch (f) {}
    return a;
  }();
  var Gt;
  Gt = function( a ){return _.ef ? 'webkit' + a : _.cf ? 'o' + a.toLowerCase() : a.toLowerCase();};
  _.Ht = Gt( 'TransitionEnd' );
  _.G = {
    JF: 'click',
    DN: 'rightclick',
    MD: 'dblclick',
    hy: 'mousedown',
    my: 'mouseup',
    Ez: 'mouseover',
    Py: 'mouseout',
    rJ: 'mousemove',
    iJ: 'mouseenter',
    mJ: 'mouseleave',
    jv: 'mousecancel',
    LN: 'selectionchange',
    QN: 'selectstart',
    KQ: 'wheel',
    mH: 'keypress',
    lH: 'keydown',
    nH: 'keyup',
    VA: 'blur',
    rG: 'focus',
    TD: 'deactivate',
    sG: 'focusin',
    uG: 'focusout',
    AB: 'change',
    cH: 'reset',
    JN: 'select',
    MP: 'submit',
    BG: 'input',
    IM: 'propertychange',
    LF: 'dragstart',
    SE: 'drag',
    YE: 'dragenter',
    tF: 'dragover',
    ZE: 'dragleave',
    DROP: 'drop',
    XE: 'dragend',
    zQ: 'touchstart',
    rQ: 'touchmove',
    oQ: 'touchend',
    nQ: 'touchcancel',
    UA: 'beforeunload',
    qC: 'consolemessage',
    sC: 'contextmenu',
    fE: 'devicechange',
    pE: 'devicemotion',
    qE: 'deviceorientation',
    xE: 'DOMContentLoaded',
    ERROR: 'error',
    AG: 'help',
    oH: 'load',
    ZH: 'losecapture',
    cL: 'orientationchange',
    mN: 'readystatechange',
    oN: 'resize',
    EN: 'scroll',
    BQ: 'unload',
    iB: 'canplay',
    wB: 'canplaythrough',
    MF: 'durationchange',
    NF: 'emptied',
    ENDED: 'ended',
    yH: 'loadeddata',
    zH: 'loadedmetadata',
    QL: 'pause',
    SL: 'play',
    PLAYING: 'playing',
    YM: 'ratechange',
    GN: 'seeked',
    IN: 'seeking',
    $O: 'stalled',
    VP: 'suspend',
    mQ: 'timeupdate',
    IQ: 'volumechange',
    JQ: 'waiting',
    SO: 'sourceopen',
    HO: 'sourceended',
    GO: 'sourceclosed',
    Zz: 'abort',
    DQ: 'update',
    GQ: 'updatestart',
    EQ: 'updateend',
    zG: 'hashchange',
    fL: 'pagehide',
    PL: 'pageshow',
    AM: 'popstate',
    IC: 'copy',
    NG: 'paste',
    OC: 'cut',
    BA: 'beforecopy',
    EA: 'beforecut',
    SA: 'beforepaste',
    ZK: 'online',
    SK: 'offline',
    xI: 'message',
    pC: 'connect',
    WG: 'install',
    sM: 'activate',
    eG: 'fetch',
    xG: 'foreignfetch',
    gJ: 'messageerror',
    hP: 'statechange',
    FQ: 'updatefound',
    EC: 'controllerchange',
    rA: Gt( 'AnimationStart' ),
    jA: Gt( 'AnimationEnd' ),
    pA: Gt( 'AnimationIteration' ),
    AQ: _.Ht,
    cM: 'pointerdown',
    uM: 'pointerup',
    UL: 'pointercancel',
    nM: 'pointermove',
    tM: 'pointerover',
    rM: 'pointerout',
    dM: 'pointerenter',
    kM: 'pointerleave',
    yG: 'gotpointercapture',
    qI: 'lostpointercapture',
    tJ: 'MSGestureChange',
    uJ: 'MSGestureEnd',
    vJ: 'MSGestureHold',
    wJ: 'MSGestureStart',
    yJ: 'MSGestureTap',
    AJ: 'MSGotPointerCapture',
    DJ: 'MSInertiaStart',
    FJ: 'MSLostPointerCapture',
    GJ: 'MSPointerCancel',
    HJ: 'MSPointerDown',
    MJ: 'MSPointerEnter',
    NJ: 'MSPointerHover',
    dK: 'MSPointerLeave',
    KK: 'MSPointerMove',
    LK: 'MSPointerOut',
    PK: 'MSPointerOver',
    QK: 'MSPointerUp',
    kQ: 'text',
    lQ: _.W ? 'textinput' : 'textInput',
    YB: 'compositionstart',
    gC: 'compositionupdate',
    LB: 'compositionend',
    FA: 'beforeinput',
    bG: 'exit',
    vH: 'loadabort',
    wH: 'loadcommit',
    AH: 'loadredirect',
    GH: 'loadstart',
    PH: 'loadstop',
    qN: 'responsive',
    bO: 'sizechanged',
    CQ: 'unresponsive',
    HQ: 'visibilitychange',
    oP: 'storage',
    ME: 'DOMSubtreeModified',
    yE: 'DOMNodeInserted',
    HE: 'DOMNodeRemoved',
    LE: 'DOMNodeRemovedFromDocument',
    zE: 'DOMNodeInsertedIntoDocument',
    sE: 'DOMAttrModified',
    wE: 'DOMCharacterDataModified',
    TA: 'beforeprint',
    iA: 'afterprint',
    LA: 'beforeinstallprompt',
    wA: 'appinstalled',
  };
  _.nh = function( a, c ){
    _.mh.call( this, a ? a.type : '' );
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = '';
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.TW = !1;
    this.pointerId = 0;
    this.pointerType = '';
    this.fW = null;
    a && this.kc( a, c );
  };
  _.J( _.nh, _.mh );
  var BH = {2: 'touch', 3: 'pen', 4: 'mouse'};
  _.nh.prototype.kc = function( a, c ){
    var f = this.type = a.type, g = a.changedTouches ? a.changedTouches[ 0 ] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = c;
    ( c = a.relatedTarget ) ? _.df && ( _.Eo( c, 'nodeName' ) || ( c = null ) ) : 'mouseover' == f
                                                                                  ? c = a.fromElement
                                                                                  : 'mouseout' == f && ( c = a.toElement );
    this.relatedTarget = c;
    null === g
    ? ( this.offsetX = _.ef || void 0 !== a.offsetX
                       ? a.offsetX
                       : a.layerX, this.offsetY = _.ef || void 0 !== a.offsetY
                                                  ? a.offsetY
                                                  : a.layerY, this.clientX = void 0 !== a.clientX
                                                                             ? a.clientX
                                                                             : a.pageX, this.clientY = void 0 !== a.clientY
                                                                                                       ? a.clientY
                                                                                                       : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0 )
    : ( this.clientX = void 0 !== g.clientX ? g.clientX : g.pageX, this.clientY = void 0 !== g.clientY
                                                                                  ? g.clientY
                                                                                  : g.pageY, this.screenX = g.screenX || 0, this.screenY = g.screenY || 0 );
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || '';
    this.charCode = a.charCode || ( 'keypress' == f ? a.keyCode : 0 );
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.TW = _.Gg ? a.metaKey : a.ctrlKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = _.fa( a.pointerType ) ? a.pointerType : BH[ a.pointerType ] || '';
    this.state = a.state;
    this.fW = a;
    a.defaultPrevented && this.preventDefault();
  };
  _.nh.prototype.stopPropagation = function(){
    _.nh.T.stopPropagation.call( this );
    this.fW.stopPropagation ? this.fW.stopPropagation() : this.fW.cancelBubble = !0;
  };
  _.nh.prototype.preventDefault = function(){
    _.nh.T.preventDefault.call( this );
    var a = this.fW;
    if ( a.preventDefault ) {
      a.preventDefault();
    } else if ( a.returnValue = !1, Jh ) {
      try {
        if ( a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode ) {
          a.keyCode = -1;
        }
      } catch (c) {}
    }
  };
  var Lh;
  _.cC = 'closure_listenable_' + ( 1E6 * Math.random() | 0 );
  _.wB = function( a ){return !( !a || !a[ _.cC ] );};
  Lh = 0;
  var oh = function( a, c, f, g, h ){
    this.listener = a;
    this.f5 = null;
    this.src = c;
    this.type = f;
    this.capture = !!g;
    this.Tc = h;
    this.key = ++Lh;
    this.gR = this.If = !1;
  }, hs = function( a ){
    a.gR = !0;
    a.listener = null;
    a.f5 = null;
    a.src = null;
    a.Tc = null;
  };
  _.ts = function( a ){
    this.src = a;
    this.Wq = {};
    this.i3 = 0;
  };
  _.ts.prototype.add = function( a, c, f, g, h ){
    var l = a.toString();
    a = this.Wq[ l ];
    a || ( a = this.Wq[ l ] = [], this.i3++ );
    var n = zs( a, c, g, h );
    -1 < n ? ( c = a[ n ], f || ( c.If = !1 ) ) : ( c = new oh( c, this.src, l, !!g, h ), c.If = f, a.push( c ) );
    return c;
  };
  _.ts.prototype.remove = function( a, c, f, g ){
    a = a.toString();
    if ( !( a in this.Wq ) ) {
      return !1;
    }
    var h = this.Wq[ a ];
    c = zs( h, c, f, g );
    return -1 < c ? ( hs( h[ c ] ), Array.prototype.splice.call( h,
                                                                 c,
                                                                 1
    ), 0 == h.length && ( delete this.Wq[ a ], this.i3-- ), !0 ) : !1;
  };
  _.et = function( a, c ){
    var f = c.type;
    if ( !( f in a.Wq ) ) {
      return !1;
    }
    var g = _.xe( a.Wq[ f ], c );
    g && ( hs( c ), 0 == a.Wq[ f ].length && ( delete a.Wq[ f ], a.i3-- ) );
    return g;
  };
  _.ts.prototype.removeAll = function( a ){
    a = a && a.toString();
    var c = 0, f;
    for ( f in this.Wq ) {
      if ( !a || f == a ) {
        for ( var g = this.Wq[ f ], h = 0; h < g.length; h++ ) {
          ++c, hs( g[ h ] );
        }
        delete this.Wq[ f ];
        this.i3--;
      }
    }
    return c;
  };
  _.ts.prototype.Q_ = function( a, c, f, g ){
    a = this.Wq[ a.toString() ];
    var h = -1;
    a && ( h = zs( a, c, f, g ) );
    return -1 < h ? a[ h ] : null;
  };
  _.ts.prototype.hasListener = function( a, c ){
    var f = _.kf( a ), g = f ? a.toString() : '', h = _.kf( c );
    return lo( this.Wq, function( a ){
      for ( var l = 0; l < a.length; ++l ) {
        if ( !( f && a[ l ].type != g || h && a[ l ].capture != c ) ) {
          return !0;
        }
      }
      return !1;
    } );
  };
  var zs = function( a, c, f, g ){
    for ( var h = 0; h < a.length; ++h ) {
      var l = a[ h ];
      if ( !l.gR && l.listener == c && l.capture == !!f && l.Tc == g ) {
        return h;
      }
    }
    return -1;
  };
  var lt, vh, st, qh, th, Gk, Fh, Gh, xh, lC;
  lt = 'closure_lm_' + ( 1E6 * Math.random() | 0 );
  vh = {};
  st = 0;
  _.ph = function( a, c, f, g, h ){
    if ( g && g.once ) {
      return _.zh( a, c, f, g, h );
    }
    if ( _.ea( c ) ) {
      for ( var l = 0; l < c.length; l++ ) {
        _.ph( a, c[ l ], f, g, h );
      }
      return null;
    }
    f = _.tl( f );
    return _.wB( a ) ? a.Ei( c, f, _.Vg( g ) ? !!g.capture : !!g, h ) : qh( a, c, f, !1, g, h );
  };
  qh = function( a, c, f, g, h, l ){
    if ( !c ) {
      throw Error( 'u' );
    }
    var n = _.Vg( h ) ? !!h.capture : !!h, q = _.zt( a );
    q || ( a[ lt ] = q = new _.ts( a ) );
    f = q.add( c, f, g, n, l );
    if ( f.f5 ) {
      return f;
    }
    g = th();
    f.f5 = g;
    g.src = a;
    g.listener = f;
    if ( a.addEventListener ) {
      yn || ( h = n ), void 0 === h && ( h = !1 ), a.addEventListener( c.toString(), g, h );
    } else if ( a.attachEvent ) {
      a.attachEvent( Gk( c.toString() ), g );
    } else if ( a.addListener && a.removeListener ) {
      a.addListener( g );
    } else {
      throw Error( 'c' );
    }
    st++;
    return f;
  };
  th = function(){
    var a = xh, c = yh ? function( f ){return a.call( c.src, c.listener, f );} : function( f ){
      f = a.call( c.src, c.listener, f );
      if ( !f ) {
        return f;
      }
    };
    return c;
  };
  _.zh = function( a, c, f, g, h ){
    if ( _.ea( c ) ) {
      for ( var l = 0; l < c.length; l++ ) {
        _.zh( a, c[ l ], f, g, h );
      }
      return null;
    }
    f = _.tl( f );
    return _.wB( a ) ? a.bZ( c, f, _.Vg( g ) ? !!g.capture : !!g, h ) : qh( a, c, f, !0, g, h );
  };
  _.Ch = function( a ){
    if ( _.qe( a ) || !a || a.gR ) {
      return !1;
    }
    var c = a.src;
    if ( _.wB( c ) ) {
      return c.PG( a );
    }
    var f = a.type, g = a.f5;
    c.removeEventListener ? c.removeEventListener( f, g, a.capture ) : c.detachEvent
                                                                       ? c.detachEvent( Gk( f ), g )
                                                                       : c.addListener && c.removeListener && c.removeListener(
      g );
    st--;
    ( f = _.zt( c ) ) ? ( _.et( f, a ), 0 == f.i3 && ( f.src = null, c[ lt ] = null ) ) : hs( a );
    return !0;
  };
  Gk = function( a ){return a in vh ? vh[ a ] : vh[ a ] = 'on' + a;};
  Fh = function( a, c, f, g ){
    var h = !0;
    if ( a = _.zt( a ) ) {
      if ( c = a.Wq[ c.toString() ] ) {
        for ( c = c.concat(), a = 0; a < c.length; a++ ) {
          var l = c[ a ];
          l && l.capture == f && !l.gR && ( l = Gh( l, g ), h = h && !1 !== l );
        }
      }
    }
    return h;
  };
  Gh = function( a, c ){
    var f = a.listener, g = a.Tc || a.src;
    a.If && _.Ch( a );
    return f.call( g, c );
  };
  xh = function( a, c ){
    if ( a.gR ) {
      return !0;
    }
    if ( !yh ) {
      var f = c || _.fh( 'window.event' );
      c = new _.nh( f, this );
      var g = !0;
      if ( !( 0 > f.keyCode || void 0 != f.returnValue ) ) {
        a:{
          var h = !1;
          if ( 0 == f.keyCode ) {
            try {
              f.keyCode = -1;
              break a;
            } catch (n) {h = !0;}
          }
          if ( h || void 0 == f.returnValue ) {
            f.returnValue = !0;
          }
        }
        f = [];
        for ( h = c.currentTarget; h; h = h.parentNode ) {
          f.push( h );
        }
        a = a.type;
        for ( h = f.length - 1; !c.Ad && 0 <= h; h-- ) {
          c.currentTarget = f[ h ];
          var l = Fh( f[ h ], a, !0, c );
          g = g && l;
        }
        for ( h = 0; !c.Ad && h < f.length; h++ ) {
          c.currentTarget = f[ h ], l = Fh( f[ h ], a, !1, c ), g = g && l;
        }
      }
      return g;
    }
    return Gh( a, new _.nh( c, this ) );
  };
  _.zt = function( a ){
    a = a[ lt ];
    return a instanceof _.ts ? a : null;
  };
  lC = '__closure_events_fn_' + ( 1E9 * Math.random() >>> 0 );
  _.tl = function( a ){
    if ( _.vd( a ) ) {
      return a;
    }
    a[ lC ] || ( a[ lC ] = function( c ){return a.handleEvent( c );} );
    return a[ lC ];
  };
  _.hh( function( a ){xh = a( xh );} );

  _.Up = function( a ){
    a.Tl = void 0;
    a.ma = function(){return a.Tl ? a.Tl : a.Tl = new a;};
  };
  _.jr = function( a, c ){
    var f = a.length - c.length;
    return 0 <= f && a.indexOf( c, f ) == f;
  };
  _.Og = function( a ){
    for ( var c in a ) {
      return !1;
    }
    return !0;
  };
  _.Ah = function( a, c, f, g, h ){
    if ( _.ea( c ) ) {
      for ( var l = 0; l < c.length; l++ ) {
        _.Ah( a, c[ l ], f, g, h );
      }
    } else {
      g = _.Vg( g ) ? !!g.capture : !!g, f = _.tl( f ), _.wB( a )
                                                        ? a.nx( c, f, g, h )
                                                        : a && ( a = _.zt( a ) ) && ( c = a.Q_( c, f, g, h ) ) && _.Ch(
        c );
    }
  };
  _.Hh = function(){
    _.dh.call( this );
    this.zY = new _.ts( this );
    this.vda = this;
    this.z8 = null;
  };
  _.J( _.Hh, _.dh );
  _.Hh.prototype[ _.cC ] = !0;
  _.k = _.Hh.prototype;
  _.k.KR = function(){return this.z8;};
  _.k.tj = _.b( 17 );
  _.k.addEventListener = function( a, c, f, g ){_.ph( this, a, c, f, g );};
  _.k.removeEventListener = function( a, c, f, g ){_.Ah( this, a, c, f, g );};
  _.k.dispatchEvent = function( a ){
    var c, f = this.KR();
    if ( f ) {
      for ( c = []; f; f = f.KR() ) {
        c.push( f );
      }
    }
    f = this.vda;
    var g = a.type || a;
    if ( _.fa( a ) ) {
      a = new _.mh( a, f );
    } else if ( a instanceof _.mh ) {
      a.target = a.target || f;
    } else {
      var h = a;
      a = new _.mh( g, f );
      _.sf( a, h );
    }
    h = !0;
    if ( c ) {
      for ( var l = c.length - 1; !a.Ad && 0 <= l; l-- ) {
        var n = a.currentTarget = c[ l ];
        h = n.ef( g, !0, a ) && h;
      }
    }
    a.Ad || ( n = a.currentTarget = f, h = n.ef( g, !0, a ) && h, a.Ad || ( h = n.ef( g, !1, a ) && h ) );
    if ( c ) {
      for ( l = 0; !a.Ad && l < c.length; l++ ) {
        n = a.currentTarget = c[ l ], h = n.ef( g, !1, a ) && h;
      }
    }
    return h;
  };
  _.k.wj = function(){
    _.Hh.T.wj.call( this );
    this.LI();
    this.z8 = null;
  };
  _.k.Ei = function( a, c, f, g ){return this.zY.add( String( a ), c, !1, f, g );};
  _.k.bZ = function( a, c, f, g ){return this.zY.add( String( a ), c, !0, f, g );};
  _.k.nx = function( a, c, f, g ){return this.zY.remove( String( a ), c, f, g );};
  _.k.PG = function( a ){return _.et( this.zY, a );};
  _.k.LI = function( a ){this.zY && this.zY.removeAll( a );};
  _.k.ef = function( a, c, f ){
    a = this.zY.Wq[ String( a ) ];
    if ( !a ) {
      return !0;
    }
    a = a.concat();
    for ( var g = !0, h = 0; h < a.length; ++h ) {
      var l = a[ h ];
      if ( l && !l.gR && l.capture == c ) {
        var n = l.listener, q = l.Tc || l.src;
        l.If && this.PG( l );
        g = !1 !== n.call( q, f ) && g;
      }
    }
    return g && 0 != f.Tg;
  };
  _.k.Q_ = function( a, c, f, g ){return this.zY.Q_( String( a ), c, f, g );};
  _.k.hasListener = function( a, c ){return this.zY.hasListener( _.kf( a ) ? String( a ) : void 0, c );};

  var d_, f_, q_, s_, E_, I_, T_, U2, BF;
  _.c_ = !1;
  d_ = function( a ){try {_.c_ && window.console && window.console.log && window.console.log( a );} catch (c) {}};
  f_ = function( a, c ){
    if ( !a ) {
      return -1;
    }
    if ( a.indexOf ) {
      return a.indexOf( c, void 0 );
    }
    for ( var f = 0, g = a.length; f < g; f++ ) {
      if ( a[ f ] === c ) {
        return f;
      }
    }
    return -1;
  };
  q_ = function( a, c ){
    function f(){}

    if ( !a ) {
      throw'Child class cannot be empty.';
    }
    if ( !c ) {
      throw'Parent class cannot be empty.';
    }
    f.prototype = c.prototype;
    a.prototype = new f;
    a.prototype.constructor = a;
  };
  s_ = function( a ){return '[object Function]' === Object.prototype.toString.call( a );};
  _.A_ = function( a ){
    var c = {};
    if ( a ) {
      for ( var f in a ) {
        a.hasOwnProperty( f ) && ( c[ f ] = a[ f ] );
      }
    }
    return c;
  };
  E_ = function( a ){
    var c = window.location.hash;
    a = new RegExp( '[&#]' + a + '=([^&]*)' );
    c = ( 0, window.decodeURIComponent )( c );
    c = a.exec( c );
    return null == c ? '' : c[ 1 ].replace( /\+/g, ' ' );
  };
  I_ = function( a, c, f ){
    if ( a.addEventListener ) {
      a.addEventListener( c, f, !1 );
    } else if ( a.attachEvent ) {
      a.attachEvent( 'on' + c, f );
    } else {
      throw'Add event handler for ' + c + ' failed.';
    }
  };
  T_ = {token: 1, id_token: 1};
  U2 = function(){
    var a = window.navigator.userAgent.toLowerCase();
    return -1 != a.indexOf( 'msie' ) && 8 == ( 0, window.parseInt )( a.split( 'msie' )[ 1 ], 10 );
  };
  _.l0 = window.JSON;
  BF = function( a ){
    this.b$ = a || [];
    this.hg = {};
  };
  BF.prototype.addEventListener = function( a, c ){
    if ( !( 0 <= f_( this.b$, a ) ) ) {
      throw'Unrecognized event type: ' + a;
    }
    if ( !s_( c ) ) {
      throw'The listener for event \'' + a + '\' is not a function.';
    }
    this.hg[ a ] || ( this.hg[ a ] = [] );
    0 > f_( this.hg[ a ], c ) && this.hg[ a ].push( c );
  };
  BF.prototype.removeEventListener = function( a, c ){
    if ( !( 0 <= f_( this.b$, a ) ) ) {
      throw'Unrecognized event type: ' + a;
    }
    s_( c ) && this.hg[ a ] && this.hg[ a ].length && ( c = f_( this.hg[ a ], c ), 0 <= c && this.hg[ a ].splice( c,
                                                                                                                  1
    ) );
  };
  BF.prototype.dispatchEvent = function( a ){
    var c = a.type;
    if ( !( c && 0 <= f_( this.b$, c ) ) ) {
      throw'Failed to dispatch unrecognized event type: ' + c;
    }
    if ( this.hg[ c ] && this.hg[ c ].length ) {
      for ( var f = 0, g = this.hg[ c ].length; f < g; f++ ) {
        this.hg[ c ][ f ]( a );
      }
    }
  };
  var CF, UZ, QD, Qu, NU, JX, KJ, LX, np;
  CF = {};
  UZ = {};
  _.VG = {
    google: {
      authServerUrl: 'https://accounts.google.com/o/oauth2/auth',
      idpIFrameUrl: 'https://accounts.google.com/o/oauth2/iframe',
    },
  };
  _.zI = function( a, c ){
    if ( a = _.VG[ a ] ) {
      return a[ c ];
    }
  };
  QD = function(){
    this.Jr = window;
    this.wba = this.u1 = this.B$ = this.h8 = null;
  };
  QD.prototype.open = function( a, c, f, g ){
    TD( this );
    this.B$
    ? ( this.u1 && ( this.u1(), this.u1 = null ), FF( this ) )
    : this.B$ = 'authPopup' + Math.floor( 1E6 * Math.random() + 1 );
    a:{
      this.h8 = this.Jr.open( a, this.B$, c );
      try {
        if ( this.h8.focus(), this.h8.closed || 'undefined' == typeof this.h8.closed ) {
          throw Error( 'pa' );
        }
      } catch (h) {
        g && ( 0, window.setTimeout )( g, 0 );
        this.h8 = null;
        break a;
      }
      f && ( this.u1 = f, PF( this ) );
    }
  };
  var TD = function( a ){
      try {
        if ( null == a.h8 || a.h8.closed ) {
          a.h8 = null, a.B$ = null, FF( a ), a.u1 && ( a.u1(), a.u1 = null );
        }
      } catch (c) {
        a.h8 = null, a.B$ = null, FF( a );
      }
    }, PF = function( a ){a.wba = window.setInterval( function(){TD( a );}, 300 );},
    FF = function( a ){a.wba && ( window.clearInterval( a.wba ), a.wba = null );};
  UZ = UZ || {};
  var t0 = function( a, c ){
    this.Jf = a;
    this.kV = c;
    this.p_ = null;
    this.kU = !1;
  };
  t0.prototype.start = function(){
    if ( !this.kU && !this.p_ ) {
      var a = this;
      this.p_ = window.setTimeout( function(){
        a.clear();
        a.kU || ( a.Jf(), a.kU = !0 );
      }, UZ.nV( this.kV ) );
    }
  };
  t0.prototype.clear = function(){this.p_ && ( window.clearTimeout( this.p_ ), this.p_ = null );};
  var M1 = function( a, c ){
    var f = UZ.aV;
    this.WV = UZ.oU;
    this.pV = f;
    this.Jf = a;
    this.kV = c;
    this.p_ = null;
    this.kU = !1;
    var g = this;
    this.sV = function(){window.document[ g.WV ] || ( g.clear(), g.start() );};
  };
  M1.prototype.start = function(){
    if ( !this.kU && !this.p_ ) {
      I_( window.document, this.pV, this.sV );
      var a = this;
      this.p_ = window.setTimeout( function(){
        a.clear();
        a.kU || ( a.Jf(), a.kU = !0 );
      }, UZ.nV( this.kV ) );
    }
  };
  M1.prototype.clear = function(){
    var a = this.pV, c = this.sV, f = window.document;
    if ( f.removeEventListener ) {
      f.removeEventListener( a, c, !1 );
    } else if ( f.detachEvent ) {
      f.detachEvent( 'on' + a, c );
    } else {
      throw'Remove event handler for ' + a + ' failed.';
    }
    this.p_ && ( window.clearTimeout( this.p_ ), this.p_ = null );
  };
  UZ.oU = null;
  UZ.aV = null;
  UZ.uY = function(){
    'undefined' !== typeof window.document.hidden
    ? ( UZ.oU = 'hidden', UZ.aV = 'visibilitychange' )
    : 'undefined' !== typeof window.document.msHidden
      ? ( UZ.oU = 'msHidden', UZ.aV = 'msvisibilitychange' )
      : 'undefined' !== typeof window.document.webkitHidden && ( UZ.oU = 'webkitHidden', UZ.aV = 'webkitvisibilitychange' );
  };
  UZ.uY();
  UZ.VV = function( a, c ){return UZ.oU && UZ.aV ? new M1( a, c ) : new t0( a, c );};
  UZ.nV = function( a ){return Math.max( 1, a - ( new Date ).getTime() );};
  var v0 = function(){
    function a()
    {
      h[ 0 ] = 1732584193;
      h[ 1 ] = 4023233417;
      h[ 2 ] = 2562383102;
      h[ 3 ] = 271733878;
      h[ 4 ] = 3285377520;
      w = v = 0;
    }

    function c( a )
    {
      for ( var c = n, f = 0; 64 > f; f += 4 ) {
        c[ f / 4 ] = a[ f ] << 24 | a[ f + 1 ] << 16 | a[ f + 2 ] << 8 | a[ f + 3 ];
      }
      for ( f = 16; 80 > f; f++ ) {
        a = c[ f - 3 ] ^ c[ f - 8 ] ^ c[ f - 14 ] ^ c[ f - 16 ], c[ f ] = ( a << 1 | a >>> 31 ) & 4294967295;
      }
      a = h[ 0 ];
      var g = h[ 1 ], l = h[ 2 ], q = h[ 3 ], t = h[ 4 ];
      for ( f = 0; 80 > f; f++ ) {
        if ( 40 > f ) {
          if ( 20 > f ) {
            var v = q ^ g & ( l ^ q );
            var w = 1518500249;
          } else {
            v = g ^ l ^ q, w = 1859775393;
          }
        } else {
          60 > f ? ( v = g & l | q & ( g | l ), w = 2400959708 ) : ( v = g ^ l ^ q, w = 3395469782 );
        }
        v = ( ( a << 5 | a >>> 27 ) & 4294967295 ) + v + t + w + c[ f ] & 4294967295;
        t = q;
        q = l;
        l = ( g << 30 | g >>> 2 ) & 4294967295;
        g = a;
        a = v;
      }
      h[ 0 ] = h[ 0 ] + a & 4294967295;
      h[ 1 ] = h[ 1 ] + g & 4294967295;
      h[ 2 ] = h[ 2 ] + l & 4294967295;
      h[ 3 ] = h[ 3 ] + q & 4294967295;
      h[ 4 ] = h[ 4 ] + t & 4294967295;
    }

    function f( a, f )
    {
      if ( 'string' === typeof a ) {
        a = ( 0, window.unescape )( ( 0, window.encodeURIComponent )( a ) );
        for ( var g = [], h = 0, n = a.length; h < n; ++h ) {
          g.push( a.charCodeAt( h ) );
        }
        a = g;
      }
      f || ( f = a.length );
      g = 0;
      if ( 0 == v ) {
        for ( ; g + 64 < f; ) {
          c( a.slice( g, g + 64 ) ), g += 64, w += 64;
        }
      }
      for ( ; g < f; ) {
        if ( l[ v++ ] = a[ g++ ], w++, 64 == v ) {
          for ( v = 0, c( l ); g + 64 < f; ) {
            c( a.slice( g, g + 64 ) ), g += 64, w += 64;
          }
        }
      }
    }

    function g()
    {
      var a = [], g = 8 * w;
      56 > v ? f( q, 56 - v ) : f( q, 64 - ( v - 56 ) );
      for ( var n = 63; 56 <= n; n-- ) {
        l[ n ] = g & 255, g >>>= 8;
      }
      c( l );
      for ( n = g = 0; 5 > n; n++ ) {
        for ( var t = 24; 0 <= t; t -= 8 ) {
          a[ g++ ] = h[ n ] >> t & 255;
        }
      }
      return a;
    }

    for ( var h = [], l = [], n = [], q = [ 128 ], t = 1; 64 > t; ++t ) {
      q[ t ] = 0;
    }
    var v, w;
    a();
    return {
      reset: a, update: f, digest: g, Of: function(){
        for ( var a = g(), c = '', f = 0; f < a.length; f++ ) {
          c += '0123456789ABCDEF'.charAt( Math.floor( a[ f ] / 16 ) ) + '0123456789ABCDEF'.charAt( a[ f ] % 16 );
        }
        return c;
      },
    };
  }, A0 = window.crypto, B0 = !1, H0 = 0, L0 = 1, c1 = 0, F1 = '', I1 = function( a ){
    a = a || window.event;
    var c = a.screenX + a.clientX << 16;
    c += a.screenY + a.clientY;
    c *= ( new Date ).getTime() % 1E6;
    L0 = L0 * c % c1;
    if ( 3 == ++H0 ) {
      if ( a = window, c = I1, a.removeEventListener ) {
        a.removeEventListener( 'mousemove', c, !1 );
      } else if ( a.detachEvent ) {
        a.detachEvent( 'onmousemove', c );
      } else {
        throw Error( 'la`mousemove' );
      }
    }
  }, L1 = function( a ){
    var c = v0();
    c.update( a );
    return c.Of();
  };
  B0 = !!A0 && 'function' == typeof A0.getRandomValues;
  B0 || ( c1 = 1E6 * ( window.screen.width * window.screen.width + window.screen.height ), F1 = L1( window.document.cookie + '|' + window.document.location + '|' + ( new Date ).getTime() + '|' + Math.random() ), I_(
    window,
    'mousemove',
    I1
  ) );
  CF = CF || {};
  CF.KS = 'ssIFrame_';
  _.MI = function( a, c ){
    this.Rd = a;
    if ( !this.Rd ) {
      throw Error( 'Fb' );
    }
    a = _.zI( a, 'idpIFrameUrl' );
    if ( !a ) {
      throw Error( 'Gb' );
    }
    this.Laa = a;
    if ( !c ) {
      throw Error( 'Hb' );
    }
    this.y0 = c;
    a = this.Laa;
    c = window.document.createElement( 'a' );
    c.setAttribute( 'href', a );
    a = [ c.protocol, '//', c.hostname ];
    'http:' == c.protocol && '' != c.port && '0' != c.port && '80' != c.port
    ? ( a.push( ':' ), a.push( c.port ) )
    : 'https:' == c.protocol && '' != c.port && '0' != c.port && '443' != c.port && ( a.push( ':' ), a.push( c.port ) );
    this.Maa = a.join( '' );
    this.Gha = [ window.location.protocol, '//', window.location.host ].join( '' );
    this.bka = this.A7 = !1;
    this.eka = null;
    this.S4 = [];
    this.A2 = [];
    this.PU = {};
    this.a2 = void 0;
  };
  _.MI.prototype.tS = function( a ){
    if ( this.A7 ) {
      a && a( this );
    } else {
      if ( !this.a2 ) {
        var c = CF.KS + this.Rd;
        var f = this.Rd;
        var g = window.location.hostname;
        var h, l = window.document.cookie.match( '(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)' );
        l && 2 < l.length && ( h = l[ 2 ] );
        l = h && 0 <= f_( h.split( '|' ), f );
        l || ( window.document.cookie = 'G_ENABLED_IDPS=' + ( h
                                                              ? h + '|' + f
                                                              : f ) + ';domain=.' + g + ';expires=Fri, 31 Dec 9999' + ' 12:00:00 GMT;path=/' );
        f = !l;
        l = this.Laa;
        var n = this.Gha;
        g = this.y0;
        h = window.document.createElement( 'iframe' );
        h.style.position = 'absolute';
        h.style.width = '1px';
        h.style.height = '1px';
        h.style.left = '-9999px';
        h.style.display = 'none';
        h.setAttribute( 'aria-hidden', 'true' );
        h.setAttribute( 'id', c );
        h.setAttribute( 'sandbox', 'allow-scripts allow-same-origin' );
        c = [ l, '#origin=', ( 0, window.encodeURIComponent )( n ) ];
        c.push( '&rpcToken=' );
        c.push( ( 0, window.encodeURIComponent )( g ) );
        f && c.push( '&clearCache=1' );
        _.c_ && c.push( '&debug=1' );
        window.document.body.appendChild( h );
        h.setAttribute( 'src', c.join( '' ) );
        this.a2 = h;
      }
      a && this.S4.push( a );
    }
  };
  _.MI.prototype.vY = function(){return this.eka;};
  Qu = function( a ){
    for ( var c = 0; c < a.S4.length; c++ ) {
      a.S4[ c ]( a );
    }
    a.S4 = [];
  };
  _.BX = function( a, c, f, g ){
    if ( a.A7 ) {
      if ( a.A7 && a.bka ) {
        throw a = 'Failed to communicate with IDP IFrame due to unitialization error: ' + a.vY(), d_( a ), Error( a );
      }
      NU( a, {method: c, params: f}, g );
    } else {
      a.A2.push( {qf: {method: c, params: f}, Ga: g} ), a.tS();
    }
  };
  NU = function( a, c, f ){
    if ( f ) {
      for ( var g = c.id; !g || a.PU[ g ]; ) {
        g = ( new Date ).getMilliseconds() + '-' + ( 1E6 * Math.random() + 1 );
      }
      c.id = g;
      a.PU[ g ] = f;
    }
    c.rpcToken = a.y0;
    a.a2.contentWindow.postMessage( _.l0.stringify( c ), a.Maa );
  };
  JX = function( a ){
    if ( a && 0 <= a.indexOf( '::' ) ) {
      throw Error( 'Ib' );
    }
  };
  _.MI.prototype.LJ = function( a, c, f, g, h, l, n, q ){
    JX( l );
    c = _.A_( c );
    _.BX( this,
          'getTokenResponse',
          {clientId: a, loginHint: f, request: c, sessionSelector: g, forceRefresh: n, skipCache: q, id: l},
          h
    );
  };
  _.MI.prototype.Gt = function( a, c, f, g, h ){
    c = _.A_( c );
    _.BX( this, 'listIdpSessions', {clientId: a, request: c, sessionSelector: f, forceRefresh: h}, g );
  };
  KJ = function( a, c, f ){
    JX( c.identifier );
    _.BX( a, 'getSessionSelector', c, f );
  };
  _.jY = function( a, c, f, g, h ){
    JX( c.identifier );
    _.BX( a,
          'setSessionSelector',
          {domain: c.domain, crossSubDomains: c.crossSubDomains, policy: c.policy, id: c.id, hint: g, disabled: !!f},
          h
    );
  };
  LX = function( a, c, f ){_.BX( a, 'monitorClient', {clientId: c}, f );};
  _.MI.prototype.Ic = _.b( 24 );
  CF.wS = {};
  CF.ES = function( a ){return CF.wS[ a ];};
  CF.tS = function( a, c ){
    var f = CF.ES( a );
    if ( !f ) {
      f = String;
      if ( B0 ) {
        var g = new window.Uint32Array( 1 );
        A0.getRandomValues( g );
        g = Number( '0.' + g[ 0 ] );
      } else {
        g = L0, g += ( 0, window.parseInt )( F1.substr( 0, 20 ), 16 ), F1 = L1( F1 ), g /= c1 + Math.pow( 16, 20 );
      }
      f = f( 2147483647 * g );
      f = new _.MI( a, f );
      CF.wS[ a ] = f;
    }
    f.tS( c );
  };
  CF.TS = function( a ){
    for ( var c in CF.wS ) {
      var f = CF.ES( c );
      if ( f && f.a2 && f.a2.contentWindow == a.source && f.Maa == a.origin ) {
        return f;
      }
    }
  };
  CF.Pja = function( a ){
    for ( var c in CF.wS ) {
      var f = CF.ES( c );
      if ( f && f.Maa == a ) {
        return f;
      }
    }
  };
  CF = CF || {};
  var RX = function(){
    var a = [], c;
    for ( c in QX ) {
      a.push( QX[ c ] );
    }
    BF.call( this, a );
    this.VY = {};
    d_( 'EventBus is ready.' );
  };
  q_( RX, BF );
  var QX = {MS: 'sessionSelectorChanged', vS: 'sessionStateChanged', uS: 'authResult'}, gN = function( a ){
    var c = SX;
    a && ( c.VY[ a ] || ( c.VY[ a ] = [] ) );
  }, UX = function( a, c, f ){return c && a.VY[ c ] && 0 <= f_( a.VY[ c ], f );};
  _.k = RX.prototype;
  _.k.fT = function( a ){
    var c = !!a.source && a.source.opener === window;
    if ( c ) {
      var f = window.navigator.userAgent.toLowerCase();
      ( f = -1 < f.indexOf( 'safari/' ) && 0 > f.indexOf( 'chrome/' ) && 0 > f.indexOf( 'crios/' ) && 0 > f.indexOf(
        'android' ) ) || ( f = window.navigator.userAgent, f = !!f && /Edge\/\d+/.test( f ) );
      f || ( f = window.navigator.userAgent.toLowerCase(), f = 0 > f.indexOf( 'edge/' ) && ( -1 < f.indexOf( 'chrome/' ) || -1 < f.indexOf(
        'crios/' ) ) );
      if ( !f ) {
        d_( 'Messages from a popup window are not allowed for this browser.' );
        return;
      }
      f = CF.Pja( a.origin );
    } else {
      f = CF.TS( a );
    }
    if ( f ) {
      try {var g = _.l0.parse( a.data );} catch (h) {
        d_( 'Bad event, an error happened when parsing data.' );
        return;
      }
      if ( !c ) {
        if ( !g || !g.rpcToken || g.rpcToken != f.y0 ) {
          d_( 'Bad event, no RPC token.' );
          return;
        }
        if ( g.id && !g.method ) {
          c = g;
          if ( a = f.PU[ c.id ] ) {
            delete f.PU[ c.id ], a( c.result, c.error );
          }
          return;
        }
      }
      'fireIdpEvent' != g.method
      ? d_( 'Bad IDP event, method unknown.' )
      : ( a = g.params ) && a.type && this.Kaa[ a.type ] ? ( g = this.Kaa[ a.type ], c && !g.Oja ? d_(
        'Bad IDP event. Source window cannot be a popup.' ) : g.Us && !g.Us.call( this, f, a )
                                                              ? d_( 'Bad IDP event.' )
                                                              : g.Tc.call( this, f, a ) ) : d_( 'Bad IDP event.' );
    } else {
      d_( 'Bad event, no corresponding Idp Stub.' );
    }
  };
  _.k.iT = function( a, c ){return UX( this, a.Rd, c.clientId );};
  _.k.hT = function( a, c ){
    c = c.clientId;
    return !c || UX( this, a.Rd, c );
  };
  _.k.RS = function( a, c ){return UX( this, a.Rd, c.clientId );};
  _.k.cT = function( a ){
    a.A7 = !0;
    Qu( a );
    for ( var c = 0; c < a.A2.length; c++ ) {
      NU( a, a.A2[ c ].qf, a.A2[ c ].Ga );
    }
    a.A2 = [];
  };
  _.k.gka = function( a, c ){
    c = {error: c.error};
    a.A7 = !0;
    a.bka = !0;
    a.eka = c;
    a.A2 = [];
    Qu( a );
  };
  _.k.yS = function( a, c ){
    c.originIdp = a.Rd;
    this.dispatchEvent( c );
  };
  var SX = new RX, vO = SX, LQ = {};
  LQ.idpReady = {Tc: vO.cT};
  LQ.idpError = {Tc: vO.gka};
  LQ.sessionStateChanged = {Tc: vO.yS, Us: vO.iT};
  LQ.sessionSelectorChanged = {Tc: vO.yS, Us: vO.hT};
  LQ.authResult = {Tc: vO.yS, Us: vO.RS, Oja: !0};
  SX.Kaa = LQ || {};
  I_( window, 'message', function( a ){SX.fT.call( SX, a );} );
  var j0 = function( a, c ){
    this.Ux = !1;
    if ( !a ) {
      throw Error( 'Jb' );
    }
    var f = [], g;
    for ( g in a ) {
      f.push( a[ g ] );
    }
    BF.call( this, f );
    this.Db = [ window.location.protocol, '//', window.location.host ].join( '' );
    this.Ix = c.crossSubDomains ? c.domain || this.Db : this.Db;
    if ( !c ) {
      throw Error( 'Kb' );
    }
    if ( !c.idpId ) {
      throw Error( 'Lb' );
    }
    if ( !_.zI( c.idpId, 'authServerUrl' ) || !_.zI( c.idpId, 'idpIFrameUrl' ) ) {
      throw Error( 'Mb`' + c.idpId );
    }
    this.Rd = c.idpId;
    this.$k = void 0;
    this.iea = !!c.disableTokenRefresh;
    this.ZY = !!c.forceTokenRefresh;
    this.e$ = !!c.skipTokenCache;
    this.setOptions( c );
    this.F_ = [];
    this.RV = this.G7 = !1;
    this.iQ = void 0;
    this.cca();
    this.Rx = void 0;
    var h = this, l = function(){
      d_( 'Token Manager is ready.' );
      if ( h.F_.length ) {
        for ( var a = 0; a < h.F_.length; a++ ) {
          h.F_[ a ].call( h );
        }
      }
      h.G7 = !0;
      h.F_ = [];
    };
    CF.tS( this.Rd, function( a ){
      h.Rx = a;
      a.A7 && a.bka ? ( h.RV = !0, h.iQ = a.vY(), h.fka( h.iQ ) ) : h.$k ? LX( h.Rx, h.$k, function( a ){
        if ( a ) {
          a = h.Rd;
          var c = h.$k, f = SX;
          a && c && ( f.VY[ a ] || ( f.VY[ a ] = [] ), 0 > f_( f.VY[ a ], c ) && f.VY[ a ].push( c ) );
          l();
        } else {
          h.iQ = {
            error: 'Not a valid origin for the client: ' + h.Db + ' has not been whitelisted for client ID ' + h.$k + '. Please go to https://console.developers.google.com/ and whitelist this origin for your project\'s client ID.',
          }, h.RV = !0, h.fka( h.iQ );
        }
      } ) : ( gN( h.Rd ), l() );
    } );
  };
  q_( j0, BF );
  j0.prototype.setOptions = function(){};
  j0.prototype.cca = function(){};
  j0.prototype.fka = function(){};
  j0.prototype.vY = function(){return this.iQ;};
  np = function( a, c, f ){return function(){c.apply( a, f );};};
  _.gr = function( a, c, f ){
    if ( a.G7 ) {
      c.apply( a, f );
    } else {
      if ( a.RV ) {
        throw a.iQ;
      }
      a.F_.push( np( a, c, f ) );
    }
  };
  _.YX = function( a, c ){
    j0.call( this, a, c );
    this.kga = new QD;
    this.S8 = this.ija = null;
    X2( this );
  };
  q_( _.YX, j0 );
  _.YX.prototype.setOptions = function(){};
  var MJ = function( a, c ){
    a.Cs = {crossSubDomains: !!c.crossSubDomains, id: c.sessionSelectorId, domain: a.Ix};
    c.crossSubDomains && ( a.Cs.policy = c.policy );
  }, TJ = function( a, c ){
    if ( !c.authParameters ) {
      throw Error( 'Ja' );
    }
    if ( !c.authParameters.scope ) {
      throw Error( 'Ka' );
    }
    if ( !c.authParameters.response_type ) {
      throw Error( 'ma' );
    }
    a.bY = c.authParameters;
    a.bY.redirect_uri || ( a.bY.redirect_uri = [
      window.location.protocol, '//', window.location.host, window.location.pathname,
    ].join( '' ) );
    a.x0 = c.rpcAuthParameters || a.bY;
    if ( !a.x0.scope ) {
      throw Error( 'Qa' );
    }
    if ( !a.x0.response_type ) {
      throw Error( 'mb' );
    }
    a:{
      var f = a.x0.response_type.split( ' ' );
      for ( var g = 0, h = f.length; g < h; g++ ) {
        if ( f[ g ] && !T_[ f[ g ] ] ) {
          f = !0;
          break a;
        }
      }
      f = !1;
    }
    if ( f ) {
      throw Error( 'rb' );
    }
    c.authResultIdentifier && ( a.Hda = c.authResultIdentifier );
  };
  _.YX.prototype.cca = function(){
    var a = this;
    SX.addEventListener( QX.MS, function( c ){
      a.Ux && a.Cs && c.originIdp == a.Rd && !c.crossSubDomains == !a.Cs.crossSubDomains && c.domain == a.Cs.domain && c.id == a.Cs.id && a.Hba(
        c );
    } );
    SX.addEventListener( QX.vS, function( c ){a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && a.Iba( c );} );
    SX.addEventListener( QX.uS, function( c ){
      a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && c.id == a.X4 && ( a.ija && ( window.clearTimeout( a.ija ), a.ija = null ), a.X4 = void 0, a.k8(
        c ) );
    } );
  };
  _.YX.prototype.Hba = function(){};
  _.YX.prototype.Iba = function(){};
  _.YX.prototype.k8 = function(){};
  var ZX = function( a, c ){
    A2( a );
    a.iea || ( a.S8 = UZ.VV( function(){a.LJ( !0 );}, c - 3E5 ), window.navigator.onLine && a.S8.start() );
  }, A2 = function( a ){a.S8 && ( a.S8.clear(), a.S8 = null );}, X2 = function( a ){
    var c = window;
    U2() && ( c = window.document.body );
    I_( c, 'online', function(){a.S8 && a.S8.start();} );
    I_( c, 'offline', function(){a.S8 && a.S8.clear();} );
  };
  _.YX.prototype.LJ = function(){};
  _.YX.prototype.oV = _.b( 25 );
  _.YX.prototype.cu = function( a, c ){
    if ( !this.$k ) {
      throw Error( 'pb' );
    }
    this.Rx.Gt( this.$k, this.x0, this.Cs, a, c );
  };
  _.YX.prototype.Gt = function( a, c ){_.gr( this, this.cu, [ a, c ] );};
  _.bY = function( a ){
    this.Bp = void 0;
    this.eJ = !1;
    this.E0 = void 0;
    _.YX.call( this, _.aY, a );
  };
  q_( _.bY, _.YX );
  _.aY = {
    LS: 'noSessionBound',
    lS: 'userLoggedOut',
    IS: 'activeSessionChanged',
    vS: 'sessionStateChanged',
    QS: 'tokenReady',
    PS: 'tokenFailed',
    uS: 'authResult',
    ERROR: 'error',
  };
  _.bY.prototype.setOptions = function( a ){
    if ( !a.clientId ) {
      throw Error( 'Nb' );
    }
    this.$k = a.clientId;
    this.El = a.id;
    MJ( this, a );
    TJ( this, a );
  };
  _.bY.prototype.fka = function( a ){
    this.dispatchEvent( {
                          type: _.aY.ERROR, error: 'idpiframe_initialization_failed', details: a.error, idpId: this.Rd,
                        } );
  };
  var cY = function( a ){
    A2( a );
    a.E0 = void 0;
    a.Q7 = void 0;
  };
  _.k = _.bY.prototype;
  _.k.Hba = function( a ){
    var c = a.newValue || {};
    if ( this.Bp != c.hint || this.eJ != !!c.disabled ) {
      a = this.Bp;
      var f = !this.Bp || this.eJ;
      cY( this );
      this.Bp = c.hint;
      this.eJ = !!c.disabled;
      ( c = !this.Bp || this.eJ ) && !f
      ? this.dispatchEvent( {type: _.aY.lS, idpId: this.Rd} )
      : c || ( a != this.Bp && this.dispatchEvent( {type: _.aY.IS, idpId: this.Rd} ), this.Bp && this.LJ() );
    }
  };
  _.k.Iba = function( a ){
    this.eJ || ( this.Bp ? a.user || this.E0
                           ? a.user == this.Bp && ( this.E0
                                                    ? a.sessionState
                                                      ? this.E0 = a.sessionState
                                                      : ( cY( this ), this.dispatchEvent( {
                                                                                            type: _.aY.lS,
                                                                                            idpId: this.Rd,
                                                                                          } ) )
                                                    : a.sessionState && ( this.E0 = a.sessionState, this.LJ() ) )
                           : this.LJ() : this.dispatchEvent( {type: _.aY.vS, idpId: this.Rd} ) );
  };
  _.k.k8 = function( a ){this.dispatchEvent( {type: _.aY.uS, authResult: a.authResult} );};
  _.k.lja = _.b( 27 );
  _.k.H1 = function( a ){_.gr( this, this.a7, [ a ] );};
  _.k.a7 = function( a ){KJ( this.Rx, this.Cs, a );};
  _.k.DS = function( a, c, f ){
    if ( !a ) {
      throw Error( 'Ob' );
    }
    cY( this );
    this.Bp = a;
    this.eJ = !1;
    c && _.jY( this.Rx, this.Cs, !1, this.Bp );
    this.Ux = !0;
    this.LJ( f );
  };
  _.k.start = function(){_.gr( this, this.Bv, [] );};
  _.k.Bv = function(){
    var a = this.$k == E_( 'client_id' ) ? E_( 'login_hint' ) : void 0;
    if ( a ) {
      window.history.replaceState ? window.history.replaceState( null,
                                                                 window.document.title,
                                                                 window.location.href.split( '#' )[ 0 ]
      ) : window.location.href.hash = '', this.DS(
        a,
        !0,
        !0
      );
    } else {
      var c = this;
      this.H1( function( a ){
        c.Ux = !0;
        a && a.hint
        ? ( cY( c ), c.Bp = a.hint, c.eJ = !!a.disabled, c.eJ ? c.dispatchEvent( {
                                                                                   type: _.aY.lS,
                                                                                   idpId: c.Rd,
                                                                                 } ) : c.DS( a.hint ) )
        : ( cY( c ), c.Bp = void 0, c.eJ = !( !a || !a.disabled ), c.dispatchEvent( {
                                                                                      type: _.aY.LS,
                                                                                      autoOpenAuthUrl: !c.eJ,
                                                                                      idpId: c.Rd,
                                                                                    } ) );
      } );
    }
  };
  _.k.Bea = _.b( 28 );
  _.k.LJ = function( a ){
    var c = this;
    this.Rx.LJ( this.$k, this.x0, this.Bp, this.Cs, function( a, g ){
      ( g = g || a.error )
      ? 'user_logged_out' == g
        ? ( cY( c ), c.dispatchEvent( {type: _.aY.lS, idpId: c.Rd} ) )
        : ( c.Q7 = null, c.dispatchEvent( {type: _.aY.PS, idpId: c.Rd, error: g} ) )
      : ( c.Q7 = a, c.E0 = a.session_state, ZX( c, a.expires_at ), a.idpId = c.Rd, c.dispatchEvent( {
                                                                                                      type: _.aY.QS,
                                                                                                      idpId: c.Rd,
                                                                                                      response: a,
                                                                                                    } ) );
    }, this.El, a );
  };
  _.k.Ic = _.b( 23 );
  _.k.a9 = _.b( 29 );
  _.aK = function( a ){
    this.V5 = null;
    _.YX.call( this, {}, a );
    this.Ux = !0;
  };
  q_( _.aK, _.YX );
  _.k = _.aK.prototype;
  _.k.setOptions = function( a ){
    if ( !a.clientId ) {
      throw Error( 'Nb' );
    }
    this.$k = a.clientId;
    this.El = a.id;
    MJ( this, a );
    TJ( this, a );
  };
  _.k.fka = function( a ){
    this.V5 && ( this.V5( {
                            authResult: {
                              error: 'idpiframe_initialization_failed', details: a.error,
                            },
                          } ), this.V5 = null );
  };
  _.k.k8 = function( a ){
    if ( this.V5 ) {
      var c = this.V5;
      this.V5 = null;
      c( a );
    }
  };
  _.k.lja = _.b( 26 );
  _.k.H1 = function( a ){this.RV ? a( this.vY() ) : _.gr( this, this.a7, [ a ] );};
  _.k.a7 = function( a ){KJ( this.Rx, this.Cs, a );};
  _.OF = function( a, c, f ){a.RV ? f( a.vY() ) : _.gr( a, a.Yt, [ c, f ] );};
  _.aK.prototype.Yt = function( a, c ){
    this.Rx.LJ( this.$k,
                this.x0,
                a,
                this.Cs,
                function( a, g ){g ? c( {error: g} ) : c( a );},
                this.El,
                this.ZY,
                this.e$
    );
  };
  _.aK.prototype.aka = _.b( 30 );

  var tE = function( a, c, f ){
    if ( !a.Ux ) {
      throw Error( 'nb' );
    }
    c ? _.jY( a.Rx, a.Cs, !0, void 0, f ) : _.jY( a.Rx, a.Cs, !0, a.Bp, f );
  }, $R = function( a ){
    if ( !a.Ux ) {
      throw Error( 'nb' );
    }
    return a.Q7;
  }, P1, Q1, SF, nv, Tz, rl, mO, V_, mY, Ks, N1;
  _.aK.prototype.aka = _.d( 30, function( a, c ){
    var f = this.Rx, g = this.$k, h = this.Cs, l = _.A_( this.x0 );
    delete l.response_type;
    _.BX( f, 'getOnlineCode', {clientId: g, loginHint: a, request: l, sessionSelector: h}, c );
  } );
  _.bY.prototype.a9 = _.d( 29, function( a ){
    $R( this ) && $R( this ).access_token && ( this.Rx.Ic( this.$k, $R( this ).access_token, a ), tE( this, !0 ) );
  } );
  _.bY.prototype.Bea = _.d( 28, function(){
    var a = this;
    this.H1( function( c ){
      c && c.hint
      ? c.disabled ? a.dispatchEvent( {type: _.aY.lS, idpId: a.Rd} ) : a.LJ( !0 )
      : a.dispatchEvent( {type: _.aY.LS, idpId: a.Rd} );
    } );
  } );
  _.bY.prototype.lja = _.d( 27, function(){
    var a = this;
    return function( c ){
      c && c.authResult && c.authResult.login_hint && a.DS( c.authResult.login_hint,
                                                            a.eJ || c.authResult.login_hint != a.Bp,
                                                            !0
      );
    };
  } );
  _.aK.prototype.lja = _.d( 26, function( a ){
    var c = this;
    return function( f ){
      f && f.authResult && f.authResult.login_hint ? c.H1( function( g ){
        _.jY( c.Rx, c.Cs, g && g.disabled, f.authResult.login_hint, function(){
          _.OF( c, f.authResult.login_hint, a );
        } );
      } ) : a( f && f.authResult && f.authResult.error ? f.authResult : f && f.authResult && !f.authResult.login_hint
                                                                        ? {error: 'wrong_response_type'}
                                                                        : {error: 'unknown_error'} );
    };
  } );
  _.YX.prototype.oV = _.d( 25, function(){
    this.$k && _.BX( this.Rx, 'startPolling', {clientId: this.$k, origin: this.Db, id: this.X4}, void 0 );
  } );
  _.MI.prototype.Ic = _.d( 24, function( a, c, f ){_.BX( this, 'revoke', {clientId: a, token: c}, f );} );
  _.bY.prototype.Ic = _.d( 23, function( a ){_.gr( this, this.a9, [ a ] );} );
  P1 = function(){
    var a = window.navigator.userAgent, c;
    if ( c = !!a && -1 != a.indexOf( 'CriOS' ) ) {
      c = -1, ( a = a.match( /CriOS\/(\d+)/ ) ) && a[ 1 ] && ( c = ( 0, window.parseInt )( a[ 1 ],
                                                                                           10
      ) || -1 ), c = 48 > c;
    }
    return c;
  };
  Q1 = function( a, c, f, g, h, l ){
    var n = _.zI( a, 'authServerUrl' );
    if ( !n ) {
      throw Error( 'ka`' + a );
    }
    a = _.A_( g );
    a.response_type = l || 'permission';
    a.client_id = f;
    a.ss_domain = c;
    if ( h && h.extraQueryParams ) {
      for ( var q in h.extraQueryParams ) {
        a[ q ] = h.extraQueryParams[ q ];
      }
    }
    c = n + ( 0 > n.indexOf( '?' ) ? '?' : '&' );
    f = [];
    for ( var t in a ) {
      if ( a.hasOwnProperty( t ) ) {
        h = a[ t ];
        if ( null === h || void 0 === h ) {
          h = '';
        }
        f.push( ( 0, window.encodeURIComponent )( t ) + '=' + ( 0, window.encodeURIComponent )( h ) );
      }
    }
    return c + f.join( '&' );
  };
  SF = function( a, c, f, g ){
    if ( !a.$k ) {
      throw Error( 'ob' );
    }
    a.X4 = f || a.Hda || 'auth' + Math.floor( 1E6 * Math.random() + 1 );
    c = c || {};
    c.extraQueryParams = c.extraQueryParams || {};
    if ( !c.extraQueryParams.redirect_uri ) {
      var h = a.Db.split( '//' );
      f = c.extraQueryParams;
      var l = h[ 0 ], n = l.indexOf( ':' );
      0 < n && ( l = l.substring( 0, n ) );
      h = [ 'storagerelay://', l, '/', h[ 1 ], '?' ];
      h.push( 'id=' + a.X4 );
      f.redirect_uri = h.join( '' );
    }
    return Q1( a.Rd, a.Ix, a.$k, a.bY, c, g );
  };
  nv = function( a, c, f ){
    if ( !a.$k ) {
      throw Error( 'ob' );
    }
    return Q1( a.Rd, a.Ix, a.$k, a.bY, c, f );
  };
  Tz = function( a, c ){
    a.ija && window.clearTimeout( a.ija );
    a.ija = window.setTimeout(
      function(){a.X4 == c && ( a.ija = null, a.X4 = void 0, a.k8( {authResult: {error: 'popup_closed_by_user'}} ) );},
      1E3
    );
  };
  rl = function( a, c, f ){
    if ( !a.$k ) {
      throw Error( 'Pb' );
    }
    f = f || {};
    f = SF( a, f.sessionMeta, f.oneTimeId, f.responseType );
    ( Object.hasOwnProperty.call( window, 'ActiveXObject' ) && !window.ActiveXObject || P1() ) && _.gr( a, a.oV, [] );
    var g = a.X4;
    a.kga.open( f, c, function(){a.X4 == g && Tz( a, g );}, function(){
      a.X4 = void 0;
      a.k8( {authResult: {error: 'popup_blocked_by_browser'}} );
    } );
  };
  mO = function( a ){_.gr( a, a.Bea, [] );};
  V_ = function( a, c, f ){a.RV ? f( a.vY() ) : _.gr( a, a.aka, [ c, f ] );};
  mY = function( a ){return Array.prototype.concat.apply( [], arguments );};
  _.yx = function( a ){
    for ( var c = [], f = 0, g = 0; f < a.length; ) {
      var h = a[ f++ ];
      if ( 128 > h ) {
        c[ g++ ] = String.fromCharCode( h );
      } else if ( 191 < h && 224 > h ) {
        var l = a[ f++ ];
        c[ g++ ] = String.fromCharCode( ( h & 31 ) << 6 | l & 63 );
      } else if ( 239 < h && 365 > h ) {
        l = a[ f++ ];
        var n = a[ f++ ], q = a[ f++ ];
        h = ( ( h & 7 ) << 18 | ( l & 63 ) << 12 | ( n & 63 ) << 6 | q & 63 ) - 65536;
        c[ g++ ] = String.fromCharCode( 55296 + ( h >> 10 ) );
        c[ g++ ] = String.fromCharCode( 56320 + ( h & 1023 ) );
      } else {
        l = a[ f++ ], n = a[ f++ ], c[ g++ ] = String.fromCharCode( ( h & 15 ) << 12 | ( l & 63 ) << 6 | n & 63 );
      }
    }
    return c.join( '' );
  };
  _.nw = function( a, c ){
    function f( c )
    {
      for ( ; g < a.length; ) {
        var f = a.charAt( g++ ), h = _.ch[ f ];
        if ( null != h ) {
          return h;
        }
        if ( !_.im( f ) ) {
          throw Error( 'Sa`' + f );
        }
      }
      return c;
    }

    _.vi();
    for ( var g = 0; ; ) {
      var h = f( -1 ), l = f( 0 ), n = f( 64 ), q = f( 64 );
      if ( 64 === q && -1 === h ) {
        break;
      }
      c( h << 2 | l >> 4 );
      64 != n && ( c( l << 4 & 240 | n >> 2 ), 64 != q && c( n << 6 & 192 | q ) );
    }
  };
  Ks = function( a ){
    var c = [];
    _.nw( a, function( a ){c.push( a );} );
    return c;
  };
  _.RF = function( a, c ){_.Hb[ c || 'token' ] = a;};
  _.Kb = function( a ){delete _.Hb[ a || 'token' ];};
  N1 = function(){
    var a = window.crypto || window.msCrypto;
    a && a.getRandomValues && ( this.pT = !0, this.bT = window.Infinity );
    if ( 1 > this.bT ) {
      var c = this.pB;
      a = this.bT;
      this.pB = '';
      this.bT = 1;
      a = Math.max( 0, a );
      if ( !this.pT ) {
        c = this.oT + c;
        var f = new _.xb;
        f.update( c );
        c = String.fromCharCode.apply( String, f.digest() );
        this.kT += a;
        this.kT >= this.bT ? ( f.reset(), f.update( 'SEED_SALT:' + c + this.pB ), this.pB = String.fromCharCode.apply(
          String,
          f.digest()
        ), this.oT = '', this.kT = 0 ) : this.oT = c;
      }
    }
  };
  _.k = N1.prototype;
  _.k.pT = !1;
  _.k.pB = '';
  _.k.oT = '';
  _.k.kT = 0;
  _.k.bT = -1;
  var U1 = function( a ){
    var c = S1, f = [];
    if ( c.pT ) {
      a = new window.Uint8Array( Math.min( 65536,
                                           a || 1
      ) ), ( window.crypto || window.msCrypto ).getRandomValues( a ), f = [].slice.call( a );
    } else {
      if ( 0 > c.bT || 0 == c.pB.length ) {
        throw new T1;
      }
      var g = new _.xb;
      g.update( 'RANDOM_SALT:' + c.pB );
      var h = g.digest();
      null !== h && ( g.reset(), g.update( 'SEED_SALT:' + c.pB ), c.pB = String.fromCharCode.apply( String,
                                                                                                    g.digest()
      ), f = h.slice( 0, a || h.length ) );
    }
    return f;
  }, T1 = function(){};
  _.J( T1, Error );
  T1.prototype.name = 'Insufficient Entropy';
  _.l0 = {
    parse: function( a ){
      a = _.of( '[' + String( a ) + ']' );
      if ( !1 === a || 1 !== a.length ) {
        throw new SyntaxError( 'JSON parsing failed.' );
      }
      return a[ 0 ];
    }, stringify: function( a ){return _.mf( a );},
  };
  _.aK.prototype.S3 = function( a, c ){_.gr( this, this.C8, [ a, c ] );};
  _.aK.prototype.C8 = function( a, c ){this.Rx.S3( this.$k, a, this.x0, this.Cs, c );};
  _.MI.prototype.S3 = function( a, c, f, g, h ){
    f = _.A_( f );
    _.BX( this, 'gsi:fetchLoginHint', {clientId: a, loginHint: c, request: f, sessionSelector: g}, h );
  };
  var pF, kZ = [ 'client_id', 'cookie_policy', 'scope' ],
    GN = 'client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh' +
      ' login_hint app_package_name ux_mode redirect_uri state prompt oidc_spec_compliant nonce' +
      ' include_granted_scopes response_type session_selection gsiwebsdk'.split(
      ' ' ), iw = [ 'authuser', 'after_redirect', 'access_type', 'hl' ],
    EB = [ 'app_package_name', 'login_hint', 'prompt' ], wW = {clientid: 'client_id', cookiepolicy: 'cookie_policy'},
    UD = 'approval_prompt app_package_name authuser login_hint prompt hd'.split( ' ' ),
    WF = [ 'login_hint', 'g-oauth-window', 'status' ],
    nY = Math.min( _.P( 'oauth-flow/authWindowWidth', 599 ), window.screen.width - 20 ),
    oY = Math.min( _.P( 'oauth-flow/authWindowHeight', 600 ), window.screen.height - 30 );
  var uO = function( a ){_.se.call( this, a );};
  _.J( uO, _.se );
  uO.prototype.name = 'gapi.auth2.ExternallyVisibleError';
  var cm = function(){};
  cm.prototype.select = function( a, c ){
    if ( a.sessions && 1 == a.sessions.length && ( a = a.sessions[ 0 ], a.login_hint ) ) {
      c( a );
      return;
    }
    c();
  };
  var gv = function(){};
  gv.prototype.select = function( a, c ){
    if ( a.sessions && a.sessions.length ) {
      for ( var f = 0; f < a.sessions.length; f++ ) {
        var g = a.sessions[ f ];
        if ( g.login_hint ) {
          c( g );
          return;
        }
      }
    }
    c();
  };
  var KW = function( a ){this.Uka = a;};
  KW.prototype.select = function( a, c ){
    if ( a.sessions ) {
      for ( var f = 0; f < a.sessions.length; f++ ) {
        var g = a.sessions[ f ];
        if ( g.session_state && g.session_state.extraQueryParams && g.session_state.extraQueryParams.authuser == this.Uka ) {
          g.login_hint ? c( g ) : c();
          return;
        }
      }
    }
    c();
  };
  var dm = function( a ){
    this.$K = a;
    this.UH = [];
  };
  dm.prototype.select = function( a ){
    var c = 0, f = this, g = function( h ){
      if ( h ) {
        a( h );
      } else {
        var l = f.UH[ c ];
        l ? ( c++, f.$K.Gt( function( a ){a ? l.select( a, g ) : g();} ) ) : a();
      }
    };
    g();
  };
  var WW = function( a ){
    a = new dm( a );
    a.UH.push( new cm );
    return a;
  }, iv = function( a ){
    a = new dm( a );
    a.UH.push( new gv );
    return a;
  }, lX = function( a, c ){
    void 0 === c || null === c ? c = WW( a ) : ( a = new dm( a ), a.UH.push( new KW( c ) ), c = a );
    return c;
  };
  var mF = function( a ){
    this.Tc = a;
    this.kh = !0;
  };
  mF.prototype.remove = function(){this.kh = !1;};
  mF.prototype.trigger = function(){};
  var nF = function( a ){
    this.remove = function(){a.remove();};
    this.trigger = function(){a.trigger();};
  }, sF = function(){this.hg = [];};
  sF.prototype.add = function( a ){this.hg.push( a );};
  sF.prototype.notify = function( a ){
    for ( var c = this.hg, f = [], g = 0; g < c.length; g++ ) {
      var h = c[ g ];
      h.kh && ( f.push( h ), _.qk( pY( h.Tc, a ) ) );
    }
    this.hg = f;
  };
  var pY = function( a, c ){return function(){a( c );};};
  var xF = function( a ){
    this.Ab = null;
    this.Aia = new vF( this );
    this.hg = new sF;
    void 0 != a && this.set( a );
  };
  xF.prototype.set = function( a ){a != this.Ab && ( this.Ab = a, this.Aia.value = a, this.hg.notify( this.Ab ) );};
  xF.prototype.get = function(){return this.Ab;};
  xF.prototype.Ei = function( a ){
    a = new yF( this, a );
    this.hg.add( a );
    return a;
  };
  var yF = function( a, c ){
    mF.call( this, c );
    this.sga = a;
  };
  _.J( yF, mF );
  yF.prototype.trigger = function(){
    var a = this.Tc;
    a( this.sga.get() );
  };
  var vF = function( a ){
    this.value = null;
    this.Ei = function( c ){return new nF( a.Ei( c ) );};
  };
  var hY = {
    XV: 'app_package_name',
    iU: 'fetch_basic_profile',
    TT: 'login_hint',
    $ja: 'prompt',
    Qs: 'redirect_uri',
    dU: 'scope',
    Hka: 'ux_mode',
  }, iY = function( a ){
    this.zd = {};
    if ( a && !_.Og( a ) ) {
      if ( 'function' == typeof a.get ) {
        this.zd = a.get();
      } else {
        for ( var c in hY ) {
          var f = hY[ c ];
          f in a && ( this.zd[ f ] = a[ f ] );
        }
      }
    }
  };
  iY.prototype.get = function(){return this.zd;};
  iY.prototype.yca = function( a ){
    this.zd.scope = a;
    return this;
  };
  iY.prototype.P1 = function(){return this.zd.scope;};
  var qF = function( a, c ){
    var f = a.zd.scope;
    c = mY( c.split( ' ' ), f ? f.split( ' ' ) : [] );
    _.RE( c );
    a.zd.scope = c.join( ' ' );
  };
  iY.prototype.Vha = function( a ){
    this.zd.prompt = a;
    return this;
  };
  iY.prototype.ifa = function(){return this.zd.prompt;};
  iY.prototype.Pha = function( a ){
    this.zd.app_package_name = a;
    return this;
  };
  iY.prototype.Fea = function(){return this.zd.app_package_name;};
  var ol = function(){
    return [
      'toolbar=no',
      'location=' + ( window.opera ? 'no' : 'yes' ),
      'directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no',
      'width=' + nY,
      'height=' + oY,
      'top=' + ( window.screen.height - oY ) / 2,
      'left=' + ( window.screen.width - nY ) / 2,
    ].join();
  }, XE = function( a ){
    a = a && a.id_token;
    if ( !a || !a.split( '.' )[ 1 ] ) {
      return null;
    }
    a = ( a.split( '.' )[ 1 ] + '...' ).replace( /^((....)+).?.?.?$/, '$1' );
    return JSON.parse( _.yx( Ks( a ) ) );
  }, bm = function(){
    pF = _.P( 'auth2/idpValue', 'google' );
    var a = _.P( 'oauth-flow/authUrl', 'https://accounts.google.com/o/oauth2/auth' ),
      c = _.P( 'oauth-flow/idpIframeUrl', 'https://accounts.google.com/o/oauth2/iframe' );
    a = {authServerUrl: a, idpIFrameUrl: c};
    c = pF;
    if ( !c ) {
      throw Error( 'da' );
    }
    if ( !a.authServerUrl ) {
      throw Error( 'ia' );
    }
    if ( !a.idpIFrameUrl ) {
      throw Error( 'ja' );
    }
    _.VG[ c ] = {authServerUrl: a.authServerUrl, idpIFrameUrl: a.idpIFrameUrl};
  }, Gw = function( a, c, f ){
    for ( var g = 0; g < c.length; g++ ) {
      var h = c[ g ];
      if ( g === c.length - 1 ) {
        a[ h ] = f;
        break;
      }
      _.Vg( a[ h ] ) || ( a[ h ] = {} );
      a = a[ h ];
    }
  }, uA = function(){
    var a = window.location.origin;
    a || ( a = window.location.protocol + '//' + window.location.host );
    return a;
  };
  var WE = function( a ){
    var c = a ? ( c = XE( a ) ) ? c.sub : null : null;
    this.El = c;
    this.Zi = a ? _.rf( a ) : null;
  };
  _.k = WE.prototype;
  _.k.Hh = function(){return this.El;};
  _.k.eU = function(){
    var a = XE( this.Zi );
    return a ? a.hd : null;
  };
  _.k.jz = function(){return !!this.Zi;};
  _.k.DT = function( a ){
    if ( a ) {
      return this.Zi;
    }
    a = HE;
    var c = _.rf( this.Zi );
    !a.d2 || a.u7 || a.Ofa || ( delete c.access_token, delete c.scope );
    return c;
  };
  _.k.T8 = function(){return HE.T8();};
  _.k.BT = function(){this.Zi = null;};
  _.k.Dl = function(){return this.Zi ? this.Zi.scope : null;};
  _.k.update = function( a ){
    this.El = a.El;
    this.Zi = a.Zi;
    this.Zi.id_token ? this.w3 = new PG( this.Zi ) : this.w3 && ( this.w3 = null );
  };
  var wE = function( a ){
    return a.Zi && 'object' == typeof a.Zi.session_state ? _.rf( a.Zi.session_state.extraQueryParams || {} ) : {};
  };
  _.k = WE.prototype;
  _.k.fk = function(){
    var a = wE( this );
    return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null;
  };
  _.k.W2 = function( a ){
    var c = HE, f = new iY( a );
    c.u7 = f.P1() ? !0 : !1;
    HE.d2 && qF( f, 'openid profile email' );
    return new _.C( function( a, h ){
      var g = wE( this );
      g.login_hint = this.Hh();
      g.scope = f.P1();
      qY( c, a, h, g );
    }, this );
  };
  _.k.Q1 = function( a ){
    return new _.C( function( c, f ){
      var g = a || {}, h = HE;
      g.login_hint = this.Hh();
      h.Q1( g ).
        then( c, f );
    }, this );
  };
  _.k.sY = function( a ){return this.W2( a );};
  _.k.disconnect = function(){return HE.disconnect();};
  _.k.rY = function(){return this.w3;};
  _.k.qV = function( a ){
    if ( !this.jz() ) {
      return !1;
    }
    var c = this.Zi && this.Zi.scope ? this.Zi.scope.split( ' ' ) : '';
    return ( 0, _.Fe )( a ? a.split( ' ' ) : [], function( a ){return _.ve( c, a );} );
  };
  var PG = function( a ){
    a = XE( a );
    this.Eea = a.sub;
    this.ig = a.name;
    this.ofa = a.given_name;
    this.wea = a.family_name;
    this.Paa = a.picture;
    this.U3 = a.email;
  };
  _.k = PG.prototype;
  _.k.Hh = function(){return this.Eea;};
  _.k.getName = function(){return this.ig;};
  _.k.CY = function(){return this.ofa;};
  _.k.BY = function(){return this.wea;};
  _.k.Uea = function(){return this.Paa;};
  _.k.a4 = function(){return this.U3;};
  var Ay = function( a, c, f ){
    this.j8 = c;
    this.Xo = a;
    for ( var g in a ) {
      a.hasOwnProperty( g ) && Qv( this, g );
    }
    if ( f && f.length ) {
      for ( a = 0; a < f.length; a++ ) {
        this[ f[ a ] ] = this.j8[ f[ a ] ];
      }
    }
  }, Qv = function( a, c ){a[ c ] = function(){return a.Xo[ c ].apply( a.j8, arguments );};};
  Ay.prototype.then = function( a, c, f ){
    var g = this;
    return _.Nu().
             then( function(){return EQ( g.j8, a, c, f );} );
  };
  _.Rp( Ay );
  var Ex;
  Ex = function( a ){
    var c = window.location;
    if ( a && 'none' != a ) {
      return 'single_host_origin' == a ? c.protocol + '//' + c.host : a;
    }
  };
  _.tY = function( a ){
    if ( !a ) {
      throw new uO( 'No cookiePolicy' );
    }
    var c = window.location.hostname;
    'single_host_origin' == a && ( a = window.location.protocol + '//' + c );
    if ( 'none' == a ) {
      return null;
    }
    var f = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec( a );
    if ( !f ) {
      throw new uO( 'Invalid cookiePolicy' );
    }
    a = f[ 2 ];
    f = f[ 1 ];
    var g = {};
    g.dotValue = a.split( '.' ).length;
    g.isSecure = -1 != f.indexOf( 'https' );
    g.domain = a;
    if ( !_.jr( c, '.' + a ) && !_.jr( c, a ) ) {
      throw new uO( 'Invalid cookiePolicy domain' );
    }
    return g;
  };
  var S1 = new N1, V1 = function(){
    try {
      for ( var a = [], c = 0; 64 > a.length && 128 > c; ) {
        a.push.apply( a, U1( 64 - a.length ) ), c++;
      }
      if ( 64 > a.length ) {
        throw new T1;
      }
      var f = a.slice( 0, 64 );
    } catch (g) {
      for ( f = [], a = 0; 64 > a; a++ ) {
        f[ a ] = Math.floor( 256 * Math.random() );
      }
    }
    return _.aB( f, !0 ).
             substring( 0, 64 );
  };
  var vm = function( a ){
    var c = a || {}, f = km();
    ( 0, _.Be )( GN,
                 function( a ){'undefined' === typeof c[ a ] && 'undefined' !== typeof f[ a ] && ( c[ a ] = f[ a ] );}
    );
    return c;
  }, km = function(){
    for ( var a = {}, c = window.document.getElementsByTagName( 'meta' ), f = 0; f < c.length; ++f ) {
      if ( c[ f ].name ) {
        var g = c[ f ].name;
        if ( 0 == g.indexOf( 'google-signin-' ) ) {
          g = g.substring( 14 );
          var h = c[ f ].content;
          wW[ g ] && ( g = wW[ g ] );
          _.ve( GN, g ) && h && ( a[ g ] = 'true' == h ? !0 : 'false' == h ? !1 : h );
        }
      }
    }
    return a;
  }, Xx = function( a ){
    return String( a ).
      replace( /_([a-z])/g, function( a, f ){return f.toUpperCase();} );
  }, ey = function( a ){
    ( 0, _.Be )( GN, function( c ){
      var f = Xx( c );
      'undefined' !== typeof a[ f ] && 'undefined' === typeof a[ c ] && ( a[ c ] = a[ f ], delete a[ f ] );
    } );
  }, Mm = function( a ){
    a = vm( a );
    ey( a );
    a.cookie_policy || ( a.cookie_policy = 'single_host_origin' );
    var c = GN + iw, f;
    for ( f in a ) {
      0 > c.indexOf( f ) && delete a[ f ];
    }
    return a;
  }, Nm = function( a, c ){
    if ( !a ) {
      throw new uO( 'Empty initial options.' );
    }
    for ( var f = 0; f < kZ.length; ++f ) {
      if ( !( c && 'scope' == kZ[ f ] || a[ kZ[ f ] ] ) ) {
        throw new uO( 'Missing required parameter \'' + kZ[ f ] + '\'' );
      }
    }
    _.tY( a.cookie_policy );
  }, Om = function( a ){
    var c = {
      authParameters: {
        redirect_uri: void 0, response_type: 'token id_token', scope: a.scope, 'openid.realm': a.openid_realm,
      },
      clientId: a.client_id,
      crossSubDomains: !0,
      domain: Ex( a.cookie_policy ),
      disableTokenRefresh: !!a.disable_token_refresh,
      idpId: pF,
    };
    ( 0, _.Be )( EB, function( f ){a[ f ] && ( c.authParameters[ f ] = a[ f ] );} );
    return c;
  }, gz = function( a ){
    var c = a.client_id, f = a.cookie_policy, g = a.scope, h = a.openid_realm, l = a.hosted_domain,
      n = a.oidc_spec_compliant, q = a.nonce, t = my( a ), v = {
        authParameters: {response_type: t, scope: g, 'openid.realm': h},
        rpcAuthParameters: {response_type: t, scope: g, 'openid.realm': h},
        clientId: c,
        crossSubDomains: !0,
        domain: Ex( f ),
        idpId: pF,
      };
    l && ( v.authParameters.hd = l, v.rpcAuthParameters.hd = l );
    n && ( v.rpcAuthParameters.spec_compliant = n, q = q || V1() );
    q && ( v.authParameters.nonce = q, v.rpcAuthParameters.nonce = q, v.forceTokenRefresh = !0, v.skipTokenCache = !0 );
    ( 0, _.Be )( EB.concat( iw ), function( c ){a[ c ] && ( v.authParameters[ c ] = a[ c ] );} );
    void 0 !== a.authuser && null !== a.authuser && ( v.authParameters.authuser = a.authuser );
    'boolean' == typeof a.include_granted_scopes && ( c = new Tm( a.response_type || 'token' ), Cs( c ) && ( v.authParameters.include_granted_scopes = a.include_granted_scopes ), Ey(
      c ) && ( v.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes, !1 === a.include_granted_scopes && ( v.forceTokenRefresh = !0, v.skipTokenCache = !0 ) ) );
    return v;
  }, my = function( a ){
    a = new Tm( a.response_type || 'token' );
    var c = [];
    Ey( a ) && c.push( 'token' );
    kn( a, 'id_token' ) && c.push( 'id_token' );
    0 == c.length && ( c = [ 'token', 'id_token' ] );
    return c.join( ' ' );
  }, ym = [ 'permission', 'id_token' ], zm = /(^|[^_])token/, Tm = function( a ){
    this.E2 = [];
    this.uja( a );
  };
  Tm.prototype.uja = function( a ){
    a ? ( ( 0 <= a.indexOf( 'permission' ) || a.match( zm ) ) && this.E2.push( 'permission' ), 0 <= a.indexOf(
      'id_token' ) && this.E2.push( 'id_token' ), 0 <= a.indexOf( 'code' ) && this.E2.push( 'code' ) ) : this.E2 = ym;
  };
  var Cs = function( a ){return kn( a, 'code' );}, Ey = function( a ){return kn( a, 'permission' );};
  Tm.prototype.toString = function(){return this.E2.join( ' ' );};
  var kn = function( a, c ){
    var f = !1;
    ( 0, _.Be )( a.E2, function( a ){a == c && ( f = !0 );} );
    return f;
  };
  var HE, FQ, jF, IF, kF, EQ;
  HE = null;
  _.GQ = function(){return HE ? FQ() : null;};
  FQ = function(){return new Ay( jF.prototype, HE, [ 'currentUser', 'isSignedIn' ] );};
  jF = function( a ){
    delete a.include_granted_scopes;
    this.zd = Om( a );
    this.aea = a.cookie_policy;
    this.Ofa = !!a.scope;
    ( this.d2 = !1 !== a.fetch_basic_profile ) && ( this.zd.authParameters.scope = pZ( this, 'openid profile email' ) );
    this.Z1 = a.hosted_domain;
    this.Gka = a.ux_mode || 'popup';
    this.Sia = a.redirect_uri || null;
    IF( this );
  };
  IF = function( a ){
    a.currentUser = new xF( new WE( null ) );
    a.isSignedIn = new xF( !1 );
    a.$K = new _.bY( a.zd );
    a.z4 = null;
    a.cka = null;
    a.lga = new _.C( function( a, f ){
      this.z4 = a;
      this.cka = f;
    }, a );
    a.R4 = {};
    a.GS = !0;
    kF( a );
    a.$K.start();
  };
  kF = function( a ){
    a.$K.addEventListener( 'error', function( c ){
      a.GS && a.z4 && ( a.GS = !1, a.cka( {
                                            error: c.error, details: c.details,
                                          } ), a.z4 = null, a.cka = null );
    } );
    a.$K.addEventListener( 'authResult', function( c ){
      c && c.authResult && a.xx( c );
      a.$K.lja()( c );
    } );
    a.$K.addEventListener( 'tokenReady', function( c ){
      var f = new WE( c.response );
      if ( a.Z1 && a.Z1 != a.Z1 ) {
        a.xx( {
                type: 'tokenFailed',
                reason: 'Account domain does not match hosted_domain specified by gapi.auth2.init.',
                accountDomain: f.eU(),
                expectedDomain: a.Z1,
              } );
      } else {
        a.currentUser.get().
          update( f );
        var g = a.currentUser;
        g.hg.notify( g.Ab );
        a.isSignedIn.set( !0 );
        f = f.fk();
        ( g = _.tY( a.aea ) ) && f && _.hp.set( [
                                                  'G_AUTHUSER_',
                                                  'https:' === window.location.protocol && g.Gb ? 'S' : 'H',
                                                  g.Ke,
                                                ].join( '' ), f, void 0, void 0, g.domain, g.isSecure );
        _.RF( c.response );
        a.xx( c );
      }
    } );
    a.$K.addEventListener( 'noSessionBound', function( c ){
      a.GS && c.autoOpenAuthUrl ? ( a.GS = !1, WW( a.$K ).
        select( function( f ){
          if ( f && f.login_hint ) {
            var g = a.$K;
            _.gr( g, g.DS, [ f.login_hint, !0 ] );
          } else {
            a.currentUser.set( new WE( null ) ), a.isSignedIn.set( !1 ), _.Kb(), a.xx( c );
          }
        } ) ) : ( a.currentUser.set( new WE( null ) ), a.isSignedIn.set( !1 ), _.Kb(), a.xx( c ) );
    } );
    a.$K.addEventListener( 'tokenFailed', function( c ){a.xx( c );} );
    a.$K.addEventListener( 'userLoggedOut', function( c ){
      a.currentUser.get().
        BT();
      var f = a.currentUser;
      f.hg.notify( f.Ab );
      a.isSignedIn.set( !1 );
      _.Kb();
      a.xx( c );
    } );
  };
  EQ = function( a, c, f, g ){
    return a.lga.then( function( a ){
      if ( c ) {
        return c( a.DY );
      }
    }, f, g );
  };
  jF.prototype.xx = function( a ){
    if ( a ) {
      this.GS = !1;
      var c = a.type || '';
      if ( this.R4[ c ] ) {
        this.R4[ c ]( a );
      }
      this.z4 && ( this.z4( {DY: this} ), this.cka = this.z4 = null );
    }
  };
  var vP = function( a, c ){
    _.qf( c, function( c, g ){
      a.R4[ g ] = function( f ){
        a.R4 = {};
        c( f );
      };
    } );
  }, qY = function( a, c, f, g ){
    g = _.rf( g );
    a.Z1 && ( g.hd = a.Z1 );
    var h = g.ux_mode || a.Gka;
    delete g.ux_mode;
    var l = {sessionMeta: {extraQueryParams: g}, responseType: 'permission id_token'};
    'redirect' == h
    ? ( g.redirect_uri || ( g.redirect_uri = a.Sia || uA() + window.location.pathname ), xA( a, l ) )
    : ( delete g.redirect_uri, pP( a, l ), vP( a, {
      authResult: function( g ){
        g.authResult && g.authResult.error ? f( g.authResult ) : vP( a, {
          tokenReady: function(){c( a.currentUser.get() );}, tokenFailed: f,
        } );
      },
    } ) );
  };
  jF.prototype.W2 = function( a ){
    return new _.C( function( c, f ){
      var g = new iY( a );
      this.u7 = g.P1() ? !0 : !1;
      this.d2 ? ( g.zd.fetch_basic_profile = !0, qF( g, 'email profile openid' ) ) : g.zd.fetch_basic_profile = !1;
      var h = pZ( this, g.P1() );
      g.yca( h );
      qY( this, c, f, g.get() );
    }, this );
  };
  jF.prototype.Q1 = function( a ){
    var c = a || {};
    this.u7 = !!c.scope;
    a = pZ( this, c.scope );
    if ( '' == a ) {
      return _.$H( {error: 'Missing required parameter: scope'} );
    }
    var f = {scope: a, access_type: 'offline', include_granted_scopes: !0};
    ( 0, _.Be )( UD, function( a ){null != c[ a ] && ( f[ a ] = c[ a ] );} );
    f.hasOwnProperty( 'prompt' ) || f.hasOwnProperty( 'approval_prompt' ) || ( f.prompt = 'consent' );
    return 'postmessage' == c.redirect_uri || void 0 == c.redirect_uri ? OZ( this, f ) : RZ( this, f, c.redirect_uri );
  };
  var RZ = function( a, c, f ){
    c.redirect_uri = f;
    xA( a, {sessionMeta: {extraQueryParams: c}, responseType: 'code id_token'} );
    return _.Nu( {message: 'Redirecting to IDP.'} );
  }, OZ = function( a, c ){
    c.origin = uA();
    delete c.redirect_uri;
    pP( a, {sessionMeta: {extraQueryParams: c}, responseType: 'code permission id_token'} );
    return new _.C( function( a, c ){
      vP( this, {
        authResult: function( f ){
          ( f = f && f.authResult ) && f.code ? a( {code: f.code} ) : c( f && f.error ? f : {error: 'unknown_error'} );
        },
      } );
    }, a );
  }, pP = function( a, c ){
    Gw( c, [ 'sessionMeta', 'extraQueryParams', 'gsiwebsdk' ], '2' );
    rl( a.$K, ol(), c );
  }, xA = function( a, c ){
    Gw( c, [ 'sessionMeta', 'extraQueryParams', 'gsiwebsdk' ], '2' );
    c = c || {};
    window.location.assign( nv( a.$K, c.sessionMeta, c.responseType ) );
  };
  jF.prototype.BT = function( a ){
    var c = a || !1;
    return new _.C( function( a ){tE( this.$K, c, function(){a();} );}, this );
  };
  jF.prototype.g7 = function(){return this.zd.authParameters.scope;};
  var pZ = function( a, c ){
    a = a.g7();
    c = mY( c ? c.split( ' ' ) : [], a ? a.split( ' ' ) : [] );
    _.RE( c );
    return c.join( ' ' );
  };
  jF.prototype.T8 = function(){
    var a = this;
    return new _.C( function( c, f ){
      vP( a, {
        noSessionBound: f, tokenFailed: f, userLoggedOut: f, tokenReady: function( a ){c( a.response );},
      } );
      mO( a.$K );
    } );
  };
  jF.prototype.Fda = function( a, c, f, g ){
    if ( a = _.fa( a ) ? window.document.getElementById( a ) : a ) {
      var h = this;
      _.ph( a, 'click', function(){
        var a = c;
        'function' == typeof c && ( a = c() );
        h.W2( a ).
          then( function( a ){f && f( a );}, function( a ){g && g( a );} );
      } );
    } else {
      g && g( {error: 'Could not attach click handler to the element. Reason: element not found.'} );
    }
  };
  jF.prototype.disconnect = function(){return new _.C( function( a ){this.$K.Ic( function(){a();} );}, this );};
  var xY;
  _.C.prototype[ 'catch' ] = _.C.prototype.r9;
  xY = null;
  _.hN = function( a ){
    a = Mm( a );
    if ( HE ) {
      if ( _.yY( a, xY || {} ) ) {
        return FQ();
      }
      throw new uO(
        'gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance()' +
        ' instead of gapi.auth2.init().' );
    }
    Nm( a, !1 !== a.fetch_basic_profile );
    bm();
    xY = a;
    HE = new jF( a );
    _.bb.ga = 1;
    return FQ();
  };
  var ZF, An, Bn, uw, zn, kH;
  _.jH = function( a, c ){
    bm();
    a = Mm( a );
    Nm( a );
    var f = gz( a ), g = new _.aK( f );
    'none' == a.prompt ? Bn( g, a, function( a ){
      a.status = a.error ? {signed_in: !1, method: null, google_logged_in: !1} : {
        signed_in: !0,
        method: 'AUTO',
        google_logged_in: !0,
      };
      c( a );
    } ) : ZF( g, a, function( a ){
      if ( a.error ) {
        a.status = {
          signed_in: !1, method: null, google_logged_in: !1,
        };
      } else {
        var f = a.access_token || a.id_token;
        a.status = {signed_in: !!f, method: 'PROMPT', google_logged_in: !!f};
      }
      a[ 'g-oauth-window' ] = g.kga.h8;
      c( a );
    } );
  };
  ZF = function( a, c, f ){
    var g = new Tm( c.response_type );
    f = An( a, g, f );
    var h = {responseType: g.toString()};
    Gw( h, [ 'sessionMeta', 'extraQueryParams', 'gsiwebsdk' ], c.gsiwebsdk || '2' );
    Cs( g ) && Gw( h, [ 'sessionMeta', 'extraQueryParams', 'access_type' ], c.access_type || 'offline' );
    c.redirect_uri && Gw( h, [ 'sessionMeta', 'extraQueryParams', 'redirect_uri' ], c.redirect_uri );
    c.state && Gw( h, [ 'sessionMeta', 'extraQueryParams', 'state' ], c.state );
    c = ol();
    a.RV ? f( {authResult: {error: 'idpiframe_initialization_failed', details: a.vY().error}} ) : ( a.V5 = f, rl( a,
                                                                                                                  c,
                                                                                                                  h
    ) );
  };
  An = function( a, c, f ){
    if ( Ey( c ) ) {
      var g = zn( f );
      return function( f ){
        f && f.authResult && !f.authResult.error ? a.lja( function( a ){
          a && !a.error ? ( a = _.rf( a ), Cs( c ) && ( a.code = f.authResult.code ), g( a ) ) : g( a
                                                                                                    ? a
                                                                                                    : {error: 'unknown_error'} );
        } )( f ) : g( f && f.authResult ? f.authResult : {error: 'unknown_error'} );
      };
    }
    return function( a ){
      a && a.authResult && !a.authResult.error ? f( _.rf( a.authResult ) ) : f( a && a.authResult
                                                                                ? a.authResult
                                                                                : {error: 'unknown_error'} );
    };
  };
  Bn = function( a, c, f ){
    if ( Cs( new Tm( c.response_type ) ) && 'offline' == c.access_type ) {
      f( {
           error: 'immediate_failed', error_subtype: 'access_denied',
         } );
    } else {
      var g = zn( f );
      c.login_hint ? a.S3( c.login_hint, function( h ){
        h ? uw( a, c, h, g ) : f( {
                                    error: 'immediate_failed', error_subtype: 'access_denied',
                                  } );
      } ) : void 0 !== c.authuser && null !== c.authuser ? lX( a, c.authuser ).
        select( function( f ){
          f && f.login_hint ? uw( a, c, f.login_hint, g ) : g( {
                                                                 error: 'immediate_failed',
                                                                 error_subtype: 'access_denied',
                                                               } );
        } ) : a.H1( function( f ){
        f && f.hint ? uw( a, c, f.hint, g ) : f && f.disabled ? g( {
                                                                     error: 'immediate_failed',
                                                                     error_subtype: 'no_user_bound',
                                                                   } ) : ( 'first_valid' == c.session_selection
                                                                           ? iv( a )
                                                                           : WW( a ) ).select( function( f ){
          f && f.login_hint ? uw( a, c, f.login_hint, g ) : g( {
                                                                 error: 'immediate_failed',
                                                                 error_subtype: 'no_user_bound',
                                                               } );
        } );
      } );
    }
  };
  uw = function( a, c, f, g ){
    c = new Tm( c.response_type );
    var h = 0, l = {}, n = function( a ){!a || a.error ? g( a ) : ( h--, _.sf( l, a ), 0 == h && g( l ) )};
    ( Ey( c ) || kn( c, "id_token" ) ) && h++;
    Cs( c ) && h++;
    ( Ey( c ) || kn( c, "id_token" ) ) && _.OF( a, f, n );
    Cs( c ) && V_( a, f, n )
  };
  zn = function( a ){
    return function( c ){
      if ( !c || c.error ) {
        _.Kb(), c ? a( c ) : a( {error: "unknown_error"} );
      } else {
        if ( c.access_token ) {
          var f = _.rf( c );
          kH( f );
          delete f.id_token;
          delete f.code;
          _.RF( f )
        }
        a( c )
      }
    }
  };
  kH = function( a ){( 0, _.Be )( WF, function( c ){delete a[ c ]} )};
  _.Mu( "gapi.auth2.init", _.hN );
  _.Mu( "gapi.auth2.authorize", function( a, c ){
    if ( null != HE ) {
      throw new uO(
        "gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters)." );
    }
    _.jH( a, function( a ){
      kH( a );
      c( a )
    } )
  } );
  _.Mu( "gapi.auth2._gt", function(){return _.au()} );
  _.Mu( "gapi.auth2.enableDebugLogs", function( a ){
    a = !1 !== a;
    _.c_ = "0" != a && !!a
  } );
  _.Mu( "gapi.auth2.getAuthInstance", _.GQ );
  _.Mu( "gapi.auth2.BasicProfile", PG );
  _.Mu( "gapi.auth2.BasicProfile.prototype.getId", PG.prototype.Hh );
  _.Mu( "gapi.auth2.BasicProfile.prototype.getName", PG.prototype.getName );
  _.Mu( "gapi.auth2.BasicProfile.prototype.getGivenName", PG.prototype.CY );
  _.Mu( "gapi.auth2.BasicProfile.prototype.getFamilyName", PG.prototype.BY );
  _.Mu( "gapi.auth2.BasicProfile.prototype.getImageUrl", PG.prototype.Uea );
  _.Mu( "gapi.auth2.BasicProfile.prototype.getEmail", PG.prototype.a4 );
  _.Mu( "gapi.auth2.GoogleAuth", jF );
  _.Mu( "gapi.auth2.GoogleAuth.prototype.attachClickHandler", jF.prototype.Fda );
  _.Mu( "gapi.auth2.GoogleAuth.prototype.disconnect", jF.prototype.disconnect );
  _.Mu( "gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", jF.prototype.Q1 );
  _.Mu( "gapi.auth2.GoogleAuth.prototype.signIn", jF.prototype.W2 );
  _.Mu( "gapi.auth2.GoogleAuth.prototype.signOut", jF.prototype.BT );
  _.Mu( "gapi.auth2.GoogleAuth.prototype.getInitialScopes", jF.prototype.g7 );
  _.Mu( "gapi.auth2.GoogleUser", WE );
  _.Mu( "gapi.auth2.GoogleUser.prototype.grant", WE.prototype.sY );
  _.Mu( "gapi.auth2.GoogleUser.prototype.getId", WE.prototype.Hh );
  _.Mu( "gapi.auth2.GoogleUser.prototype.isSignedIn", WE.prototype.jz );
  _.Mu( "gapi.auth2.GoogleUser.prototype.getAuthResponse", WE.prototype.DT );
  _.Mu( "gapi.auth2.GoogleUser.prototype.getBasicProfile", WE.prototype.rY );
  _.Mu( "gapi.auth2.GoogleUser.prototype.getGrantedScopes", WE.prototype.Dl );
  _.Mu( "gapi.auth2.GoogleUser.prototype.getHostedDomain", WE.prototype.eU );
  _.Mu( "gapi.auth2.GoogleUser.prototype.grantOfflineAccess", WE.prototype.Q1 );
  _.Mu( "gapi.auth2.GoogleUser.prototype.hasGrantedScopes", WE.prototype.qV );
  _.Mu( "gapi.auth2.GoogleUser.prototype.reloadAuthResponse", WE.prototype.T8 );
  _.Mu( "gapi.auth2.LiveValue", xF );
  _.Mu( "gapi.auth2.LiveValue.prototype.listen", xF.prototype.Ei );
  _.Mu( "gapi.auth2.LiveValue.prototype.get", xF.prototype.get );
  _.Mu( "gapi.auth2.SigninOptionsBuilder", iY );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", iY.prototype.Fea );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", iY.prototype.Pha );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.getScope", iY.prototype.P1 );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.setScope", iY.prototype.yca );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", iY.prototype.ifa );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", iY.prototype.Vha );
  _.Mu( "gapi.auth2.SigninOptionsBuilder.prototype.get", iY.prototype.get );

} );
// Google Inc.
