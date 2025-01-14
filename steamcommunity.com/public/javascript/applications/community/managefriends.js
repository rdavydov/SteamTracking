/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8647],
  {
    20730: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Heading: "managefriends_Heading_1lIY_",
        Body: "managefriends_Body_1JDe7",
        HeaderBlock: "managefriends_HeaderBlock_3n-KU",
        Background: "managefriends_Background_OtPIj",
        DimBackground: "managefriends_DimBackground_2kSJm",
        Input: "managefriends_Input_BRkPz",
        CopyContainer: "managefriends_CopyContainer_2r_KS",
        Text: "managefriends_Text_3NGNC",
        Link: "managefriends_Link_3RoxO",
        Button: "managefriends_Button_1ARlQ",
        GenerateLinkButton: "managefriends_GenerateLinkButton_1TX0d",
        ProfileCard: "managefriends_ProfileCard_2a7rs",
        UserContainer: "managefriends_UserContainer_vSokQ",
        Image: "managefriends_Image_vQTKB",
        ProfileContent: "managefriends_ProfileContent_29EO2",
        ProfileLink: "managefriends_ProfileLink_14jbp",
        Failure: "managefriends_Failure_30nEP",
        Success: "managefriends_Success_1NPlB",
        FriendCodeSelector: "managefriends_FriendCodeSelector_35N5F",
        SendInviteButton: "managefriends_SendInviteButton_3Izq1",
      };
    },
    4556: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a, W: () => s });
      var r = n(32765);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let a = r.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = r.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += n),
          a
        );
      }
    },
    24448: (e, t, n) => {
      "use strict";
      n.d(t, { Gr: () => g, Jq: () => f, y$: () => p });
      var r = n(33940),
        s = n(52868),
        a = n.n(s),
        i = n(50265),
        o = n(89526),
        d = n(4556),
        l = n(47165),
        c = n(23801),
        u = n(23217),
        m = n(32765);
      class _ {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0, c.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let r = m.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              s = a().get(r, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, s));
            let i = yield s;
            i.data &&
              200 == i.status &&
              i.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, d.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, d.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, d.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? m.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : m.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, r.gn)([i.LO], _.prototype, "m_mapProfiles", void 0);
      const p = new _();
      function g(e) {
        const t = o.useMemo(
            () => (e ? ("string" == typeof e ? new l.K(e) : e) : null),
            [e],
          ),
          [n, r] = (0, o.useState)(!!t && !p.BHasProfileBySteamID(t));
        (0, o.useEffect)(() => {
          const e = a().CancelToken.source();
          return (
            t &&
              !p.BHasProfileBySteamID(t) &&
              p
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const n = (0, u.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      n.strErrorMsg,
                    n,
                  );
                })
                .finally(() => {
                  e.token.reason || r(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [n, !!t && p.GetProfileBySteamID(t)];
      }
      function f(e) {
        return g(o.useMemo(() => (e ? l.K.InitFromAccountID(e) : null), [e]));
      }
      window.g_ProfileStore = p;
    },
    78307: (e, t, n) => {
      "use strict";
      n.d(t, { aX: () => E, gu: () => S });
      var r = n(33940),
        s = n(89526),
        a = n(4306),
        i = n(52868),
        o = n.n(i),
        d = n(57605),
        l = n(14826),
        c = n(20730),
        u = n.n(c),
        m = n(32765),
        _ = n(47165),
        p = n(60161),
        g = n(24448),
        f = n(42735),
        h = n(701),
        v = n(77435),
        C = n(44026);
      class S extends s.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              invite_token: "",
              input_search: "",
              friend_code_copied: !1,
              invite_copied: !1,
            });
        }
        componentDidMount() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const e = yield o().get(
              m.De.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              { params: { sessionid: m.De.SESSIONID } },
            );
            if (e && e.data && e.data.tokens) {
              const t = e.data.tokens.filter((e) => e.valid);
              t.length
                ? this.setState({ invite_token: t[0].invite_token })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          });
        }
        OnCreateInviteLink() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const e = new FormData();
            e.append("sessionid", m.De.SESSIONID),
              e.append("steamid_user", m.L7.steamid),
              e.append("duration", (2592e3).toString());
            const t = yield o().post(
              m.De.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              e,
            );
            t &&
              t.data &&
              t.data.invite &&
              this.setState({ invite_token: t.data.invite.invite_token });
          });
        }
        OnCopy(e, t) {
          "friend_code" === e &&
            (this.setState({ friend_code_copied: !0 }),
            setTimeout(() => this.setState({ friend_code_copied: !1 }), 1e3)),
            "invite" === e &&
              (this.setState({ invite_copied: !0 }),
              setTimeout(() => this.setState({ invite_copied: !1 }), 1e3)),
            (0, p.Ei)(t);
        }
        OnAddFriend(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", m.De.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0");
            try {
              const e = yield o().post(
                m.De.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                t,
              );
              return e && e.data && e.data.success == f.s.k_EResultOK;
            } catch (e) {
              return !1;
            }
          });
        }
        OnSearchChange(e) {
          this.setState({ input_search: e.target.value });
        }
        OnSearchKeyDown(e) {
          e.keyCode === v.J.Enter && this.OnSearchSubmit();
        }
        OnSearchSubmit() {
          window.open(
            m.De.COMMUNITY_BASE_URL +
              "search/users/#text=" +
              encodeURIComponent(this.state.input_search),
            "_self",
          );
        }
        render() {
          const e = m.L7.short_url + "/" + this.state.invite_token;
          return s.createElement(
            "div",
            null,
            s.createElement(
              "div",
              { className: u().HeaderBlock },
              (0, l.Xx)("#ManageFriends_AddAFriend"),
            ),
            s.createElement(
              "div",
              { className: u().Background },
              s.createElement(
                "h1",
                { className: u().Heading },
                (0, l.Xx)("#ManageFriends_YourFriendCode"),
              ),
              s.createElement(
                "div",
                { className: u().CopyContainer },
                s.createElement("h1", { className: u().Text }, m.L7.accountid),
                s.createElement(
                  d.KM,
                  {
                    autoFocus: !0,
                    className: u().Button,
                    onClick: () =>
                      this.OnCopy("friend_code", String(m.L7.accountid)),
                  },
                  this.state.friend_code_copied
                    ? (0, l.Xx)("#ManageFriends_Copied")
                    : (0, l.Xx)("#ManageFriends_Copy"),
                ),
              ),
              s.createElement(
                "p",
                { className: u().Body },
                (0, l.Xx)("#ManageFriends_EnterFriendCode"),
              ),
              s.createElement(E, {
                onButtonClick: this.OnAddFriend,
                buttonText: (0, l.Xx)("#ManageFriends_SendInvite"),
                bDisableForSelf: !0,
                bDisableForFriends: !0,
                bShowStatus: !0,
              }),
            ),
            s.createElement(
              "div",
              { className: u().DimBackground },
              s.createElement(
                "h1",
                { className: u().Heading },
                (0, l.Xx)("#ManageFriends_OrSendQuickInvite"),
              ),
              s.createElement(
                "p",
                { className: u().Body },
                (0, l.Xx)("#ManageFriends_QuickInviteDescription"),
              ),
              s.createElement(
                "p",
                { className: u().Body },
                (0, l.Xx)("#ManageFriends_QuickInviteNote"),
              ),
              s.createElement(
                "div",
                { className: u().CopyContainer },
                Boolean(this.state.invite_token) &&
                  s.createElement("div", { className: u().Link }, e),
                s.createElement(
                  d.KM,
                  {
                    className: u().Button,
                    onClick: () => this.OnCopy("invite", e),
                  },
                  this.state.invite_copied
                    ? (0, l.Xx)("#ManageFriends_Copied")
                    : (0, l.Xx)("#ManageFriends_Copy"),
                ),
              ),
              s.createElement(
                d.zx,
                {
                  className: u().GenerateLinkButton,
                  onClick: this.OnCreateInviteLink,
                },
                (0, l.Xx)("#ManageFriends_CreateInviteLink"),
              ),
            ),
            s.createElement(
              "div",
              { className: u().Background },
              s.createElement(
                "h1",
                { className: u().Heading },
                (0, l.Xx)("#ManageFriends_OrSearch"),
              ),
              s.createElement("br", null),
              s.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "598px",
                    position: "relative",
                  },
                },
                s.createElement(
                  "div",
                  { style: { width: "100%" } },
                  s.createElement(d.II, {
                    className: u().Input,
                    onKeyDown: this.OnSearchKeyDown,
                    value: this.state.input_search,
                    onChange: this.OnSearchChange,
                    placeholder: (0, l.Xx)("#ManageFriends_EnterProfileName"),
                  }),
                ),
                s.createElement(
                  "div",
                  {
                    id: "searchIcon",
                    style: {
                      position: "absolute",
                      right: "10px",
                      cursor: "pointer",
                    },
                    onClick: this.OnSearchSubmit,
                  },
                  s.createElement(h.YtI, null),
                ),
              ),
            ),
          );
        }
      }
      (0, r.gn)([a.ak], S.prototype, "OnCreateInviteLink", null),
        (0, r.gn)([a.ak], S.prototype, "OnCopy", null),
        (0, r.gn)([a.ak], S.prototype, "OnAddFriend", null),
        (0, r.gn)([a.ak], S.prototype, "OnSearchChange", null),
        (0, r.gn)([a.ak], S.prototype, "OnSearchKeyDown", null),
        (0, r.gn)([a.ak], S.prototype, "OnSearchSubmit", null);
      class E extends s.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              input_friend_code: "",
              disable_send_invite: !1,
              searchResult: null,
              invite_status: "pending",
            }),
            (this.m_currentRequest = 0);
        }
        OnFriendCodeChange(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = e.target.value.split(",")[0];
            this.setState({ input_friend_code: t, invite_status: "pending" }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(t),
                500,
              ));
          });
        }
        LoadProfile(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (e) {
              const t = _.K.InitFromAccountID(Number(e));
              yield g.y$.LoadProfiles([t.ConvertTo64BitString()]);
              const n = g.y$.GetProfile(t.ConvertTo64BitString());
              n
                ? this.setState({
                    searchResult: n,
                    disable_send_invite:
                      m.L7.is_limited ||
                      (this.props.bDisableForFriends && n.is_friend) ||
                      (this.props.bDisableForSelf &&
                        n.steamid === m.L7.steamid),
                  })
                : this.setState({ searchResult: null });
            } else this.setState({ searchResult: null });
          });
        }
        OnActionClick(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = new FormData();
            t.append("sessionID", m.De.SESSIONID),
              t.append("steamid", e),
              t.append("accept_invite", "0"),
              this.setState({ disable_send_invite: !0 });
            (yield this.props.onButtonClick(e))
              ? (this.setState({
                  input_friend_code: "",
                  invite_status: "success",
                }),
                setTimeout(() => this.setState({ searchResult: null }), 3e3))
              : this.setState({
                  invite_status: "failure",
                  disable_send_invite: !1,
                });
          });
        }
        render() {
          return s.createElement(
            "div",
            { className: u().FriendCodeSelector },
            s.createElement(d.II, {
              className: u().Input,
              value: this.state.input_friend_code,
              onChange: this.OnFriendCodeChange,
              placeholder: (0, l.Xx)(
                "#ManageFriends_EnterFriendCodePlaceholder",
              ),
            }),
            s.createElement(
              I,
              {
                searchResult: this.state.searchResult,
                invite_status: this.state.invite_status,
                bShowStatus: this.props.bShowStatus,
              },
              s.createElement(
                d.KM,
                {
                  className: u().SendInviteButton,
                  onClick: () =>
                    this.OnActionClick(this.state.searchResult.steamid),
                  disabled: this.state.disable_send_invite,
                },
                this.props.buttonText,
              ),
            ),
          );
        }
      }
      (0, r.gn)([a.ak], E.prototype, "OnFriendCodeChange", null),
        (0, r.gn)([a.ak], E.prototype, "LoadProfile", null),
        (0, r.gn)([a.ak], E.prototype, "OnActionClick", null);
      const I = (e) => {
        const {
            searchResult: t,
            invite_status: n,
            bShowStatus: r,
            children: a,
          } = e,
          i = (0, m.id)();
        return Boolean(t)
          ? s.createElement(
              "div",
              { className: u().ProfileCard },
              s.createElement(
                "div",
                { className: u().UserContainer },
                s.createElement(
                  "div",
                  { className: u().Image },
                  s.createElement("img", {
                    style: { width: "100%", height: "100%" },
                    src: t.avatar_url_full,
                  }),
                ),
                s.createElement(
                  "div",
                  { className: u().ProfileContent },
                  s.createElement(
                    "h1",
                    { className: u().Heading },
                    t.persona_name,
                  ),
                  s.createElement(
                    "div",
                    { className: u().ProfileLink },
                    s.createElement(
                      C.IS,
                      {
                        target: i ? void 0 : "_blank",
                        href: m.De.COMMUNITY_BASE_URL + "profiles/" + t.steamid,
                      },
                      (0, l.Xx)("#ManageFriends_ProfileLink"),
                    ),
                    s.createElement("br", null),
                    s.createElement(
                      "span",
                      { className: u().Body },
                      t.real_name,
                      s.createElement("br", null),
                      `${t.city}${t.city ? "," : ""} ${t.state}${
                        t.state ? "," : ""
                      } ${t.country}`,
                    ),
                  ),
                ),
                a,
              ),
              s.createElement(
                "div",
                { className: u().ProfileLink },
                t.is_friend &&
                  s.createElement(
                    "div",
                    null,
                    (0, l.Xx)("#ManageFriends_IsFriend"),
                  ),
                0 != t.friends_in_common &&
                  s.createElement(
                    "div",
                    null,
                    s.createElement(
                      C.IS,
                      {
                        target: i ? void 0 : "_blank",
                        href:
                          m.De.COMMUNITY_BASE_URL +
                          "profiles/" +
                          t.steamid +
                          "/friendscommon",
                      },
                      1 === t.friends_in_common
                        ? (0, l.Xx)(
                            "#ManageFriends_FriendsInCommonSingular",
                            t.friends_in_common,
                          )
                        : (0, l.Xx)(
                            "#ManageFriends_FriendsInCommon",
                            t.friends_in_common,
                          ),
                    ),
                  ),
                r &&
                  "failure" === n &&
                  s.createElement(
                    "div",
                    { className: u().Failure },
                    (0, l.Xx)("#ManageFriends_InviteFailure"),
                  ),
                r &&
                  "success" === n &&
                  s.createElement(
                    "div",
                    { className: u().Success },
                    (0, l.Xx)("#ManageFriends_InviteSuccess", t.persona_name),
                  ),
              ),
            )
          : null;
      };
    },
    23217: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      var r = n(42735),
        s = n(52868),
        a = n.n(s),
        i = n(67328);
      function o(e) {
        if (a().isCancel(e))
          return {
            strErrorMsg: "Action Cancelled:" + e,
            errorCode: r.s.k_EResultCancelled,
          };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof i.gA)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: r.s.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + e,
              errorCode: r.s.k_EResultFail,
            };
      }
    },
    16258: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var r = n(89526),
        s = n(78307);
      function a() {
        return r.createElement(s.gu, null);
      }
    },
  },
]);
