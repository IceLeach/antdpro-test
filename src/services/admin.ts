import request from 'umi-request';

export async function AdminGet() {
  // return request('http://jsonplaceholder.typicode.com/posts/1',{
  return request('/dev/posts', {
    method: 'get',
  });
}

export async function UserGet() {
  return request('/dev/users', {
    method: 'get',
  });
}
