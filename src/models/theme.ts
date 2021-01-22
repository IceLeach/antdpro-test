export default {
  namespace: 'theme',
  state: {
    dark: false,
    siderWidth: 48,
  },
  effects: {
    *loadTheme(_: any, { call, put, select }: any) {
      const res = yield select((state: any) => state.theme.dark);
      return res;
    },
  },
  reducers: {
    changeTheme(_: any, { payload }: any) {
      // console.log(payload.state);
      return { dark: payload.state };
    },
    setSider(state: any, { payload }: any) {
      return { ...state, siderWidth: payload };
    },
  },
};
