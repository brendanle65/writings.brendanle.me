// import types
import { DefaultTheme } from "styled-components";

// import libraries
import { useState, useEffect } from "react";

// import other
import { THEME } from "@constants/theme";

/**
 * Tracks whether or not the screen is of a certain device size.
 *
 * @hook
 */
export const useMediaQuery = (device: keyof DefaultTheme["screens"]) => {
  const [isDeviceWidth, setIsDeviceWidth] = useState<boolean>(false);
  const threshold = Number(THEME.screens[device].start.split("px")[0]);

  useEffect(() => {
    function handle() {
      setIsDeviceWidth(window.innerWidth >= threshold);
    }

    handle();

    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  return isDeviceWidth;
};
