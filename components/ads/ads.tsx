"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Ad1 = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(
        "/22725519965/1",
        [336, 280],
        "div-gpt-ad-1704872209622-0"
      );
      if (sl !== null) sl.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display("div-gpt-ad-1704872209622-0");
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center ">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1704872209622-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};

export const Ad2 = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(
        "/22725519965/105",
        [336, 280],
        "div-gpt-ad-1704872584176-0"
      );
      if (sl !== null) sl.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display("div-gpt-ad-1704872584176-0");
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center ">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1704872584176-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};

export const Ad3 = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(
        "/22725519965/104",
        [336, 280],
        "div-gpt-ad-1704872559267-0"
      );
      if (sl !== null) sl.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display("div-gpt-ad-1704872559267-0");
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center ">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1704872559267-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};

export const Ad4 = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(
        "/22725519965/103",
        [336, 280],
        "div-gpt-ad-1704872522269-0"
      );
      if (sl !== null) sl.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display("div-gpt-ad-1704872522269-0");
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center ">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1704872522269-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};

export const Ad5 = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(
        "/22725519965/102",
        [336, 280],
        "div-gpt-ad-1704872475416-0"
      );
      if (sl !== null) sl.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display("div-gpt-ad-1704872475416-0");
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center ">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1704872475416-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};

export const Ad6 = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(
        "/22725519965/101",
        [336, 280],
        "div-gpt-ad-1704872425926-0"
      );
      if (sl !== null) sl.addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      googletag.display("div-gpt-ad-1704872425926-0");
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center ">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1704872425926-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};
