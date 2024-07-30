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
      options: ["icon_arrow_down", "icon_close", "icon_outward", "icon_search"],
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
    size: {
      table: {
        category: "props",
      },
      options: ["compact", "xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
      description: "SVG 사이즈",
    },
  },
};

export const WmpSvgSize_ = (args) => <WmpASvg {...args} />;

WmpSvgSize_.args = {
  name: "icon_arrow_down",
  iconColor: ["#FF585D", "#fff"],
  style: {},
  size: "sm",
};
