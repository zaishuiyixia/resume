
var weixinBtn = document.getElementById('weixin-btn'),
    qqBtn = document.getElementById('qq-btn'),
    weiboBtn = document.getElementById('weibo-btn'),
    weixinOverlay = document.getElementsByClassName('weixin-overlay')[0],
    qqOverlay = document.getElementsByClassName('qq-overlay')[0],
    weiboOverlay = document.getElementsByClassName('weibo-overlay')[0],
    modal = document.getElementsByClassName('social-modal')[0];
weixinBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    weixinOverlay.setAttribute('style', 'display:block');
});
qqBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    qqOverlay.setAttribute('style', 'display:block');
});
weiboBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    weiboOverlay.setAttribute('style', 'display:block');
});
document.addEventListener('click', function(e) {
    weixinOverlay.setAttribute('style', 'display:none');
    qqOverlay.setAttribute('style', 'display:none');
    weiboOverlay.setAttribute('style', 'display:none');
});
