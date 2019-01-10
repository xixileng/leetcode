var numUniqueEmails = function(emails) {
  let emails2 = Array.from(new Set(emails.map (email => {
    let arr = email.split('@');
    arr[0] = arr[0].replace(/./g, '').replace(/\+[\w]+/, '');
    return `${arr[0]}@${arr[1]}`
  })));
  return emails2.length
};
