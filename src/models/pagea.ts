const PageaModel = {
  namespace: 'pagea',
  state: {
    sideWidth: 48,
  },
  reducers: {
    setSider(state: any, { payload }: any) {
      return { ...state, sideWidth: payload };
    },
  },
};

export default PageaModel;
