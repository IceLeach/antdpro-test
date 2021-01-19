import request from 'umi-request';
import * as r from '../services/admin';

const AdminModel = {
  namespace: 'admin',
  state: {
    // adminGet: {},
    // roleIdListGet: {},
    user: [],
  },
  effects: {
    *fetchAdminGet({ payload }: any, { call, put }: any) {
      const res = yield call(r.AdminGet);
      return res;
    },
    *fetchUserGet(_: any, { call, put }: any) {
      const res = yield call(r.UserGet);
      // console.log('e-res',res);
      yield put({ type: 'setUser', payload: res });
    },
  },
  reducers: {
    setAdminGet(state: any, { payload }: any) {
      return {
        ...state,
        adminGet: payload,
      };
    },
    setUser(state: any, { payload }: any) {
      // console.log('r-pay',payload);
      return { ...state, user: payload };
    },
  },
};

export default AdminModel;
