/*
 * @Author: Administrator
 * @Date:   2018-01-03 13:44:06
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-04 15:11:25
 */
var mW = 600;
var mH = 600;
var mCtx = null;

var canvas = document.createElement('canvas'),
    skillsNum = document.querySelector('#skills .row .col-md-12');

skillsNum.appendChild(canvas);
canvas.height = mH;
canvas.width = mW;
mCtx = canvas.getContext('2d');

var mCount = 6; //边数
var mCenter = mW / 2; //中心点
var mRadius = mCenter - 50; //半径(减去的值用于给绘制的文本留空间)
var mAngle = Math.PI * 2 / mCount; //角度
var mColorPolygon = '#B8B8B8'; //多边形颜色

// 绘制多边形边
function drawPolygon(ctx) {
    var newWidth = skillsNum.clientWidth * 0.70;
    canvas.width = newWidth;
    canvas.height = newWidth;
    mCenter = newWidth / 2;
    if (newWidth >= 819) {
        mRadius = mCenter - 80
    } else {
        mRadius = mCenter - newWidth * 0.08;
    }
    ctx.save();

    ctx.strokeStyle = mColorPolygon;
    var r = mRadius / mCount; //单位半径
    //画6个圈
    for (var i = 0; i < mCount; i++) {
        ctx.beginPath();
        var currR = r * (i + 1); //当前半径
        //画6条边
        for (var j = 0; j < mCount; j++) {
            var x = mCenter + currR * Math.cos(mAngle * j);
            var y = mCenter + currR * Math.sin(mAngle * j);

            ctx.lineTo(x, y);
        }
        ctx.closePath()
        ctx.stroke();
    }
    ctx.restore();
}

var mColorLines = '#B8B8B8'; //顶点连线颜色

//顶点连线
function drawLines(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = mColorLines;
    for (var i = 0; i < mCount; i++) {
        var x = mCenter + mRadius * Math.cos(mAngle * i);
        var y = mCenter + mRadius * Math.sin(mAngle * i);
        ctx.moveTo(mCenter, mCenter);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
}

var mData = [
    ['CSS', 85],
    ['HTML', 85],
    ['jQuery', 80],
    ['JS', 70],
    ['React', 60],
    ['Webpack', 70]
]; //数据
var mColorText = '#000000';

//绘制文本
function drawText(ctx) {
    ctx.save();
    var fontSize = mCenter / 12 * 0.85;
    ctx.font = fontSize + 'px Microsoft Yahei';
    ctx.fillStyle = mColorText;

    for (var i = 0; i < mCount; i++) {
        var x = mCenter + mRadius * Math.cos(mAngle * i);
        var y = mCenter + mRadius * Math.sin(mAngle * i);
        //通过不同的位置，调整文本的显示位置
        if (mAngle * i >= 0 && mAngle * i <= Math.PI / 2) {
            ctx.fillText(mData[i][0], x, y + fontSize);
        } else if (mAngle * i > Math.PI / 2 && mAngle * i <= Math.PI) {
            ctx.fillText(mData[i][0], x - ctx.measureText(mData[i][0]).width, y + fontSize);
        } else if (mAngle * i > Math.PI && mAngle * i <= Math.PI * 3 / 2) {
            ctx.fillText(mData[i][0], x - ctx.measureText(mData[i][0]).width, y);
        } else {
            ctx.fillText(mData[i][0], x, y);
        }
    }

    ctx.restore();
}

//绘制数据区域
function drawRegion(ctx) {
    ctx.save();

    ctx.beginPath();
    for (var i = 0; i < mCount; i++) {
        var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 100;
        var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 100;

        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fill();
    ctx.restore();
}

drawPolygon(mCtx);
drawLines(mCtx);
drawText(mCtx);
drawRegion(mCtx);


$(window).on('resize', resizeCanvas)

function resizeCanvas() {
    skillsNum.display = 'none';
    var newWidth = skillsNum.clientWidth * 0.70;
    canvas.width = newWidth;
    canvas.height = newWidth;
    mCenter = newWidth / 2;
    if (newWidth >= 819) {
        mRadius = mCenter - 80
    } else {
        mRadius = mCenter - newWidth * 0.08;
    }
    drawPolygon(mCtx);
    drawLines(mCtx);
    drawText(mCtx);
    drawText(mCtx);
    drawRegion(mCtx);
}