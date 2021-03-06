import React from 'react';
 

export default class PCProducts extends React.Component {
	
	render() {
		return (
			<div>
			  <div className="mod_r_product" ne-module="modules/product/product.js">
        <div className="cm_mod_tab cm_mod_tab1 mod_all_product">
          <div className="tab_main no_login_tabmain">
            {/* 网易邮箱 */}
            <div className="cell clearfix cell_email">
              <a href="http://email.163.com/" className="logo">网易邮箱</a>
              <div className="detail">
                <h3><a href="http://email.163.com/#from=ntes_product">网易邮箱</a></h3>
                <div className="y_login">
                  未读邮件:
                  积分:
                  <a href="http://email.163.com/#from=ntes_product&ntes_mail_firstpage=compose" className="go_pro go_writemail" target="_blank" ne-href="{{myState.loginmail}}&ntes_mail_firstpage=compose"><span>写邮件</span></a>
                </div>
                <div className="no_login">
                  <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                  <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                  <a href="http://qiye.163.com/">企业邮箱</a>
                  <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                </div>
              </div>
            </div>
             
            {/* 网易游戏 */}
            <div className="cell clearfix cell_game">
              <a href="http://game.163.com/" className="logo">网易游戏</a>
              <div className="detail game_detail_success">
                {/* 默认 */}
                <div className="game_default">
                  <strong><a href="http://game.163.com/">网易游戏</a></strong>
                  <a href="http://my.163.com/">梦幻西游手游</a>
                  <a href="http://yys.163.com/">阴阳师</a>
                  <a href="http://wow.blizzard.cn/">魔兽世界</a>
                  <a href="http://hs.blizzard.cn/">炉石传说</a>
                </div>
                <div className="game_detail">
                  <strong><a href="http://game.163.com/">网易游戏</a></strong>
                  <a href="http://stzb.163.com/">率土之滨</a>
                  <a href="http://qnm.163.com/">倩女幽魂手游</a>
                  <a href="http://ow.blizzard.cn/">守望先锋</a>
                  <a href="http://tx3.163.com/">天下3</a>
                </div>
              </div>
            </div>
            
            
            {/* 全部产品 */}
            <div className="pop_all_product">
              <ul>
                <li className="first">
                  <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                  <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                  <a href="http://qiye.163.com/">企业邮箱</a>
                  <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                  <a href="http://yixin.im" className="mr0">易信</a>
                </li>
                <li>
                  <h3>
                    <a href="http://xyq.163.com/">梦幻西游</a>
                    <a href="http://xy2.163.com/">新大话2</a>
                    <a href="http://my.163.com/">梦幻西游手游</a>
                  </h3>
                  <a href="http://x3.163.com/">新大话3</a>
                  <a href="http://www.warcraftchina.com/">魔兽世界</a>
                  <a href="http://qnm.163.com/">倩女幽魂手游</a>
                  <a href="http://xqn.163.com/fab/">新倩女幽魂</a>
                  <a href="http://wh2.163.com/">武魂2</a>
                  <a href="http://dhxy.163.com/">大话西游手游</a>
                  <a href="http://ow.blizzard.cn/">守望先锋</a>
                  <a href="http://tx3.163.com/">天下3</a>
                  <a href="http://stzb.163.com/">率士之滨</a>
                  <a href="http://dt2.163.com/">大唐无双零</a>
                  <a href="http://tianyu.163.com/">天谕</a>
                  <a href="http://yys.163.com/">阴阳师</a>
                  <a href="http://zmq.163.com/">镇魔曲</a>
                  <a href="http://9.163.com/">炉石传说</a>
                </li>
                <li>
                  <h3>
                    <a href="http://y.163.com/download/index?from=wscp">美聊</a>
                    <a href="http://yuehui.163.com/?from=wscp">约会</a>
                    <a href="http://blog.163.com/?fromService">博客</a>
                    <a href="http://www.bobo.com/">BoBo直播</a>
                    <a href="http://cc.163.com/">CC语音</a>
                  </h3>
                  <a href="http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">考拉海购</a>
                  <a href="http://www.lofter.com/?act=qb163rk_20141031_12">LOFTER</a>
                  <a href="http://tie.163.com/">跟贴</a>
                  <a href="https://zc.163.com?utm_source=newspc&utm_medium=home_pc&utm_campaign=Crowdfunding&mmd=newspc&mpl=home_pc&mkw=Crowdfunding">众筹</a>
                  <a href="http://photo.163.com/">相册</a>
                  <a href="http://love.163.com/?from=wscp">花田</a>
                  <a href="http://manhua.163.com/">漫画</a>
                  <a href="http://x.163.com?source=163webproduct">青果</a>
                </li>
                <li>
                  <h3>
                    <a href="http://888.163.com/?from=tgnh2">1元购</a>
                    <a href="https://i.epay.126.net/a/8a/static/188activity.html?utm_source=163&utm_medium=recommend_pc&utm_campaign=1888cashfest&mmd=163&mpl=recommend_pc&mkw=1888cashfest">理财</a>
                    <a href="http://open.163.com/">公开课</a>
                    <a href="http://ai.163.com/?from=wangyimenhu18">网易智造</a>
                  </h3>
                  <a href="https://pop.lmlc.com/web/activity/practiceGold/index.html?from=tgn163productlist2">赚钱</a>
                  <a href="http://fa.163.com/?from=tgn163cp">贵金属</a>
                  <a href="http://caipiao.163.com/#from=www">彩票</a>
                  <a href="http://baoxian.163.com/?from=wycp">车险</a>
                  <a href="http://qian.163.com/">有钱</a>
                  <a href="http://cidian.youdao.com/">有道词典</a>
                  <a href="http://fanyi.youdao.com/?vendor=163homepage">翻译</a>
                  <a href="http://note.youdao.com/?vendor=163index">云笔记</a>
                  <a href="http://yxp.163.com/">印象派</a>
                  <a href="http://you.163.com?from=web_in_wyshouye">严选</a>
                  <a href="http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">云课堂</a>
                  <a href="http://yuedu.163.com">读小说</a>
                  <a href="http://trip.163.com/">火车票</a>
                  <a href="http://mall.163.com/?from=mmwww">商城</a>
                  <a href="http://gzy.mail.163.com/?from=163product">公正邮</a>
                  <a href="http://i.money.163.com/?imb1">财经客户端</a>
                  <a href="http://www.163.com/newsapp/">新闻客户端</a>
                  <a href="http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">大学MOOC</a>
                  <a href="http://www.weiyang.cn/">网易味央</a>
                </li>
              </ul>
              <div className="product_foot">
                <span ne-click="productAll()" title="收起">收起</span>
              </div>
            </div>
          </div>
        </div>
      </div>

			   
			</div>
		);
	};
}