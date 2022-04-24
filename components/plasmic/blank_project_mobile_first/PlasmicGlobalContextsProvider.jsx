// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6kVwPwr9ygHhpKzXHFbRhu
import * as React from "react";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, cmsCredentialsProviderProps } = props;
  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId
          : undefined
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken
          : undefined
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host
          : "https://studio.plasmic.app"
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale
          : undefined
      }
    >
      {children}
    </CmsCredentialsProvider>
  );
}
