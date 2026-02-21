import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type SpacingValue = number | string;
type ContextSpacing =
  | SpacingValue
  | Partial<Record<"top" | "right" | "bottom" | "left", SpacingValue>>;

type ContextPlacement =
  | "bottom"
  | "top"
  | "left"
  | "right"
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type ContextAnimation = "slide" | "fade" | "scale" | "grow";

type Point = { x: number; y: number };

type ContextProps = {
  showContext: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  placement?: ContextPlacement;
  spacing?: ContextSpacing;
  animationPreset?: ContextAnimation;
  growFrom?: Point;
  growVerticalOffset?: number | string;
  animationMs?: number;
  closeOnBackdropClick?: boolean;
  showBackdrop?: boolean;
  backdropOpacity?: number;
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  className?: string;
  style?: CSSProperties;
  backdropStyle?: CSSProperties;
};

type EdgeSpacing = Record<"top" | "right" | "bottom" | "left", string>;

function toCssSize(value: string | number | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

function normalizeSpacing(spacing: ContextSpacing | undefined): EdgeSpacing {
  if (spacing === undefined) {
    return { top: "0px", right: "0px", bottom: "0px", left: "0px" };
  }

  if (typeof spacing === "number" || typeof spacing === "string") {
    const value = toCssSize(spacing) || "0px";
    return { top: value, right: value, bottom: value, left: value };
  }

  return {
    top: toCssSize(spacing.top) || "0px",
    right: toCssSize(spacing.right) || "0px",
    bottom: toCssSize(spacing.bottom) || "0px",
    left: toCssSize(spacing.left) || "0px",
  };
}

function getBasePlacementStyle(placement: ContextPlacement, spacing: EdgeSpacing): CSSProperties {
  switch (placement) {
    case "bottom":
      return { left: spacing.left, right: spacing.right, bottom: spacing.bottom };
    case "top":
      return { left: spacing.left, right: spacing.right, top: spacing.top };
    case "left":
      return { left: spacing.left, top: spacing.top, bottom: spacing.bottom };
    case "right":
      return { right: spacing.right, top: spacing.top, bottom: spacing.bottom };
    case "top-left":
      return { top: spacing.top, left: spacing.left };
    case "top-right":
      return { top: spacing.top, right: spacing.right };
    case "bottom-left":
      return { bottom: spacing.bottom, left: spacing.left };
    case "bottom-right":
      return { bottom: spacing.bottom, right: spacing.right };
    case "center":
    default:
      return { top: "50%", left: "50%" };
  }
}

function getAnchorTransform(placement: ContextPlacement): string {
  return placement === "center" ? "translate(-50%, -50%)" : "";
}

function getSlideTransform(placement: ContextPlacement, animateIn: boolean): string {
  if (animateIn) return "translate(0px, 0px)";

  switch (placement) {
    case "bottom":
      return "translateY(110%)";
    case "top":
      return "translateY(-110%)";
    case "left":
      return "translateX(-110%)";
    case "right":
      return "translateX(110%)";
    case "top-left":
    case "top-right":
      return "translateY(-18px)";
    case "bottom-left":
    case "bottom-right":
      return "translateY(18px)";
    case "center":
    default:
      return "translateY(18px)";
  }
}

function composeTransform(anchor: string, dynamicTransform: string): string {
  return [anchor, dynamicTransform].filter(Boolean).join(" ");
}

function getRadius(placement: ContextPlacement): string {
  switch (placement) {
    case "bottom":
      return "1.5rem 1.5rem 0 0";
    case "top":
      return "0 0 1.5rem 1.5rem";
    case "left":
      return "0 1.5rem 1.5rem 0";
    case "right":
      return "1.5rem 0 0 1.5rem";
    default:
      return "1rem";
  }
}

export function Context({
  showContext,
  onClose,
  children,
  placement = "bottom",
  spacing = 0,
  animationPreset = "slide",
  growFrom,
  growVerticalOffset = -25,
  animationMs = 350,
  closeOnBackdropClick = true,
  showBackdrop = true,
  backdropOpacity = 1,
  width,
  maxWidth,
  height,
  maxHeight,
  className,
  style,
  backdropStyle,
}: ContextProps) {
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [frozenGrowFrom, setFrozenGrowFrom] = useState<Point | null>(null);
  const [growOffset, setGrowOffset] = useState<Point>({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showContext) {
      setMounted(true);
      setAnimateIn(false);
      setGrowOffset({ x: 0, y: 0 });

      if (animationPreset === "grow") {
        setFrozenGrowFrom(growFrom ?? null);
      } else {
        const px = setTimeout(() => setAnimateIn(true), 20);
        return () => clearTimeout(px);
      }

      return;
    }

    setAnimateIn(false);
    const timeout = setTimeout(() => {
      setMounted(false);
      setFrozenGrowFrom(null);
    }, animationMs);
    return () => clearTimeout(timeout);
  }, [showContext, animationMs, animationPreset]);

  useEffect(() => {
    if (!mounted || animationPreset !== "grow" || !frozenGrowFrom || !panelRef.current) return;

    // Re-measure for each open cycle, then start animation.
    const raf = requestAnimationFrame(() => {
      const rect = panelRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setGrowOffset({
        x: frozenGrowFrom.x - centerX,
        y: frozenGrowFrom.y - centerY,
      });

      requestAnimationFrame(() => setAnimateIn(true));
    });

    return () => cancelAnimationFrame(raf);
  }, [mounted, animationPreset, frozenGrowFrom]);

  const edgeSpacing = useMemo(() => normalizeSpacing(spacing), [spacing]);
  const isGrowAboveOrigin =
    animationPreset === "grow" && placement === "center" && Boolean(frozenGrowFrom);
  const growVerticalOffsetCss = toCssSize(growVerticalOffset) || "-25px";

  const basePlacementStyle = useMemo(
    () =>
      isGrowAboveOrigin && frozenGrowFrom
        ? { left: "50%", top: frozenGrowFrom.y + "px" }
        : getBasePlacementStyle(placement, edgeSpacing),
    [isGrowAboveOrigin, frozenGrowFrom, placement, edgeSpacing]
  );

  const anchorTransform = useMemo(
    () =>
      isGrowAboveOrigin
        ? `translate(-50%, ${growVerticalOffsetCss})`
        : getAnchorTransform(placement),
    [isGrowAboveOrigin, placement, growVerticalOffsetCss]
  );

  const isEdgeHorizontal = placement === "bottom" || placement === "top";
  const isEdgeVertical = placement === "left" || placement === "right";

  const animationStyle = useMemo((): CSSProperties => {
    if (animationPreset === "fade") {
      return {
        opacity: animateIn ? 1 : 0,
        transform: composeTransform(anchorTransform, "translate(0px, 0px)"),
      };
    }

    if (animationPreset === "scale") {
      return {
        opacity: animateIn ? 1 : 0,
        transform: composeTransform(anchorTransform, animateIn ? "scale(1)" : "scale(0.92)"),
      };
    }

    if (animationPreset === "grow") {
      const collapsed = `translate(${growOffset.x}px, ${growOffset.y}px) scale(0.08)`;
      return {
        opacity: animateIn ? 1 : 0,
        transform: composeTransform(anchorTransform, animateIn ? "translate(0px, 0px) scale(1)" : collapsed),
      };
    }

    return {
      opacity: animateIn ? 1 : 0,
      transform: composeTransform(anchorTransform, getSlideTransform(placement, animateIn)),
    };
  }, [animationPreset, animateIn, anchorTransform, placement, growOffset.x, growOffset.y]);

  if (!mounted) return null;

  return (
    <div className="relative">
      {showBackdrop && (
        <div
          onClick={closeOnBackdropClick ? onClose : undefined}
          className="fixed inset-0 z-10 transition-opacity"
          style={{
            backgroundColor: "var(--backdrop)",
            opacity: animateIn ? backdropOpacity : 0,
            transitionDuration: `${animationMs}ms`,
            ...backdropStyle,
          }}
        />
      )}

      <div
        ref={panelRef}
        className={`fixed z-20 ${className ?? ""}`}
        style={{
          backgroundColor: "var(--surface)",
          color: "var(--text)",
          border: "1px solid var(--border)",
          borderRadius: getRadius(placement),
          boxShadow: "0 12px 50px rgba(0, 0, 0, 0.28)",
          transitionProperty: "transform, opacity",
          transitionTimingFunction: "ease",
          transitionDuration: `${animationMs}ms`,
          willChange: "transform, opacity",
          width: toCssSize(width) || (isEdgeHorizontal ? undefined : "min(92vw, 30rem)"),
          maxWidth: toCssSize(maxWidth) || (isEdgeHorizontal ? undefined : "92vw"),
          height: toCssSize(height) || undefined,
          maxHeight: toCssSize(maxHeight) || (isEdgeVertical ? undefined : "90vh"),
          overflow: "auto",
          ...basePlacementStyle,
          ...animationStyle,
          ...style,
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
