import { beforeEach, describe, expect, it } from "vitest";
import { getStoredTheme, storeTheme, THEME_STORAGE_KEY } from "../src/lib/theme";

beforeEach(() => {
  window.localStorage.clear();
});

describe("theme preference persistence", () => {
  it("returns null when no theme preference has been stored", () => {
    expect(getStoredTheme()).toBeNull();
  });

  it("persists an explicit light preference and reads it back", () => {
    storeTheme("light");
    expect(getStoredTheme()).toBe("light");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("persists an explicit dark preference and reads it back", () => {
    storeTheme("dark");
    expect(getStoredTheme()).toBe("dark");
  });

  it("ignores unrecognized stored values", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "solarized");
    expect(getStoredTheme()).toBeNull();
  });
});
