import { FlowersConfig } from "./config/FlowersConfig";
import { getUrl } from "./_utils/UrlUtils";
import { HTTPRequester } from "./_utils/HTTPRequester";

export const FlowersRepository = {
  getAll: async () =>
    await HTTPRequester.get({
      url: getUrl(FlowersConfig.getAll)
    }),

  getProduct: async (productId) => {
    return await HTTPRequester.get({
      url: getUrl(FlowersConfig.getProduct, { productId })
    });
  }
};
