module.exports = {
	lintOnSave: false, // 关掉eslint
	devServer: {
		port: 8214, // 端口
		overlay: {
			warnings: false,
			errors: false,
		},
		proxy: {
			"/api": {
				target: "http://192.168.0.162:19080/",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "",
				},
			},
		},
	},
	// 输出文件目录
	outputDir: "D:/wwwroot/test/eva/static_pc",
    productionSourceMap:false,//减少打包后体积
};
