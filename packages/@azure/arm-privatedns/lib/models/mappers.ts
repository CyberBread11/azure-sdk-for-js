/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateZone: msRest.CompositeMapper = {
  serializedName: "PrivateZone",
  type: {
    name: "Composite",
    className: "PrivateZone",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      maxNumberOfRecordSets: {
        readOnly: true,
        serializedName: "properties.maxNumberOfRecordSets",
        type: {
          name: "Number"
        }
      },
      numberOfRecordSets: {
        readOnly: true,
        serializedName: "properties.numberOfRecordSets",
        type: {
          name: "Number"
        }
      },
      maxNumberOfVirtualNetworkLinks: {
        readOnly: true,
        serializedName: "properties.maxNumberOfVirtualNetworkLinks",
        type: {
          name: "Number"
        }
      },
      numberOfVirtualNetworkLinks: {
        readOnly: true,
        serializedName: "properties.numberOfVirtualNetworkLinks",
        type: {
          name: "Number"
        }
      },
      maxNumberOfVirtualNetworkLinksWithRegistration: {
        readOnly: true,
        serializedName: "properties.maxNumberOfVirtualNetworkLinksWithRegistration",
        type: {
          name: "Number"
        }
      },
      numberOfVirtualNetworkLinksWithRegistration: {
        readOnly: true,
        serializedName: "properties.numberOfVirtualNetworkLinksWithRegistration",
        type: {
          name: "Number"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: msRest.CompositeMapper = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkLink: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkLink",
  type: {
    name: "Composite",
    className: "VirtualNetworkLink",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      virtualNetwork: {
        serializedName: "properties.virtualNetwork",
        type: {
          name: "Composite",
          className: "SubResource"
        }
      },
      registrationEnabled: {
        serializedName: "properties.registrationEnabled",
        type: {
          name: "Boolean"
        }
      },
      virtualNetworkLinkState: {
        readOnly: true,
        serializedName: "properties.virtualNetworkLinkState",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ARecord: msRest.CompositeMapper = {
  serializedName: "ARecord",
  type: {
    name: "Composite",
    className: "ARecord",
    modelProperties: {
      ipv4Address: {
        serializedName: "ipv4Address",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AaaaRecord: msRest.CompositeMapper = {
  serializedName: "AaaaRecord",
  type: {
    name: "Composite",
    className: "AaaaRecord",
    modelProperties: {
      ipv6Address: {
        serializedName: "ipv6Address",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CnameRecord: msRest.CompositeMapper = {
  serializedName: "CnameRecord",
  type: {
    name: "Composite",
    className: "CnameRecord",
    modelProperties: {
      cname: {
        serializedName: "cname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MxRecord: msRest.CompositeMapper = {
  serializedName: "MxRecord",
  type: {
    name: "Composite",
    className: "MxRecord",
    modelProperties: {
      preference: {
        serializedName: "preference",
        type: {
          name: "Number"
        }
      },
      exchange: {
        serializedName: "exchange",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PtrRecord: msRest.CompositeMapper = {
  serializedName: "PtrRecord",
  type: {
    name: "Composite",
    className: "PtrRecord",
    modelProperties: {
      ptrdname: {
        serializedName: "ptrdname",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SoaRecord: msRest.CompositeMapper = {
  serializedName: "SoaRecord",
  type: {
    name: "Composite",
    className: "SoaRecord",
    modelProperties: {
      host: {
        serializedName: "host",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      serialNumber: {
        serializedName: "serialNumber",
        type: {
          name: "Number"
        }
      },
      refreshTime: {
        serializedName: "refreshTime",
        type: {
          name: "Number"
        }
      },
      retryTime: {
        serializedName: "retryTime",
        type: {
          name: "Number"
        }
      },
      expireTime: {
        serializedName: "expireTime",
        type: {
          name: "Number"
        }
      },
      minimumTtl: {
        serializedName: "minimumTtl",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SrvRecord: msRest.CompositeMapper = {
  serializedName: "SrvRecord",
  type: {
    name: "Composite",
    className: "SrvRecord",
    modelProperties: {
      priority: {
        serializedName: "priority",
        type: {
          name: "Number"
        }
      },
      weight: {
        serializedName: "weight",
        type: {
          name: "Number"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TxtRecord: msRest.CompositeMapper = {
  serializedName: "TxtRecord",
  type: {
    name: "Composite",
    className: "TxtRecord",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const RecordSet: msRest.CompositeMapper = {
  serializedName: "RecordSet",
  type: {
    name: "Composite",
    className: "RecordSet",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      ttl: {
        serializedName: "properties.ttl",
        type: {
          name: "Number"
        }
      },
      fqdn: {
        readOnly: true,
        serializedName: "properties.fqdn",
        type: {
          name: "String"
        }
      },
      isAutoRegistered: {
        readOnly: true,
        serializedName: "properties.isAutoRegistered",
        type: {
          name: "Boolean"
        }
      },
      aRecords: {
        serializedName: "properties.aRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ARecord"
            }
          }
        }
      },
      aaaaRecords: {
        serializedName: "properties.aaaaRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AaaaRecord"
            }
          }
        }
      },
      cnameRecord: {
        serializedName: "properties.cnameRecord",
        type: {
          name: "Composite",
          className: "CnameRecord"
        }
      },
      mxRecords: {
        serializedName: "properties.mxRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MxRecord"
            }
          }
        }
      },
      ptrRecords: {
        serializedName: "properties.ptrRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PtrRecord"
            }
          }
        }
      },
      soaRecord: {
        serializedName: "properties.soaRecord",
        type: {
          name: "Composite",
          className: "SoaRecord"
        }
      },
      srvRecords: {
        serializedName: "properties.srvRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SrvRecord"
            }
          }
        }
      },
      txtRecords: {
        serializedName: "properties.txtRecords",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TxtRecord"
            }
          }
        }
      }
    }
  }
};

export const PrivateZoneListResult: msRest.CompositeMapper = {
  serializedName: "PrivateZoneListResult",
  type: {
    name: "Composite",
    className: "PrivateZoneListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateZone"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkLinkListResult: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkLinkListResult",
  type: {
    name: "Composite",
    className: "VirtualNetworkLinkListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkLink"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecordSetListResult: msRest.CompositeMapper = {
  serializedName: "RecordSetListResult",
  type: {
    name: "Composite",
    className: "RecordSetListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecordSet"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
