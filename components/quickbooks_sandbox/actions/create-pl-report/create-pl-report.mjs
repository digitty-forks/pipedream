import app from "../../quickbooks_sandbox.app.mjs";
import common from "@pipedream/quickbooks/actions/create-pl-report/create-pl-report.mjs";

import { adjustPropDefinitions } from "../../common/utils.mjs";

const {
  name, description, type, ...others
} = common;
const props = adjustPropDefinitions(others.props, app);

export default {
  ...others,
  key: "quickbooks_sandbox-create-pl-report",
  version: "0.0.2",
  name,
  description,
  type,
  props: {
    quickbooks: app,
    ...props,
  },
};
