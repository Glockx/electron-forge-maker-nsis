import { SignOptions } from "@electron/windows-sign";
import { NsisOptions } from "app-builder-lib";

export type CodesignOptions = Omit<SignOptions, "appDirectory">;

export interface MakerNSISConfig {
  codesign?: CodesignOptions;
  updater?: {
    url: string;
    channel?: string;
    updaterCacheDirName?: string;
    publisherName?: string;
  };
  getAppBuilderConfig?: () => Promise<Record<string, any>>;
  nsisOptions?: NsisOptions;
}
