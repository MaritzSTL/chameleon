/// <reference path="../../../types/testing.d.ts" />

import { fixture } from "@open-wc/testing-helpers";
import { LitElement } from "lit-element";
import "../src/cha-button";

describe("Button", () => {
  let element: LitElement;

  beforeEach(async () => {
    element = await fixture(`<cha-button></cha-button>`);
  });

  it("should have tag name defined", () => {
    expect(element.tagName.toLowerCase()).toEqual("cha-button");
  });
});
