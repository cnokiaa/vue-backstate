const ut = {
    //加载中显示
    showload(e,n='加载中...'){
        console.log(1);
        const loading = e.$loading({
            lock: true,
            text: n,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    },
    //关闭加载中
    closeload(){
        loading.close();
    },
    //展示错误信息
    error(e,n='错误'){
        e.$message.error(n);
    },
    //成功展示
    success(e,n='成功'){
        e.$message({message:n, type:'success'});
    }
}

export {
    ut
}