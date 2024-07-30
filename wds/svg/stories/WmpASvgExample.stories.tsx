import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Example from "../../../../stories/components/Example";
import WmpASvg from "../WmpASvg";
import WmpAText from "../../text/WmpAText";
import { styled } from "@storybook/theming";

export default {
  title: "Content/WmpASvg/Examples",
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>;

const SampleContainer = styled.ul`
  border: 1px solid #f8f8f8;
`;

const SampleLayout = styled.li`
  display: inline-block;
  width: calc(100% / 6);
  padding: 20px;
  text-align: center;

  font-size: 0;
  vertical-align: top;
  box-sizing: border-box;
  overflow: hidden;
`;

const SvgWrap = styled.span`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const SvgIconList = [
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
];

export const Basic: ComponentStory<typeof Example> = () => {
  return (
    <Example
      code={
        <div>
          <SampleContainer>
            {SvgIconList.map((icon) => {
              return (
                <SampleLayout>
                  <SvgWrap>
                    <WmpASvg name={icon} iconColor={["#FF585D", "#fff"]} size={icon === "icon_close" ? "xs" : "sm"} />
                  </SvgWrap>
                  <WmpAText
                    tag="span"
                    weight="bold"
                    fontStyle="body_md"
                    style={{ display: "block", width: "100px", height: "50px", margin: "10px auto 0" }}
                  >
                    {icon}
                  </WmpAText>
                </SampleLayout>
              );
            })}
          </SampleContainer>
        </div>
      }
      codeString={`
<WmpASvg name="icon_w_ci" iconColor={["#FF585D", "#fff"]} size="sm" />
<WmpAText
  tag="span"
  weight="bold"
  fontStyle="body_md"
  style={{ display: "block", width: "100px", height: "50px", margin: "10px auto 0" }}
>
  icon_w_ci
</WmpAText>
      `}
    />
  );
};
