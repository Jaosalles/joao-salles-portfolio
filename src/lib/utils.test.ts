import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn (className utility)", () => {
  it("should merge class names correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should handle conditional classes", () => {
    expect(cn("class1", true && "class2", false && "class3")).toBe(
      "class1 class2"
    );
  });

  it("should handle falsy values", () => {
    expect(cn("class1", null, undefined, "", "class2")).toBe("class1 class2");
  });

  it("should merge Tailwind classes correctly", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("should handle complex Tailwind merges", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["class1", "class2"], "class3")).toBe("class1 class2 class3");
  });

  it("should handle objects with conditional classes", () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe(
      "class1 class3"
    );
  });

  it("should handle empty input", () => {
    expect(cn()).toBe("");
  });

  it("should handle single class", () => {
    expect(cn("single-class")).toBe("single-class");
  });

  it("should merge conflicting Tailwind utilities correctly", () => {
    expect(cn("flex justify-start", "justify-center")).toBe(
      "flex justify-center"
    );
  });

  it("should handle responsive classes", () => {
    expect(cn("md:text-lg", "lg:text-xl")).toBe("md:text-lg lg:text-xl");
  });
});
