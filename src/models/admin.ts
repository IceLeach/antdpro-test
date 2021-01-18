const AdminModel = {
  namespace: 'admin',
  state: {
    adminGet: {},
    roleIdListGet: {},
  },
  effects: {
    *fetchAdminGet({ payload }: any, { call, put }: any) {},
  },
  reducers: {
    setAdminGet(state: any, { payload }: any) {
      return {
        ...state,
        adminGet: payload,
      };
    },
  },
};

export default AdminModel;
