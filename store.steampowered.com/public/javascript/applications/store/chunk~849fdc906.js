/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7440],
  {
    54671: (e, t, s) => {
      s.d(t, { LA: () => h, jg: () => g });
      var r = s(33940),
        a = s(52868),
        n = s.n(a),
        o = s(50265),
        i = s(75457),
        d = s(42735),
        m = s(23217),
        p = s(32765),
        l = s(89526),
        u = s(60161);
      const c = "unUserdataVersion";
      class g {
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetWishlistGamesInUserOrder() {
          return this.m_wishlistInOrder;
        }
        GetWishlistGameCount() {
          return this.m_setWishList.size;
        }
        GetRecommendedGamesInIRPriorityOrder() {
          return this.m_recAppInOrder;
        }
        GetFollowedCuratorCount() {
          return this.m_setCuratorsFollowed.size;
        }
        GetFollowedCuratorsAccountID() {
          return Array.from(this.m_setCuratorsFollowed);
        }
        GetPackagesInCartCount() {
          return this.m_setPackagesInCart.size;
        }
        GetAppInCartCount() {
          return this.m_setAppsInCart.size;
        }
        GetCartLineItemCount() {
          return this.m_nCartLineItemCount;
        }
        GetIgnoredAppsCount() {
          return this.m_mapIgnoredApps.size;
        }
        BIsFollowingCurator(e) {
          const t =
            "object" == typeof e && "GetAccountID" in e ? e.GetAccountID() : e;
          return this.m_setCuratorsFollowed.has(t);
        }
        BIsFollowingCreator(e) {
          return this.BIsFollowingCurator(e);
        }
        BIsIgnoringCurator(e) {
          const t =
            "object" == typeof e && "GetAccountID" in e ? e.GetAccountID() : e;
          return this.m_setCuratorsIgnored.has(t);
        }
        get ExcludedContentDescriptor() {
          return Array.from(this.m_setExcludedContentDescriptors);
        }
        BExcludesTag(e) {
          return e.some((e) => this.m_setExcludedTagsIds.has(Number(e.tagid)));
        }
        BExcludeTagIDs(e) {
          return e.some((e) => this.m_setExcludedTagsIds.has(e));
        }
        GetExcludedTagsSortedByID() {
          return Array.from(this.m_setExcludedTagsIds).sort();
        }
        BExcludesContentDescriptor(e) {
          return e.some((e) => this.m_setExcludedContentDescriptors.has(e));
        }
        BIncludesContentDescriptor(e) {
          return !this.m_setExcludedContentDescriptors.has(e);
        }
        BIsGameWishlisted(e) {
          return this.m_setWishList.has(Number(e));
        }
        BIsGameRecommended(e) {
          return this.m_setRecommendedApps.has(Number(e));
        }
        BIsGameIgnored(e) {
          return this.m_mapIgnoredApps && this.m_mapIgnoredApps.has(e);
        }
        BIsPackageIgnored(e) {
          var t;
          return null === (t = this.m_mapIgnoredPackages) || void 0 === t
            ? void 0
            : t.has(e);
        }
        BIsGameOwned(e) {
          return this.m_setOwnedApps.has(Number(e));
        }
        BOwnsApp(e) {
          return this.m_setOwnedApps.has(Number(e));
        }
        BFollowsApp(e) {
          return this.m_setFollowedApps.has(Number(e));
        }
        BOwnsPackage(e) {
          return this.m_setOwnedPackages.has(Number(e));
        }
        BShowFilteredUserReviewScores() {
          return this.m_bShowFilteredUserReviewScores;
        }
        BAppImpressionsAllowed() {
          return this.m_bAllowAppImpressions;
        }
        GetPrimaryLanguage() {
          return this.m_primaryLanguage;
        }
        GetSecondaryLanguages() {
          return this.m_secondaryLanguages;
        }
        BIsAnyLanguageEnabled(e) {
          return (
            null == this.m_primaryLanguage ||
            this.m_primaryLanguage <= i.Df.k_Lang_None ||
            i.Df.k_Lang_MAX <= this.m_primaryLanguage ||
            e.some(
              (e) =>
                this.m_primaryLanguage === e ||
                this.m_secondaryLanguages.has(e),
            )
          );
        }
        GetRecommendedTags() {
          return this.m_setRecommendedTags;
        }
        BIsAjaxInFlight() {
          return this.m_bAjaxInFlight;
        }
        BIsAppRecommendedBySomeCurator(e) {
          return this.m_mapRecommendingCuratorsForApp.has(e);
        }
        GetRecommendingCuratorsForApp(e) {
          return this.m_mapRecommendingCuratorsForApp.get(e);
        }
        GetOwnedApps() {
          return this.m_setOwnedApps;
        }
        GetWishlistedApps() {
          return this.m_setWishList;
        }
        HintLoad() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.InternalLoad()),
              this.m_promise
            );
          });
        }
        InternalLoad() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = window.localStorage.getItem(c) || "0",
              t = {
                v: "0" == e ? void 0 : e,
                id: "" + p.L7.accountid,
                cc: "" + p.De.COUNTRY,
                origin: self.origin,
              },
              s = p.De.STORE_BASE_URL + "dynamicstore/userdata/";
            try {
              let e = yield n().get(s, { params: t, withCredentials: !0 });
              e &&
                200 == e.status &&
                (0, o.z)(() => {
                  if (((this.m_bIsLoaded = !0), e.data.rgCurators)) {
                    this.m_setCuratorsFollowed = new Set();
                    for (const t in e.data.rgCurators)
                      this.m_setCuratorsFollowed.add(Number(t));
                  }
                  if (
                    (e.data.rgCuratorsIgnored &&
                      (this.m_setCuratorsIgnored = new Set(
                        e.data.rgCuratorsIgnored.map((e) => Number(e)),
                      )),
                    e.data.rgWishlist &&
                      ((this.m_wishlistInOrder = e.data.rgWishlist.map((e) =>
                        Number(e),
                      )),
                      (this.m_setWishList = new Set(
                        e.data.rgWishlist.map((e) => Number(e)),
                      ))),
                    e.data.rgFollowedApps &&
                      (this.m_setFollowedApps = new Set(
                        e.data.rgFollowedApps.map((e) => Number(e)),
                      )),
                    e.data.rgOwnedApps &&
                      (this.m_setOwnedApps = new Set(
                        e.data.rgOwnedApps.map((e) => Number(e)),
                      )),
                    e.data.rgOwnedPackages &&
                      (this.m_setOwnedPackages = new Set(
                        e.data.rgOwnedPackages.map((e) => Number(e)),
                      )),
                    e.data.rgIgnoredApps)
                  ) {
                    const t = e.data.rgIgnoredApps;
                    this.m_mapIgnoredApps = new Map();
                    for (const e in t)
                      this.m_mapIgnoredApps.set(Number(e), Number(t[e]));
                  }
                  if (e.data.rgIgnoredPackages) {
                    const t = e.data.rgIgnoredPackages;
                    this.m_mapIgnoredPackages = new Map();
                    for (const e in t)
                      this.m_mapIgnoredPackages.set(Number(e), Number(t[e]));
                  }
                  if (
                    (e.data.rgExcludedTags &&
                      (this.m_setExcludedTagsIds = new Set(
                        e.data.rgExcludedTags.map((e) => Number(e.tagid)),
                      )),
                    e.data.rgExcludedContentDescriptorIDs &&
                      (this.m_setExcludedContentDescriptors = new Set(
                        e.data.rgExcludedContentDescriptorIDs.map((e) =>
                          Number(e),
                        ),
                      )),
                    e.data.rgRecommendedApps &&
                      ((this.m_recAppInOrder = e.data.rgRecommendedApps.map(
                        (e) => Number(e),
                      )),
                      (this.m_setRecommendedApps = new Set(
                        e.data.rgRecommendedApps.map((e) => Number(e)),
                      ))),
                    e.data.rgPreferredPlatforms &&
                      (this.m_setPreferredPlatforms = new Set(
                        e.data.rgPreferredPlatforms,
                      )),
                    e.data.bAllowAppImpressions &&
                      (this.m_bAllowAppImpressions =
                        e.data.bAllowAppImpressions),
                    (this.m_bShowFilteredUserReviewScores =
                      !!e.data.bShowFilteredUserReviewScores),
                    void 0 !== e.data.rgPrimaryLanguage &&
                      (this.m_primaryLanguage = e.data.rgPrimaryLanguage),
                    e.data.rgSecondaryLanguages &&
                      (this.m_secondaryLanguages = new Set(
                        e.data.rgSecondaryLanguages,
                      )),
                    e.data.rgRecommendedTags &&
                      (this.m_setRecommendedTags = new Set(
                        e.data.rgRecommendedTags.map((e) => e.tagid),
                      )),
                    e.data.rgAppsInCart &&
                      (this.m_setAppsInCart = new Set(e.data.rgAppsInCart)),
                    e.data.rgPackagesInCart &&
                      (this.m_setPackagesInCart = new Set(
                        e.data.rgPackagesInCart,
                      )),
                    e.data.nCartLineItemCount &&
                      (this.m_nCartLineItemCount = e.data.nCartLineItemCount),
                    e.data.rgCurations)
                  )
                    for (const t of Object.keys(e.data.rgCurations)) {
                      const s = [];
                      for (const r of Object.keys(e.data.rgCurations[t]))
                        e.data.rgCurations[t][r] ===
                          i.gC.k_EStoreCuratorRecommendationState_Recommended &&
                          s.push(Number(r));
                      this.m_mapRecommendingCuratorsForApp.set(Number(t), s);
                    }
                });
            } catch (e) {
              let t = (0, m.l)(e);
              console.error("CDynamicStore.InternalLoad", t.strErrorMsg, t);
            }
            return this;
          });
        }
        UpdateFollowOrIgnoreCurator(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r =
              p.De.STORE_BASE_URL +
              "curators/" +
              (t ? "ajaxfollow/" : "ajaxignore/");
            const a = e.GetAccountID(),
              o = new FormData();
            o.append("clanid", "" + a),
              o.append("sessionid", p.De.SESSIONID),
              o.append(t ? "follow" : "ignore", s ? "1" : "0");
            let i = yield n().post(r, o, { withCredentials: !0 });
            if (i && 200 == i.status) {
              this.InvalidateCache();
              const e = t
                ? this.m_setCuratorsFollowed
                : this.m_setCuratorsIgnored;
              s ? e.add(a) : e.delete(a);
            }
            return i.data;
          });
        }
        UpdateAppIgnore(
          e,
          t,
          s = i.kV.k_ERecommendationIgnoreReasonNotInterested,
        ) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = p.De.STORE_BASE_URL + "recommended/ignorerecommendation";
            const a = new FormData();
            a.append("sessionid", p.De.SESSIONID),
              a.append("appid", "" + e),
              a.append("remove", t ? "0" : "1"),
              a.append("snr", p.De.SNR),
              a.append("ignore_reason", "" + s);
            try {
              this.m_bAjaxInFlight = !0;
              let i = yield n().post(r, a, { withCredentials: !0 });
              return (
                i &&
                  200 == i.status &&
                  (0, o.z)(() => {
                    this.InvalidateCache(),
                      t
                        ? this.m_mapIgnoredApps.set(e, s)
                        : this.m_mapIgnoredApps.delete(e);
                  }),
                (this.m_bAjaxInFlight = !1),
                i.data
              );
            } catch (e) {
              let t = (0, m.l)(e);
              console.error("UpdateAppIgnore", t.strErrorMsg, t);
            }
            return (this.m_bAjaxInFlight = !1), { success: d.s.k_EResultFail };
          });
        }
        UpdateGameWishlist(e, t, s, a) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r =
              p.De.STORE_BASE_URL +
              "api/" +
              (t ? "addtowishlist" : "removefromwishlist");
            const o = new FormData();
            o.append("appid", "" + e),
              o.append("sessionid", p.De.SESSIONID),
              s && o.append("snr", s),
              (this.m_bAjaxInFlight = !0);
            let i = yield n().post(r, o, {
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
            if (((this.m_bAjaxInFlight = !1), a && a.token.reason))
              return { success: d.s.k_EResultCancelled };
            if (
              ((i.data.success =
                1 == i.data.success ? d.s.k_EResultOK : d.s.k_EResultFail),
              i.data.success == d.s.k_EResultOK)
            )
              if ((this.InvalidateCache(), (e = Number(e)), t))
                this.m_setWishList.has(e) || this.m_wishlistInOrder.push(e),
                  this.m_setWishList.add(e);
              else {
                if (this.m_setWishList.has(e)) {
                  const t = this.m_wishlistInOrder.findIndex((t) => t == e);
                  -1 != t && this.m_wishlistInOrder.splice(t, 1);
                }
                this.m_setWishList.delete(e);
              }
            return i.data;
          });
        }
        AddToCart(e, t, s, a, o, i, d) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = new FormData();
            r.append("action", "add_to_cart"),
              i
                ? r.append("bundleid", i.toString())
                : r.append("subid", "" + t),
              o && r.append("snr", o),
              r.append("sessionid", p.De.SESSIONID),
              r.append("quantity", "1");
            const m = (0, u.RA)(e);
            e.preventDefault();
            try {
              yield n().post(s, r, { withCredentials: !0 }),
                this.InvalidateCache(m),
                (null == d ? void 0 : d.fnSetURL)
                  ? d.fnSetURL(a)
                  : (m.location.href = a);
            } catch (e) {
              return console.log("HandleOnAddToCart", e), !1;
            }
            return !0;
          });
        }
        AddLicenseForFreeGame(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.BOwnsApp(e)) return d.s.k_EResultOK;
            try {
              const t = new FormData();
              t.append("sessionid", p.De.SESSIONID),
                t.append("appid", "" + e),
                t.append("cc", p.De.COUNTRY);
              let s =
                  p.De.STORE_BASE_URL + "actions/addappformastersubscription",
                r = yield n().post(s, t, { withCredentials: !0 });
              if (
                (this.InvalidateCache(),
                !r.data.success || r.data.success !== d.s.k_EResultOK)
              )
                return r.data.success ? r.data.success : d.s.k_EResultFail;
              this.m_setOwnedApps.add(Number(e));
            } catch (e) {
              let t = (0, m.l)(e);
              return (
                console.log("AddLicense request failed:", t.strErrorMsg, t),
                d.s.k_EResultFail
              );
            }
            return d.s.k_EResultOK;
          });
        }
        UpdateFollowingApp(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            try {
              const s = p.De.STORE_BASE_URL + "explore/followgame",
                r = new FormData();
              r.append("appid", "" + e),
                r.append("sessionid", p.De.SESSIONID),
                t || r.append("unfollow", "1");
              const a = yield n().post(s, r, { withCredentials: !0 });
              if (!a.data) return d.s.k_EResultFail;
              this.InvalidateCache(),
                t
                  ? this.m_setFollowedApps.add(Number(e))
                  : this.m_setFollowedApps.delete(Number(e));
            } catch (e) {
              return (
                console.log("Follow game request failed"), d.s.k_EResultFail
              );
            }
            return d.s.k_EResultOK;
          });
        }
        BHasPlatformPreferenceSet() {
          return (
            this.m_setPreferredPlatforms.size > 0 &&
            this.m_setPreferredPlatforms.size < 3
          );
        }
        BIsPreferredPlatform(e) {
          return this.m_setPreferredPlatforms.has(e);
        }
        InvalidateCache(e) {
          const t = e || window;
          t.localStorage.setItem(
            c,
            (Number.parseInt(t.localStorage.getItem(c) || "0") + 1).toString(),
          );
        }
        static Get() {
          return (
            g.s_globalSingletonStore ||
              ((g.s_globalSingletonStore = new g()),
              "dev" == p.De.WEB_UNIVERSE &&
                (window.DUS = g.s_globalSingletonStore)),
            g.s_globalSingletonStore
          );
        }
        constructor() {
          (this.m_setWishList = new Set()),
            (this.m_wishlistInOrder = Array()),
            (this.m_setOwnedPackages = new Set()),
            (this.m_setOwnedApps = new Set()),
            (this.m_setFollowedApps = new Set()),
            (this.m_setExcludedTagsIds = new Set()),
            (this.m_setExcludedContentDescriptors = new Set()),
            (this.m_setRecommendedApps = new Set()),
            (this.m_recAppInOrder = new Array()),
            (this.m_mapIgnoredApps = new Map()),
            (this.m_mapIgnoredPackages = new Map()),
            (this.m_setCuratorsFollowed = new Set()),
            (this.m_setCuratorsIgnored = new Set()),
            (this.m_bShowFilteredUserReviewScores = !0),
            (this.m_setPreferredPlatforms = new Set()),
            (this.m_bAllowAppImpressions = !1),
            (this.m_primaryLanguage = i.Df.k_Lang_None),
            (this.m_secondaryLanguages = new Set()),
            (this.m_setRecommendedTags = new Set()),
            (this.m_mapRecommendingCuratorsForApp = new Map()),
            (this.m_setPackagesInCart = new Set()),
            (this.m_setAppsInCart = new Set()),
            (this.m_nCartLineItemCount = 0),
            (this.m_bIsLoaded = !1),
            (this.m_bAjaxInFlight = !1);
        }
      }
      function h() {
        const [e, t] = (0, l.useState)(!g.Get().BIsLoaded());
        return (
          (0, l.useEffect)(() => {
            e &&
              g
                .Get()
                .HintLoad()
                .finally(() => t(!g.Get().BIsLoaded()));
          }, [e]),
          [e, g.Get()]
        );
      }
      (0, r.gn)([o.LO], g.prototype, "m_setWishList", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setOwnedPackages", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setOwnedApps", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setFollowedApps", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setExcludedTagsIds", void 0),
        (0, r.gn)(
          [o.LO],
          g.prototype,
          "m_setExcludedContentDescriptors",
          void 0,
        ),
        (0, r.gn)([o.LO], g.prototype, "m_setRecommendedApps", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_mapIgnoredApps", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_mapIgnoredPackages", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setCuratorsFollowed", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setCuratorsIgnored", void 0),
        (0, r.gn)(
          [o.LO],
          g.prototype,
          "m_bShowFilteredUserReviewScores",
          void 0,
        ),
        (0, r.gn)([o.LO], g.prototype, "m_primaryLanguage", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_secondaryLanguages", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setRecommendedTags", void 0),
        (0, r.gn)(
          [o.LO],
          g.prototype,
          "m_mapRecommendingCuratorsForApp",
          void 0,
        ),
        (0, r.gn)([o.LO], g.prototype, "m_setPackagesInCart", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_setAppsInCart", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_nCartLineItemCount", void 0),
        (0, r.gn)([o.LO], g.prototype, "m_bAjaxInFlight", void 0),
        (0, r.gn)([o.Fl], g.prototype, "ExcludedContentDescriptor", null),
        (0, r.gn)([o.aD], g.prototype, "UpdateAppIgnore", null);
    },
    32905: (e, t, s) => {
      s.d(t, { X: () => u, _: () => c });
      var r = s(89526),
        a = s(57742),
        n = s(14826),
        o = s(32765),
        i = s(88390),
        d = s(7786),
        m = s(19094),
        p = s(79925);
      function l(e) {
        return r.createElement(
          a.e1,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          r.createElement(g, { redirectURL: e.redirectURL }),
        );
      }
      function u() {
        (0, a.AM)(
          r.createElement(l, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, n.Xx)("#Login_SignIn") },
        );
      }
      function c(e) {
        (0, a.AM)(
          r.createElement(l, { ownerWin: window, redirectURL: e }),
          window,
          { strTitle: (0, n.Xx)("#Login_SignIn") },
        );
      }
      function g(e) {
        const { redirectURL: t } = e,
          [s] = (0, r.useState)(
            new m.J(o.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [a, n] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          null,
          a
            ? r.createElement(i.pT, null)
            : r.createElement(i.wK, {
                autoFocus: !0,
                transport: s,
                platform: d.hn.k_EAuthTokenPlatformType_WebBrowser,
                onComplete: (e) => {
                  e == p.TG.k_PrimaryDomainFail
                    ? n(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
                theme: "modal",
              }),
        );
      }
    },
  },
]);
