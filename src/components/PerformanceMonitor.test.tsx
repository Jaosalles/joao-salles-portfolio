import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PerformanceMonitor } from "./PerformanceMonitor";

describe("PerformanceMonitor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render without crashing", () => {
    expect(() => render(<PerformanceMonitor />)).not.toThrow();
  });

  it("should not run in test environment", () => {
    // Mock process.env.NODE_ENV
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "test";

    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(<PerformanceMonitor />);

    expect(consoleSpy).not.toHaveBeenCalled();

    // Restore original env
    process.env.NODE_ENV = originalEnv;
    consoleSpy.mockRestore();
  });

  it("should run in development environment", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    // Mock paint/navigation metrics to ensure logs occur
    const originalGetEntries = performance.getEntriesByType;
    (performance as any).getEntriesByType = (type: string) => {
      if (type === "paint")
        return [{ name: "first-contentful-paint", startTime: 100 }];
      if (type === "navigation")
        return [
          {
            startTime: 0,
            domainLookupEnd: 0,
            domainLookupStart: 0,
            connectEnd: 0,
            connectStart: 0,
            responseEnd: 0,
            requestStart: 0,
            responseStart: 0,
            domContentLoadedEventEnd: 0,
            loadEventEnd: 0,
            fetchStart: 0,
          } as any,
        ];
      return [] as any;
    };

    render(<PerformanceMonitor />);
    // Trigger 'load' event so logInitialMetrics runs in test environment
    window.dispatchEvent(new Event("load"));

    // Should attempt to log something in development
    expect(consoleSpy).toHaveBeenCalled();

    (performance as any).getEntriesByType = originalGetEntries;

    process.env.NODE_ENV = originalEnv;
    consoleSpy.mockRestore();
  });

  it("should handle missing PerformanceObserver", () => {
    const originalPerformanceObserver = window.PerformanceObserver;
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";
    delete (window as any).PerformanceObserver;

    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(<PerformanceMonitor />);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining("PerformanceObserver not available")
    );

    // Restore
    window.PerformanceObserver = originalPerformanceObserver;
    process.env.NODE_ENV = originalEnv;
    consoleSpy.mockRestore();
  });

  it("should log web vitals via PerformanceObserver when available", () => {
    const originalPerformanceObserver = window.PerformanceObserver as any;
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    // Create a custom PerformanceObserver mock that triggers the callbacks
    const mockObserverCtor = vi.fn().mockImplementation((cb: any) => ({
      observe: (opts: any) => {
        if (
          opts.entryTypes &&
          opts.entryTypes.includes("largest-contentful-paint")
        ) {
          cb({ getEntries: () => [{ startTime: 123 }] });
        }
        if (opts.entryTypes && opts.entryTypes.includes("layout-shift")) {
          cb({ getEntries: () => [{ value: 0.12, hadRecentInput: false }] });
        }
        if (opts.entryTypes && opts.entryTypes.includes("first-input")) {
          cb({ getEntries: () => [{ processingStart: 200, startTime: 100 }] });
        }
      },
      disconnect: vi.fn(),
    }));

    window.PerformanceObserver = mockObserverCtor as any;

    render(<PerformanceMonitor />);

    expect(consoleSpy).toHaveBeenCalled();

    // Restore
    window.PerformanceObserver = originalPerformanceObserver;
    process.env.NODE_ENV = originalEnv;
    consoleSpy.mockRestore();
  });
});
