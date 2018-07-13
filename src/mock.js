import Mock from 'mockjs'
Mock.mock('http://test123.com', {//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
  'name': '@cname',
  'age|1-10': 10
})
Mock.mock('http://myname.com','post', {//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
  'data|1-2':[{
    'title':'@title',
    'article':'@csentence'
  }]
})
