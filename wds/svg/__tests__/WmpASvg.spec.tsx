import React from "react";
import { render, screen } from "@testing-library/react";
import WmpASvg from "../WmpASvg";

const ICON_NAME = [
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

const ICON_SET = [
  {
    name: "icon_w_ci",
    iconColor: ["basic_solid", "#FF585D"],
    size: "sm",
  },
  {
    name: "icon_sidemenu_open",
    iconColor: ["#ff585D", "#fff"],
    size: "sm",
  },
  {
    name: "icon_close",
    iconColor: ["basic_solid", "#FF585D"],
    size: "xl",
  },
  {
    name: "icon_person",
    iconColor: ["#FF585D", "#fff"],
    size: "sm",
  },
];

// 예외 케이스
const ICON_TEST_SET = [
  {
    name: "icon_w_ci",
    size: "sm",
  },
  {
    name: "icon_talk_b",
    iconColor: ["basic_solid"],
    size: "",
  },
  {
    name: "icon_person",
    iconColor: ["#FF585D"],
    size: "",
  },
];

describe("WmpASvg 렌더링", () => {
  ICON_NAME.forEach((prop) => {
    it(`icon_name: ${prop}`, () => {
      render(<WmpASvg name={prop} />);
      expect(screen.getByRole("icon")).toBeInTheDocument();
    });
  });

  it("--------------------", () => {});

  ICON_SET.forEach((prop) => {
    it(`icon_set: ${prop}`, () => {
      render(<WmpASvg name={prop.name} iconColor={prop.iconColor} size={prop.size} />);
      expect(screen.getByRole("icon")).toBeInTheDocument();
    });
  });

  it("--------------------", () => {});

  ICON_TEST_SET.forEach((prop) => {
    it(`WmpASvg 예외 케이스`, () => {
      render(
        <button type="button" className="btnSatisfaction">
          <span>
            <WmpASvg {...prop} />
            만족도평가
          </span>
        </button>
      );
      expect(screen.getByRole("icon")).toBeInTheDocument();
    });
  });

  it(`fail test`, () => {
    const { container } = render(<WmpASvg name="icon_fail_test" />);
    expect(container.querySelector(".wmpASvg")).toBe(null);
  });
});
