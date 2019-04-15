const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
];

const posts = [
  {
    id: '1',
    title: 'Flutter',
    body: 'Dart',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'Javascript',
    body: 'React',
    published: true,
    author: '2'
  },
  {
    id: '3',
    title: 'Angular',
    body: 'Ngingx',
    published: true,
    author: '3'
  }
];

const comments = [
  {
    id: '21',
    text: 'Bukunya bagus banget',
    author: '1',
    post: '1'
  },
  {
    id: '33',
    text: 'Menarik!',
    author: '1',
    post: '1'
  },
  {
    id: '12',
    text: 'Semangat',
    author: '2',
    post: '2'
  },
  {
    id: '99',
    text: 'noob',
    author: '2',
    post: '2'
  }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
