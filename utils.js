// curtesy of: https://gist.github.com/gordonbrander/2230317
module.exports.ID = () => Math.random().toString(36).substr(2, 7);
module.exports.isOnMobileDevice = navigator => /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
