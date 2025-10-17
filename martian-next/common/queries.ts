import * as Constants from "@/common/constants";

type ApiResponse = Record<string, any>;

interface GetDataArgs<TBody = unknown> {
  route: string;
  key: string | null;
  body: TBody;
}

/**
 * Posts data to the Martian API and returns the parsed JSON response when it contains the expected qualifier property.
 */
export async function getData<TBody = unknown>({ route, key, body }: GetDataArgs<TBody>, qualifier: string = "data"): Promise<ApiResponse | null> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (key) {
    headers["X-API-KEY"] = key;
  }

  try {
    const response = await fetch(route, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const result = (await response.json()) as ApiResponse | null;

    if (!result || result.error || !result[qualifier]) {
      return null;
    }

    return result;
  } catch {
    return null;
  }
}

export async function onUserListData({ key }: { key: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/data`;
  const body = {};
  return getData({ route, key, body });
}

export async function onUserDeleteData({ id, key }: { id: string; key: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/data/delete`;
  const body = { id };
  return getData({ route, key, body });
}

export async function onRefreshDocuments({ key, type, domain }: { key: string; type: string; domain: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/documents`;
  const body = { type, domain };
  return getData({ route, key, body });
}

export async function onGetDocumentById({ id }: { id: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/documents/${id}`;
  const body = {};
  return getData({ route, key: null, body });
}

export async function onUserCreateDocument({ key, type, domain }: { key: string; type: string; domain: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/documents/create`;
  const body = { type, domain };
  return getData({ route, key, body });
}

export async function onDeleteDocumentById({ id, key }: { id: string; key: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/documents/delete`;
  const body = { id };
  return getData({ route, key, body });
}

export async function onUpdateDocumentById({ id, key, data }: { id: string; key: string; data: unknown }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/documents/update`;
  const body = { id, data };
  return getData({ route, key, body });
}

export async function onPublicUserAuthenticate({ email, password }: { email: string; password: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/users/authenticate`;
  const body = { email, password };
  return getData({ route, key: null, body }, "user");
}

export async function onPublicUserForgotPassword({ email }: { email: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/users/reset-password`;
  const body = { email, source: "wireframes.internet.dev" };
  return getData({ route, key: null, body }, "success");
}

export async function onUserChangePassword({ key, password }: { key: string; password: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/users/update-viewer-password`;
  const body = { password };
  return getData({ route, key, body });
}

export async function onUserRegenerateAPIKey({ email, password }: { email: string; password: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/users/regenerate-key`;
  const body = { email, password };
  return getData({ route, key: null, body }, "user");
}

export async function onUserUnsubscribeServices({ key }: { key: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/users/subscriptions/unsubscribe`;
  const body = null;
  return getData({ route, key, body }, "user");
}

export async function onRefreshPosts({ key, type, user_id }: { key: string; type: string; user_id: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/posts`;
  const body = { type, user_id };
  return getData({ route, key, body });
}

export async function onUserCreatePost({ id, key, src, type }: { id: string; key: string; src: string; type: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/posts/create`;
  const body = { type, fields: { fileId: id, public: true }, src };
  return getData({ route, key, body });
}

export async function onUserCreateThread({ fields, key, src, type }: { fields: Record<string, unknown>; key: string; src: string; type: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/posts/create`;
  const body = { fields, src, type };
  return getData({ route, key, body });
}

export async function onUserDeletePost({ id, key }: { id: string; key: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/posts/delete`;
  const body = { id };
  return getData({ route, key, body });
}

export async function onUserListThreadReplies({ id, key, orderBy }: { id: string; key: string; orderBy?: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/posts/all-thread-replies`;
  const body = { id, orderBy };
  return getData({ route, key, body });
}

export async function onUserListThreads({ key, orderBy }: { key: string; orderBy?: string }): Promise<ApiResponse | null> {
  const route = `${Constants.API}/posts/all-threads`;
  const body = { orderBy };
  return getData({ route, key, body });
}

export async function onUserUploadDataGCS({ domain, file, key }: { domain: string; file: File; key: string }): Promise<ApiResponse | null> {
  const { name, type, size } = file;

  if (size > Constants.MAX_SIZE_BYTES) {
    return { error: "File size exceeds 15mb limit" };
  }

  const route = `${Constants.API}/data/generate-presigned-url-gcs`;
  const requestBody = { domain, type, file: name, size };
  const signedResult = await getData({ route, key, body: requestBody }, "uploadURL");

  if (!signedResult || typeof signedResult.uploadURL !== "string") {
    return null;
  }

  try {
    await fetch(signedResult.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: file,
    });
  } catch {
    return null;
  }

  return signedResult;
}

export async function onUserUploadDataS3({ domain, file, key }: { domain: string; file: File; key: string }): Promise<ApiResponse | null> {
  const { name, type, size } = file;

  if (size > Constants.MAX_SIZE_BYTES) {
    return { error: "File size exceeds 15mb limit" };
  }

  const route = `${Constants.API}/data/generate-presigned-url`;
  const requestBody = { domain, type, file: name, size };
  const signedResult = await getData({ route, key, body: requestBody }, "uploadURL");

  if (!signedResult || typeof signedResult.uploadURL !== "string") {
    return null;
  }

  try {
    await fetch(signedResult.uploadURL, {
      method: "PUT",
      body: file,
    });
  } catch {
    return null;
  }

  return signedResult;
}
