/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const appId: msRest.OperationURLParameter = {
  parameterPath: "appId",
  mapper: {
    required: true,
    serializedName: "appId",
    type: {
      name: "Uuid"
    }
  }
};
export const appName: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "appName"
  ],
  mapper: {
    serializedName: "appName",
    type: {
      name: "String"
    }
  }
};
export const cChildId: msRest.OperationURLParameter = {
  parameterPath: "cChildId",
  mapper: {
    required: true,
    serializedName: "cChildId",
    type: {
      name: "Uuid"
    }
  }
};
export const cEntityId: msRest.OperationURLParameter = {
  parameterPath: "cEntityId",
  mapper: {
    required: true,
    serializedName: "cEntityId",
    type: {
      name: "Uuid"
    }
  }
};
export const clEntityId: msRest.OperationURLParameter = {
  parameterPath: "clEntityId",
  mapper: {
    required: true,
    serializedName: "clEntityId",
    type: {
      name: "Uuid"
    }
  }
};
export const culture: msRest.OperationURLParameter = {
  parameterPath: "culture",
  mapper: {
    required: true,
    serializedName: "culture",
    type: {
      name: "String"
    }
  }
};
export const deleteUtterances: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteUtterances"
  ],
  mapper: {
    serializedName: "deleteUtterances",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const domainName: msRest.OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    required: true,
    serializedName: "domainName",
    type: {
      name: "String"
    }
  }
};
export const endpoint: msRest.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "Endpoint",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const entityId: msRest.OperationURLParameter = {
  parameterPath: "entityId",
  mapper: {
    required: true,
    serializedName: "entityId",
    type: {
      name: "Uuid"
    }
  }
};
export const exampleId: msRest.OperationURLParameter = {
  parameterPath: "exampleId",
  mapper: {
    required: true,
    serializedName: "exampleId",
    type: {
      name: "Number"
    }
  }
};
export const force: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "force"
  ],
  mapper: {
    serializedName: "force",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const hChildId: msRest.OperationURLParameter = {
  parameterPath: "hChildId",
  mapper: {
    required: true,
    serializedName: "hChildId",
    type: {
      name: "Uuid"
    }
  }
};
export const hEntityId: msRest.OperationURLParameter = {
  parameterPath: "hEntityId",
  mapper: {
    required: true,
    serializedName: "hEntityId",
    type: {
      name: "Uuid"
    }
  }
};
export const intentId: msRest.OperationURLParameter = {
  parameterPath: "intentId",
  mapper: {
    required: true,
    serializedName: "intentId",
    type: {
      name: "Uuid"
    }
  }
};
export const itemId: msRest.OperationURLParameter = {
  parameterPath: "itemId",
  mapper: {
    required: true,
    serializedName: "itemId",
    type: {
      name: "Number"
    }
  }
};
export const modelId: msRest.OperationURLParameter = {
  parameterPath: "modelId",
  mapper: {
    required: true,
    serializedName: "modelId",
    type: {
      name: "String"
    }
  }
};
export const patternId: msRest.OperationURLParameter = {
  parameterPath: "patternId",
  mapper: {
    required: true,
    serializedName: "patternId",
    type: {
      name: "Uuid"
    }
  }
};
export const phraselistId: msRest.OperationURLParameter = {
  parameterPath: "phraselistId",
  mapper: {
    required: true,
    serializedName: "phraselistId",
    type: {
      name: "Number"
    }
  }
};
export const prebuiltId: msRest.OperationURLParameter = {
  parameterPath: "prebuiltId",
  mapper: {
    required: true,
    serializedName: "prebuiltId",
    type: {
      name: "Uuid"
    }
  }
};
export const regexEntityId: msRest.OperationURLParameter = {
  parameterPath: "regexEntityId",
  mapper: {
    required: true,
    serializedName: "regexEntityId",
    type: {
      name: "Uuid"
    }
  }
};
export const roleId: msRest.OperationURLParameter = {
  parameterPath: "roleId",
  mapper: {
    required: true,
    serializedName: "roleId",
    type: {
      name: "Uuid"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "skip",
    defaultValue: 0,
    constraints: {
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const slotName: msRest.OperationURLParameter = {
  parameterPath: "slotName",
  mapper: {
    required: true,
    serializedName: "slotName",
    type: {
      name: "Uuid"
    }
  }
};
export const subListId: msRest.OperationURLParameter = {
  parameterPath: "subListId",
  mapper: {
    required: true,
    serializedName: "subListId",
    type: {
      name: "Number"
    }
  }
};
export const take: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "take"
  ],
  mapper: {
    serializedName: "take",
    defaultValue: 100,
    constraints: {
      InclusiveMaximum: 500,
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const versionId0: msRest.OperationURLParameter = {
  parameterPath: "versionId",
  mapper: {
    required: true,
    serializedName: "versionId",
    type: {
      name: "String"
    }
  }
};
export const versionId1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "versionId"
  ],
  mapper: {
    serializedName: "versionId",
    type: {
      name: "String"
    }
  }
};
