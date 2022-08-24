/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7762],
  {
    49541: (e) => {
      e.exports = {
        Background: "steamml_Background_msjGf",
        SteamMLButton: "steamml_SteamMLButton_2yReX",
        AcceptButton: "steamml_AcceptButton_2tY__",
        Inner: "steamml_Inner_1Zoc2",
        CancelButton: "steamml_CancelButton_2BCE0",
        Disabled: "steamml_Disabled_1W_vx",
        FullSize: "steamml_FullSize_1-nKc",
        Header: "steamml_Header_35ajn",
        HeaderOption: "steamml_HeaderOption_3KFf6",
        Selected: "steamml_Selected_OilN-",
        SchemaPage: "steamml_SchemaPage_36OV-",
        SchemaList: "steamml_SchemaList_3r0tl",
        SelectAppID: "steamml_SelectAppID_3nezX",
        Hidden: "steamml_Hidden_1VPtl",
        SchemaElement: "steamml_SchemaElement_1xjli",
        Label: "steamml_Label_3uE4k",
        SchemaName: "steamml_SchemaName_36bwA",
        AppID: "steamml_AppID_3Uaeb",
        HorizontalSection: "steamml_HorizontalSection_1rTEk",
        RowCount: "steamml_RowCount_gPsPX",
        KeepCount: "steamml_KeepCount_2RxON",
        SchemaDetails: "steamml_SchemaDetails_1gFQf",
        Back: "steamml_Back_2m9wk",
        SchemaDetailsHeader: "steamml_SchemaDetailsHeader_cUNhZ",
        SchemaDetailsBack: "steamml_SchemaDetailsBack_15COw",
        SchemaDetailsTitle: "steamml_SchemaDetailsTitle_9IFUR",
        SchemaDetailsName: "steamml_SchemaDetailsName_CblW8",
        SchemaDetailsSchemaID: "steamml_SchemaDetailsSchemaID_16qUh",
        SchemaDetailsElements: "steamml_SchemaDetailsElements_3Dsdf",
        SchemaDetailsElement: "steamml_SchemaDetailsElement_2_-ub",
        SchemaDetailsElementBody: "steamml_SchemaDetailsElementBody_1lLqQ",
        TypeInt32: "steamml_TypeInt32_3q6FZ",
        TypeName: "steamml_TypeName_11e6z",
        TypeInt64: "steamml_TypeInt64_1sUna",
        TypeBool: "steamml_TypeBool_3QiDC",
        TypeFloat: "steamml_TypeFloat_DfgR3",
        TypeEnum: "steamml_TypeEnum_3w9sP",
        TypeTimestamp: "steamml_TypeTimestamp_33yo7",
        ElementName: "steamml_ElementName_1v_wK",
        SchemaDetailsStructRow: "steamml_SchemaDetailsStructRow_lWQfK",
        CollapseIcon: "steamml_CollapseIcon_1vRxM",
        Collapsed: "steamml_Collapsed_3qRbu",
        StructIndent: "steamml_StructIndent_1bga0",
        IndentCollapsed: "steamml_IndentCollapsed_1OU7X",
        ProblemPage: "steamml_ProblemPage_3F8_L",
        ProblemListContainer: "steamml_ProblemListContainer_35Ll4",
        ProblemListHeader: "steamml_ProblemListHeader_21PbN",
        NoProblems: "steamml_NoProblems_IRyHO",
        ProblemEntry: "steamml_ProblemEntry_13BKE",
        ProblemName: "steamml_ProblemName_3Hgxj",
        Inactive: "steamml_Inactive_TW09g",
        ProblemDescription: "steamml_ProblemDescription_3qnlN",
        ProblemID: "steamml_ProblemID_2yjPq",
        Dates: "steamml_Dates_3jJSR",
        CreatedDate: "steamml_CreatedDate_3nOnI",
        UpdatedDate: "steamml_UpdatedDate_3gM54",
        ProblemSchemaList: "steamml_ProblemSchemaList_2k2xZ",
        AddNewProblem: "steamml_AddNewProblem_1IaIK",
        IsPrompt: "steamml_IsPrompt_1F_iV",
        NewProblemHeader: "steamml_NewProblemHeader_2Uxe1",
        PlusSymbol: "steamml_PlusSymbol_2zfyC",
        NewProblemDescription: "steamml_NewProblemDescription_3vIDf",
        IsHeader: "steamml_IsHeader_1vZgE",
        AddProblemHeader: "steamml_AddProblemHeader_3dXuk",
        LabelValue: "steamml_LabelValue_3wqW3",
        Value: "steamml_Value_3RWed",
        SchemaListContainer: "steamml_SchemaListContainer_3TzDR",
        SchemaSelectListTitle: "steamml_SchemaSelectListTitle_37bp6",
        ButtonContainer: "steamml_ButtonContainer_Sp68r",
        SchemaSelectList: "steamml_SchemaSelectList_3spVx",
        SchemaOption: "steamml_SchemaOption_2eV2T",
        ProblemDetails: "steamml_ProblemDetails_UGqiq",
        BackButton: "steamml_BackButton_1Sb8R",
        ProblemDetailsHeaderContainer:
          "steamml_ProblemDetailsHeaderContainer_28zUx",
        ProblemNameEditing: "steamml_ProblemNameEditing_2268o",
        ProblemDescEditing: "steamml_ProblemDescEditing_VSvOs",
        SchemaListHeader: "steamml_SchemaListHeader_3rvzl",
        SchemaListEdit: "steamml_SchemaListEdit_1Ch8t",
        DeleteLink: "steamml_DeleteLink_2lI41",
      };
    },
    82946: (e, t, a) => {
      "use strict";
      a(26149);
    },
    93976: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => r });
      a(26149);
      var m = a(9669),
        s = a.n(m),
        l = a(58114);
      function r(e) {
        if (s().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
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
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof l.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    93974: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SteamMLRoutes: () => M, default: () => R });
      var m,
        s = a(9355),
        l = a(67294),
        r = a(73727),
        n = a(5977),
        i = a(49541),
        c = a(90666),
        o = a(22188),
        d = a(70655),
        p = (a(92398), a(9669)),
        S = a.n(p);
      a(93976), a(82946), a(3389);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(m || (m = {}));
      class u {
        constructor() {
          (this.eState = m.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, t, a) {
          const s = this.eState == m.Pending || this.eState == m.Rerequest;
          return (
            this.isExpired() &&
              !s &&
              ((this.eState = m.Pending),
              t()
                .then((s) => {
                  if (this.eState == m.Rerequest)
                    return this.expireData(), void this.getData(e, t, a);
                  (this.data = a ? a(s) : s),
                    s
                      ? (this.delayNewData(e), (this.eState = m.Valid))
                      : (this.eState = m.Failed);
                })
                .catch((e) => {
                  (this.data = a(void 0)), (this.eState = m.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = m.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = m.Pending;
        }
        isDataPending() {
          return this.eState == m.Pending;
        }
        setData(e, t) {
          (this.data = t), this.delayNewData(e), (this.eState = m.Valid);
        }
        expireData() {
          this.nExpirationTime = 0;
        }
        isExpired() {
          const e = Date.now() / 1e3;
          return this.nExpirationTime < e;
        }
        delayNewData(e) {
          if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
          else {
            const t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }
        }
        rerequestDataIfPending() {
          this.eState == m.Pending && (this.eState = m.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      (0, d.gn)([o.LO], u.prototype, "data", void 0),
        (0, d.gn)([o.LO], u.prototype, "nExpirationTime", void 0);
      class h {
        constructor() {
          this.m_mapKeyToDataWrapper = new Map();
        }
        getAsyncDataWrapper(e) {
          let t;
          return (
            this.m_mapKeyToDataWrapper.has(e)
              ? (t = this.m_mapKeyToDataWrapper.get(e))
              : ((t = new u()), this.m_mapKeyToDataWrapper.set(e, t)),
            t
          );
        }
        clearKey(e) {
          this.m_mapKeyToDataWrapper.has(e) &&
            this.m_mapKeyToDataWrapper.get(e).clearData(),
            this.m_mapKeyToDataWrapper.delete(e);
        }
        getAllElements() {
          return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
            e.getCachedData()
          );
        }
        getAllElementsAndKeys() {
          let e = [],
            t = this.m_mapKeyToDataWrapper.entries(),
            a = t.next();
          for (; !a.done; )
            e.push({ key: a.value[0], data: a.value[1].getCachedData() }),
              (a = t.next());
          return e;
        }
      }
      (0, d.gn)([o.LO], h.prototype, "m_mapKeyToDataWrapper", void 0);
      var _ = a(33019);
      a(40110);
      _.Message;
      _.Message;
      class E {
        constructor() {
          (this.m_asyncSchemaList = new h()),
            (this.m_asyncSchemaDetails = new h()),
            (this.m_asyncProblemList = new u()),
            (this.m_asyncProblemDetails = new h());
        }
        static Get() {
          return (
            E.s_SteamMLStore ||
              ((E.s_SteamMLStore = new E()), E.s_SteamMLStore.Init()),
            E.s_SteamMLStore
          );
        }
        Init() {}
        GetSchemaList(e, t) {
          const a = e + "_" + t;
          return this.m_asyncSchemaList.getAsyncDataWrapper(a).getData(
            30,
            () =>
              (0, d.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${c.De.PARTNER_BASE_URL}steamml/get_schemas?appid=${e}&includesteammlapp=${t}&sessionid=${c.De.SESSIONID}`
                );
              }),
            (e) => e.data.schemas
          );
        }
        GetSchemaDetails(e, t) {
          return this.m_asyncSchemaDetails.getAsyncDataWrapper(t).getData(
            30,
            () =>
              (0, d.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${c.De.PARTNER_BASE_URL}steamml/get_schema_details?appid=${e}&schemaid=${t}&sessionid=${c.De.SESSIONID}`
                );
              }),
            (e) => JSON.parse(e.data.schema_description_json)
          );
        }
        GetProblemList() {
          return this.m_asyncProblemList.getData(
            30,
            () =>
              (0, d.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${c.De.PARTNER_BASE_URL}steamml/get_problems?sessionid=${c.De.SESSIONID}`
                );
              }),
            (e) => e.data.problems
          );
        }
        GetProblemDetails(e) {
          return this.m_asyncProblemDetails.getAsyncDataWrapper(e).getData(
            30,
            () =>
              (0, d.mG)(this, void 0, void 0, function* () {
                return yield S().get(
                  `${c.De.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${e}&sessionid=${c.De.SESSIONID}`
                );
              }),
            (e) => e.data.problem
          );
        }
        CreateProblem(e, t, a) {
          let m = new FormData();
          return (
            m.append("sessionid", c.De.SESSIONID),
            m.append("name", e),
            m.append("description", t),
            m.append("schemaids", a.join(",")),
            S()
              .post(`${c.De.PARTNER_BASE_URL}steamml/create_problem`, m)
              .then(() => {
                this.m_asyncProblemList.clearData();
              })
          );
        }
        EditProblemName(e, t) {
          let a = new FormData();
          a.append("name", t), this.EditProblem(e, a);
        }
        EditProblemDesc(e, t) {
          let a = new FormData();
          a.append("description", t), this.EditProblem(e, a);
        }
        EditProblemSchemas(e, t) {
          let a = new FormData();
          a.append("schemaids", t.join(",")), this.EditProblem(e, a);
        }
        EditProblem(e, t) {
          return (
            t.append("sessionid", c.De.SESSIONID),
            t.append("problemid", e.toString()),
            S()
              .post(`${c.De.PARTNER_BASE_URL}steamml/edit_problem`, t)
              .then(() => {
                this.m_asyncProblemDetails.getAsyncDataWrapper(e).expireData();
              })
          );
        }
        DeleteProblem(e) {
          let t = new FormData();
          return (
            t.append("sessionid", c.De.SESSIONID),
            t.append("problemid", e.toString()),
            S()
              .post(`${c.De.PARTNER_BASE_URL}steamml/delete_problem`, t)
              .then(() => {
                this.m_asyncProblemList.clearData();
              })
          );
        }
      }
      (0, d.gn)([o.LO], E.prototype, "m_asyncSchemaList", void 0),
        (0, d.gn)([o.LO], E.prototype, "m_asyncSchemaDetails", void 0),
        (0, d.gn)([o.LO], E.prototype, "m_asyncProblemList", void 0),
        (0, d.gn)([o.LO], E.prototype, "m_asyncProblemDetails", void 0),
        (0, d.gn)([o.aD], E.prototype, "Init", null);
      var D = a(29323),
        v = a(7573);
      const N = (0, D.Pi)((e) => {
        const t = "0" == (0, n.UO)().schemaid,
          a = [
            { label: "816 - Dota Beta", value: "816" },
            { label: "570 - Dota", value: "570" },
            { label: "730 - CS:GO", value: "730" },
            { label: "1015410 - SteamML", value: "1015410" },
          ],
          [m, s] = (0, l.useState)(a[0].value);
        if (!t) return null;
        const c = E.Get().GetSchemaList(parseInt(m), !0);
        if (!c) return null;
        let o = [];
        for (const e of c)
          o.push(
            l.createElement(
              r.rU,
              {
                to: M.SteamMLSchemas(e.appid, e.schemaid),
                className: i.SchemaElement,
                key: e.schemaid,
              },
              l.createElement(
                "div",
                { className: i.HorizontalSection },
                l.createElement("div", { className: i.SchemaName }, e.name),
                l.createElement(
                  "div",
                  { className: i.SchemaID },
                  l.createElement("span", { className: i.Label }, "Schema ID"),
                  " ",
                  e.schemaid
                )
              ),
              l.createElement("div", { className: i.AppID }, "AppID ", e.appid),
              l.createElement(
                "div",
                { className: i.HorizontalSection },
                l.createElement(
                  "div",
                  { className: i.RowCount },
                  l.createElement("span", { className: i.Label }, "Rows:"),
                  " ",
                  e.row_count
                ),
                l.createElement(
                  "div",
                  { className: i.KeepCount },
                  l.createElement(
                    "span",
                    { className: i.Label },
                    "Keep Count:"
                  ),
                  " ",
                  e.keep_count.toLocaleString()
                )
              )
            )
          );
        return l.createElement(
          "div",
          { className: i.SchemaList },
          l.createElement(
            "select",
            {
              className: i.SelectAppID,
              value: m,
              onChange: (e) => s(e.target.value),
            },
            a.map((e) =>
              l.createElement(
                "option",
                { key: e.value, value: e.value },
                e.label
              )
            )
          ),
          o
        );
      });
      function b(e) {
        switch (e) {
          case 1:
            return "int32";
          case 2:
            return "int64";
          case 3:
            return "bool";
          case 4:
            return "float";
          case 5:
            return "enum";
          case 6:
            return "timestamp";
        }
        return "";
      }
      function y(e) {
        switch (e) {
          case 1:
            return i.TypeInt32;
          case 2:
            return i.TypeInt64;
          case 3:
            return i.TypeBool;
          case 4:
            return i.TypeFloat;
          case 5:
            return i.TypeEnum;
          case 6:
            return i.TypeTimestamp;
        }
        return "";
      }
      function P(e, t, a) {
        let m;
        const s = t.indexOf(e.name),
          r = -1 == s && !e.count;
        return (
          e.structure
            ? (m = l.createElement(
                "div",
                {
                  className: (0, v.Z)(
                    i.SchemaDetailsElement,
                    i.SchemaDetailsStruct
                  ),
                },
                !e.count &&
                  l.createElement(
                    "div",
                    {
                      className: i.SchemaDetailsStructRow,
                      onClick: () => {
                        a(
                          r
                            ? [...t, e.name]
                            : t.slice(0, s).concat(t.slice(s + 1))
                        );
                      },
                    },
                    l.createElement(
                      "div",
                      { className: (0, v.Z)(r && i.Collapsed, i.CollapseIcon) },
                      "▼"
                    ),
                    l.createElement(
                      "div",
                      { className: i.SchemaDetailsElementBody },
                      l.createElement(
                        "div",
                        { className: i.ElementName },
                        e.name
                      ),
                      l.createElement(
                        "div",
                        { className: i.TypeName },
                        "STRUCT"
                      )
                    )
                  ),
                e.structure.member.map((e) =>
                  l.createElement(
                    "div",
                    {
                      className: (0, v.Z)(
                        r && i.IndentCollapsed,
                        i.StructIndent
                      ),
                      key: e.name,
                    },
                    P(e, t, a)
                  )
                )
              ))
            : e.array && e.array.primitive
            ? (m = l.createElement(
                "div",
                {
                  className: (0, v.Z)(
                    i.SchemaDetailsElement,
                    i.SchemaDetailsArray
                  ),
                },
                l.createElement(
                  "div",
                  {
                    className: (0, v.Z)(
                      i.SchemaDetailsElementBody,
                      y(e.array.primitive.type_info.type)
                    ),
                  },
                  l.createElement("div", { className: i.ElementName }, e.name),
                  l.createElement(
                    "div",
                    { className: i.TypeName },
                    b(e.array.primitive.type_info.type),
                    " [",
                    e.array.max_length,
                    "]"
                  )
                )
              ))
            : e.array && e.array.structure
            ? (m = l.createElement(
                "div",
                {
                  className: (0, v.Z)(
                    i.SchemaDetailsElement,
                    i.SchemaDetailsArray
                  ),
                },
                !e.count &&
                  l.createElement(
                    "div",
                    {
                      className: i.SchemaDetailsStructRow,
                      onClick: () => {
                        a(
                          r
                            ? [...t, e.name]
                            : t.slice(0, s).concat(t.slice(s + 1))
                        );
                      },
                    },
                    l.createElement(
                      "div",
                      { className: (0, v.Z)(r && i.Collapsed, i.CollapseIcon) },
                      "▼"
                    ),
                    l.createElement(
                      "div",
                      { className: i.SchemaDetailsElementBody },
                      l.createElement(
                        "div",
                        { className: i.ElementName },
                        e.name
                      ),
                      l.createElement(
                        "div",
                        { className: i.TypeName },
                        "STRUCT [",
                        e.array.max_length,
                        "]"
                      )
                    )
                  ),
                e.array.structure.member.map((e) =>
                  l.createElement(
                    "div",
                    {
                      className: (0, v.Z)(
                        r && i.IndentCollapsed,
                        i.StructIndent
                      ),
                      key: e.name,
                    },
                    P(e, t, a)
                  )
                )
              ))
            : e.primitive &&
              (m = l.createElement(
                "div",
                {
                  className: (0, v.Z)(
                    i.SchemaDetailsElement,
                    i.SchemaDetailsArray
                  ),
                },
                l.createElement(
                  "div",
                  {
                    className: (0, v.Z)(
                      i.SchemaDetailsElementBody,
                      y(e.primitive.type_info.type)
                    ),
                  },
                  l.createElement("div", { className: i.ElementName }, e.name),
                  l.createElement(
                    "div",
                    { className: i.TypeName },
                    b(e.primitive.type_info.type)
                  )
                )
              )),
          m
        );
      }
      const g = (0, D.Pi)((e) => {
          const t = (0, n.UO)(),
            a = "0" == t.schemaid,
            [m, s] = (0, l.useState)([]);
          if (a) return null;
          const c = E.Get().GetSchemaDetails(parseInt(t.appid), t.schemaid);
          return c
            ? (console.log((0, o.ZN)(c)),
              l.createElement(
                "div",
                { className: i.SchemaDetails },
                l.createElement(
                  r.rU,
                  { to: M.SteamMLSchemas("0"), className: i.Back },
                  "<< BACK"
                ),
                l.createElement(
                  "div",
                  { className: i.SchemaDetailsHeader },
                  l.createElement(
                    "div",
                    { className: i.SchemaDetailsTitle },
                    l.createElement(
                      "div",
                      { className: i.SchemaDetailsName },
                      "SCHEMA ",
                      c.name
                    ),
                    l.createElement(
                      "div",
                      { className: i.SchemaDetailsSchemaID },
                      t.schemaid
                    )
                  )
                ),
                l.createElement(
                  "div",
                  { className: i.SchemaDetailsElements },
                  P(c, m, s)
                )
              ))
            : null;
        }),
        L = (0, D.Pi)((e) =>
          l.createElement(
            "div",
            { className: i.SchemaPage },
            l.createElement(N, null),
            l.createElement(g, null)
          )
        ),
        C = (e) =>
          l.createElement(
            "div",
            {
              className: (0, v.Z)(
                i.SteamMLButton,
                e.acceptStyle && i.AcceptButton,
                e.cancelStyle && i.CancelButton,
                e.disabled && i.Disabled
              ),
              style: { minWidth: e.minWidth },
              onClick: (t) => {
                e.disabled || (e.onClick(), t.stopPropagation());
              },
            },
            l.createElement("div", { className: i.Inner }, e.children)
          ),
        I = ({ problem: e }) => (
          console.log((0, o.ZN)(e)),
          l.createElement(
            r.rU,
            { to: M.SteamMLProblems(e.problemid), className: i.ProblemEntry },
            l.createElement("div", { className: i.ProblemName }, e.name),
            !e.active &&
              l.createElement("div", { className: i.Inactive }, "Inactive"),
            l.createElement(
              "div",
              { className: i.ProblemDescription },
              e.problem_description
            ),
            l.createElement("div", { className: i.ProblemID }, e.problemid),
            l.createElement(
              "div",
              { className: i.Dates },
              l.createElement(
                "div",
                { className: i.CreatedDate },
                "Created ",
                new Date(1e3 * e.create_time).toLocaleDateString()
              ),
              l.createElement(
                "div",
                { className: i.UpdatedDate },
                "Last modified ",
                new Date(1e3 * e.update_time).toLocaleDateString()
              )
            )
          )
        ),
        f = (e) => {
          var t;
          const [a, m] = (0, l.useState)(!1),
            [s, r] = (0, l.useState)(""),
            [n, o] = (0, l.useState)(""),
            [d, p] = (0, l.useState)([]),
            S =
              null === (t = E.Get().GetSchemaList(0, !0)) || void 0 === t
                ? void 0
                : t.sort((e, t) => (e.name < t.name ? -1 : 1)),
            u =
              null == S
                ? void 0
                : S.filter((e, t, a) => 0 == t || e.name != a[t - 1].name),
            h = s.length > 0 && n.length > 0 && d.length > 0;
          return l.createElement(
            "div",
            {
              className: (0, v.Z)(
                i.AddNewProblem,
                !a && i.IsPrompt,
                a && i.IsHeader
              ),
              onClick: () => m(!0),
            },
            l.createElement(
              "div",
              { className: i.NewProblemHeader },
              l.createElement("img", {
                className: i.PlusSymbol,
                src: `${c.De.IMG_URL}webui/storeadmin/plus.png`,
              }),
              l.createElement(
                "div",
                { className: i.AddProblemHeader },
                "Add New Problem" + (a ? "" : "?")
              )
            ),
            l.createElement(
              "div",
              { className: i.NewProblemDescription },
              l.createElement(
                "div",
                { className: i.LabelValue },
                l.createElement("div", { className: i.Label }, "Name"),
                l.createElement("input", {
                  className: i.Value,
                  type: "text",
                  value: s,
                  onChange: (e) => r(e.target.value),
                })
              ),
              l.createElement(
                "div",
                { className: i.LabelValue },
                l.createElement("div", { className: i.Label }, "Description"),
                l.createElement("input", {
                  className: i.Value,
                  type: "text",
                  value: n,
                  onChange: (e) => o(e.target.value),
                })
              ),
              u &&
                l.createElement(
                  "div",
                  { className: i.SchemaListContainer },
                  l.createElement(
                    "div",
                    { className: i.SchemaSelectListTitle },
                    "Select Schemas to Include"
                  ),
                  l.createElement(
                    "div",
                    { className: i.SchemaSelectList },
                    u.map((e) => {
                      const t = -1 != d.indexOf(e.schemaid);
                      return l.createElement(
                        "div",
                        {
                          key: e.schemaid,
                          className: (0, v.Z)(i.SchemaOption, t && i.Selected),
                          onClick: () =>
                            p(
                              t
                                ? d.filter((t) => t != e.schemaid)
                                : d.concat(e.schemaid)
                            ),
                        },
                        e.name
                      );
                    })
                  )
                ),
              l.createElement(
                "div",
                { className: i.ButtonContainer },
                l.createElement(
                  C,
                  {
                    acceptStyle: !0,
                    minWidth: 100,
                    disabled: !h,
                    onClick: () => h && void E.Get().CreateProblem(s, n, d),
                  },
                  "Create"
                ),
                l.createElement(
                  C,
                  { cancelStyle: !0, minWidth: 100, onClick: () => m(!1) },
                  "Cancel"
                )
              )
            )
          );
        },
        T = (0, D.Pi)(({ schemaid: e }) => {
          const t = E.Get().GetSchemaList(0, !0);
          let a;
          if (t) {
            const m = t.filter((t) => t.schemaid == e);
            m.length > 0 && (a = m[0]);
          }
          return l.createElement(
            "div",
            { className: i.SchemaElement },
            a && l.createElement("div", { className: i.SchemaName }, a.name)
          );
        }),
        A = (0, D.Pi)(({ problem: e }) => {
          var t;
          const [a, m] = (0, l.useState)(!1),
            [s, c] = (0, l.useState)(e.name),
            [o, d] = (0, l.useState)(!1),
            [p, S] = (0, l.useState)(e.problem_description),
            [u, h] = (0, l.useState)(!1),
            [_, D] = (0, l.useState)(e.schemaid),
            N = (0, n.k6)(),
            b = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            P = parseInt(e.problemid),
            g =
              null === (t = E.Get().GetSchemaList(0, !0)) || void 0 === t
                ? void 0
                : t.sort((e, t) => (e.name < t.name ? -1 : 1)),
            L =
              null == g
                ? void 0
                : g.filter((e, t, a) => 0 == t || e.name != a[t - 1].name);
          var I;
          (I = () => {
            f(), A(), S(e.problem_description), d(!1);
          }),
            (0, l.useEffect)(() => {
              const e = (e) => {
                27 === e.keyCode && I();
              };
              return (
                window.addEventListener("keydown", e),
                () => {
                  window.removeEventListener("keydown", e);
                }
              );
            }, [I]);
          const f = () => {
              c(e.name), m(!1);
            },
            A = () => {
              S(e.problem_description), d(!1);
            },
            w = () => {
              D(e.schemaid), h(!1);
            };
          return (
            a && b.current.focus(),
            o && y.current.focus(),
            l.createElement(
              "div",
              { className: i.ProblemDetails },
              l.createElement(
                r.rU,
                { to: M.SteamMLProblems(0), className: i.BackButton },
                "<< BACK "
              ),
              l.createElement(
                "div",
                { className: i.ProblemDetailsHeaderContainer },
                l.createElement(
                  "div",
                  {
                    className: (0, v.Z)(i.ProblemName, a && i.Hidden),
                    onClick: (e) => (A(), w(), void m(!0)),
                  },
                  e.name
                ),
                l.createElement(
                  "form",
                  {
                    className: a ? void 0 : i.Hidden,
                    onSubmit: (t) => {
                      E.Get().EditProblemName(P, s),
                        (e.name = s),
                        m(!1),
                        t.preventDefault();
                    },
                  },
                  l.createElement("input", {
                    ref: b,
                    className: i.ProblemNameEditing,
                    type: "text",
                    value: s,
                    onBlur: () => f(),
                    onFocus: (e) => e.target.select(),
                    onChange: (e) => c(e.target.value),
                  })
                ),
                l.createElement(
                  "div",
                  {
                    className: (0, v.Z)(i.ProblemDescription, o && i.Hidden),
                    onClick: (e) => (f(), w(), void d(!0)),
                  },
                  e.problem_description
                ),
                l.createElement(
                  "form",
                  {
                    className: o ? void 0 : i.Hidden,
                    onSubmit: (t) => {
                      E.Get().EditProblemDesc(P, p),
                        (e.problem_description = p),
                        d(!1),
                        t.preventDefault();
                    },
                  },
                  l.createElement("input", {
                    ref: y,
                    className: i.ProblemDescEditing,
                    type: "text",
                    value: p,
                    onBlur: () => A(),
                    onFocus: (e) => e.target.select(),
                    onChange: (e) => S(e.target.value),
                  })
                ),
                l.createElement("div", { className: i.ProblemID }, e.problemid),
                l.createElement(
                  "div",
                  { className: i.Dates },
                  l.createElement(
                    "div",
                    { className: i.CreatedDate },
                    "Created ",
                    new Date(1e3 * e.create_time).toLocaleDateString()
                  ),
                  l.createElement(
                    "div",
                    { className: i.UpdatedDate },
                    "Last modified ",
                    new Date(1e3 * e.update_time).toLocaleDateString()
                  )
                )
              ),
              l.createElement(
                "div",
                { className: i.SchemaListContainer },
                l.createElement(
                  "div",
                  { className: i.SchemaListHeader },
                  "Schemas:"
                ),
                l.createElement(
                  "div",
                  {
                    className: i.SchemaListEdit,
                    onClick: () => (f(), A(), void h(!0)),
                  },
                  "Edit"
                ),
                l.createElement(
                  "div",
                  { className: (0, v.Z)(i.SchemaList, u && i.Hidden) },
                  e.schemaid.map((e) =>
                    l.createElement(T, { key: e, schemaid: e })
                  )
                ),
                l.createElement(
                  "div",
                  {
                    className: (0, v.Z)(
                      i.SchemaSelectList,
                      (!u || !L) && i.Hidden
                    ),
                  },
                  L &&
                    L.map((e) => {
                      const t = -1 != _.indexOf(e.schemaid);
                      return l.createElement(
                        "div",
                        {
                          key: e.schemaid,
                          className: (0, v.Z)(i.SchemaOption, t && i.Selected),
                          onClick: () =>
                            D(
                              t
                                ? _.filter((t) => t != e.schemaid)
                                : _.concat(e.schemaid)
                            ),
                        },
                        e.name
                      );
                    })
                ),
                u &&
                  l.createElement(
                    "div",
                    { className: i.ButtonContainer },
                    l.createElement(
                      C,
                      {
                        minWidth: 100,
                        acceptStyle: !0,
                        disabled: 0 == _.length,
                        onClick: () => (
                          E.Get().EditProblemSchemas(P, _),
                          (e.schemaid = _),
                          void h(!1)
                        ),
                      },
                      "Accept"
                    ),
                    l.createElement(
                      C,
                      { minWidth: 100, cancelStyle: !0, onClick: () => w() },
                      "Cancel"
                    )
                  ),
                l.createElement(
                  "div",
                  {
                    className: (0, v.Z)(i.DeleteLink, u && i.Hidden),
                    onClick: () => (
                      E.Get().DeleteProblem(P),
                      void N.push(M.SteamMLProblems(0))
                    ),
                  },
                  "Delete Problem"
                )
              )
            )
          );
        }),
        w = (0, D.Pi)((e) => {
          const t = (0, n.UO)(),
            a = "0" == t.problemid;
          let m, s;
          return (
            a
              ? (m = E.Get().GetProblemList())
              : (s = E.Get().GetProblemDetails(parseInt(t.problemid))),
            l.createElement(
              "div",
              { className: i.ProblemPage },
              a &&
                m &&
                l.createElement(
                  "div",
                  { className: i.ProblemListContainer },
                  m.map((e) =>
                    l.createElement(I, { key: e.problemid, problem: e })
                  ),
                  0 == m.length &&
                    l.createElement(
                      "div",
                      { className: i.NoProblems },
                      "No Existing Problems"
                    ),
                  l.createElement(f, null)
                ),
              !a &&
                s &&
                l.createElement(
                  "div",
                  { className: i.ProblemDetails },
                  l.createElement(A, { problem: s })
                )
            )
          );
        }),
        M = {
          SteamMLBase: () => "steamml",
          SteamMLSchemas: (e, t) =>
            `/schemas/${null != e ? e : "0"}/${null != t ? t : "0"}`,
          SteamMLModels: () => "/models",
          SteamMLProblems: (e) => `/problems/${null != e ? e : "0"}`,
        };
      class R extends l.Component {
        render() {
          return l.createElement(
            "div",
            { className: i.Background },
            l.createElement(
              r.VK,
              { basename: (0, s.l)() + M.SteamMLBase() },
              l.createElement(k, null),
              l.createElement(
                n.rs,
                null,
                l.createElement(n.AW, {
                  exact: !0,
                  path: M.SteamMLSchemas(":appid", ":schemaid"),
                  component: L,
                }),
                l.createElement(n.AW, {
                  exact: !0,
                  path: M.SteamMLModels(),
                  component: B,
                }),
                l.createElement(n.AW, {
                  exact: !0,
                  path: M.SteamMLProblems(":problemid"),
                  component: w,
                }),
                l.createElement(
                  n.AW,
                  { exact: !0, path: "/" },
                  l.createElement(n.l_, { to: M.SteamMLSchemas() })
                )
              )
            )
          );
        }
      }
      const k = (e) => {
          const t = (0, n.TH)(),
            a = (0, n.LX)(t.pathname, {
              path: M.SteamMLSchemas(":appid", ":schemaid"),
              exact: !0,
            }),
            m = (0, n.LX)(t.pathname, { path: M.SteamMLModels(), exact: !0 }),
            s = (0, n.LX)(t.pathname, {
              path: M.SteamMLProblems(":problemid"),
              exact: !0,
            });
          return l.createElement(
            "div",
            { className: i.Header },
            l.createElement(
              r.rU,
              {
                to: M.SteamMLSchemas(),
                className: (0, v.Z)(i.HeaderOption, a && i.Selected),
              },
              "SCHEMAS"
            ),
            l.createElement(
              r.rU,
              {
                to: M.SteamMLModels(),
                className: (0, v.Z)(i.HeaderOption, m && i.Selected),
              },
              "MODELS"
            ),
            l.createElement(
              r.rU,
              {
                to: M.SteamMLProblems(),
                className: (0, v.Z)(i.HeaderOption, s && i.Selected),
              },
              "PROBLEMS"
            )
          );
        },
        B = (e) => l.createElement("div", null, "MODEL PAGE");
    },
  },
]);