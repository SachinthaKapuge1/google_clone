export interface GoogleResponse {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: (ItemsEntity)[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: (RequestEntityOrNextPageEntity)[] | null;
  nextPage?: (RequestEntityOrNextPageEntity)[] | null;
}
export interface RequestEntityOrNextPageEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string | null;
  formattedUrl: string;
  htmlFormattedUrl: string;
  // pagemap: Pagemap;
}
// export interface Pagemap {
//   cse_thumbnail?: (CseThumbnailEntity)[] | null;
//   metatags?: (MetatagsEntity)[] | null;
//   cse_image?: (CseImageEntity)[] | null;
//   imageobject?: (ImageobjectEntity)[] | null;
//   person?: (PersonEntity)[] | null;
//   interactioncounter?: (InteractioncounterEntity)[] | null;
//   videoobject?: (VideoobjectEntity)[] | null;
//   collection?: (CollectionEntity)[] | null;
//   creativework?: (CreativeworkEntity)[] | null;
//   socialmediaposting?: (SocialmediapostingEntity)[] | null;
//   hcard?: (HcardEntity)[] | null;
//   webpage?: (WebpageEntity)[] | null;
// }
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}
// export interface MetatagsEntity {
//   msapplication-tilecolor?: string | null;
//   og:image: string;
//   og:type?: string | null;
//   twitter:card?: string | null;
//   twitter:title?: string | null;
//   theme-color?: string | null;
//   og:site_name?: string | null;
//   og:image:url?: string | null;
//   handheldfriendly?: string | null;
//   twitter:url?: string | null;
//   image:alt_text?: string | null;
//   og:title: string;
//   msapplication-tileimage?: string | null;
//   og:description?: string | null;
//   twitter:creator?: string | null;
//   og:image:secure_url?: string | null;
//   twitter:image?: string | null;
//   twitter:site?: string | null;
//   apple-mobile-web-app-status-bar-style?: string | null;
//   viewport: string;
//   twitter:description?: string | null;
//   apple-mobile-web-app-capable?: string | null;
//   mobileoptimized?: string | null;
//   og:url?: string | null;
//   twitter:image:alt?: string | null;
//   og:image:alt?: string | null;
//   og:locale?: string | null;
//   al:ios:app_name?: string | null;
//   apple-mobile-web-app-title?: string | null;
//   al:android:package?: string | null;
//   al:ios:url?: string | null;
//   al:ios:app_store_id?: string | null;
//   facebook-domain-verification?: string | null;
//   al:android:url?: string | null;
//   fb:app_id?: string | null;
//   mobile-web-app-capable?: string | null;
//   al:android:app_name?: string | null;
//   referrer?: string | null;
//   og:image:width?: string | null;
//   og:image:height?: string | null;
//   format-detection?: string | null;
//   apple-itunes-app?: string | null;
//   msvalidate.01?: string | null;
//   fb:pages?: string | null;
//   twitter:dnt?: string | null;
//   oath:guce:consent-host?: string | null;
//   title?: string | null;
//   parsely-metadata?: string | null;
//   article:publisher?: string | null;
//   article:author?: string | null;
//   parsely-type?: string | null;
// }
export interface CseImageEntity {
  src: string;
}
export interface ImageobjectEntity {
  contenturl: string;
  width: string;
  caption: string;
  thumbnailurl: string;
}
export interface PersonEntity {
  identifier: string;
  givenname: string;
  additionalname: string;
  disambiguatingdescription?: string | null;
}
export interface InteractioncounterEntity {
  userinteractioncount: string;
  interactiontype: string;
  name: string;
  url: string;
}
export interface VideoobjectEntity {
  duration: string;
  embedurl: string;
  contenturl: string;
  uploaddate: string;
  name: string;
  description: string;
  caption: string;
  thumbnailurl: string;
}
export interface CollectionEntity {
  name: string;
}
export interface CreativeworkEntity {
  name: string;
  url: string;
}
export interface SocialmediapostingEntity {
  identifier: string;
  commentcount?: string | null;
  articlebody?: string | null;
  ispartof?: string | null;
  position?: string | null;
  datecreated: string;
  datepublished: string;
  url?: string | null;
  isbasedon?: string | null;
}
export interface HcardEntity {
  url_text: string;
  bday: string;
  fn: string;
  nickname: string;
  logo: string;
  label: string;
  category: string;
  url: string;
}
export interface WebpageEntity {
  image: string;
  keywords: string;
  name: string;
  description: string;
  url: string;
}
