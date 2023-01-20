/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6633],
  {
    25130: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    86605: (e, t, a) => {
      "use strict";
      a.d(t, { Q8: () => g });
      var n = a(70655),
        s = a(22188),
        r = a(26149),
        i = a(58114),
        o = a(40252),
        m = a(22154),
        p = (a(64010), a(68002)),
        l = a(77520),
        c = a(99533),
        h = a(90666);
      class A {
        constructor() {
          (this.m_mapAppInfo = s.LO.map()),
            (this.m_mapRichPresenceLoc = s.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new c.pB());
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, l.X)(
                !1,
                "Registering for callback on appinfo load, but nothing queued"
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, l.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new o.Am(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e)
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        FlushPendingAppInfo() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              e();
          });
        }
        LoadAppInfoBatch(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = i.gA.Init(p.Fi);
              e.Body().set_language((0, r.jM)(h.De.LANGUAGE));
              const a = 50;
              for (; t.length > 0; ) {
                const n = Math.min(a, t.length),
                  s = t.slice(0, n);
                (t = t.slice(n)), e.Body().set_appids(s);
                const r = yield p.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == r.GetEResult()
                  ? this.OnGetAppsResponse(r)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${r.GetEResult()}, AppIDs:`,
                      s
                    );
              }
            }
            0 == --this.m_cAppInfoRequestsInFlight &&
              0 == this.m_setPendingAppInfo.size &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          });
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let a of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(a.appid());
            (0, l.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${a.appid()}`
            ),
              e &&
                ((e = new o.Am(a.appid())),
                e.DeserializeFromMessage(a),
                this.m_mapAppInfo.set(a.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let a = this.m_mapAppInfo.get(e);
                a
                  ? a.is_valid || (t = !0)
                  : ((a = new o.Am(e)),
                    this.m_mapAppInfo.set(e, a),
                    this.QueueAppInfoRequest(e),
                    (t = !0));
              }),
              t && void 0 !== this.m_PendingAppInfoPromise
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          });
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        LoadAppInfoBatchFromLocalCache(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              a = (e) =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  const a = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!a) return e;
                  let n = this.m_mapAppInfo.get(e);
                  return (
                    (0, l.X)(
                      n,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    n
                      ? ((n = new o.Am(e)),
                        n.DeserializeFromCacheObject(a),
                        n.is_initialized
                          ? (this.m_mapAppInfo.set(e, n),
                            n.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              a
                            ),
                            e))
                      : e
                  );
                });
            let s = e.map((e) => a(e));
            return (yield Promise.all(s)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid)
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e
                  );
              }
            }
          });
        }
        Localize(e, t, a) {
          const n = this.GetRichPresenceLoc(e);
          return n
            ? n.Localize(t, a)
            : 1 != h.De.EUNIVERSE
            ? (console.log(
                `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`
              ),
              t)
            : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * o.x3 < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new m.v(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let a of t) {
            let t = a.language(),
              n = e.m_mapLanguages.get(t);
            n
              ? n.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (n = e.m_mapLanguages.get(t)));
            for (let e of a.tokens()) n.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = i.gA.Init(p.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(h.De.LANGUAGE),
                    p.AE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists()
                        ),
                        Promise.resolve(e))
                  )
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, n.gn)([s.aD], A.prototype, "OnGetAppsResponse", null),
        (0, n.gn)([s.aD], A.prototype, "OnRichPresenceLocUpdate", null);
      const g = new A();
    },
    93981: (e, t, a) => {
      "use strict";
      a.d(t, { Pv: () => c, sB: () => l });
      var n = a(70655),
        s = a(22188),
        r = a(27661),
        i = a(86605),
        o = a(41311),
        m = (a(92398), a(21205), a(90666)),
        p = (a(3389), a(43359));
      function l(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
              ? (t = "watchingbroadcast")
              : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class c {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = p.W),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = s.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          return 0 != (2 & this.m_unPersonaStateFlags);
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(e) {
          return 0 != (this.m_unPersonaStateFlags & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          0 != this.m_ePersonaState && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(4);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? i.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            i.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        HasRichPresenceForViewGameInfo() {
          return !!(
            this.m_mapRichPresence.has("status") ||
            this.m_mapRichPresence.has("connect") ||
            this.m_mapRichPresence.has("connect_private")
          );
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = i.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, o.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const a = i.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!m.De.IN_MOBILE || e <= 60) && (0, r.zO)(e);
          let t = i.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, o.Xx)("#PersonaStateLastSeen", (0, o.yW)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, o.Xx)("#PersonaStateOnline");
            case 2:
              return (0, o.Xx)("#PersonaStateBusy");
            case 3:
              return (0, o.Xx)("#PersonaStateAway");
            case 4:
              return (0, o.Xx)("#PersonaStateSnooze");
            case 5:
              return (0, o.Xx)("#PersonaStateLookingToTrade");
            case 6:
              return (0, o.Xx)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size")
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
              ? "watchingbroadcast"
              : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != p.W;
        }
        get avatar_url() {
          return (0, p.U)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, p.U)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, p.U)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, a) {
          if (t.has_public_party_beacon) {
            if (!a.has_public_party_beacon) return -1;
          } else {
            if (a.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!a.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            } else if (a.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!a.is_online) return -1;
          } else if (a.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!a.is_awayOrSnooze) return 1;
            } else if (a.is_awayOrSnooze) return -1;
          return 0;
        }
      }
      (0, n.gn)([s.LO], c.prototype, "m_bInitialized", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_ePersonaState", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_gameid", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_strPlayerName", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_strAvatarHash", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_strAccountName", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_strGameExtraInfo", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_unGameServerIP", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_unGameServerPort", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_game_lobby_id", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_bPlayerNamePending", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_bAvatarPending", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_broadcastId", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_broadcastAccountId", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_broadcastAppId", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_broadcastViewerCount", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_strBroadcastTitle", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_bCommunityBanned", void 0);
    },
    44298: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => A, _1: () => u, DY: () => _, vV: () => g });
      var n = a(70655),
        s = a(67294),
        r = a(29323),
        i = a(93981),
        o = a(7573),
        m = (a(18330), a(90666)),
        p = a(60501);
      const l =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var c = a(25130),
        h = a.n(c);
      class A extends s.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: r,
              statusStyle: i,
              statusPosition: m,
              children: c,
            } = e,
            A = (0, n._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            g = [];
          return (
            t && g.push(t),
            g.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return l;
                }
              })(a)
            ),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    h().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    r
                  ),
                },
                A
              ),
              s.createElement("div", {
                className: (0, o.Z)(h().avatarStatus, "avatarStatus", m),
                style: i,
              }),
              s.createElement(p.j, {
                className: (0, o.Z)(h().avatar, "avatar"),
                rgSources: g,
                draggable: !1,
              }),
              c
            )
          );
        }
      }
      let g = class extends s.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: r, className: p } = e,
            l = (0, n._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let c = "";
          return (
            r && r.image_small && 0 != r.image_small.length
              ? (c = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
              : t &&
                ((c = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (c = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (c = t.avatar_url_full)),
            s.createElement(
              A,
              Object.assign(
                {
                  strAvatarURL: c,
                  size: a,
                  className: (0, o.Z)((0, i.sB)(t), p),
                },
                l
              )
            )
          );
        }
      };
      g = (0, n.gn)([r.Pi], g);
      const _ = (0, r.Pi)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: r } = e,
          i = (0, n._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let p = r ? t.image_large : t.image_small;
        return (
          p || (p = t.image_small),
          p.startsWith("https://") ||
            (p = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + p),
          s.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(h().avatarFrame, a, "avatarFrame") },
              i
            ),
            s.createElement("img", { className: h().avatarFrameImg, src: p })
          )
        );
      });
      let u = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e
            ));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration &&
                (this.setState({ bAnimate: !0 }), this.StopAnimationTimer()));
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: a,
              avatarFrame: r,
              children: i,
              style: o,
            } = e,
            m = (0, n._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
            ]);
          return (
            m.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
            s.createElement(
              g,
              Object.assign({ animatedAvatar: a }, m),
              i,
              s.createElement(_, {
                profileItem: r,
                bDisableAnimation: "None" === this.props.loopDuration,
              })
            )
          );
        }
      };
      u = (0, n.gn)([r.Pi], u);
    },
    5827: (e, t, a) => {
      "use strict";
      a.d(t, { Mr: () => o, tk: () => m });
      var n = a(67294),
        s = a(95598),
        r = a(57376),
        i = a(90666);
      function o() {
        return (0, i.id)(), n.createElement(s.MrB, null);
      }
      function m() {
        return (0, i.id)()
          ? n.createElement(r.tkI, null)
          : n.createElement(s.tkI, null);
      }
    },
    60501: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => i });
      var n = a(70655),
        s = a(67294),
        r = a(64839);
      class i extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = s.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: a, onIncrementalError: r, onError: i } = e,
            o = (0, n._T)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            m = this.src;
          return s.createElement(
            "img",
            Object.assign({ src: m, ref: this.m_refImage }, o, {
              onError: this.OnImageError,
            })
          );
        }
      }
      (0, n.gn)([r.ak], i.prototype, "OnImageError", null);
    },
  },
]);