import { decorate } from "@storybook/addon-actions";

export const eventDetails = decorate([
  (args: any) => {
    return args.map((arg: any) => {
      return {
        type: arg.type,
        detail: arg.detail
      };
    });
  }
]);
