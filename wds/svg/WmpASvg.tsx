import React from "react";
import SvgIcon, { Icons } from "../../../assets/svg/SvgIcon";
import { StyledWmpASvg } from "./Svg";
import { WMPA_SVG_COMP_NAME, getWdsKey } from "../../../constants/constants";
import { WmpASvgProps } from "../../../types";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/docs/content-wmpasvg-component--wmp-svg)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | name(string) | icon_arrow_back, icon_arrow_down, icon_arrow_right, ... | svg 아이콘 이름 |
 * | iconColor(string[]) | ['basic_solid/gray_900', '#FF585D'] or ["#FF585D", "#FFFFFF"] | svg 아이콘 색깔 |
 * | size(string) | sm, md | svg 아이콘 사이즈
 * | style(object) | { padding: '16px', ... } | 커스텀 스타일 props |
 */

const SvgIconList = Object.keys(Icons);

function WmpASvg({ name, iconColor, style, size, ...rest }: WmpASvgProps) {
  if (SvgIconList.indexOf(name) < 0) return null;
  return (
    <StyledWmpASvg
      role="icon"
      style={style}
      className="wmpASvg"
      data-wds-key={getWdsKey(WMPA_SVG_COMP_NAME, true)}
      {...rest}
    >
      <SvgIcon name={name} iconColor={iconColor} size={size} />
    </StyledWmpASvg>
  );
}

export default WmpASvg;
