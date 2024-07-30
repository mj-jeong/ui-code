import React from "react";
import WmpASvg from "../WmpASvg";

export default {
  title: "Content/WmpASvg/Component",
  component: WmpASvg,
  argTypes: {
    name: {
      table: {
        category: "props",
      },
      options: [
        "icon_person",
        "icon_logout",
        "icon_text_error",
        "icon_sidemenu_close",
        "icon_sidemenu_open",
        "icon_arrow_up",
        "icon_arrow_down",
        "icon_bell",
        "icon_close",
        "icon_close_circle",
        "icon_search",
        "icon_check",
        "icon_view",
        "icon_star",
        "icon_promotion_accounts",
        "icon_coupon",
        "icon_product",
        "icon_delivery",
        "icon_claim",
        "icon_advertisement",
        "icon_promotion",
        "icon_accounts",
        "icon_talk_review",
        "icon_store_brand",
        "icon_store",
        "icon_notice",
        "icon_chart",
        "icon_inquiry",
        "icon_outward",
        "icon_info_solid",
        "icon_w_ci",
        "tooltip_subtract",
        "icon_pin",
        "icon_calendar",
        "icon_talk_b",
        "icon_footer_social_kakako",
        "icon_footer_social_naver",
        "icon_footer_social_tstory",
        "icon_footer_social_youtube",
        "icon_arrow_left",
        "icon_arrow_right",
        "icon_arrow_double_left",
        "icon_arrow_double_right",
        "icon_triangle",
        "icon_time",
        "icon_time_colon",
        "icon_refresh",
        "icon_menu_down",
        "icon_menu_left",
        "icon_menu_right",
        "icon_menu_up",
      ],
      control: { type: "select" },
      description: "SVG 이름",
    },
    iconColor: {
      table: {
        category: "props",
      },
      control: { type: "object" },
      description: "SVG 컬러",
    },
  },
};

export const WmpSvg_ = (args) => <WmpASvg {...args} />;

WmpSvg_.args = {
  name: "icon_close_circle",
  iconColor: ["#FF585D", "#fff"],
  style: {},
};
