window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const {ccclass: ccclass, property: property} = cc._decorator;
    let Helloworld = (() => {
      let Helloworld = class Helloworld extends cc.Component {
        constructor() {
          super(...arguments);
          this.ptr_btn_test = null;
          this.ptr_node = null;
          this.m_resource_cards = null;
          this.m_arr_cards = [];
          this.m_touch = 0;
        }
        start() {
          this.ptr_node.active = false;
        }
        onLoad() {
          let tt = new cc.Component.EventHandler();
          tt.target = this.node;
          tt.component = "Helloworld";
          tt.handler = "on_btn_test";
          this.ptr_btn_test.clickEvents.push(tt);
        }
        on_btn_test(event) {
          var anim = this.ptr_node.getComponent(cc.Animation);
          this.ptr_node.active = true;
          anim.play();
        }
        onTimeToPlayParticle() {
          cc.log("onTimeToPlayParticle:");
          var particle = this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem);
          particle.resetSystem();
        }
      };
      __decorate([ property(cc.Button) ], Helloworld.prototype, "ptr_btn_test", void 0);
      __decorate([ property(cc.Node) ], Helloworld.prototype, "ptr_node", void 0);
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    })();
    exports.default = Helloworld;
    cc._RF.pop();
  }, {} ],
  ParticleScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ac5aWRZ+lHho4m9JzsnJgI", "ParticleScript");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const {ccclass: ccclass, property: property} = cc._decorator;
    let ParticleScript = (() => {
      let ParticleScript = class ParticleScript extends cc.Component {
        constructor() {
          super(...arguments);
          this.ptr_particle = null;
        }
        start() {
          this.ptr_particle.node.active = true;
          this.ptr_particle.resetSystem();
        }
        kill() {
          this.ptr_particle.stopSystem();
        }
      };
      __decorate([ property(cc.ParticleSystem) ], ParticleScript.prototype, "ptr_particle", void 0);
      ParticleScript = __decorate([ ccclass ], ParticleScript);
      return ParticleScript;
    })();
    exports.default = ParticleScript;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Helloworld", "ParticleScript" ]);