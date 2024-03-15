import { BuildConfig, getBuildConfig } from "./build";

export function getClientConfig(): BuildConfig | null {
  try {
    const configString = queryMeta("config");
    if (!configString) {
      return null;
    }
    const config = JSON.parse(configString) as BuildConfig;
    return config;
  } catch (error) {
    return null;
  }
}

function queryMeta(key: string, defaultValue?: string): string {
  let ret: string;
  if (document) {
    const meta = document.head.querySelector(
      `meta[name='${key}']`,
    ) as HTMLMetaElement;
    ret = meta?.content ?? "";
  } else {
    ret = defaultValue ?? "";
  }

  return ret;
}
