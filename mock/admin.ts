const notice = [
  {
    setup: 'What is the object oriented way to get wealthy?',
    punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: 'You must first understand what recursion is',
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];
const users = [
  {
    key: 1,
    id: '#001',
    name: 'user01',
    nickName: 'u1',
    state: 'Activated',
  },
  {
    key: 2,
    id: '#002',
    name: 'user02',
    nickName: 'u2',
    state: 'Inactivated',
  },
];
export default {
  'get /dev/posts': notice,
  'get /dev/users': users,
  'post /dev/users': function (req: any, res: any) {
    console.log(req.body);
    setTimeout(() => {
      res.send('ok');
    }, 2000);
  },
};
