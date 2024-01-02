import { AndroidSelectorStrategies, IOSSelectorStrategies } from "./Strategies";

type LocatorProps = {
    locator: string;
    strategy: AndroidSelectorStrategies | IOSSelectorStrategies;
};

export type ElementLocator = {
    androidLocator?: LocatorProps;
    iosLocator?: LocatorProps;
    webLocator?: LocatorProps;
};

export interface Locator {
    locator: string;
    strategy?: string;
  }