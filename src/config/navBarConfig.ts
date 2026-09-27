import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [];

	links.push({
		name: "📄 文章",
		url: "category/article/",
	});

	links.push({
		name: "📘 教程",
		url: "category/guidance/",
		children: [
			{
				name: "linux",
				url: "category/guide/linux/",
			},
			{
				name: "软路由",
				url: "category/guide/openwrt/",
			},
		],
	});

	links.push({
		name: "🪜 STUN",
		url: "category/stun/",
	});

	links.push({
		name: "📒 笔记",
		url: "category/note/",
		children: [
			{
				name: "计算机网络",
				url: "category/note/computer-networking/",
			},
		],
	});

	links.push({
		name: "💻 编程",
		url: "category/coding/",
	});

	links.push({
		name: "🔗 实用连接",
		url: "category/link/",
	});

	links.push({
		name: "💀 渗透",
		url: "category/hack/",
		children: [
			{
				name: "CTF",
				url: "category/hack/ctf/",
			},
			{
				name: "靶场",
				url: "category/hack/range/",
			},
			{
				name: "物联网安全",
				url: "category/hack/iotsec/",
			},
		],
	});

	links.push({
		name: "🔰 其它",
		url: "category/other/",
	});
	// 文档链接
	// links.push({
	// 	name: "文档",
	// 	url: "https://docs-firefly.cuteleaf.cn",
	// 	external: true,
	// 	icon: "material-symbols:docs",
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
