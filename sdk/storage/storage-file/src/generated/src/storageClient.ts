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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageClientContext } from "./storageClientContext";

class StorageClient extends StorageClientContext {
  // Operation groups
  service: operations.Service;
  share: operations.Share;
  directory: operations.Directory;
  file: operations.File;

  /**
   * Initializes a new instance of the StorageClient class.
   * @param version Specifies the version of the operation to use for this request.
   * @param url The URL of the service account, share, directory or file that is the target of the
   * desired operation.
   * @param [options] The parameter options
   */
  constructor(version: string, url: string, options?: msRest.ServiceClientOptions) {
    super(version, url, options);
    this.service = new operations.Service(this);
    this.share = new operations.Share(this);
    this.directory = new operations.Directory(this);
    this.file = new operations.File(this);
  }
}

// Operation Specifications

export {
  StorageClient,
  StorageClientContext,
  Models as StorageModels,
  Mappers as StorageMappers
};
export * from "./operations";