$().ready(function() {
    // 尾部
    $("#footer").html(
        '<footer class="footer-28">' +
        ' <div class="footer-bg-layer"> ' +
        ' <div class="container py-lg-3"> ' +
        '<div class="row footer-top-28">' +
        '<div class="col-lg-8 footer-list-28 copy-right mb-lg-0 mb-sm-5 mt-sm-0 mt-4">'+
        '<a class="navbar-brand mb-3" href="index.html">'+
        '<span class="fa fa-newspaper-o">' +
        '</span>快讯简报' +
        '</a>'+
        '<p class="copy-footer-20">京公网安备123456789号.' +
        '</p>'+
        '<p class="copy-footer-20">Copyright ©2023-2023 晨仔在北漂科技公司版权所有.' +
        '</p>'+
        '<p class="copy-footer-20">保留所有权利：声明版权所有者保留所有权利，未经授权不得复制、修改、传播或使用网站内容。' +
        '</p>'+
        '<h5 class="mt-2">' +
        '</h5>'+
        '</div>'+
        '<div class="col-lg-4 footer-list-28 copy-right mb-lg-0 mb-sm-5 mt-sm-0 mt-4">'+
        '<a class="navbar-brand mb-3" href="index.html">'+
        '<span class="fa fa-university">' +
        '</span>北京晨仔大学' +
        '</a>'+
        '<p class="copy-footer-20">姓名：晨仔' +
        '</p>'+
        '<p class="copy-footer-20">班级：计算机专业' +
        '</p>'+
        '<p class="copy-footer-20">学号：110120119' +
        '</p>'+
        '<h5 class="mt-2">' +
        '</h5>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</footer>'
    );

    // 更换图标函数
    function changeIcon(iconName) {
        $(".icon").removeClass().addClass("icon").addClass(iconName);
    }

});
