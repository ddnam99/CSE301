exports.removeBodyKeysNull = function (body) {
  Object.keys(body).forEach((index) => !body[index] && delete body[index])

  return body
}
