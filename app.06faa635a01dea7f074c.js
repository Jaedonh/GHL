webpackJsonp([1, 0], [function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	var i = a(150),
		r = n(i),
		o = a(178),
		s = n(o),
		u = a(325),
		l = n(u),
		c = a(228),
		d = n(c);
	window.jQuery = window.$ = a(305), window.Tether = a(146), a(229), a(284), a(302), a(152), r.
		default.use(d.
			default), new r.
				default({
					store: s.
						default,
					el:
					"#app",
					template: "<App/>",
					components: {
						App: l.
							default
					}
				})
}, , , , , , , , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createCompletedOrReadingListLock = t.createCompletedLock = t.createLevelLockChain = t.createLevelLock = t.createSelectedLock = t.createTrueStateLock = t.createMinimumValueLock = t.createPredicateLock = t.createAnyLock = t.createCustomLock = t.createUnlockedLock = t.Locks = t.Lock = void 0;
	var i = a(12),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = t.Lock = function () {
			function e(t, a, n) {
				(0, s.
					default)(this, e), this.description = t, this._check = a, this.keyholders = n, this.open = !1
			}
			return (0, l.
				default)(e, [{
					key: "keyholdersUnlocked",
					value: function e() {
						var e = !0,
							t = !0,
							a = !1,
							n = void 0;
						try {
							for (var i, o = (0, r.
								default)(this.keyholders); !(t = (i = o.next()).done); t = !0) {
								var s = i.value;
								e = e && s.locks.allOpen
							}
						} catch (e) {
							a = !0, n = e
						} finally {
							try {
								!t && o.
									return && o.
										return()
							} finally {
								if (a) throw n
							}
						}
						return e
					}
				}, {
					key: "update",
					value: function () {
						this.open = this._check()
					}
				}]), e
		}(),
		d = (t.Locks = function () {
			function e() {
				(0, s.
					default)(this, e), this.locks = [], this.allOpen = !0
			}
			return (0, l.
				default)(e, [{
					key: "addLock",
					value: function (e) {
						this.locks.push(e), this.update()
					}
				}, {
					key: "update",
					value: function () {
						this.allOpen = !0;
						var e = !0,
							t = !1,
							a = void 0;
						try {
							for (var n, i = (0, r.
								default)(this.locks); !(e = (n = i.next()).done); e = !0) {
								var o = n.value;
								o.update(), this.allOpen = this.allOpen && o.open
							}
						} catch (e) {
							t = !0, a = e
						} finally {
							try {
								!e && i.
									return && i.
										return()
							} finally {
								if (t) throw a
							}
						}
					}
				}, {
					key: "keyholdersUnlocked",
					value: function () {
						var e = !0,
							t = !1,
							a = void 0;
						try {
							for (var n, i = (0, r.
								default)(this.locks); !(e = (n = i.next()).done); e = !0) {
								var o = n.value;
								if (!o.keyholdersUnlocked()) return !1
							}
						} catch (e) {
							t = !0, a = e
						} finally {
							try {
								!e && i.
									return && i.
										return()
							} finally {
								if (t) throw a
							}
						}
						return !0
					}
				}, {
					key: "lockStrings",
					value: function () {
						var e = [],
							t = !0,
							a = !1,
							n = void 0;
						try {
							for (var i, o = (0, r.
								default)(this.locks); !(t = (i = o.next()).done); t = !0) {
								var s = i.value;
								s.open || e.push(s.description)
							}
						} catch (e) {
							a = !0, n = e
						} finally {
							try {
								!t && o.
									return && o.
										return()
							} finally {
								if (a) throw n
							}
						}
						return e
					}
				}, {
					key: "lockString",
					value: function () {
						var e = this.lockStrings();
						return "".concat(e)
					}
				}]), e
		}(), t.createUnlockedLock = function (e, t) {
			var a = function () {
				return e.unlocked()
			};
			t.locks.addLock(new c(e.name + " is unlocked", a, [e])), e.subscribe(t)
		}, t.createCustomLock = function (e, t, a) {
			var n = "Custom Lock: " + t.id,
				i = !0,
				o = !1,
				s = void 0;
			try {
				for (var u, l = (0, r.
					default)(e); !(i = (u = l.next()).done); i = !0) {
					var d = u.value;
					d.subscribe(t), n += " " + d.id
				}
			} catch (e) {
				o = !0, s = e
			} finally {
				try {
					!i && l.
						return && l.
							return()
				} finally {
					if (o) throw s
				}
			}
			t.locks.addLock(new c(n, a, e))
		}, t.createAnyLock = function (e, t, a) {
			var n = function () {
				var t = !1,
					n = !0,
					i = !1,
					o = void 0;
				try {
					for (var s, u = (0, r.
						default)(e); !(n = (s = u.next()).done); n = !0) {
						var l = s.value;
						t = t || a(l)
					}
				} catch (e) {
					i = !0, o = e
				} finally {
					try {
						!n && u.
							return && u.
								return()
					} finally {
						if (i) throw o
					}
				}
				return t
			},
				i = "Any Completed:",
				o = !0,
				s = !1,
				u = void 0;
			try {
				for (var l, d = (0, r.
					default)(e); !(o = (l = d.next()).done); o = !0) {
					var f = l.value;
					f.subscribe(t), i += " " + f.name
				}
			} catch (e) {
				s = !0, u = e
			} finally {
				try {
					!o && d.
						return && d.
							return()
				} finally {
					if (s) throw u
				}
			}
			t.locks.addLock(new c(i, n, e))
		}, t.createPredicateLock = function (e, t, a) {
			t.locks.addLock(new c(e.name + " predicate", a, [e])), e.subscribe(t)
		}, t.createMinimumValueLock = function (e, t, a) {
			var n = function () {
				return e.getValue() >= a
			};
			t.locks.addLock(new c(e.name + " at least " + a, n, [e])), e.subscribe(t)
		}, t.createTrueStateLock = function (e, t) {
			var a = function () {
				return e.getValue()
			};
			t.locks.addLock(new c(e.name + " is true", a, [e])), e.subscribe(t)
		}, t.createSelectedLock = function (e, t) {
			var a = function () {
				return e.state.selected
			};
			t.locks.addLock(new c(e.name + " selected", a, [e])), e.subscribe(t)
		}, t.createLevelLock = function (e, t, a) {
			var n = function () {
				return e.xp.state.level >= a
			};
			t.locks.addLock(new c(e.name + " 等级 " + a, n, [e])), e.xp.subscribe(t)
		});
	t.createLevelLockChain = function (e, t) {
		for (var a = 1; a < e.length; a++) d(e[a - 1], e[a], t)
	}, t.createCompletedLock = function (e, t) {
		var a = function () {
			return e.state.completed
		};
		t.locks.addLock(new c(e.name, a, [e])), e.subscribe(t)
	}, t.createCompletedOrReadingListLock = function (e, t) {
		var a = function () {
			return e.state.completed || e.state.onReadingList
		};
		t.locks.addLock(new c(e.name, a, [e])), e.subscribe(t)
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BasicEntity = void 0;
	var i = a(12),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(9),
		d = a(117),
		f = a(115);
	t.BasicEntity = function () {
		function e(t, a, n) {
			(0, s.
				default)(this, e), this.id = t, this.name = a, this.locks = new c.Locks, this.state = n, this.dependants = [], this.lastChange = -10, this._notification = !1, this._entityUpdated = 0, this.logUnlock = !1, this.wasLocked = !1, d.saver.register(this)
		}
		return (0, l.
			default)(e, [{
				key: "onLoad",
				value: function () { }
			}, {
				key: "changed",
				value: function () {
					var e = new Date;
					this.lastChange = e.getTime()
				}
			}, {
				key: "hasChanged",
				value: function (e) {
					var t = new Date;
					return t.getTime() - this.lastChange < 1e3 * e
				}
			}, {
				key: "subscribe",
				value: function (e) {
					this.dependants.push(e)
				}
			}, {
				key: "unsubscribe",
				value: function (e) {
					this.dependants = this.dependants.filter(function (t) {
						return t.id !== e.id
					})
				}
			}, {
				key: "austerityMode",
				value: function () {
					this.update()
				}
			}, {
				key: "update",
				value: function () {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					if (this._entityUpdated += 1, this.logUnlock ? (this.locks.update(), this.wasLocked && this.unlocked() && f.messageBox.addMessage("解锁" + this.name + "！")) : this.locks.update(), this.wasLocked = !this.unlocked(), e) {
						var t = !0,
							a = !1,
							n = void 0;
						try {
							for (var i, o = (0, r.
								default)(this.dependants); !(t = (i = o.next()).done); t = !0) {
								var s = i.value;
								s.update()
							}
						} catch (e) {
							a = !0, n = e
						} finally {
							try {
								!t && o.
									return && o.
										return()
							} finally {
								if (a) throw n
							}
						}
					}
				}
			}, {
				key: "prestige",
				value: function () { }
			}, {
				key: "grandPrestige",
				value: function () {
					this.prestige()
				}
			}, {
				key: "postPrestigeAssert",
				value: function () { }
			}, {
				key: "postLoadAssert",
				value: function () { }
			}, {
				key: "unlocked",
				value: function () {
					return this.locks.allOpen
				}
			}, {
				key: "keyholdersUnlocked",
				value: function () {
					return this.locks.keyholdersUnlocked()
				}
			}, {
				key: "notify",
				value: function () {
					this._notification = !0
				}
			}, {
				key: "acknowledge",
				value: function () {
					this._notification = !1
				}
			}]), e
	}()
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.LevelAddMultModifier = t.LevelAddModifier = t.LevelModifier = t.NumberStateModifier = t.StatEffectiveMultModifier = t.GenericMultModifier = t.MultModifier = t.NumberStateAddModifier = t.StatEffectiveAddModifier = t.GenericAddModifier = t.AddModifier = t.Modifier = void 0;
	var i = a(8),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(14),
		g = function e() {
			(0, p.
				default)(this, e)
		},
		_ = t.Modifier = function (e) {
			function t(e, a, n, i, r) {
				var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 2;
				(0, p.
					default)(this, t);
				var u = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, new g));
				return u.operationString = i, (0, y.assert)((0, y.isNumber)(r), u.id + " initial factor: " + r), u._factor = r, u.priority = n, u.digits = o, u
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () { }
					}, {
						key: "apply",
						value: function (e) {
							(0, y.assert)(!1)
						}
					}, {
						key: "factor",
						get: function () {
							return (0, y.assert)((0, y.isNumber)(this._factor), this.id + " getting invalid factor: " + this._factor), this._factor
						},
						set: function (e) {
							(0, y.assert)((0, y.isNumber)(e), this.id + " setting invalid factor: " + e), this._factor = e
						}
					}]), t
		}(m.BasicEntity),
		M = t.AddModifier = function (e) {
			function t(e, a, n, i) {
				return (0, p.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, s.
							default)(t)).call(this, e, a, n, "+", i))
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "update",
						value: function () {
							this.operationString = this.factor >= 0 ? "+" : "", (0, r.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this)
						}
					}, {
						key: "apply",
						value: function (e) {
							return e + this.factor
						}
					}]), t
		}(_),
		b = (t.GenericAddModifier = function (e) {
			function t(e, a, n, i, r) {
				(0, p.
					default)(this, t);
				var o = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, n, r(i)));
				return o.entity = i, o.valueExtractor = r, o.entity.subscribe(o), o
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "factor",
						get: function () {
							return this.valueExtractor(this.entity)
						}
					}]), t
		}(M), t.StatEffectiveAddModifier = function (e) {
			function t(e, a, n, i) {
				var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function (e) {
					return e
				};
				(0, p.
					default)(this, t);
				var o = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, n, r(i.effective)));
				return o.stat = i, i.subscribe(o), o.transform = r, o
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "factor",
						get: function () {
							return this.transform(this.stat.effective)
						}
					}]), t
		}(M), t.NumberStateAddModifier = function (e) {
			function t(e, a, n, i) {
				var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function (e) {
					return e
				};
				(0, p.
					default)(this, t);
				var o = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, n, r(i.getValue())));
				return o.numberStateEntity = i, i.subscribe(o), o.transform = r, o
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "factor",
						get: function () {
							return this.transform(this.numberStateEntity.getValue())
						}
					}]), t
		}(M), t.MultModifier = function (e) {
			function t(e, a, n, i) {
				return (0, p.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, s.
							default)(t)).call(this, e, a, n, "x", i))
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () { }
					}, {
						key: "apply",
						value: function (e) {
							return e * this.factor
						}
					}]), t
		}(_));
	t.GenericMultModifier = function (e) {
		function t(e, a, n, i, r) {
			(0, p.
				default)(this, t);
			var o = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, n, r(i)));
			return o.entity = i, o.valueExtractor = r, o.entity.subscribe(o), o
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "factor",
					get: function () {
						return this.valueExtractor(this.entity)
					}
				}]), t
	}(b), t.StatEffectiveMultModifier = function (e) {
		function t(e, a, n, i) {
			var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function (e) {
				return e
			};
			(0, p.
				default)(this, t);
			var o = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, n, r(i.effective)));
			return o.stat = i, i.subscribe(o), o.transform = r, o
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "factor",
					get: function () {
						return this.transform(this.stat.effective)
					}
				}]), t
	}(b), t.NumberStateModifier = function (e) {
		function t(e, a, n, i) {
			var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function (e) {
				return e
			};
			(0, p.
				default)(this, t);
			var o = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, n, r(i.getValue())));
			return o.numberStateEntity = i, i.subscribe(o), o.transform = r, o
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "factor",
					get: function () {
						return this.transform(this.numberStateEntity.getValue())
					}
				}]), t
	}(b), t.LevelModifier = function (e) {
		function t(e, a, n, i, r) {
			(0, p.
				default)(this, t);
			var o = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, n, Math.pow(r, i.state.level)));
			return o.levelEntity = i, i.subscribe(o), o.factorPerLevel = r, o.update(), o
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "factor",
					get: function () {
						return Math.pow(this.factorPerLevel, this.levelEntity.state.level)
					}
				}]), t
	}(b), t.LevelAddModifier = function (e) {
		function t(e, a, n, i, r) {
			(0, p.
				default)(this, t);
			var o = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, n, Math.pow(r, i.state.level)));
			return o.levelEntity = i, i.subscribe(o), o.factorPerLevel = r, o.update(), o
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "factor",
					get: function () {
						return this.factorPerLevel * this.levelEntity.state.level
					}
				}]), t
	}(M), t.LevelAddMultModifier = function (e) {
		function t(e, a, n, i, r) {
			(0, p.
				default)(this, t);
			var o = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, n, Math.pow(r, i.state.level)));
			return o.levelEntity = i, i.subscribe(o), o.factorPerLevel = r, o.update(), o
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "factor",
					get: function () {
						return 1 + this.factorPerLevel * this.levelEntity.state.level
					}
				}]), t
	}(b)
}, , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isNumber = t.isNear = t.assert = void 0;
	var i = a(82),
		r = n(i);
	t.assert = function (e, t) {
		if (!e) {
			if (t = t || "Assertion failed", "undefined" != typeof Error) throw window.alert(t), new Error(t);
			throw t
		}
	}, t.isNear = function (e, t) {
		var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4;
		return Math.abs(e - t) < a
	}, t.isNumber = function (e) {
		return !((0, r.
			default)(e) || void 0 === e || null === e)
	}
}, , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.NumberStateEntity = t.BooleanStateEntity = t.StateEntity = void 0;
	var i = a(8),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(1),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(10),
		y = a(14),
		g = t.StateEntity = function (e) {
			function t(e, a, n, i, r) {
				var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
				(0, l.
					default)(this, t);
				var u = (0, v.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, new n(i)));
				return u.initialValue = i, u.resetOnPrestige = r, u.resetOnGrandPrestige = o, u
			}
			return (0, p.
				default)(t, e), (0, d.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.resetOnPrestige && (this.state.value = this.initialValue)
						}
					}, {
						key: "grandPrestige",
						value: function () {
							this.resetOnGrandPrestige && (this.state.value = this.initialValue), this.prestige()
						}
					}, {
						key: "postPrestigeAssert",
						value: function () {
							(0, y.assert)(!this.resetOnPrestige || this.state.value === this.initialValue, "state entity does not have original value after prestige: " + this.id)
						}
					}, {
						key: "setValue",
						value: function (e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							this.state.value = e, t && (this.initialValue = e), this.update(), this.integrityCheck()
						}
					}, {
						key: "integrityCheck",
						value: function () { }
					}, {
						key: "getValue",
						value: function () {
							return this.state.value
						}
					}, {
						key: "value",
						get: function () {
							return this.getValue()
						},
						set: function (e) {
							this.setValue(e)
						}
					}]), t
		}(m.BasicEntity),
		_ = function e(t) {
			(0, l.
				default)(this, e), this.value = t
		},
		M = (t.BooleanStateEntity = function (e) {
			function t(e, a) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return (0, l.
					default)(this, t), (0, v.
						default)(this, (t.__proto__ || (0, s.
							default)(t)).call(this, e, a, _, n, i))
			}
			return (0, p.
				default)(t, e), (0, d.
					default)(t, [{
						key: "toggleValue",
						value: function () {
							this.setValue(!this.getValue())
						}
					}, {
						key: "select",
						value: function (e, t) {
							return this.state.value ? e : t
						}
					}]), t
		}(g), function e(t) {
			(0, l.
				default)(this, e), this.value = t, this.maximum = t, this.minimum = t
		});
	t.NumberStateEntity = function (e) {
		function t(e, a) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
				i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
				r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
				o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
			(0, l.
				default)(this, t);
			var u = (0, v.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, M, n, i));
			return u.minValue = r, u.maxValue = o, u
		}
		return (0, p.
			default)(t, e), (0, d.
				default)(t, [{
					key: "incrementValue",
					value: function () {
						this.setValue(this.getValue() + 1)
					}
				}, {
					key: "decrementValue",
					value: function () {
						this.setValue(this.getValue() - 1)
					}
				}, {
					key: "add",
					value: function (e) {
						this.setValue(this.getValue() + e)
					}
				}, {
					key: "integrityCheck",
					value: function () {
						this.minValue && this.minValue > this.value && (this.value = this.minValue), this.maxValue && this.maxValue < this.value && (this.value = this.maxValue), this.state.maximum = Math.max(this.state.maximum, this.state.value), this.state.minimum = Math.min(this.state.minimum, this.state.value), (0, r.
							default)(t.prototype.__proto__ || (0, s.
								default)(t.prototype), "integrityCheck", this).call(this)
					}
				}]), t
	}(g)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Stat = void 0;
	var i = a(12),
		r = n(i),
		o = a(82),
		s = n(o),
		u = a(2),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(8),
		p = n(h),
		m = a(4),
		y = n(m),
		g = a(1),
		_ = n(g),
		M = a(10),
		b = a(14),
		k = function e() {
			(0, _.
				default)(this, e), this.highestEffectiveEver = -9999999999, this.lowestEffectiveEver = 9999999999
		};
	t.Stat = function (e) {
		function t(e, a, n) {
			var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
				r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
				o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
				s = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
				u = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
				c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
				d = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
			(0, _.
				default)(this, t);
			var f = (0, v.
				default)(this, (t.__proto__ || (0, l.
					default)(t)).call(this, e, a, new k));
			return f.id = e, f.name = a, f.base = n, (0, b.assert)((0, b.isNumber)(f.base)), f.digits = i, f.prefix = r, f.suffix = o, f.higherIsBetter = s, f.modifiers = [], f.valueChain = [], f.lastChangePositive = !1, u ? f.update() : f.effective = f.base, f.minValue = c, f.maxValue = d, f
		}
		return (0, y.
			default)(t, e), (0, d.
				default)(t, [{
					key: "prestige",
					value: function () {
						this.state.historicValues = []
					}
				}, {
					key: "update",
					value: function () {
						this.effectiveChanged = !1, this.calculateEffective(), (0, p.
							default)(t.prototype.__proto__ || (0, l.
								default)(t.prototype), "update", this).call(this, this.effectiveChanged)
					}
				}, {
					key: "setBase",
					value: function (e) {
						this.base = e, (0, b.assert)((0, b.isNumber)(this.base), this.name + " " + e), this.update()
					}
				}, {
					key: "addModifier",
					value: function (e) {
						e.subscribe(this), this.modifiers.push(e), this.modifiers.sort(function (e, t) {
							return e.priority - t.priority
						})
					}
				}, {
					key: "calculateEffective",
					value: function () {
						var e = this.effective;
						(0, b.assert)(!((0, s.
							default)(this.base) || void 0 === this.base)), this.effective = this.base, this.valueChain = [];
						var a = !0,
							n = !1,
							i = void 0;
						try {
							for (var o, u = (0, r.
								default)(this.modifiers.filter(function (e) {
									return e.unlocked()
								})); !(a = (o = u.next()).done); a = !0) {
								var c = o.value;
								this.effective = c.apply(this.effective), this.valueChain.push([c, this.effective])
							}
						} catch (e) {
							n = !0, i = e
						} finally {
							try {
								!a && u.
									return && u.
										return()
							} finally {
								if (n) throw i
							}
						}
						this.rawEffective = this.effective, (0, b.isNumber)(this.minValue) && (this.effective = Math.max(this.minValue, this.effective)), (0, b.isNumber)(this.maxValue) && (this.effective = Math.min(this.maxValue, this.effective)), this.effective !== e && ((0, p.
							default)(t.prototype.__proto__ || (0, l.
								default)(t.prototype), "changed", this).call(this), this.effectiveChanged = !0, this.lastChangePositive = this.effective > e), this.state.highestEffectiveEver = Math.max(this.state.highestEffectiveEver, this.effective), this.state.lowestEffectiveEver = Math.min(this.state.lowestEffectiveEver, this.effective)
					}
				}, {
					key: "recentChange",
					value: function (e) {
						return this.hasChanged(e) ? this.higherIsBetter ? this.lastChangePositive ? "up" : "down" : this.lastChangePositive ? "down" : "up" : ""
					}
				}, {
					key: "modifiersWithValues",
					value: function () {
						return this.valueChain
					}
				}]), t
	}(M.BasicEntity)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.currentYear = t.currentDay = void 0;
	var i = a(8),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(1),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(16),
		y = function (e) {
			function t() {
				return (0, l.
					default)(this, t), (0, v.
						default)(this, (t.__proto__ || (0, s.
							default)(t)).call(this, "currentDay", "Current Day"))
			}
			return (0, p.
				default)(t, e), (0, d.
					default)(t, [{
						key: "getYear",
						value: function () {
							return Math.floor(this.getValue() / 365)
						}
					}, {
						key: "getDayOfYear",
						value: function () {
							return Math.floor(this.getValue() % 365)
						}
					}]), t
		}(m.NumberStateEntity),
		g = t.currentDay = new y,
		_ = function (e) {
			function t() {
				(0, l.
					default)(this, t);
				var e = (0, v.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, "currentYear", "Current Year"));
				return e.setValue(g.getYear()), g.subscribe(e), e
			}
			return (0, p.
				default)(t, e), (0, d.
					default)(t, [{
						key: "update",
						value: function () {
							this.getValue() !== g.getYear() && (this.setValue(g.getYear()), (0, r.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this))
						}
					}]), t
		}(m.NumberStateEntity);
	t.currentYear = new _
}, , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Area = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(8),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(47),
		g = a(28),
		_ = a(60),
		M = a(14),
		b = a(25),
		k = function e() {
			(0, p.
				default)(this, e), this.active = !1
		};
	t.Area = function (e) {
		function t(e, a, n) {
			(0, p.
				default)(this, t);
			var i = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e, a, new k));
			i.name = a, i.subjects = n;
			var o = (0, g.createResearchXpPerHourStat)(i.id + "_xp_per_hour", i.name + " 经验/小时");
			return i.xp = new y.XPModule(i.id + "experience", i.name + " experience", o), i.xp.nextLevelAtXp = (0, y.linearXpIncrease)(100), i.effect = "", i.logUnlock = !0, i.importance = 1, i
		}
		return (0, v.
			default)(t, e), (0, s.
				default)(t, [{
					key: "activate",
					value: function () {
						this.state.active = !0, _.currentResearchContainer.setCurrentResearch(this), this.update()
					}
				}, {
					key: "deactivate",
					value: function () {
						this.state.active = !1, this.xp.lastLevelUp -= 1, this.update()
					}
				}, {
					key: "update",
					value: function () {
						var e = this.unlocked();
						(0, d.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "update", this).call(this);
						var a = this.unlocked();
						!e && a && b.researchPane.notify()
					}
				}, {
					key: "prestige",
					value: function () {
						this.state.active = !1
					}
				}, {
					key: "onLoad",
					value: function () {
						this.state.active && _.currentResearchContainer.setCurrentResearch(this)
					}
				}, {
					key: "postPrestigeAssert",
					value: function () {
						(0, M.assert)(!this.state.active)
					}
				}]), t
	}(m.BasicEntity)
}, , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.activities = t.freeTime = t.slacking = t.chores = t.eat = t.research = t.work = t.sleep = void 0;
	var i = a(3),
		r = n(i),
		o = a(8),
		s = n(o),
		u = a(2),
		l = n(u),
		c = a(1),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(10),
		y = a(17),
		g = a(16),
		_ = a(48),
		M = a(60),
		b = a(77),
		k = a(14),
		w = function (e) {
			function t() {
				return (0, d.
					default)(this, t), (0, v.
						default)(this, (t.__proto__ || (0, l.
							default)(t)).apply(this, arguments))
			}
			return (0, p.
				default)(t, e), t
		}(g.NumberStateEntity),
		L = function (e) {
			function t(e, a, n) {
				(0, d.
					default)(this, t);
				var i = (0, v.
					default)(this, (t.__proto__ || (0, l.
						default)(t)).call(this, e, a, n, 0, "", "", !0, !0));
				return (0, k.assert)(n >= -.001, "Activity duration is negative on construction"), i.updateDurationString(), i
			}
			return (0, p.
				default)(t, e), (0, r.
					default)(t, [{
						key: "setBase",
						value: function (e) {
							(0, s.
								default)(t.prototype.__proto__ || (0, l.
									default)(t.prototype), "setBase", this).call(this, e)
						}
					}, {
						key: "update",
						value: function () {
							(0, s.
								default)(t.prototype.__proto__ || (0, l.
									default)(t.prototype), "update", this).call(this), this.updateDurationString()
						}
					}, {
						key: "updateDurationString",
						value: function () {
							var e = Math.floor(this.effective / 60),
								t = this.effective - 60 * e;
							(0, k.assert)(this.effective === 60 * e + t, "hour/minutes calculation is wrong");
							var a = ("00" + Math.floor(t)).substr(-2);
							this.durationString = e + ":" + a
						}
					}]), t
		}(y.Stat),
		C = function e() {
			(0, d.
				default)(this, e)
		},
		x = function (e) {
			function t(e, a, n, i, r, o) {
				var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function (e) {
					return e
				},
					u = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
				(0, d.
					default)(this, t);
				var c = (0, v.
					default)(this, (t.__proto__ || (0, l.
						default)(t)).call(this, e, a, new C));
				return c.originalDuration = i, c.ingName = n, c.durationByUser = r, c.color = o, c.isCurrent = !1, c.doFun = s, c.duration = new L(c.id + "duration", c.name + " duration", i), u && (c.durationProxy = new w(c.id + "DurationProxy", c.name + " Duration Proxy", 0, !0, 0), c.durationProxy.setValue(c.duration.effective, !0), c.durationProxy.dependants.push(c)), c.update(), c
			}
			return (0, p.
				default)(t, e), (0, r.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.duration.base = this.originalDuration, this.duration.effective = this.originalDuration
						}
					}, {
						key: "postPrestigeAssert",
						value: function () {
							this.durationProxy && this.durationProxy.setValue(this.duration.effective), (0, k.assert)("activityFreeTime" === this.id || this.duration.base === this.originalDuration, this.name + " duration should be " + this.originalDuration + ", but it is " + this.duration.base)
						}
					}, {
						key: "sufficientTime",
						value: function () {
							return !0
						}
					}, {
						key: "update",
						value: function () {
							this.hasOwnProperty("durationProxy") && (this.duration.base = this.durationProxy.getValue(), this.duration.update(), (0, k.assert)(this.duration.base === this.durationProxy.getValue(), this.name), (0, k.assert)(this.duration.base === this.duration.effective, this.name)), (0, s.
								default)(t.prototype.__proto__ || (0, l.
									default)(t.prototype), "update", this).call(this)
						}
					}, {
						key: "getDuration",
						value: function () {
							return this.duration.effective
						}
					}, {
						key: "do",
						value: function (e) {
							this.doFun(e)
						}
					}]), t
		}(m.BasicEntity),
		P = t.sleep = new x("activitySleep", "睡眠", "sleeping", 480, !0, "#007D43", function () {
			return null
		}, !0),
		S = function (e) {
			_.currentJobContainer.job.xp.gainExperience(A.getDuration())
		},
		A = t.work = new x("activityWork", "工作", "working", 480, !0, "#F6768E", S, !0),
		E = function (e) {
			e.readingList.books.length > 0 ? e.readingList.advance(I.getDuration()) : M.currentResearchContainer.area && M.currentResearchContainer.area.xp.gainExperience(I.getDuration())
		},
		I = new x("activityStudy", "阅读", "reading", 0, !0, "FF7A5C", E, !0);
	I.sufficientTime = function () {
		return b.readingList.books.length > 0 && I.duration.effective > 0 || b.readingList.books.length <= 0 && I.duration.effective <= 0
	};
	var N = function (e) {
		M.currentResearchContainer.area && M.currentResearchContainer.area.xp.gainExperience(T.getDuration())
	},
		T = t.research = new x("activityResearch", "研究", "researching", 0, !0, "FF7A5C", N, !0);
	T.sufficientTime = function () {
		return T.duration.effective > 0 || null === M.currentResearchContainer.area
	};
	var j = t.eat = new x("activityEat", "饮食", "eating", 180, !1, "#00538A"),
		D = t.chores = new x("activityChores", "家务", "Cleaning", 0, !1, "#000000"),
		O = t.slacking = new x("activitySlacking", "放松", "slacking", 180, !1, "#000000"),
		R = t.freeTime = new x("activityFreeTime", "空闲时间", "slacking", 90, !1, "#53377A", function (e) {
			return e
		}, !0);
	t.activities = [P, A, T, j, D, O, R]
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.selectPane = t.panes = t.journalPane = t.lifeSummaryPane = t.logPane = t.achievementPane = t.amazonPane = t.privacyPane = t.aboutPane = t.settingsPane = t.eventPane = t.lifestylePane = t.happinessPane = t.boostsPane = t.housingPane = t.spendingPane = t.researchPane = t.readingPane = t.jobPane = t.topLevelPanes = void 0;
	var i = a(12),
		r = n(i),
		o = a(116),
		s = t.topLevelPanes = new o.PaneGroup,
		u = t.jobPane = new o.Pane("job-pane", "工作", "job-display", s, !1),
		l = (t.readingPane = new o.Pane("reading-pane", "Reading", "study-fields", s), t.researchPane = new o.Pane("research-pane", "研究", "research-display", s)),
		c = new o.PaneGroup,
		d = (t.spendingPane = new o.Pane("spending-pane", "Spending", "spending-display", c), t.housingPane = new o.Pane("housing-pane", "Home", "housing-display", c), t.boostsPane = new o.Pane("boosts-pane", "Boosts", "boosts-display", c), t.happinessPane = new o.Pane("happiness-pane", "心情", "happiness-explain", s)),
		f = t.lifestylePane = new o.Pane("lifestyle-pane", "生活方式", "lifestyle-display", s, !1, c.panes),
		v = t.eventPane = new o.Pane("event-pane", "事件", "events-display", s),
		h = t.settingsPane = new o.Pane("settings-pane", "设置", "settings-display", s, !0),
		p = t.aboutPane = new o.Pane("about-pane", "关于", "about-display", s, !0),
		m = t.privacyPane = new o.Pane("privacy-pane", "隐私", "privacy-display", s, !0),
		y = (t.amazonPane = new o.Pane("amazon-affiliate", "Amazon Affiliate Program", "amazon-display", s, !0), new o.PaneGroup),
		g = (t.achievementPane = new o.Pane("achievement-pane", "成就", "achievements-display", y), t.logPane = new o.Pane("log-pane", "记录", "log-display", y), t.lifeSummaryPane = new o.Pane("life-summary-pane", "历史", "life-summary", y), t.journalPane = new o.Pane("journal-pane", "备忘录", "journal-display", s, !1, y.panes));
	t.panes = [d, u, l, f, v, g, h, p, m], t.selectPane = function (e) {
		if (e.paneGroup.allowMultiple) e.toggle();
		else {
			var t = !0,
				a = !1,
				n = void 0;
			try {
				for (var i, o = (0, r.
					default)(e.paneGroup.panes); !(t = (i = o.next()).done); t = !0) {
					var s = i.value;
					s.deselect()
				}
			} catch (e) {
				a = !0, n = e
			} finally {
				try {
					!t && o.
						return && o.
							return()
				} finally {
					if (a) throw n
				}
			}
			e.select()
		}
		if (e.subpanes.length > 0) {
			var u = !1,
				l = !0,
				c = !1,
				d = void 0;
			try {
				for (var f, v = (0, r.
					default)(e.subpanes); !(l = (f = v.next()).done); l = !0) {
					var h = f.value;
					u = u || h.state.selected
				}
			} catch (e) {
				c = !0, d = e
			} finally {
				try {
					!l && v.
						return && v.
							return()
				} finally {
					if (c) throw d
				}
			}
			u || e.subpanes[0].select()
		}
	}
}, , function (e, t, a) {
	a(297);
	var n = a(6)(a(193), a(383), "data-v-6dcc75b4", null);
	e.exports = n.exports
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createResearchXpPerHourStat = t.baseResearchXpPerHourStat = t.createWorkXpPerHourStat = t.baseWorkXpPerHourStat = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(17),
		v = a(173),
		h = a(11),
		p = function (e) {
			function t(e, a) {
				(0, s.
					default)(this, t);
				var n = (0, l.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, e, a, 0, 2, "", ""));
				return n.update(), n
			}
			return (0, d.
				default)(t, e), t
		}(f.Stat),
		m = t.baseWorkXpPerHourStat = new f.Stat("baseWorkXpPerHourStat", "基础工作经验", 1, 2, "", "/小时");
	m.addModifier(v.standardEnergyModifier);
	var y = (t.createWorkXpPerHourStat = function (e, t) {
		var a = new p(e, t),
			n = new h.StatEffectiveAddModifier(a.id + "_base", "Base Work Experience", 1, m);
		return a.addModifier(n), a
	}, t.baseResearchXpPerHourStat = new f.Stat("baseResearchXpPerHourStat", "Base Research XP", 1, 2, "", "/h"));
	y.addModifier(v.standardEnergyModifier);
	t.createResearchXpPerHourStat = function (e, t) {
		var a = new p(e, t),
			n = new h.StatEffectiveAddModifier(a.id + "_base", "Base Research Experience", 1, y);
		return a.addModifier(n), a
	}
}, , , , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.energyStat = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(17),
		y = a(62),
		g = a(11),
		_ = a(72),
		M = function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "energy", "活力", _.DEVMODE ? 1e5 : 1))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "update",
						value: function () {
							(0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(m.Stat),
		b = t.energyStat = new M,
		k = new g.StatEffectiveMultModifier("happinessEnergyMod", "幸福度", 10, y.happinessStat);
	b.addModifier(k)
}, , , , , function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.abbreviateNumber = function (e, t) {
		if (null === e) return null;
		if (0 === e) return "0";
		t = !t || t < 0 ? 0 : t;
		var a = e.toPrecision(2).split("e"),
			n = 1 === a.length ? 0 : Math.floor(Math.min(a[1].slice(1), 74) / 3),
			i = n < 1 ? e.toFixed(0 + t) : (e / Math.pow(10, 3 * n)).toFixed(1 + t),
			r = i < 0 ? i : Math.abs(i),
			o = Math.floor(r),
			s = "." + (r - o).toString().slice(2, 2 + (3 - o.toString().length));
		s = s.length <= 1 ? "" : s;
		var u = o + s + ["", "K", "M", "B", "t", "Q", "s", "S", "o", "n", "d", "U", "D", "T", "Qt", "Qd", "Sd", "St", "O", "N", "v", "c", "dv", "tv", "qv", "Qv"][n];
		return u
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.communicationVictory = t.cannonVictory = t.anomalyAverted = t.fastestCannonVictory = t.fastestCommunicationVictory = t.aaCounter = t.unlockedDarkPlateau = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(16),
		p = t.unlockedDarkPlateau = new h.NumberStateEntity("unlocked_dark_plateau", "Unlocked Dark Plateau", -1, !1);
	p.resetOnGrandPrestige = !0;
	var m = (t.aaCounter = new h.NumberStateEntity("aa_counter", "Times Averted", 0, !1), t.fastestCommunicationVictory = new h.NumberStateEntity("minlivestocommvictory", "Least lives to Communication Victory", 9999, !1, 1), t.fastestCannonVictory = new h.NumberStateEntity("minlivestocannonvictory", "Least lives to Cannon Victory", 9999, !1, 1), function (e) {
		function t() {
			return (0, s.
				default)(this, t), (0, d.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).apply(this, arguments))
		}
		return (0, v.
			default)(t, e), (0, l.
				default)(t, [{
					key: "grandPrestige",
					value: function () {
						this.setValue(!1)
					}
				}]), t
	}(h.BooleanStateEntity));
	t.anomalyAverted = new m("state_anomalyAverted", "Anomaly Averted", !1, !0), t.cannonVictory = new h.NumberStateEntity("cannon_victory_counter", "Cannon Victories", 0, !1, 0), t.communicationVictory = new h.NumberStateEntity("communication_victory_counter", "Communication Victories", 0, !1, 0)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.studyPoints = t.money = void 0;
	var i = a(12),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(1),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(8),
		p = n(h),
		m = a(4),
		y = n(m),
		g = a(16),
		_ = a(71),
		M = a(118),
		b = [_.foodCostFactor, M.schedule],
		k = function (e) {
			function t() {
				(0, l.
					default)(this, t);
				var e = (0, v.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, "money", "Money", 0));
				return e.austerityMode = !1, e.austerityAlert = !1, e
			}
			return (0, y.
				default)(t, e), (0, d.
					default)(t, [{
						key: "acknowledgeAusterity",
						value: function () {
							this.austerityAlert = !1
						}
					}, {
						key: "update",
						value: function () {
							if (this.getValue() < 0) {
								this.austerityMode || (this.austerityMode = !0, this.austerityAlert = !0);
								var e = !0,
									a = !1,
									n = void 0;
								try {
									for (var i, o = (0, r.
										default)(b); !(e = (i = o.next()).done); e = !0) {
										var u = i.value;
										u.austerityMode()
									}
								} catch (e) {
									a = !0, n = e
								} finally {
									try {
										!e && o.
											return && o.
												return()
									} finally {
										if (a) throw n
									}
								}
							} else this.austerityMode = !1;
							(0, p.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(g.NumberStateEntity);
	t.money = new k, t.studyPoints = new g.NumberStateEntity("studyPoints", "Study Points", 0)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.currentLoop = t.currentLifeThisLoop = t.currentLife = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(16),
		y = function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "currentLife", "Current Life", 1, !1, 1, null))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.incrementValue(), (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "prestige", this).call(this)
						}
					}]), t
		}(m.NumberStateEntity),
		g = (t.currentLife = new y, function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "currentLifeThisLoop", "Current Live this Loop", 1, !1, 1, null))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.incrementValue(), (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "prestige", this).call(this)
						}
					}, {
						key: "grandPrestige",
						value: function () {
							this.setValue(1)
						}
					}]), t
		}(m.NumberStateEntity)),
		_ = (t.currentLifeThisLoop = new g, function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "currentLoop", "Current Loop", 1, !1, 1, null))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "grandPrestige",
						value: function () {
							this.incrementValue()
						}
					}]), t
		}(m.NumberStateEntity));
	t.currentLoop = new _
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Book = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(8),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(77),
		g = a(14),
		_ = a(51),
		M = function e(t) {
			(0, p.
				default)(this, e), this.completed = !1, this.onReadingList = !1, this.timeLeft = t, this.originalTimeLeft = t, this.readingListPosition = 0, this.timesCompleted = 0
		};
	t.Book = function (e) {
		function t(e, a, n, i) {
			var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
			(0, p.
				default)(this, t);
			var s = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e, a, new M(i)));
			return s.description = n, s.hours = i, s.asin = o, s.effect = "", s
		}
		return (0, v.
			default)(t, e), (0, s.
				default)(t, [{
					key: "prestige",
					value: function () {
						this.state.completed = !1, this.state.onReadingList = !1, this.state.timeLeft = this.state.originalTimeLeft / (1 + this.state.timesCompleted), this.state.readingListPosition = 0
					}
				}, {
					key: "postPrestigeAssert",
					value: function () {
						(0, g.assert)(!this.completed), (0, g.assert)(!this.onReadingList), (0, g.assert)(this.state.timeLeft), (0, g.assert)(0 === this.state.readingListPosition), (0, d.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "postPrestigeAssert", this).call(this)
					}
				}, {
					key: "onLoad",
					value: function () {
						this.state.onReadingList && y.readingList.addInPosition(this, this.state.readingListPosition), (0, d.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "onLoad", this).call(this)
					}
				}, {
					key: "addToReadingList",
					value: function () {
						this.state.onReadingList = !0, this.state.readingListPosition = y.readingList.add(this), this.update()
					}
				}, {
					key: "complete",
					value: function () {
						this.state.onReadingList = !1, this.state.completed = !0, this.state.timesCompleted += 1, _.log.info("Completed " + this.name, this.name, _.log.BOOK_COMPLETED), this.update()
					}
				}]), t
	}(m.BasicEntity)
}, , , , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.configureXpProgression = t.XPModule = t.linearXpIncrease = t.linearExponentialXpIncrease = void 0;
	var i = a(82),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(1),
		y = n(m),
		g = a(10),
		_ = a(18),
		M = a(17),
		b = a(11),
		k = a(14),
		w = a(38),
		L = function e() {
			(0, y.
				default)(this, e), this.xp = 0, this.level = 0, this.previousLevel = 0, this.highestLevelEver = 0, this.highestLevelThisLoop = 0, this.minDaysToLevel100 = NaN, this.minDaysToLevel10 = NaN
		},
		C = (t.linearExponentialXpIncrease = function (e) {
			var t = function (t) {
				return Math.floor((t + 1) * e * Math.pow(1.02, t))
			};
			return t
		}, t.linearXpIncrease = function (e) {
			var t = function (t) {
				return Math.floor((t + 1) * e * (1 + Math.max(0, t - 100) / 500) * (1 + Math.max(0, t - 1e3) / 100))
			};
			return t
		}),
		x = function (e) {
			function t(e, a, n) {
				(0, y.
					default)(this, t);
				var i = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, n.computePrestigeFactor(), 0, "", "", !0, !1));
				return i.xpmodule = n, i.xpmodule.subscribe(i), i.update(), i
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "update",
						value: function () {
							this.base = this.xpmodule.computePrestigeFactor(), (0, k.assert)((0, k.isNumber)(this.base)), (0, v.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(M.Stat);
	t.XPModule = function (e) {
		function t(e, a, n) {
			var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : C(10);
			(0, y.
				default)(this, t);
			var r = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, new L));
			r.xpPerHourStat = n, r.nextLevelAtXp = i, r.groundhogFactorStat = new x(r.id + "_groundhogFactorStat", "Groundhog Factor", r);
			var o = new b.StatEffectiveMultModifier(r.id + "_groundhogFactorMod", "Groundhog Factor", 100, r.groundhogFactorStat);
			r.xpPerHourStat.addModifier(o), r.xpPerDayStat = new M.Stat(r.id + "_xppday", r.name + " 经验/天", 0, 2);
			var u = new b.StatEffectiveAddModifier(r.id + "_xphour2day", "经验/小时", 1, r.xpPerHourStat);
			return r.xpPerDayStat.addModifier(u), r.levelUp = !1, r.lastLevelUp = -1, r.update(), r
		}
		return (0, p.
			default)(t, e), (0, l.
				default)(t, [{
					key: "timesReachedLevel",
					value: function () {
						var e = this;
						return this.state.levelsReached.map(function (t) {
							return t > e.state.level ? 1 : 0
						}).reduce(function (e, t) {
							return e + t
						}, 0)
					}
				}, {
					key: "highestLevelEver",
					value: function () {
						return this.state.highestLevelEver
					}
				}, {
					key: "highestLevelEverIncludingThisLife",
					value: function () {
						return Math.max(this.highestLevelEver(), this.state.level)
					}
				}, {
					key: "previousLevelReached",
					value: function () {
						return this.state.previousLevel
					}
				}, {
					key: "computePrestigeFactor",
					value: function () {
						return 1 + this.state.highestLevelThisLoop / 10
					}
				}, {
					key: "perc",
					value: function () {
						return this.lastLevelUp === _.currentDay.getValue() ? 100 : 100 * this.state.xp / this.nextLevelAtXp(this.state.level)
					}
				}, {
					key: "updateMinDaysToLevel",
					value: function () {
						100 === this.state.level ? (0, r.
							default)(this.state.minDaysToLevel100) ? this.state.minDaysToLevel100 = _.currentDay.getValue() : this.state.minDaysToLevel100 = Math.min(_.currentDay.getValue(), this.state.minDaysToLevel100) : 10 === this.state.level && ((0, r.
								default)(this.state.minDaysToLevel10) ? this.state.minDaysToLevel10 = _.currentDay.getValue() : this.state.minDaysToLevel10 = Math.min(_.currentDay.getValue(), this.state.minDaysToLevel10))
					}
				}, {
					key: "getMinDaysToLevel",
					value: function (e) {
						return 100 === e && (0, k.isNumber)(this.state.minDaysToLevel100) ? this.state.minDaysToLevel100 : 10 === e && (0, k.isNumber)(this.state.minDaysToLevel10) ? this.state.minDaysToLevel10 : NaN
					}
				}, {
					key: "gainExperience",
					value: function (e) {
						var t = this.xpPerHourStat.effective * e / 60;
						for (this.levelUp = !1; t > 0;) {
							var a = this.nextLevelAtXp(this.state.level);
							if (t + this.state.xp >= a) {
								t -= a - this.state.xp;
								var n = t / this.xpPerHourStat.effective * 60;
								this.state.level += 1, this.groundhogFactorStat.update(), t = this.xpPerHourStat.effective * n / 60, this.updateMinDaysToLevel(), this.state.xp = 0, this.levelUp = !0
							} else this.state.xp += t, t = 0;
							t = 0
						}
						this.levelUp && (this.lastLevelUp = _.currentDay.getValue(), this.update())
					}
				}, {
					key: "xpToNextLevel",
					value: function () {
						return this.nextLevelAtXp(this.state.level) - this.state.xp
					}
				}, {
					key: "xpToNextLevelString",
					value: function () {
						return (0, w.abbreviateNumber)(this.xpToNextLevel())
					}
				}, {
					key: "prestige",
					value: function () {
						this.state.previousLevel = this.state.level, this.state.highestLevelEver = Math.max(this.state.level, this.state.highestLevelEver), this.state.highestLevelThisLoop = Math.max(this.state.level, this.state.highestLevelThisLoop), this.state.xp = 0, this.state.level = 0
					}
				}, {
					key: "grandPrestige",
					value: function () {
						this.state.highestLevelEver = Math.max(this.state.level, this.state.highestLevelEver), this.state.highestLevelThisLoop = 0, this.state.level = 0, this.state.xp = 0
					}
				}, {
					key: "postPrestigeAssert",
					value: function () {
						(0, k.assert)(0 === this.state.xp), (0, k.assert)(0 === this.state.level)
					}
				}, {
					key: "onLoad",
					value: function () {
						this.state.minDaysToLevel = [], this.state.levelsReached = []
					}
				}, {
					key: "recordClass",
					value: function () {
						return this.state.highestLevelThisLoop === this.previousLevelReached() ? "new-record" : ""
					}
				}]), t
	}(g.BasicEntity), t.configureXpProgression = function (e, t, a, n) {
		for (var i = Math.round(365 * t * n), r = e.map(function (e) {
			return 1
		}), o = 1; o < r.length; o++) r[o] = r[o - 1] * a;
		var s = r.reduce(function (e, t) {
			return e + t
		});
		r = r.map(function (e) {
			return e * i / s
		});
		for (var u = r.map(function (e) {
			return e / 55
		}), l = 0; l < r.length; l++) e[l].xp.nextLevelAtXp = C(Math.ceil(u[l]))
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.currentJobContainer = t.currentIncomeContainer = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(10),
		y = a(73),
		g = a(51),
		_ = function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "currentIncomeContainer", "Current Income Container", {}))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () { }
					}, {
						key: "setCurrentIncome",
						value: function (e) {
							e !== this.income && (this.income && this.income.unsubscribe(this), this.income = e, e.dependants.push(this), this.update())
						}
					}, {
						key: "update",
						value: function () {
							(0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(m.BasicEntity),
		M = t.currentIncomeContainer = new _,
		b = function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "currentJobContainer", "Current Job Container", {}))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.setCurrentJob(y.burgerFlipper)
						}
					}, {
						key: "setCurrentJob",
						value: function (e) {
							e !== this.job && (this.job && this.job.deactivate(), this.job = e, this.job.activate(), M.setCurrentIncome(e.income), g.log.info("你获得了一份新工作: " + this.job.name, this.id, g.log.JOBSELECTED), (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "update", this).call(this))
						}
					}]), t
		}(m.BasicEntity);
	t.currentJobContainer = new b
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.yugle = t.yugleCeo = t.cto = t.productManager = t.divisionLead = t.seniorArchitect = t.teamLead = t.projectLead = t.softwareEngineer = t.juniorDeveloper = t.unpaidIntern = void 0;
	var n = a(75),
		i = a(74),
		r = a(9),
		o = a(47),
		s = t.unpaidIntern = new n.Job("yugle1", "Unpaid Intern"),
		u = t.juniorDeveloper = new n.Job("yugle2", "Junior Developer"),
		l = t.softwareEngineer = new n.Job("yugle3", "Software Engineer"),
		c = t.projectLead = new n.Job("yugle4", "Project Lead"),
		d = t.teamLead = new n.Job("yugle5", "Team Lead"),
		f = t.seniorArchitect = new n.Job("yugle6", "Senior Architect"),
		v = t.divisionLead = new n.Job("yugle7", "Division Lead"),
		h = t.productManager = new n.Job("yugle8", "Product Manager"),
		p = t.cto = new n.Job("yugle9", "CTO"),
		m = t.yugleCeo = new n.Job("yugle10", "CEO"),
		y = [s, u, l, c, d, f, v, h, p, m];
	(0, o.configureXpProgression)(y, 1e3, 2, 8), (0, n.configurePayProgression)(y, 10, 300, 2), s.setBasePay(0), (0, r.createLevelLockChain)(y, 10);
	t.yugle = new i.Career("yugle", "尤格", y)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.currentHomeContainer = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(10),
		y = a(51),
		g = a(24),
		_ = function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "currentHomeContainer", "Current Home Container", {}))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "setCurrent",
						value: function (e) {
							var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
							if (e !== this.home) {
								if (this.home) {
									if (this.home.choresTime.effective < e.choresTime.effective && e.choresTime.effective - this.home.choresTime.effective > g.freeTime.duration.effective) return;
									if (a && !e.enoughMoney()) return
								}
								this.home && this.home.deactivate(), this.home = e, this.home.activate(a), y.log.info("You got a new home: " + this.home.name, this.id, y.log.HOMESELECTED), (0, v.
									default)(t.prototype.__proto__ || (0, r.
										default)(t.prototype), "update", this).call(this)
							}
						}
					}]), t
		}(m.BasicEntity);
	t.currentHomeContainer = new _
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.log = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(1),
		v = n(f),
		h = a(10),
		p = a(18),
		m = a(41),
		y = function e() {
			(0, v.
				default)(this, e), this.entries = []
		},
		g = function e(t, a, n, i) {
			(0, v.
				default)(this, e), this.level = t, this.message = a, this.reporter = n, this.eventCode = i, this.timestamp = p.currentDay.getValue(), this.timestampAge = [18 + p.currentDay.getYear(), p.currentDay.getDayOfYear()], this.life = m.currentLife.getValue()
		},
		_ = function (e) {
			function t() {
				(0, v.
					default)(this, t);
				var e = (0, l.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, "logger", "Logger", new y));
				return e.OTHER = 0, e.STORY = 1, e.JOBSELECTED = 10, e.BOOK_COMPLETED = 11, e.RESEARCH_SELECTED = 12, e.HOME_SELECTED = 13, e.LVL_INFO = 5, e.UNLOCK = 14, e
			}
			return (0, d.
				default)(t, e), (0, s.
					default)(t, [{
						key: "info",
						value: function (e, t) {
							var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
							this._log(this.LVL_INFO, e, t, a)
						}
					}, {
						key: "_log",
						value: function (e, t, a, n) {
							var i = new g(e, t, a, n);
							for (this.state.entries.unshift(i); this.state.entries.length > 100;) this.state.entries.pop()
						}
					}]), t
		}(h.BasicEntity);
	t.log = new _
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.investmentReturnStat = t.expenseRatioStat = t.dailyNetIncomeStat = t.dailyIncomeStat = t.dailyExpensesStat = void 0;
	var n = a(17),
		i = a(81),
		r = a(11),
		o = a(175),
		s = t.dailyExpensesStat = new n.Stat("dailyExpensesStat", "开销", 0, 2, "$", "", !1),
		u = new r.StatEffectiveAddModifier(s.id + "_foodCostsPerDayMod", "Food", 1, i.foodCostsPerDayStat);
	s.addModifier(u), s.update();
	var l = t.dailyIncomeStat = new n.Stat("dailyIncomeStat", "收入/每天", 0, 2, "$"),
		c = new r.StatEffectiveAddModifier(l.id + "_workIncomePerDayMod", "Work", 1, o.dailyWorkIncomeStat);
	l.addModifier(c), l.update();
	var d = t.dailyNetIncomeStat = new n.Stat("dailyNetIncome", "净收入/每天", 0, 2, "$", ""),
		f = new r.StatEffectiveAddModifier(d.id + "_incomePerDayMod", "Income", 1, l),
		v = new r.StatEffectiveAddModifier(d.id + "_expensesPerDayMod", "Expenses", 2, s, function (e) {
			return -e
		});
	d.addModifier(f), d.addModifier(v), d.update();
	var h = t.expenseRatioStat = new n.Stat("expenseRatioStat", "Expense Ratio", 1, 2),
		p = new r.StatEffectiveMultModifier(h.id + "_incomePerDayMod", "Income", 1, l, function (e) {
			return 1 / (e + 1)
		}),
		m = new r.StatEffectiveMultModifier(h.id + "_expensesPerDayMod", "Expenses", 2, s);
	h.addModifier(p), h.addModifier(m), h.update();
	t.investmentReturnStat = new n.Stat("investmentReturnStat", "Investment Annual Returns", .01, 3, "", "%")
}, , , , , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createEvent = t.createUserChoiceNode = t.createAutoChoiceNode = t.createNode = t.createPath = void 0;
	var i = a(12),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(1),
		y = n(m),
		g = a(10),
		_ = a(18),
		M = a(25),
		b = a(9),
		k = a(79),
		w = function e() {
			(0, y.
				default)(this, e), this.executed = !1, this.executedOnDay = null, this.timesExecuted = 0
		},
		L = function e() {
			(0, y.
				default)(this, e), this.selected = !1, this.enabled = !0
		},
		C = function (e) {
			function t() {
				return (0, y.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, s.
							default)(t)).apply(this, arguments))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.state.selected = !1, this.state.enabled = !0
						}
					}, {
						key: "update",
						value: function () {
							(0, v.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(g.BasicEntity),
		x = (t.createPath = function (e, t, a) {
			var n = new C(e, t, new L);
			return (0, b.createSelectedLock)(n, a), n
		}, function (e) {
			function t() {
				return (0, y.
					default)(this, t), (0, d.
						default)(this, (t.__proto__ || (0, s.
							default)(t)).apply(this, arguments))
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.state.executed = !1, this.state.executedOnDay = null
						}
					}, {
						key: "executeAction",
						value: function () {
							!this.state.executed && _.currentDay.getValue() > 10 && (this.state.executed = !0, this.state.executedOnDay = _.currentDay.getValue(), this.state.timesExecuted += 1, this.action())
						}
					}, {
						key: "update",
						value: function () {
							var e = this.unlocked();
							(0, v.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this);
							var a = this.unlocked();
							a && !this.executed && this.executeAction(), !e && a && (M.eventPane.notify(), this.event.state.expanded = !0)
						}
					}]), t
		}(g.BasicEntity)),
		P = (t.createNode = function (e, t, a) {
			var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function (e) {
				return e
			},
				i = new x(e, t, new w);
			return a && (0, b.createUnlockedLock)(i, a), i.action = n, i
		}, function (e) {
			function t(e, a, n, i) {
				(0, y.
					default)(this, t);
				var r = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, new w));
				return r.choiceFun = n, r.choices = i, r.state.choiceMade = -1, r
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "executeAction",
						value: function () {
							this.state.executed || (this.state.choiceMade = this.choiceFun(), (0, k.logCustomEvent)("auto_choice", this.choices[this.state.choiceMade].id), this.state.executed = !0, this.state.executedOnDay = _.currentDay.getValue(), this.state.timesExecuted += 1, this.action(), this.update())
						}
					}, {
						key: "prestige",
						value: function () {
							this.state.choiceMade = -1, (0, v.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "prestige", this).call(this)
						}
					}]), t
		}(x)),
		S = (t.createAutoChoiceNode = function (e, t, a, n) {
			var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function (e) {
				return e
			},
				r = new P(e, t, a, n);
			r.action = i;
			for (var o = function (e) {
				(0, b.createCustomLock)([r], n[e], function () {
					return r.state.choiceMade === e
				})
			}, s = 0; s < n.length; s++) o(s);
			return r
		}, function (e) {
			function t(e, a, n) {
				(0, y.
					default)(this, t);
				var i = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, new w));
				return i.paths = n, i
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "selectPath",
						value: function (e) {
							if (e.state.enabled) {
								(0, k.logCustomEvent)("path_taken", e.id);
								var t = !0,
									a = !1,
									n = void 0;
								try {
									for (var i, o = (0, r.
										default)(this.paths); !(t = (i = o.next()).done); t = !0) {
										var s = i.value;
										s.state.enabled = !1
									}
								} catch (e) {
									a = !0, n = e
								} finally {
									try {
										!t && o.
											return && o.
												return()
									} finally {
										if (a) throw n
									}
								}
								e.state.selected = !0, e.update()
							}
							this.update()
						}
					}]), t
		}(x)),
		A = (t.createUserChoiceNode = function (e, t, a) {
			var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function (e) {
				return e
			},
				i = new S(e, t, a);
			return i.action = n, i
		}, function e() {
			(0, y.
				default)(this, e), this.completed = !1, this.expanded = !0
		}),
		E = function (e) {
			function t(e, a, n) {
				(0, y.
					default)(this, t);
				var i = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a, new A));
				return i.nodes = n, i
			}
			return (0, p.
				default)(t, e), t
		}(g.BasicEntity);
	t.createEvent = function (e, t, a) {
		var n = new E(e, t, a),
			i = !0,
			o = !1,
			s = void 0;
		try {
			for (var u, l = (0, r.
				default)(a); !(i = (u = l.next()).done); i = !0) {
				var c = u.value;
				c.event = n
			}
		} catch (e) {
			o = !0, s = e
		} finally {
			try {
				!i && l.
					return && l.
						return()
			} finally {
				if (o) throw s
			}
		}
		return (0, b.createUnlockedLock)(n, a[0]), n
	}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.darkPlateau = t.darkPlateauCeo = t.lambdaComplexChief = t.lambdaComplexScientist = t.lambdaComplexTrainee = t.labSupervisor = t.seniorScientist = t.scientist = t.juniorScientist = t.labAssistant = t.labCleaner = void 0;
	var n = a(75),
		i = a(74),
		r = a(9),
		o = a(47),
		s = t.labCleaner = new n.Job("dp1", "Lab Cleaner"),
		u = t.labAssistant = new n.Job("dp2", "Lab Assistant"),
		l = t.juniorScientist = new n.Job("dp3", "Junior Scientist"),
		c = t.scientist = new n.Job("dp4", "Scientist"),
		d = t.seniorScientist = new n.Job("dp5", "Senior Scientist"),
		f = t.labSupervisor = new n.Job("dp6", "Lab Supervisor"),
		v = t.lambdaComplexTrainee = new n.Job("dp7", "Lambda Trainee"),
		h = t.lambdaComplexScientist = new n.Job("dp8", "Lambda Scientist"),
		p = t.lambdaComplexChief = new n.Job("dp9", "Lambda Chief"),
		m = t.darkPlateauCeo = new n.Job("dp10", "CEO"),
		y = [s, u, l, c, d, f, v, h, p, m];
	(0, o.configureXpProgression)(y, 2500, 2, 8), (0, n.configurePayProgression)(y, 30, 400, 2), (0, r.createLevelLockChain)(y, 10);
	t.darkPlateau = new i.Career("dark_plateau", "Dark Plateau", y)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.currentResearchContainer = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(10),
		y = a(51),
		g = function (e) {
			function t() {
				(0, s.
					default)(this, t);
				var e = (0, d.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, "currentResearchContainer", "Current Research Container", {}));
				return e.area = null, e
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.area = null
						}
					}, {
						key: "setCurrentResearch",
						value: function (e) {
							e !== this.area && (this.area && this.area.deactivate(), this.area = e, y.log.info("Researching " + this.area.name, this.name, y.log.RESEARCH_SELECTED), this.area.activate(), (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "update", this).call(this))
						}
					}]), t
		}(m.BasicEntity);
	t.currentResearchContainer = new g
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Field = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(8),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(25),
		g = function e() {
			(0, p.
				default)(this, e)
		};
	t.Field = function (e) {
		function t(e, a, n) {
			(0, p.
				default)(this, t);
			var i = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e, a, new g));
			return i.areas = n, i.logUnlock = !0, i
		}
		return (0, v.
			default)(t, e), (0, s.
				default)(t, [{
					key: "update",
					value: function () {
						var e = this.wasLocked;
						(0, d.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "update", this).call(this), e && !this.wasLocked && y.researchPane.notify()
					}
				}, {
					key: "prestige",
					value: function () { }
				}]), t
	}(m.BasicEntity)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.happinessStat = void 0;
	var i = a(12),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(1),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(8),
		p = n(h),
		m = a(4),
		y = n(m),
		g = a(17),
		_ = function (e) {
			function t() {
				(0, l.
					default)(this, t);
				var e = (0, v.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, "happiness", "幸福度", 0, 2, "", "", !0, !1, 0, 2));
				return e.selectedModifier = null, e
			}
			return (0, y.
				default)(t, e), (0, d.
					default)(t, [{
						key: "emojiName",
						value: function () {
							return this.effective > 1.2 ? "happy" : this.effective < .8 ? "sad" : "neutral"
						}
					}, {
						key: "getExplanation",
						value: function () {
							var e = !0,
								t = !1,
								a = void 0;
							try {
								for (var n, i = (0, r.
									default)(this.modifiers); !(e = (n = i.next()).done); e = !0) {
									var o = n.value,
										s = o.explain();
									if ("" !== s) return s
								}
							} catch (e) {
								t = !0, a = e
							} finally {
								try {
									!e && i.
										return && i.
											return()
								} finally {
									if (t) throw a
								}
							}
							return "Everything is so-so."
						}
					}, {
						key: "update",
						value: function () {
							(0, p.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "update", this).call(this), this.effective > 40 && console.log(this)
						}
					}, {
						key: "onLoad",
						value: function () {
							this.state.highestEffectiveEver = Math.min(this.state.highestEffectiveEver, 2)
						}
					}]), t
		}(g.Stat);
	t.happinessStat = new _
}, , , , , , , , , function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.foodCostFactor = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(16),
		y = a(11),
		g = a(81),
		_ = a(33),
		M = function (e) {
			function t() {
				(0, s.
					default)(this, t);
				var e = (0, d.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, "foodCostFactor", "Food Cost Factor", 1, !0, 1, 10));
				e.setValue(1, !0);
				var a = new y.NumberStateModifier("foodCostFactorStatMod", "Food Cost Factor", 2, e);
				g.foodCostsPerDayStat.addModifier(a);
				var n = new y.NumberStateModifier("foodCostFactorEnergyMod", "Food Cost", 2, e, function (e) {
					return 1 + (e - 1) / 20
				});
				return _.energyStat.addModifier(n), e.update(), e
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "austerityMode",
						value: function () {
							this.setValue(1), (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "austerityMode", this).call(this)
						}
					}]), t
		}(m.NumberStateEntity);
	t.foodCostFactor = new M
}, function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.DEVMODE = !1
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.bunMasters = t.bunMastersCeo = t.burgerFlipper = void 0;
	var n = a(75),
		i = a(47),
		r = a(74),
		o = a(9),
		s = a(108),
		u = t.burgerFlipper = new n.Job("bm1", "汉堡服务生", 10, !0),
		l = new n.Job("bm2", "首席服务生"),
		c = new n.Job("bm3", "厨房经理"),
		d = new n.Job("bm4", "值班经理"),
		f = new n.Job("bm5", "助理经理"),
		v = new n.Job("bm6", "餐厅经理"),
		h = new n.Job("bm7", "区域经理"),
		p = new n.Job("bm8", "首席策略家"),
		m = t.bunMastersCeo = new n.Job("bm9", "首席执行官"),
		y = [u, l, c, d, f, v, h, p, m];
	(0, i.configureXpProgression)(y, 600, 2.2, 8), (0, n.configurePayProgression)(y, 5, 150, 2), (0, o.createLevelLockChain)(y, 10), (0, o.createLevelLock)(s.leadership, d, 10), (0, o.createLevelLock)(s.leadership, h, 50), (0, o.createLevelLock)(s.leadership, m, 100);
	t.bunMasters = new r.Career("bunMasters", "汉堡大师", y)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Career = void 0;
	var i = a(12),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(1),
		y = n(m),
		g = a(10),
		_ = function e() {
			(0, y.
				default)(this, e)
		};
	t.Career = function (e) {
		function t(e, a, n) {
			(0, y.
				default)(this, t);
			var i = (0, d.
				default)(this, (t.__proto__ || (0, s.
					default)(t)).call(this, e, a, new _));
			i.jobs = n;
			var o = !0,
				u = !1,
				l = void 0;
			try {
				for (var c, f = (0, r.
					default)(n); !(o = (c = f.next()).done); o = !0) {
					var v = c.value;
					v.dependants.push(i)
				}
			} catch (e) {
				u = !0, l = e
			} finally {
				try {
					!o && f.
						return && f.
							return()
				} finally {
					if (u) throw l
				}
			}
			return i
		}
		return (0, p.
			default)(t, e), (0, l.
				default)(t, [{
					key: "prestige",
					value: function () { }
				}, {
					key: "update",
					value: function () {
						(0, v.
							default)(t.prototype.__proto__ || (0, s.
								default)(t.prototype), "update", this).call(this)
					}
				}]), t
	}(g.BasicEntity)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	function i(e, t, a, n) {
		var i = (0, k.exponentialProgression)(e.length, n);
		i = i.map(function (e) {
			return e * a / i.slice(-1)[0]
		}), i = i.map(function (e) {
			return e + (t - i[0])
		}), i[i.length - 1] = a;
		for (var r = 0; r < e.length; r++) e[r].income.setBase(i[r])
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.JobState = t.Job = void 0;
	var r = a(2),
		o = n(r),
		s = a(1),
		u = n(s),
		l = a(3),
		c = n(l),
		d = a(5),
		f = n(d),
		v = a(8),
		h = n(v),
		p = a(4),
		m = n(p);
	t.configurePayProgression = i;
	var y = a(177),
		g = a(10),
		_ = a(48),
		M = a(47),
		b = a(28),
		k = a(162),
		w = a(14),
		L = a(25),
		C = (t.Job = function (e) {
			function t(e, a) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
					i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				(0, u.
					default)(this, t);
				var r = new C;
				r.active = i;
				var s = (0, f.
					default)(this, (t.__proto__ || (0, o.
						default)(t)).call(this, e, a, r)),
					l = (0, b.createWorkXpPerHourStat)(s.id + "_xp_per_hour");
				return s.xp = new M.XPModule(s.id + "experience", s.name + " experience", l), s.income = new y.IncomePerWorkHourStat(s, n), s.logUnlock = !0, s.update(), s
			}
			return (0, m.
				default)(t, e), (0, c.
					default)(t, [{
						key: "setBasePay",
						value: function (e) {
							this.income.setBase(e), this.update()
						}
					}, {
						key: "update",
						value: function () {
							var e = this.unlocked();
							this.state.active && _.currentJobContainer.update(), (0, h.
								default)(t.prototype.__proto__ || (0, o.
									default)(t.prototype), "update", this).call(this);
							var a = this.unlocked();
							!e && a && L.jobPane.notify()
						}
					}, {
						key: "activate",
						value: function () {
							this.state.active = !0, _.currentJobContainer.setCurrentJob(this), this.update()
						}
					}, {
						key: "deactivate",
						value: function () {
							this.state.active = !1, this.update()
						}
					}, {
						key: "nextLevelAtExp",
						value: function (e) {
							return 1
						}
					}, {
						key: "prestige",
						value: function () { }
					}, {
						key: "postPrestigeAssert",
						value: function () {
							(0, w.assert)("bm1" === this.id || !this.state.active), (0, w.assert)("bm1" !== this.id || this.state.active)
						}
					}]), t
		}(g.BasicEntity), t.JobState = function e() {
			(0, u.
				default)(this, e), this.active = !1
		})
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.programming = t.programming5 = t.programming4 = t.programming3 = t.programming2 = t.programming1 = void 0;
	var i = a(12),
		r = n(i),
		o = a(9),
		s = a(42),
		u = a(21),
		l = a(11),
		c = a(49),
		d = t.programming1 = new s.Book("programming1", "Head First Java", "On your way to that Yugle internship.", 150, "0596009208"),
		f = t.programming2 = new s.Book("programming2", "Python Crash Course", "No more boilerplate. Or types.", 150, "1593276036"),
		v = t.programming3 = new s.Book("programming3", "The C Programming Language", "The devil lies in the SEGMENTATION FAULT", 200, "0131103628"),
		h = t.programming4 = new s.Book("programming4", "C++ Primer", "C++ - more twists than Game of Thrones.", 300, "0321714113"),
		p = t.programming5 = new s.Book("programming5", "SICP", "Let's dive in a little deeper.", 400, "0262510871");
	(0, o.createCompletedOrReadingListLock)(d, f), (0, o.createCompletedOrReadingListLock)(f, v), (0, o.createCompletedOrReadingListLock)(v, h), (0, o.createCompletedOrReadingListLock)(h, p);
	var m = t.programming = new u.Area("area_programming", "编程", [d, f, v, h, p]),
		y = new l.LevelAddMultModifier("programming_research_level_mod", "研究: 编程", 2, m.xp, .01),
		g = !0,
		_ = !1,
		M = void 0;
	try {
		for (var b, k = (0, r.
			default)(c.yugle.jobs); !(g = (b = k.next()).done); g = !0) {
			var w = b.value;
			w.income.addModifier(y)
		}
	} catch (e) {
		_ = !0, M = e
	} finally {
		try {
			!g && k.
				return && k.
					return()
		} finally {
			if (_) throw M
		}
	}
	m.effect = "+1% Yugle Pay", (0, o.createLevelLock)(m, c.unpaidIntern, 10), (0, o.createLevelLock)(m, c.juniorDeveloper, 20)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.readingList = void 0;
	var i = a(12),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(14),
		g = function e() {
			(0, p.
				default)(this, e)
		},
		_ = function (e) {
			function t() {
				(0, p.
					default)(this, t);
				var e = (0, d.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, "readingList", "Reading List", new g));
				return e.books = [], e
			}
			return (0, v.
				default)(t, e), (0, l.
					default)(t, [{
						key: "prestige",
						value: function () {
							this.books = []
						}
					}, {
						key: "postPrestigeAssert",
						value: function () {
							(0, y.assert)(this.books.length <= 0)
						}
					}, {
						key: "postLoadAssert",
						value: function () {
							var e = !1,
								t = !0,
								a = !1,
								n = void 0;
							try {
								for (var i, o = (0, r.
									default)(this.books); !(t = (i = o.next()).done); t = !0) {
									var s = i.value;
									null === s && (e = !0)
								}
							} catch (e) {
								a = !0, n = e
							} finally {
								try {
									!t && o.
										return && o.
											return()
								} finally {
									if (a) throw n
								}
							}
							if (e) {
								var u = [],
									l = 0,
									c = !0,
									d = !1,
									f = void 0;
								try {
									for (var v, h = (0, r.
										default)(this.books); !(c = (v = h.next()).done); c = !0) {
										var p = v.value;
										null !== p && (u.push(p), p.state.readingListPosition = l, l += 1)
									}
								} catch (e) {
									d = !0, f = e
								} finally {
									try {
										!c && h.
											return && h.
												return()
									} finally {
										if (d) throw f
									}
								}
								this.books = u
							}
						}
					}, {
						key: "add",
						value: function (e) {
							return this.books.includes(e) ? this.books.indexOf(e) : (this.books.push(e), this.update(), this.books.length - 1)
						}
					}, {
						key: "addInPosition",
						value: function (e, t) {
							for (; t >= this.books.length;) this.books.push(null);
							this.books[t] = e
						}
					}, {
						key: "advance",
						value: function (e) {
							if (!(this.books.length <= 0) && (this.books[0].state.timeLeft -= e / 60, this.books[0].state.timeLeft <= 0)) {
								this.books[0].complete(), this.books.shift();
								var t = !0,
									a = !1,
									n = void 0;
								try {
									for (var i, o = (0, r.
										default)(this.books); !(t = (i = o.next()).done); t = !0) {
										var s = i.value;
										s.state.readingListPosition -= 1, s.update()
									}
								} catch (e) {
									a = !0, n = e
								} finally {
									try {
										!t && o.
											return && o.
												return()
									} finally {
										if (a) throw n
									}
								}
							}
						}
					}]), t
		}(m.BasicEntity);
	t.readingList = new _
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.homes = t.parentsBasement = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(1),
		v = n(f),
		h = a(10),
		p = a(17),
		m = a(50),
		y = a(11),
		g = a(52),
		_ = a(9),
		M = a(40),
		b = a(24),
		k = function e(t, a) {
			(0, v.
				default)(this, e), this.selected = t, this.initialCost = a
		},
		w = function (e) {
			function t(e, a, n, i, o, s, u) {
				var c = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
				(0, v.
					default)(this, t);
				var d = (0, l.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, e, a, new k(c, o)));
				d.description = n, d.rent = new p.Stat(d.id + "_rent", d.name + " Rent", i, 2, "$", "/day");
				var f = new y.StatEffectiveAddModifier(d.id + "_rent_expense_mod", "Rent for " + d.name, 1, d.rent);
				(0, _.createSelectedLock)(d, f), g.dailyExpensesStat.addModifier(f), d.initialCost = new p.Stat(d.id + "initial_cost", "Initial Cost", o, 0, "$"), d.originalInitialCost = o, d.choresTime = new p.Stat(d.id + "_chores", "Chores", s, 0, "", " minutes/day", !0, !0, 0);
				var h = new y.StatEffectiveAddModifier(d.id + "_chores_mod", "Chores at " + d.name, 1, d.choresTime);
				return (0, _.createSelectedLock)(d, h), b.chores.duration.addModifier(h), d.quality = new p.Stat(d.id + "_quality", "Home Quality", u, 0), c && (m.currentHomeContainer.home = d, m.currentHomeContainer.update()), d
			}
			return (0, d.
				default)(t, e), (0, s.
					default)(t, [{
						key: "enoughFreeTime",
						value: function () {
							return b.freeTime.duration.effective >= this.choresTime.effective - m.currentHomeContainer.home.choresTime.effective
						}
					}, {
						key: "enoughMoney",
						value: function () {
							return this.initialCost.effective <= .001 || M.money.getValue() >= this.initialCost.effective
						}
					}, {
						key: "enoughIncome",
						value: function () {
							return g.dailyNetIncomeStat.effective >= this.rent.effective - m.currentHomeContainer.home.rent.effective
						}
					}, {
						key: "activate",
						value: function () {
							var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							this.state.selected = !0, e && M.money.add(-this.initialCost.effective), this.state.initialCost = 0, this.initialCost.setBase(0), this.update()
						}
					}, {
						key: "deactivate",
						value: function () {
							this.state.selected = !1, this.update()
						}
					}, {
						key: "prestige",
						value: function () {
							this.initialCost.setBase(this.originalInitialCost), this.state.initialCost = this.originialInitialCost, this.state.selected = "home_parentsBasement" === this.id, this.state.selected && m.currentHomeContainer.setCurrent(this)
						}
					}, {
						key: "postPrestigeAssert",
						value: function () {
							this.state.selected = "home_parentsBasement" === this.id
						}
					}, {
						key: "onLoad",
						value: function () {
							this.state.selected && (m.currentHomeContainer.home = this), this.initialCost.setBase(this.state.initialCost)
						}
					}]), t
		}(h.BasicEntity),
		L = t.parentsBasement = new w("home_parentsBasement", "Parents Basement", "Still gotta' do your part", 10, 0, 30, 1, !0),
		C = new w("home_sharedApartment", "Shared Apartment", "WHAT'S THAT THING IN THE SINK?", 25, 500, 60, 2),
		x = new w("home_studioApartment", "Studio Apartment", "This is the living room. Also the kitchen. And bedroom.", 50, 1e3, 90, 3),
		P = new w("home_tinyApartment", "Tiny Apartment", "Two rooms!", 70, 2e3, 120, 4),
		S = new w("home_regularApartment", "Normal Apartment", "Just a normal apartment in an ordinary neighbourhood.", 100, 6e3, 150, 5),
		A = new w("home_fancyApartment", "Fancy Apartment", "Look at that shower!", 200, 1e4, 180, 6),
		E = new w("home_penthouse", "Penthouse", "On top of things.", 400, 2e4, 210, 7),
		I = new w("home_smallHouse", "Small House", "Five rooms!", 600, 25e3, 240, 8),
		N = new w("home_house", "House", "A house.", 800, 4e4, 270, 9),
		T = new w("home_mansion", "Mansion", "Living like a king, except no style.", 1e3, 5e4, 300, 10);
	t.homes = [L, C, x, P, S, A, E, I, N, T]
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.loginWithSavegameId = t.logPlayerProgression = t.logCustomEvent = t.makeid = void 0;
	var n = a(72),
		i = a(138),
		r = a(307),
		o = (t.makeid = function () {
			for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = 0; a < 12; a++) e += t.charAt(Math.floor(Math.random() * t.length));
			return e
		}, t.logCustomEvent = function (e, t) {
			var a = {
				EventName: e,
				Body: {
					description: t
				}
			};
			try {
				r.WritePlayerEvent(a, o)
			} catch (e) {
				console.log(e.errorMessage)
			}
		}, t.logPlayerProgression = function (e, t, a) {
			var n = {
				Statistics: [{
					StatisticName: "ProgressionAggr",
					Version: 0,
					Value: 1e4 * e + 100 * t + a
				}]
			};
			try {
				r.UpdatePlayerStatistics(n, o)
			} catch (e) {
				console.log(e.errorMessage)
			}
			var i = {
				EventName: "player_progressed",
				Body: {
					loop: e,
					life: t,
					year: a
				}
			};
			try {
				r.WritePlayerEvent(i, o)
			} catch (e) {
				console.log(e.errorMessage)
			}
		}, t.loginWithSavegameId = function (e) {
			i.settings.titleId = "EBE7";
			var t = {
				TitleId: i.settings.titleId,
				CustomId: e,
				CreateAccount: !0
			};
			try {
				r.LoginWithCustomID(t, o)
			} catch (e) { }
		}, function (e, t) {
			n.DEVMODE && (null !== t ? console.log(t) : null !== e && (console.log("Something went wrong with your first API call."), console.log("Here's some debug information:"), console.log(s(e))))
		}),
		s = function (e) {
			if (null == e) return "";
			var t = e.errorMessage;
			for (var a in e.errorDetails) for (var n in e.errorDetails[a]) t += "\n" + a + ": " + e.errorDetails[a][n];
			return t
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.prestiger = void 0;
	var i = a(12),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = function () {
			function e() {
				(0, s.
					default)(this, e), this.registeredObjects = []
			}
			return (0, l.
				default)(e, [{
					key: "register",
					value: function (e) {
						this.registeredObjects.push(e)
					}
				}, {
					key: "prestige",
					value: function () {
						var e = !0,
							t = !1,
							a = void 0;
						try {
							for (var n, i = (0, r.
								default)(this.registeredObjects); !(e = (n = i.next()).done); e = !0) {
								var o = n.value;
								o.prestige()
							}
						} catch (e) {
							t = !0, a = e
						} finally {
							try {
								!e && i.
									return && i.
										return()
							} finally {
								if (t) throw a
							}
						}
						var s = !0,
							u = !1,
							l = void 0;
						try {
							for (var c, d = (0, r.
								default)(this.registeredObjects); !(s = (c = d.next()).done); s = !0) {
								var f = c.value;
								f.update()
							}
						} catch (e) {
							u = !0, l = e
						} finally {
							try {
								!s && d.
									return && d.
										return()
							} finally {
								if (u) throw l
							}
						}
						var v = !0,
							h = !1,
							p = void 0;
						try {
							for (var m, y = (0, r.
								default)(this.registeredObjects); !(v = (m = y.next()).done); v = !0) {
								var g = m.value;
								g.postPrestigeAssert()
							}
						} catch (e) {
							h = !0, p = e
						} finally {
							try {
								!v && y.
									return && y.
										return()
							} finally {
								if (h) throw p
							}
						}
					}
				}, {
					key: "grandPrestige",
					value: function () {
						var e = !0,
							t = !1,
							a = void 0;
						try {
							for (var n, i = (0, r.
								default)(this.registeredObjects); !(e = (n = i.next()).done); e = !0) {
								var o = n.value;
								o.grandPrestige()
							}
						} catch (e) {
							t = !0, a = e
						} finally {
							try {
								!e && i.
									return && i.
										return()
							} finally {
								if (t) throw a
							}
						}
						var s = !0,
							u = !1,
							l = void 0;
						try {
							for (var c, d = (0, r.
								default)(this.registeredObjects); !(s = (c = d.next()).done); s = !0) {
								var f = c.value;
								f.update()
							}
						} catch (e) {
							u = !0, l = e
						} finally {
							try {
								!s && d.
									return && d.
										return()
							} finally {
								if (u) throw l
							}
						}
						var v = !0,
							h = !1,
							p = void 0;
						try {
							for (var m, y = (0, r.
								default)(this.registeredObjects); !(v = (m = y.next()).done); v = !0) {
								var g = m.value;
								g.postPrestigeAssert()
							}
						} catch (e) {
							h = !0, p = e
						} finally {
							try {
								!v && y.
									return && y.
										return()
							} finally {
								if (h) throw p
							}
						}
					}
				}]), e
		}();
	t.prestiger = new c
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.foodCostsPerDayStat = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(17),
		v = function (e) {
			function t() {
				(0, s.
					default)(this, t);
				var e = (0, l.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, "foodCostsPerDayStat", "Food costs/day", 20));
				return e.update(), e
			}
			return (0, d.
				default)(t, e), t
		}(f.Stat);
	t.foodCostsPerDayStat = new v
}, , , , , , , , , , , , , , , , , , , , function (e, t, a) {
	a(290);
	var n = a(6)(a(189), a(371), "data-v-278891ea", null);
	e.exports = n.exports
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.boosts = void 0;
	var n = a(156),
		i = a(33),
		r = a(28),
		o = a(11),
		s = a(9),
		u = a(113),
		l = a(112),
		c = a(114),
		d = new n.Boost("boost_coffeine", "Copious Caffeine", "Double Energy for 2 Months", 60, 730),
		f = new o.MultModifier("coffeine_mod", "Copious Caffeine", 10, 2);
	(0, s.createSelectedLock)(d, f), (0, s.createLevelLock)(u.nutrition, d, 10), i.energyStat.addModifier(f);
	var v = new n.Boost("boost_organize", "Organize your Stuff", "Double Energy for 3 Months", 90, 1095),
		h = new o.MultModifier("boost_organize_mod", "Organized your Stuff", 10, 2);
	(0, s.createSelectedLock)(v, h), (0, s.createLevelLock)(l.getStuffDone, v, 10), i.energyStat.addModifier(h);
	var p = new n.Boost("boost_spa", "Visit Spa", "Double Energy for 4 Months", 120, 1460),
		m = new o.MultModifier("boost_spaMod", "Visited Spa", 10, 2);
	(0, s.createSelectedLock)(p, m), i.energyStat.addModifier(m);
	var y = new n.Boost("boost_conference", "Go to Conference", "Double Research Output for 6 Months", 180, 1825),
		g = new o.MultModifier("boost_conferenceMod", "Visited Conference", 10, 2);
	(0, s.createSelectedLock)(y, g), (0, s.createLevelLock)(c.studySkills, y, 10), r.baseResearchXpPerHourStat.addModifier(g);
	t.boosts = [d, v, p, y]
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.assistants = t.secretary = t.researchAssistant = t.servant = t.cleaner = void 0;
	var i = a(12),
		r = n(i),
		o = a(2),
		s = n(o),
		u = a(1),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(8),
		p = n(h),
		m = a(4),
		y = n(m),
		g = a(16),
		_ = a(9),
		M = a(11),
		b = a(24),
		k = a(52),
		w = a(78),
		L = a(50),
		C = a(28),
		x = function (e) {
			function t(e, a, n, i) {
				var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {
					return !0
				},
					o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : function () {
						return !0
					};
				(0, l.
					default)(this, t);
				var u = (0, v.
					default)(this, (t.__proto__ || (0, s.
						default)(t)).call(this, e, a));
				u.description = n, u.cost = i;
				var c = new M.AddModifier(u.id + "_cost_mod", u.name, 1, u.cost);
				return (0, _.createTrueStateLock)(u, c), k.dailyExpensesStat.addModifier(c), u.selectAllowed = r, u.deselectAllowed = o, u
			}
			return (0, y.
				default)(t, e), (0, d.
					default)(t, [{
						key: "setValue",
						value: function (e) {
							e && !this.selectAllowed() || (e || this.deselectAllowed()) && (0, p.
								default)(t.prototype.__proto__ || (0, s.
									default)(t.prototype), "setValue", this).call(this, e)
						}
					}]), t
		}(g.BooleanStateEntity),
		P = t.cleaner = new x("assistant_cleaner", "Cleaner", "Reduces Your Chores by One Hour", 50, function () {
			return !0
		}, function () {
			return b.freeTime.duration.effective >= 60 + Math.min(0, L.currentHomeContainer.home.choresTime.rawEffective)
		}),
		S = new M.AddModifier("cleaner_mod", "Cleaner", 1, -60);
	(0, _.createTrueStateLock)(P, S);
	var A = t.servant = new x("assistant_servant", "Full-time Servant", "Reduces Your Chores by Five Hours", 1e3, function () {
		return !0
	}, function () {
		return b.freeTime.duration.effective >= 300 + Math.min(0, L.currentHomeContainer.home.choresTime.rawEffective)
	}),
		E = new M.AddModifier("servant_mod", "Servant", 1, -300);
	(0, _.createTrueStateLock)(A, E);
	var I = !0,
		N = !1,
		T = void 0;
	try {
		for (var j, D = (0, r.
			default)(w.homes); !(I = (j = D.next()).done); I = !0) {
			var O = j.value;
			O.choresTime.addModifier(S), O.choresTime.addModifier(E)
		}
	} catch (e) {
		N = !0, T = e
	} finally {
		try {
			!I && D.
				return && D.
					return()
		} finally {
			if (N) throw T
		}
	}
	var R = t.researchAssistant = new x("assistant_research", "Research Assistant", "Research Speed +50%", 500, function () {
		return !0
	}, function () {
		return !0
	}),
		z = new M.MultModifier("researchAssistant_mod", "Research Assistant", 10, 1.5);
	(0, _.createTrueStateLock)(R, z), C.baseResearchXpPerHourStat.addModifier(z);
	var V = t.secretary = new x("assistant_secretary", "Personal Secretary", "Work Experience +50%", 500, function () {
		return !0
	}, function () {
		return !0
	}),
		B = new M.MultModifier("secretary_mod", "Secretary", 10, 1.5);
	(0, _.createTrueStateLock)(V, B), C.baseWorkXpPerHourStat.addModifier(B);
	t.assistants = [P, A, R, V]
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.paused = void 0;
	var n = a(16);
	t.paused = new n.BooleanStateEntity("state_paused", "Pause", !1)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.xpPerHour = t.nightMode = t.idleMode = t.pauseOnPrestige = void 0;
	var n = a(16);
	t.pauseOnPrestige = new n.BooleanStateEntity("set_pauseOnPrestige", "Pause Game after Prestige", !1, !1), t.idleMode = new n.BooleanStateEntity("set_idleMode", "Fast-Forward progress after Idling", !0, !1), t.nightMode = new n.BooleanStateEntity("state_nightmode", "Nightmode", !1), t.xpPerHour = new n.BooleanStateEntity("show_xpPerHour", "XP Per Hour", !0, !1)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.selectHome = t.changeActivityTime = t.setActiveResearch = t.setActiveJob = t.findActiveJob = void 0;
	var i = a(12),
		r = n(i),
		o = a(48),
		s = a(60),
		u = a(50);
	t.findActiveJob = function (e) {
		var t = !0,
			a = !1,
			n = void 0;
		try {
			for (var i, o = (0, r.
				default)(e.careers); !(t = (i = o.next()).done); t = !0) {
				var s = i.value,
					u = !0,
					l = !1,
					c = void 0;
				try {
					for (var d, f = (0, r.
						default)(s.jobs); !(u = (d = f.next()).done); u = !0) {
						var v = d.value;
						if (v.state.active) return v
					}
				} catch (e) {
					l = !0, c = e
				} finally {
					try {
						!u && f.
							return && f.
								return()
					} finally {
						if (l) throw c
					}
				}
			}
		} catch (e) {
			a = !0, n = e
		} finally {
			try {
				!t && o.
					return && o.
						return()
			} finally {
				if (a) throw n
			}
		}
	}, t.setActiveJob = function (e) {
		o.currentJobContainer.setCurrentJob(e)
	}, t.setActiveResearch = function (e) {
		s.currentResearchContainer.setCurrentResearch(e)
	}, t.changeActivityTime = function (e, t, a) {
		e.schedule.changeActivityTime(t, a)
	}, t.selectHome = function (e) {
		u.currentHomeContainer.setCurrent(e)
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.jobs = t.careers = void 0;
	var i, r = a(119),
		o = n(r),
		s = a(73),
		u = a(49),
		l = a(59),
		c = t.careers = [s.bunMasters, u.yugle, l.darkPlateau];
	t.jobs = (i = []).concat.apply(i, (0, o.
		default)(c.map(function (e) {
			return e.jobs
		})))
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.leadership = t.gungHo = t.leadership101 = void 0;
	var n = a(9),
		i = a(42),
		r = a(21),
		o = a(11),
		s = a(28),
		u = a(49),
		l = t.leadership101 = new i.Book("leadership1", "Leadership 101", "Fundamentals of Leadering", 100, "0785264191"),
		c = new o.MultModifier(l.id + "_workexp_mod", l.name, 1, 1.05);
	(0, n.createCompletedLock)(l, c), s.baseWorkXpPerHourStat.addModifier(c), l.effect = "5% more work experience/hour";
	var d = t.gungHo = new i.Book("leadership2", "Gung Ho", "Inspire Underlings", 140, "068815428X");
	c = new o.MultModifier(d.id + "_workexp_mod", d.name, 1, 1.05), (0, n.createCompletedLock)(d, c), s.baseWorkXpPerHourStat.addModifier(c), d.effect = "5% more work experience/hour";
	var f = new i.Book("leadership3", "The One Minute Manager", "Sequel to 'The One Minute Lover'", 100, "0062367544");
	c = new o.MultModifier(f.id + "_workexp_mod", f.name, 1, 1.05), (0, n.createCompletedLock)(f, c), s.baseWorkXpPerHourStat.addModifier(c), f.effect = "5% more work experience/hour";
	var v = new i.Book("leadership4", "The Leadership Challenge", "Extraordinize your Organization", 190, "0470651725");
	c = new o.MultModifier(v.id + "_workexp_mod", v.name, 1, 1.05), (0, n.createCompletedLock)(v, c), s.baseWorkXpPerHourStat.addModifier(c), v.effect = "5% more work experience/hour";
	var h = new i.Book("leadership5", "Leadership: Theory and Practice", "Getting Serious", 300, "1483317536");
	c = new o.MultModifier(h.id + "_workexp_mod", h.name, 1, 1.05), (0, n.createCompletedLock)(h, c), s.baseWorkXpPerHourStat.addModifier(c), h.effect = "5% more work experience/hour", (0, n.createCompletedOrReadingListLock)(l, d), (0, n.createCompletedOrReadingListLock)(d, f), (0, n.createCompletedOrReadingListLock)(f, v), (0, n.createCompletedOrReadingListLock)(v, h);
	var p = t.leadership = new r.Area("area_leadership", "Leadership", [l, d, f, v, h]);
	c = new o.LevelAddMultModifier("leadership_research_level_mod", "Research: Leadership", 2, p.xp, .02), s.baseWorkXpPerHourStat.addModifier(c), p.effect = "+2% Work Experience/Hour", p.importance = 1.5, (0, n.createLevelLock)(p, u.teamLead, 10), (0, n.createLevelLock)(p, u.divisionLead, 10), (0, n.createLevelLock)(p, u.cto, 100)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.areas = t.fields = void 0;
	var i, r = a(119),
		o = n(r),
		s = a(171),
		u = a(166),
		l = a(169),
		c = a(110),
		d = t.fields = [s.selfImprovement, u.business, l.compsci, c.physics];
	t.areas = (i = []).concat.apply(i, (0, o.
		default)(d.map(function (e) {
			return e.areas
		})))
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.physics = t.alienCommunication = t.constructMirrorCannon = t.constructPowerPlant = t.studyMirroredShip = t.demirrorAnomaly = t.mirrorMatter = t.anomaly = t.dmScanner = void 0;
	for (var n = a(61), i = a(111), r = a(21), o = a(9), s = a(59), u = a(11), l = t.dmScanner = new r.Area("area_dmScanner", "Dark Matter Scanning", []), c = t.anomaly = new r.Area("area_investigateAnomaly", "Investigate Anomaly", []), d = t.mirrorMatter = new r.Area("area_mirrorMatter", "Mirror Matter Theory", []), f = t.demirrorAnomaly = new r.Area("area_demirror", "Unmirror Anomaly", []), v = t.studyMirroredShip = new r.Area("area_studyMirroredShip", "Study Mirrored Ship", []), h = t.constructPowerPlant = new r.Area("area_constructPowerPlant", "Mirror Power Plant", []), p = t.constructMirrorCannon = new r.Area("area_constructMirrorCannon", "Build Mirror Cannon", []), m = t.alienCommunication = new r.Area("area_study_alien_com", "Alien Communication", []), y = [i.qm, l, c, d, f, v, h, p, m], g = 1; g < y.length - 2; g++) {
		var _ = new u.LevelAddMultModifier(y[g].id + "_level_mod", "Research: " + y[g].name, 2, y[g].xp, .01);
		y[g + 1].xp.xpPerHourStat.addModifier(_), y[g].effect = "+1% " + y[g + 1].name + " Research", (0, o.createLevelLock)(y[g], y[g + 1], 50 * g)
	} (0, o.createLevelLock)(p, m, 500), p.effect = "Level 500 to Destroy Mirror Ship", m.effect = "Level 1100 to Communicate", (0, o.createLevelLock)(s.lambdaComplexTrainee, l, 1);
	t.physics = new n.Field("physics", "Physics", y)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.qm = t.qm4 = t.qm3 = t.qm2 = t.qm1 = t.qm0 = void 0;
	var n = a(9),
		i = a(42),
		r = a(21),
		o = a(59),
		s = t.qm0 = new i.Book("qm0", "In Search of Schrödinger's Cat", "Looks interesting.", 150, "0553342533"),
		u = t.qm1 = new i.Book("qm1", "Quantum Physics of ...", "Maybe this quantum stuff can help you figure things out.", 300, "047187373X"),
		l = t.qm2 = new i.Book("qm2", "Principles of Quantum Mechanics", "This is pretty difficult.", 400, "0306447908"),
		c = t.qm3 = new i.Book("qm3", "Introduction to Quantum Mechanics", "Head hurts.", 500, "0131118927"),
		d = t.qm4 = new i.Book("qm4", "Modern Quantum Mechanics", "Okay I think I get it. Maybe.", 600, "0805382917");
	(0, n.createCompletedOrReadingListLock)(s, u), (0, n.createCompletedOrReadingListLock)(u, l), (0, n.createCompletedOrReadingListLock)(l, c), (0, n.createCompletedOrReadingListLock)(c, d);
	var f = t.qm = new r.Area("area_qm", "Quantum Mechanics", [s, u, l, c, d]);
	f.effect = "Exciting Career Opportunities", (0, n.createLevelLock)(f, o.darkPlateau.jobs[0], 50), (0, n.createLevelLock)(f, o.darkPlateau.jobs[6], 500)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getStuffDone = void 0;
	var n = a(9),
		i = a(42),
		r = a(21),
		o = a(11),
		s = a(24),
		u = a(28),
		l = a(33),
		c = new i.Book("gsd1", "Eat That Frog!", "Stop Procrastinating", 40, "1576754227"),
		d = new o.MultModifier("gsd1_slacking_mod", "Eat That Frog!", 1, .8);
	(0, n.createCompletedLock)(c, d), s.slacking.duration.addModifier(d), c.effect = "20% less slacking";
	var f = new i.Book("gsd2", "The One Thing", "Prioritize Harder", 60, "1885167776");
	d = new o.MultModifier("gsd2_job_experience_mod", "The One Thing", 1, 1.1), (0, n.createCompletedLock)(f, d), u.baseWorkXpPerHourStat.addModifier(d), f.effect = "10% more work experience/h";
	var v = new i.Book("gsd3", "Getting Things Done", "Organize Your Life", 120, "0143126563");
	d = new o.MultModifier("gsd3_job_experience_mod", "Getting Things Done", 1, 1.1), (0, n.createCompletedLock)(v, d), l.energyStat.addModifier(d), v.effect = "10% more energy", (0, n.createCompletedOrReadingListLock)(c, f), (0, n.createCompletedOrReadingListLock)(f, v);
	var h = t.getStuffDone = new r.Area("area_getting_stuff_done", "Getting Stuff Done", [c, f, v]);
	d = new o.LevelModifier("gsd_research_level_mod", "Research: Getting Things Done", 2, h.xp, .99), s.slacking.duration.addModifier(d), h.effect = "-1% Slacking (compounding)"
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.nutrition = void 0;
	var n = a(21),
		i = a(11),
		r = a(33),
		o = t.nutrition = new n.Area("area_nutrition", "Nutrition", []),
		s = new i.LevelAddMultModifier("nutrition_research_level_mod", "Research: Nutrition", 2, o.xp, .01);
	r.energyStat.addModifier(s), o.effect = "+1% Energy", o.importance = 3
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.studySkills = void 0;
	var n = a(21),
		i = a(11),
		r = a(28),
		o = t.studySkills = new n.Area("area_study_skills", "Study Skills", []),
		s = new i.LevelAddMultModifier("study_skills_research_level_mod", "Research: Study Skills", 2, o.xp, .01);
	r.baseResearchXpPerHourStat.addModifier(s), o.effect = "+1% Research Speed", o.importance = 2.5
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.messageBox = void 0;
	var i = a(1),
		r = n(i),
		o = a(3),
		s = n(o),
		u = function () {
			function e() {
				(0, r.
					default)(this, e), this.messages = []
			}
			return (0, s.
				default)(e, [{
					key: "addMessage",
					value: function (e) {
						for (this.messages.push(e); this.messages.length > 10;) this.messages.shift()
					}
				}, {
					key: "oldestMessage",
					value: function () {
						return this.messages.length > 0 ? this.messages[0] : ""
					}
				}, {
					key: "newestMessage",
					value: function () {
						return this.messages.length > 0 ? this.messages[this.messages.length - 1] : ""
					}
				}]), e
		}();
	t.messageBox = new u
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Pane = t.PaneGroup = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(1),
		v = n(f),
		h = a(10),
		p = function e() {
			(0, v.
				default)(this, e), this.notified = !1, this.selected = !1
		};
	t.PaneGroup = function e() {
		var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		(0, v.
			default)(this, e), this.panes = [], this.allowMultiple = t
	}, t.Pane = function (e) {
		function t(e, a, n, i) {
			var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
				s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
			(0, v.
				default)(this, t);
			var u = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e, a, new p));
			return u.component = n, u.footer = o, u.subpanes = s, u.paneGroup = i, u.paneGroup.panes.push(u), u
		}
		return (0, d.
			default)(t, e), (0, s.
				default)(t, [{
					key: "select",
					value: function () {
						this.state.selected = !0, this.state.notified = !1
					}
				}, {
					key: "toggle",
					value: function () {
						this.state.selected = !this.state.selected, this.state.notified = !1
					}
				}, {
					key: "deselect",
					value: function () {
						this.state.selected = !1
					}
				}, {
					key: "notify",
					value: function () {
						this.state.selected || (this.state.notified = !0)
					}
				}, {
					key: "prestige",
					value: function () {
						this.notified = !1, this.selected = "life-summary-pane" === this.id
					}
				}]), t
	}(h.BasicEntity)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.saver = void 0;
	var i = a(218),
		r = n(i),
		o = a(217),
		s = n(o),
		u = a(1),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(12),
		v = n(f),
		h = a(2),
		p = n(h),
		m = a(80),
		y = a(14),
		g = a(306),
		_ = n(g),
		M = function (e) {
			return '"' + e.name + "-" + e.constructor.name + '"'
		},
		b = function (e) {
			for (var t = [M(e)], a = e.constructor.name;
				"BasicEntity" !== a;) e = (0, p.
					default)(e), a = e.constructor.name, t.push(a);
			return t
		},
		k = "digraph {\n",
		w = function e(t, a) {
			k += 0 === t.size ? a + ";\n" : "subgraph cluster_" + a + '{\nlabel="' + a + '!";\n';
			var n = !0,
				i = !1,
				r = void 0;
			try {
				for (var o, s = (0, v.
					default)(t); !(n = (o = s.next()).done); n = !0) {
					var u = o.value;
					e(u[1], u[0])
				}
			} catch (e) {
				i = !0, r = e
			} finally {
				try {
					!n && s.
						return && s.
							return()
				} finally {
					if (i) throw r
				}
			}
			t.size > 0 && (k += "}\n")
		},
		L = function () {
			function e() {
				(0, l.
					default)(this, e), this.registeredObjects = {}, this.running = !0, this.saveString = "", this.itemName = "groundhog_life_save"
			}
			return (0, d.
				default)(e, [{
					key: "stop",
					value: function () {
						this.running = !1
					}
				}, {
					key: "register",
					value: function (e) {
						(0, y.assert)(!this.registeredObjects.hasOwnProperty(e.id) || this.registeredObjects[e.id] === e, e.id), this.registeredObjects[e.id] = e, m.prestiger.register(e)
					}
				}, {
					key: "import",
					value: function (e) {
						this.loadFromString(e)
					}
				}, {
					key: "save",
					value: function () {
						if (this.running) {
							var e = {};
							for (var t in this.registeredObjects) e[t] = this.registeredObjects[t].state;
							e.version = "0.4.0", this.saveString = _.
								default.compressToEncodedURIComponent((0, s.
									default)(e)), window.localStorage.setItem(this.itemName, this.saveString)
						}
					}
				}, {
					key: "merge",
					value: function (e, t) {
						for (var a in t) e.state[a] = t[a]
					}
				}, {
					key: "loadFromString",
					value: function (e) {
						try {
							if (e) {
								this.saveString = e;
								var t = "";
								try {
									t = JSON.parse(window.atob(e))
								} catch (a) {
									try {
										t = JSON.parse(_.
											default.decompressFromEncodedURIComponent(e))
									} catch (t) {
										window.alert(t.message), window.localStorage.setItem("backup_save", e)
									}
								}
								for (var a in this.registeredObjects) t.hasOwnProperty(a) && this.merge(this.registeredObjects[a], t[a]);
								for (var n in this.registeredObjects) this.registeredObjects[n].onLoad()
							}
							for (var i in this.registeredObjects) this.registeredObjects[i].update();
							for (var r in this.registeredObjects) this.registeredObjects[r].postLoadAssert()
						} catch (t) {
							window.alert(t.message), window.localStorage.setItem("backup_save", e)
						}
					}
				}, {
					key: "load",
					value: function () {
						window.localStorage.removeItem("life_idle_save");
						var e = window.localStorage.getItem(this.itemName);
						this.loadFromString(e)
					}
				}, {
					key: "dependencyGraph",
					value: function () {
						var e = [];
						for (var t in this.registeredObjects) e.push(this.registeredObjects[t]);
						var a = new r.
							default,
							n = !0,
							i = !1,
							o = void 0;
						try {
							for (var s, u = (0, v.
								default)(e); !(n = (s = u.next()).done); n = !0) {
								var l = s.value,
									c = b(l).reverse(),
									d = a,
									f = !0,
									h = !1,
									p = void 0;
								try {
									for (var m, y = (0, v.
										default)(c); !(f = (m = y.next()).done); f = !0) {
										var g = m.value;
										d.has(g) || d.set(g, new r.
											default), d = d.get(g)
									}
								} catch (e) {
									h = !0, p = e
								} finally {
									try {
										!f && y.
											return && y.
												return()
									} finally {
										if (h) throw p
									}
								}
							}
						} catch (e) {
							i = !0, o = e
						} finally {
							try {
								!n && u.
									return && u.
										return()
							} finally {
								if (i) throw o
							}
						}
						var _ = new r.
							default,
							L = !0,
							C = !1,
							x = void 0;
						try {
							for (var P, S = (0, v.
								default)(e); !(L = (P = S.next()).done); L = !0) {
								var A = P.value;
								_.has(A.constructor.name) || _.set(A.constructor.name, []), _.get(A.constructor.name).push(A)
							}
						} catch (e) {
							C = !0, x = e
						} finally {
							try {
								!L && S.
									return && S.
										return()
							} finally {
								if (C) throw x
							}
						}
						w(a, "All");
						var E = !0,
							I = !1,
							N = void 0;
						try {
							for (var T, j = (0, v.
								default)(e); !(E = (T = j.next()).done); E = !0) {
								var D = T.value,
									O = !0,
									R = !1,
									z = void 0;
								try {
									for (var V, B = (0, v.
										default)(D.dependants); !(O = (V = B.next()).done); O = !0) {
										var H = V.value;
										k += M(D) + " -> " + M(H) + "\n"
									}
								} catch (e) {
									R = !0, z = e
								} finally {
									try {
										!O && B.
											return && B.
												return()
									} finally {
										if (R) throw z
									}
								}
							}
						} catch (e) {
							I = !0, N = e
						} finally {
							try {
								!E && j.
									return && j.
										return()
							} finally {
								if (I) throw N
							}
						}
						k += "}", console.log(k)
					}
				}]), e
		}();
	t.saver = new L
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.schedule = void 0;
	var i = a(226),
		r = n(i),
		o = a(12),
		s = n(o),
		u = a(2),
		l = n(u),
		c = a(3),
		d = n(c),
		f = a(5),
		v = n(f),
		h = a(8),
		p = n(h),
		m = a(4),
		y = n(m),
		g = a(1),
		_ = n(g),
		M = a(10),
		b = a(24),
		k = a(14),
		w = a(103),
		L = a(50),
		C = a(78),
		x = function e() {
			(0, _.
				default)(this, e)
		},
		P = function (e) {
			function t(e, a, n) {
				(0, _.
					default)(this, t);
				var i = (0, v.
					default)(this, (t.__proto__ || (0, l.
						default)(t)).call(this, e, a, new x)),
					r = !0,
					o = !1,
					u = void 0;
				try {
					for (var c, d = (0, s.
						default)(n); !(r = (c = d.next()).done); r = !0) {
						var f = c.value;
						f.duration.dependants.push(i)
					}
				} catch (e) {
					o = !0, u = e
				} finally {
					try {
						!r && d.
							return && d.
								return()
					} finally {
						if (o) throw u
					}
				}
				return i.timetable = [], i.update(), i
			}
			return (0, y.
				default)(t, e), (0, d.
					default)(t, [{
						key: "prestige",
						value: function () { }
					}, {
						key: "postPrestigeAssert",
						value: function () {
							(0, k.assert)(1440 === this.totalTime())
						}
					}, {
						key: "totalTime",
						value: function () {
							return b.activities.map(function (e) {
								return e.getDuration()
							}).reduce(function (e, t) {
								return e + t
							})
						}
					}, {
						key: "update",
						value: function () {
							var e = this.totalTime();
							if (1440 !== e) return void b.freeTime.durationProxy.add(1440 - e);
							(0, k.assert)(1440 === e);
							var a = 0,
								n = [],
								i = !0,
								r = !1,
								o = void 0;
							try {
								for (var u, c = (0, s.
									default)(b.activities); !(i = (u = c.next()).done); i = !0) {
									var d = u.value;
									n.push([
										[a, a + d.getDuration()], d]), a += d.getDuration()
								}
							} catch (e) {
								r = !0, o = e
							} finally {
								try {
									!i && c.
										return && c.
											return()
								} finally {
									if (r) throw o
								}
							}
							this.timetable = n, (0, p.
								default)(t.prototype.__proto__ || (0, l.
									default)(t.prototype), "update", this).call(this)
						}
					}, {
						key: "changeActivityTime",
						value: function (e, t) {
							var a = Math.abs(t),
								n = e.duration.effective - a * Math.floor(e.duration.effective / a),
								i = a * Math.ceil(e.duration.effective / a) - e.duration.effective;
							n > 0 && (t = Math.max(t, -n)), i > 0 && (t = Math.min(t, i)), t = Math.min(t, b.freeTime.duration.effective), t = Math.max(t, -e.duration.effective), t = Math.floor(t), e.durationProxy.add(t), (0, k.assert)(e.duration.effective === e.durationProxy.getValue())
						}
					}, {
						key: "austerityMode",
						value: function () {
							this.changeActivityTime(b.research, -b.research.duration.effective), this.changeActivityTime(b.sleep, Math.min(0, 480 - b.sleep.duration.effective)), this.changeActivityTime(b.work, -b.work.duration.effective), L.currentHomeContainer.setCurrent(C.parentsBasement, !1);
							var e = !0,
								t = !1,
								a = void 0;
							try {
								for (var n, i = (0, s.
									default)(w.assistants); !(e = (n = i.next()).done); e = !0) {
									var r = n.value;
									r.setValue(!1)
								}
							} catch (e) {
								t = !0, a = e
							} finally {
								try {
									!e && i.
										return && i.
											return()
								} finally {
									if (t) throw a
								}
							}
							this.changeActivityTime(b.work, b.freeTime.duration.effective)
						}
					}, {
						key: "lookupCurrentActivity",
						value: function (e, t) {
							var a = !0,
								n = !1,
								i = void 0;
							try {
								for (var o, u = (0, s.
									default)(this.timetable); !(a = (o = u.next()).done); a = !0) {
									var l = (0, r.
										default)(o.value, 2),
										c = l[0],
										d = l[1];
									if (c[0] <= e && e < c[1]) return t ? [d, c[1] - e] : d
								}
							} catch (e) {
								n = !0, i = e
							} finally {
								try {
									!a && u.
										return && u.
											return()
								} finally {
									if (n) throw i
								}
							}
							return console.log("didn' find current activity", e, this.timetable), t ? [b.sleep, 1440 - e] : b.sleep
						}
					}]), t
		}(M.BasicEntity);
	t.schedule = new P("schedule", "Schedule", b.activities)
}, , , , , , , , , , , , , , , , , , function (e, t) { }, , , , , , , , , , , , function (e, t, a) {
	a(289);
	var n = a(6)(a(185), a(370), "data-v-27702062", null);
	e.exports = n.exports
}, , , function (e, t, a) {
	function n(e) {
		return a(i(e))
	}
	function i(e) {
		return r[e] ||
			function () {
				throw new Error("Cannot find module '" + e + "'.")
			}()
	}
	var r = {
		"./happy_emoji.svg": 319,
		"./neutral_emoji.svg": 320,
		"./sad_emoji.svg": 321
	};
	n.keys = function () {
		return Object.keys(r)
	}, n.resolve = i, e.exports = n, n.id = 151
}, function (e, t) {
	"use strict";
	!
		function (e, t, a, n, i, r, o) {
			e.GoogleAnalyticsObject = i, e[i] = e[i] ||
				function () {
					(e[i].q = e[i].q || []).push(arguments)
				}, e[i].l = 1 * new Date, r = t.createElement(a), o = t.getElementsByTagName(a)[0], r.async = 1, r.src = n, o.parentNode.insertBefore(r, o)
		}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-92568749-1", "auto"), ga("send", "pageview")
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Achievement = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(8),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(14),
		g = a(18),
		_ = a(41),
		M = a(25),
		b = function e() {
			(0, p.
				default)(this, e), this.completed = !1, this.completedAt = -1
		};
	t.Achievement = function (e) {
		function t(e, a, n, i, o) {
			var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : function (e, t) {
				return e >= t
			};
			(0, p.
				default)(this, t);
			var u = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e, a, new b));
			return u.description = n, u.valueFun = i, u.goal = o, u.currentValue = u.valueFun(), u.checkFun = s, u.logUnlock = !0, u
		}
		return (0, v.
			default)(t, e), (0, s.
				default)(t, [{
					key: "check",
					value: function () {
						return (0, y.isNumber)(this.valueFun()) && this.checkFun(this.valueFun(), this.goal)
					}
				}, {
					key: "update",
					value: function () {
						this.currentValue = this.valueFun(), !this.state.completed && this.check() && (this.state.completed = !0, this.state.completedAt = [_.currentLife.getValue(), g.currentDay.getValue()], M.journalPane.notify(), M.achievementPane.notify()), this.state.completed && !this.check() && (this.state.completed = !1), (0, d.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "update", this).call(this)
					}
				}]), t
	}(m.BasicEntity)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.achievements = void 0;
	var n = a(153),
		i = a(41),
		r = a(73),
		o = a(49),
		s = a(62),
		u = a(40),
		l = a(39),
		c = new n.Achievement("achievement_edge_of_retirement", "Edge of Retirement", "Start Over Once", function () {
			return i.currentLife.getValue() - 1
		}, 1);
	i.currentLife.subscribe(c);
	var d = new n.Achievement("achievement_samsara", "Samsara", "Start Over Ten Times", function () {
		return i.currentLife.getValue() - 1
	}, 10);
	i.currentLife.subscribe(d);
	var f = new n.Achievement("achievement_flippin_faster", "Flippin' Faster", "Level 10 Burger Flipper in less than 100 days", function () {
		return r.burgerFlipper.xp.getMinDaysToLevel(10)
	}, 100, function (e, t) {
		return e <= t
	});
	r.burgerFlipper.xp.subscribe(f);
	var v = new n.Achievement("achievement_flippin_fantastic", "Flippin' Fantastic", "Level 100 Burger Flipping", function () {
		return r.burgerFlipper.xp.highestLevelEverIncludingThisLife()
	}, 100);
	r.burgerFlipper.xp.subscribe(v);
	var h = new n.Achievement("achievement_flipping_livetimes", "Zen of Flipping", "Level 1000 Burger Flipper", function () {
		return r.burgerFlipper.xp.highestLevelEverIncludingThisLife()
	}, 1e3);
	r.burgerFlipper.xp.subscribe(h);
	var p = new n.Achievement("achievement_burgerKing", "Burger King", "Become Bun Masters CEO", function () {
		return r.bunMastersCeo.xp.highestLevelEverIncludingThisLife()
	}, 1);
	r.bunMastersCeo.xp.subscribe(p);
	var m = new n.Achievement("achievement_mayering", "Marissa?", "Level 10 Yugle CEO before age 40", function () {
		return o.yugleCeo.xp.getMinDaysToLevel(10)
	}, 8030, function (e, t) {
		return e <= t
	});
	o.yugleCeo.xp.subscribe(m);
	var y = new n.Achievement("achievement_happy", "Happy", "Be at least 1.8 happy", function () {
		return s.happinessStat.state.highestEffectiveEver
	}, 1.8);
	s.happinessStat.subscribe(y);
	var g = new n.Achievement("achievement_miserable", "Miserable", "Be less than 0.1 happy", function () {
		return s.happinessStat.state.lowestEffectiveEver
	}, .1, function (e, t) {
		return e <= t
	});
	s.happinessStat.subscribe(g);
	var _ = new n.Achievement("achievement_millionaire", "Millionaire", "Have a million dollars", function () {
		return u.money.state.maximum
	}, 1e6);
	u.money.subscribe(_);
	var M = new n.Achievement("achievement_billionaire", "Billionaire", "Have a billion dollars", function () {
		return u.money.state.maximum
	}, 1e9);
	u.money.subscribe(M);
	var b = new n.Achievement("achievement_communication_victory", "Communicator", "Win by communication", function () {
		return l.communicationVictory.getValue()
	}, 1);
	l.communicationVictory.subscribe(b);
	var k = new n.Achievement("achievement_cannon_victory", "Castle Doctrine", "Win by firepower", function () {
		return l.cannonVictory.getValue()
	}, 1);
	l.cannonVictory.subscribe(k);
	var w = new n.Achievement("achievement_speed_communication", "Fast Talker", "Win by Communication in one lifetime", function () {
		return l.fastestCommunicationVictory.getValue()
	}, 1, function (e, t) {
		return e <= t
	});
	l.fastestCommunicationVictory.subscribe(w);
	var L = new n.Achievement("achievement_speed_cannon", "Lucky Luke", "Win by firepower in one lifetime", function () {
		return l.fastestCannonVictory.getValue()
	}, 1, function (e, t) {
		return e <= t
	});
	l.fastestCannonVictory.subscribe(L);
	var C = function () {
		return l.aaCounter.state.value
	},
		x = new n.Achievement("achievement_anomalyAverted", "Anomaly Averted", "End the loop. Once.", C, 1);
	l.aaCounter.subscribe(x), x.effect = "Multiplies your base energy by the number of times you averted the anomaly.";
	t.achievements = [m, c, d, y, g, _, M, f, v, h, p, k, b, L, w, x]
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.autoplay = t.autoplayLifestyle = t.autoplayActivityDuration = t.autoplayResearch = t.autoplayJob = t.findBestJob = void 0;
	var i = a(12),
		r = n(i),
		o = a(14),
		s = a(106),
		u = a(80),
		l = a(40),
		c = a(71),
		d = a(24),
		f = a(102),
		v = t.findBestJob = function (e, t) {
			var a = null,
				n = -1,
				i = !0,
				o = !1,
				s = void 0;
			try {
				for (var u, l = (0, r.
					default)(e); !(i = (u = l.next()).done); i = !0) {
					var c = u.value,
						d = !0,
						f = !1,
						v = void 0;
					try {
						for (var h, p = (0, r.
							default)(c.jobs); !(d = (h = p.next()).done); d = !0) {
							var m = h.value;
							if (m.unlocked() && !(m.xp.state.level > t)) {
								var y = m.income.base;
								y > n && (n = y, a = m)
							}
						}
					} catch (e) {
						f = !0, v = e
					} finally {
						try {
							!d && p.
								return && p.
									return()
						} finally {
							if (f) throw v
						}
					}
				}
			} catch (e) {
				o = !0, s = e
			} finally {
				try {
					!i && l.
						return && l.
							return()
				} finally {
					if (o) throw s
				}
			}
			return a
		},
		h = function (e) {
			var t = !0,
				a = !0,
				n = !1,
				i = void 0;
			try {
				for (var o, s = (0, r.
					default)(f.boosts); !(a = (o = s.next()).done); a = !0) {
					var u = o.value;
					t = t && "available" === u.currentState()
				}
			} catch (e) {
				n = !0, i = e
			} finally {
				try {
					!a && s.
						return && s.
							return()
				} finally {
					if (n) throw i
				}
			}
			if (t) {
				var l = !0,
					c = !1,
					d = void 0;
				try {
					for (var v, h = (0, r.
						default)(f.boosts); !(l = (v = h.next()).done); l = !0) {
						var p = v.value;
						p.activate()
					}
				} catch (e) {
					c = !0, d = e
				} finally {
					try {
						!l && h.
							return && h.
								return()
					} finally {
						if (c) throw d
					}
				}
			}
		},
		p = t.autoplayJob = function (e) {
			var t = v(e.careers, 10);
			t ? (0, s.setActiveJob)(t) : (t = v(e.careers, 1e5), (0, o.assert)(t), (0, s.setActiveJob)(t))
		},
		m = t.autoplayResearch = function (e) {
			if (e.research.unlocked()) {
				var t = 9999999,
					a = null,
					n = !0,
					i = !1,
					o = void 0;
				try {
					for (var u, l = (0, r.
						default)(e.fields); !(n = (u = l.next()).done); n = !0) {
						var c = u.value;
						if (c.unlocked()) {
							var d = !0,
								f = !1,
								v = void 0;
							try {
								for (var h, p = (0, r.
									default)(c.areas); !(d = (h = p.next()).done); d = !0) {
									var m = h.value;
									m.unlocked() && m.xp.state.level / m.importance < t && (t = m.xp.state.level / m.importance, a = m)
								}
							} catch (e) {
								f = !0, v = e
							} finally {
								try {
									!d && p.
										return && p.
											return()
								} finally {
									if (f) throw v
								}
							}
						}
					}
				} catch (e) {
					i = !0, o = e
				} finally {
					try {
						!n && l.
							return && l.
								return()
					} finally {
						if (i) throw o
					}
				} (0, s.setActiveResearch)(a)
			}
		},
		y = t.autoplayActivityDuration = function (e) {
			if (!l.money.austerityMode) {
				var t = !1;
				if (t) for (var a = 0; a < 100; a++) {
					var n = !0,
						i = !1,
						o = void 0;
					try {
						for (var u, c = (0, r.
							default)(e.activities); !(n = (u = c.next()).done); n = !0) {
							var f = u.value;
							f.durationByUser && (0, s.changeActivityTime)(e, f, Math.floor(3e3 * Math.random() - 1500))
						}
					} catch (e) {
						i = !0, o = e
					} finally {
						try {
							!n && c.
								return && c.
									return()
						} finally {
							if (i) throw o
						}
					}
				}
				var v = !0,
					h = !1,
					p = void 0;
				try {
					for (var m, y = (0, r.
						default)(e.activities); !(v = (m = y.next()).done); v = !0) {
						var g = m.value;
						g.unlocked() && g.durationByUser && (g.duration.effective > 300 && (0, s.changeActivityTime)(e, g, -60), 0 === g.duration.effective && (0, s.changeActivityTime)(e, g, 60))
					}
				} catch (e) {
					h = !0, p = e
				} finally {
					try {
						!v && y.
							return && y.
								return()
					} finally {
						if (h) throw p
					}
				} (0, s.changeActivityTime)(e, d.sleep, 540), (0, s.changeActivityTime)(e, d.research, 500)
			}
		},
		g = t.autoplayLifestyle = function (e) {
			e.currency.money.getValue() > 1e5 && c.foodCostFactor.getValue() < 10 ? c.foodCostFactor.setValue(10) : c.foodCostFactor.getValue() > 1 && e.currency.money.getValue() < 1e5 && c.foodCostFactor.setValue(1)
		};
	t.autoplay = function (e) {
		p(e), h(e), e.time.currentDay.getValue() % 100 === 0 && (m(e), g(e)), y(e), e.time.currentDay.getValue() > 15330 && u.prestiger.prestige()
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Boost = void 0;
	var i = a(2),
		r = n(i),
		o = a(3),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(8),
		d = n(c),
		f = a(4),
		v = n(f),
		h = a(1),
		p = n(h),
		m = a(10),
		y = a(18),
		g = a(25),
		_ = function e() {
			(0, p.
				default)(this, e), this.lastExecuted = -9999, this.selected = !1
		};
	t.Boost = function (e) {
		function t(e, a, n, i, o) {
			(0, p.
				default)(this, t);
			var s = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e, a, new _));
			return s.description = n, s.duration = i, s.cooldown = o, s.available = !1, y.currentDay.subscribe(s), s
		}
		return (0, v.
			default)(t, e), (0, s.
				default)(t, [{
					key: "activate",
					value: function () {
						this.unlocked() && this.cooldownLeft() <= 0 && (this.state.selected = !0, this.state.lastExecuted = y.currentDay.getValue(), this.update())
					}
				}, {
					key: "currentState",
					value: function () {
						return this.state.selected ? "active" : this.cooldownLeft() > 0 ? "cooldown" : this.unlocked ? "available" : "locked"
					}
				}, {
					key: "buttonState",
					value: function () {
						return this.state.selected ? "btn-success" : this.cooldownLeft() > 0 ? "btn-warning" : this.unlocked ? "btn-primary" : "btn-secondary"
					}
				}, {
					key: "daysLeft",
					value: function () {
						return Math.max(0, this.duration - (y.currentDay.getValue() - this.state.lastExecuted))
					}
				}, {
					key: "cooldownLeft",
					value: function () {
						return Math.max(0, this.cooldown - (y.currentDay.getValue() - this.state.lastExecuted))
					}
				}, {
					key: "update",
					value: function () {
						this.available = !this.state.selected && y.currentDay.getValue() - this.state.lastExecuted > this.cooldown, this.state.selected && this.daysLeft() <= 0 && (this.state.selected = !1), 1 === this.cooldownLeft() && g.boostsPane.notify(), (0, d.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "update", this).call(this)
					}
				}, {
					key: "prestige",
					value: function () {
						this.state.lastExecuted = -9999, this.state.selected = !1
					}
				}, {
					key: "onLoad",
					value: function () {
						this.state.lastExecuted > y.currentDay.getValue() && (this.state.lastExecuted = -9999, this.state.selected = !1)
					}
				}]), t
	}(m.BasicEntity)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.anomalyEvent = void 0;
	var n = a(58),
		i = a(9),
		r = a(39),
		o = a(18),
		s = a(110),
		u = a(41),
		l = (0, n.createNode)("event_a18", "You are now free from the loop...if you want.");
	l.action = function () {
		r.anomalyAverted.setValue(!0), r.aaCounter.incrementValue()
	};
	var c = (0, n.createNode)("event_a_17", "They turn around! That was anticlimactic, but you take it.", l);
	c.action = function () {
		r.communicationVictory.incrementValue();
		var e = r.fastestCommunicationVictory.getValue();
		u.currentLifeThisLoop.getValue() < e && r.fastestCommunicationVictory.setValue(u.currentLifeThisLoop.getValue())
	};
	var d = (0, n.createNode)("event_a_16", 'You send a message: "Have big gun. Go away. Otherwise unexist."', c),
		f = (0, n.createNode)("event_a_15", "After many years of research, you have uncovered the basics of their communication.", d),
		v = (0, n.createNode)("a_not_fired", "You decide to try communication instead. This will be hard.", f),
		h = (0, n.createNode)("event_a18_firepower", "You are now free from the loop...if you want.");
	h.action = function () {
		r.anomalyAverted.setValue(!0), r.aaCounter.incrementValue()
	};
	var p = (0, n.createNode)("a_fired", "Success! The anomaly is no more. Neither are the millions of organic entities.", h);
	p.action = function () {
		r.cannonVictory.incrementValue();
		var e = r.fastestCannonVictory.getValue();
		u.currentLifeThisLoop.getValue() < e && r.fastestCannonVictory.setValue(u.currentLifeThisLoop.getValue())
	};
	var m = (0, n.createNode)("event_a_too_late", "It's too late. The ship is already in the solar system.", null),
		y = function () {
			return o.currentYear.getValue() > 41 ? 1 : 0
		},
		g = (0, n.createAutoChoiceNode)("event_a_checkfire", "Aiming...", y, [p, m]),
		_ = (0, n.createPath)("a_path_dont", "No", v),
		M = (0, n.createPath)("a_path_fire", "Yes", g),
		b = (0, n.createUserChoiceNode)("event_a14", "Fire the cannon?", [M, _]),
		k = (0, n.createNode)("event_a13c", "The plant is finished. Next, create a mirror cannon to stop the ship.", b),
		w = (0, n.createNode)("event_a13b", "You start designing a mirror-matter power plant.", k),
		L = (0, n.createNode)("event_a13", "Consider destroying it.", w),
		C = (0, n.createNode)("event_a12", "Maybe that thing is responsible for the loop you're stuck in.", L),
		x = (0, n.createNode)("event_a11", "Furthermore, it seems to move at high speed towards the solar system.", C),
		P = (0, n.createNode)("event_a10", "There are power generators, engines, and thousands of moving organic entities.", x),
		S = (0, n.createNode)("event_a9", "In SciFi-terms, it looks like a spaceship.", P),
		A = (0, n.createNode)("event_a8", "By reversing formulas for dark matter concentration, you create a model of the mirror-matter anomaly.", S),
		E = (0, n.createNode)("event_a7", "Theory: the anomaly is induced by mirror-matter, similar in structure to ordinary matter yet undetectable.", A),
		I = (0, n.createNode)("event_a5", "This is higly unusual.", E),
		N = (0, n.createNode)("event_a4", "Such patterns can be induced by ordinary matter, but the sector appears empty.", I),
		T = (0, n.createNode)("event_a3", "The dark matter in this sector seems to follow geometric patterns.", N),
		j = (0, n.createNode)("event_a2", "'Running DM Scanner 7.42...WARNING: major formula mismatch in Sector 7G'", T),
		D = (0, n.createNode)("event_a1", "You're testing a new formula for dark matter concentration in space.", j),
		O = [D, j, T, N, I, E, A, S, P, x, C, L, w, k, b, g, m, p, v, f, d, c, l, h],
		R = t.anomalyEvent = (0, n.createEvent)("event_anomaly", "Anomaly", O);
	(0, i.createLevelLock)(s.dmScanner, R, 10), (0, i.createLevelLock)(s.dmScanner, D, 10), (0, i.createLevelLock)(s.dmScanner, j, 15), (0, i.createLevelLock)(s.dmScanner, T, 45), (0, i.createLevelLock)(s.anomaly, I, 5), (0, i.createLevelLock)(s.anomaly, E, 95), (0, i.createLevelLock)(s.mirrorMatter, A, 110), (0, i.createLevelLock)(s.demirrorAnomaly, S, 190), (0, i.createLevelLock)(s.studyMirroredShip, P, 240), (0, i.createLevelLock)(s.constructPowerPlant, w, 1), (0, i.createLevelLock)(s.constructMirrorCannon, k, 1), (0, i.createLevelLock)(s.constructMirrorCannon, b, 500), (0, i.createLevelLock)(s.alienCommunication, f, 1100)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.dp = void 0;
	var n = a(58),
		i = a(9),
		r = a(18),
		o = a(41),
		s = a(39),
		u = a(111),
		l = a(59),
		c = (0, n.createNode)("event_dp_success2", "Success! They reply with a job offer.", null, function () {
			return s.unlockedDarkPlateau.setValue(o.currentLife.getValue())
		}),
		d = (0, n.createNode)("event_dp_failure", "...but you are just not good enough at quantum physics (Level 50 required at age 28).", null),
		f = (0, n.createNode)("event_dp_success", "Looks right, send it.", c),
		v = function () {
			return u.qm.xp.state.level >= 50 ? 0 : 1
		},
		h = (0, n.createAutoChoiceNode)("event_dp4", "You try...", v, [f, d]),
		p = (0, n.createNode)("event_dp3", "Looks like you are supposed to solve them.", h),
		m = (0, n.createNode)("event_dp2", "It contains some complicated quantum physics equations.", p),
		y = (0, n.createNode)("event_dp1", "An email from a company called Dark Plateau.", m),
		g = [y, m, p, h, f, d, c],
		_ = t.dp = (0, n.createEvent)("event_dp", "Dark Plateau?", g);
	(0, i.createMinimumValueLock)(r.currentYear, _, 10), (0, i.createMinimumValueLock)(r.currentYear, h, 10), (0, i.createCustomLock)([s.unlockedDarkPlateau], _, function () {
		return s.unlockedDarkPlateau.getValue() === -1 || s.unlockedDarkPlateau.getValue() === o.currentLife.getValue()
	}), (0, i.createCustomLock)([s.unlockedDarkPlateau], l.darkPlateau, function () {
		return s.unlockedDarkPlateau.getValue() > 0
	}), (0, i.createCustomLock)([s.unlockedDarkPlateau], l.darkPlateau.jobs[0], function () {
		return s.unlockedDarkPlateau.getValue() > 0
	})
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.events = void 0;
	var n = a(161),
		i = a(160),
		r = a(158),
		o = a(157);
	t.events = [n.groundHogging, o.anomalyEvent, r.dp, i.lostWallet]
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.lostWallet = void 0;
	var n = a(58),
		i = a(9),
		r = a(18),
		o = a(40),
		s = (0, n.createNode)("event_lostwallet_inheritance2", "You inherited $50,000 from Mrs Pennywise!", null, function () {
			return o.money.add(5e4)
		}),
		u = (0, n.createNode)("event_lostwallet_inheritance1", "You find an official looking letter in your mailbox.", s),
		l = (0, n.createNode)("event_lostwallet_kept_it", "You find pictures of her grandchildren, and $10.", null),
		c = (0, n.createNode)("event_lostwallet_gave_back", "She thanks you and hands you some candy.", u),
		d = (0, n.createPath)("event_path_keeplostWallet", "Keep it", l),
		f = (0, n.createPath)("event_path_giveBacklostwallet", "Give it back, of course", c),
		v = (0, n.createUserChoiceNode)("event_lostwallet_choice", "What do you do?", [f, d]),
		h = (0, n.createNode)("event_lostwallet2", "An old lady walking in front of you loses her wallet.", v),
		p = (0, n.createNode)("event_lostwallet1", "You are on your way home.", h),
		m = [p, h, v, c, l, u, s],
		y = t.lostWallet = (0, n.createEvent)("event_lostWallet", "Lost Wallet", m);
	(0, i.createPredicateLock)(r.currentYear, u, function () {
		return c.state.executed && r.currentYear.getValue() > c.state.executedOnDay / 365 + 10
	}), (0, i.createMinimumValueLock)(r.currentYear, y, 1)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.groundHogging = void 0;
	var n = a(58),
		i = a(80),
		r = a(9),
		o = a(18),
		s = a(25),
		u = a(104),
		l = a(105),
		c = a(39),
		d = function () {
			(0, s.selectPane)(s.journalPane), (0, s.selectPane)(s.lifeSummaryPane), c.anomalyAverted.getValue() ? i.prestiger.grandPrestige() : i.prestiger.prestige(), l.pauseOnPrestige.getValue() && u.paused.setValue(!0)
		},
		f = (0, n.createNode)("event_groundhog_prestige", "Here we go!", null, d),
		v = (0, n.createPath)("replyGroundhog", 'Reply "groundhog"', f),
		h = (0, n.createNode)("event_brokengroundhog_prestige", "Here we go!", null, d),
		p = (0, n.createPath)("brokenreplyGroundhog", 'Reply "groundhog"', h),
		m = (0, n.createUserChoiceNode)("brokengroundhoggingRoot", "A message on your phone: 'Congrats! Now do it in one life. Reply \"groundhog\" to start over with more energy.'", [p]),
		y = (0, n.createNode)("event_brokengroundhog2", "All days are of regular length!", m),
		g = (0, n.createNode)("event_brokengroundhog1", "Everything is fine!", y),
		_ = (0, n.createUserChoiceNode)("groundhoggingRoot", "A message on your phone: 'We failed. Reply \"groundhog\" to try again.'", [v]),
		M = (0, n.createNode)("event_groundhog2", "Every day appears to last longer than the day before.", _),
		b = (0, n.createNode)("event_groundhog1", "Something feels wrong...", M),
		k = function () {
			return c.anomalyAverted.getValue() ? 1 : 0
		},
		w = (0, n.createAutoChoiceNode)("event_gh_ano", "...", k, [b, g]),
		L = [w, b, M, _, g, y, m, h, f],
		C = t.groundHogging = (0, n.createEvent)("groundhogging", "Groundhog", L),
		x = function () {
			return o.currentYear.getValue() >= 42 || c.anomalyAverted.getValue()
		};
	(0, r.createCustomLock)([o.currentYear, c.anomalyAverted], C, x)
}, function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.exponentialProgression = function (e, t) {
		for (var a = [1], n = 1; n < e; n++) a.push(a[n - 1] * t);
		return a
	}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.autoPromote = void 0;
	var n = a(16);
	t.autoPromote = new n.BooleanStateEntity("autoPromote", "Auto Promote", !0)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.delta = void 0;
	var n = a(16),
		i = t.delta = new n.NumberStateEntity("schedule_delta", "Delta", 60, !1, 0, 1440);
	i.onLoad = function () {
		i.setValue(60)
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.playerId = void 0;
	var i = a(2),
		r = n(i),
		o = a(5),
		s = n(o),
		u = a(4),
		l = n(u),
		c = a(1),
		d = n(c),
		f = a(79),
		v = a(16),
		h = function e(t) {
			(0, d.
				default)(this, e), this.value = t
		},
		p = function (e) {
			function t() {
				return (0, d.
					default)(this, t), (0, s.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "player_id", "PlayerID", h, (0, f.makeid)(), !1))
			}
			return (0, l.
				default)(t, e), t
		}(v.StateEntity);
	t.playerId = new p
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.business = void 0;
	var n = a(61),
		i = a(108),
		r = a(167);
	t.business = new n.Field("business", "Business", [i.leadership, r.investment])
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.investment = void 0;
	var n = a(21),
		i = a(11),
		r = a(52),
		o = t.investment = new n.Area("area_investment", "Investing", []),
		s = new i.LevelAddModifier("investment_research_level_mod", "Research: Investing", 2, o.xp, .001);
	r.investmentReturnStat.addModifier(s), o.effect = "+0.1% Returns/Year"
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.alg = t.alg3 = t.alg2 = t.alg1 = void 0;
	var n = a(9),
		i = a(42),
		r = a(21),
		o = a(11),
		s = a(76),
		u = t.alg1 = new i.Book("alg1", "Introduction to Algorithms", "Balancing those binary trees in no time.", 500, "0262033844"),
		l = t.alg2 = new i.Book("alg2", "Algorithm Design Manual", "How to implement algorithms well.", 500, "1848000693"),
		c = t.alg3 = new i.Book("alg3", "Concrete Mathematics", "Finetuning your Skills", 2e3, "0201558025");
	(0, n.createCompletedOrReadingListLock)(u, l), (0, n.createCompletedOrReadingListLock)(l, c);
	var d = t.alg = new r.Area("area_alg", "Algorithms", [u, l, c]),
		f = new o.LevelAddMultModifier("alg_research_level_mod", "Research: Algorithms", 2, d.xp, .01);
	s.programming.xp.xpPerHourStat.addModifier(f), d.effect = "+1% Programming Research Speed"
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.compsci = void 0;
	var n = a(61),
		i = a(76),
		r = a(170),
		o = a(168),
		s = a(9);
	t.compsci = new n.Field("compsci", "Computer Science", [i.programming, o.alg, r.se]);
	(0, s.createLevelLock)(i.programming, o.alg, 10), (0, s.createLevelLock)(i.programming, r.se, 20)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.se = t.se5 = t.se4 = t.se3 = t.se2 = t.se1 = void 0;
	var n = a(9),
		i = a(42),
		r = a(21),
		o = a(11),
		s = a(76),
		u = a(49),
		l = t.se1 = new i.Book("se1", "The Pragmatic Programmer", "Tales from the development frontlines.", 150, "020161622X"),
		c = t.se2 = new i.Book("se2", "Clean Code", "Write the shiniest lines.", 200, "0132350882"),
		d = t.se3 = new i.Book("se3", "Code Complete", "If your code is not complete, you", 200, "0735619670"),
		f = t.se4 = new i.Book("se4", "Design Patterns", "Don't reinvent the wheel. You will probably make it square-shaped.", 250, "0201633612"),
		v = t.se5 = new i.Book("se5", "Working with Legacy Code", "Boooring. Or is it?", 250, "0131177052");
	(0, n.createCompletedOrReadingListLock)(l, c), (0, n.createCompletedOrReadingListLock)(c, d), (0, n.createCompletedOrReadingListLock)(d, f), (0, n.createCompletedOrReadingListLock)(f, v);
	var h = t.se = new r.Area("area_se", "Software Engineering", [l, c, d, f, v]),
		p = new o.LevelAddMultModifier("se_research_level_mod", "Research: Software Engineering", 2, h.xp, .01);
	s.programming.xp.xpPerHourStat.addModifier(p), h.effect = "+1% Programming Research Speed", (0, n.createLevelLock)(h, u.softwareEngineer, 5)
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.selfImprovement = void 0;
	var n = a(112),
		i = a(114),
		r = a(113),
		o = a(61);
	t.selfImprovement = new o.Field("selfimprovement", "Self Improvement", [i.studySkills, n.getStuffDone, r.nutrition])
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.JobLevelModifier = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(11),
		y = a(176),
		g = a(14);
	t.JobLevelModifier = function (e) {
		function t(e) {
			(0, s.
				default)(this, t);
			var a = (0, d.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e.id + "jobLevelMod", "Job Level", 10, 1));
			return a.xp = e.xp, a.xp.dependants.push(a), a.update(), a
		}
		return (0, p.
			default)(t, e), (0, l.
				default)(t, [{
					key: "update",
					value: function () {
						this.factor = 1 + Math.log(1 + this.xp.state.level) / Math.log(1 + y.doubleIncomeAtLevelStat.effective), (0, g.assert)((0, g.isNumber)(this.factor)), (0, v.
							default)(t.prototype.__proto__ || (0, r.
								default)(t.prototype), "update", this).call(this)
					}
				}]), t
	}(m.MultModifier)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.standardEnergyModifier = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(11),
		y = a(33),
		g = function (e) {
			function t() {
				(0, s.
					default)(this, t);
				var e = (0, d.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, "seMod", "活力", 0, y.energyStat.effective));
				return y.energyStat.dependants.push(e), e.update(), e
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "update",
						value: function () {
							this.factor = y.energyStat.effective, (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(m.MultModifier);
	t.standardEnergyModifier = new g
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.setupGame = void 0;
	var i = a(12),
		r = n(i),
		o = a(52),
		s = a(11),
		u = a(24),
		l = a(9),
		c = a(50),
		d = a(18),
		f = a(40),
		v = a(62),
		h = a(17),
		p = a(33),
		m = a(39),
		y = a(107),
		g = a(116),
		_ = a(25),
		M = a(109),
		b = function () {
			var e = new g.PaneGroup(!0),
				t = !0,
				a = !1,
				n = void 0;
			try {
				for (var i, o = (0, r.
					default)(y.careers); !(t = (i = o.next()).done); t = !0) {
					var s = i.value,
						u = new g.Pane(s.id + "-pane", s.name, "job-selector", e);
					u.career = s, (0, l.createUnlockedLock)(s, u)
				}
			} catch (e) {
				a = !0, n = e
			} finally {
				try {
					!t && o.
						return && o.
							return()
				} finally {
					if (a) throw n
				}
			}
			_.jobPane.subpanes = e.panes;
			var c = new g.PaneGroup(!0),
				d = !0,
				f = !1,
				v = void 0;
			try {
				for (var h, p = (0, r.
					default)(M.fields); !(d = (h = p.next()).done); d = !0) {
					var m = h.value,
						b = new g.Pane(m.id + "-pane", m.name, "area-selector", c);
					b.field = m, b.state.selected = !0, (0, l.createUnlockedLock)(m, b)
				}
			} catch (e) {
				f = !0, v = e
			} finally {
				try {
					!d && p.
						return && p.
							return()
				} finally {
					if (f) throw v
				}
			}
			_.researchPane.subpanes = c.panes
		},
		k = function () {
			var e = new s.StatEffectiveMultModifier("research_hours_mod", "Hours", 10, u.research.duration, function (e) {
				return e / 60
			}),
				t = !0,
				a = !1,
				n = void 0;
			try {
				for (var i, o = (0, r.
					default)(M.areas); !(t = (i = o.next()).done); t = !0) {
					var l = i.value;
					l.xp.xpPerDayStat.addModifier(e)
				}
			} catch (e) {
				a = !0, n = e
			} finally {
				try {
					!t && o.
						return && o.
							return()
				} finally {
					if (a) throw n
				}
			}
			var c = new s.StatEffectiveMultModifier("work_hours_mod", "Hours", 10, u.work.duration, function (e) {
				return e / 60
			}),
				d = !0,
				f = !1,
				v = void 0;
			try {
				for (var h, p = (0, r.
					default)(y.jobs); !(d = (h = p.next()).done); d = !0) {
					var m = h.value;
					m.xp.xpPerDayStat.addModifier(c)
				}
			} catch (e) {
				f = !0, v = e
			} finally {
				try {
					!d && p.
						return && p.
							return()
				} finally {
					if (f) throw v
				}
			}
		},
		w = function () {
			var e = new s.GenericAddModifier("investment_income_per_day_mod", "Investments", 2, f.money, function (e) {
				return e.getValue() * (Math.pow(1 + o.investmentReturnStat.effective, 1 / 365) - 1)
			});
			o.dailyIncomeStat.addModifier(e), o.investmentReturnStat.subscribe(e)
		},
		L = function () {
			var e = .6,
				t = function (t) {
					var a = Math.floor(d.currentYear.getValue() / 5),
						n = e * (.5 + .25 * (t - a));
					return n = Math.max(n, 0), n = Math.min(n, e)
				},
				a = new s.GenericAddModifier("happinessFromHomeFactorMod", "Home (Max 0.6)", 1, c.currentHomeContainer, function (e) {
					return t(e.home.quality.effective)
				});
			v.happinessStat.addModifier(a), a.explain = function () {
				var e = Math.floor(d.currentYear.getValue() / 5),
					t = c.currentHomeContainer.home.quality.effective,
					a = t - e;
				return a >= 1 ? "不错的家。" : a <= -1 ? "我想要一个更好的家。" : "关于我家的内容。"
			}, d.currentYear.subscribe(a);
			var n = .5,
				i = function (e) {
					var t = e / 60;
					return t >= 9 ? n : t > 4 ? n * (t - 4) / 5 : 0
				},
				r = new s.StatEffectiveAddModifier("happinessFromSleepHoursMod", "Sleep (Max 0.5)", 1, u.sleep.duration, i);
			v.happinessStat.addModifier(r), r.explain = function () {
				return u.sleep.duration.effective >= 540 ? "显然有了足够的睡眠" : u.sleep.duration.effective <= 300 ? "必须……睡觉了。" : "足够的睡眠。"
			};
			var f = new s.MultModifier("sleepDeprivation", "Sleep Deprivation", 10, 0);
			v.happinessStat.addModifier(f);
			var p = function () {
				return u.sleep.duration.effective < 240
			};
			(0, l.createCustomLock)([u.sleep.duration], f, p), f.explain = function () {
				return p() ? "Sleep Deprivation." : ""
			};
			var m = new h.Stat("happinessFromExpenseRatioStat", "Happiness from Expense Ratio", .3, 2),
				y = function (e) {
					return o.dailyExpensesStat.effective > 2e3 ? 1 : e > 1 ? 1 / Math.pow(e, 3) : e > .9 ? 1 : Math.pow(Math.max(0, e) / .9, 2)
				},
				g = new s.StatEffectiveMultModifier("expenseRatioHappinessMod", "Expense Ratio", 10, o.expenseRatioStat, y);
			m.addModifier(g);
			var _ = new s.StatEffectiveAddModifier("happinessFromExpenseRatioMod", "Happiness from Expense Ratio (Max: 0.3)", 1, m);
			v.happinessStat.addModifier(_), _.explain = function () {
				var e = o.expenseRatioStat.effective;
				return o.dailyExpensesStat.effective > 2e3 ? "对我的花销很满意。" : e < .7 ? "买得起更好的东西……" : e > 1.2 ? "花钱花的太多了。" : e <= 1 ? "对我的花销很满意。" : "Spending a little too much maybe."
			};
			var M = new h.Stat("totalWorkingHours", "Working, studying, researching", 0, 2),
				b = new s.StatEffectiveAddModifier("workHoursMod", "Working", 1, u.work.duration),
				k = new s.StatEffectiveAddModifier("researchHoursMod", "Researching", 1, u.research.duration),
				w = new s.StatEffectiveAddModifier("choresHoursMod", "Chores", 1, u.chores.duration);
			M.addModifier(b), M.addModifier(k), M.addModifier(w);
			var L = new s.StatEffectiveAddModifier("happinessFromWorkLifeBalanceMod", "Work-Life Balance (Max: 0.6)", 1, M, function (e) {
				return 216 / Math.max(e, 360)
			});
			v.happinessStat.addModifier(L), L.explain = function () {
				var e = L.factor;
				return e < .2 ? "我感到劳累过度。" : e < .4 ? "感到有点焦虑不安。" : e >= .4 ? "很好地平衡工作与生活。" : ""
			}
		};
	t.setupGame = function () {
		w();
		var e = new s.NumberStateModifier("mod_aacounter_energy", "Times anomaly averted", 10, m.aaCounter, function (e) {
			return e + 1
		});
		p.energyStat.addModifier(e), L(), b(), k()
	}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.dailyWorkIncomeStat = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(3),
		l = n(u),
		c = a(5),
		d = n(c),
		f = a(8),
		v = n(f),
		h = a(4),
		p = n(h),
		m = a(17),
		y = a(48),
		g = a(24),
		_ = function (e) {
			function t() {
				(0, s.
					default)(this, t);
				var e = (0, d.
					default)(this, (t.__proto__ || (0, r.
						default)(t)).call(this, "dailyWorkIncomeStat", "Income/day", 0, 2, "$"));
				return y.currentIncomeContainer.dependants.push(e), g.work.dependants.push(e), e.update(), e
			}
			return (0, p.
				default)(t, e), (0, l.
					default)(t, [{
						key: "update",
						value: function () {
							y.currentIncomeContainer.hasOwnProperty("income") && (this.base = y.currentIncomeContainer.income.effective * g.work.duration.effective / 60), (0, v.
								default)(t.prototype.__proto__ || (0, r.
									default)(t.prototype), "update", this).call(this)
						}
					}]), t
		}(m.Stat);
	t.dailyWorkIncomeStat = new _
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.doubleIncomeAtLevelStat = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(17),
		v = function (e) {
			function t() {
				return (0, s.
					default)(this, t), (0, l.
						default)(this, (t.__proto__ || (0, r.
							default)(t)).call(this, "doubleIncomeAtLevel", "Double Income at Level", 10))
			}
			return (0, d.
				default)(t, e), t
		}(f.Stat);
	t.doubleIncomeAtLevelStat = new v
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.IncomePerWorkHourStat = void 0;
	var i = a(2),
		r = n(i),
		o = a(1),
		s = n(o),
		u = a(5),
		l = n(u),
		c = a(4),
		d = n(c),
		f = a(17),
		v = a(172);
	t.IncomePerWorkHourStat = function (e) {
		function t(e, a) {
			(0, s.
				default)(this, t);
			var n = (0, l.
				default)(this, (t.__proto__ || (0, r.
					default)(t)).call(this, e.id + "incpH", "Income/h", a, 2, "$", ""));
			return n.job = e, n.base = a, n.addModifier(new v.JobLevelModifier(e)), n.update(), n
		}
		return (0, d.
			default)(t, e), t
	}(f.Stat)
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(12),
		r = n(i),
		o = a(150),
		s = n(o),
		u = a(7),
		l = n(u),
		c = a(107),
		d = a(48),
		f = a(109),
		v = a(60),
		h = a(33),
		p = a(52),
		m = a(28),
		y = a(103),
		g = a(81),
		_ = a(62),
		M = a(71),
		b = a(78),
		k = a(118),
		w = a(24),
		L = a(18),
		C = a(41),
		x = a(163),
		P = a(40),
		S = a(77),
		A = a(9),
		E = a(159),
		I = a(117),
		N = a(106),
		T = a(155),
		j = a(51),
		D = a(154),
		O = a(102),
		R = a(25),
		z = a(115),
		V = a(39),
		B = a(104),
		H = a(105),
		F = a(164),
		G = a(174),
		Y = a(79),
		U = a(165),
		W = a(72);
	s.
		default.use(l.
			default);
	var J = !1;
	(0, G.setupGame)(), (0, A.createAnyLock)(f.areas, R.researchPane, function (e) {
		return e.unlocked()
	});
	var X = W.DEVMODE ? 30 :
		300,
		Z = 15330,
		Q = 1.0005,
		$ = 10,
		K = {
			ticksPerDay: 1,
			tickLength: X,
			sessionStart: 0,
			sessionTicks: 0
		},
		q = {
			money: P.money
		},
		ee = {
			currentDay: L.currentDay,
			currentLife: C.currentLife,
			currentLifeThisLoop: C.currentLifeThisLoop,
			currentTick: 0,
			currentTime: 0,
			lastTime: 0,
			lastSave: 0
		},
		te = {
			energy: h.energyStat,
			dailyExpenses: p.dailyExpensesStat,
			dailyIncome: p.dailyIncomeStat,
			dailyNetIncome: p.dailyNetIncomeStat,
			foodCostsPerDay: g.foodCostsPerDayStat,
			expenseRatio: p.expenseRatioStat,
			investmentReturn: p.investmentReturnStat,
			happiness: _.happinessStat
		},
		ae = {
			pauseOnPrestige: H.pauseOnPrestige,
			idleMode: H.idleMode,
			nightMode: H.nightMode,
			xpPerHour: H.xpPerHour
		},
		ne = {
			currency: q,
			readingList: S.readingList,
			autoPromote: x.autoPromote,
			foodCostFactor: M.foodCostFactor,
			homes: b.homes,
			boosts: O.boosts,
			time: ee,
			stats: te,
			careers: c.careers,
			schedule: k.schedule,
			activities: w.activities,
			timeConfig: K,
			fields: f.fields,
			research: w.research,
			work: w.work,
			events: E.events,
			log: j.log,
			panes: R.panes,
			journalPane: R.journalPane,
			lifestylePane: R.lifestylePane,
			happinessPane: R.happinessPane,
			researchPane: R.researchPane,
			boostsPane: R.boostsPane,
			jobPane: R.jobPane,
			daysBehind: 0,
			achievements: D.achievements,
			assistants: y.assistants,
			messageBox: z.messageBox,
			anomalyAverted: V.anomalyAverted,
			paused: B.paused,
			delta: F.delta,
			settings: ae,
			saver: I.saver,
			currentJobContainer: d.currentJobContainer,
			currentResearchContainer: v.currentResearchContainer,
			baseResearchXpPerHourStat: m.baseResearchXpPerHourStat,
			baseWorkXpPerHourStat: m.baseWorkXpPerHourStat,
			playerId: U.playerId
		},
		ie = {
			currency: function (e) {
				return e.currency
			},
			time: function (e) {
				return e.time
			},
			stats: function (e) {
				return e.stats
			},
			happiness: function (e) {
				return e.stats.happiness
			},
			boosts: function (e) {
				return e.boosts
			},
			timeConfig: function (e) {
				return e.timeConfig
			},
			reverseSchedule: function (e) {
				return e.schedule.timetable.slice().reverse()
			},
			schedule: function (e) {
				return e.schedule
			},
			activities: function (e) {
				return e.activities
			},
			careers: function (e) {
				return e.careers
			},
			fields: function (e) {
				return e.fields
			},
			jobs: function (e) {
				return e.jobs
			},
			autoPromote: function (e) {
				return e.autoPromote
			},
			foodCostFactor: function (e) {
				return e.foodCostFactor
			},
			homes: function (e) {
				return e.homes
			},
			readingList: function (e) {
				return e.readingList
			},
			research: function (e) {
				return e.research
			},
			work: function (e) {
				return e.work
			},
			events: function (e) {
				return e.events
			},
			log: function (e) {
				return e.log
			},
			assistants: function (e) {
				return ne.assistants
			},
			panes: function (e) {
				return e.panes
			},
			anomalyAverted: function (e) {
				return e.anomalyAverted
			},
			journalPane: function (e) {
				return e.journalPane
			},
			lifestylePane: function (e) {
				return e.lifestylePane
			},
			happinessPane: function (e) {
				return e.happinessPane
			},
			researchPane: function (e) {
				return e.researchPane
			},
			boostsPane: function (e) {
				return e.boostsPane
			},
			jobPane: function (e) {
				return e.jobPane
			},
			daysBehind: function (e) {
				return e.daysBehind
			},
			achievements: function (e) {
				return e.achievements
			},
			messageBox: function (e) {
				return e.messageBox
			},
			paused: function (e) {
				return e.paused
			},
			delta: function (e) {
				return e.delta
			},
			settings: function (e) {
				return e.settings
			},
			saver: function (e) {
				return e.saver
			},
			currentJobContainer: function (e) {
				return e.currentJobContainer
			},
			currentResearchContainer: function (e) {
				return e.currentResearchContainer
			},
			baseResearchXpPerHourStat: function (e) {
				return e.baseResearchXpPerHourStat
			},
			baseWorkXpPerHourStat: function (e) {
				return e.baseWorkXpPerHourStat
			}
		},
		re = function (e) {
			e.time.currentTick += 1, e.currency.money.add(e.stats.dailyNetIncome.effective), e.time.currentTick = 0, e.time.currentDay.incrementValue();
			var t = !0,
				a = !1,
				n = void 0;
			try {
				for (var i, o = (0, r.
					default)(e.activities); !(t = (i = o.next()).done); t = !0) {
					var s = i.value;
					s.do(e)
				}
			} catch (e) {
				a = !0, n = e
			} finally {
				try {
					!t && o.
						return && o.
							return()
				} finally {
					if (a) throw n
				}
			}
			e.time.lastTime += e.timeConfig.tickLength, 10 === e.time.currentDay.getDayOfYear() && e.time.currentDay.getYear() % 10 === 0 && (0, Y.logPlayerProgression)(C.currentLoop.getValue(), C.currentLifeThisLoop.getValue(), L.currentDay.getYear())
		},
		oe = function (e, t) {
			var a = new Date;
			if (a.getTime() - e.time.lastSave > 15e3 && (I.saver.save(), e.time.lastSave = a.getTime()), e.time.currentDay.getValue() <= Z || e.anomalyAverted.getValue() ? e.timeConfig.tickLength = X : e.timeConfig.tickLength = X * Math.min($, Math.pow(Q, e.time.currentDay.getValue() - Z)), e.daysBehind = Math.ceil((a.getTime() - e.time.lastTime) / e.timeConfig.tickLength), e.paused.getValue()) {
				var n = new Date;
				return void (e.time.lastTime = n.getTime())
			}
			for (; t > 0;) J && (0, T.autoplay)(e), t -= 1, e.time.sessionTicks += 1, re(e)
		},
		se = {
			TICK: function (e, t) {
				oe(e, t)
			},
			INITIALIZE_TIMING: function (e) {
				var t = new Date;
				if (e.time.lastTime = t.getTime(), e.time.sessionStart = e.time.lastTime, d.currentJobContainer.setCurrentJob((0, N.findActiveJob)(e)), I.saver.load(), e.time.lastSave = t.getTime(), (0, Y.loginWithSavegameId)(e.playerId.getValue()), V.aaCounter.getValue() < 1) for (var a in I.saver.registeredObjects) {
					var n = I.saver.registeredObjects[a];
					n.state.highestLevelEver && (n.state.highestLevelThisLoop = n.state.highestLevelEver)
				}
				d.currentJobContainer.setCurrentJob((0, N.findActiveJob)(e))
			},
			CHANGE_ACTIVITY_TIME: function (e, t) {
				var a = t[0],
					n = t[1];
				(0, N.changeActivityTime)(e, a, n)
			},
			SET_ACTIVE_JOB: function (e, t) {
				(0, N.setActiveJob)(t)
			},
			SET_ACTIVE_RESEARCH: function (e, t) {
				(0, N.setActiveResearch)(t)
			},
			ADD_TO_READING_LIST: function (e, t) {
				(0, N.addToReadingList)(t)
			},
			SELECT_HOME: function (e, t) {
				(0, N.selectHome)(t)
			},
			SELECT_PANE: function (e, t) {
				(0, R.selectPane)(t)
			},
			ACTIVATE_BOOST: function (e, t) {
				t.activate()
			},
			PAUSE_GAME: function (e) {
				e.paused.toggleValue()
			},
			RESET_TIMER: function (e) {
				var t = new Date;
				e.time.lastTime = t.getTime()
			},
			ACKNOWLEDGE_AUSTERITY: function (e) {
				P.money.acknowledgeAusterity()
			},
			ACKNOWLEDGE_MESSAGE: function (e) {
				z.messageBox.messages.pop()
			},
			HARD_RESET: function (e) {
				I.saver.stop(), window.localStorage.clear(), window.location.reload()
			},
			IMPORT_SAVE: function (e, t) {
				e.saver.import(t)
			}
		},
		ue = {
			tick: function (e, t) {
				var a = e.commit;
				a("TICK", t)
			},
			initializeTiming: function (e) {
				var t = e.commit;
				t("INITIALIZE_TIMING")
			},
			changeActivityTime: function (e, t) {
				var a = e.commit;
				a("CHANGE_ACTIVITY_TIME", t)
			},
			setActiveJob: function (e, t) {
				var a = e.commit;
				a("SET_ACTIVE_JOB", t)
			},
			setActiveResearch: function (e, t) {
				var a = e.commit;
				a("SET_ACTIVE_RESEARCH", t)
			},
			addToReadingList: function (e, t) {
				var a = e.commit;
				a("ADD_TO_READING_LIST", t)
			},
			selectPane: function (e, t) {
				var a = e.commit;
				a("SELECT_PANE", t)
			},
			selectHome: function (e, t) {
				var a = e.commit;
				a("SELECT_HOME", t)
			},
			activateBoost: function (e, t) {
				var a = e.commit;
				a("ACTIVATE_BOOST", t)
			},
			pauseGame: function (e) {
				var t = e.commit;
				t("PAUSE_GAME")
			},
			resetTimer: function (e) {
				var t = e.commit;
				t("RESET_TIMER")
			},
			acknowledgeAusterity: function (e) {
				var t = e.commit;
				t("ACKNOWLEDGE_AUSTERITY")
			},
			acknowledgeMessage: function (e) {
				var t = e.commit;
				t("ACKNOWLEDGE_MESSAGE")
			},
			hardReset: function (e) {
				var t = e.commit;
				t("HARD_RESET")
			},
			importSave: function (e, t) {
				var a = e.commit;
				a("IMPORT_SAVE", t)
			}
		};
	t.
		default = new l.
			default.Store({
				state: ne,
				getters: ie,
				mutations: se,
				actions: ue
			})
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(337),
		s = n(o),
		u = a(334),
		l = n(u),
		c = a(327),
		d = n(c),
		f = a(335),
		v = n(f),
		h = a(357),
		p = n(h),
		m = a(101),
		y = n(m),
		g = a(332),
		_ = n(g),
		M = a(328),
		b = n(M),
		k = a(333),
		w = n(k),
		L = a(7);
	t.
		default = {
			name: "app",
			components: {
				TimeWarning: s.
					default,
				PrestigeInfo:
				l.
					default,
				ProgressModal:
				v.
					default,
				SidebarDisplay:
				p.
					default,
				NavbarDisplay:
				y.
					default,
				MainPane:
				_.
					default,
				FooterDisplay:
				b.
					default,
				AusterityAlert:
				d.
					default,
				MessageBox:
				w.
					default
			},
			computed: (0, L.mapGetters)(["timeConfig", "time", "panes", "settings"]),
			methods: (0, r.
				default)({
					mainLoop: function () {
						var e = new Date,
							t = e.getTime(),
							a = this.timeConfig.tickLength;
						(!this.settings.idleMode.getValue() || this.time.currentDay.getValue() <= 1) && (this.time.lastTime = Math.max(this.time.lastTime, t - 2 * a));
						var n = t - this.time.lastTime,
							i = window.$("#progress-modal"),
							r = (i.data("bs.modal") || {
								_isTransitioning: !1
							})._isTransitioning;
						if (!r) {
							var o = (i.data("bs.modal") || {
								_isShown: !1
							})._isShown;
							n > Math.max(5e3, 10 * a) && !o && i.modal("show"), n < Math.max(1e3, a) && o && i.modal("hide")
						}
						var s = n / a,
							u = 1;
						s > 200 && (u = 100), a < n && (this.tick(u), n -= a * u), a < n ? setTimeout(this.mainLoop, 2) : setTimeout(this.mainLoop, Math.min(1e3, a / 3))
					}
				}, (0, L.mapActions)(["tick", "initializeTiming"])),
			created: function () {
				this.initializeTiming(), this.mainLoop()
			}
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "achievement-display",
			components: {},
			computed: (0, n.mapGetters)(["achievements"]),
			methods: (0, n.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "austerity-alert",
			components: {},
			computed: (0, n.mapGetters)(["currency"]),
			methods: (0, n.mapActions)(["acknowledgeAusterity"])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "footer-display",
			components: {},
			computed: (0, n.mapGetters)(["research", "panes"]),
			methods: (0, n.mapActions)(["selectPane"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(27),
		o = n(r);
	t.
		default = {
			name: "happiness-explain",
			components: {
				StatDisplay: o.
					default
			},
			computed: (0, i.mapGetters)(["happiness"]),
			methods: {
				getEmoji: function (e) {
					return a(151)("./" + this.happiness.emojiName() + "_emoji.svg")
				}
			}
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(331),
		r = n(i),
		o = a(101),
		s = n(o),
		u = a(326),
		l = n(u),
		c = a(148),
		d = n(c),
		f = a(7);
	t.
		default = {
			name: "journal-display",
			components: {
				LogDisplay: r.
					default,
				AchievementsDisplay:
				l.
					default,
				LifeSummary:
				d.
					default,
				NavbarDisplay:
				s.
					default
			},
			computed: (0, f.mapGetters)(["journalPane"])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "Life-Summary",
			computed: (0, n.mapGetters)(["careers", "fields"])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "log-display",
			components: {},
			computed: (0, n.mapGetters)(["log"]),
			methods: (0, n.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(339),
		o = n(r),
		s = a(336),
		u = n(s),
		l = a(352),
		c = n(l),
		d = a(340),
		f = n(d),
		v = a(347),
		h = n(v),
		p = a(330),
		m = n(p),
		y = a(148),
		g = n(y),
		_ = a(341),
		M = n(_),
		b = a(342),
		k = n(b),
		w = a(343),
		L = n(w),
		C = a(329),
		x = n(C);
	t.
		default = {
			name: "main-pane",
			components: {
				JobDisplay: o.
					default,
				SettingsDisplay:
				u.
					default,
				ResearchDisplay:
				c.
					default,
				EventsDisplay:
				f.
					default,
				JournalDisplay:
				m.
					default,
				LifestyleDisplay:
				h.
					default,
				AboutDisplay:
				M.
					default,
				AmazonDisplay:
				k.
					default,
				LifeSummary:
				g.
					default,
				PrivacyDisplay:
				L.
					default,
				HappinessExplain:
				x.
					default
			},
			computed: (0, i.mapGetters)(["panes"]),
			methods: (0, i.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "message-box",
			components: {},
			computed: (0, n.mapGetters)(["currency", "messageBox"]),
			methods: (0, n.mapActions)(["acknowledgeMessage"])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "navbar-display",
			components: {},
			props: {
				panes: {}
			},
			computed: (0, n.mapGetters)([]),
			methods: (0, n.mapActions)(["selectPane"])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "prestige-info",
			computed: (0, n.mapGetters)(["time"]),
			methods: (0, n.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "progress-modal",
			computed: (0, n.mapGetters)(["daysBehind"]),
			methods: (0, n.mapActions)(["resetTimer"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(7);
	t.
		default = {
			name: "settings-display",
			computed: (0, o.mapGetters)(["settings", "saver"]),
			methods: (0, r.
				default)({
					exportSaveHelper: function () {
						this.$refs.savegamearea.value = this.saver.saveString
					},
					importSaveHelper: function () {
						this.importSave(this.$refs.savegamearea.value)
					},
					toggleNightMode: function () {
						window.document.body.classList.toggle("night-mode")
					}
				}, (0, o.mapActions)(["hardReset", "importSave"]))
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(38);
	t.
		default = {
			name: "stat-display",
			props: {
				stat: {},
				name: {
					default:
					!0, type: Boolean
				},
				color: {
					default:
					"blue"
				},
				exponential: {
					default:
					1e6
				}
			},
			methods: {
				abbreviateNumber: n.abbreviateNumber
			}
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "time-warning",
			computed: (0, n.mapGetters)(["time", "anomalyAverted"]),
			methods: (0, n.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(7),
		s = a(38),
		u = a(27),
		l = n(u);
	t.
		default = {
			name: "job-button",
			components: {
				StatDisplay: l.
					default
			},
			props: ["entity"],
			computed: (0, o.mapGetters)(["time", "settings", "baseWorkXpPerHourStat"]),
			methods: (0, r.
				default)({
					xpPerDay: function (e) {
						return (0, s.abbreviateNumber)(e.xp.xpPerHourStat.effective * this.research.duration.effective / 60, e.xp.xpPerHourStat.digits)
					},
					abbrLevel: function (e) {
						return (0, s.abbreviateNumber)(e, 0)
					}
				}, (0, o.mapActions)(["setActiveJob"]))
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(338),
		o = n(r),
		s = a(27),
		u = n(s);
	t.
		default = {
			name: "job-display",
			components: {
				JobButton: o.
					default,
				StatDisplay:
				u.
					default
			},
			computed: (0, i.mapGetters)(["jobPane", "settings", "baseWorkXpPerHourStat", "time"]),
			methods: (0, i.mapActions)(["selectPane"])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "events-display",
			components: {},
			computed: (0, n.mapGetters)(["events"]),
			methods: (0, n.mapActions)([])
		}
}, function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
		default = {
			name: "about-display"
		}
}, function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
		default = {
			name: "amazon-display"
		}
}, function (e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
		default = {
			name: "privacy-display"
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "boosts-display",
			computed: (0, n.mapGetters)(["boosts"]),
			components: {},
			methods: (0, n.mapActions)(["activateBoost"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(27),
		o = n(r);
	t.
		default = {
			name: "home-button",
			props: ["home"],
			components: {
				StatDisplay: o.
					default
			},
			methods: (0, i.mapActions)(["selectHome"]),
			computed: (0, i.mapGetters)([])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(345),
		r = n(i),
		o = a(7);
	t.
		default = {
			name: "housing-display",
			components: {
				HomeButton: r.
					default
			},
			computed: (0, o.mapGetters)(["homes"]),
			methods: (0, o.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(348),
		o = n(r),
		s = a(346),
		u = n(s),
		l = a(344),
		c = n(l),
		d = a(101),
		f = n(d);
	t.
		default = {
			name: "lifestyle-display",
			components: {
				SpendingDisplay: o.
					default,
				HousingDisplay:
				u.
					default,
				BoostsDisplay:
				c.
					default,
				NavbarDisplay:
				f.
					default
			},
			computed: (0, i.mapGetters)(["lifestylePane"]),
			methods: (0, i.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(149),
		r = n(i),
		o = a(7);
	a(136);
	var s = a(350),
		u = n(s),
		l = a(349),
		c = n(l);
	t.
		default = {
			name: "spending-display",
			components: {
				RangeSlider: r.
					default,
				FoodCostDisplay:
				u.
					default,
				AssistantsDisplay:
				c.
					default
			},
			computed: (0, o.mapGetters)(["stats", "foodCostFactor"]),
			methods: (0, o.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(7);
	t.
		default = {
			name: "assistants-display",
			computed: (0, n.mapGetters)(["assistants"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(149),
		r = n(i),
		o = a(7);
	a(136), t.
		default = {
			name: "food-cost-display",
			components: {
				RangeSlider: r.
					default
			},
			computed: (0, o.mapGetters)(["stats", "foodCostFactor"]),
			methods: (0, o.mapActions)([])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(7),
		s = a(38),
		u = a(27),
		l = n(u);
	t.
		default = {
			name: "area-button",
			components: {
				StatDisplay: l.
					default
			},
			props: ["entity"],
			computed: (0, o.mapGetters)(["time", "research", "settings"]),
			methods: (0, r.
				default)({
					xpPerDay: function (e) {
						return (0, s.abbreviateNumber)(e.xp.xpPerHourStat.effective * this.research.duration.effective / 60, e.xp.xpPerHourStat.digits)
					},
					abbrLevel: function (e) {
						return (0, s.abbreviateNumber)(e, 0)
					}
				}, (0, o.mapActions)(["setActiveResearch"]))
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(351),
		o = n(r),
		s = a(27),
		u = n(s);
	t.
		default = {
			name: "research-display",
			components: {
				AreaButton: o.
					default,
				StatDisplay:
				u.
					default
			},
			computed: (0, i.mapGetters)(["researchPane", "settings", "baseResearchXpPerHourStat", "time"]),
			methods: (0, i.mapActions)(["selectPane"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(7);
	t.
		default = {
			name: "clock-display",
			computed: (0, r.
				default)({
					clockRotation: function () {
						return "rotate(" + 15 * this.time.currentTime + ", 50, 50)"
					}
				}, (0, o.mapGetters)(["time", "reverseSchedule", "currentActivity", "paused"])),
			methods: (0, o.mapActions)(["pauseGame"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(7),
		s = a(27),
		u = n(s),
		l = a(38);
	t.
		default = {
			name: "currency-display",
			components: {
				StatDisplay: u.
					default
			},
			computed: (0, o.mapGetters)(["activities", "currency", "stats"]),
			methods: (0, r.
				default)({
					abbreviateNumber: l.abbreviateNumber
				}, (0, o.mapActions)(["changeActivityTime"]))
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(29),
		r = n(i),
		o = a(7),
		s = a(27),
		u = n(s);
	t.
		default = {
			name: "happiness-display",
			components: {
				StatDisplay: u.
					default
			},
			computed: (0, o.mapGetters)(["happiness", "happinessPane"]),
			methods: (0, r.
				default)({
					getEmoji: function (e) {
						return a(151)("./" + this.happiness.emojiName() + "_emoji.svg")
					}
				}, (0, o.mapActions)(["selectPane"]))
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(7),
		r = a(27),
		o = n(r);
	t.
		default = {
			name: "schedule-controller",
			computed: (0, i.mapGetters)(["activities", "research", "delta"]),
			components: {
				StatDisplay: o.
					default
			},
			methods: (0, i.mapActions)(["changeActivityTime"])
		}
}, function (e, t, a) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = a(12),
		r = n(i),
		o = a(29),
		s = n(o),
		u = a(7),
		l = a(353),
		c = n(l),
		d = a(356),
		f = n(d),
		v = a(354),
		h = n(v),
		p = a(355),
		m = n(p),
		y = a(38);
	t.
		default = {
			name: "sidebar-display",
			components: {
				ClockDisplay: c.
					default,
				ScheduleController:
				f.
					default,
				CurrencyDisplay:
				h.
					default,
				HappinessDisplay:
				m.
					default
			},
			methods: (0, s.
				default)({
					selectBoosts: function () {
						this.selectPane(this.lifestylePane), this.selectPane(this.boostsPane)
					},
					selectJobPane: function () {
						this.selectPane(this.jobPane)
					},
					selectResearchPane: function () {
						this.selectPane(this.researchPane)
					},
					countBoosts: function () {
						var e = 0,
							t = !0,
							a = !1,
							n = void 0;
						try {
							for (var i, o = (0, r.
								default)(this.boosts); !(t = (i = o.next()).done); t = !0) {
								var s = i.value;
								"available" === s.currentState() && s.unlocked() && (e += 1)
							}
						} catch (e) {
							a = !0, n = e
						} finally {
							try {
								!t && o.
									return && o.
										return()
							} finally {
								if (a) throw n
							}
						}
						return e
					},
					abbrLevel: function (e) {
						return (0, y.abbreviateNumber)(e, 0)
					}
				}, (0, u.mapActions)(["selectPane"])),
			computed: (0, u.mapGetters)(["boostsPane", "lifestylePane", "boosts", "currentJobContainer", "currentResearchContainer", "jobPane", "researchPane"])
		}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, function (e, t) { }, , , , , , , , , , , , , , , , , function (e, t) {
	e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDY0IDY0IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIKICAgaWQ9InN2ZzM1NzMiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InNtaWxpbmdfZW1vamkuc3ZnIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGEzNTg5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzU4NyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE4NTUiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NiIKICAgICBpZD0ibmFtZWR2aWV3MzU4NSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTQuMzU5Mzc1IgogICAgIGlua3NjYXBlOmN4PSIzMiIKICAgICBpbmtzY2FwZTpjeT0iMzIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY1IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzM1NzMiIC8+CiAgPGNpcmNsZQogICAgIGN4PSIzMiIKICAgICBjeT0iMzIiCiAgICAgcj0iMzAiCiAgICAgZmlsbD0iI2ZmZGQ2NyIKICAgICBpZD0iY2lyY2xlMzU3NSIgLz4KICA8ZwogICAgIGZpbGw9IiM2NjRlMjciCiAgICAgaWQ9ImczNTc3Ij4KICAgIDxjaXJjbGUKICAgICAgIGN4PSIyMC41IgogICAgICAgY3k9IjI2LjYiCiAgICAgICByPSI1IgogICAgICAgaWQ9ImNpcmNsZTM1NzkiIC8+CiAgICA8Y2lyY2xlCiAgICAgICBjeD0iNDMuNSIKICAgICAgIGN5PSIyNi42IgogICAgICAgcj0iNSIKICAgICAgIGlkPSJjaXJjbGUzNTgxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im00NC42IDQwLjNjLTguMSA1LjctMTcuMSA1LjYtMjUuMiAwLTEtLjctMS44LjUtMS4yIDEuNiAyLjUgNCA3LjQgNy43IDEzLjggNy43czExLjMtMy42IDEzLjgtNy43Yy42LTEuMS0uMi0yLjMtMS4yLTEuNiIKICAgICAgIGlkPSJwYXRoMzU4MyIgLz4KICA8L2c+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojMDBmZjAwIgogICAgIGQ9Ik0gMzAuMjc5ODY5LDYxLjkyNTQxIEMgMjUuMDIxMjU3LDYxLjYyNzQwMSAxOS43NTQ5OTEsNTkuODcxOTI1IDE1LjQyMzY4Miw1Ni45NzMxOTQgMTEuNzg5ODIzLDU0LjU0MTIzMyA4LjY4NDkwNjEsNTEuMzI5MDIzIDYuNDcwOTAyMiw0Ny43MTEwNDMgMy45MDg1OTgxLDQzLjUyMzg5NCAyLjQ3OTgxMDgsMzkuMDg0OTgyIDIuMTA0Mjc1MiwzNC4xNDQ5NCAyLjAwMjA2MzQsMzIuODAwMzc4IDIuMDU4MzY0MSwyOS44NTQxMjIgMi4yMTAwNzI2LDI4LjYwODQ4NyAzLjA1MTExNzcsMjEuNzAyOTEzIDUuOTc2OTQ2NiwxNS42NTI1NDMgMTAuODE0NzQ0LDEwLjgxNDc0NCAxNS42NTAyNDMsNS45NzkyNDYgMjEuNzAzMTMzLDMuMDUyNjU1MSAyOC42MDg0ODcsMi4yMTE0MTU0IDI5Ljg1ODExLDIuMDU5MTgxIDMyLjgwMjI2MSwyLjAwMjIwNjUgMzQuMTQ0OTQsMi4xMDQyNzUyIGMgNi40MjI4NzYsMC40ODgyNTg4IDEyLjE3NDg5MiwyLjgxNzM2NzEgMTcuMTMxNjY1LDYuOTM2OTYwOSAwLjk0MDU3OSwwLjc4MTcxODYgMi42MTA0MjMsMi40MzM5MzE5IDMuNDMwNTE5LDMuMzk0Mjk4OSAyLjYwNjQ0MSwzLjA1MjI0OSA0LjQ2MTY3NSw2LjMxMTAzOCA1LjY5ODU1NywxMC4wMDk3MzIgMS40NjA2Miw0LjM2Nzc0MSAxLjg5ODg2NCw4Ljg1NDYwNiAxLjMxMjc4NywxMy40NDA2OTYgLTEuMjUzNjQ1LDkuODA5ODczIC03LjQwMDUzOCwxOC40NTc3OTkgLTE2LjI4MjI0MSwyMi45MDcxMjIgLTMuNzY2MzI5LDEuODg2NzU3IC03LjU4MjAyOCwyLjg5MDU5MSAtMTEuOTE4MDU1LDMuMTM1NCAtMS40MTAyNzcsMC4wNzk2MiAtMS43ODUyOTEsMC4wNzkyNyAtMy4yMzgzMDMsLTAuMDAzMSBsIDAsM2UtNiB6IE0gMzMuNzgyMDcsNDkuNTMxODQ2IGMgNC42OTQ1MjYsLTAuNTA5Mzc5IDguOTk4ODIzLC0zLjEwODM3NyAxMS42NjgxMDUsLTcuMDQ1MzcxIDAuNzEwMDI0LC0xLjA0NzIzMyAwLjc3MzA5MiwtMS43MTg0NjcgMC4yMDgwNzYsLTIuMjE0NTU3IC0wLjM4MjU2NywtMC4zMzU4OTkgLTAuNjUxNywtMC4yNzkyNDQgLTEuNTU5NTM2LDAuMzI4MjkxIC0zLjE1Nzg5OSwyLjExMzMwNiAtNi41NTEzNzIsMy40MTA3OTkgLTkuOTE4OTU0LDMuNzkyNTA5IC0wLjk5NDQxOCwwLjExMjcxNSAtMy4yNzI1NTQsMC4xMTM2NjEgLTQuMjQ4MDk2LDAuMDAxOCAtMy40MTA2NzUsLTAuMzkxMjE1IC02LjcwNDMxNywtMS42Mzc1MDMgLTEwLjAwOTA3MiwtMy43ODczNTMgLTEuMDIxNzk4LC0wLjY2NDcxMyAtMS4zOTcyMDgsLTAuNjkyNDAyIC0xLjc3NTU2MiwtMC4xMzA5NjIgLTAuMTE4Nzk0LDAuMTc2Mjc3IC0wLjE1ODc4MywwLjMzNDgxNCAtMC4xNTg3ODMsMC42Mjk0OSAwLDAuNDc1NzY4IDAuMTYxODI4LDAuODIzODMgMC43ODM3MTQsMS42ODU2MjcgMi41MDQ5MzQsMy40NzEyODYgNi40MDExOTgsNS45MTkzNjIgMTAuNDk4MTE0LDYuNTk2MTA4IDAuNDc4NzgxLDAuMDc5MDkgMC45OTU4NjUsMC4xNTUxODUgMS4xNDkwNzUsMC4xNjkxMDcgMC42NDQ2NiwwLjA1ODU3IDIuNzM3MjUsMC4wNDMyNCAzLjM2MjkxOSwtMC4wMjQ2NSBsIDAsMWUtNiB6IE0gMjEuMjYxMzcxLDMxLjU2MzY5OSBjIDEuMTI0MTkzLC0wLjE4MTU4MiAxLjkzMDU0NywtMC42MDM0MTMgMi43ODY5MjMsLTEuNDU3OTMyIDAuOTU5MTU3LC0wLjk1NzA3NyAxLjM3ODUwOCwtMS45MDk1ODYgMS40NDE3OTcsLTMuMjc0ODgxIDAuMDMxMTQsLTAuNjcxNzczIDAuMDEzMSwtMC44OTg4NDkgLTAuMTEwNjQyLC0xLjM5MjgxOCAtMC41NzUwMTQsLTIuMjk1Mzk1IC0yLjUxMzE3MywtMy44Mjk5MyAtNC44NDkzMDgsLTMuODM5NDMzIC0yLjIzMjM1MSwtMC4wMDkxIC00LjA2NTA5NiwxLjMwNzE3IC00LjgxNTE0MywzLjQ1ODE2NiAtMC4xNzcyNjgsMC41MDgzNzMgLTAuMTk0MTMyLDAuNjQyNDQ2IC0wLjE5MjcwMywxLjUzMjEgMC4wMDE0LDAuODY4MjIyIDAuMDIxOTEsMS4wMzU5NzMgMC4xODczNjQsMS41MzIxIDAuMjYyNDM5LDAuNzg2OTQxIDAuNjMwMDU4LDEuMzc5OTUyIDEuMjMzOTc0LDEuOTkwNTMyIDEuMTczNzkxLDEuMTg2NzQ3IDIuNzI2OTUyLDEuNzA5MTE0IDQuMzE3NzM4LDEuNDUyMTY2IHogbSAyMy4xNDY3MTUsLTAuMDI2NDEgYyAxLjk3OTAzMywtMC4zNzg2NTIgMy40NDc2NTYsLTEuNzY5NzY0IDMuOTc4NzcsLTMuNzY4Nzc2IDAuMTY2NTkyLC0wLjYyNzAyMiAwLjE1MTQyLC0xLjc2OTE5OCAtMC4wMzI0LC0yLjQzOTIzMyAtMC42MTI4NTgsLTIuMjMzODg0IC0yLjU1NDU3LC0zLjczMTMxMiAtNC44MzgzODksLTMuNzMxMzEyIC0wLjgzOTc2MiwwIC0xLjQ2NTE3LDAuMTM0OTMzIC0yLjE2NzU0MSwwLjQ2NzY1MSAtMS4wMDY2NjEsMC40NzY4NjMgLTEuODQyNDA0LDEuMjk5MTI2IC0yLjMzMjM5MywyLjI5NDc3MiAtMC4zOTI4OTUsMC43OTgzNTEgLTAuNTEzOTEsMS4zMjE2MDUgLTAuNTE1Mzk2LDIuMjI4NTA5IC0wLjAwMTYsMC45NDgwNzEgMC4wODk4NywxLjMzNzExNSAwLjUyODc5OCwyLjI1MDI4IDAuMjk0NDE3LDAuNjEyNTE1IDAuNDI5MjQ0LDAuODAyMTgyIDAuOTE2Mzc5LDEuMjg5MTA2IDEuMjA0OTk2LDEuMjA0NDc4IDIuODM3Mjc4LDEuNzE5ODk3IDQuNDYyMTczLDEuNDA5MDAzIHoiCiAgICAgaWQ9InBhdGgzNTkxIgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+Cjwvc3ZnPgo="
}, function (e, t) {
	e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjMwIiBmaWxsPSIjZmZkZDY3Ii8+PGcgZmlsbD0iIzY2NGUyNyI+PGNpcmNsZSBjeD0iMjAuNSIgY3k9IjI3LjYiIHI9IjUiLz48Y2lyY2xlIGN4PSI0My41IiBjeT0iMjcuNiIgcj0iNSIvPjxwYXRoIGQ9Im0zOC45IDQ4aC0xMy44Yy0xLjUgMC0xLjUtNCAwLTRoMTMuN2MxLjYgMCAxLjYgNCAuMSA0Ii8+PC9nPjwvc3ZnPg=="
}, function (e, t, a) {
	e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDY0IDY0IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIKICAgaWQ9InN2ZzMzODAiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InNhZF9lbW9qaS5zdmciPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTMzOTYiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzk0IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTg1NSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDU2IgogICAgIGlkPSJuYW1lZHZpZXczMzkyIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIxNC4zNTkzNzUiCiAgICAgaW5rc2NhcGU6Y3g9IjMyIgogICAgIGlua3NjYXBlOmN5PSIzMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjUiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI0IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMzM4MCIgLz4KICA8Y2lyY2xlCiAgICAgY3g9IjMyIgogICAgIGN5PSIzMiIKICAgICByPSIzMCIKICAgICBmaWxsPSIjZmZkZDY3IgogICAgIGlkPSJjaXJjbGUzMzgyIiAvPgogIDxnCiAgICAgZmlsbD0iIzY2NGUyNyIKICAgICBpZD0iZzMzODQiPgogICAgPGNpcmNsZQogICAgICAgY3g9IjIwLjUiCiAgICAgICBjeT0iMjYuNiIKICAgICAgIHI9IjUiCiAgICAgICBpZD0iY2lyY2xlMzM4NiIgLz4KICAgIDxjaXJjbGUKICAgICAgIGN4PSI0My41IgogICAgICAgY3k9IjI2LjYiCiAgICAgICByPSI1IgogICAgICAgaWQ9ImNpcmNsZTMzODgiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibTIzIDQ3LjZjNS44LTQuOCAxMi4yLTQuOCAxOCAwIC43LjYgMS4zLS40LjgtMS4zLTEuOC0zLjQtNS4zLTYuNS05LjgtNi41cy04LjEgMy4xLTkuOCA2LjVjLS41LjkuMSAxLjkuOCAxLjMiCiAgICAgICBpZD0icGF0aDMzOTAiIC8+CiAgPC9nPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmZDVkNSIKICAgICBkPSJNIDMwLjgxNjEwNCw2MS45NTQzIEMgMjcuOTg4NjQyLDYxLjgyODMyMiAyNS4xNzExNTEsNjEuMzE2ODM1IDIyLjU3MDc5Niw2MC40NTc0NDkgMTkuODc0OTE3LDU5LjU2NjQ5MyAxNy4wMTg0MjcsNTguMTI1MDggMTQuNzI5MDUzLDU2LjUwMDQyNyAxMi4yNjUyOTcsNTQuNzUyMDI0IDkuODQzMDM2Myw1Mi40MDI2NzIgOC4wNTA2ODAyLDUwLjAyMzA2OSA0Ljg1Mjc1NzcsNDUuNzc3MzggMi44OTA3NTU1LDQwLjg4MzI4NyAyLjIxNTcxODYsMzUuNDY4MTE4IDIuMDM4NTIzMSwzNC4wNDY2NSAyLjAzODE3ODUsMjkuODY3MDM1IDIuMjE1MTQ3MywyOC41Mzg4NDcgMi42MDQxNTk2LDI1LjYxOTIyNiAzLjE1MTM4MiwyMy40NTAzNiA0LjEyMTU5NjIsMjAuOTgyODA3IDYuNDgxNjE4NCwxNC45ODA1NDcgMTAuOTIzMjg2LDkuNzE5Nzg2NiAxNi40NzAxMjYsNi4zNTcwNzM4IDE5LjYzOTgwNSw0LjQzNTQ4ODcgMjMuMjc1NzM3LDMuMDgzNjYxMyAyNi45NTEwMzQsMi40NjAzMDcxIDI4Ljg5NDU3NiwyLjEzMDY2OTYgMjkuNjI4MTg5LDIuMDc1MjMyMiAzMi4wMzQ4MiwyLjA3NjEzNzcgYyAyLjkwNTQwMSwwLjAwMTA5IDQuNTk0NzUsMC4xOTczODE0IDcuMTczMDE1LDAuODMzNDQ0OSAxMS4zMDI3NTYsMi43ODg0MTQ0IDIwLjAwMTk0MywxMS45MzYxNjg0IDIyLjIxMjY0NSwyMy4zNTgwMjY0IDAuNDE5MTY5LDIuMTY1Njg0IDAuNDg3Mzg4LDIuOTY3MzI0IDAuNDg2NjM2LDUuNzE4NDYzIC02LjI2ZS00LDIuMjM1OTAyIC0wLjAxOTU1LDIuNjg0NDEgLTAuMTU3MzM4LDMuNzI1Nzg5IC0wLjc1MzU5OCw1LjY5NTU5NiAtMi44NjMwMDgsMTAuNjUwNDA4IC02LjQ0ODQ3OSwxNS4xNDY4OTkgLTAuOTE0MTc2LDEuMTQ2NDU1IC0zLjMxNzkwOSwzLjU0NDA3MSAtNC40ODIwOTIsNC40NzA2ODYgLTIuOTU3ODUyLDIuMzU0MjYgLTYuMDIxNzM3LDQuMDE3ODM1IC05LjUyNzI0LDUuMTcyOTM1IC0zLjI1NTM4LDEuMDcyNjgzIC03LjA4MjUxNywxLjYwMzExMSAtMTAuNDc1ODYzLDEuNDUxOTE5IHogTSAyMy42ODE4ODksNDcuMTEzNTE3IGMgMi4wMTE4MzcsLTEuNTEwMDAxIDMuODk1MjAyLC0yLjQwMjY2MyA2LjAxNTg5NywtMi44NTEzNjYgMC43ODM4MDgsLTAuMTY1ODQgMS4wMjI3NDEsLTAuMTg1MDQ1IDIuMzAyMjE0LC0wLjE4NTA0NSAxLjI3OTQ3MywwIDEuNTE4NDA2LDAuMDE5MiAyLjMwMjIxNCwwLjE4NTA0NSAyLjE0MTkyLDAuNDUzMTk0IDQuMDU0NDAxLDEuMzY1MDk2IDYuMDg2ODk3LDIuOTAyMzMyIDAuODY2ODQzLDAuNjU1NjE5IDEuMDUxMzEyLDAuNzI3NDU4IDEuMzQzMTI0LDAuNTIzMDY1IDAuMTkwMDIxLC0wLjEzMzA5NiAwLjMxOTc3NywtMC41OTIzNCAwLjI2MjIwOSwtMC45MjgwMzUgLTAuMDkwNjEsLTAuNTI4MzQyIC0xLjE0OTAzMiwtMi4xNTk0ODQgLTIuMDY5NjQ2LC0zLjE4OTUzNSAtMS42ODgwMDQsLTEuODg4NjYxIC0zLjczNzU4LC0zLjExNTk0IC02LjA0NDQ5MywtMy42MTk0MjQgLTAuNDYzODc3LC0wLjEwMTI0IC0wLjg3ODIyNCwtMC4xMjg2NDEgLTEuOTE1MTI1LC0wLjEyNjY0NyAtMS4xODI1MTUsMC4wMDIzIC0xLjQwNjI4LDAuMDIyMTUgLTIuMTA0ODk2LDAuMTg2OTYgLTMuMTA2MDc4LDAuNzMyNzU5IC01Ljg2NjMzNywyLjkyMzc5MyAtNy41MjQ4MSw1Ljk3MzAyOSAtMC4xNTYyNDUsMC4yODcyNjggLTAuMzA0NTYyLDAuNjM0ODM2IC0wLjMyOTU5NCwwLjc3MjM3MSAtMC4wNjAxNSwwLjMzMDQ4NSAwLjA3MTI1LDAuNzk3NzU3IDAuMjYxODg1LDAuOTMxMjgxIDAuMjkzMzI1LDAuMjA1NDUzIDAuNDcyNDc5LDAuMTMyNzMgMS40MTQxMjQsLTAuNTc0MDMxIHogbSAtMS45MTEzMiwtMTUuNjQ4MzYxIGMgMS42NDg1NjksLTAuNDQzNjM1IDIuOTgwMzQ3LC0xLjcwNzY1MSAzLjUyMzQzLC0zLjM0NDE1NSAwLjE2MTA0LC0wLjQ4NTI2OSAwLjE4NTI2OSwtMC42NzM4OTYgMC4xODc4NTIsLTEuNDYyNDU5IDAuMDAzNCwtMS4wMjkwOTQgLTAuMDk5MjEsLTEuNTExMDc0IC0wLjQ4NTY4NCwtMi4yODIwNTggLTAuNTExMjk1LC0xLjAxOTk4MSAtMS4yODg4NjQsLTEuNzkzNjQ0IC0yLjI5MzIyOSwtMi4yODE3MSAtMC43Mzg5MjQsLTAuMzU5MDc2IC0xLjM3MDI1MiwtMC40OTk2MyAtMi4yMjg1MDksLTAuNDk2MTM5IC0yLjIwNjAyNywwLjAwOSAtNC4wNDY3MDQsMS4zNTcxMzQgLTQuNzY5NzA2LDMuNDkzNDU3IC0wLjIxODQ2OCwwLjY0NTUyOCAtMC4yNjk5MzksMS44ODA0NzcgLTAuMTA4NjAxLDIuNjA1NjU5IDAuMzY1ODExLDEuNjQ0MjUgMS42OTg4MzgsMy4xMjQ0NiAzLjI5MzEwOSwzLjY1NjcwOSAwLjIzODkxNCwwLjA3OTc2IDAuNTk5MzA2LDAuMTc0NjM0IDAuODAwODcsMC4yMTA4MjcgMC40NzkzMjUsMC4wODYwNyAxLjU4NjU3NCwwLjAzMjc4IDIuMDgwNDY4LC0wLjEwMDEzMSB6IG0gMjMuMDA4NTM5LC0wLjAwNDYgYyAwLjIyOTgxNSwtMC4wNjAzNSAwLjY4NDIyMiwtMC4yMzk4NDIgMS4wMDk3OTMsLTAuMzk4ODc3IDAuNDc3NzA5LC0wLjIzMzM1MiAwLjcxNDMzNiwtMC40MTA2MTggMS4yMjYxMjMsLTAuOTE4NTMyIDAuNTI3ODYzLC0wLjUyMzg2OCAwLjY4NzQyOSwtMC43MzY2MzYgMC45NTE4NDcsLTEuMjY5MjE1IDAuNDM5NjUyLC0wLjg4NTUyOCAwLjU2NjE3NywtMS41MDAyNzYgMC41MTg4OTIsLTIuNTIxMTU0IC0wLjA1MTYzLC0xLjExNDU5OCAtMC4yODM3NjMsLTEuNzg5OTMyIC0wLjkyNzY2NSwtMi42OTg3NDcgLTAuOTEzNzczLC0xLjI4OTcxOCAtMi40MDMwMjgsLTIuMDQ4ODE1IC00LjAzMjUyNywtMi4wNTU0NDMgLTAuODU4MjU3LC0wLjAwMzUgLTEuNDg5NTg1LDAuMTM3MDYzIC0yLjIyODUwOSwwLjQ5NjEzOSAtMS4wMDMyNiwwLjQ4NzUyOSAtMS44MTIyNzUsMS4yOTM5NyAtMi4zMDY2MSwyLjI5OTI3MiAtMC4zNzQ1ODUsMC43NjE3NzMgLTAuNDc1NjM5LDEuMjQ2Mjg5IC0wLjQ3MjMwMywyLjI2NDQ5NiAwLjAwMjYsMC43ODg1NjMgMC4wMjY4MSwwLjk3NzE5IDAuMTg3ODUyLDEuNDYyNDU5IDAuMjU5MjY4LDAuNzgxMjY4IDAuNjI2MDE0LDEuMzczMDE2IDEuMjMzMDYzLDEuOTg5NTU5IDAuNzcwMDc3LDAuNzgyMTIgMS42Nzc3MTksMS4yNjUzMjMgMi43MzI1MzksMS40NTQ3MjcgMC40ODQ4MDIsMC4wODcwNSAxLjU4NTU0NywwLjAzMjM3IDIuMTA3NTA1LC0wLjEwNDY4NCB6IgogICAgIGlkPSJwYXRoMzM5OCIKICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmZDVkNSIKICAgICBkPSJtIDE5LjQ1MDcwNywzMS40NTg5MDMgYyAtMC4yNjgxMTcsLTAuMDU4OTQgLTAuNzg0MjA0LC0wLjI1MDUwOCAtMS4xNDY4NTksLTAuNDI1NzA5IC0wLjU2MTU2NCwtMC4yNzEyOTUgLTAuNzUzNTIzLC0wLjQxMjc3NCAtMS4yOTQwODksLTAuOTUzNzgxIC0wLjUxNTcxOCwtMC41MTYxNCAtMC42ODkwMDIsLTAuNzQ2MjE0IC0wLjkyNDI2NiwtMS4yMjcxODIgLTAuNjM0ODkyLC0xLjI5Nzk1NyAtMC43MjA5MzksLTIuNTkwMjc0IC0wLjI2MDYwNiwtMy45MTM5NjEgMC4yNDQyODYsLTAuNzAyNDQ2IDAuNTYxMjk3LC0xLjE5NzEzMyAxLjE1MzU2OCwtMS44MDAxMTIgMS4zNzY2MiwtMS40MDE1MDkgMy4zMjE5MzEsLTEuODYxNTE2IDUuMTYzNjIxLC0xLjIyMTAzOSAwLjczNDk4NCwwLjI1NTYwMiAxLjIxNTM0OSwwLjU2OTkzMSAxLjg3MTM5NywxLjIyNDU1NyAwLjk5MjY1MywwLjk5MDUgMS40MTYzNDQsMi4wMDY3NDggMS40MjI2OSwzLjQxMjQwNSAwLjAwNDMsMC45NTg3MzkgLTAuMDg0NjYsMS4zNjA4MDIgLTAuNDg1NTQ1LDIuMTkzNjg4IC0wLjYyODY5NywxLjMwNjIwNCAtMS43NzAwNiwyLjI2ODQ3OSAtMy4xMzY3ODUsMi42NDQ2MDEgLTAuNjAwMTU1LDAuMTY1MTY0IC0xLjc2NTIzNSwwLjE5Nzk2NiAtMi4zNjMxMjYsMC4wNjY1MyB6IgogICAgIGlkPSJwYXRoMzQwMCIKICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmZDVkNSIKICAgICBkPSJtIDQyLjUwMTg1LDMxLjQ2OTg0MyBjIC0xLjcyODMzOCwtMC40MDEwOTggLTMuMDYwNDkxLC0xLjU1ODczNiAtMy42NzE1MTYsLTMuMTkwNTM4IC0wLjE5MDI0LC0wLjUwODA1NCAtMC4yMTk0NTIsLTAuNjgzNzEyIC0wLjI0NzE2NCwtMS40ODYyMzQgLTAuMDI2ODEsLTAuNzc2NTkxIC0wLjAwOTgsLTAuOTg5MDU4IDAuMTE2MjgsLTEuNDQ4NDc0IDAuMzkwOTUyLC0xLjQyNTAzMiAxLjMzNzM2OSwtMi41NzcyNjkgMi42MTg1MDQsLTMuMTg3OTU3IDAuODA1Njg4LC0wLjM4NDA1MiAxLjMzMzU3NywtMC41MDUxMjggMi4xOTM2ODksLTAuNTAzMTQgMi4xNzY1OTUsMC4wMDUgNC4wMzEyMTYsMS4zNDk3OTcgNC43MDc1NzIsMy40MTM0MDkgMC4xODM2LDAuNTYwMTc2IDAuMjAxODQsMC43MDI3NzUgMC4xOTkxMzUsMS41NTY4MTIgLTAuMDAyNiwwLjgzMDE0MiAtMC4wMjQ4MywxLjAwNTM0NCAtMC4xODk3MywxLjQ5NzI4IC0wLjI1NjgzMiwwLjc2NjE4NSAtMC42MjQ1MzksMS4zNjM0NjcgLTEuMjAwMTExLDEuOTQ5Mzg0IC0wLjkyNTE2MywwLjk0MTc5MyAtMi4wMTQ4MTMsMS40MjEwNTEgLTMuMzM5MzMyLDEuNDY4NzI5IC0wLjUwNTEzMSwwLjAxODE4IC0wLjkxMzAzLC0wLjAwNTYgLTEuMTg3MzI3LC0wLjA2OTI3IHoiCiAgICAgaWQ9InBhdGgzNDAyIgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZjlmOWY5IgogICAgIGQ9Im0gMjIuMjAwNzYsNDcuNDk4NTg1IGMgLTAuMjE0OTgyLC0wLjM1MjU5NiAtMC4xODA5NDUsLTAuNzUzMzI2IDAuMTEzMTc4LC0xLjMzMjQ3IDEuMTQ1MzM0LC0yLjI1NTIyOSAzLjA5OTQzNiwtNC4xOTIyNzYgNS4zNzk5NjQsLTUuMzMzMDEyIDAuNjYyNzkxLC0wLjMzMTUzMiAxLjk3MDUxNywtMC43NDM0MjQgMi43ODQ0NTcsLTAuODc3MDEzIDAuODc4OTc1LC0wLjE0NDI2MyAyLjY3NDY1NCwtMC4xMDYzODcgMy40OTI0NzksMC4wNzM2NyAyLjc5NjUwNCwwLjYxNTY4MiA1LjM1MTM1LDIuNDY0MTE4IDcuMTIyNjc0LDUuMTUzMjY5IDAuODUwMjI4LDEuMjkwNzgxIDEuMDI3NTQ4LDEuODc2NTU1IDAuNzAxMDI2LDIuMzE1ODM1IC0wLjIxMDE1NiwwLjI4MjcyOSAtMC40ODQxOTIsMC4yODM3IC0wLjg1MTc3OCwwLjAwMyAtMC4xNjUzOTgsLTAuMTI2Mjk1IC0wLjY3MzU4NywtMC40OTY2NDcgLTEuMTI5MzA3LC0wLjgyMzAwNSAtNS4yMjE1ODUsLTMuNzM5MzczIC0xMS4wMTAzODEsLTMuNTgwMTk5IC0xNi4yNDk5MjUsMC40NDY4MiAtMC42OTk1NzEsMC41Mzc2NzggLTAuNzk2NTMyLDAuNTkzNzMyIC0xLjAzMjIzNCwwLjU5Njc1MyAtMC4xNDM4NzQsMC4wMDE4IC0wLjIyNzQxNCwtMC4wNTQ3NCAtMC4zMzA1MzQsLTAuMjIzODY1IHoiCiAgICAgaWQ9InBhdGgzNDA0IgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZjlmOWY5IgogICAgIGQ9Im0gMTkuMzY2OTU0LDMxLjM5MTgxMiBjIC0xLjAyMTY0LC0wLjI3NTIyNiAtMS43Mzk3NTUsLTAuNzA3Nzc1IC0yLjQ3ODEzNCwtMS40OTI2NzYgLTAuODU1NTA0LC0wLjkwOTQwNiAtMS4zMDMxODMsLTIuMDQ2NTYzIC0xLjMwMzE4MywtMy4zMTAyMzUgMCwtMS44OTc0NzYgMS4wNTIzOTQsLTMuNTQ5MjY5IDIuODIwNDU3LC00LjQyNjg2NiAwLjc1Njc5LC0wLjM3NTY0MiAxLjQxMDUyOCwtMC41MDUzMjIgMi4zMzI5NywtMC40NjI3ODYgMS4zMzMzMzcsMC4wNjE0OCAyLjI4ODQwMywwLjUwMDYzMiAzLjI3MzEyMywxLjUwNTAxNCAwLjkyMTc5LDAuOTQwMTk1IDEuMzAyNDMxLDEuNzkyMzU1IDEuMzcxODY2LDMuMDcxMjU0IDAuMDU1OTgsMS4wMzEwMTggLTAuMDU0OTQsMS42MDI3MjkgLTAuNDcxMzExLDIuNDI5NDY5IC0wLjU2MTg1LDEuMTE1NTg4IC0xLjIzMTM2NSwxLjgwMDUxNyAtMi4yNTg1NTMsMi4zMTA1NTIgLTAuMzA2NDIsMC4xNTIxNDkgLTAuNzc2NDk2LDAuMzIyNTMyIC0xLjA0NDYxMywwLjM3ODYzMSAtMC42MTAwMTEsMC4xMjc2MzQgLTEuNzY0NjAxLDAuMTI2NDIgLTIuMjQyNjIyLC0wLjAwMjQgbCAwLDRlLTYgeiIKICAgICBpZD0icGF0aDM0MDYiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiNmOWY5ZjkiCiAgICAgZD0ibSA0Mi4zMjc3NDgsMzEuMzg5NDYyIGMgLTAuMjEwNjY0LC0wLjA1NDk4IC0wLjY4MDY2LC0wLjI0NjE1NyAtMS4wNDQ0MzYsLTAuNDI0ODQ4IC0wLjU0OTY3LC0wLjI3MDAwMiAtMC43NjI5NzIsLTAuNDI2NDUyIC0xLjI2MjU3NCwtMC45MjYwNTQgLTAuNTAzNTAxLC0wLjUwMzUwMSAtMC42NTI5NDMsLTAuNzA4MDkxIC0wLjkxOTg5OCwtMS4yNTkzNjEgLTAuNDEwMzg4LC0wLjg0NzQ2NiAtMC40NjA0OTUsLTEuMDg5MDk3IC0wLjQ2MTQyNywtMi4yMjUxMTggLTcuMDNlLTQsLTAuODU3MzAzIDAuMDE2OTEsLTAuOTkwOTUyIDAuMTk5ODc5LC0xLjUxNjYwMyAwLjUxMDQ4NCwtMS40NjY1NzkgMS41NjAwNzYsLTIuNTI4ODc3IDMuMDQ0NDU3LC0zLjA4MTMxMSAwLjU3ODYwNiwtMC4yMTUzMzcgMC42NzU5NDksLTAuMjMwMzI0IDEuNTIzNDMzLC0wLjIzNDU0OSAxLjAyOTUzOSwtMC4wMDUxIDEuNTAzMTg2LDAuMDk0NzEgMi4yOTgxNSwwLjQ4NDQyMyAxLjI2MDIzLDAuNjE3ODA0IDIuMjM0ODc4LDEuODM1MjQ1IDIuNTgyOTQ5LDMuMjI2Mzg2IDAuMTY1MDUxLDAuNjU5NjYgMC4xMTA2NDcsMi4xMTE0NTEgLTAuMTAyMDU3LDIuNzIzMzk1IC0wLjQxNTA4LDEuMTk0MTc1IC0xLjM1NjgzMywyLjI3MjcyIC0yLjQ1OTg2MiwyLjgxNzE2MyAtMC4zNTYyODksMC4xNzU4NiAtMC44NjcxNjcsMC4zNjU1MTggLTEuMTM1Mjg1LDAuNDIxNDY0IC0wLjYxNDY1OCwwLjEyODI1NCAtMS43NjI0NTYsMC4xMjU3MjQgLTIuMjYzMzI5LC0wLjAwNSB6IgogICAgIGlkPSJwYXRoMzQwOCIKICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIKICAgICBkPSJNIDMwLjAwMTMwNiw2MS44OTAyNTEgQyAyOS44NjcyNDcsNjEuODc0OTUgMjkuMzk3MTcxLDYxLjgyODYzNCAyOC45NTY2OTIsNjEuNzg3MzI3IDIzLjczNTM1NCw2MS4yOTc2ODUgMTguMjU0NjcyLDU5LjE1ODkyMiAxNC4wMzc3NDEsNTUuOTY1NDA0IDguMTE3MDI0Miw1MS40ODE1OTcgNC4xMjIxMDIsNDUuMTczMDg1IDIuNjY3MzI0NywzOC4wMTAwMTEgMi4yOTI4NDA4LDM2LjE2NjExNiAyLjIxODEzODksMzUuNTYwMDcxIDIuMTM2NDUxNSwzMy43MDMxMTggMS45NzA5NzM2LDI5Ljk0MTQwMSAyLjI4MzM4NjIsMjcuMDEyNjc2IDMuMTk0ODg3NCwyMy43ODA3NjcgNS40NTUzNTQ5LDE1Ljc2NTgyOSAxMS4yMDg3ODgsOC44NTQzNTggMTguNjg0NjU3LDUuMTczMjUzNCBjIDIuNjY4Njc2LC0xLjMxNDA1MSA1LjQxOTg1MiwtMi4yMDE2ODY4IDguMzk4NzE3LC0yLjcwOTc1MSAxLjg4NzY1NCwtMC4zMjE5NTEzIDIuNzc3NTUsLTAuMzc1Njk0MSA1LjQ4NzI4MSwtMC4zMzEzODkzIDMuMDQwMjc0LDAuMDQ5NzA5IDQuMDQ0ODgxLDAuMTY5NjM2OCA2LjUxODc5LDAuNzc4MTk3NCAyLjI5MDc0MSwwLjU2MzUwMjkgNC4wMTAzOTgsMS4xODg5NDY3IDYuMTI4NCwyLjIyODkxNjUgMi44NjQ3NzYsMS40MDY2NDYxIDUuMjgwMzUxLDMuMDk5NDQ5OSA3LjUzMTg4NSw1LjI3ODI0OSA0Ljk3ODM1OSw0LjgxNzUzMyA4LjAyNTEzNSwxMC44NTYxMDEgOC45ODUwNjYsMTcuODA3OTg2IDAuMTc5MDY2LDEuMjk2ODA2IDAuMTgxMDEyLDYuMjg5MTMyIDAuMDAyOSw3LjQ4NjM5OSAtMC41NjM2ODMsMy43ODk0NzIgLTEuNDM4MjY3LDYuNjQ5NTE2IC0yLjk3MDc1OSw5LjcxNDkwNyAtMS42MDMzODcsMy4yMDcyMDEgLTMuNTUyODE2LDUuNzk1OTM1IC02LjM4NTMzMyw4LjQ3OTM2OSAtNC41Nzk2MTUsNC4zMzg1NzkgLTEwLjM5NzE3LDcuMDM1MjM4IC0xNi45NDgzMjUsNy44NTYxOTUgLTAuODIzMDA0LDAuMTAzMTM1IC00LjgyMzcyNSwwLjE5NzM0OSAtNS40MzE5OTEsMC4xMjc5MTkgeiBNIDIzLjc3NzQyMSw0Ny4wNTk1MTggYyAxLjg0MDE5NiwtMS4zMDYwNzcgMy4xNjg1MSwtMS45OTEyNyA0LjgzMTA2NiwtMi40OTIwNDIgMS4zNDM2NTgsLTAuNDA0NzE3IDIuMDA1OTkzLC0wLjQ4Mzg4NyAzLjc0MzA4NywtMC40NDc0MiAxLjQ2NDczMywwLjAzMDc1IDEuNTQ2MDE4LDAuMDQwMDMgMi40NTkxODYsMC4yODA4MzcgMi4wMTUwMDUsMC41MzEzNTggMy41MDc1ODEsMS4yNzE3ODEgNS41MjEwMDksMi43Mzg4MTEgMC45NTY3NjYsMC42OTcxMjIgMS4xNzczMjcsMC43NzcwOTggMS40MzQzMjksMC41MjAwOTUgMC4xMjg3OTksLTAuMTI4Nzk5IDAuMjgxODc1LC0wLjU0NzExNCAwLjI4MjY5NywtMC43NzI1MzYgMC4wMDExLC0wLjMwMjI0NCAtMC43NTQyNjgsLTEuNTk1NTQ4IC0xLjUyNDE1MiwtMi42MDk1NyAtMC40NzY1OTQsLTAuNjI3NzI2IC0xLjU3Mjk5NCwtMS43Mzc1NDYgLTIuMjAxMjQ4LC0yLjIyODE5MiAtMS4zMDQ0MDIsLTEuMDE4Njk1IC0yLjgyMjU0LC0xLjc0OTU3NyAtNC4zNjM4NjUsLTIuMTAwOTA5IC0wLjc3MTc5LC0wLjE3NTkyMyAtMy4xNjUyNTIsLTAuMTc0MjIyIC0zLjkyMzQwNCwwLjAwMjggLTIuMTMwNjA2LDAuNDk3NDQ0IC0zLjk3NTI4OCwxLjU0MzUzNSAtNS41Nzk0NzksMy4xNjQwMzYgLTAuOTI4NTU4LDAuOTM3OTk4IC0yLjAyMjg5NiwyLjQ4NTU0OCAtMi4zNjI2ODYsMy4zNDExNzQgLTAuMjQ0MTA2LDAuNjE0Njg0IDAuMDA0MywxLjMzNzk3IDAuNDU5NDczLDEuMzM3OTcgMC4xMjczOTYsMCAwLjUyMzUwNiwtMC4yMzc4NzYgMS4yMjM5ODcsLTAuNzM1MDQyIGwgMCwzZS02IHogTSAyMS44MDQxNTQsMzEuNDY2IGMgMC45MzMzODIsLTAuMjQ2NDExIDIuMDA0NTU2LC0wLjk0NjA4OSAyLjU5MjY0NywtMS42OTM0ODggMC4zNzY5MDksLTAuNDc5MDA5IDAuODE0MjM4LC0xLjMwMjgzOCAwLjk2NjU5MywtMS44MjA4NDMgMC4xMzIzMjYsLTAuNDQ5OTA2IDAuMTUyNzg2LC0xLjk1NzY2NCAwLjAzNDI4LC0yLjUyNTgyNiAtMC4yNzUyMjUsLTEuMzE5NDc0IC0xLjQyMjA2MywtMi43MzAyNjcgLTIuNzMxMzY3LC0zLjM2MDAxOCAtMC43NzU2MjQsLTAuMzczMDU5IC0xLjMyMTQ5OCwtMC40NzUwNjYgLTIuMzQ1MDgzLC0wLjQzODIxOCAtMS4wNzMzNTEsMC4wMzg2NCAtMS43NTc3MDYsMC4yMzkzNzYgLTIuNTE2MTYzLDAuNzM4MDQ4IC0xLjY2NjU5LDEuMDk1NzU1IC0yLjQ4MDA3NCwyLjgyNTk5NCAtMi4yODAyNjgsNC44NTAwMTQgMC4xOTcwNzcsMS45OTYzODIgMS43Nzg3NDEsMy43NjY4OTUgMy44MzM5NCw0LjI5MTcwOSAwLjYwMTgzNiwwLjE1MzY4NSAxLjc4MjIwMywwLjEzMzcxMiAyLjQ0NTQyNiwtMC4wNDEzOCB6IG0gMjIuNDUxMDksMC4wOTY3OSBjIDEuMDYwNDY0LC0wLjE0NjE0NyAyLjAyNzAxNCwtMC42NTE3NjcgMi44NDI5MDYsLTEuNDg3MTc0IDAuNTgzNzI5LC0wLjU5NzY5MSAwLjg4MzE1MSwtMS4wODM5MzMgMS4xNzA5ODcsLTEuOTAxNjA2IDAuMTk3MTk1LC0wLjU2MDE4MyAwLjIxNDg5LC0wLjY4NDI2MiAwLjIxNjEzMiwtMS41MTU0NyAwLjAwMTYsLTEuMDQ0NjQ4IC0wLjEwMzk3NCwtMS41NDQ1NiAtMC40ODUxNDksLTIuMjk4MTUgLTAuNTEyNDU0LC0xLjAxMzEzIC0xLjI3NjEzMywtMS43NjY1NzcgLTIuMjk0Nzg4LC0yLjI2NDA0MSAtMC43NDQzNTgsLTAuMzYzNTEgLTEuMzAwMTI1LC0wLjQ4NDUgLTIuMjMxMjg4LC0wLjQ4NTc0NiAtMC45MzkwOSwtMC4wMDEzIC0xLjM4NTg3NCwwLjEwNDE0OSAtMi4yNjAzNzMsMC41MzMyNzIgLTEuMTcwNTgzLDAuNTc0NDE1IC0yLjA5MDI0NSwxLjY2MjQ3NyAtMi41NTAzODMsMy4wMTczODUgLTAuMTA0ODM5LDAuMzA4NzA2IC0wLjEzMDE2NSwwLjU5MjQ3IC0wLjEzMDUyNSwxLjQ2MjQ1OSAtNC4xN2UtNCwwLjk5NzczNSAwLjAxMzY4LDEuMTE4MDk1IDAuMTg2MTM3LDEuNTkwMjIzIDAuNTkwNTIzLDEuNjE2NjEyIDEuOTk0NTc3LDIuODg1NjExIDMuNjQzNjY4LDMuMjkzMTg3IDAuNTc1MjM4LDAuMTQyMTcxIDEuMTQzNjUyLDAuMTU4ODg3IDEuODkyNjc2LDAuMDU1NjYgeiIKICAgICBpZD0icGF0aDM0MTAiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDAiCiAgICAgZD0ibSAxOS42NTk2MywzMS40MzI0ODggYyAtMS4xNDIyMTUsLTAuMTkwNzYxIC0yLjMzNzU1NiwtMC45MzE5NTEgLTMuMDY2MTc2LC0xLjkwMTIyOSAtMC43MDE0MSwtMC45MzMwODIgLTAuOTcwNzI0LC0xLjc0MTg5NyAtMC45NjgxMzMsLTIuOTA3NTM4IDAuMDAyMSwtMC45MjI1OCAwLjExOTI0LC0xLjQ1MjQ2NyAwLjQ4NTE1NiwtMi4xOTM2ODggMC40NjUyODUsLTAuOTQyNTExIDEuMjU4NjI1LC0xLjcyMzgyNCAyLjI2NDkyMiwtMi4yMzA1ODcgMC43NTQwNDIsLTAuMzc5NzMgMS4xODYyMjIsLTAuNDc4Mjk0IDIuMDg1MTAyLC0wLjQ3NTUzMyAxLjQzMzg4OCwwLjAwNDQgMi4zMjU2NzUsMC4zNTY3MzYgMy4zMzU2NjYsMS4zMTc4NzQgMS4wMDM2ODUsMC45NTUxMzUgMS4zNzQ5OTYsMS42NTY3OTYgMS41NDIzNzksMi45MTQ2MDYgMC4xNDU0NTksMS4wOTMwNTQgLTIuMDllLTQsMS44NzA0NzMgLTAuNTQ5MTg5LDIuOTMwNTEgLTAuNTk2MTk3LDEuMTUxMjYzIC0xLjcwMzEwMiwyLjA2OTU3NSAtMi45MjkyODUsMi40MzAyIC0wLjQ0NjQ1OSwwLjEzMTMwNiAtMS43MDg3NzUsMC4xOTc0OTggLTIuMjAwNDQyLDAuMTE1Mzg1IHoiCiAgICAgaWQ9InBhdGgzNDEyIgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwIgogICAgIGQ9Im0gNDIuNzQ1NTkzLDMxLjQ1NDIyNSBjIC0wLjQwMzAyMywtMC4wNTIgLTAuOTA2NjE5LC0wLjIzNDUxOSAtMS41Mzc5MDUsLTAuNTU3Mzc3IC0xLjIzODc0MiwtMC42MzM1MjcgLTIuMjg0ODEyLC0yLjAxNDg1OCAtMi41MDIzMDEsLTMuMzA0Mjc2IC0wLjEyMTA1NywtMC43MTc3MSAtMC4wNTQ3NCwtMS45OTg1NTEgMC4xMzA0NzksLTIuNTIwMTIzIDAuNTU1MTk0LC0xLjU2MzM5OCAxLjY1OTgxMSwtMi42Mzc1MTEgMy4yNzAzODUsLTMuMTgwMDc0IDAuMzM5OTIxLC0wLjExNDUxMSAwLjYwMTcxOCwtMC4xNDM1MTggMS4yOTUzMDYsLTAuMTQzNTE4IDEuMDkxODg1LDAgMS40NDMyNzEsMC4wNzI0NCAyLjI2ODk1NCwwLjQ2Nzc4MSAwLjU2MzkyNywwLjI3MDAwOCAwLjc0ODk3MSwwLjQwNTM1NSAxLjI1MzUzNywwLjkxNjg3NyAwLjY1NjY2MSwwLjY2NTcxNCAwLjk2NDAxOCwxLjEzNzQyNiAxLjIzNzk4NywxLjg5OTk4NCAwLjE2NTIzMSwwLjQ1OTkwMSAwLjE4MzUwMSwwLjYwNzkyIDAuMTgzMzg1LDEuNDg1NzYxIC0yLjA5ZS00LDEuNjIxODYgLTAuMzEzMjU4LDIuNDA5ODQzIC0xLjM4NTAzLDMuNDg2MzM1IC0wLjY2MjY3MiwwLjY2NTU5IC0xLjE4MDMwNCwwLjk5MDgzNyAtMi4wMzEzNjIsMS4yNzYzNzYgLTAuNDMwMTA4LDAuMTQ0MzA2IC0xLjY1MjU5MywwLjI0MDc0OSAtMi4xODM0MzUsMC4xNzIyNTQgeiIKICAgICBpZD0icGF0aDM0MTQiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDAiCiAgICAgZD0ibSAyMi4yMjY5ODcsNDcuNDc2NjY5IGMgLTAuMjc2NDMsLTAuNDIxODg2IC0wLjA1NzYxLC0xLjEzMTYyMSAwLjcxMzczNCwtMi4zMTUwMiAxLjQ1MjI1NiwtMi4yMjgwNDUgMy42NzQ3MjYsLTQuMDA5ODM1IDUuOTE0NzEsLTQuNzQxOTE5IDEuMzYyNTY1LC0wLjQ0NTMyMiAxLjg2NzU1NSwtMC41MTUyMSAzLjQ0NDAyNSwtMC40NzY2MzggMS4xNjY4OTEsMC4wMjg1NSAxLjQ1MzA2OSwwLjA1ODM0IDIuMDMzNTY5LDAuMjExNjc3IDIuNzgzNDg3LDAuNzM1MjUyIDUuMzMzOTI0LDIuNzM3NDA3IDcuMDI2MjA5LDUuNTE1NzQyIDAuNTUzNDUyLDAuOTA4NjQgMC42NzcxNDksMS40NTY5ODUgMC40MDYzMzIsMS44MDEyNzIgLTAuMjUxMDE3LDAuMzE5MTE3IC0wLjQzMzE2MywwLjI1NDc1NSAtMS41Njk4NTQsLTAuNTU0NzE4IC0xLjEzOTIyMywtMC44MTEyNzYgLTEuNjQyNjI5LC0xLjEyMDI1MyAtMi42MDc4MTQsLTEuNjAwNjA3IC00LjAzMzgzNiwtMi4wMDc1NjMgLTguNDI3MjU2LC0xLjc2NjQ2IC0xMi40MjI2MzQsMC42ODE3MzIgLTAuMzg1MjI2LDAuMjM2MDUgLTEuMDc2NDcyLDAuNzA0OTcyIC0xLjUzNjEwMiwxLjA0MjA1IC0wLjkzNjY2NCwwLjY4NjkxOSAtMS4xODY5OTUsMC43NjQ4MzUgLTEuNDAyMTc1LDAuNDM2NDI5IHoiCiAgICAgaWQ9InBhdGgzNDE2IgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+Cjwvc3ZnPgo="
}, , , , function (e, t, a) {
	a(299);
	var n = a(6)(a(179), a(386), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(296);
	var n = a(6)(a(180), a(382), "data-v-6b0b1256", null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(181), a(365), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(182), a(366), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(183), a(376), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(184), a(367), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(186), a(368), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(187), a(391), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(298);
	var n = a(6)(a(188), a(385), "data-v-718331c8", null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(190), a(392), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(191), a(362), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(192), a(389), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(194), a(390), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(292);
	var n = a(6)(a(195), a(374), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(294);
	var n = a(6)(a(196), a(379), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(287);
	var n = a(6)(a(197), a(363), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(198), a(360), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(199), a(384), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(200), a(380), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(300);
	var n = a(6)(a(201), a(387), "data-v-7d0e3d70", null);
	e.exports = n.exports
}, function (e, t, a) {
	a(295);
	var n = a(6)(a(202), a(381), "data-v-63081663", null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(203), a(369), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(204), a(378), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(205), a(388), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(206), a(358), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(207), a(377), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(301);
	var n = a(6)(a(208), a(393), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(286);
	var n = a(6)(a(209), a(361), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(288);
	var n = a(6)(a(210), a(364), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(291);
	var n = a(6)(a(211), a(373), "data-v-324fb416", null);
	e.exports = n.exports
}, function (e, t, a) {
	var n = a(6)(a(212), a(372), null, null);
	e.exports = n.exports
}, function (e, t, a) {
	a(293);
	var n = a(6)(a(213), a(375), "data-v-4db364fe", null);
	e.exports = n.exports
}, function (e, t, a) {
	a(285);
	var n = a(6)(a(214), a(359), "data-v-0353d931", null);
	e.exports = n.exports
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [e._m(0), e._v(" "), a("table", e._l(e.assistants, function (t) {
				return a("tr", {
					staticStyle: {
						"padding-bottom": "10px"
					}
				}, [a("td", {
					staticStyle: {
						"padding-right": "10px"
					}
				}, [a("button", {
					class: ["btn", t.getValue() ? "btn-success" : "btn-secondary"],
					staticStyle: {
						width: "100%"
					},
					attrs: {
						id: "checkbox_" + t.id,
						role: "button"
					},
					on: {
						click: function (e) {
							t.toggleValue()
						}
					}
				}, [e._v("\n          " + e._s(t.name) + "\n        ")])]), e._v(" "), a("td", {
					staticStyle: {
						"padding-right": "10px"
					}
				}, [e._v("\n        " + e._s(t.description) + "\n      ")]), e._v(" "), a("td", [e._v("\n        $" + e._s(t.cost) + "/day\n      ")])])
			}))])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "row"
			}, [a("h3", [e._v(" Assistants")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "col-auto small-paper",
				staticStyle: {
					"padding-left": "25px",
					"padding-right": "25px",
					"min-width": "10rem"
				}
			}, [a("clock-display", {
				staticClass: "padded"
			}), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("schedule-controller", {
				staticClass: "padded"
			})], 1), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("happiness-display", {
				staticClass: "padded"
			})], 1), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("currency-display")], 1), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("a", {
				attrs: {
					href: "#"
				},
				on: {
					click: e.selectBoosts
				}
			}, [e._v(e._s(e.countBoosts()) + " 项加成可用")])]), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("a", {
				attrs: {
					href: "#"
				},
				on: {
					click: e.selectJobPane
				}
			}, [e._v(e._s(e.currentJobContainer.job.name + ": " + e.abbrLevel(e.currentJobContainer.job.xp.state.level)))])]), e._v(" "), e.currentResearchContainer.area ? a("div", {
				staticClass: "row"
			}, [a("a", {
				attrs: {
					href: "#"
				},
				on: {
					click: e.selectResearchPane
				}
			}, [e._v(e._s(e.currentResearchContainer.area.name + ": " + e.abbrLevel(e.currentResearchContainer.area.xp.state.level)))])]) : e._e()], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement;
			e._self._c || t;
			return e._m(0)
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("h3", [e._v("关于")]), e._v("\n        由 M. Gronbach 开发 meismo@gmail.com.\n")])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", {
				staticClass: "row"
			}, [a("table", [a("tr", [a("th", {
				staticStyle: {
					width: "13rem"
				}
			}), e._v(" "), a("th", {
				staticStyle: {
					width: "4rem"
				}
			}, [e._v("Level")]), e._v(" "), a("th", {
				staticStyle: {
					width: "15rem"
				}
			}, [e._v("Effect")]), e._v(" "), a("th", {
				staticStyle: {
					width: "5rem"
				}
			}, [e._v("XP needed")]), e._v(" "), a("th", {
				staticStyle: {
					width: "5rem"
				}
			}, [e._v(e._s(e.settings.xpPerHour.getValue() ? "经验/小时" : "经验/天"))]), e._v(" "), e.time.currentLifeThisLoop.getValue() > 1 ? a("th", {
				staticClass: "text-right",
				staticStyle: {
					width: "3rem"
				}
			}, [e._v("Highest Level")]) : e._e()]), e._v(" "), e._l(e.researchPane.subpanes, function (t) {
				return a("tbody", {
					staticClass: "table-cat",
					attrs: {
						id: t.id
					}
				}, [a("tr", [a("td", {
					staticClass: "tr-name",
					attrs: {
						colspan: "6"
					},
					on: {
						click: function (a) {
							e.selectPane(t)
						}
					}
				}, [a("span", {
					staticClass: "collapse-icon rounded-circle"
				}, [e._v(e._s(t.state.selected ? "-" : "+"))]), a("b", [e._v(e._s(t.field.name))])])]), e._v(" "), e._l(t.field.areas, function (n) {
					return n.unlocked() && t.state.selected ? a("area-button", {
						attrs: {
							entity: n
						}
					}) : n.locks.keyholdersUnlocked() && t.state.selected ? a("tr", [a("td", {
						attrs: {
							colspan: "6"
						}
					}, [e._v("\n            需要: "), a("i", [e._v(e._s(n.locks.lockString()))])])]) : e._e()
				}), e._v(" "), e._m(0, !0)], 2)
			})], 2)]), e._v(" "), a("div", {
				staticClass: "row",
				staticStyle: {
					"padding-top": "20px"
				}
			}, [a("button", {
				staticClass: "btn btn-info",
				on: {
					click: function (t) {
						e.settings.xpPerHour.toggleValue()
					}
				}
			}, [e._v("\n      " + e._s(e.settings.xpPerHour.getValue() ? "经验/小时" : "经验/天") + "\n    ")]), e._v(" "), a("span", {
				staticStyle: {
					"padding-left": "20px"
				}
			}, [a("stat-display", {
				attrs: {
					stat: e.baseResearchXpPerHourStat
				}
			})], 1)])])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("td", {
				staticStyle: {
					"padding-bottom": "15px"
				}
			})])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "modal",
				attrs: {
					id: "progress-modal",
					"data-backdrop": "static"
				}
			}, [a("div", {
				staticClass: "modal-dialog",
				attrs: {
					role: "document"
				}
			}, [a("div", {
				staticClass: "modal-content"
			}, [e._m(0), e._v(" "), a("div", {
				staticClass: "modal-body"
			}, [a("p", [e._v("Calculating progress since you left. " + e._s(e.daysBehind) + " days left.")]), e._v(" "), a("a", {
				attrs: {
					href: "#"
				},
				on: {
					click: e.resetTimer
				}
			}, [e._v("让我自己玩!")])])])])])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "modal-header"
			}, [a("h5", {
				staticClass: "modal-title"
			}, [e._v("后台运行")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", e._l(e.events, function (t) {
				return t.unlocked() ? a("div", {
					staticClass: "small-paper",
					staticStyle: {
						padding: "20px"
					}
				}, [a("div", {
					staticClass: "row",
					on: {
						click: function (e) {
							t.state.expanded = !t.state.expanded
						}
					}
				}, [a("h5", [e._v(e._s(t.name))]), a("br"), a("br")]), e._v(" "), t.state.expanded ? a("div", e._l(t.nodes, function (t) {
					return t.unlocked() ? a("div", [e._v("\n          " + e._s(t.name)), a("br"), a("br"), e._v(" "), t.paths ? a("ul", e._l(t.paths, function (n) {
						return a("li", [a("button", {
							staticClass: "btn btn-info",
							staticStyle: {
								margin: "10px"
							},
							attrs: {
								role: "button",
								disabled: !n.state.enabled
							},
							on: {
								click: function (e) {
									t.selectPath(n)
								}
							}
						}, [e._v("\n                " + e._s(n.name) + "\n              ")])])
					})) : e._e()]) : e._e()
				})) : e._e()]) : e._e()
			}))
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", {
				staticClass: "row"
			}, [e._v("\n         " + e._s(18 + e.time.currentDay.getYear()) + " 岁\n         " + e._s(e.time.currentDay.getDayOfYear()) + "天 \n  ")]), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("button", {
				staticClass: "btn btn-sm",
				staticStyle: {
					width: "5rem"
				},
				on: {
					click: e.pauseGame
				}
			}, [a("small", [e._v(e._s(e.paused.getValue() ? "继续" : "暂停"))])])])])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return e.currency.money.austerityAlert ? a("div", {
				staticClass: "alert alert-danger alert-dismissible fade show",
				attrs: {
					role: "alert"
				}
			}, [a("button", {
				staticClass: "close",
				attrs: {
					type: "button",
					"aria-label": "Close"
				},
				on: {
					click: function (t) {
						e.acknowledgeAusterity()
					}
				}
			}, [a("span", {
				attrs: {
					"aria-hidden": "true"
				}
			}, [e._v("×")])]), e._v(" "), a("strong", [e._v("You went bankrupt!")]), e._v(" Your expenses were automatically reduced, and work hours increased."), a("br"), e._v("Your assistants were fired, and you moved back to your parents."), a("br"), e._v("\n  Take care of your finances!\n")]) : e._e()
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("footer", {
				staticClass: "footer"
			}, [a("div", {
				staticClass: "container"
			}, [a("ul", {
				staticClass: "nav nav-tabs"
			}, e._l(e.panes, function (t) {
				return t.footer ? a("li", {
					staticClass: "nav-item",
					on: {
						click: function (a) {
							e.selectPane(t)
						}
					}
				}, [a("a", {
					class: ["nav-link", t.state.selected ? "active" : "", t.state.notified ? "item-notified" : ""],
					attrs: {
						href: "#" + t.id
					}
				}, [e._v("\n          " + e._s(t.name) + "\n        ")])]) : e._e();
			}))])])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("navbar-display", {
				attrs: {
					panes: e.journalPane.subpanes
				}
			}), e._v(" "), a("div", {
				staticClass: "tab-content small-paper",
				staticStyle: {
					"padding-left": "20px",
					"padding-top": "20px",
					"min-height": "100%"
				}
			}, e._l(e.journalPane.subpanes, function (t) {
				return t.state.selected ? a("div", {
					class: [t.state.selected ? "active" : ""],
					attrs: {
						id: t.id
					}
				}, [a(t.component, {
					tag: "div"
				})]) : e._e()
			}))], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", {
				staticClass: "row"
			}, [a("table", e._l(e.log.state.entries.slice(0, 100), function (t) {
				return a("tr", [a("td", [e._v(e._s(t.timestampAge[0]) + " 岁 " + e._s(t.timestampAge[1]) + " 天:")]), a("td", [e._v(e._s(t.message))])])
			}))])])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [e._m(0), e._v(" "), a("div", {
				staticClass: "row",
				staticStyle: {
					"padding-left": "20px",
					"padding-right": "20px"
				}
			}, e._l(e.homes, function (t) {
				return t.keyholdersUnlocked() ? a("home-button", {
					attrs: {
						home: t,
						disabled: !t.unlocked
					}
				}) : e._e()
			}))])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "row"
			}, [a("b", [e._v("A nicer home improves your happiness.")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("h5", [e._v("Previous Life")]), e._v("\n  The highest levels reached in previous lives."), a("br"), e._v("\n  Reaching higher levels increases your progress speed in future lives."), a("br"), a("br"), e._v(" "), a("h3", [e._v("Career")]), e._v(" "), e._l(e.careers, function (t) {
				return t.jobs[0].xp.state.highestLevelEver > 0 ? a("div", {}, [a("div", {
					staticClass: "row"
				}, [a("h5", [e._v(e._s(t.name))]), a("br")]), e._v(" "), a("table", [e._m(0, !0), e._v(" "), e._l(t.jobs, function (t) {
					return t.xp.state.highestLevelThisLoop > 0 ? a("tr", {
						class: t.xp.recordClass()
					}, [a("td", [e._v(e._s(t.name))]), e._v(" "), a("td", [e._v(e._s(t.xp.previousLevelReached()))]), e._v(" "), a("td", [e._v(e._s(t.xp.state.highestLevelThisLoop))]), e._v(" "), a("td", [e._v(e._s(t.xp.computePrestigeFactor()))])]) : e._e()
				})], 2), e._v(" "), a("br")]) : e._e()
			}), e._v(" "), a("br"), e._v(" "), a("h3", [e._v("Research")]), e._v(" "), e._l(e.fields, function (t) {
				return a("div", [a("div", {
					staticClass: "row"
				}, [a("h5", [e._v(e._s(t.name))])]), e._v(" "), a("table", [e._m(1, !0), e._v(" "), e._l(t.areas, function (t) {
					return t.xp.state.highestLevelThisLoop > 0 ? a("tr", {
						class: t.xp.recordClass()
					}, [a("td", [e._v(e._s(t.name))]), e._v(" "), a("td", [e._v(e._s(t.xp.previousLevelReached()))]), e._v(" "), a("td", [e._v(e._s(t.xp.state.highestLevelThisLoop))]), e._v(" "), a("td", [e._v(e._s(t.xp.computePrestigeFactor()))])]) : e._e()
				})], 2)])
			})], 2)
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("th", {
				staticStyle: {
					width: "15rem"
				}
			}, [e._v("Title")]), e._v(" "), a("th", {
				staticStyle: {
					width: "10rem"
				}
			}, [e._v("Level reached")]), e._v(" "), a("th", {
				staticStyle: {
					width: "10rem"
				}
			}, [e._v("Highest Level This Loop")]), e._v(" "), a("th", {
				staticStyle: {
					width: "10rem"
				}
			}, [e._v("Speedup-Factor")])])
		}, function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("th", {
				staticStyle: {
					width: "15rem"
				}
			}, [e._v("Area")]), e._v(" "), a("th", {
				staticStyle: {
					width: "10rem"
				}
			}, [e._v("Level reached")]), e._v(" "), a("th", {
				staticStyle: {
					width: "10rem"
				}
			}, [e._v("Highest Level This Loop")]), e._v(" "), a("th", {
				staticStyle: {
					width: "10rem"
				}
			}, [e._v("Speedup-Factor")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("ul", {
				staticClass: "nav navbar navbar-toggleable-md nav-tabs"
			}, e._l(e.panes, function (t) {
				return !t.footer && t.unlocked() ? a("li", {
					staticClass: "nav-item",
					on: {
						click: function (a) {
							e.selectPane(t)
						}
					}
				}, [a("a", {
					class: ["nav-link", t.state.selected ? "active" : "", t.state.notified ? "item-notified" : ""],
					attrs: {
						href: "#"
					}
				}, [e._v("\n      " + e._s(t.name) + "\n    ")])]) : e._e()
			}))
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticStyle: {}
			}, [a("img", {
				staticStyle: {
					width: "60px"
				},
				attrs: {
					src: e.getEmoji()
				}
			}), a("img"), a("a", {
				attrs: {
					href: "#"
				},
				on: {
					click: function (t) {
						e.selectPane(e.happinessPane)
					}
				}
			}, [e._v("(信息)")]), e._v(" "), a("stat-display", {
				attrs: {
					stat: e.happiness
				}
			})], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "text-left"
			}, [a("stat-display", {
				attrs: {
					stat: e.stats.energy
				}
			}), e._v(" "), a("small", [e._v("活力能使你进步得更快。")]), a("br"), a("br"), e._v("\n      $" + e._s(e.abbreviateNumber(e.currency.money.getValue()))), a("br"), e._v(" "), a("stat-display", {
				attrs: {
					stat: e.stats.dailyNetIncome
				}
			}), e._v(" "), a("ul", [a("li", [a("stat-display", {
				attrs: {
					stat: e.stats.dailyIncome
				}
			})], 1), e._v(" "), a("li", [a("stat-display", {
				staticStyle: {
					width: "15rem"
				},
				attrs: {
					stat: e.stats.dailyExpenses
				}
			})], 1)])], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("td", {
				staticStyle: {
					"padding-right": "5px",
					"padding-bottom": "5px"
				}
			}, [a("div", {
				class: ["progress", e.entity.state.active ? "p-selected" : ""],
				staticStyle: {
					height: "28px"
				},
				on: {
					click: function (t) {
						e.setActiveJob(e.entity)
					}
				}
			}, [a("div", {
				class: [e.entity.state.active ? "pb-selected" : "pb-not-selected", "progress-bar"],
				style: "height: 100%; width: " + e.entity.xp.perc() + "%",
				attrs: {
					role: "progressbar"
				}
			}, [a("span", {
				staticClass: "progress-label"
			}, [e._v(e._s(e.entity.name))])])])]), e._v(" "), a("td", {
				staticClass: "text-center"
			}, [e._v("\n      " + e._s(e.abbrLevel(e.entity.xp.state.level)) + "\n    ")]), e._v(" "), a("td", {
				staticClass: "text-center",
				staticStyle: {
					"padding-right": "30px"
				}
			}, [a("stat-display", {
				attrs: {
					stat: e.entity.income,
					name: !1
				}
			})], 1), e._v(" "), a("td", {
				staticClass: "text-muted"
			}, [e._v("\n      " + e._s(e.entity.xp.xpToNextLevelString()) + "\n    ")]), e._v(" "), a("td", {
				staticStyle: {
					"padding-right": "10px"
				}
			}, [e.settings.xpPerHour.getValue() ? a("stat-display", {
				attrs: {
					stat: e.entity.xp.xpPerHourStat,
					name: !1
				}
			}) : a("stat-display", {
				attrs: {
					stat: e.entity.xp.xpPerDayStat,
					name: !1
				}
			})], 1), e._v(" "), e.time.currentLife.getValue() > 1 ? a("td", {
				staticClass: "text-center"
			}, [e._v("\n      " + e._s(e.entity.xp.state.highestLevelThisLoop) + "\n    ")]) : e._e()])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [e._v("\n  +/-\n  "), a("select", {
				on: {
					change: function (t) {
						e.delta.setValue(t.target.value)
					}
				}
			}, [a("option", [e._v("1")]), e._v(" "), a("option", [e._v("5")]), e._v(" "), a("option", [e._v("15")]), e._v(" "), a("option", [e._v("30")]), e._v(" "), a("option", {
				attrs: {
					selected: "selected"
				}
			}, [e._v("60")]), e._v(" "), a("option", [e._v("240")])]), e._v(" 分钟\n  "), a("table", e._l(e.activities, function (t) {
				return a("tr", {
					class: [t.unlocked() ? "item-unlocked" : "item-locked", t.sufficientTime() ? "" : "insufficient-time"]
				}, [a("td", {
					staticStyle: {
						width: "5rem"
					}
				}, [e._v(e._s(t.name))]), e._v(" "), a("td", {
					staticStyle: {
						width: "3rem"
					}
				}, [e._v(e._s(t.duration.durationString))]), e._v(" "), a("td", {
					staticStyle: {
						width: "1rem"
					}
				}, [t.durationByUser ? a("button", {
					on: {
						click: function (a) {
							e.changeActivityTime([t, e.delta.getValue()])
						}
					}
				}, [e._v("+")]) : e._e()]), e._v(" "), a("td", {
					staticStyle: {
						width: "1rem"
					}
				}, [t.durationByUser ? a("button", {
					on: {
						click: function (a) {
							e.changeActivityTime([t, -e.delta.getValue()])
						}
					}
				}, [e._v("-")]) : e._e()])])
			}))])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "row"
			}, [a("div", {
				staticClass: "text-center",
				staticStyle: {
					margin: "auto"
				}
			}, [a("img", {
				staticStyle: {
					width: "80px"
				},
				attrs: {
					src: e.getEmoji()
				}
			}), a("br"), e._v(" "), a("stat-display", {
				attrs: {
					stat: e.happiness
				}
			}), a("br"), a("br"), e._v(" "), e._l(e.happiness.modifiers, function (t) {
				return a("span", [e._v(e._s(t.explain())), a("br"), a("br")])
			})], 2)])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [e._m(0), e._v(" "), a("div", {
				staticClass: "row",
				staticStyle: {
					"padding-left": "20px"
				}
			}, [a("range-slider", {
				attrs: {
					type: "range",
					min: "1",
					max: "10"
				},
				model: {
					value: e.foodCostFactor.value,
					callback: function (t) {
						e.foodCostFactor.value = t
					},
					expression: "foodCostFactor.value"
				}
			}), e._v("$" + e._s(e.stats.foodCostsPerDay.effective) + " / day"), a("br")], 1), e._v(" "), a("div", {
				staticClass: "row",
				staticStyle: {
					"padding-bottom": "20px"
				}
			}, [e._v("\n      Spending more on food increases your energy and happiness (as long as you can afford it)!\n  ")])])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "row"
			}, [a("h3", [e._v("Food Expenses")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", [a("navbar-display", {
				attrs: {
					panes: e.lifestylePane.subpanes
				}
			}), e._v(" "), a("div", {
				staticClass: "tab-content small-paper",
				staticStyle: {
					"padding-left": "20px",
					"padding-top": "20px",
					"min-height": "100%"
				}
			}, e._l(e.lifestylePane.subpanes, function (t) {
				return t.state.selected ? a("div", {
					class: [t.state.selected ? "active" : ""],
					attrs: {
						id: t.id
					}
				}, [a(t.component, {
					tag: "div"
				})]) : e._e()
			}))], 1)])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", {
				staticClass: "row"
			}, [a("table", [a("tr", [a("th", {
				staticStyle: {
					width: "13rem"
				}
			}), e._v(" "), a("th", {
				staticStyle: {
					width: "4rem"
				}
			}, [e._v("等级")]), e._v(" "), a("th", {
				staticStyle: {
					width: "6rem"
				}
			}, [e._v("收入/小时")]), e._v(" "), a("th", {
				staticStyle: {
					width: "5rem"
				}
			}, [e._v("升级所需经验")]), e._v(" "), a("th", {
				staticStyle: {
					width: "5rem"
				}
			}, [e._v(e._s(e.settings.xpPerHour.getValue() ? "经验/小时" : "经验/天"))]), e._v(" "), e.time.currentLifeThisLoop.getValue() > 1 ? a("th", {
				staticClass: "text-right",
				staticStyle: {
					width: "3rem"
				}
			}, [e._v("Highest Level")]) : e._e()]), e._v(" "), e._l(e.jobPane.subpanes, function (t) {
				return t.career.unlocked() ? a("tbody", {
					staticClass: "table-cat",
					attrs: {
						id: t.id
					}
				}, [a("tr", [a("td", {
					staticClass: "tr-name",
					attrs: {
						colspan: "6"
					},
					on: {
						click: function (a) {
							e.selectPane(t)
						}
					}
				}, [a("span", {
					staticClass: "collapse-icon rounded-circle"
				}, [e._v(e._s(t.state.selected ? "-" : "+"))]), a("b", [e._v(e._s(t.career.name))])])]), e._v(" "), e._l(t.career.jobs, function (n) {
					return n.unlocked() && t.state.selected ? a("job-button", {
						attrs: {
							entity: n
						}
					}) : n.locks.keyholdersUnlocked() && t.state.selected ? a("tr", [a("td", {
						attrs: {
							colspan: "6"
						}
					}, [e._v("\n            需要: "), a("i", [e._v(e._s(n.locks.lockString()))])])]) : e._e()
				}), e._v(" "), e._m(0, !0)], 2) : e._e()
			})], 2)]), e._v(" "), a("div", {
				staticClass: "row",
				staticStyle: {
					"padding-top": "20px"
				}
			}, [a("button", {
				staticClass: "btn btn-info",
				on: {
					click: function (t) {
						e.settings.xpPerHour.toggleValue()
					}
				}
			}, [e._v("\n      " + e._s(e.settings.xpPerHour.getValue() ? "经验/小时" : "经验/天") + "\n    ")]), e._v(" "), a("span", {
				staticStyle: {
					"padding-left": "20px"
				}
			}, [a("stat-display", {
				attrs: {
					stat: e.baseWorkXpPerHourStat
				}
			})], 1)])])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("td", {
				staticStyle: {
					"padding-bottom": "15px"
				}
			})])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement;
			e._self._c || t;
			return e._m(0)
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("h3", [e._v("隐私政策")]), e._v("\n        我们不会收集或存储您的任何个人信息。"), a("br"), e._v("\n        但是，我们使用 Playfab 和 Google Analytics 进行内部使用分析。"), a("br"), e._v("\n        我们使用 Playfab 分析来引导游戏改进。"), a("br"), e._v("\n        Google Analytics 使用 cookie 来存储非个人身份信息。"), a("br"), e._v("\n        有关的更多信息，请参见 "), a("a", {
				attrs: {
					href: "https://support.google.com/analytics/answer/6004245?hl=en"
				}
			}, [e._v("https://support.google.com/analytics/answer/6004245?hl=en")]), e._v("。"), a("br"), e._v("\n        如果您不同意使用 Google Analytics，请下载一个浏览器插件来阻止 Google Analytics。"), a("br")])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "card",
				staticStyle: {
					width: "20rem"
				}
			}, [a("div", {
				staticClass: "card-header"
			}, [a("button", {
				class: ["btn", e.home.state.selected ? "btn-success" : "btn-secondary"],
				staticStyle: {
					width: "100%"
				},
				attrs: {
					type: "button",
					disabled: !e.home.unlocked(),
					title: e.home.locks.lockStrings()
				},
				on: {
					click: function (t) {
						e.selectHome(e.home)
					}
				}
			}, [e._v(e._s(e.home.name))])]), e._v(" "), a("stat-display", {
				attrs: {
					stat: e.home.choresTime,
					color: e.home.enoughFreeTime() ? "blue" : "red"
				}
			}), e._v(" "), a("stat-display", {
				attrs: {
					stat: e.home.rent,
					name: !1,
					color: e.home.enoughIncome() ? "blue" : "orange"
				}
			}), e._v(" "), a("stat-display", {
				attrs: {
					stat: e.home.initialCost,
					name: !0,
					color: e.home.enoughMoney() ? "blue" : "red"
				}
			}), e._v(" "), a("small", [e._v(" " + e._s(e.home.description) + " ")]), e._v(" "), a("div", {
				staticClass: "card-footer"
			})], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("div", {
				staticClass: "row"
			}, [a("table", e._l(e.achievements, function (t) {
				return a("tr", {
					staticStyle: {
						"padding-bottom": "5px"
					}
				}, [a("td", {
					class: [t.state.completed ? "complete" : "incomplete"]
				}, [a("b", [e._v(e._s(t.name))])]), e._v(" "), a("td", {
					staticStyle: {
						width: "1rem"
					}
				}), e._v(" "), a("td", [e._v(e._s(t.description))]), e._v(" "), a("td", {
					staticStyle: {
						with: "1rem"
					}
				}), e._v(" "), a("td", [e._v(e._s(t.currentValue.toFixed(2)) + "/" + e._s(t.goal))])])
			})), e._v("\n    Your base energy is increased by the number of times you averted the anomaly.\n  ")])])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("nobr", [a("a", {
				class: e.stat.recentChange(1),
				style: "color:" + e.color,
				attrs: {
					"data-toggle": "modal",
					href: "#details_" + e.stat.id
				}
			}, [a("div", [e._v(e._s(e.name ? e.stat.name + ": " : "") + e._s(e.stat.prefix + e.abbreviateNumber(e.stat.effective, e.stat.digits) + e.stat.suffix))])])]), e._v(" "), a("div", {
				staticClass: "modal fade bd-example-modal-lg",
				attrs: {
					id: "details_" + e.stat.id,
					tabindex: "-1",
					role: "dialog"
				}
			}, [a("div", {
				staticClass: "modal-dialog modal-lg"
			}, [a("div", {
				staticClass: "modal-content"
			}, [a("h5", {
				staticClass: "modal-title"
			}, [e._v(e._s(e.stat.name))]), e._v(" "), a("table", [e._m(0), e._v(" "), a("tr", [a("td", [e._v(" Base Value ")]), e._v(" "), a("td"), e._v(" "), a("td", {
				staticClass: "text-right"
			}, [e._v(e._s(e.stat.prefix + e.stat.base.toFixed(e.stat.digits) + e.stat.suffix))])]), e._v(" "), e._l(e.stat.modifiersWithValues(), function (t) {
				return t[0].unlocked() ? a("tr", [a("td", [e._v(" " + e._s(t[0].name) + " ")]), e._v(" "), a("td", {
					staticClass: "text-right",
					staticStyle: {
						"padding-right": "20px",
						"padding-left": "20px"
					}
				}, [e._v(" " + e._s(t[0].operationString + t[0].factor.toFixed(t[0].digits)) + " ")]), e._v(" "), a("td", {
					staticClass: "text-right"
				}, [e._v(" " + e._s(e.stat.prefix + t[1].toFixed(e.stat.digits) + e.stat.suffix))])]) : e._e()
			}), e._v(" "), a("tr", [a("td", [e._v(" Effective Value ")]), e._v(" "), a("td"), e._v(" "), a("td", {
				staticClass: "text-right"
			}, [a("b", [e._v(e._s(e.stat.prefix + e.stat.effective.toFixed(e.stat.digits) + e.stat.suffix))])])])], 2)])])])], 1)
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("th", [e._v("Modifier")]), a("th", [e._v("Factor")]), a("th", [e._v("Value")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement;
			e._self._c || t;
			return e._m(0)
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("h3", [e._v("Amazon Affiliate Program")]), e._v("\n        groundhog-life.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.com\n")])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return e.messageBox.messages.length > 0 ? a("div", {
				staticClass: "alert alert-success alert-dismissible fade show floating text-center",
				attrs: {
					role: "alert"
				},
				on: {
					click: function (t) {
						e.acknowledgeMessage()
					}
				}
			}, [e._m(0), e._v("\n  " + e._s(e.messageBox.newestMessage()) + "\n")]) : e._e()
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("button", {
				staticClass: "close",
				attrs: {
					type: "button",
					"aria-label": "Close"
				}
			}, [a("span", {
				attrs: {
					"aria-hidden": "true"
				}
			}, [e._v("×")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				attrs: {
					id: "app"
				}
			}, [a("div", {
				staticClass: "container-fluid"
			}, [a("time-warning"), e._v(" "), a("prestige-info"), e._v(" "), a("austerity-alert"), e._v(" "), a("div", {
				staticClass: "row"
			}, [a("progress-modal"), e._v(" "), a("sidebar-display"), e._v(" "), a("div", {
				staticClass: "col-md-8"
			}, [a("navbar-display", {
				attrs: {
					panes: e.panes
				}
			}), e._v(" "), a("main-pane")], 1)], 1)], 1), e._v(" "), a("message-box"), e._v(" "), a("footer-display")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("table", [e._m(0), e._v(" "), e._l(e.boosts, function (t) {
				return t.unlocked() ? a("tr", [a("td", [a("button", {
					class: ["btn", t.buttonState()],
					staticStyle: {
						width: "10rem"
					},
					attrs: {
						role: "button"
					},
					on: {
						click: function (a) {
							e.activateBoost(t)
						}
					}
				}, [e._v(e._s(t.name))])]), e._v(" "), a("td", {
					staticStyle: {
						"padding-left": "20px"
					}
				}, [e._v("\n        " + e._s(t.description) + "\n      ")]), e._v(" "), a("td", [e._v("\n        " + e._s(t.daysLeft()) + "\n      ")]), a("td", [e._v("\n        " + e._s(t.cooldownLeft()) + "\n      ")])]) : a("tr", [a("td", {
					attrs: {
						colspan: "4"
					}
				}, [e._v("\n      Requires: " + e._s(t.locks.lockString()) + "\n      ")])])
			})], 2)])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("th", {
				staticStyle: {
					width: "10rem"
				}
			}), e._v(" "), a("th", {
				staticStyle: {
					width: "20rem",
					"padding-left": "20px"
				}
			}, [e._v("Effect")]), e._v(" "), a("th", {
				staticStyle: {
					width: "6rem"
				}
			}, [e._v("Days Left")]), e._v(" "), a("th", {
				staticStyle: {
					width: "3rem"
				}
			}, [e._v("Cooldown")])])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("food-cost-display"), e._v(" "), a("assistants-display")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", [a("h5", [e._v("游戏性")]), e._v(" "), a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.settings.pauseOnPrestige.state.value,
					expression: "settings.pauseOnPrestige.state.value"
				}],
				attrs: {
					type: "checkbox",
					id: "checkbox-pauseOnPrestige"
				},
				domProps: {
					checked: Array.isArray(e.settings.pauseOnPrestige.state.value) ? e._i(e.settings.pauseOnPrestige.state.value, null) > -1 : e.settings.pauseOnPrestige.state.value
				},
				on: {
					__c: function (t) {
						var a = e.settings.pauseOnPrestige.state.value,
							n = t.target,
							i = !!n.checked;
						if (Array.isArray(a)) {
							var r = null,
								o = e._i(a, r);
							i ? o < 0 && (e.settings.pauseOnPrestige.state.value = a.concat(r)) : o > -1 && (e.settings.pauseOnPrestige.state.value = a.slice(0, o).concat(a.slice(o + 1)))
						} else e.settings.pauseOnPrestige.state.value = i
					}
				}
			}), e._v(" "), a("label", {
				attrs: {
					for: "checkbox-pauseOnPrestige"
				}
			}, [e._v("在开始新生活时自动暂停")]), e._v(" "), a("br"), e._v(" "), a("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.settings.idleMode.state.value,
					expression: "settings.idleMode.state.value"
				}],
				attrs: {
					type: "checkbox",
					id: "checkbox-idleMode"
				},
				domProps: {
					checked: Array.isArray(e.settings.idleMode.state.value) ? e._i(e.settings.idleMode.state.value, null) > -1 : e.settings.idleMode.state.value
				},
				on: {
					__c: function (t) {
						var a = e.settings.idleMode.state.value,
							n = t.target,
							i = !!n.checked;
						if (Array.isArray(a)) {
							var r = null,
								o = e._i(a, r);
							i ? o < 0 && (e.settings.idleMode.state.value = a.concat(r)) : o > -1 && (e.settings.idleMode.state.value = a.slice(0, o).concat(a.slice(o + 1)))
						} else e.settings.idleMode.state.value = i
					}
				}
			}), e._v(" "), a("label", {
				attrs: {
					for: "checkbox-idleMode"
				}
			}, [e._v("如果游戏处于非活动状态(例如，在后台标签中)，则快速推进进程")]), e._v(" "), a("br"), e._v(" "), a("button", {
				staticClass: "btn",
				attrs: {
					role: "button"
				},
				on: {
					click: function (t) {
						e.toggleNightMode()
					}
				}
			}, [e._v("切换夜间模式")]), e._v(" "), a("br"), e._v(" "), a("h5", [e._v("导入/导出游戏存档")]), e._v(" "), a("br"), e._v(" "), a("button", {
				staticClass: "btn",
				attrs: {
					role: "button"
				},
				on: {
					click: function (t) {
						e.exportSaveHelper()
					}
				}
			}, [e._v("导出")]), e._v(" "), a("button", {
				staticClass: "btn",
				attrs: {
					role: "button"
				},
				on: {
					click: function (t) {
						e.importSaveHelper()
					}
				}
			}, [e._v("导入")]), e._v(" "), a("br"), e._v(" "), a("textarea", {
				ref: "savegamearea",
				attrs: {
					onclick: "this.select()",
					rows: "10",
					cols: "50"
				}
			}), e._v(" "), a("br"), e._v(" "), a("br"), e._v(" "), a("br"), e._v(" "), a("br"), e._v(" "), a("h1", [e._v("警告！下面的按钮将会删除您的进度！")]), e._v(" "), a("button", {
				staticClass: "btn",
				attrs: {
					role: "button"
				},
				on: {
					click: function (t) {
						e.hardReset()
					}
				}
			}, [e._v("重置游戏")])])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return e.time.currentDay.getValue() > 15330 && !e.anomalyAverted.getValue() ? a("div", {
				staticClass: "row"
			}, [e._m(0)]) : e._e()
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "alert alert-danger",
				attrs: {
					role: "alert"
				}
			}, [a("strong", [e._v("Warning!")]), e._v(" Experiencing major time dilation. Check your events.\n  ")])
		}]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("div", {
				staticClass: "tab-content small-paper",
				staticStyle: {
					"padding-left": "20px",
					"padding-top": "20px",
					"min-height": "100%"
				}
			}, e._l(e.panes, function (t) {
				return t.state.selected ? a("div", {
					class: [t.state.selected ? "active" : ""],
					attrs: {
						id: t.id
					}
				}, [a(t.component, {
					tag: "div"
				})]) : e._e()
			}))
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return e.time.currentDay.getValue() >= 1 && e.time.currentDay.getValue() <= 100 && e.time.currentLife.getValue() > 1 ? a("div", {
				staticClass: "row"
			}, [a("div", {
				staticClass: "alert alert-success",
				attrs: {
					role: "alert"
				}
			}, [e._v("\n     You just turned 18. Again. Expertise from previous lives makes things easier this time.\n  ")])]) : e._e()
		},
		staticRenderFns: []
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				a = e._self._c || t;
			return a("tr", [a("td", {
				staticStyle: {
					"padding-right": "5px",
					"padding-bottom": "5px"
				}
			}, [a("div", {
				class: ["progress", e.entity.state.active ? "p-selected" : ""],
				staticStyle: {
					height: "28px"
				},
				on: {
					click: function (t) {
						e.setActiveResearch(e.entity)
					}
				}
			}, [a("div", {
				class: [e.entity.state.active ? "pb-selected" : "pb-not-selected", "progress-bar"],
				style: "height: 100%; width: " + e.entity.xp.perc() + "%",
				attrs: {
					role: "progressbar"
				}
			}, [a("span", {
				staticClass: "progress-label"
			}, [e._v(e._s(e.entity.name))])])])]), e._v(" "), a("td", {
				staticClass: "text-center"
			}, [e._v("\n      " + e._s(e.abbrLevel(e.entity.xp.state.level)) + "\n    ")]), e._v(" "), a("td", [e._v("\n      " + e._s(e.entity.effect) + "\n    ")]), e._v(" "), a("td", {
				staticClass: "text-muted"
			}, [e._v("\n      " + e._s(e.entity.xp.xpToNextLevelString()) + "\n    ")]), e._v(" "), a("td", {
				staticStyle: {
					"padding-right": "10px"
				}
			}, [e.settings.xpPerHour.getValue() ? a("stat-display", {
				attrs: {
					stat: e.entity.xp.xpPerHourStat,
					name: !1
				}
			}) : a("stat-display", {
				attrs: {
					stat: e.entity.xp.xpPerDayStat,
					name: !1
				}
			})], 1), e._v(" "), e.time.currentLife.getValue() > 1 ? a("td", {
				staticClass: "text-center"
			}, [e._v("\n      " + e._s(e.entity.xp.state.highestLevelThisLoop) + "\n    ")]) : e._e()])
		},
		staticRenderFns: []
	}
}, , , function (e, t) { }]);